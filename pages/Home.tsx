
import React, { useEffect, useState } from 'react';
import { notices } from '../data/mockData';

interface HomeProps {
  onArtistsClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onArtistsClick }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden snap-start snap-always">
        <div 
          className="absolute inset-0 z-0 scale-110"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <img 
            src="./images/main/hero-bg.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30 grayscale contrast-125"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://picsum.photos/seed/najeon_hero/1920/1080";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>

        <div className="relative z-10 text-center px-4 reveal">
          <h2 className="text-sm md:text-lg font-light tracking-[0.8em] mb-6 text-zinc-500 uppercase">Masterpiece Tradition</h2>
          <h1 className="text-6xl md:text-9xl font-serif mb-10 shimmer-text drop-shadow-2xl">
            맥(脈)
          </h1>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-10"></div>
          <p className="max-w-xl mx-auto text-zinc-400 font-light leading-relaxed text-lg mb-16 px-6">
            천 년의 시간을 견뎌온 옻칠의 맥과<br/> 
            심해의 빛을 품은 나전이 만나 새로운 숨결을 틔웁니다.
          </p>
          <button 
            onClick={onArtistsClick}
            className="group relative px-12 py-5 overflow-hidden border border-white/10 transition-all hover:border-white/40"
          >
            <span className="relative z-10 text-xs tracking-[0.3em] uppercase">Artists Portfolio</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="text-[10px] tracking-widest text-zinc-600 uppercase">Scroll to Explore</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent"></div>
        </div>
      </section>

      {/* 2. Exhibition Overview */}
      <section className="min-h-screen flex items-center px-6 snap-start snap-always py-20 bg-zinc-950/30">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="relative group reveal">
            <div className="relative aspect-square overflow-hidden glass-card p-2 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <img 
                src="./images/main/exhibition-detail.jpg" 
                alt="Najeon Geometric Detail"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1578320339911-713292415724?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-white/5 pointer-events-none"></div>
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t border-l border-cyan-500/20 -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r border-b border-white/10 -z-10"></div>
          </div>

          <div className="reveal" style={{ transitionDelay: '0.3s' }}>
            <span className="text-cyan-400/60 text-xs tracking-widest uppercase mb-4 block">Exhibition Concept</span>
            <h3 className="text-4xl font-serif mb-10 shimmer-text">정교함이 빚어낸 영원성</h3>
            <div className="space-y-8 text-zinc-400 leading-[2] font-light text-lg">
              <p>
                수만 번의 칼질로 다듬어진 미세한 자개 조각들이 모여 
                하나의 완벽한 질서를 이룹니다. 
                사진 속 <strong>끊음질</strong>의 정교한 패턴은 단순한 장식을 넘어, 
                작가의 인내와 시간이 응축된 결정체입니다.
              </p>
              <p>
                [맥(脈)]은 이렇듯 보이지 않는 노력이 만드는 찬란한 빛에 주목합니다. 
                30인의 작가들이 각자의 방식으로 해석한 나전의 기하학적 미학을 통해, 
                전통 공예가 나아갈 현대적 방향을 제시합니다.
              </p>
              <p className="text-zinc-500 italic text-base border-l-2 border-cyan-500/20 pl-6 py-2">
                "어둠을 가르는 미세한 빛의 선들이 모여 <br/>
                가장 견고한 예술의 맥을 형성합니다."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Visit Us Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden snap-start snap-always">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-zinc-900/20 -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

        <div className="max-w-4xl mx-auto px-6 text-center reveal w-full py-20">
          <h3 className="text-3xl font-serif mb-16 shimmer-text tracking-widest">VISIT US</h3>
          <div className="glass-card p-16 space-y-8 relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="relative z-10">
              <p className="text-2xl mb-4 font-light text-white tracking-tight">갤러리 강호</p>
              <p className="text-zinc-500 font-light tracking-widest text-sm">서울시 종로구 삼일대로 32길 22-1(2층)</p>
            </div>
            
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto relative z-10"></div>
            
            <div className="relative z-10">
              <p className="text-zinc-400 font-light text-lg">2026. 06. 10 — 06. 16</p>
              <p className="text-zinc-600 text-xs mt-3 uppercase tracking-[0.4em]">9:00 AM - 06:00 PM </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent z-0"></div>
      </section>

      {/* 4. Announcement Section */}
      <section className="relative min-h-screen flex flex-col justify-center py-20 px-6 snap-start snap-always">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[100vh] bg-gradient-to-b from-transparent via-purple-900/5 to-transparent -z-10 pointer-events-none blur-[120px]"></div>
        
        <div className="max-w-4xl mx-auto w-full">
          <h3 className="text-3xl font-serif mb-16 shimmer-text text-center">ANNOUNCEMENT</h3>
          <div className="space-y-4">
            {notices.map((notice, idx) => (
              <div key={notice.id} className="reveal group" style={{ transitionDelay: `${idx * 0.15}s` }}>
                <div className="glass-card p-8 cursor-pointer border-transparent hover:border-white/10 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] tracking-widest text-zinc-600 uppercase mb-2 block">{notice.date}</span>
                      <h4 className="text-xl font-light text-zinc-300 group-hover:text-white transition-colors">{notice.title}</h4>
                    </div>
                  </div>
                  <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-700 ease-in-out">
                    <p className="mt-6 text-zinc-500 text-sm leading-relaxed border-t border-white/5 pt-6">
                      {notice.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="mt-40 border-t border-white/5 bg-black/40 text-center relative overflow-hidden py-24">
          <div className="max-w-xl mx-auto px-6 reveal relative z-10 flex flex-col items-center">
            <h2 className="font-serif text-3xl mb-8 shimmer-text">맥(脈)</h2>
            
            <div className="flex flex-col items-center gap-4 mb-10">
              <span className="text-[10px] tracking-[0.4em] text-zinc-600 uppercase">Inquiry</span>
              <a 
                href="https://instagram.com/nachil_guma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 group transition-all duration-500"
              >
                <div className="p-3 rounded-full border border-white/5 bg-white/5 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 group-hover:text-cyan-400 transition-colors">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <span className="text-zinc-400 group-hover:text-white text-sm font-light tracking-widest transition-colors">@nachil_guma</span>
              </a>
            </div>

            <p className="text-zinc-600 text-[10px] tracking-[0.2em] leading-loose uppercase max-w-xs">
              Designed to bridge the past and future of Korean craftsmanship.<br/>
              &copy; 2024 Najeon Exhibition Committee.
            </p>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Home;
