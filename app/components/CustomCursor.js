'use client';

import { useEffect, useRef, useCallback } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
      if (ringRef.current) {
        ringRef.current.style.left = e.clientX + 'px';
        ringRef.current.style.top = e.clientY + 'px';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div id="curdot" ref={dotRef} />
      <div id="curring" ref={ringRef} />
    </>
  );
}

// Exported helpers for other components to use the cursor refs
export function useCursorEffects() {
  const expandCursor = useCallback((borderColor) => {
    const dot = document.getElementById('curdot');
    const ring = document.getElementById('curring');
    if (dot) dot.style.transform = 'translate(-50%,-50%) scale(2.2)';
    if (ring) {
      ring.style.width = ring.style.height = '44px';
      if (borderColor) ring.style.borderColor = borderColor;
    }
  }, []);

  const resetCursor = useCallback(() => {
    const dot = document.getElementById('curdot');
    const ring = document.getElementById('curring');
    if (dot) dot.style.transform = 'translate(-50%,-50%) scale(1)';
    if (ring) {
      ring.style.width = ring.style.height = '28px';
      ring.style.borderColor = '';
    }
  }, []);

  return { expandCursor, resetCursor };
}
