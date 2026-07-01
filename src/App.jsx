import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <Footer />
    </div>
  );
}

export default App;
