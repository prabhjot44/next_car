import React from 'react';

export default function CarShowcaseSlider({
  activeLap,
  setActiveLap,
  carImages,
  handlePrevCar,
  handleNextCar,
  rightActiveIndex,
  activeStep,
  setActiveStep,
  carImage,
  isSimulating,
  startDeliverySimulation
}) {
  const deliverySteps = [
    { title: 'Registration', subtitle: 'Fill form for submission' },
    { title: 'Consultation', subtitle: 'Planning and pricing' },
    { title: 'Artist assign', subtitle: 'according to task' },
    { title: 'Vehicle Pickup', subtitle: 'Payment & dropoff' }
  ];

  if (rightActiveIndex === 1) {
    if (activeStep === 4) {
      // Step 5: Car and Truck
      return (
        <section className="flex flex-col items-center justify-center lg:w-1/2 w-full px-4 relative min-h-[320px] animate-fade-in">
          <div className="flex flex-col items-center mb-6 select-none">
            <span className="font-mono text-[10px] font-black tracking-widest text-[var(--accent-color)] uppercase animate-pulse">
              STAGE 5/7: VEHICLE LOADING
            </span>
            <h3 className="text-white font-bold text-sm tracking-wide uppercase mt-1">
              Transporter Dispatch
            </h3>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-[550px] mx-auto py-2">
            {/* Square container with cyan border containing circular car */}
            <div className="w-32 h-32 md:w-36 md:h-36 border-4 border-cyan-400 flex items-center justify-center bg-black/50 shadow-[0_0_20px_rgba(34,211,238,0.35)] rounded-sm animate-pulse">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border border-white/10 bg-zinc-900">
                <img src={carImage} alt="Car Delivery" className="w-full h-full object-cover scale-110" />
              </div>
            </div>

            {/* Custom SVG Truck */}
            <div className="flex-1 flex items-center justify-center w-full max-w-[340px]">
              <svg viewBox="0 0 500 200" className="w-full h-auto drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]">
                <g>
                  {/* Trailer */}
                  <rect x="10" y="30" width="340" height="120" fill="#FFFFFF" rx="2" stroke="#E4E4E7" strokeWidth="2" />
                  {/* Trailer Text */}
                  <text x="180" y="94" fontFamily="'JetBrains Mono', monospace" fontWeight="900" fontSize="22" fill="#18181B" textAnchor="middle" letterSpacing="1">
                    VEHICLE DELIVERY
                  </text>
                  {/* Logo mark */}
                  <path d="M 150 50 Q 180 35 210 50" fill="none" stroke="#E8000D" strokeWidth="3" />
                  <text x="180" y="62" fontFamily="'JetBrains Mono', monospace" fontWeight="800" fontSize="9" fill="#E8000D" textAnchor="middle" letterSpacing="2">
                    NEXTCAR
                  </text>

                  {/* Cabin connector */}
                  <rect x="350" y="110" width="20" height="30" fill="#27272A" />

                  {/* Cabin */}
                  <path d="M 370 140 L 370 70 Q 370 50 395 50 L 420 50 Q 440 50 450 70 L 465 105 Q 475 115 475 125 L 475 140 Z" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="2" />
                  {/* Windshield */}
                  <path d="M 410 60 L 435 60 L 450 90 L 410 90 Z" fill="#18181B" />
                  <path d="M 380 60 L 400 60 L 400 90 L 380 90 Z" fill="#18181B" />
                  {/* Bumper */}
                  <rect x="440" y="130" width="40" height="12" fill="#27272A" rx="2" />

                  {/* Wheels */}
                  <circle cx="80" cy="155" r="22" fill="#18181B" stroke="#52525B" strokeWidth="3" />
                  <circle cx="80" cy="155" r="10" fill="#52525B" />
                  <circle cx="80" cy="155" r="5" fill="#D4D4D8" />

                  <circle cx="135" cy="155" r="22" fill="#18181B" stroke="#52525B" strokeWidth="3" />
                  <circle cx="135" cy="155" r="10" fill="#52525B" />
                  <circle cx="135" cy="155" r="5" fill="#D4D4D8" />

                  <circle cx="410" cy="155" r="22" fill="#18181B" stroke="#52525B" strokeWidth="3" />
                  <circle cx="410" cy="155" r="10" fill="#52525B" />
                  <circle cx="410" cy="155" r="5" fill="#D4D4D8" />
                </g>
              </svg>
            </div>
          </div>
        </section>
      );
    }

    if (activeStep === 5) {
      // Step 6: Only Truck
      return (
        <section className="flex flex-col items-center justify-center lg:w-1/2 w-full px-4 relative min-h-[320px] animate-fade-in">
          <div className="flex flex-col items-center mb-6 select-none">
            <span className="font-mono text-[10px] font-black tracking-widest text-[var(--accent-color)] uppercase animate-pulse">
              STAGE 6/7: EN ROUTE TO TRACK
            </span>
            <h3 className="text-white font-bold text-sm tracking-wide uppercase mt-1">
              Vehicle In Transit
            </h3>
          </div>

          <div className="w-full max-w-[500px] mx-auto py-2 flex flex-col items-center">
            {/* SVG Truck centered (vibrating road effect) */}
            <div className="w-full flex justify-center animate-vibrate">
              <svg viewBox="0 0 500 200" className="w-full h-auto max-w-[420px] drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]">
                <g>
                  {/* Trailer */}
                  <rect x="10" y="30" width="340" height="120" fill="#FFFFFF" rx="2" stroke="#E4E4E7" strokeWidth="2" />
                  {/* Trailer Text */}
                  <text x="180" y="94" fontFamily="'JetBrains Mono', monospace" fontWeight="900" fontSize="22" fill="#18181B" textAnchor="middle" letterSpacing="1">
                    VEHICLE DELIVERY
                  </text>
                  {/* Logo mark */}
                  <path d="M 150 50 Q 180 35 210 50" fill="none" stroke="#E8000D" strokeWidth="3" />
                  <text x="180" y="62" fontFamily="'JetBrains Mono', monospace" fontWeight="800" fontSize="9" fill="#E8000D" textAnchor="middle" letterSpacing="2">
                    NEXTCAR
                  </text>

                  {/* Cabin connector */}
                  <rect x="350" y="110" width="20" height="30" fill="#27272A" />

                  {/* Cabin */}
                  <path d="M 370 140 L 370 70 Q 370 50 395 50 L 420 50 Q 440 50 450 70 L 465 105 Q 475 115 475 125 L 475 140 Z" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="2" />
                  {/* Windshield */}
                  <path d="M 410 60 L 435 60 L 450 90 L 410 90 Z" fill="#18181B" />
                  <path d="M 380 60 L 400 60 L 400 90 L 380 90 Z" fill="#18181B" />
                  {/* Bumper */}
                  <rect x="440" y="130" width="40" height="12" fill="#27272A" rx="2" />

                  {/* Wheels */}
                  <circle cx="80" cy="155" r="22" fill="#18181B" stroke="#52525B" strokeWidth="3" />
                  <circle cx="80" cy="155" r="10" fill="#52525B" />
                  <circle cx="80" cy="155" r="5" fill="#D4D4D8" />

                  <circle cx="135" cy="155" r="22" fill="#18181B" stroke="#52525B" strokeWidth="3" />
                  <circle cx="135" cy="155" r="10" fill="#52525B" />
                  <circle cx="135" cy="155" r="5" fill="#D4D4D8" />

                  <circle cx="410" cy="155" r="22" fill="#18181B" stroke="#52525B" strokeWidth="3" />
                  <circle cx="410" cy="155" r="10" fill="#52525B" />
                  <circle cx="410" cy="155" r="5" fill="#D4D4D8" />
                </g>
              </svg>
            </div>
          </div>
        </section>
      );
    }

    if (activeStep === 6) {
      // Step 7: Thank You
      return (
        <section className="flex flex-col items-center justify-center lg:w-1/2 w-full px-4 relative min-h-[320px] animate-fade-in">
          <div className="w-full max-w-[420px] mx-auto slanted-card glass p-8 shadow-[0_0_40px_rgba(232,0,13,0.15)] border border-[var(--accent-color)]/30 text-center select-none">
            <div className="slanted-content flex flex-col items-center gap-4">
              {/* Big glowing success checkmark */}
              <div className="w-16 h-16 rounded-full bg-[var(--accent-color)]/20 border-2 border-[var(--accent-color)] flex items-center justify-center shadow-[0_0_20px_rgba(232,0,13,0.4)]">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <div className="flex flex-col gap-1 mt-2">
                <h3 className="font-mono text-lg font-black tracking-widest text-[var(--accent-color)] uppercase">
                  THANK YOU
                </h3>
                <p className="text-white font-bold text-sm tracking-wide uppercase mt-1">
                  Handover Complete
                </p>
                <p className="text-[var(--text-secondary)] text-[11px] font-medium leading-relaxed mt-2 max-w-[280px]">
                  Your vehicle release code **NC-7800-GT** has been verified. Welcome to the track.
                </p>
              </div>

              <button
                onClick={startDeliverySimulation}
                className="px-6 py-2 bg-[var(--accent-color)] hover:bg-[var(--accent-color)]/90 text-white font-mono text-[10px] font-black tracking-widest uppercase transition-all duration-300 rounded shadow-[0_0_15px_rgba(232,0,13,0.3)] cursor-pointer mt-4"
              >
                Restart Simulation
              </button>
            </div>
          </div>
        </section>
      );
    }

    return (
      <section className="flex flex-col items-center justify-center lg:w-1/2 w-full px-4 relative min-h-[320px]">
        {/* Mobile static step info card */}
        <div className="md:hidden w-full max-w-[280px] mx-auto mb-4 glass p-3 text-center border border-white/10 rounded">
          <span className="font-mono text-[9px] font-black tracking-widest text-[var(--accent-color)] uppercase animate-pulse">
            STAGE {activeStep + 1}/4
          </span>
          <h4 className="text-white font-bold text-sm uppercase mt-0.5">
            {deliverySteps[activeStep].title}
          </h4>
          <p className="text-[var(--text-secondary)] text-[10px] font-medium mt-0.5 leading-tight">
            {deliverySteps[activeStep].subtitle}
          </p>
        </div>

        {/* Horizontal Timeline Tracker */}
        <div className="relative w-full max-w-[500px] md:max-w-[600px] h-48 flex items-center justify-between mx-auto">
          {/* Timeline Track Lines (aligned to centers of start and end nodes) */}
          <div className="absolute left-5 right-5 h-[2.5px] pointer-events-none flex items-center">
            {/* Base Line */}
            <div className="absolute inset-0 bg-red-950/20" />

            {/* Red glowing dashed progress line (completed) */}
            <div
              className="absolute top-0 h-full border-t-[2.5px] border-dashed border-[var(--accent-color)] shadow-[0_0_10px_rgba(232,0,13,0.6)] transition-all duration-500 ease-out"
              style={{
                left: 0,
                width: `${activeStep * 33.33}%`,
              }}
            />

            {/* Red dotted remaining line (dimmed) */}
            <div
              className="absolute top-0 h-full border-t-[2.5px] border-dotted border-[var(--accent-color)]/30 transition-all duration-500 ease-out"
              style={{
                left: `${activeStep * 33.33}%`,
                width: `${(3 - activeStep) * 33.33}%`,
              }}
            />
          </div>

          {/* Interactive Step Nodes */}
          {deliverySteps.map((step, idx) => {
            const isCompleted = idx < activeStep;
            const isCurrent = idx === activeStep;

            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className="relative z-10 flex flex-col items-center justify-center cursor-pointer"
                style={{ width: '40px', height: '40px' }}
              >
                {/* Node circle */}
                <div
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-500 ${
                    isCurrent
                      ? 'bg-transparent scale-125'
                      : isCompleted
                      ? 'bg-[var(--accent-color)] border border-[var(--accent-color)]/80 shadow-[0_0_8px_rgba(232,0,13,0.6)]'
                      : 'bg-[var(--accent-color)]/30 border border-[var(--accent-color)]/20'
                  }`}
                />

                {/* Floating Card above active node - hidden on mobile */}
                {isCurrent && (
                  <div
                    className="hidden md:block absolute bottom-14 slanted-card glass p-4 shadow-[0_0_25px_rgba(0,0,0,0.6)] border border-white/10 text-center w-[160px] md:w-[195px] animate-fadeIn"
                    style={{
                      transform: 'skewX(-12deg)',
                    }}
                  >
                    <div
                      className="flex flex-col gap-0.5"
                      style={{
                        transform: 'skewX(12deg)',
                        textAlign: 'center',
                      }}
                    >
                      <span className="font-sans font-black text-xs text-white uppercase tracking-wide">
                        {step.title}
                      </span>
                      <span className="text-[10px] text-white/60 font-medium">
                        {step.subtitle}
                      </span>
                    </div>
                  </div>
                )}

                {/* Car Thumbnail Node */}
                {isCurrent && (
                  <div
                    className="absolute z-20 transition-all duration-500 ease-out"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className="w-9 h-9 rounded-full bg-black/90 border-2 border-[var(--accent-color)] shadow-[0_0_12px_rgba(232,0,13,0.8)] flex items-center justify-center overflow-hidden">
                      <img
                        src={carImage}
                        alt="Active Car"
                        className="w-full h-full object-cover scale-110"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Step Action Button Below Tracking Line */}
        <div className="w-full max-w-[400px] mx-auto mt-6 z-10">
          <button
            onClick={startDeliverySimulation}
            disabled={isSimulating}
            className="w-full py-2.5 bg-[var(--accent-color)] hover:bg-[var(--accent-color)]/90 disabled:bg-[var(--accent-color)]/40 disabled:text-white/50 disabled:cursor-not-allowed text-white font-mono text-[11px] font-black tracking-widest uppercase transition-all duration-300 rounded shadow-[0_0_15px_rgba(232,0,13,0.3)] hover:shadow-[0_0_20px_rgba(232,0,13,0.5)] cursor-pointer"
          >
            {isSimulating ? `SIMULATION ACTIVE (STAGE ${activeStep + 1}/7)` : "Confirm Stage Complete"}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center text-center lg:w-1/2 w-full px-4 relative">

      {/* Showcase Slider Container */}
      <div className="relative flex flex-col items-center justify-center mt-6 z-10">
        <div className="relative flex items-center justify-center select-none">
          {/* Prev Button */}
          <button
            onClick={handlePrevCar}
            className="absolute -left-3 sm:-left-6 md:-left-16 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full glass border border-[var(--border-color)] flex items-center justify-center text-[var(--text-primary)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.3)]"
            aria-label="Previous Car"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Large Circular Showcase */}
          <div className="relative w-[60vw] max-w-[320px] aspect-square rounded-full border-4 border-white/20 overflow-hidden bg-black shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all duration-500 hover:scale-105 hover:border-white/40 flex items-center justify-center">
            {/* Inner glowing vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-color)]/20 to-transparent opacity-60 pointer-events-none z-10" />
            <img
              src={carImages[activeLap]}
              alt={`Car ${activeLap + 1} Showcase`}
              className="w-full h-full object-cover scale-110 transform hover:scale-120 transition-transform duration-700"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={handleNextCar}
            className="absolute -right-3 sm:-right-6 md:-right-16 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full glass border border-[var(--border-color)] flex items-center justify-center text-[var(--text-primary)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.3)]"
            aria-label="Next Car"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Indicator Dots */}
        <div className="flex gap-2 mt-5">
          {carImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveLap(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeLap === index
                  ? 'w-8 bg-[var(--accent-color)] shadow-[0_0_8px_rgba(232,0,13,0.7)]'
                  : 'w-2 bg-[var(--text-secondary)]/40 hover:bg-[var(--text-secondary)]/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
