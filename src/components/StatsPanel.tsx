import React from 'react';

interface StatsPanelProps {
  paperclips: number;
  funds: number;
  wireInches: number;
  wireCost: number;
}

export function StatsPanel({ paperclips = 0, funds = 0, wireInches = 0, wireCost = 0 }: StatsPanelProps) {
  const wireCentimeters = wireInches * 2.54;

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-bold text-white mb-4">Statistics</h2>
      
      <div className="space-y-4">
        <div className="bg-gray-700 p-4 rounded">
          <h3 className="text-gray-300 text-sm">Total Paperclips</h3>
          <p className="text-2xl font-bold text-white">{paperclips.toLocaleString()}</p>
        </div>

        <div className="bg-gray-700 p-4 rounded">
          <h3 className="text-gray-300 text-sm">Available Funds</h3>
          <p className="text-2xl font-bold text-white">${funds.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        </div>

        <div className="bg-gray-700 p-4 rounded">
          <h3 className="text-gray-300 text-sm">Wire</h3>
          <p className="text-lg text-white">{wireInches.toLocaleString()} inches</p>
          <p className="text-sm text-gray-400">({wireCentimeters.toLocaleString()} cm)</p>
          <p className="text-sm text-gray-400">Cost: ${wireCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} per inch</p>
        </div>
      </div>
    </div>
  );
}