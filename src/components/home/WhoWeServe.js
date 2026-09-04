'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import styles from './WhoWeServe.module.css';

const SEGMENTS = [
  {
    idx:   '01',
    title: 'Importers & Traders',
    desc:  'Bulk volume supply with reliable, export-ready consistency.',
    img:   '/images/editorial/serve-importers.jpg',
    alt:   'Shrink-wrapped pallets of stationery ready for export',
  },
  {
    idx:   '02',
    title: 'Chain Stores',
    desc:  'Retail-ready products tailored for organised shelf placement.',
    img:   '/images/editorial/serve-chainstores.jpg',
    alt:   'Stationery display shelves in a modern retail store',
  },
  {
    idx:   '03',
    title: 'Stationery Brands',
    desc:  'Private label manufacturing to your exact specifications.',
    img:   '/images/editorial/serve-brands.jpg',
    alt:   'Premium hardcover notebooks arranged for product photography',
  },
  {
    idx:   '04',
    title: 'Educational Institutes',
    desc:  'Direct supply of customised notebooks and exercise books.',
    img:   '/images/editorial/serve-education.jpg',
    alt:   'Exercise books for educational use',
  },
];

export default function WhoWeServe() {
  const [activeIdx, setActiveIdx] = useState(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <section 
      className={styles.section} 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setActiveIdx(null)}
      id="who-we-serve"
    >
      <div className={styles.inner}>

        {/* Top Header Row */}
        <div className={styles.topRow}>
          <span className={styles.eyebrow}>04 / WHO WE SERVE</span>
          <h2 className={styles.headline}>
            Built for buyers who need a manufacturing partner, not just a vendor.
          </h2>
        </div>

        {/* Large Typographic List with Floating Cursor-Following Image Overlay */}
        <div className={styles.listWrapper}>
          <ul className={styles.list} role="list">
            {SEGMENTS.map((seg, i) => (
              <li
                key={seg.idx}
                className={`${styles.item} ${activeIdx === i ? styles.itemActive : ''} ${activeIdx !== null && activeIdx !== i ? styles.itemDim : ''}`}
                onMouseEnter={() => setActiveIdx(i)}
              >
                <div className={styles.itemHeader}>
                  <span className={styles.itemIdx}>{seg.idx}</span>
                  <h3 className={styles.itemTitle}>{seg.title}</h3>
                </div>
                
                <div className={styles.itemRight}>
                  <p className={styles.itemDesc}>{seg.desc}</p>
                  <span className={styles.itemArrow} aria-hidden="true">
                    →
                  </span>
                </div>
              </li>
            ))}
          </ul>

          {/* Floating Image Overlay (Directly overlaps title text on hover) */}
          <div
            className={`${styles.floatingOverlay} ${activeIdx !== null ? styles.floatingOverlayVisible : ''}`}
            style={{
              transform: `translate3d(${coords.x}px, ${coords.y}px, 0) translate(-40%, -50%)`,
            }}
          >
            {SEGMENTS.map((seg, i) => (
              <div
                key={seg.idx}
                className={`${styles.floatingCard} ${activeIdx === i ? styles.floatingCardActive : ''}`}
              >
                <Image
                  src={seg.img}
                  alt={seg.alt}
                  width={380}
                  height={260}
                  className={styles.floatingImg}
                  priority={i === 0}
                />
                <div className={styles.cardTag}>{seg.title}</div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
