import React from 'react';

interface ControlsProps {
  clipPrice: number;
  funds: number;
  makePaperclip: () => void;
  adjustPrice: (amount: number) => void;
}

export function Controls({ clipPrice, funds, makePaperclip, adjustPrice }: ControlsProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-bold text-white mb-4">Controls</h2>
      
      <div className="space-y-6">
        <div className="text-center">
          <button
            onClick={makePaperclip}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition duration-200"
          >
            Make Paperclip
          </button>
        </div>

        <div className="bg-gray-700 p-4 rounded">
          <h3 className="text-gray-300 text-sm mb-2">Price per Clip</h3>
          <div className="flex items-center justify-between">
            <button
              onClick={() => adjustPrice(-0.01)}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
            >
              -
            </button>
            <span className="text-xl font-bold text-white">
              ${clipPrice.toFixed(2)}
            </span>
            <button
              onClick={() => adjustPrice(0.01)}
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}