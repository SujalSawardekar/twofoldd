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
      // ── PINNED SCROLL TIMELINE MATCHING &FOLD WEBFLOW REFERENCE ──
      // Stage 1: Header visible, Card 1 top (y:0), Card 2 mid (y:90px), Card 3 low (y:180px)
      // Stage 2: As scroll starts, Header glides completely UPWARD off-screen (y: -280, opacity: 0)
      // Stage 3: Card 1 moves UPWARD (0 -> -170px) to fill header space.
      //          Card 2 moves UPWARD (90px -> -170px) to align level with Card 1.
      // Stage 4: Card 3 moves UPWARD (180px -> -170px) to align level with Cards 1 & 2.
      // Unpins cleanly once all 3 cards are aligned side-by-side at y: -170px with ZERO empty top space.

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=200%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Step 1: Move Header completely UPWARD off-screen & fade out quickly
      if (headerRef.current) {
        tl.to(
          headerRef.current,
          {
            y: -280,
            opacity: 0,
            ease: 'power1.inOut',
            duration: 1,
          },
          0
        );
      }

      // Step 2: Card 01 moves UPWARD into the header space (0 -> -170px)
      tl.to(
        cards[0],
        {
          y: -170,
          ease: 'power1.inOut',
          duration: 1.2,
        },
        0
      );

      // Step 3: Card 02 moves UPWARD (90px -> -170px) to level with Card 1
      tl.fromTo(
        cards[1],
        { y: 90 },
        {
          y: -170,
          ease: 'power1.inOut',
          duration: 1.3,
        },
        0.3
      );

      // Step 4: Card 03 moves UPWARD (180px -> -170px) to level with Cards 1 & 2
      tl.fromTo(
        cards[2],
        { y: 180 },
        {
          y: -170,
          ease: 'power1.inOut',
          duration: 1.3,
        },
        1.4
      );

      // Step 5: Dwell hold so user sees all 3 cards aligned side-by-side at top
      tl.to({}, { duration: 0.5 });
    }
  }, { scope: sectionRef });

  return (
    <section className={styles.section} ref={sectionRef} id="quality-assurance">
      <div className={styles.inner}>

        {/* ── HEADER (Shifts UPWARD off-screen on scroll) ── */}
        <div className={styles.header} ref={headerRef}>
          <span className={styles.eyebrow}>04 / QUALITY ASSURANCE</span>
          
          {/* Strictly Two Lines on Desktop */}
          <h2 className={styles.headline}>
            <span className={styles.headlineRow}>Uncompromising Standards for</span>
            <span className={styles.headlineRow}>Global Export Quality.</span>
          </h2>

          <p className={styles.description}>
            Every Twofold notebook and stationery item undergoes multi-stage technical inspection for substrate integrity, ruling accuracy, binding strength, and container-export compliance before dispatch.
          </p>
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
