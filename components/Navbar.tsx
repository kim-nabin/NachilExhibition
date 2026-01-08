
import React from 'react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'artists') => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div 
          className="text-xl font-serif font-bold cursor-pointer shimmer-text"
          onClick={() => onNavigate('home')}
        >
          맥(脈)
        </div>
        <div className="flex gap-8 text-sm font-light tracking-widest uppercase">
          <button 
            onClick={() => onNavigate('home')}
            className={`${currentPage === 'home' ? 'text-white' : 'text-zinc-500'} hover:text-white transition-colors`}
          >
            Overview
          </button>
          <button 
            onClick={() => onNavigate('artists')}
            className={`${currentPage === 'artists' ? 'text-white' : 'text-zinc-500'} hover:text-white transition-colors`}
          >
            Artists
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
