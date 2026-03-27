'use client';

import { forwardRef, useImperativeHandle, useRef, useCallback } from 'react';

const FlipOverlay = forwardRef(function FlipOverlay(_, ref) {
  const flipRef = useRef(null);
  const flippingRef = useRef(false);

  const runFlip = useCallback((cls, dur) => {
    return new Promise((resolve) => {
      if (flippingRef.current) { resolve(); return; }
      flippingRef.current = true;
      const el = flipRef.current;
      if (!el) { resolve(); return; }
      el.classList.add('active', cls);
      setTimeout(() => {
        el.classList.remove(cls);
        flippingRef.current = false;
        resolve();
      }, dur);
    });
  }, []);

  const flipOut = useCallback(() => runFlip('foldout', 720), [runFlip]);
  const flipIn = useCallback(() => {
    return new Promise((resolve) => {
      runFlip('foldin', 720).then(() => {
        const el = flipRef.current;
        if (el) el.classList.remove('active');
        resolve();
      });
    });
  }, [runFlip]);

  // Flip-then-navigate helper
  const flipGo = useCallback((url) => {
    if (flippingRef.current) return;
    flippingRef.current = true;
    const el = flipRef.current;
    if (!el) return;
    el.classList.add('active', 'foldout');
    setTimeout(() => {
      el.classList.remove('foldout');
      flippingRef.current = false;
      window.open(url, '_blank', 'noopener,noreferrer');
      // Fold back in
      flippingRef.current = true;
      el.classList.add('foldin');
      setTimeout(() => {
        el.classList.remove('foldin', 'active');
        flippingRef.current = false;
      }, 680);
    }, 680);
  }, []);

  useImperativeHandle(ref, () => ({
    flipOut,
    flipIn,
    flipGo,
  }), [flipOut, flipIn, flipGo]);

  return (
    <div id="flip" ref={flipRef}>
      <div className="fl" />
      <div className="fr" />
      <div className="fspine" />
      <div className="fshad" />
    </div>
  );
});

export default FlipOverlay;
