import React from 'react';
import { Coins } from 'lucide-react';
import { useGame } from '../context/GameContext';

const Resources: React.FC = () => {
  const { state, dispatch } = useGame();

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Coins className="w-5 h-5" />
        Resources
      </h2>
      <div className="space-y-4">
        <div>
          <p className="text-gray-400">Available Funds</p>
          <p className="text-2xl font-bold">${state.funds.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-gray-400">Price per Clip</p>
          <input
            type="range"
            min="0.01"
            max="1"
            step="0.01"
            value={state.price}
            onChange={(e) => dispatch({ type: 'ADJUST_PRICE', payload: parseFloat(e.target.value) })}
            className="w-full"
          />
          <p className="text-center">${state.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Resources;