'use client';

import { useState, useEffect } from 'react';
import { SITES, PAL } from '../data/sites';
import { useCursorEffects } from './CustomCursor';

function TOCItem({ site, index, onClick, expandCursor, resetCursor }) {
  return (
    <li 
      className="toc-item" 
      onClick={onClick}
      onMouseEnter={() => expandCursor(PAL[site.col].b)}
      onMouseLeave={() => resetCursor()}
    >
      <span className="toc-num">{String(index + 1).padStart(2, '0')}</span>
      <span className="toc-name">{site.name}</span>
      <span className="toc-dots"></span>
      <span className="toc-page">PG. {String(index + 1).padStart(2, '0')}</span>
    </li>
  );
}

export default function BookView({ onVisit, onClose, isBookOpen }) {
  const [idx, setIdx] = useState(-1);
  const { expandCursor, resetCursor } = useCursorEffects();
  const [transitioning, setTransitioning] = useState(false);

  // Reset to index page every time the book is opened
  useEffect(() => {
    if (isBookOpen) {
      setIdx(-1);
    }
  }, [isBookOpen]);

  const isIndex = idx === -1;
  const site = isIndex ? null : SITES[idx];
  const c = isIndex ? PAL['dblue'] : PAL[site.col];

  const changePage = (newIdx) => {
    if (transitioning || newIdx === idx) return;
    setTransitioning(true);
    setTimeout(() => {
      setIdx(newIdx);
      setTransitioning(false);
    }, 400); // Wait for fade out
  };

  return (
    <div id="book-view">
      {idx > -1 && (
        <button 
          className="nav-btn prev-btn" 
          onClick={() => changePage(idx - 1)}
          onMouseEnter={(e) => {
            expandCursor();
            e.currentTarget.style.color = c.b;
          }}
          onMouseLeave={(e) => {
            resetCursor();
            e.currentTarget.style.color = 'var(--inkm)';
          }}
          aria-label="Previous Page"
        >
          &#8592; {idx === 0 ? "INDEX" : "PREV"}
        </button>
      )}
      
      {idx < SITES.length - 1 && (
        <button 
          className="nav-btn next-btn" 
          onClick={() => changePage(idx + 1)}
          onMouseEnter={(e) => {
            expandCursor();
            e.currentTarget.style.color = c.b;
          }}
          onMouseLeave={(e) => {
            resetCursor();
            e.currentTarget.style.color = 'var(--inkm)';
          }}
          aria-label="Next Page"
        >
          {isIndex ? "START " : "NEXT "}&#8594;
        </button>
      )}

      {/* Close Button to return to Cover */}
      <button 
        className="close-btn"
        onClick={onClose}
        onMouseEnter={(e) => {
          expandCursor();
          e.currentTarget.style.color = c.b;
        }}
        onMouseLeave={(e) => {
          resetCursor();
          e.currentTarget.style.color = 'var(--ink)';
        }}
        aria-label="Back to Cover"
      >
        &#10005; CLOSE BOOK
      </button>

      <div className={`book-spread ${transitioning ? 'fading' : ''}`}>
        {isIndex ? (
          <>
            <div className="page left-page" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
              <div className="site-idx" style={{ color: c.b }}>00</div>
              <h2 className="site-name" style={{ color: 'var(--ink)' }}>Table of<br/>Contents</h2>
              <div className="site-line" style={{ background: c.b, width: '40px', marginLeft: 0 }}></div>
              <ul className="toc-list">
                {SITES.slice(0, Math.ceil(SITES.length / 2)).map((s, i) => (
                  <TOCItem key={i} site={s} index={i} onClick={() => changePage(i)} expandCursor={expandCursor} resetCursor={resetCursor} />
                ))}
              </ul>
            </div>
            
            <div className="page right-page">
              <ul className="toc-list" style={{ marginTop: '0', alignSelf: 'stretch' }}>
                {SITES.slice(Math.ceil(SITES.length / 2)).map((s, i) => {
                  const actualIdx = i + Math.ceil(SITES.length / 2);
                  return <TOCItem key={actualIdx} site={s} index={actualIdx} onClick={() => changePage(actualIdx)} expandCursor={expandCursor} resetCursor={resetCursor} />;
                })}
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="page left-page">
              <div className="page-content">
                <div className="site-idx" style={{ color: c.b }}>{String(idx + 1).padStart(2, '0')}</div>
                <h2 className="site-name" style={{ color: c.tx }}>{site.name}</h2>
                <div className="site-line" style={{ background: c.b }}></div>
              </div>
            </div>

            <div className="page right-page">
               <div className="page-content right-content">
                 <div className="site-desc-label" style={{ color: c.b }}>ABOUT INTERFACE</div>
                 <p className="site-desc" style={{ color: c.tx }}>{site.desc}</p>
                 
                 <div className="swatches">
                   <div className="swatch" style={{ background: c.b }} title="Accent"></div>
                   <div className="swatch" style={{ background: c.bg }} title="Background"></div>
                   <div className="swatch" style={{ background: c.tx }} title="Text"></div>
                   <div className="swatch" style={{ background: c.hv }} title="Theme"></div>
                 </div>

                 <button 
                   className="visit-btn"
                   style={{ borderColor: c.tx, color: c.tx }}
                   onMouseEnter={(e) => {
                     expandCursor(c.tx);
                     e.currentTarget.style.background = c.tx;
                     e.currentTarget.style.color = c.bg;
                   }}
                   onMouseLeave={(e) => {
                     resetCursor();
                     e.currentTarget.style.background = 'transparent';
                     e.currentTarget.style.color = c.tx;
                   }}
                   onClick={() => onVisit(site.url)}
                 >
                   ENTER INTERFACE
                 </button>
               </div>
            </div>
          </>
        )}
      </div>

      <div className="book-pagination">
        {!isIndex && SITES.map((_, i) => (
          <div 
            key={i} 
            className={`page-dot ${i === idx ? 'active' : ''}`}
            style={i === idx ? { background: c.b } : {}}
          />
        ))}
      </div>
    </div>
  );
}
