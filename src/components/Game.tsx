import React from 'react';
import { useGameState } from '../hooks/useGameState';
import { StatsPanel } from './StatsPanel';
import { Controls } from './Controls';
import { Upgrades } from './Upgrades';
import { Paperclip } from 'lucide-react';

export function Game({ userId }: { userId: string }) {
  const {
    paperclips,
    funds,
    clipPrice,
    marketingLevel,
    autoClippers,
    wireInches,
    wireCost,
    makePaperclip,
    buyAutoClipper,
    increaseMarketing,
    adjustPrice,
  } = useGameState();

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Paperclip className="h-12 w-12 text-blue-500" />
          <h1 className="text-3xl font-bold text-white ml-3">Universal Paperclips</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsPanel
            paperclips={paperclips}
            funds={funds}
            wireInches={wireInches}
            wireCost={wireCost}
          />
          <Controls
            clipPrice={clipPrice}
            funds={funds}
            makePaperclip={makePaperclip}
            adjustPrice={adjustPrice}
          />
          <Upgrades
            funds={funds}
            autoClippers={autoClippers}
            marketingLevel={marketingLevel}
            buyAutoClipper={buyAutoClipper}
            increaseMarketing={increaseMarketing}
          />
        </div>
      </div>
    </div>
  );
}