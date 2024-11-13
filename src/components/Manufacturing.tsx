import React from 'react';
import { Factory } from 'lucide-react';
import { useGame } from '../context/GameContext';

const Manufacturing: React.FC = () => {
  const { state, dispatch } = useGame();

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Factory className="w-5 h-5" />
        Manufacturing
      </h2>
      <div className="space-y-4">
        <button
          onClick={() => dispatch({ type: 'MAKE_PAPERCLIP' })}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Make Paperclip
        </button>
        <div>
          <p className="text-gray-400">AutoClippers: {state.autoclippers}</p>
          <button
            onClick={() => dispatch({ type: 'BUY_AUTOCLIPPER' })}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors mt-2"
            disabled={state.funds < 100}
          >
            Buy AutoClipper ($100)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Manufacturing;