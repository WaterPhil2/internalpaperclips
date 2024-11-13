import React from 'react';

interface ErrorDisplayProps {
  message: string;
}

export function ErrorDisplay({ message }: ErrorDisplayProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-red-500">
        <h1 className="text-red-500 text-xl font-bold mb-4">Error</h1>
        <p className="text-gray-300">{message}</p>
      </div>
    </div>
  );
}