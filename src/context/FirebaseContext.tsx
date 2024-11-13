import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { auth, db } from '../lib/firebase';
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth';

interface FirebaseContextType {
  user: User | null;
  db: typeof db;
  auth: typeof auth;
  loading: boolean;
}

const FirebaseContext = createContext<FirebaseContextType>({
  user: null,
  db,
  auth,
  loading: true,
});

export function FirebaseProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        try {
          const userCredential = await signInAnonymously(auth);
          setUser(userCredential.user);
        } catch (error) {
          console.error('Anonymous auth error:', error);
        }
      } else {
        setUser(user);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    db,
    auth,
    loading
  };

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
}

export const useFirebase = () => useContext(FirebaseContext);