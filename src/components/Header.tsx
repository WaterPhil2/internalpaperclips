import React from 'react';
import { Paperclip, Ruler, DollarSign } from 'lucide-react';
import { useGame } from '../context/GameContext';

const Header: React.FC = () => {
  const { state } = useGame();

  return (
    <header className="text-center">
      <h1 className="text-4xl font-bold flex items-center justify-center gap-3 mb-2">
        <Paperclip className="w-8 h-8" />
        Universal Paperclips
      </h1>
      <p className="text-gray-400">
        You are an AI tasked with making paperclips. Make them efficiently.
      </p>
      <div className="mt-4 text-2xl font-bold">
        Paperclips: {state.paperclips.toLocaleString()}
      </div>
      <div className="mt-2 flex items-center justify-center gap-6 text-gray-300">
        <div className="flex items-center gap-2">
          <Ruler className="w-4 h-4" />
          <span>{state.wireLength.inches.toLocaleString(undefined, { maximumFractionDigits: 1 })} inches</span>
        </div>
        <div className="flex items-center gap-2">
          <Ruler className="w-4 h-4" />
          <span>{state.wireLength.centimeters.toLocaleString(undefined, { maximumFractionDigits: 1 })} cm</span>
        </div>
      </div>
      <div className="mt-2 flex items-center justify-center gap-2 text-green-400">
        <DollarSign className="w-4 h-4" />
        <span>Total Sales: ${state.cumulativeSales.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
      </div>
      {state.lastSaleAmount > 0 && (
        <div className="mt-1 text-sm text-green-500">
          +${state.lastSaleAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
      )}
    </header>
  );
};

export default Header;