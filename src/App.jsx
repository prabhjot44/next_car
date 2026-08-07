import React, { useState, useEffect } from 'react';
import car1 from './assets/car/car1.jpg';
import car2 from './assets/car/car2.jpg';
import car3 from './assets/car/car3.png';
import car4 from './assets/car/car4.jpg';
import car5 from './assets/car/car5.jpg';

// Import modular sub-components
import Header from './components/Header';
import Hero from './components/Hero';
import TelemetryPanel from './components/TelemetryPanel';
import CarShowcaseSlider from './components/CarShowcaseSlider';
import StatusCard from './components/StatusCard';
import Footer from './components/Footer';

const carImages = [car1, car2, car3, car4, car5];

// Constants for telemetry and UI configurations
const laps = [
  { id: 'LAP 01', title: 'Speed Zone', heading: 'SPEED', subtitle: 'Precision Power. Performance' },
  { id: 'LAP 02', title: 'Acceleration Zone', heading: 'POWER', subtitle: 'Instant Torque. Electric Precision.' },
  { id: 'LAP 03', title: 'Technical Section', heading: 'PASSION', subtitle: 'Precision. Power. Performance.' },
  { id: 'LAP 04', title: 'High Speed Zone', heading: 'FLOW', subtitle: 'Aerodynamic Harmony. Downforce Dominance.' },
  { id: 'LAP 05', title: 'Final Corner', heading: 'CONTROL', subtitle: 'Cornering Precision. Apex Mastery.' },
];

const statsData = {
  0: { // LAP 01
    0: [{ label: "TOP SPEED", value: "305 km/h" }, { label: "RPM", value: "7,800" }, { label: "GEAR", value: "5" }, { label: "BOOST", value: "1.1 bar" }],
    1: [{ label: "POWER", value: "850 HP" }, { label: "WEIGHT", value: "1,520 kg" }, { label: "DRAG", value: "0.32 Cd" }, { label: "BATTERY", value: "100%" }],
    2: [{ label: "BASE PRICE", value: "₹ 2.40 Cr" }, { label: "BOOKING", value: "₹ 5 Lakh" }, { label: "DELIVERY", value: "12 Weeks" }, { label: "WARRANTY", value: "3 Years" }],
  },
  1: { // LAP 02
    0: [{ label: "TOP SPEED", value: "320 km/h" }, { label: "RPM", value: "8,100" }, { label: "GEAR", value: "6" }, { label: "BOOST", value: "1.3 bar" }],
    1: [{ label: "POWER", value: "920 HP" }, { label: "WEIGHT", value: "1,500 kg" }, { label: "DRAG", value: "0.30 Cd" }, { label: "BATTERY", value: "99%" }],
    2: [{ label: "BASE PRICE", value: "₹ 2.65 Cr" }, { label: "BOOKING", value: "₹ 8 Lakh" }, { label: "DELIVERY", value: "14 Weeks" }, { label: "WARRANTY", value: "4 Years" }],
  },
  2: { // LAP 03
    0: [{ label: "TOP SPEED", value: "318 km/h" }, { label: "RPM", value: "8,400" }, { label: "GEAR", value: "6" }, { label: "BOOST", value: "1.4 bar" }],
    1: [{ label: "POWER", value: "1,020 HP" }, { label: "WEIGHT", value: "1,480 kg" }, { label: "DRAG", value: "0.28 Cd" }, { label: "BATTERY", value: "98%" }],
    2: [{ label: "BASE PRICE", value: "₹ 2.85 Cr" }, { label: "BOOKING", value: "₹ 10 Lakh" }, { label: "DELIVERY", value: "16 Weeks" }, { label: "WARRANTY", value: "5 Years" }],
  },
  3: { // LAP 04
    0: [{ label: "TOP SPEED", value: "330 km/h" }, { label: "RPM", value: "8,600" }, { label: "GEAR", value: "7" }, { label: "BOOST", value: "1.5 bar" }],
    1: [{ label: "POWER", value: "1,080 HP" }, { label: "WEIGHT", value: "1,460 kg" }, { label: "DRAG", value: "0.26 Cd" }, { label: "BATTERY", value: "96%" }],
    2: [{ label: "BASE PRICE", value: "₹ 3.10 Cr" }, { label: "BOOKING", value: "₹ 12 Lakh" }, { label: "DELIVERY", value: "20 Weeks" }, { label: "WARRANTY", value: "5 Years" }],
  },
  4: { // LAP 05
    0: [{ label: "TOP SPEED", value: "345 km/h" }, { label: "RPM", value: "8,800" }, { label: "GEAR", value: "7" }, { label: "BOOST", value: "1.6 bar" }],
    1: [{ label: "POWER", value: "1,150 HP" }, { label: "WEIGHT", value: "1,440 kg" }, { label: "DRAG", value: "0.25 Cd" }, { label: "BATTERY", value: "95%" }],
    2: [{ label: "BASE PRICE", value: "₹ 3.40 Cr" }, { label: "BOOKING", value: "₹ 15 Lakh" }, { label: "DELIVERY", value: "24 Weeks" }, { label: "WARRANTY", value: "7 Years" }],
  }
};

const rightCardData = {
  0: { // Chat
    title: "Advisor Online",
    subtitle: "Direct Chat Connected",
    details: "Ready to assist you with order specifications, delivery scheduling, and vehicle handover options.",
    buttonLabel: "Message Support"
  },
  1: { // Vehicle Pickup
    title: "Vehicle Pickup",
    subtitle: "Payment & dropoff",
    details: "Your vehicle handover is scheduled at the track center. Documents and payment confirmation required.",
    buttonLabel: "Schedule Pickup"
  },
  2: { // Security/Lock
    title: "Security Config",
    subtitle: "Biometric Immobilization",
    details: "Track safety locks enabled. Multi-factor key authentication active for performance tracks.",
    buttonLabel: "Lock Vehicle"
  }
};

function App() {
  const [activeLap, setActiveLap] = useState(2); // Default to LAP 03
  const [leftActiveIndex, setLeftActiveIndex] = useState(null); // Closed by default to show clean HUD
  const [rightActiveIndex, setRightActiveIndex] = useState(null); // Closed by default to show clean HUD
  const [activeStep, setActiveStep] = useState(0); // Shared delivery step progress (starts at 0)
  const [isSimulating, setIsSimulating] = useState(false);

  // Manage simulation interval securely
  useEffect(() => {
    let timer;
    if (isSimulating) {
      timer = setTimeout(() => {
        if (activeStep < 6) {
          setActiveStep((prev) => prev + 1);
        } else {
          setIsSimulating(false);
        }
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isSimulating, activeStep]);

  // Reset simulation and steps when panel closes or changes, start automatically when opened
  useEffect(() => {
    if (rightActiveIndex === 1) {
      setActiveStep(0);
      setIsSimulating(true);
    } else {
      setActiveStep(0);
      setIsSimulating(false);
    }
  }, [rightActiveIndex]);

  const startDeliverySimulation = () => {
    setActiveStep(0);
    setIsSimulating(true);
  };

  const handlePrevCar = () => {
    setActiveLap((prev) => (prev === 0 ? carImages.length - 1 : prev - 1));
  };

  const handleNextCar = () => {
    setActiveLap((prev) => (prev === carImages.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="lg:min-h-screen w-full relative flex flex-col justify-between overflow-x-hidden lg:overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-500 select-none">
      {/* Central Spotlight Beam */}
      {/* Central Spotlight Beam */}
      <div className="absolute top-0 left-1/2 pointer-events-none z-10 w-[240px] h-[700px]"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.12) 40%, rgba(255, 255, 255, 0.02) 75%, transparent 100%)',
          transform: 'translateX(-50%) perspective(500px) rotateX(40deg)',
          transformOrigin: 'top center',
          filter: 'blur(30px)',
        }}
      />



      {/* TOP HEADER */}
      <Header />

      {/* HERO CONTROL BANNER */}
      <Hero subtitle={laps[activeLap].subtitle} />

      {/* MAIN INTERACTIVE AREA */}
      <main className="w-full flex-grow px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between z-20 relative gap-8 lg:gap-0">

        {/* LEFT SECTION: Telemetry controls & Statistics */}
        <TelemetryPanel
          leftActiveIndex={leftActiveIndex}
          setLeftActiveIndex={setLeftActiveIndex}
          setRightActiveIndex={setRightActiveIndex}
        />

        {/* MIDDLE SECTION: Showcase Slider & Styled Headers */}
        <CarShowcaseSlider
          activeLap={activeLap}
          setActiveLap={setActiveLap}
          carImages={carImages}
          handlePrevCar={handlePrevCar}
          handleNextCar={handleNextCar}
          rightActiveIndex={rightActiveIndex}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          carImage={carImages[activeLap]}
          isSimulating={isSimulating}
          startDeliverySimulation={startDeliverySimulation}
        />

        {/* RIGHT SECTION: Slanted preview status card & Right buttons */}
        <StatusCard
          rightActiveIndex={rightActiveIndex}
          setRightActiveIndex={setRightActiveIndex}
          carImage={carImages[activeLap]}
          rightCardData={rightCardData}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          isSimulating={isSimulating}
          startDeliverySimulation={startDeliverySimulation}
        />

      </main>

      {/* BOTTOM SECTION: LAP TIMELINE */}
      <Footer
        activeLap={activeLap}
        setActiveLap={setActiveLap}
        laps={laps}
      />

    </div>
  );
}

export default App;
