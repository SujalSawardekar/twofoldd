'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import styles from './AboutFacility.module.css';

export default function AboutFacility() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Gentle scrubbed scale & elevation
    gsap.to(imageRef.current, {
      scale: 1.05,
      yPercent: 6,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    gsap.from(cardRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 80%',
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section className={styles.section} ref={sectionRef} id="manufacturing-facility" aria-label="Our Manufacturing Facility">
      <div className={styles.inner}>

        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>OUR MANUFACTURING FACILITY</span>
          <h2 className={styles.headline}>
            Manufacturing from Palghar.<br />
            <em>Built for consistent export.</em>
          </h2>
        </div>

        {/* Immersive Panoramic Facility Spread */}
        <div className={styles.stage}>

          <div className={styles.imageCanvas}>
            <Image
              ref={imageRef}
              src="/images/editorial/hero-factory.jpg"
              alt="Twofold high-speed converting lines and manufacturing facility in Palghar"
              fill
              sizes="(max-width: 1200px) 100vw, 1360px"
              className={styles.facilityImg}
            />
            <div className={styles.canvasScrim} />
          </div>

          {/* Floating Editorial Glass Card */}
          <div className={styles.floatingCard} ref={cardRef}>
            <div className={styles.badgeRow}>
              <span className={styles.locationPill}>
                <span className={styles.pulseDot} />
                PALGHAR · MAHARASHTRA · INDIA
              </span>
              <span className={styles.clusterPill}>
                ESTABLISHED NOTEBOOK HUB
              </span>
            </div>

            <p className={styles.statementText}>
              Our manufacturing facility is based in Palghar, Maharashtra — a recognised hub
              for notebook manufacturing in India.
            </p>

            <p className={styles.descriptionText}>
              This single, integrated location gives us direct access to a skilled workforce,
              established raw-material supply chains, and the production capacity required to
              fulfil high-volume export orders reliably and on schedule.
            </p>

            <div className={styles.metaRow}>
              <div className={styles.metaPoint}>
                <span className={styles.metaKey}>LOGISTICS ADVANTAGE</span>
                <span className={styles.metaVal}>Direct Corridor to Nhava Sheva (JNPT) Port</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
