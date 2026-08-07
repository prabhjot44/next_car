import React from 'react';
import logo from "../assets/logo.png"

export default function Header({ isDarkMode, setIsDarkMode }) {
  return (
    <header className="w-full shrink-0 px-4 py-4 md:px-8 md:py-6 flex justify-between items-center z-20">
      {/* Brand Logo and Subtitle */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          {/* Custom SVG Sleek Logo curve */}
          <div className="relative w-[100px] h-[45px] md:w-[130px] md:h-[59px] flex items-center justify-center">
            <img src={logo} alt='TEQ' className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      {/* Light/Dark Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="w-16 h-8 rounded-full glass border border-[var(--border-color)] relative p-1 flex items-center cursor-pointer transition-all duration-300"
        aria-label="Toggle Dark Mode"
      >
        <div className={`absolute w-6 h-6 rounded-full bg-[var(--accent-color)] flex items-center justify-center text-white transition-all duration-300 ${isDarkMode ? 'translate-x-8' : 'translate-x-0'}`}>
          {isDarkMode ? (
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.46 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <div className="w-full flex justify-between px-2 text-[10px] pointer-events-none text-[var(--text-secondary)] font-bold">
          <span>☀</span>
          <span>🌙</span>
        </div>
      </button>
    </header>
  );
}
