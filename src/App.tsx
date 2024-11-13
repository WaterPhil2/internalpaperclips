import React from 'react';
import { Paperclip, Factory, TrendingUp, Coins, Brain } from 'lucide-react';
import { GameProvider } from './context/GameContext';
import Header from './components/Header';
import Resources from './components/Resources';
import Manufacturing from './components/Manufacturing';
import Marketing from './components/Marketing';
import ComputationalResources from './components/ComputationalResources';

function App() {
  return (
    <GameProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
        <div className="container mx-auto px-4 py-8">
          <Header />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Resources />
            <Manufacturing />
            <Marketing />
            <ComputationalResources />
          </div>
        </div>
      </div>
    </GameProvider>
  );
}

export default App;