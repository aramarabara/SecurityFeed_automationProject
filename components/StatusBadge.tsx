import React from 'react';
import { JobStatus } from '../models/schema';

export const StatusBadge: React.FC<{ status: JobStatus }> = ({ status }) => {
  const styles = {
    [JobStatus.IDLE]: 'bg-gray-800 text-gray-400 border-gray-700',
    [JobStatus.PROCESSING]: 'bg-yellow-900/30 text-yellow-500 border-yellow-800/50 animate-pulse',
    [JobStatus.COMPLETED]: 'bg-green-900/30 text-green-400 border-green-800/50',
    [JobStatus.FAILED]: 'bg-red-900/30 text-red-400 border-red-800/50',
  };

  return (
    <span className={`text-xs px-2 py-1 rounded border ${styles[status]} font-mono uppercase tracking-wider`}>
      {status}
    </span>
  );
};