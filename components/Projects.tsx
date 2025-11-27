import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: 'Fintech Dashboard',
    category: 'SaaS Platform',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    tech: ['React', 'D3.js', 'Node'],
  },
  {
    id: 2,
    title: 'Lumina Architecture',
    category: 'Portfolio Website',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop',
    tech: ['WebGL', 'Blender', 'GSAP'],
  },
  {
    id: 3,
    title: 'Neon Markets',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1523474253062-5c2ca29b422b?q=80&w=1200&auto=format&fit=crop',
    tech: ['Shopify', 'React', 'Tailwind'],
  },
  {
    id: 4,
    title: 'Cyber Security AI',
    category: 'Landing Page',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    tech: ['Next.js', 'Framer Motion'],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="work" className="py-32 px-4 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 px-4">
        <div>
          <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">Selected Work</span>
          <h2 className="font-heading text-5xl md:text-7xl font-black tracking-tighter">Featured<br/>Projects</h2>
        </div>
        <a href="#contact" className="hidden md:inline-flex items-center gap-3 text-white border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 mt-8 md:mt-0 group">
          View all works <i className="fas fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform"></i>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative rounded-[2rem] overflow-hidden bg-surface border border-white/5 hover:border-white/20 transition-colors duration-500"
          >
            {/* Image Container */}
            <div className="aspect-[4/3] overflow-hidden">
                <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1 opacity-80 group-hover:opacity-100"
                />
            </div>
            
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.tech.map((t) => (
                        <span key={t} className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white">{t}</span>
                    ))}
                </div>
                <div className="flex justify-between items-end">
                    <div>
                        <h3 className="text-3xl font-heading font-bold text-white mb-1">{project.title}</h3>
                        <p className="text-gray-400 font-medium">{project.category}</p>
                    </div>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                        <i className="fas fa-arrow-right -rotate-45"></i>
                    </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center md:hidden">
        <a href="#" className="inline-block border-b border-white text-white pb-1">View all projects</a>
      </div>
    </section>
  );
};

export default Projects;