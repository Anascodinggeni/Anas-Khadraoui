import React from 'react';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  return (
    <header className="relative w-full h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden selection:bg-white selection:text-black">
      <ParticleBackground />
      
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-20 pointer-events-none"></div>

      <div className="z-10 max-w-6xl mx-auto space-y-8 animate-fade-in-up flex flex-col items-center">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 backdrop-blur-md mb-6 hover:bg-white/10 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em]">
            Available for new projects
          </span>
        </div>

        <h1 className="font-heading font-extrabold text-5xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter">
          Design <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
            &
          </span>{' '}
          <span className="text-outline cursor-default">Develop</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto leading-relaxed font-light tracking-wide pt-4">
          I craft digital experiences that look amazing and perform even better. Based in <span className="text-white font-medium">Fes</span>, working globally.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <a
            href="#work"
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-shine"></div>
            <span className="relative z-10 flex items-center gap-2">
                See My Work <i className="fas fa-arrow-down transform -rotate-45 group-hover:rotate-0 transition-transform duration-300"></i>
            </span>
          </a>
          
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent text-gray-300 font-medium hover:text-white transition-colors text-sm uppercase tracking-widest border-b border-transparent hover:border-white/20"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-white/20 text-xl"></i>
      </div>
    </header>
  );
};

export default Hero;