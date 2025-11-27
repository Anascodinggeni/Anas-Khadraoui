import React from 'react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 1,
    title: 'Development',
    description: 'High-performance websites using Next.js, React, and WebGL for immersive experiences.',
    icon: 'fas fa-code',
  },
  {
    id: 2,
    title: 'Design System',
    description: 'Scalable UI kits and component libraries created in Figma for consistent branding.',
    icon: 'fas fa-layer-group',
  },
  {
    id: 3,
    title: 'Interaction',
    description: 'Micro-interactions and animations that make the interface feel alive and responsive.',
    icon: 'fas fa-mouse-pointer',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-4 max-w-7xl mx-auto">
      <div className="mb-24 flex flex-col items-center text-center">
        <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4">What I Do</span>
        <h2 className="font-heading text-5xl md:text-6xl font-black mb-6">Expertise</h2>
        <p className="text-gray-400 text-lg max-w-2xl">I combine design and engineering to build high-quality digital products.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="group relative p-10 bg-surface border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-500"
          >
            {/* Inner Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] group-hover:bg-accent/10 transition-colors duration-500 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-2xl text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-3xl font-bold mb-4 font-heading tracking-tight">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed text-lg group-hover:text-gray-300 transition-colors">{service.description}</p>
              
              <div className="mt-auto pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-sm font-bold text-white border-b border-white/20 pb-1">Learn more</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;