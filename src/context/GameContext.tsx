import React, { createContext, useContext, useEffect, useState } from 'react';
import { doc, onSnapshot, setDoc, increment, enableNetwork, disableNetwork } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from './AuthContext';

interface GameState {
  paperclips: number;
  funds: number;
  offline: boolean;
}

interface GameContextType extends GameState {
  makePaperclip: () => Promise<void>;
  toggleNetwork: () => Promise<void>;
}

const GameContext = createContext<GameContextType>({
  paperclips: 0,
  funds: 100,
  offline: false,
  makePaperclip: async () => {},
  toggleNetwork: async () => {}
});

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<GameState>({
    paperclips: 0,
    funds: 100,
    offline: false
  });
  const { user } = useAuth();

  const toggleNetwork = async () => {
    try {
      if (state.offline) {
        await enableNetwork(db);
      } else {
        await disableNetwork(db);
      }
      setState(prev => ({ ...prev, offline: !prev.offline }));
    } catch (error) {
      console.error('Network toggle failed:', error);
    }
  };

  useEffect(() => {
    if (!user) return;

    const userDoc = doc(db, 'users', user.uid);
    const unsubscribe = onSnapshot(
      userDoc,
      (snapshot) => {
        if (snapshot.exists()) {
          setState(prev => ({ ...prev, ...snapshot.data() }));
        } else {
          setDoc(userDoc, {
            paperclips: 0,
            funds: 100
          }).catch(console.error);
        }
      },
      (error) => {
        console.error('Game state sync error:', error);
        setState(prev => ({ ...prev, offline: true }));
      }
    );

    return () => unsubscribe();
  }, [user]);

  const makePaperclip = async () => {
    if (!user || state.funds < 0.01) return;

    try {
      const userDoc = doc(db, 'users', user.uid);
      await setDoc(userDoc, {
        paperclips: increment(1),
        funds: increment(-0.01)
      }, { merge: true });
    } catch (error) {
      console.error('Failed to make paperclip:', error);
    }
  };

  return (
    <GameContext.Provider value={{ ...state, makePaperclip, toggleNetwork }}>
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);