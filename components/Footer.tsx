import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-white/5 text-center">
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Anas Khadraoui. Crafted with <span className="text-accent">React</span> & <span className="text-secondary">Tailwind</span> in Morocco.
      </p>
    </footer>
  );
};

export default Footer;