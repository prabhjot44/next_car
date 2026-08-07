import React from 'react';

export default function Footer({ activeLap, setActiveLap, laps }) {
  // Mapping horizontal centers (10%, 30%, 50%, 70%, 90%) to exact vertical positions
  // to ensure the SVG line passes directly through the center of the nodes.
  const lapPositions = [
    { index: 0, topPercent: 47.72 }, // y=105 out of 220
    { index: 1, topPercent: 42.59 }, // y=93.7 out of 220
    { index: 2, topPercent: 37.00 }, // y=81.4 out of 220
    { index: 3, topPercent: 39.59 }, // y=87.1 out of 220
    { index: 4, topPercent: 26.50 }  // y=58.3 out of 220
  ];

  return (
    <footer className="w-full shrink-0 grid grid-cols-1 grid-rows-1 relative z-20 bg-transparent font-sans overflow-hidden">
      {/* Dynamic track path SVG */}
      <div className="col-start-1 row-start-1 w-full overflow-hidden pointer-events-none flex items-end">
        <svg viewBox="0 0 1000 220" preserveAspectRatio="xMidYMid meet" className="w-full h-auto max-h-[268px]">
          <defs>
            {/* Fade out Area Gradient under track */}
            <linearGradient id="track-fill-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent-color)" stopOpacity="0.20" />
              <stop offset="100%" stopColor="var(--accent-color)" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Filled area below path */}
          <path
            d="M 0,110 C 50,110 50,105 100,105 C 200,105 200,93.7 300,93.7 C 400,93.7 400,81.4 500,81.4 C 600,81.4 600,87.1 700,87.1 C 800,87.1 800,58.3 900,58.3 C 950,58.3 1000,50 1000,50 L 1000,220 L 0,220 Z"
            fill="url(#track-fill-gradient)"
          />

          {/* Dashed track profile line */}
          <path
            d="M 0,110 C 50,110 50,105 100,105 C 200,105 200,93.7 300,93.7 C 400,93.7 400,81.4 500,81.4 C 600,81.4 600,87.1 700,87.1 C 800,87.1 800,58.3 900,58.3 C 950,58.3 1000,50 1000,50"
            fill="none"
            stroke="var(--accent-color)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            className="opacity-90"
          />
        </svg>
      </div>

      {/* Timeline interactable LAPs grid */}
      <div className="col-start-1 row-start-1 w-full grid grid-cols-5 z-10 h-full">
        {lapPositions.map((lapPos) => {
          // Fallback if laps array isn't populated matching lapPositions
          const lap = laps && laps[lapPos.index] ? laps[lapPos.index] : { id: `LAP 0${lapPos.index + 1}`, title: 'Zone' };
          const isActive = activeLap === lapPos.index;
          const topPercent = lapPos.topPercent;

          return (
            <div
              key={lapPos.index}
              onClick={() => setActiveLap(lapPos.index)}
              className="flex flex-col items-center justify-end group cursor-pointer relative h-full w-full"
            >
              {/* Vertical micro alignment marker dot line */}
              <div
                className={`absolute w-px border-l border-dashed transition-all duration-500 bottom-[40px] sm:bottom-[50px] lg:bottom-[75px] ${
                  isActive ? 'border-white/30' : 'border-white/10'
                }`}
                style={{
                  top: `calc(${topPercent}% + 14px)`,
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
              />

              {/* Node dot representation positioned exactly on the curve */}
              <div
                className="absolute flex flex-col items-center z-10"
                style={{
                  top: `${topPercent}%`,
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div
                  className={`rounded-full flex items-center justify-center transition-all duration-500 ${
                    isActive
                      ? 'w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] bg-[var(--accent-color)]/10 border border-[var(--accent-color)] shadow-[0_0_15px_rgba(232,0,13,0.4)]'
                      : 'w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] bg-[#1A1A1A] border border-white/5 hover:border-white/20'
                  }`}
                >
                  <div
                    className={`rounded-full transition-all duration-500 ${
                      isActive
                        ? 'w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] bg-[var(--accent-color)] shadow-[0_0_8px_rgba(232,0,13,0.8)]'
                        : 'w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] bg-[#555555] group-hover:bg-[#777]'
                    }`}
                  />
                </div>
              </div>

              {/* Lab text captions (normal flex flow at bottom) */}
              <div className="flex flex-col items-center text-center w-[120%] -ml-[10%] px-1 pb-1 sm:pb-2 lg:pb-6">
                <span
                  className={`text-[8px] sm:text-[10px] md:text-[11px] font-bold tracking-widest uppercase transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-[#888888]'
                  }`}
                >
                  {lap.id}
                </span>
                <span
                  className={`text-[9px] sm:text-[11px] md:text-[13px] font-medium tracking-wide mt-0 sm:mt-1 leading-tight transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-[#555555]'
                  }`}
                >
                  {lap.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </footer>
  );
}
