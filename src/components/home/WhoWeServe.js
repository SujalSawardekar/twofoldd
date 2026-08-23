'use client';

import { useRef, useState } from 'react';
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
    // No generated image — use styled placeholder
    img:   null,
    alt:   'Exercise books for educational use',
  },
];

export default function WhoWeServe() {
  const [activeIdx, setActiveIdx] = useState(null);
  const sectionRef = useRef(null);

  return (
    <section className={styles.section} ref={sectionRef} id="who-we-serve">
      <div className={styles.inner}>

        {/* Top row */}
        <div className={styles.topRow}>
          <span className={styles.eyebrow}>Who We Serve</span>
          <p className={styles.subtext}>
            Built for buyers who need a manufacturing partner, not just a vendor.
          </p>
        </div>

        {/* Main interactive block */}
        <div className={styles.interactiveBlock}>

          {/* Left: typographic list */}
          <ul className={styles.list} role="list">
            {SEGMENTS.map((seg, i) => (
              <li
                key={seg.idx}
                className={`${styles.item} ${activeIdx === i ? styles.itemActive : ''} ${activeIdx !== null && activeIdx !== i ? styles.itemDim : ''}`}
                onMouseEnter={() => setActiveIdx(i)}
                onMouseLeave={() => setActiveIdx(null)}
              >
                <span className={styles.itemIdx}>{seg.idx}</span>
                <span className={styles.itemTitle}>{seg.title}</span>
                <span className={styles.itemDesc}>{seg.desc}</span>
                <span className={styles.itemArrow} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12M12 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </li>
            ))}
          </ul>

          {/* Right: dynamic image panel */}
          <div className={styles.imagePanel} aria-hidden="true">
            {SEGMENTS.map((seg, i) => (
              <div
                key={seg.idx}
                className={`${styles.panelSlot} ${activeIdx === i ? styles.panelSlotVisible : ''}`}
              >
                {seg.img ? (
                  <Image
                    src={seg.img}
                    alt={seg.alt}
                    fill
                    sizes="(max-width: 900px) 0px, 40vw"
                    className={styles.panelImg}
                  />
                ) : (
                  <div className={styles.panelPlaceholder} />
                )}
              </div>
            ))}

            {/* Default state when nothing is hovered */}
            <div className={`${styles.defaultSlate} ${activeIdx === null ? styles.defaultSlateVisible : ''}`}>
              <span className={styles.defaultHint}>Hover a segment</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
