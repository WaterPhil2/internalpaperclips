import React from 'react';
import { TrendingUp } from 'lucide-react';
import { useGame } from '../context/GameContext';

const Marketing: React.FC = () => {
  const { state, dispatch } = useGame();

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <TrendingUp className="w-5 h-5" />
        Marketing
      </h2>
      <div className="space-y-4">
        <div>
          <p className="text-gray-400">Marketing Level: {state.marketing}</p>
          <button
            onClick={() => dispatch({ type: 'BUY_MARKETING' })}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors mt-2"
            disabled={state.funds < 100}
          >
            Increase Marketing ($100)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Marketing;