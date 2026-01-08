
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Artists from './pages/Artists';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'artists'>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [currentPage]);

  return (
    <div className="relative min-h-screen text-white selection:bg-cyan-500/30 overflow-hidden">
      {/* Mystical Haze Background Layer */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        {/* We use distinct colors that represent Najeon's spectral shimmer */}
        <div className="haze-blob bg-cyan-600/40 w-[70vw] h-[70vw] -top-[20%] -left-[10%]" style={{ animationDelay: '0s' }}></div>
        <div className="haze-blob bg-purple-700/40 w-[60vw] h-[60vw] top-[10%] -right-[15%]" style={{ animationDelay: '-5s' }}></div>
        <div className="haze-blob bg-blue-800/40 w-[55vw] h-[55vw] bottom-[15%] left-[25%]" style={{ animationDelay: '-10s' }}></div>
        <div className="haze-blob bg-emerald-700/30 w-[50vw] h-[50vw] -bottom-[15%] -right-[10%]" style={{ animationDelay: '-15s' }}></div>
      </div>

      <Navbar 
        currentPage={currentPage} 
        onNavigate={(page) => setCurrentPage(page)} 
      />
      
      {/* Main Content Layer - explicitly higher z-index than haze */}
      <main className="relative z-10">
        {currentPage === 'home' ? (
          <Home onArtistsClick={() => setCurrentPage('artists')} />
        ) : (
          <Artists />
        )}
      </main>

      {/* Subtle Grain Overlay - on top of everything to give texture */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.05] contrast-150 brightness-100" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
      
      {/* Extra darkness vignette to keep content focused */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
    </div>
  );
};

export default App;
