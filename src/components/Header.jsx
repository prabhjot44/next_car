import React from 'react';
import logo from "../assets/logo.png"
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="w-full shrink-0 px-4 py-4 md:px-8 md:py-6 flex justify-between items-center z-20">
      {/* Brand Logo and Subtitle */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          {/* Custom SVG Sleek Logo curve */}
          <a href="/" className="relative w-[100px] h-[45px] md:w-[130px] md:h-[59px] flex items-center justify-center cursor-pointer">
            <img src={logo} alt='TEQ' className="w-full h-full object-contain" />
          </a>
        </div>
      </div>

      {/* Light/Dark Toggle */}
      <ThemeToggle />
    </header>
  );
}
