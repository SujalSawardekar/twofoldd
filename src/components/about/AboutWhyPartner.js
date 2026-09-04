'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import styles from './AboutWhyPartner.module.css';

const PARTNER_CHAPTERS = [
  {
    num: '01',
    category: 'FACTORY DIRECT',
    title: 'Direct Manufacturer',
    summary: 'No middlemen between factory and your order.',
    desc: 'You work directly with the converting facility that owns the machinery, controls the ruling lines, monitors stitch tension, and schedules the production calendar. Transparent pricing with zero trading markups.',
  },
  {
    num: '02',
    category: 'WORKFORCE DEPTH',
    title: 'Skilled Workforce',
    summary: 'Experienced production workforce based in a notebook-manufacturing cluster.',
    desc: 'Our Palghar plant employs seasoned operators with deep technical mastery in paper grammage handling, high-speed Smyth-sewn binding, spine folding, and precision trimming.',
  },
  {
    num: '03',
    category: 'SUPPLY RELIABILITY',
    title: 'Established Supply Chain',
    summary: 'Reliable raw-material sourcing and consistent lead times.',
    desc: 'Direct long-standing procurement from certified paper mills guarantees continuous substrate supply across 54 to 100 GSM woodfree and recycled reels without production interruptions.',
  },
  {
    num: '04',
    category: 'SCALE & VOLUME',
    title: 'Export-Ready Capacity',
    summary: 'Built for high-volume, recurring export orders.',
    desc: 'Production schedules engineered to handle container-load volumes with strict delivery deadlines, carton compression testing, palletization integrity, and maritime export packaging.',
  },
  {
    num: '05',
    category: 'QUALITY ASSURANCE',
    title: 'AQL Quality Control',
    summary: 'Inspection applied before every shipment leaves the facility.',
    desc: 'Standardized Acceptance Quality Limit (AQL) sampling protocols applied across ruling alignment, burst strength, and edge trimming before any container is sealed for dispatch.',
  },
  {
    num: '06',
    category: 'TRADE HERITAGE',
    title: 'Paper Trade Heritage',
    summary: 'Three decades of family heritage in the paper trade.',
    desc: 'Roots in the paper industry since 1988 mean we understand substrates, fibers, and export standards from the ground up — fostering lasting partnerships built on mutual integrity.',
  },
];

export default function AboutWhyPartner() {
  const sectionRef = useRef(null);
  const [currentIdx, setCurrentIdx] = useState(0);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const totalChapters = PARTNER_CHAPTERS.length;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: `+=${totalChapters * 85}%`,
      pin: true,
      scrub: 0.6,
      anticipatePin: 1,
      onUpdate: (self) => {
        const step = Math.min(
          totalChapters - 1,
          Math.floor(self.progress * totalChapters)
        );
        setCurrentIdx(step);
      },
    });
  }, { scope: sectionRef });

  const active = PARTNER_CHAPTERS[currentIdx];

  return (
    <section className={styles.section} ref={sectionRef} id="why-partner" aria-label="Why Partner With Us">
      <div className={styles.inner}>

        {/* Top Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>WHY PARTNER WITH US</span>
          <h2 className={styles.headline}>
            Six Pillars of <em>Reliability.</em>
          </h2>
        </div>

        {/* Pinned Editorial Storytelling Stage */}
        <div className={styles.stage}>

          {/* Left: Persistent Large Anchor Number */}
          <div className={styles.anchorCol}>
            <div className={styles.anchorWrapper}>
              <span className={styles.hugeAnchorNum} key={active.num}>
                {active.num}
              </span>
              <div className={styles.chapterBadge}>
                CHAPTER 0{currentIdx + 1} OF 0{PARTNER_CHAPTERS.length}
              </div>
            </div>

            {/* Micro Progress Indicator */}
            <div className={styles.progressDots}>
              {PARTNER_CHAPTERS.map((c, i) => (
                <button
                  key={c.num}
                  type="button"
                  onClick={() => setCurrentIdx(i)}
                  className={`${styles.dotBtn} ${i === currentIdx ? styles.dotActive : ''}`}
                  aria-label={`Go to pillar ${c.num}: ${c.title}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Smoothly Transitioning Content */}
          <div className={styles.contentCol}>
            <div className={styles.chapterCard} key={active.num}>
              
              <div className={styles.categoryTag}>
                {active.category}
              </div>

              <h3 className={styles.chapterTitle}>
                {active.title}
              </h3>

              <p className={styles.chapterSummary}>
                {active.summary}
              </p>

              <p className={styles.chapterDesc}>
                {active.desc}
              </p>

              <div className={styles.trustSeal}>
                <span className={styles.sealDot} />
                DIRECT FACTORY GUARANTEE · PALGHAR FACILITY
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
