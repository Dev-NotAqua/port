import React, { useEffect, useRef } from 'react';

const GridBackground: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (gridRef.current) {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        // Move the background in the opposite direction of the mouse
        const moveX = (clientX / innerWidth - 0.5) * -30; // Inverted direction, 30 is intensity
        const moveY = (clientY / innerHeight - 0.5) * -30; // Inverted direction, 30 is intensity

        gridRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={gridRef}
      className="fixed inset-[-50px] z-0 transition-transform duration-200 ease-out"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(120, 81, 169, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(120, 81, 169, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }}
    />
  );
};

export default GridBackground;