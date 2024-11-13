import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { GameProvider } from './context/GameContext';
import { Auth } from './components/Auth';
import { Game } from './components/Game';
import { useAuthState } from './hooks/useAuthState';
import { LoadingSpinner } from './components/LoadingSpinner';

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
      <AppContent />
    </AuthProvider>
  );
}