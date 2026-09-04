'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import styles from './AboutMission.module.css';

export default function AboutMission() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const phrase1Ref = useRef(null);
  const phrase2Ref = useRef(null);
  const phrase3Ref = useRef(null);
  const pillarsRef = useRef(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // ── PINNED SCROLL-DRIVEN TYPOGRAPHY TIMELINE (twofold.com motion principle) ──
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=160%',
        pin: true,
        scrub: 0.8,
        anticipatePin: 1,
      },
    });

    // Phrase 1: "To be recognised globally" enters from left with horizontal glide
    tl.fromTo(
      phrase1Ref.current,
      { xPercent: -40, opacity: 0 },
      { xPercent: 0, opacity: 1, ease: 'power2.out', duration: 1 }
    )
    // Phrase 2: "not just as an exporter" enters from right
    .fromTo(
      phrase2Ref.current,
      { xPercent: 40, opacity: 0 },
      { xPercent: 0, opacity: 1, ease: 'power2.out', duration: 1 },
      '-=0.6'
    )
    // Phrase 3: "but as a genuine manufacturer of stationery items" sweeps upward from depth
    .fromTo(
      phrase3Ref.current,
      { yPercent: 60, scale: 0.95, opacity: 0 },
      { yPercent: 0, scale: 1, opacity: 1, ease: 'power3.out', duration: 1.2 },
      '-=0.5'
    )
    // Dwell hold: All 3 phrases locked in center reading alignment
    .to({}, { duration: 0.8 })
    // Phrases gently drift upward and apart to reveal the 3 supporting strategic pillars
    .to(
      [phrase1Ref.current, phrase2Ref.current],
      { yPercent: -30, opacity: 0.45, ease: 'power2.inOut', duration: 1 }
    )
    .to(
      phrase3Ref.current,
      { yPercent: -20, color: '#C9A24A', ease: 'power2.inOut', duration: 1 },
      '<'
    )
    // Pillars reveal: Staggered entry from bottom with line expansion
    .fromTo(
      pillarsRef.current?.children || [],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.25, ease: 'power3.out', duration: 1.2 },
      '-=0.4'
    );
  }, { scope: sectionRef });

  return (
    <section className={styles.section} ref={sectionRef} id="mission" aria-label="Our Mission">
      <div className={styles.pinnedViewport} ref={containerRef}>
        <div className={styles.inner}>

          {/* Eyebrow */}
          <div className={styles.eyebrowWrap}>
            <span className={styles.eyebrow}>OUR MISSION</span>
            <span className={styles.eyebrowLine} />
          </div>

          {/* ── MOTION-DRIVEN DISPLAY TYPOGRAPHY ── */}
          <div className={styles.statementBox}>
            <div className={styles.phraseRow1} ref={phrase1Ref}>
              <span className={styles.leadWord}>To be recognised globally</span>
            </div>

            <div className={styles.phraseRow2} ref={phrase2Ref}>
              <span className={styles.contrastWord}>not just as an exporter,</span>
            </div>

            <div className={styles.phraseRow3} ref={phrase3Ref}>
              <h2 className={styles.climaxWord}>
                but as a <em>genuine manufacturer</em> of stationery items.
              </h2>
            </div>
          </div>

          {/* ── 3 PROGRESSIVELY REVEALED SUPPORTING PILLARS ── */}
          <div className={styles.pillarsGrid} ref={pillarsRef}>
            
            <div className={styles.pillarItem}>
              <div className={styles.pillarNum}>01</div>
              <div className={styles.pillarLine} />
              <h3 className={styles.pillarTitle}>CONSISTENT QUALITY</h3>
              <p className={styles.pillarDesc}>
                Standardized paper grammages, precise fold crease tolerances, and strict AQL inspection across every production run.
              </p>
            </div>

            <div className={styles.pillarItem}>
              <div className={styles.pillarNum}>02</div>
              <div className={styles.pillarLine} />
              <h3 className={styles.pillarTitle}>RELIABLE TIMELINES</h3>
              <p className={styles.pillarDesc}>
                Direct factory capacity scheduling and proximity to JNPT port delivering dependable container dispatch dates.
              </p>
            </div>

            <div className={styles.pillarItem}>
              <div className={styles.pillarNum}>03</div>
              <div className={styles.pillarLine} />
              <h3 className={styles.pillarTitle}>LONG-TERM PARTNERSHIPS</h3>
              <p className={styles.pillarDesc}>
                Built on paper trade roots since 1988, offering transparent MOQs, container load optimization, and volume pricing.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
