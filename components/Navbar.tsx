import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#certifications' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-2xl z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/60 backdrop-blur-3xl border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] py-3'
            : 'bg-transparent border-transparent py-6'
        } border rounded-full px-6 flex justify-between items-center`}
      >
        <a href="#" className="text-xl font-heading font-black tracking-tighter group">
          ANAS<span className="text-accent group-hover:text-white transition-colors">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-medium text-gray-400 hover:text-white px-5 py-2 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className={`hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${scrolled ? 'bg-white text-black hover:bg-gray-200' : 'bg-white/10 text-white hover:bg-white hover:text-black backdrop-blur-md border border-white/10'}`}
          >
            Let's Talk <i className="fas fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform"></i>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl transition-all duration-500 md:hidden flex flex-col justify-center items-center gap-8 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-4xl font-heading font-bold text-gray-500 hover:text-white hover:scale-110 transition-all duration-300"
          >
            {item.label}
          </a>
        ))}
        <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-8 bg-white text-black px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform"
          >
            Start a Project
          </a>
      </div>
    </>
  );
};

export default Navbar;