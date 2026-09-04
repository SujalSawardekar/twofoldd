'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import styles from './AboutQuality.module.css';

const AUDIT_STAGES = [
  {
    step: '01',
    stage: 'SUBSTRATE VERIFICATION',
    title: 'Paper Substrate Verification',
    desc: 'Paper GSM, opacity, tensile strength, and ink bleed resistance verified before reel-fed converting begins.',
    metric: 'GSM TOLERANCE ±2% · BURST FACTOR VERIFIED',
  },
  {
    step: '02',
    stage: 'IN-LINE REGISTRATION',
    title: 'In-Line Registration Audits',
    desc: 'Continuous automated checks on ruling line alignment, fold crease accuracy, and stitch tension during runs.',
    metric: 'ALIGNMENT ±0.15MM · SPINE CREASE CALIBRATED',
  },
  {
    step: '03',
    stage: 'PRE-SHIPMENT AUDIT',
    title: 'AQL Pre-Shipment Inspection',
    desc: 'Structured Acceptance Quality Limit sampling across every production batch prior to export packing and sealing.',
    metric: 'AQL 2.5 SAMPLING PROTOCOL · CARTON DROP VERIFIED',
  },
];

export default function AboutQuality() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const stagesRef = useRef(null);
  const proofingRef = useRef(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true,
      },
      defaults: { ease: 'power3.out' },
    });

    // Top calibration header bar
    tl.from(`.${styles.calibrationBar}`, {
      y: -15,
      opacity: 0,
      duration: 0.6,
    })
    // Massive headline reveal
    .from(headlineRef.current?.children || [], {
      y: 45,
      opacity: 0,
      stagger: 0.12,
      duration: 0.9,
    }, '-=0.3')
    // Lead narrative thesis
    .from(`.${styles.thesisText}`, {
      y: 25,
      opacity: 0,
      duration: 0.7,
    }, '-=0.4')
    // 3 Inspection drafting stages
    .from(stagesRef.current?.children || [], {
      y: 35,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
    }, '-=0.3')
    // QC Specimen proofing desk reveal
    .fromTo(
      proofingRef.current,
      { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)', y: 30 },
      { clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)', y: 0, duration: 1.1, ease: 'power4.inOut' },
      '-=0.4'
    );

    // Subtle parallax scrub on inspection photo
    gsap.to(`.${styles.inspectionImg}`, {
      yPercent: 8,
      ease: 'none',
      scrollTrigger: {
        trigger: proofingRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2,
      },
    });

  }, { scope: sectionRef });

  return (
    <section
      className={styles.section}
      ref={sectionRef}
      id="quality-compliance"
      aria-label="Quality and Compliance at Twofold"
    >
      <div className={styles.inner}>

        {/* ── TOP CALIBRATION & REGISTRATION BAR ── */}
        <div className={styles.calibrationBar}>
          <div className={styles.regTarget}>
            <span className={styles.targetIcon}>⌖</span>
            <span className={styles.targetText}>
              QUALITY ASSURANCE SPECIFICATION // ISO 2859-1 &amp; AQL 2.5 PROTOCOL
            </span>
          </div>

          <div className={styles.calibrationSwatches} aria-hidden="true">
            <span className={`${styles.swatch} ${styles.cyan}`} title="Cyan" />
            <span className={`${styles.swatch} ${styles.magenta}`} title="Magenta" />
            <span className={`${styles.swatch} ${styles.yellow}`} title="Yellow" />
            <span className={`${styles.swatch} ${styles.black}`} title="Key Black" />
            <span className={`${styles.swatch} ${styles.gold}`} title="Twofold Gold" />
            <span className={styles.accuracyTag}>TOLERANCE ±0.15MM</span>
          </div>
        </div>

        {/* ── OVERSIZED EDITORIAL MASTHEAD & THESIS ── */}
        <div className={styles.mastheadGrid}>
          <div className={styles.headlineCol}>
            <span className={styles.eyebrow}>QUALITY &amp; COMPLIANCE</span>
            <h2 className={styles.headline} ref={headlineRef}>
              <span className={styles.headlineRow}>Consistency</span>
              <span className={styles.headlineRow}>
                <em>Before Dispatch.</em>
              </span>
            </h2>
          </div>

          <div className={styles.thesisCol}>
            <p className={styles.thesisText}>
              Every product is inspected against defined AQL (Acceptable Quality Limit)
              standards before it leaves our facility, ensuring consistent quality across
              every shipment — whether it&apos;s a trial order or a container-load consignment.
            </p>
            <div className={styles.exportBadge}>
              <span className={styles.goldBullet} />
              <span className={styles.exportBadgeText}>
                FULL CONTAINER BATCH CODING &amp; PRE-SHIPMENT AUDITING
              </span>
            </div>
          </div>
        </div>

        {/* ── 3-STAGE HORIZONTAL INSPECTION DRAFTING SPREAD (REPLACING THE OLD LIST) ── */}
        <div className={styles.stagesGrid} ref={stagesRef}>
          {AUDIT_STAGES.map((audit) => (
            <div key={audit.step} className={styles.stageCard}>
              <div className={styles.stageTop}>
                <span className={styles.stepNum}>{audit.step}</span>
                <span className={styles.stageCode}>
                  <span className={styles.stageCrosshair}>⌖</span> {audit.stage}
                </span>
              </div>

              <div className={styles.stageContent}>
                <h3 className={styles.stageTitle}>{audit.title}</h3>
                <p className={styles.stageDesc}>{audit.desc}</p>
              </div>

              <div className={styles.stageFooter}>
                <span className={styles.metricLabel}>VERIFICATION CRITERIA</span>
                <span className={styles.metricVal}>{audit.metric}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── QC INSPECTION SPECIMEN PROOFING BENCH (CONCEPTUAL VISUAL STORY) ── */}
        <div className={styles.proofingSpread} ref={proofingRef}>
          
          {/* Printed Precision Millimeter Ruler along top edge */}
          <div className={styles.millimeterRuler} aria-hidden="true">
            <span className={styles.rulerMark}>0mm</span>
            <span className={styles.rulerTick} />
            <span className={styles.rulerMark}>50mm</span>
            <span className={styles.rulerTick} />
            <span className={styles.rulerMark}>100mm</span>
            <span className={styles.rulerTick} />
            <span className={styles.rulerMark}>150mm</span>
            <span className={styles.rulerTick} />
            <span className={styles.rulerMark}>200mm</span>
            <span className={styles.rulerTick} />
            <span className={styles.rulerMark}>250mm</span>
            <span className={styles.rulerTick} />
            <span className={styles.rulerMark}>300mm</span>
            <span className={styles.rulerTick} />
            <span className={styles.rulerMark}>350mm</span>
            <span className={styles.rulerTick} />
            <span className={styles.rulerMark}>400mm</span>
          </div>

          <div className={styles.specimenFrame}>
            <Image
              src="/images/editorial/aql-inspection.jpg"
              alt="Twofold quality assurance specialist carrying out tactile paper substrate, ruling, and spine binding inspection"
              fill
              sizes="(max-width: 1400px) 100vw, 1380px"
              className={styles.inspectionImg}
            />
            <div className={styles.specimenScrim} />

            {/* Inset Archival QC Specimen Tag */}
            <div className={styles.specimenTagTL}>
              <span className={styles.specimenTagNum}>QC SPECIMEN NO. 2624</span>
              <span className={styles.specimenTagTitle}>PALGHAR QUALITY AUDIT WORKSTATION</span>
            </div>

            {/* Official Inspection Verification Seal */}
            <div className={styles.qcStamp}>
              <div className={styles.qcStampInner}>
                <span className={styles.stampCheck}>✓</span>
                <div className={styles.stampText}>
                  <span className={styles.stampMain}>AQL 2.5 CERTIFIED</span>
                  <span className={styles.stampSub}>EXPORT CONTAINER CLEARANCE</span>
                </div>
              </div>
            </div>

            {/* Bottom Citation */}
            <div className={styles.specimenCaption}>
              FIG. 03 — SPECIALIST CONDUCTING TACTILE SUBSTRATE, SPINE BINDING &amp; RULING INSPECTION PRIOR TO CONTAINER PACKING
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
