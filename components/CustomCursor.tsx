import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-hover')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  // Hide on mobile/touch devices usually, but for simplicity we keep logic simple
  // CSS media queries can also handle hiding it on small screens
  return (
    <>
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
        }}
      />
      <div
        className={`fixed top-0 left-0 border border-white/30 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out hidden md:block ${
          isHovering ? 'w-16 h-16 bg-white/10 backdrop-blur-sm' : 'w-8 h-8'
        }`}
        style={{
          transform: `translate(${position.x - (isHovering ? 32 : 16)}px, ${
            position.y - (isHovering ? 32 : 16)
          }px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;