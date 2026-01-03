import React, { useState } from 'react';
import { Button } from './Button';
import { ContentType } from '../models/schema';

interface SourceInputProps {
  onAdd: (content: string, type: ContentType, title: string) => void;
}

export const SourceInput: React.FC<SourceInputProps> = ({ onAdd }) => {
  const [activeTab, setActiveTab] = useState<ContentType>(ContentType.TEXT);
  const [input, setInput] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !title.trim()) return;
    onAdd(input, activeTab, title);
    setInput('');
    setTitle('');
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-8">
      <div className="flex gap-4 mb-4 border-b border-gray-700 pb-2">
        <button
          onClick={() => setActiveTab(ContentType.TEXT)}
          className={`pb-2 text-sm font-medium transition-colors ${
            activeTab === ContentType.TEXT 
              ? 'text-indigo-400 border-b-2 border-indigo-400 -mb-2.5' 
              : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          Raw Text / Notes
        </button>
        <button
          onClick={() => setActiveTab(ContentType.RSS)}
          className={`pb-2 text-sm font-medium transition-colors ${
            activeTab === ContentType.RSS 
              ? 'text-indigo-400 border-b-2 border-indigo-400 -mb-2.5' 
              : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          RSS / URL
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-mono text-gray-500 mb-1 uppercase">Title / Reference</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Weekly Tech News Summary"
            className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-gray-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-gray-600"
          />
        </div>

        <div>
          <label className="block text-xs font-mono text-gray-500 mb-1 uppercase">
            {activeTab === ContentType.TEXT ? 'Paste Content' : 'Feed URL'}
          </label>
          {activeTab === ContentType.TEXT ? (
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Paste your raw notes, email content, or brain dump here..."
              rows={4}
              className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-gray-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-gray-600 resize-none"
            />
          ) : (
            <input
              type="url"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="https://example.com/feed.xml"
              className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-gray-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-gray-600"
            />
          )}
        </div>

        <div className="flex justify-end">
          <Button type="submit" disabled={!input || !title}>
            Add to Queue
          </Button>
        </div>
      </form>
    </div>
  );
};