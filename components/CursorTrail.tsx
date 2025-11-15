'use client';

import { useEffect, useState } from 'react';

export default function CursorTrail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorOutline, setCursorOutline] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      setTimeout(() => {
        setCursorOutline({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="cursor-dot hidden md:block"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="cursor-outline hidden md:block"
        style={{
          left: `${cursorOutline.x}px`,
          top: `${cursorOutline.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
}
