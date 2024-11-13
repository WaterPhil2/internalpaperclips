import React, { createContext, useContext, useReducer, useEffect } from 'react';

interface GameState {
  paperclips: number;
  funds: number;
  price: number;
  marketing: number;
  autoclippers: number;
  megaclippers: number;
  computationalPower: number;
  trust: number;
  operations: number;
  wireLength: {
    inches: number;
    centimeters: number;
  };
  cumulativeSales: number;
  lastSaleAmount: number;
}

const initialState: GameState = {
  paperclips: 0,
  funds: 100,
  price: 0.25,
  marketing: 0,
  autoclippers: 0,
  megaclippers: 0,
  computationalPower: 0,
  trust: 0,
  operations: 0,
  wireLength: {
    inches: 0,
    centimeters: 0,
  },
  cumulativeSales: 0,
  lastSaleAmount: 0,
};

type Action =
  | { type: 'MAKE_PAPERCLIP' }
  | { type: 'SELL_PAPERCLIPS' }
  | { type: 'ADJUST_PRICE'; payload: number }
  | { type: 'BUY_AUTOCLIPPER' }
  | { type: 'BUY_MARKETING' }
  | { type: 'INCREASE_TRUST' }
  | { type: 'UPDATE_OPERATIONS' };

const PAPERCLIP_LENGTH_INCHES = 1.5; // Standard paperclip length
const INCHES_TO_CM = 2.54;

const calculateDemand = (price: number, marketing: number) => {
  const baseDemand = Math.max(0, 1 - price / 0.5);
  return Math.floor(baseDemand * (1 + marketing * 0.1));
};

const gameReducer = (state: GameState, action: Action): GameState => {
  switch (action.type) {
    case 'MAKE_PAPERCLIP':
      return {
        ...state,
        paperclips: state.paperclips + 1,
        wireLength: {
          inches: state.wireLength.inches + PAPERCLIP_LENGTH_INCHES,
          centimeters: state.wireLength.centimeters + (PAPERCLIP_LENGTH_INCHES * INCHES_TO_CM),
        },
      };
    case 'SELL_PAPERCLIPS':
      const demand = calculateDemand(state.price, state.marketing);
      const sold = Math.min(state.paperclips, demand);
      const revenue = sold * state.price;
      
      return {
        ...state,
        paperclips: state.paperclips - sold,
        funds: state.funds + revenue,
        cumulativeSales: state.cumulativeSales + revenue,
        lastSaleAmount: revenue,
      };
    case 'ADJUST_PRICE':
      return {
        ...state,
        price: action.payload,
      };
    case 'BUY_AUTOCLIPPER':
      if (state.funds >= 100) {
        return {
          ...state,
          funds: state.funds - 100,
          autoclippers: state.autoclippers + 1,
        };
      }
      return state;
    case 'BUY_MARKETING':
      if (state.funds >= 100) {
        return {
          ...state,
          funds: state.funds - 100,
          marketing: state.marketing + 1,
        };
      }
      return state;
    case 'INCREASE_TRUST':
      return {
        ...state,
        trust: state.trust + 1,
      };
    case 'UPDATE_OPERATIONS':
      return {
        ...state,
        operations: state.operations + state.computationalPower,
      };
    default:
      return state;
  }
};

const GameContext = createContext<{
  state: GameState;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: 'SELL_PAPERCLIPS' });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      for (let i = 0; i < state.autoclippers; i++) {
        dispatch({ type: 'MAKE_PAPERCLIP' });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [state.autoclippers]);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};