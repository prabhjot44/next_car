import React from 'react';
import { BackIcon, DownloadIcon, ShareIcon, CheckIcon } from './Icons';

export default function Hero({ subtitle }) {
  return (
    <div className="w-full shrink-0 relative px-4 md:px-8 py-4 md:py-5 grid grid-cols-2 md:flex md:items-center md:justify-between gap-4 md:gap-0 bg-transparent z-30 select-none">


      {/* Left side: Back Button */}
      <div className="col-span-1 flex justify-start z-10 md:flex-1 md:order-1">
        <button
          onClick={() => window.history.back()}
          className="w-10 h-10 rounded-full glass border border-[var(--border-color)] flex items-center justify-center text-[var(--text-primary)] hover:border-[var(--accent-color)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.3)]"
          aria-label="Go Back"
        >
          <BackIcon />
        </button>
      </div>

      {/* Right side: Action Buttons */}
      <div className="col-span-1 flex justify-end items-center gap-3 md:gap-4 z-10 md:flex-1 md:order-3">
        {/* Download button */}
        <button
          className="w-10 h-10 rounded-full glass border border-[var(--border-color)] flex items-center justify-center text-[var(--text-primary)] hover:border-[var(--accent-color)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
          aria-label="Download HUD"
        >
          <DownloadIcon />
        </button>

        {/* Share button */}
        <button
          className="w-10 h-10 rounded-full glass border border-[var(--border-color)] flex items-center justify-center text-[var(--text-primary)] hover:border-[var(--accent-color)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
          aria-label="Share Design"
        >
          <ShareIcon />
        </button>

        {/* Select Button (Active red) */}
        <button
          className="w-10 h-10 rounded-full bg-[var(--accent-color)] flex items-center justify-center text-white shadow-lg shadow-[rgba(232,0,13,0.3)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
          aria-label="Select Car"
        >
          <CheckIcon />
        </button>
      </div>

      {/* Middle: Title, Subtitle and Underline */}
      <div className="col-span-2 flex flex-col items-center text-center z-10 px-4 md:flex-initial order-last md:order-2 mt-2 md:mt-0">
        <h1
          className="select-none tracking-wide text-2xl md:text-3xl lg:text-4xl"
          style={{
            fontFamily: "'Shrikhand', serif",
            fontWeight: 400,
            fontStyle: 'italic',
            lineHeight: '1.1',
            textTransform: 'uppercase',
          }}
        >
          <span className="text-[var(--text-primary)] mr-2">ENGINEERED FOR</span>
          <span className="text-[var(--accent-color)] font-sans font-black italic">PASSION</span>
        </h1>
        <p className="text-[var(--text-secondary)] text-[10px] md:text-xs font-semibold tracking-widest mt-2 uppercase font-mono">
          {subtitle}
        </p>
        {/* Red accent line */}
        <div className="w-8 h-[3px] bg-[var(--accent-color)] mt-2.5 rounded-full shadow-[0_0_10px_rgba(232,0,13,0.8)]" />
      </div>
    </div>
  );
}
