'use client';

import { useRef } from 'react';
import { useCursorEffects } from './CustomCursor';

export default function Cover({ onOpen }) {
  const coverRef = useRef(null);
  const { expandCursor, resetCursor } = useCursorEffects();

  return (
    <div id="cover" ref={coverRef}>
      <div className="cover-wrap">
        <div className="c-orn">— ✦ —</div>
        <div className="c-eye">a curated collection of</div>
        <h1 className="c-title">
          VEDD&apos;S<br />
          <em>UI HUB</em>
        </h1>
        <div className="c-rule" aria-hidden="true" />
        <p className="c-sub">a collection of interfaces &nbsp;·&nbsp; one place</p>
        <button
          type="button"
          className="c-btn"
          id="openBtn"
          aria-label="Open the book"
          onMouseEnter={() => expandCursor()}
          onMouseLeave={() => resetCursor()}
          onClick={onOpen}
        >
          <span>OPEN THE BOOK</span>
        </button>
        <p className="c-hint">click to enter</p>
      </div>
    </div>
  );
}
