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
      <footer className="fixed bottom-0 w-full bg-gray-900 p-4 text-center">
        <a
          href="https://www.youtube.com/@phillenomade"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <Youtube className="w-5 h-5 mr-2" />
          Follow me on YouTube
        </a>
      </footer>
    </GameProvider>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}