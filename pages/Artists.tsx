
import React, { useEffect, useState, useRef } from 'react';
import { artists } from '../data/mockData';
import { Artist } from '../types';

interface Message {
  role: 'user' | 'bot';
  text: string;
  matchedArtistIds?: number[];
}

const Artists: React.FC = () => {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: '안녕하세요. [맥(脈)] 전시 큐레이터입니다. 원하시는 작품 스타일이나 선호하시는 기법을 말씀해 주시면 가장 잘 어울리는 작가 2인을 추천해 드리겠습니다.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isChatOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue;
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInputValue('');
    setIsLoading(true);

    try {
      // 보안을 위해 백엔드 API 서버(Port 8000 가정)로 요청을 보냅니다.
      const response = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userText,
          artist_data: artists.map(a => ({
            id: a.id,
            name: a.name,
            description: a.description,
            strengths: a.strengths
          }))
        })
      });

      if (!response.ok) throw new Error('백엔드 응답 오류');

      const result = await response.json();
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: result.reason || "요청하신 스타일에 가장 부합하는 두 분의 작가를 추천해 드립니다.",
        matchedArtistIds: result.matchedIds 
      }]);
    } catch (error) {
      console.error("Backend Chat Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "죄송합니다. 큐레이터 서버와 연결할 수 없습니다. 잠시 후 다시 시도해 주세요." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-40 pb-40 px-6 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="text-center mb-32 reveal">
        <span className="text-xs tracking-[0.5em] text-cyan-400/50 uppercase mb-6 block">The Craftsmen</span>
        <h2 className="text-5xl md:text-7xl font-serif shimmer-text mb-8">참여 작가 30인</h2>
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto"></div>
      </div>

      {/* Artist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {artists.map((artist, idx) => (
          <div 
            key={artist.id} 
            id={`artist-card-${artist.id}`}
            className="reveal group h-full" 
            style={{ transitionDelay: `${(idx % 3) * 0.1}s` }}
          >
            <div className="relative flex flex-col h-full glass-card border-white/5 hover:border-cyan-500/20 transition-all duration-1000">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={artist.workUrl} 
                  alt={`${artist.name} 작품`}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full border border-white/10 overflow-hidden ring-4 ring-black/50">
                      <img src={artist.photoUrl} alt={artist.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif text-white tracking-wide">{artist.name}</h4>
                      <p className="text-[10px] text-zinc-500 tracking-widest uppercase">{artist.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-10 line-clamp-3">
                  {artist.description}
                </p>
                <div className="mt-auto">
                  <button 
                    onClick={() => setSelectedArtist(artist)}
                    className="relative w-full py-4 text-[10px] tracking-[0.3em] uppercase text-zinc-500 hover:text-white transition-colors overflow-hidden group/btn"
                  >
                    <span className="relative z-10">Read Philosophy</span>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-cyan-400 group-hover/btn:w-full transition-all duration-700"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Chatbot Button & Panel */}
      <div className="fixed bottom-10 right-10 z-[60]">
        {isChatOpen && (
          <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] glass-card border-white/10 flex flex-col overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Chat Header */}
            <div className="p-4 border-b border-white/10 bg-white/5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                <span className="text-xs tracking-widest uppercase font-light">Exhibition Curator AI</span>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-zinc-500 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm font-light leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-cyan-500/20 text-cyan-50 border border-cyan-500/20 rounded-tr-none' 
                      : 'bg-white/5 text-zinc-300 border border-white/5 rounded-tl-none'
                  }`}>
                    {msg.text}
                    
                    {msg.matchedArtistIds && (
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        {msg.matchedArtistIds.map(id => {
                          const artist = artists.find(a => a.id === id);
                          if (!artist) return null;
                          return (
                            <div 
                              key={id} 
                              onClick={() => setSelectedArtist(artist)}
                              className="bg-black/40 border border-white/10 p-2 rounded-lg cursor-pointer hover:border-cyan-500/50 transition-all group/mini"
                            >
                              <img src={artist.workUrl} alt={artist.name} className="w-full aspect-square object-cover rounded mb-2 opacity-70 group-hover/mini:opacity-100" />
                              <p className="text-[10px] text-center text-zinc-400 group-hover/mini:text-white">{artist.name} 작가</p>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none border border-white/5">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-1 h-1 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-white/5 border-t border-white/10">
              <div className="relative">
                <input 
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="작품 스타일을 말씀해 주세요..."
                  className="w-full bg-black/40 border border-white/10 rounded-full py-2 pl-4 pr-10 text-xs focus:outline-none focus:border-cyan-500/50 transition-all"
                />
                <button 
                  onClick={handleSendMessage}
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-cyan-500 hover:text-cyan-400 disabled:text-zinc-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`w-16 h-16 rounded-full glass-card border-white/10 flex items-center justify-center group relative overflow-hidden transition-all duration-500 ${isChatOpen ? 'rotate-90 scale-110 border-cyan-500/30' : ''}`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {isChatOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-7 h-7 text-zinc-400 group-hover:text-cyan-400 transition-colors relative z-10" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
          {!isChatOpen && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
          )}
        </button>
      </div>

      {/* Philosophy Modal */}
      {selectedArtist && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-md bg-black/60 transition-all duration-500">
          <div className="glass-card max-w-lg w-full p-10 relative overflow-hidden reveal active border-white/10 animate-in zoom-in-95 duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
            
            <button 
              onClick={() => setSelectedArtist(null)}
              className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-full border border-white/10 overflow-hidden shrink-0">
                <img src={selectedArtist.photoUrl} alt={selectedArtist.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-3xl font-serif shimmer-text">{selectedArtist.name}</h3>
                <p className="text-xs tracking-widest text-zinc-500 uppercase">{selectedArtist.email}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-[10px] tracking-[0.4em] text-zinc-600 uppercase mb-4 block">Core Strengths</span>
                <div className="flex flex-wrap gap-3">
                  {selectedArtist.strengths.map((strength, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-cyan-400 font-light"
                    >
                      # {strength}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-px w-full bg-white/5"></div>

              <div>
                <span className="text-[10px] tracking-[0.4em] text-zinc-600 uppercase mb-4 block">Philosophy</span>
                <p className="text-zinc-400 leading-relaxed font-light italic">
                  "{selectedArtist.description}"
                </p>
              </div>
            </div>
            
            <div className="mt-12 flex justify-end">
              <button 
                onClick={() => setSelectedArtist(null)}
                className="px-8 py-3 bg-white/5 border border-white/10 text-[10px] tracking-widest uppercase hover:bg-white/10 hover:border-white/20 transition-all text-zinc-400 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Artists;
