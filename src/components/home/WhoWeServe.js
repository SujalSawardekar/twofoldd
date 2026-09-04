'use client';

import { useState } from 'react';
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
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className={styles.section} id="who-we-serve">
      <div className={styles.inner}>

        {/* Top Header Row */}
        <div className={styles.topRow}>
          <span className={styles.eyebrow}>04 / WHO WE SERVE</span>
          <h2 className={styles.headline}>
            Built for buyers who need a manufacturing partner, not just a vendor.
          </h2>
        </div>

        {/* Main 2-Column Grid: Typographic List (Left) + Pinned Image Panel (Right Side of Title) */}
        <div className={styles.gridContainer}>

          {/* Left: Typographic List */}
          <ul className={styles.list} role="list">
            {SEGMENTS.map((seg, i) => (
              <li
                key={seg.idx}
                className={`${styles.item} ${activeIdx === i ? styles.itemActive : ''} ${activeIdx !== null && activeIdx !== i ? styles.itemDim : ''}`}
                onMouseEnter={() => setActiveIdx(i)}
              >
                <div className={styles.itemMain}>
                  <span className={styles.itemIdx}>{seg.idx}</span>
                  <div className={styles.itemTitleGroup}>
                    <h3 className={styles.itemTitle}>{seg.title}</h3>
                    <p className={styles.itemDesc}>{seg.desc}</p>
                  </div>
                </div>

                <span className={styles.itemArrow} aria-hidden="true">
                  →
                </span>
              </li>
            ))}
          </ul>

          {/* Right Side: Pinned Image Preview Box */}
          <div className={styles.rightImagePanel}>
            {SEGMENTS.map((seg, i) => (
              <div
                key={seg.idx}
                className={`${styles.imageCard} ${activeIdx === i ? styles.imageCardActive : ''}`}
              >
                <Image
                  src={seg.img}
                  alt={seg.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 42vw"
                  className={styles.cardImg}
                  priority={i === 0}
                />
                <div className={styles.cardOverlayTag}>
                  <span className={styles.tagIdx}>{seg.idx}</span>
                  <span className={styles.tagTitle}>{seg.title}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
