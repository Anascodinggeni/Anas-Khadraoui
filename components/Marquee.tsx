import React from 'react';

const techStack = [
  { icon: 'fab fa-react', name: 'React' },
  { icon: 'fab fa-js', name: 'JavaScript' },
  { icon: 'fas fa-code', name: 'TypeScript' },
  { icon: 'fab fa-node', name: 'Node.js' },
  { icon: 'fas fa-wind', name: 'Tailwind' },
  { icon: 'fab fa-figma', name: 'Figma' },
  { icon: 'fab fa-python', name: 'Python' },
  { icon: 'fas fa-database', name: 'PostgreSQL' },
  { icon: 'fas fa-cube', name: 'Three.js' },
];

const Marquee: React.FC = () => {
  return (
    <div className="w-full py-20 bg-black border-y border-white/5 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-bg to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-bg to-transparent z-10"></div>
      
      <div className="flex w-max animate-scroll gap-24 group hover:[animation-play-state:paused]">
        {/* Quadruple items for safety on large screens */}
        {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-4xl font-heading font-bold text-white/20 hover:text-white transition-colors duration-500 cursor-default"
          >
            <i className={`${tech.icon} text-3xl`}></i>
            <span className="tracking-tight">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;