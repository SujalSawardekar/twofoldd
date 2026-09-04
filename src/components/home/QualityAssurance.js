'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import styles from './QualityAssurance.module.css';

const CARDS = [
  {
    title: 'Substrate & Paper Audits',
    image: '/images/editorial/notebook-detail.jpg',
    alt: 'Paper substrate GSM and opacity inspection',
    description: 'Paper GSM, opacity, brightness, and burst factor verified before reel movement to ensure optimal ink absorption.',
    staggerClass: styles.cardStagger1,
    link: '/about-us',
  },
  {
    title: 'In-Process Line Audits',
    image: '/images/editorial/facility.jpg',
    alt: 'High-speed automated paper converting line inspection',
    description: 'Continuous monitoring of ruling line alignment, fold crease accuracy, and stitch/spine tension across automated runs.',
    staggerClass: styles.cardStagger2,
    link: '/about-us',
  },
  {
    title: 'AQL 2.5 Export Inspection',
    image: '/images/editorial/aql-inspection.jpg',
    alt: 'Acceptance Quality Level AQL 2.5 finished batch sampling',
    description: 'Acceptance Quality Level (AQL 2.5) sampling applied to finished batches prior to carton packing and JNPT port dispatch.',
    staggerClass: styles.cardStagger3,
    link: '/about-us',
  },
];

export default function QualityAssurance() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const cards = cardsRef.current.filter(Boolean);
    if (cards.length < 3) return;

    const isDesktop = window.innerWidth > 840;

    if (isDesktop) {
      // ── ULTRA-SMOOTH UPWARD CARD ALIGNMENT (NO PINNING, ZERO TOP VOID) ──
      // Card 01 starts at top (y: 0).
      // Card 02 glides UPWARD smoothly from 70px -> 0.
      // Card 03 glides UPWARD smoothly from 140px -> 0.
      // End state: All 3 cards align at the exact SAME top position (y: 0) smoothly!
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      });

      // Header entrance
      if (headerRef.current) {
        tl.fromTo(
          headerRef.current.children,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out' },
          0
        );
      }

      // Card 01 entrance fade
      tl.fromTo(
        cards[0],
        { opacity: 0.5 },
        { opacity: 1, duration: 0.6, ease: 'power2.out' },
        0.1
      );

      // Card 02 glides UPWARD from 70px to 0
      tl.fromTo(
        cards[1],
        { y: 70, opacity: 0.5 },
        { y: 0, opacity: 1, duration: 1.0, ease: 'power2.out' },
        0.2
      );

      // Card 03 glides UPWARD from 140px to 0
      tl.fromTo(
        cards[2],
        { y: 140, opacity: 0.5 },
        { y: 0, opacity: 1, duration: 1.15, ease: 'power2.out' },
        0.35
      );
    }
  }, { scope: sectionRef });

  return (
    <section className={styles.section} ref={sectionRef} id="quality-assurance">
      <div className={styles.inner}>

        {/* ── COMPACT HEADER (Zero Empty Gap) ── */}
        <div className={styles.header} ref={headerRef}>
          <span className={styles.eyebrow}>04 / QUALITY ASSURANCE</span>
          
          {/* Strictly Two Lines on Desktop */}
          <h2 className={styles.headline}>
            <span className={styles.headlineRow}>Uncompromising Standards for</span>
            <span className={styles.headlineRow}>Global Export Quality.</span>
          </h2>
        </div>

        {/* ── 3-COLUMN STAGGERED EDITORIAL CARDS ── */}
        <div className={styles.cardGrid}>
          {CARDS.map((card, idx) => (
            <div
              key={card.title}
              ref={(el) => (cardsRef.current[idx] = el)}
              className={`${styles.card} ${card.staggerClass}`}
            >
              {/* Title at Top */}
              <div className={styles.cardTop}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
              </div>

              {/* Arch / Capsule Photography Crop (Reference Matched) */}
              <div className={styles.imageWrapper}>
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 900px) 220px, 260px"
                  className={styles.cardImage}
                />
              </div>

              {/* Description & Explore Button at Bottom */}
              <div className={styles.cardBody}>
                <p className={styles.cardDesc}>{card.description}</p>
                
                <Link href={card.link} className={styles.ctaBtn} aria-label={`Explore ${card.title}`}>
                  <span>EXPLORE</span>
                  <span className={styles.arrow} aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
