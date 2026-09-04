'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import styles from './AboutTimeline.module.css';

const MILESTONES = [
  {
    tag: 'HERITAGE ROOTS',
    year: '1988',
    title: 'Family Roots in the Paper Trade',
    description: 'Three decades of foundation in paper trading, establishing deep relationships with certified mills, understanding substrate grammages, and developing an enduring standard for paper goods.',
  },
  {
    tag: 'PRODUCTION SCALING',
    year: 'MANUFACTURING ERA',
    title: 'Integrated Factory Operations Begin',
    description: 'Transitioning into direct volume converting at our Palghar facility. Building over a decade of hands-on production, precision folding, wire binding, and container-load export capability.',
  },
  {
    tag: 'GLOBAL HORIZON',
    year: 'TODAY',
    title: 'Exporting Across Five Global Regions',
    description: 'Twofold actively manufactures and exports high-volume notebooks and paper stationery to distributors, wholesalers, and retail brands across Africa, the Middle East, Europe, and the Americas.',
  },
];

export default function AboutTimeline() {
  const sectionRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const totalSteps = MILESTONES.length;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${totalSteps * 90}%`,
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        onUpdate: (self) => {
          const step = Math.min(
            totalSteps - 1,
            Math.floor(self.progress * totalSteps)
          );
          setActiveIdx(step);
        },
      },
    });

    // Progress bar line fill
    tl.to(`.${styles.progressFill}`, {
      height: '100%',
      ease: 'none',
    });
  }, { scope: sectionRef });

  return (
    <section className={styles.section} ref={sectionRef} id="heritage-timeline" aria-label="Twofold Heritage Timeline">
      <div className={styles.inner}>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>HERITAGE &amp; MILESTONES</span>
          <h2 className={styles.headline}>
            A Journey Defined by <em>Continuity.</em>
          </h2>
        </div>

        {/* Pinned Timeline Container */}
        <div className={styles.pinnedTimeline}>

          {/* Left: Oversized Persistent Anchor Year */}
          <div className={styles.yearCol}>
            <div className={styles.tagLabel}>
              {MILESTONES[activeIdx].tag}
            </div>

            <div className={styles.largeYear}>
              {MILESTONES[activeIdx].year}
            </div>

            <div className={styles.stepIndicator}>
              MILESTONE 0{activeIdx + 1} / 0{MILESTONES.length}
            </div>
          </div>

          {/* Center: Thin Hairline Gold Progress Track */}
          <div className={styles.trackCol}>
            <div className={styles.progressTrack}>
              <div className={styles.progressFill} />
            </div>

            <div className={styles.dotsContainer}>
              {MILESTONES.map((_, i) => (
                <div
                  key={i}
                  className={`${styles.trackDot} ${i <= activeIdx ? styles.activeDot : ''}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Milestone Story Content */}
          <div className={styles.contentCol}>
            <div className={styles.cardContent} key={activeIdx}>
              <h3 className={styles.milestoneTitle}>
                {MILESTONES[activeIdx].title}
              </h3>
              <p className={styles.milestoneDesc}>
                {MILESTONES[activeIdx].description}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
