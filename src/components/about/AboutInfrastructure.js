'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import styles from './AboutInfrastructure.module.css';

const CAPABILITIES = [
  {
    num: '01',
    title: 'SKILLED WORKFORCE',
    desc: 'Experienced production staff based in an established notebook-manufacturing cluster, bringing years of machine operation, ruling alignment, and bookbinding expertise.',
    meta: 'PALGHAR MANUFACTURING CLUSTER',
  },
  {
    num: '02',
    title: 'ESTABLISHED SUPPLY CHAIN',
    desc: 'Reliable raw-material sourcing supporting consistent lead times, with established mill relationships for woodfree, recycled, and specialty paper substrates.',
    meta: 'CERTIFIED SUBSTRATE SOURCING',
  },
  {
    num: '03',
    title: 'EXPORT-READY PRODUCTION',
    desc: 'Production capacity built for recurring, high-volume export orders, container load optimization, and structured lead times for international buyers.',
    meta: 'CONTAINER SCALE CAPACITY',
  },
  {
    num: '04',
    title: 'STRATEGIC LOCATION',
    desc: "Palghar's manufacturing ecosystem with immediate proximity to Nhava Sheva (JNPT) port for direct customs transit, reduced drayage, and dependable shipping schedules.",
    meta: 'NHAVA SHEVA (JNPT) CORRIDOR',
  },
];

export default function AboutInfrastructure() {
  const sectionRef = useRef(null);
  const rowsRef = useRef(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const items = rowsRef.current?.querySelectorAll(`.${styles.capabilityRow}`) || [];
    gsap.from(items, {
      y: 40,
      opacity: 0,
      stagger: 0.18,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: rowsRef.current,
        start: 'top 75%',
        once: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section className={styles.section} ref={sectionRef} id="infrastructure" aria-label="Infrastructure Highlights">
      <div className={styles.inner}>

        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>INFRASTRUCTURE HIGHLIGHTS</span>
          <h2 className={styles.headline}>
            Engineered for Precision &amp; <em>Volume.</em>
          </h2>
          <p className={styles.headerCopy}>
            Direct manufacturing infrastructure designed to eliminate intermediaries and deliver
            predictable production cycles for international procurement.
          </p>
        </div>

        {/* Numbered Editorial Capability Rows */}
        <div className={styles.capabilityList} ref={rowsRef}>
          {CAPABILITIES.map((cap) => (
            <div key={cap.num} className={styles.capabilityRow}>
              
              <div className={styles.numberCol}>
                <span className={styles.hugeNum}>{cap.num}</span>
              </div>

              <div className={styles.bodyCol}>
                <div className={styles.metaBadge}>{cap.meta}</div>
                <h3 className={styles.capTitle}>{cap.title}</h3>
                <p className={styles.capDesc}>{cap.desc}</p>
              </div>

              <div className={styles.arrowCol} aria-hidden="true">
                <span className={styles.arrowIcon}>→</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
