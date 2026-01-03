import React from 'react';
import { RawArticle, AnalyzedArticle, isAnalyzed, SeverityLevel } from '../models/schema';
import { AlertTriangle, Shield, Terminal, Tag } from 'lucide-react';

interface ArticleCardProps {
  article: RawArticle | AnalyzedArticle;
}

const SeverityBadge: React.FC<{ level: SeverityLevel, score: number }> = ({ level, score }) => {
  const colors = {
    CRITICAL: "bg-red-500/20 text-red-500 border-red-500/50",
    HIGH: "bg-orange-500/20 text-orange-400 border-orange-500/50",
    MEDIUM: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50",
    LOW: "bg-blue-500/20 text-blue-400 border-blue-500/50",
    INFO: "bg-gray-500/20 text-gray-400 border-gray-500/50",
  };

  return (
    <div className={`flex items-center gap-2 px-3 py-1 rounded border ${colors[level]} font-mono text-xs uppercase`}>
      <AlertTriangle className="w-3 h-3" />
      <span className="font-bold">{level}</span>
      <span className="opacity-75 border-l border-current pl-2 ml-1">Score: {score}/10</span>
    </div>
  );
};

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const analyzed = isAnalyzed(article) ? article : null;

  return (
    <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-5 hover:border-indigo-500/30 transition-all group relative overflow-hidden">
      {/* Decorative background element */}
      {analyzed?.severity_level === 'CRITICAL' && (
        <div className="absolute top-0 right-0 p-1">
          <div className="animate-pulse w-2 h-2 bg-red-500 rounded-full"></div>
        </div>
      )}

      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
          <Terminal className="w-3 h-3" />
          <span>{article.source}</span>
          <span>•</span>
          <span>{new Date(article.timestamp).toLocaleTimeString()}</span>
        </div>
        {analyzed && <SeverityBadge level={analyzed.severity_level} score={analyzed.severity_score} />}
      </div>

      <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-indigo-400 transition-colors">
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
          {article.title}
        </a>
      </h3>

      <div className="text-gray-400 text-sm mb-4 leading-relaxed">
        {analyzed ? (
          <p className="border-l-2 border-indigo-500/50 pl-3 italic">
            "{analyzed.summary}"
          </p>
        ) : (
          <p className="opacity-70">{article.content}</p>
        )}
      </div>

      {analyzed && (
        <div className="flex flex-wrap gap-2 mt-4">
          {analyzed.tags.map(tag => (
            <span key={tag} className="flex items-center gap-1 text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded hover:bg-gray-700 transition-colors">
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {!analyzed && (
        <div className="mt-2 text-xs text-gray-600 italic">
          Pending analysis...
        </div>
      )}
    </div>
  );
};