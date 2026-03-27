'use client';

export default function PreIntro() {
  return (
    <div id="pre-intro">
      <div className="pi-content">
        <div className="pi-orn">— ✦ —</div>
        <div className="pi-text-wrap">
          <span className="pi-word pi-w1">Vedd&apos;s</span>
          <div className="pi-progress">
            <div className="pi-progress-fill" />
          </div>
          <span className="pi-word pi-w2">UI Hub</span>
        </div>
        <div className="pi-status">
          loading core assets...<span className="pi-dots" />
        </div>
      </div>
    </div>
  );
}
