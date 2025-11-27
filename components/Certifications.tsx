import React from 'react';
import { Certification } from '../types';

const certifications: Certification[] = [
  {
    id: 'HTML-2025-01',
    title: 'HTML Mastery',
    issuer: 'Progma Academy',
    icon: 'fab fa-html5',
    verified: true,
  },
  {
    id: 'JS-2025-02',
    title: 'JavaScript Pro',
    issuer: 'Progma Academy',
    icon: 'fab fa-js-square',
    verified: true,
  },
  {
    id: 'AI-2025-03',
    title: 'AI Fundamentals',
    issuer: 'Progma Academy',
    icon: 'fas fa-brain',
    verified: true,
  },
  {
    id: 'REACT-2025-04',
    title: 'React Advanced',
    issuer: 'Meta',
    icon: 'fab fa-react',
    verified: true,
  },
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-32 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Verified Credentials</h2>
        <p className="text-gray-400 text-lg">Continuous learning is part of the DNA.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="group relative bg-white/5 border border-white/5 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 hover:border-accent/40 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <i className={`${cert.icon} text-4xl text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary`}></i>
              {cert.verified && (
                <div className="text-green-400 bg-green-400/10 p-2 rounded-full text-xs" title="Verified">
                    <i className="fas fa-check"></i>
                </div>
              )}
            </div>
            
            <h4 className="font-bold text-lg mb-1">{cert.title}</h4>
            <p className="text-gray-400 text-sm mb-4">{cert.issuer}</p>
            
            <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs text-gray-500 font-mono">
                <span>ID: {cert.id.split('-')[1]}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent">Verify &rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;