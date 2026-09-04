'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import styles from './AboutStory.module.css';

export default function AboutStory() {
  const sectionRef = useRef(null);
  const floatImgRef = useRef(null);
  const narrativeRef = useRef(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Headline & story blocks reveal
    const blocks = narrativeRef.current?.querySelectorAll(`.${styles.storyBlock}`) || [];
    gsap.from(blocks, {
      y: 35,
      opacity: 0,
      stagger: 0.2,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: narrativeRef.current,
        start: 'top 75%',
        once: true,
      },
    });

    // Floating secondary photo parallax
    gsap.to(floatImgRef.current, {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.8,
      },
    });
  }, { scope: sectionRef });

  return (
    <section className={styles.section} ref={sectionRef} id="our-story" aria-label="Our Story">
      <div className={styles.inner}>

        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>OUR STORY</span>
          <h2 className={styles.headline}>
            Built on Paper.<br />
            <em>Built for the World.</em>
          </h2>
        </div>

        {/* Asymmetric Composition */}
        <div className={styles.composition}>

          {/* Left: Narrative Blocks */}
          <div className={styles.narrative} ref={narrativeRef}>

            <div className={styles.storyBlock}>
              <div className={styles.blockMarker}>01</div>
              <p className={styles.leadText}>
                Operating from Palghar, Maharashtra, Twofold brings over a decade of
                hands-on experience manufacturing and exporting paper stationery to
                international markets.
              </p>
            </div>

            <div className={styles.storyBlock}>
              <div className={styles.blockMarker}>02</div>
              <p className={styles.bodyText}>
                Our connection to the paper trade runs deeper still — three decades, in fact —
                through a family history in the paper trade since 1988.
              </p>
            </div>

            <div className={styles.storyBlock}>
              <div className={styles.blockMarker}>03</div>
              <p className={styles.accentText}>
                That heritage shapes the way we manufacture, ship and build relationships
                today: built on <strong>trust</strong>, <strong>timeliness</strong> and <strong>consistency</strong>.
              </p>
            </div>

            {/* Editorial Stats Strip */}
            <div className={styles.statsStrip}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>Years Manufacturing</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNumber}>1988</span>
                <span className={styles.statLabel}>Paper Trade Roots</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Direct Factory</span>
              </div>
            </div>

          </div>

          {/* Right: Overlapping Editorial Duo with Dot Accent */}
          <div className={styles.mediaSide}>
            
            {/* Subtle decorative dot grid */}
            <div className={styles.dotGrid} aria-hidden="true" />

            {/* Primary Image: Craftsmanship & Detail */}
            <div className={styles.primaryFrame}>
              <Image
                src="/images/editorial/notebook-detail.jpg"
                alt="Precision notebook manufacturing craftsmanship"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                className={styles.storyImg}
              />
              <div className={styles.frameTag}>CRAFTSMANSHIP &amp; ALIGNMENT</div>
            </div>

            {/* Overlapping Floating Image: Material & Paper */}
            <div className={styles.floatingFrame} ref={floatImgRef}>
              <Image
                src="/images/editorial/hero-journal.jpg"
                alt="Twofold premium paper stock and journal finishing"
                fill
                sizes="(max-width: 900px) 180px, 240px"
                className={styles.floatImg}
              />
              <div className={styles.floatTag}>PALGHAR SPECIMEN</div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
