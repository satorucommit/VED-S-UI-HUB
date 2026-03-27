'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import CustomCursor from './components/CustomCursor';
import PreIntro from './components/PreIntro';
import Cover from './components/Cover';
import FlipOverlay from './components/FlipOverlay';
import BookView from './components/BookView';

export default function Home() {
  const flipRef = useRef(null);
  const [isBookOpen, setIsBookOpen] = useState(false);

  // Pre-intro → Cover lifecycle
  useEffect(() => {
    const timer = setTimeout(() => {
      const pi = document.getElementById('pre-intro');
      const cv = document.getElementById('cover');
      if (pi) pi.classList.add('pi-gone');
      if (cv) cv.classList.add('show');
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  // Cover open handler
  const handleOpen = useCallback(() => {
    const flip = flipRef.current;
    if (!flip) return;
    flip.flipOut().then(() => {
      const cover = document.getElementById('cover');
      if (cover) cover.classList.add('gone');
      setIsBookOpen(true);
      flip.flipIn();
    });
  }, []);

  // Cover close handler
  const handleClose = useCallback(() => {
    const flip = flipRef.current;
    if (!flip) return;
    flip.flipOut().then(() => {
      const cover = document.getElementById('cover');
      if (cover) cover.classList.remove('gone');
      setIsBookOpen(false);
      flip.flipIn();
    });
  }, []);

  // Card click handler
  const handleCardClick = useCallback((url) => {
    const flip = flipRef.current;
    if (flip) flip.flipGo(url);
  }, []);

  return (
    <>
      <CustomCursor />

      {/* Background texture layers */}
      <div className="rules" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />

      {/* Pre-intro loader */}
      <PreIntro />

      {/* Decorative ambient lines */}
      <div className="fline h" style={{ top: '65px' }} aria-hidden="true" />
      <div className="fline h" style={{ bottom: '48px' }} aria-hidden="true" />
      <div className="fline v" style={{ left: '40px' }} aria-hidden="true" />
      <div className="fline v" style={{ right: '40px' }} aria-hidden="true" />

      {/* Floating ambient text */}
      <div className="sw" style={{ fontSize: '5rem', top: '13%', left: '5%', transform: 'rotate(-7deg)' }} aria-hidden="true">form</div>
      <div className="sw" style={{ fontSize: '4.2rem', top: '61%', right: '6%', transform: 'rotate(5deg)' }} aria-hidden="true">craft</div>
      <div className="sw" style={{ fontSize: '3.2rem', top: '42%', left: '1%', transform: 'rotate(-3deg)' }} aria-hidden="true">type</div>
      <div className="sw" style={{ fontSize: '4.8rem', bottom: '16%', left: '26%', transform: 'rotate(3deg)' }} aria-hidden="true">colour</div>
      <div className="sw" style={{ fontSize: '3.4rem', top: '9%', right: '15%', transform: 'rotate(-5deg)' }} aria-hidden="true">space</div>
      <div className="sw" style={{ fontSize: '2.8rem', bottom: '30%', right: '26%', transform: 'rotate(6deg)' }} aria-hidden="true">grid</div>

      {/* Top bar */}
      <header className="topbar">
        <span className="tb-title">VEDD&apos;S UI HUB</span>
        <span className="tb-sub">a curated collection of interfaces</span>
      </header>

      <div className="phint">navigate pages to explore the collection</div>

      {/* Book view */}
      <BookView onVisit={handleCardClick} onClose={handleClose} isBookOpen={isBookOpen} />

      {/* Cover page */}
      <Cover onOpen={handleOpen} />

      {/* Flip animation overlay */}
      <FlipOverlay ref={flipRef} />
    </>
  );
}
