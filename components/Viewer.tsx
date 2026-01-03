import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ContentJob } from '../models/schema';
import { Button } from './Button';
import { ArrowLeft, Send, Copy, Check } from 'lucide-react';

interface ViewerProps {
  job: ContentJob;
  onBack: () => void;
}

export const Viewer: React.FC<ViewerProps> = ({ job, onBack }) => {
  const [copied, setCopied] = React.useState(false);
  const [published, setPublished] = React.useState(false);

  const handleCopy = () => {
    if (job.generatedContent) {
      navigator.clipboard.writeText(job.generatedContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePublish = () => {
    // Simulation of external system connection (Redis/Velog API)
    setPublished(true);
    setTimeout(() => {
        alert("Successfully pushed to external publishing queue (Simulated).");
        setPublished(false);
    }, 1000);
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden flex flex-col h-full min-h-[600px]">
      <div className="bg-gray-900 p-4 border-b border-gray-700 flex justify-between items-center sticky top-0 z-10">
        <button onClick={onBack} className="text-gray-400 hover:text-white flex items-center gap-2 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Queue
        </button>
        
        <div className="flex gap-2">
          <Button variant="secondary" onClick={handleCopy}>
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied' : 'Copy MD'}
          </Button>
          <Button onClick={handlePublish} disabled={published}>
             <Send className="w-4 h-4" />
             {published ? 'Publishing...' : 'Publish to Velog'}
          </Button>
        </div>
      </div>

      <div className="p-8 overflow-y-auto flex-1 bg-gray-900">
        <div className="prose prose-invert prose-indigo max-w-none">
            <ReactMarkdown>{job.generatedContent || ''}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};