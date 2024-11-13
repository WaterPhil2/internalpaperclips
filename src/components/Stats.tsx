import React from 'react';

interface StatsProps {
  paperclips: number;
  wireInches: number;
  wireCost: number;
  funds: number;
}

export function Stats({ paperclips, wireInches, wireCost, funds }: StatsProps) {
  return (
    <div className="bg-gray-700 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Statistics</h2>
      <div className="space-y-2">
        <p>Total Paperclips: {paperclips.toLocaleString()}</p>
        <p>Wire Used: {wireInches.toFixed(1)} inches ({(wireInches * 2.54).toFixed(1)} cm)</p>
        <p>Total Wire Cost: ${wireCost.toFixed(2)}</p>
        <p>Available Funds: ${funds.toFixed(2)}</p>
      </div>
    </div>
  );
}