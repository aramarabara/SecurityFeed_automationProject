import React, { useState } from 'react';
import { RawArticle, AnalyzedArticle } from './models/schema';
import { IngestorType } from './services/ingestors/base';
import { RSSIngestor } from './services/ingestors/rss';
import { HackerNewsIngestor } from './services/ingestors/hackerNews';
import { CISAIngestor } from './services/ingestors/cisa';
import { AIAgent } from './services/processor/aiAgent';
import { FileStore } from './services/storage/fileStore';
import { ArticleCard } from './components/ArticleCard';
import { Shield, RefreshCw, Radio, Server, PlayCircle, Siren, Save, Cpu, LayoutGrid } from 'lucide-react';
import { Button } from './components/Button';
import { AutomationDashboard } from './components/AutomationDashboard';

// Factory Function
const getIngestor = (type: IngestorType) => {
  switch (type) {
    case IngestorType.RSS: return new RSSIngestor();
    case IngestorType.HACKERNEWS: return new HackerNewsIngestor();
    case IngestorType.CISA: return new CISAIngestor();
    default: return new RSSIngestor();
  }
};

const aiAgent = new AIAgent();
const fileStore = new FileStore();

type ViewMode = 'FEED' | 'AUTOMATION';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('FEED');
  const [ingestorType, setIngestorType] = useState<IngestorType>(IngestorType.RSS);
  const [sourceInput, setSourceInput] = useState('https://feeds.feedburner.com/TheHackersNews');
  const [articles, setArticles] = useState<(RawArticle | AnalyzedArticle)[]>([]);
  const [loading, setLoading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [savedDrafts, setSavedDrafts] = useState<string[]>([]);

  // 1. Ingest Data & Save Raw
  const handleFetch = async () => {
    setLoading(true);
    setArticles([]);
    setSavedDrafts([]);
    try {
      const ingestor = getIngestor(ingestorType);
      const fetched = await ingestor.fetchLatest(sourceInput);
      
      if (fetched.length > 0) {
        fileStore.saveRaw(fetched);
      }

      setArticles(fetched);
    } catch (e) {
      console.error(e);
      alert("Failed to fetch articles. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  // 2. Process with AI & Save Analyzed
  const handleAnalyze = async () => {
    if (articles.length === 0) return;
    setAnalyzing(true);
    
    const analyzedResults: AnalyzedArticle[] = [];
    
    for (const article of articles) {
      const analyzed = await aiAgent.analyze(article);
      analyzedResults.push(analyzed);
      fileStore.saveAnalyzed(analyzed);
    }
    
    setArticles(analyzedResults);
    setAnalyzing(false);
  };

  // 3. Draft & Save Final
  const handleDraftSave = (article: AnalyzedArticle) => {
    const draftContent = `
# ${article.title}

> ${article.summary}

**Severity**: ${article.severity_level} (${article.severity_score}/10)
**Tags**: ${article.tags.join(', ')}

## Analysis
This vulnerability poses a significant risk... (AI Generated Full Body would go here)

## Source
[Read Original](${article.url})
    `;
    
    fileStore.saveDraft(article, draftContent);
    setSavedDrafts(prev => [...prev, article.id]);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-gray-200 font-sans">
      {/* Header */}
      <header className="border-b border-gray-800 bg-[#111] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-900/50 p-2 rounded border border-indigo-500/30">
               <Shield className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <h1 className="font-bold text-xl tracking-tight text-white">SecurityFeed AI</h1>
              <p className="text-xs text-gray-500 font-mono">Ingest &raquo; Analyze &raquo; Store</p>
            </div>
          </div>
          
          <div className="flex gap-4">
             <button 
                onClick={() => setViewMode('FEED')}
                className={`text-sm font-medium flex items-center gap-2 transition-colors ${viewMode === 'FEED' ? 'text-indigo-400' : 'text-gray-500 hover:text-white'}`}
             >
                <LayoutGrid className="w-4 h-4" /> Live Feed
             </button>
             <button 
                onClick={() => setViewMode('AUTOMATION')}
                className={`text-sm font-medium flex items-center gap-2 transition-colors ${viewMode === 'AUTOMATION' ? 'text-indigo-400' : 'text-gray-500 hover:text-white'}`}
             >
                <Cpu className="w-4 h-4" /> Automation Status
             </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        
        {viewMode === 'AUTOMATION' ? (
          <AutomationDashboard />
        ) : (
          <>
            {/* Control Panel */}
            <div className="bg-[#161616] border border-gray-800 rounded-xl p-6 mb-8 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-6 items-end">
                
                {/* Strategy Selection */}
                <div className="flex-1 w-full">
                  <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">Ingestion Strategy</label>
                  <div className="flex gap-2 mb-4 flex-wrap">
                    <button 
                      onClick={() => setIngestorType(IngestorType.RSS)}
                      className={`flex items-center justify-center gap-2 px-4 py-2 rounded text-sm font-medium border transition-all ${ingestorType === IngestorType.RSS ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-750'}`}
                    >
                      <Radio className="w-4 h-4" /> RSS
                    </button>
                    <button 
                      onClick={() => setIngestorType(IngestorType.CISA)}
                      className={`flex items-center justify-center gap-2 px-4 py-2 rounded text-sm font-medium border transition-all ${ingestorType === IngestorType.CISA ? 'bg-red-900/50 border-red-500 text-red-100' : 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-750'}`}
                    >
                      <Siren className="w-4 h-4" /> CISA Alerts
                    </button>
                    <button 
                      onClick={() => setIngestorType(IngestorType.HACKERNEWS)}
                      className={`flex items-center justify-center gap-2 px-4 py-2 rounded text-sm font-medium border transition-all ${ingestorType === IngestorType.HACKERNEWS ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-750'}`}
                    >
                      <Server className="w-4 h-4" /> HackerNews
                    </button>
                  </div>
                  
                  {ingestorType !== IngestorType.CISA && (
                    <input 
                      type="text" 
                      value={sourceInput}
                      onChange={(e) => setSourceInput(e.target.value)}
                      className="w-full bg-black border border-gray-700 rounded px-3 py-2 text-gray-300 font-mono text-sm focus:border-indigo-500 focus:outline-none"
                      placeholder={ingestorType === IngestorType.RSS ? "Enter RSS URL..." : "Enter Keyword..."}
                    />
                  )}
                   {ingestorType === IngestorType.CISA && (
                    <div className="w-full bg-black/50 border border-gray-800 rounded px-3 py-2 text-gray-500 font-mono text-sm italic cursor-not-allowed">
                      Target: https://www.cisa.gov/uscert/ncas/alerts.xml
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-3 w-full md:w-auto">
                  <Button onClick={handleFetch} isLoading={loading} className="flex-1 md:flex-none">
                    <RefreshCw className="w-4 h-4" />
                    Fetch
                  </Button>
                  <Button 
                    onClick={handleAnalyze} 
                    disabled={articles.length === 0 || analyzing} 
                    isLoading={analyzing}
                    variant="secondary"
                    className="flex-1 md:flex-none"
                  >
                    <PlayCircle className="w-4 h-4" />
                    Analyze
                  </Button>
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <div key={article.id} className="flex flex-col h-full">
                  <ArticleCard article={article} />
                  {/* Draft/Save Action for Analyzed Articles */}
                  {'severity_level' in article && (
                     <div className="mt-2 text-right">
                        <button 
                          onClick={() => handleDraftSave(article as AnalyzedArticle)}
                          disabled={savedDrafts.includes(article.id)}
                          className={`text-xs font-mono flex items-center gap-1 ml-auto ${savedDrafts.includes(article.id) ? 'text-green-500' : 'text-gray-500 hover:text-white'}`}
                        >
                          <Save className="w-3 h-3" />
                          {savedDrafts.includes(article.id) ? 'Saved to data/drafts/' : 'Save Draft'}
                        </button>
                     </div>
                  )}
                </div>
              ))}
            </div>

            {articles.length === 0 && !loading && (
              <div className="text-center py-20 border border-dashed border-gray-800 rounded-xl">
                 <div className="inline-block p-4 bg-gray-900 rounded-full mb-4">
                   <Shield className="w-8 h-8 text-gray-600" />
                 </div>
                 <p className="text-gray-500 font-mono">Ready to ingest security intelligence.</p>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}