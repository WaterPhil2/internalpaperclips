import React from 'react';

interface UpgradesProps {
  funds: number;
  autoClippers: number;
  marketingLevel: number;
  buyAutoClipper: () => void;
  increaseMarketing: () => void;
}

export function Upgrades({ funds, autoClippers, marketingLevel, buyAutoClipper, increaseMarketing }: UpgradesProps) {
  const autoClipperCost = Math.floor(100 * Math.pow(1.1, autoClippers));
  const marketingCost = Math.floor(100 * Math.pow(1.1, marketingLevel));

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-bold text-white mb-4">Upgrades</h2>
      
      <div className="space-y-4">
        <div className="bg-gray-700 p-4 rounded">
          <h3 className="text-gray-300 text-sm">Auto-Clippers</h3>
          <p className="text-white mb-2">Owned: {autoClippers}</p>
          <button
            onClick={buyAutoClipper}
            disabled={funds < autoClipperCost}
            className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white py-2 px-4 rounded transition duration-200"
          >
            Buy Auto-Clipper (${autoClipperCost})
          </button>
        </div>

        <div className="bg-gray-700 p-4 rounded">
          <h3 className="text-gray-300 text-sm">Marketing</h3>
          <p className="text-white mb-2">Level: {marketingLevel}</p>
          <button
            onClick={increaseMarketing}
            disabled={funds < marketingCost}
            className="w-full bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-600 text-white py-2 px-4 rounded transition duration-200"
          >
            Upgrade Marketing (${marketingCost})
          </button>
        </div>
      </div>
    </div>
  );
}