import React from 'react';
import { SpeedometerIcon, HomeIcon, RupeeIcon } from './Icons';

export default function TelemetryPanel({ leftActiveIndex, setLeftActiveIndex, setRightActiveIndex }) {
  const controlDials = [
    { icon: <SpeedometerIcon />, index: 0, label: 'Performance' },
    { icon: <HomeIcon />, index: 1, label: 'Details' },
    { icon: <RupeeIcon />, index: 2, label: 'Pricing' }
  ];

  return (
    <section className="flex flex-col gap-6 lg:w-1/4 w-full justify-center lg:justify-start items-center lg:items-start">

      {/* Control Dials Panel */}
      <div className="flex items-center gap-6 relative w-full lg:w-auto justify-center lg:justify-start">
        {/* Curved dashed layout arc */}
        <div className="hidden lg:block absolute left-[-15px] top-1/2 -translate-y-1/2 border-l border-dashed border-[var(--text-secondary)] opacity-20 rounded-full w-[180px] h-[300px] pointer-events-none" />

        {/* Left buttons in a row on mobile, arc column on desktop */}
        <div className="flex flex-row lg:flex-col gap-4 lg:gap-5 relative z-10">
          {controlDials.map((btn) => {
            const isActive = leftActiveIndex === btn.index;
            const offsetClass = btn.index === 1 ? 'lg:translate-x-2' : 'lg:translate-x-8';

            return (
              <div key={btn.index} className="relative">
                <button
                  onClick={() => {
                    setLeftActiveIndex(isActive ? null : btn.index);
                    if (btn.index === 1) {
                      setRightActiveIndex(null);
                    }
                  }}
                  title={btn.label}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${offsetClass} ${isActive
                      ? 'glass-dial-active scale-110'
                      : 'glass-dial hover:border-[var(--accent-color)]'
                    }`}
                  aria-label={btn.label}
                >
                  {btn.icon}
                </button>
                {btn.index === 1 && leftActiveIndex !== 1 && (
                  <div className="absolute bottom-[55px] lg:bottom-auto lg:left-[70px] left-1/2 -translate-x-1/2 lg:translate-x-0 top-auto lg:top-1/2 lg:-translate-y-1/2 px-3 py-1 rounded-full bg-black/85 border border-[var(--accent-color)] text-white text-[10px] font-extrabold tracking-wider font-mono animate-pulse whitespace-nowrap z-30 shadow-[0_0_10px_rgba(232,0,13,0.3)]">
                    Click for Home
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

