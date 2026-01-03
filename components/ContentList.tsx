import React from 'react';
import { ContentJob, JobStatus } from '../models/schema';
import { StatusBadge } from './StatusBadge';
import { Button } from './Button';
import { RefreshCcw, Trash2, Edit3, ExternalLink } from 'lucide-react';

interface ContentListProps {
  jobs: ContentJob[];
  onProcess: (id: string) => void;
  onDelete: (id: string) => void;
  onSelect: (job: ContentJob) => void;
}

export const ContentList: React.FC<ContentListProps> = ({ jobs, onProcess, onDelete, onSelect }) => {
  if (jobs.length === 0) {
    return (
      <div className="text-center py-12 text-gray-600 border border-gray-800 border-dashed rounded-lg">
        <p>No content jobs in the queue.</p>
        <p className="text-sm mt-2">Add a source to begin content alchemy.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <div key={job.id} className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-gray-600 transition-colors">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="font-semibold text-gray-200">{job.title}</h3>
              <StatusBadge status={job.status} />
            </div>
            <p className="text-sm text-gray-500 truncate max-w-md font-mono">
              {job.type} • {new Date(job.createdAt).toLocaleDateString()}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {job.status === JobStatus.IDLE && (
              <Button onClick={() => onProcess(job.id)} className="w-full md:w-auto">
                <RefreshCcw className="w-4 h-4" />
                Generate
              </Button>
            )}
            
            {job.status === JobStatus.PROCESSING && (
               <Button disabled variant="secondary" className="w-full md:w-auto">
                 Generating...
               </Button>
            )}

            {job.status === JobStatus.COMPLETED && (
              <Button onClick={() => onSelect(job)} variant="secondary" className="w-full md:w-auto">
                <Edit3 className="w-4 h-4" />
                Review
              </Button>
            )}

            {job.status === JobStatus.FAILED && (
               <Button onClick={() => onProcess(job.id)} variant="danger" className="w-full md:w-auto">
                 Retry
               </Button>
            )}

            <button 
              onClick={() => onDelete(job.id)}
              className="p-2 text-gray-500 hover:text-red-400 transition-colors rounded hover:bg-red-900/20"
              title="Delete"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};