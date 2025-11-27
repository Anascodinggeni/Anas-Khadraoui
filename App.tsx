import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen font-sans">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 bg-noise opacity-[0.03] pointer-events-none z-[60]"></div>
      
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;