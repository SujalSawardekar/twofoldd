'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import styles from './AboutGlobalReach.module.css';

const REGIONS = [
  { name: 'North America', hub: 'East & West Coast Entry Ports' },
  { name: 'Latin America / Central America', hub: 'Atlantic & Pacific Gateways' },
  { name: 'United Kingdom / Europe', hub: 'Rotterdam, Felixstowe & Hamburg' },
  { name: 'Middle East (GCC)', hub: 'Jebel Ali & Gulf Distribution' },
  { name: 'West Africa', hub: 'Lagos, Tema & Regional Hubs' },
];

const PROCESS_STEPS = [
  { num: '01', title: 'Order Confirmation', desc: 'Detailed substrate selection, page count specs, ruling lines, and packaging parameters locked.' },
  { num: '02', title: 'Production & Converting', desc: 'High-speed automated reel-fed converting, precision flexographic ruling, folding, and binding.' },
  { num: '03', title: 'Pre-Shipment AQL Inspection', desc: 'Standardized Acceptance Quality Limit inspection sampling for zero-defect container dispatch.' },
  { num: '04', title: 'Export Documentation', desc: 'Full customs compliance: Bills of Lading, Certificate of Origin, Packing Lists, and phytosanitary filings.' },
  { num: '05', title: 'Nhava Sheva / JNPT Port', desc: 'Direct transit from Palghar plant to India’s premier container port for bonded yard loading.' },
  { num: '06', title: 'Destination Port Delivery', desc: 'Ocean container tracking and seamless handover to overseas importer, distributor or retailer.' },
];

export default function AboutGlobalReach() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Sequential process highlight on scroll
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 50%',
      end: 'bottom 70%',
      onUpdate: (self) => {
        const step = Math.min(
          PROCESS_STEPS.length - 1,
          Math.floor(self.progress * PROCESS_STEPS.length)
        );
        setActiveStep(step);
      },
    });
  }, { scope: sectionRef });

  return (
    <section className={styles.section} ref={sectionRef} id="global-reach" aria-label="Global Reach & Export Process">
      <div className={styles.inner}>

        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>GLOBAL REACH &amp; EXPORT PIPELINE</span>
          <h2 className={styles.headline}>
            From Palghar<br />
            <em>to the World.</em>
          </h2>
          <p className={styles.copy}>
            From our facility in Palghar, Maharashtra, we export to distributors,
            wholesalers and importers across Africa, the Middle East, Europe, North America
            and Central America.
          </p>
        </div>

        {/* Geographic Destination Badges */}
        <div className={styles.regionGrid}>
          {REGIONS.map((r) => (
            <div key={r.name} className={styles.regionCard}>
              <span className={styles.regionDot} />
              <div className={styles.regionText}>
                <span className={styles.regionName}>{r.name}</span>
                <span className={styles.regionHub}>{r.hub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Corridor Graphic */}
        <div className={styles.corridorBanner}>
          <div className={styles.corridorStep}>
            <span className={styles.cLabel}>ORIGIN</span>
            <span className={styles.cValue}>Palghar Manufacturing Plant</span>
          </div>
          <div className={styles.cArrow}>→</div>
          <div className={styles.corridorStep}>
            <span className={styles.cLabel}>PORT OF DISPATCH</span>
            <span className={styles.cValue}>Nhava Sheva (JNPT) Port</span>
          </div>
          <div className={styles.cArrow}>→</div>
          <div className={styles.corridorStep}>
            <span className={styles.cLabel}>DESTINATIONS</span>
            <span className={styles.cValue}>5 Global Continental Markets</span>
          </div>
        </div>

        {/* 6-Step Sequential Export Process */}
        <div className={styles.processArea}>
          <div className={styles.processHeader}>
            <span className={styles.processEyebrow}>STEP-BY-STEP WORKFLOW</span>
            <h3 className={styles.processTitle}>The Twofold Export Sequence</h3>
          </div>

          <div className={styles.stepsGrid}>
            {PROCESS_STEPS.map((s, idx) => (
              <div
                key={s.num}
                className={`${styles.stepCard} ${idx <= activeStep ? styles.stepCardActive : ''}`}
              >
                <div className={styles.stepNumWrap}>
                  <span className={styles.stepNum}>{s.num}</span>
                  <div className={styles.stepLine} />
                </div>
                <h4 className={styles.stepName}>{s.title}</h4>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
