'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import styles from './AboutFacility.module.css';

export default function AboutFacility() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const bottomBarRef = useRef(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Subtle parallax scale & drift on factory photograph
    gsap.to(imageRef.current, {
      scale: 1.08,
      yPercent: 8,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2,
      },
    });

    // Content reveal on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true,
      },
      defaults: { ease: 'power3.out' },
    });

    tl.from(`.${styles.topRibbon}`, {
      y: -20,
      opacity: 0,
      duration: 0.7,
    })
    .from(`.${styles.eyebrow}`, {
      y: 20,
      opacity: 0,
      duration: 0.5,
    }, '-=0.4')
    .from(`.${styles.headline}`, {
      y: 40,
      opacity: 0,
      duration: 0.9,
    }, '-=0.3')
    .from(contentRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
    }, '-=0.5')
    .from(bottomBarRef.current?.children || [], {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
    }, '-=0.4');

  }, { scope: sectionRef });

  return (
    <section
      className={styles.section}
      ref={sectionRef}
      id="manufacturing-facility"
      aria-label="Our Manufacturing Facility in Palghar"
    >
      {/* ── IMMERSIVE FULL-CANVAS FACTORY PHOTOGRAPH ── */}
      <div className={styles.canvasWrapper}>
        <Image
          ref={imageRef}
          src="/images/editorial/hero-factory.jpg"
          alt="Twofold high-speed notebook converting lines and factory floor in Palghar, Maharashtra"
          fill
          sizes="100vw"
          priority={false}
          className={styles.canvasImg}
        />
        {/* Cinematic Dual-Zone Dark Gradient Scrim (Leaves machine clarity while elevating legibility) */}
        <div className={styles.scrimPrimary} />
        <div className={styles.scrimVignette} />
      </div>

      {/* ── EDITORIAL INFORMATION INTEGRATED DIRECTLY INTO CANVAS (NO FLOATING WHITE CARDS) ── */}
      <div className={styles.canvasContent}>
        
        {/* Top Architectural Ribbon */}
        <div className={styles.topRibbon}>
          <div className={styles.chapterTag}>
            <span className={styles.accentSlash}>//</span>
            <span>CHAPTER 04 · INDUSTRIAL INFRASTRUCTURE</span>
          </div>

          <div className={styles.geoCoordinates}>
            <span className={styles.pulseDot} />
            <span>PALGHAR · 19°41&apos;N 72°45&apos;E · 95 KM TO JNPT PORT</span>
          </div>
        </div>

        {/* Center / Asymmetric Typography Composition */}
        <div className={styles.editorialSpread}>
          <div className={styles.masthead}>
            <span className={styles.eyebrow}>OUR MANUFACTURING FACILITY</span>
            <h2 className={styles.headline}>
              Manufacturing from Palghar.<br />
              <span className={styles.headlineItalic}>Built for consistent export.</span>
            </h2>
          </div>

          {/* Integrated Editorial Narrative with Restrained Gold Datum Line */}
          <div className={styles.narrativeBlock} ref={contentRef}>
            <div className={styles.goldLine} />
            <div className={styles.narrativeBody}>
              <p className={styles.leadStatement}>
                Our manufacturing facility is based in Palghar, Maharashtra — a recognised hub
                for notebook manufacturing in India.
              </p>
              <p className={styles.supportingText}>
                This single, integrated location gives us direct access to a skilled workforce,
                established raw-material supply chains, and the production capacity required to
                fulfil high-volume export orders reliably and on schedule.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Technical Reference Bar */}
        <div className={styles.bottomBar} ref={bottomBarRef}>
          <div className={styles.referenceCol}>
            <span className={styles.refNum}>01</span>
            <div className={styles.refInfo}>
              <span className={styles.refLabel}>MANUFACTURING HUB</span>
              <span className={styles.refVal}>Palghar Industrial Cluster, Maharashtra, India</span>
            </div>
          </div>

          <div className={styles.referenceCol}>
            <span className={styles.refNum}>02</span>
            <div className={styles.refInfo}>
              <span className={styles.refLabel}>LOGISTICS CORRIDOR</span>
              <span className={styles.refVal}>Direct 95 km Highway Access to Nhava Sheva (JNPT) Port</span>
            </div>
          </div>

          <div className={styles.referenceCol}>
            <span className={styles.refNum}>03</span>
            <div className={styles.refInfo}>
              <span className={styles.refLabel}>CONVERTING CAPACITY</span>
              <span className={styles.refVal}>Continuous High-Volume Reel-to-Notebook Converting</span>
            </div>
          </div>
        </div>

      </div>

      {/* Editorial Registration Crosshairs at Canvas Borders */}
      <div className={styles.crosshairTL} aria-hidden="true">+</div>
      <div className={styles.crosshairTR} aria-hidden="true">+</div>
      <div className={styles.crosshairBL} aria-hidden="true">+</div>
      <div className={styles.crosshairBR} aria-hidden="true">+</div>
    </section>
  );
}
