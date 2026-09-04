'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import styles from './AboutGlobalReach.module.css';

const EXPORT_STEPS = [
  {
    num: '01',
    category: 'PHASE 01 · SPECIFICATION & CONFIRMATION',
    title: 'Order Confirmation',
    summary: 'Detailed technical specifications and packaging locked.',
    desc: 'Substrate GSM, page count specs, ruling lines, binding formats, and carton packaging parameters verified and confirmed before machine scheduling.',
  },
  {
    num: '02',
    category: 'PHASE 02 · HIGH-SPEED CONVERTING',
    title: 'Production & Converting',
    summary: 'Automated converting and precision binding at Palghar.',
    desc: 'Reel-fed flexographic ruling, automated folding, Smyth-sewn stitching, wire-O binding, and precision trimming executed on dedicated high-speed production lines.',
  },
  {
    num: '03',
    category: 'PHASE 03 · EXPORT QUALITY AUDIT',
    title: 'Pre-Shipment AQL Inspection',
    summary: 'Standardized sampling protocol before packing.',
    desc: 'Every batch is sampled against defined Acceptance Quality Limit (AQL 2.5) standards for ruling alignment, burst strength, and edge integrity prior to carton packing.',
  },
  {
    num: '04',
    category: 'PHASE 04 · CUSTOMS & MARITIME COMPLIANCE',
    title: 'Export Documentation',
    summary: 'Full maritime and customs compliance paperwork.',
    desc: 'Complete export filings: Commercial Invoice, Packing List, Certificate of Origin, Bill of Lading, and phytosanitary certificates prepared with zero discrepancies.',
  },
  {
    num: '05',
    category: 'PHASE 05 · PORT GATE-IN & DISPATCH',
    title: 'Nhava Sheva / JNPT Transit',
    summary: "Direct bonded corridor from Palghar to India's premier port.",
    desc: 'Short transit distance from our Palghar plant to Nhava Sheva (JNPT) container terminals allows expedited port gate-in, container stuffing, and maritime loading.',
  },
  {
    num: '06',
    category: 'PHASE 06 · OVERSEAS DISCHARGE',
    title: 'Destination Port Delivery',
    summary: 'Seamless arrival across 5 global continental markets.',
    desc: 'Ocean container dispatch with real-time shipment tracking, bill of lading releases, and smooth customs clearance for distributors across Africa, the Middle East, Europe, and the Americas.',
  },
];

export default function AboutGlobalReach() {
  const sectionRef = useRef(null);
  const [currentIdx, setCurrentIdx] = useState(0);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const totalSteps = EXPORT_STEPS.length;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: `+=${totalSteps * 85}%`,
      pin: true,
      scrub: 0.6,
      anticipatePin: 1,
      onUpdate: (self) => {
        const step = Math.min(
          totalSteps - 1,
          Math.floor(self.progress * totalSteps)
        );
        setCurrentIdx(step);
      },
    });
  }, { scope: sectionRef });

  const active = EXPORT_STEPS[currentIdx];

  return (
    <section className={styles.section} ref={sectionRef} id="step-by-step-workflow" aria-label="Step-by-Step Export Workflow">
      <div className={styles.inner}>

        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>STEP-BY-STEP WORKFLOW</span>
          <h2 className={styles.headline}>
            From Order to <em>Global Delivery.</em>
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
              <div className={styles.stepBadge}>
                EXPORT STEP 0{currentIdx + 1} OF 0{EXPORT_STEPS.length}
              </div>
            </div>

            {/* Micro Progress Indicator */}
            <div className={styles.progressDots}>
              {EXPORT_STEPS.map((step, i) => (
                <button
                  key={step.num}
                  type="button"
                  onClick={() => setCurrentIdx(i)}
                  className={`${styles.dotBtn} ${i === currentIdx ? styles.dotActive : ''}`}
                  aria-label={`Go to export step ${step.num}: ${step.title}`}
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
                DIRECT FACTORY EXPORT · NHAVA SHEVA (JNPT) CORRIDOR
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
