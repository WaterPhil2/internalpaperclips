import React from 'react';
import { Brain } from 'lucide-react';
import { useGame } from '../context/GameContext';

const ComputationalResources: React.FC = () => {
  const { state } = useGame();

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Brain className="w-5 h-5" />
        Computational Resources
      </h2>
      <div className="space-y-4">
        <div>
          <p className="text-gray-400">Trust: {state.trust}</p>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div
              className="bg-yellow-400 h-2 rounded-full"
              style={{ width: `${(state.trust / 100) * 100}%` }}
            ></div>
          </div>
        </div>
        <div>
          <p className="text-gray-400">Operations: {state.operations.toLocaleString()}</p>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div
              className="bg-blue-400 h-2 rounded-full"
              style={{ width: `${(state.operations / 1000) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputationalResources;