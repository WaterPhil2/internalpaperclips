import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { GameProvider } from './context/GameContext';
import { Auth } from './components/Auth';
import { Game } from './components/Game';
import { useAuthState } from './hooks/useAuthState';
import { LoadingSpinner } from './components/LoadingSpinner';
import { Youtube } from 'lucide-react';

function AppContent() {
  const { user, loading } = useAuthState();

  if (loading) return <LoadingSpinner />;
  if (!user) return <Auth />;

  return (
    <GameProvider>
      <Game userId={user.uid} />
    </GameProvider>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <AppContent />
        </div>
        <footer className="bg-gray-900 py-4 px-6 mt-8">
          <a 
            href="https://www.youtube.com/@phillenomade" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Youtube className="w-5 h-5" />
            <span>Follow me on YouTube @phillenomade</span>
          </a>
        </footer>
      </div>
    </AuthProvider>
  );
}