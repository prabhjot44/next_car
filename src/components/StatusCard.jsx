import React, { useState } from 'react';
import { ChatIcon, ChecklistIcon, LockIcon } from './Icons';

export default function StatusCard({
  rightActiveIndex,
  setRightActiveIndex,
  carImage,
  rightCardData,
  activeStep,
  setActiveStep,
  isSimulating,
  startDeliverySimulation
}) {

  const statusDials = [
    { icon: <ChatIcon />, index: 0, label: 'Chat support' },
    { icon: <ChecklistIcon />, index: 1, label: 'Pickup schedule' },
    { icon: <LockIcon />, index: 2, label: 'Security locking' }
  ];

  const deliverySteps = [
    { title: 'Registration', subtitle: 'Fill form for submission' },
    { title: 'Consultation', subtitle: 'Planning and pricing' },
    { title: 'Artist assign', subtitle: 'according to task' },
    { title: 'Vehicle Pickup', subtitle: 'Payment & dropoff' }
  ];

  const displayStep = Math.min(activeStep, 3);

  return (
    <section className="flex flex-col gap-6 lg:w-1/4 w-full justify-center lg:justify-between items-center lg:items-end relative h-auto">
      
      {/* Active detail card overlay */}
      {rightActiveIndex !== null && rightCardData && (
        <div className="w-full max-w-[480px] mx-auto lg:mx-0 lg:absolute lg:right-[76px] lg:top-1/2 lg:-translate-y-1/2 lg:w-[480px] slanted-card glass p-6 z-30 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10">
          <div className="slanted-content flex flex-col gap-4 text-left">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="font-mono text-[10px] font-black tracking-widest text-[var(--accent-color)] uppercase">
                {rightActiveIndex === 1 ? 'DELIVERY STATUS' : rightCardData[rightActiveIndex].title}
              </span>
              <button
                onClick={() => setRightActiveIndex(null)}
                className="text-white/40 hover:text-white transition-colors cursor-pointer text-xs p-1"
                aria-label="Close panel"
              >
                ✕
              </button>
            </div>

            {/* Content for Pickup Schedule (index 1) */}
            {rightActiveIndex === 1 ? (
              <div className="flex flex-col gap-4 mt-1">
                <div className="flex flex-col">
                  <h4 className="text-white font-bold text-sm font-sans tracking-wide uppercase">
                    Vehicle Handover
                  </h4>
                  <p className="text-[var(--text-secondary)] text-[11px] font-medium leading-relaxed mt-1">
                    Track delivery stages and verify completion requirements for release.
                  </p>
                </div>

                {/* 4 Steps Stepper */}
                <div className="grid grid-cols-4 gap-2 mt-2 select-none">
                  {deliverySteps.map((step, idx) => {
                    const isCompleted = idx < activeStep;
                    const isCurrent = idx === displayStep;
                    return (
                      <div
                        key={idx}
                        onClick={() => setActiveStep(idx)}
                        className="flex flex-col items-center text-center cursor-pointer group"
                      >
                        <span className={`font-mono text-[9px] md:text-[10px] font-extrabold tracking-wider transition-colors duration-300 ${
                          isCurrent ? 'text-[var(--accent-color)] font-black text-glow-red' : 'text-white/40 group-hover:text-white/70'
                        }`}>
                          {step.title}
                        </span>
                        <span className={`text-[8px] md:text-[9px] font-medium mt-1 leading-tight tracking-wide transition-colors duration-300 ${
                          isCurrent ? 'text-white' : 'text-white/20'
                        }`}>
                          {step.subtitle}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Stepper Track Line with Moving Car */}
                <div className="relative h-12 w-full mt-2 flex items-center">
                  {/* Track base line */}
                  <div className="absolute left-[12.5%] right-[12.5%] h-[2px] bg-white/10" />

                  {/* Red glowing dashed progress line */}
                  <div
                    className="absolute h-[2px] border-t-2 border-dashed border-[var(--accent-color)] shadow-[0_0_8px_rgba(232,0,13,0.5)] transition-all duration-500 ease-out"
                    style={{
                      left: '12.5%',
                      width: `${displayStep * 25}%`,
                    }}
                  />

                  {/* Red dotted remaining line */}
                  <div
                    className="absolute h-[2px] border-t-2 border-dotted border-[var(--accent-color)]/25 transition-all duration-500 ease-out"
                    style={{
                      left: `${12.5 + displayStep * 25}%`,
                      width: `${(3 - displayStep) * 25}%`,
                    }}
                  />

                  {/* Car icon node */}
                  <div
                    className="absolute -translate-y-1/2 -translate-x-1/2 transition-all duration-500 ease-out"
                    style={{
                      left: `${12.5 + displayStep * 25}%`,
                      top: '50%',
                    }}
                  >
                    <div className="w-8 h-8 rounded-full bg-black/90 border-2 border-[var(--accent-color)] shadow-[0_0_12px_rgba(232,0,13,0.7)] flex items-center justify-center overflow-hidden">
                      <img
                        src={carImage}
                        alt="Active Car"
                        className="w-full h-full object-cover scale-110"
                      />
                    </div>
                  </div>
                </div>

                {/* Step Action Button */}
                <button
                  onClick={startDeliverySimulation}
                  disabled={isSimulating}
                  className="w-full py-2 bg-[var(--accent-color)] hover:bg-[var(--accent-color)]/90 disabled:bg-[var(--accent-color)]/40 disabled:text-white/50 disabled:cursor-not-allowed text-white font-mono text-[10px] font-black tracking-widest uppercase transition-all duration-300 rounded shadow-[0_0_15px_rgba(232,0,13,0.3)] hover:shadow-[0_0_20px_rgba(232,0,13,0.5)] cursor-pointer mt-1"
                >
                  {isSimulating ? `SIMULATION ACTIVE (STAGE ${activeStep + 1}/7)` : "Confirm Stage Complete"}
                </button>
              </div>
            ) : (
              /* Content for Chat (index 0) and Security (index 2) */
              <div className="flex flex-col gap-4 mt-1">
                <div className="flex flex-col">
                  <h4 className="text-white font-bold text-sm font-sans tracking-wide uppercase">
                    {rightCardData[rightActiveIndex].subtitle}
                  </h4>
                  <p className="text-[var(--text-secondary)] text-[11px] font-medium leading-relaxed mt-1">
                    {rightCardData[rightActiveIndex].details}
                  </p>
                </div>

                <button className="w-full py-2 bg-[var(--accent-color)] hover:bg-[var(--accent-color)]/90 text-white font-mono text-[10px] font-black tracking-widest uppercase transition-all duration-300 rounded shadow-[0_0_15px_rgba(232,0,13,0.3)] hover:shadow-[0_0_20px_rgba(232,0,13,0.5)] cursor-pointer mt-2">
                  {rightCardData[rightActiveIndex].buttonLabel}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Right circular menu dials in a row on mobile, arc column on desktop */}
      <div className="flex flex-row lg:flex-col gap-4 lg:gap-5 relative z-10 ml-0 lg:ml-4 justify-center lg:justify-end">
        {statusDials.map((btn) => {
          const isActive = rightActiveIndex === btn.index;
          const offsetClass = btn.index === 1 ? 'lg:-translate-x-2' : 'lg:-translate-x-8';

          return (
            <button
              key={btn.index}
              onClick={() => setRightActiveIndex(isActive ? null : btn.index)}
              title={btn.label}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${offsetClass} ${
                isActive
                  ? 'glass-dial-active scale-110'
                  : 'glass-dial hover:border-[var(--accent-color)]'
              }`}
              aria-label={btn.label}
            >
              {btn.icon}
            </button>
          );
        })}
      </div>

      {/* Curved dashed layout arc right */}
      <div className="hidden lg:block absolute right-[-5px] top-1/2 -translate-y-1/2 border-r border-dashed border-[var(--text-secondary)] opacity-20 rounded-full w-[180px] h-[300px] pointer-events-none" />
    </section>
  );
}
