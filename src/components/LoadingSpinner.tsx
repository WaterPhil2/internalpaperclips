import React from 'react';
import { Loader2 } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
    </div>
  );
}