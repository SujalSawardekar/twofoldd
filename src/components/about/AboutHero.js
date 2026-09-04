'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import styles from './AboutHero.module.css';

export default function AboutHero() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const imageFrameRef = useRef(null);
  const narrativeRef = useRef(null);
  const pillsRef = useRef(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Top metadata row reveal
    tl.from(`.${styles.topRow}`, {
      y: 16,
      opacity: 0,
      duration: 0.6,
      delay: 0.1,
    })
    // Massive headline reveal
    .from(headlineRef.current?.children || [], {
      y: 60,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
    }, '-=0.3')
    // Asymmetric architectural facility reveal
    .fromTo(
      imageFrameRef.current,
      { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)', y: 30 },
      { clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)', y: 0, duration: 1.2, ease: 'power4.inOut' },
      '-=0.6'
    )
    // Editorial narrative & metadata strip reveal
    .from(narrativeRef.current, {
      y: 25,
      opacity: 0,
      duration: 0.8,
    }, '-=0.5')
    .from(pillsRef.current?.children || [], {
      y: 15,
      opacity: 0,
      stagger: 0.08,
      duration: 0.5,
    }, '-=0.4');

    // Smooth subtle parallax on the facility image during scroll
    gsap.to(`.${styles.facilityImg}`, {
      yPercent: 10,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }, { scope: containerRef });

  return (
    <section className={styles.section} ref={containerRef} aria-label="About Twofold and Infrastructure Banner">
      
      {/* Editorial Decorative Grid Corner Lines */}
      <div className={styles.cornerMarks} aria-hidden="true">
        <span className={`${styles.corner} ${styles.cornerTL}`} />
        <span className={`${styles.corner} ${styles.cornerTR}`} />
      </div>

      <div className={styles.inner}>

        {/* ── TOP METADATA & BREADCRUMB ROW ── */}
        <div className={styles.topRow}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadLink}>Home</Link>
            <span className={styles.breadSep}>/</span>
            <span className={styles.breadCurrent}>About Us</span>
          </nav>

          <div className={styles.technicalCoords}>
            <span className={styles.coordDot} />
            <span>19°41&apos;N 72°45&apos;E · PALGHAR HUB · DIRECT CONVERTING</span>
          </div>
        </div>

        {/* ── OVERSIZED EDITORIAL HEADLINE ── */}
        <div className={styles.masthead}>
          <span className={styles.eyebrow}>ABOUT TWOFOLD</span>

          <h1 className={styles.headline} ref={headlineRef}>
            <span className={styles.headlineRow1}>About Us &amp;</span>
            <span className={styles.headlineRow2}>
              <em>Infrastructure.</em>
            </span>
          </h1>
        </div>

        {/* ── ASYMMETRIC PANORAMIC FACILITY COMPOSITION ── */}
        <div className={styles.visualComposition}>
          <div className={styles.imageFrame} ref={imageFrameRef}>
            <Image
              src="/images/editorial/facility.jpg"
              alt="Twofold high-speed notebook manufacturing facility at Palghar, Maharashtra"
              fill
              priority
              sizes="(max-width: 1400px) 100vw, 1400px"
              className={styles.facilityImg}
            />
            <div className={styles.imageGradient} />

            {/* Inset Editorial Framing Tags */}
            <div className={styles.frameTagTL}>
              <span className={styles.tagNum}>FACILITY SPECIMEN</span>
              <span className={styles.tagLine}>PALGHAR CONVERTING PLANT</span>
            </div>

            <div className={styles.frameTagBR}>
              <span className={styles.tagSub}>JNPT EXPORT CORRIDOR · DIRECT PORT ACCESS</span>
            </div>
          </div>
        </div>

        {/* ── LOWER EDITORIAL NARRATIVE & METADATA BAR ── */}
        <div className={styles.lowerSpread}>
          
          <div className={styles.narrativeCol} ref={narrativeRef}>
            <p className={styles.leadThesis}>
              Twofold is a Palghar-based notebook and stationery manufacturer built on
              paper-trade heritage, manufacturing experience and export capability.
            </p>
          </div>

          <div className={styles.metadataCol}>
            <div className={styles.pills} ref={pillsRef}>
              <div className={styles.pill}>
                <span className={styles.pillBullet} />
                <span className={styles.pillText}>PALGHAR, MAHARASHTRA</span>
              </div>

              <div className={styles.pill}>
                <span className={styles.pillBullet} />
                <span className={styles.pillText}>PAPER TRADE SINCE 1988</span>
              </div>

              <div className={styles.pill}>
                <span className={styles.pillBullet} />
                <span className={styles.pillText}>DIRECT FACTORY SOURCING</span>
              </div>
            </div>

            <span className={styles.bottomCitation}>
              INTEGRATED MANUFACTURING · CONTAINER LOAD SCALE
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
