'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import styles from './AboutQuality.module.css';

const QUALITY_AUDITS = [
  {
    title: 'Paper Substrate Verification',
    desc: 'Paper GSM, opacity, tensile strength, and ink bleed resistance verified before reel-fed converting begins.',
  },
  {
    title: 'In-Line Registration Audits',
    desc: 'Continuous automated checks on ruling line alignment, fold crease accuracy, and stitch tension during runs.',
  },
  {
    title: 'AQL Pre-Shipment Inspection',
    desc: 'Structured Acceptance Quality Limit sampling across every production batch prior to export packing and sealing.',
  },
];

export default function AboutQuality() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Smooth subtle parallax on inspection photo
    gsap.to(imageRef.current, {
      yPercent: -12,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }, { scope: sectionRef });

  return (
    <section className={styles.section} ref={sectionRef} id="quality-compliance" aria-label="Quality and Compliance">
      <div className={styles.inner}>

        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>QUALITY &amp; COMPLIANCE</span>
          <h2 className={styles.headline}>
            Consistency<br />
            <em>Before Dispatch.</em>
          </h2>
        </div>

        {/* 2-Column Editorial Spread */}
        <div className={styles.grid}>

          {/* Left: Quality Inspection Image with Frame */}
          <div className={styles.mediaCol}>
            <div className={styles.imageFrame} ref={imageRef}>
              <Image
                src="/images/editorial/aql-inspection.jpg"
                alt="Twofold quality control specialist performing AQL paper inspection"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.aqlImg}
              />
              <div className={styles.inspectionBadge}>
                <span className={styles.badgePulse} />
                AQL 2.5 SAMPLING PROTOCOL
              </div>
            </div>
          </div>

          {/* Right: Copy & Structured Audits */}
          <div className={styles.textCol}>
            
            <p className={styles.mainStatement}>
              Every product is inspected against defined AQL (Acceptable Quality Limit)
              standards before it leaves our facility, ensuring consistent quality across
              every shipment — whether it's a trial order or a container-load consignment.
            </p>

            <div className={styles.auditsList}>
              {QUALITY_AUDITS.map((item, idx) => (
                <div key={idx} className={styles.auditRow}>
                  <div className={styles.auditNum}>0{idx + 1}</div>
                  <div className={styles.auditBody}>
                    <h3 className={styles.auditTitle}>{item.title}</h3>
                    <p className={styles.auditDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.footerNote}>
              <span className={styles.noteLabel}>EXPORT ASSURANCE</span>
              <span className={styles.noteText}>Every carton labeled, batch-coded and inspected before container stuffing.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
