'use client';

import { useMemo } from 'react';
import { SITES, PAL, POS, FLOAT_ANIMS } from '../data/sites';
import { useCursorEffects } from './CustomCursor';

export default function CardGrid({ onCardClick }) {
  const { expandCursor, resetCursor } = useCursorEffects();

  const cards = useMemo(() => SITES.map((s, i) => {
    const c = PAL[s.col];
    const w = 154 + (i % 3) * 16;
    const h = 136 + (i % 2) * 20;
    const dr = 7 + (i * 1.3) % 4;
    const dl = (i * 0.65) % 3;
    const anim = FLOAT_ANIMS[i % 4];

    return {
      ...s, c, w, h, dr, dl, anim,
      pos: POS[i],
      idx: i,
    };
  }), []);

  return (
    <div id="cwrap">
      {cards.map((card) => (
        <div
          key={card.idx}
          className="card"
          style={{
            width: `${card.w}px`,
            height: `${card.h}px`,
            left: `${card.pos.x * 100}%`,
            top: `${card.pos.y * 100}%`,
            '--r': `${card.rot}deg`,
            transform: `rotate(${card.rot}deg)`,
            animation: `${card.anim} ${card.dr}s ${card.dl}s ease-in-out infinite`,
          }}
          onMouseEnter={(e) => {
            const face = e.currentTarget.querySelector('.card-face');
            const hbg = e.currentTarget.querySelector('.hbg');
            if (face) face.style.boxShadow = `6px 10px 30px ${card.c.b}50,0 4px 14px rgba(28,23,18,0.13)`;
            if (hbg) hbg.style.opacity = '1';
            e.currentTarget.style.zIndex = '50';
            expandCursor(card.c.b);
          }}
          onMouseLeave={(e) => {
            const face = e.currentTarget.querySelector('.card-face');
            const hbg = e.currentTarget.querySelector('.hbg');
            if (face) face.style.boxShadow = `3px 5px 18px ${card.c.b}30,0 2px 6px rgba(28,23,18,0.07)`;
            if (hbg) hbg.style.opacity = '0';
            e.currentTarget.style.zIndex = '';
            resetCursor();
          }}
          onClick={() => onCardClick(card.url)}
        >
          <div
            className="card-face"
            style={{
              borderColor: `${card.c.b}55`,
              background: card.c.bg,
              color: card.c.tx,
              boxShadow: `3px 5px 18px ${card.c.b}30,0 2px 6px rgba(28,23,18,0.07)`,
            }}
          >
            <div
              className="hbg"
              style={{
                position: 'absolute', inset: 0,
                background: card.c.hv,
                opacity: 0,
                transition: 'opacity 0.35s',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg,rgba(255,255,255,0.16),transparent 55%)',
                pointerEvents: 'none',
              }}
            />
            <div className="card-corner" style={{ borderColor: card.c.tx }} />
            <div className="cidx" style={{ color: card.c.tx }}>
              {String(card.idx + 1).padStart(2, '0')}
            </div>
            <div className="cname" style={{ color: card.c.tx }}>
              {card.name.toUpperCase()}
            </div>
            <div className="cdesc" style={{ color: card.c.tx }}>
              {card.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
