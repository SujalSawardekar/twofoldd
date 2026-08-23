import Link from 'next/link';
import styles from './GlobalReach.module.css';

export default function GlobalReach() {
  const regions = [
    { name: 'Americas',     x: '22%', y: '42%' },
    { name: 'United Kingdom', x: '46%', y: '26%' },
    { name: 'West Africa',  x: '44%', y: '56%' },
    { name: 'Middle East',  x: '59%', y: '40%' },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Top row: label + headline + CTA */}
        <div className={styles.topRow}>
          <div className={styles.topLeft}>
            <span className={styles.eyebrow}>Global Reach</span>
            <h2 className={styles.headline}>
              Made in India.<br />
              Shipped Worldwide.
            </h2>
          </div>
          <div className={styles.topRight}>
            <p className={styles.copy}>
              From West Africa to the Middle East, the UK to the Americas — 
              Twofold exports through Nhava Sheva (JNPT), India's leading 
              container port.
            </p>
            <Link href="/about-us" className={styles.cta}>
              See Our Global Reach →
            </Link>
          </div>
        </div>

        {/* Map — full-width, integrated */}
        <div className={styles.mapArea}>
          {/* Abstract SVG world outline */}
          <svg
            className={styles.mapSvg}
            viewBox="0 0 1200 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Continent blobs — abstract outlines */}
            {/* North America */}
            <path d="M80 120 Q 140 80, 220 90 Q 280 100, 300 160 Q 320 220, 290 280 Q 260 340, 220 360 Q 180 380, 160 340 Q 120 300, 100 260 Q 70 200, 80 120Z" stroke="var(--color-border)" strokeWidth="1.5" fill="none"/>
            {/* South America */}
            <path d="M200 380 Q 240 360, 270 400 Q 300 440, 290 500 Q 280 550, 240 560 Q 200 570, 190 530 Q 170 480, 180 430 Q 190 400, 200 380Z" stroke="var(--color-border)" strokeWidth="1.5" fill="none"/>
            {/* Europe */}
            <path d="M480 100 Q 520 80, 560 90 Q 590 100, 600 130 Q 610 160, 580 180 Q 550 190, 520 175 Q 490 160, 480 140 Q 468 120, 480 100Z" stroke="var(--color-border)" strokeWidth="1.5" fill="none"/>
            {/* Africa */}
            <path d="M490 200 Q 540 190, 580 220 Q 610 250, 600 310 Q 590 370, 560 400 Q 530 420, 500 400 Q 470 380, 460 330 Q 450 270, 460 230 Q 470 200, 490 200Z" stroke="var(--color-border)" strokeWidth="1.5" fill="none"/>
            {/* Asia */}
            <path d="M600 80 Q 700 60, 820 80 Q 900 100, 940 140 Q 970 180, 950 220 Q 930 250, 880 260 Q 820 270, 760 250 Q 700 230, 670 200 Q 640 170, 630 140 Q 615 110, 600 80Z" stroke="var(--color-border)" strokeWidth="1.5" fill="none"/>
            {/* Australia */}
            <path d="M860 340 Q 910 320, 950 340 Q 980 360, 975 400 Q 970 440, 940 450 Q 905 455, 880 430 Q 850 400, 855 370 Q 858 350, 860 340Z" stroke="var(--color-border)" strokeWidth="1.5" fill="none"/>
            {/* Dashed shipping route from India (JNPT ~64%, 40%) */}
            <path d="M640 240 Q 520 300, 440 300 Q 360 300, 260 310" stroke="var(--color-steel-grey)" strokeWidth="1" strokeDasharray="5,4" fill="none" opacity="0.5"/>
            <path d="M640 240 Q 620 200, 580 170 Q 560 160, 540 150" stroke="var(--color-steel-grey)" strokeWidth="1" strokeDasharray="5,4" fill="none" opacity="0.5"/>
            <path d="M640 240 Q 660 300, 660 320 Q 660 360, 580 380" stroke="var(--color-steel-grey)" strokeWidth="1" strokeDasharray="5,4" fill="none" opacity="0.5"/>
            {/* JNPT / Palghar origin dot */}
            <circle cx="640" cy="240" r="5" fill="var(--color-navy)" />
            <circle cx="640" cy="240" r="10" fill="var(--color-navy)" opacity="0.12" />
          </svg>

          {/* Region labels */}
          {regions.map((r) => (
            <div key={r.name} className={styles.regionPin} style={{ left: r.x, top: r.y }}>
              <div className={styles.dot} />
              <span className={styles.regionLabel}>{r.name}</span>
            </div>
          ))}

          {/* Origin label */}
          <div className={styles.originPin} style={{ left: '53.3%', top: '40%' }}>
            <span className={styles.originLabel}>JNPT, India</span>
          </div>
        </div>

      </div>
    </section>
  );
}
