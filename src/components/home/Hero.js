'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import styles from './Hero.module.css';

export default function Hero() {
  const sectionRef = useRef(null);
  const imageRef   = useRef(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Image: clip wipe from bottom + inner scale settle
    gsap.fromTo(
      `.${styles.imageFrame}`,
      { clipPath: 'inset(100% 0% 0% 0%)' },
      { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, delay: 0.1, ease: 'power4.out' }
    );
    gsap.fromTo(
      imageRef.current,
      { scale: 1.07 },
      { scale: 1, duration: 1.9, delay: 0.1, ease: 'power3.out' }
    );

    // Headline: line-by-line reveal
    const lines = sectionRef.current?.querySelectorAll(`.${styles.lineWrap} > span`);
    if (lines?.length) {
      gsap.fromTo(lines,
        { y: '108%' },
        { y: '0%', duration: 0.85, stagger: 0.07, delay: 0.45, ease: 'power3.out' }
      );
    }

    // Sub-elements
    gsap.from(`.${styles.kicker}`,   { opacity: 0, y: 10, duration: 0.6, delay: 0.3,  ease: 'power3.out' });
    gsap.from(`.${styles.subtext}`,  { opacity: 0, y: 14, duration: 0.7, delay: 0.85, ease: 'power3.out' });
    gsap.from(`.${styles.ctas}`,     { opacity: 0, y: 12, duration: 0.6, delay: 1.05, ease: 'power3.out' });
    gsap.from(`.${styles.scrollHint}`,{ opacity: 0, duration: 0.7, delay: 1.4, ease: 'power3.out' });

    // Subtle parallax on the image
    gsap.to(imageRef.current, {
      yPercent: 10,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end:   'bottom top',
        scrub: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section className={styles.hero} ref={sectionRef} id="hero">

      {/* ── Single viewport grid ── */}
      <div className={styles.grid}>

        {/* ─── LEFT: text content ─── */}
        <div className={styles.leftCol}>

          <div className={styles.kicker}>
            <span>Palghar, India</span>
            <span className={styles.kickerSep} aria-hidden="true" />
            <span>Est. 1988</span>
            <span className={styles.kickerSep} aria-hidden="true" />
            <span>Export Manufacturer</span>
          </div>

          <h1 className={styles.headline} aria-label="Manufacturing Quality Paper Stationery for the World.">
            {[
              'Manufacturing',
              'Quality Paper',
              'Stationery',
              'for the World.',
            ].map((line, i) => (
              <span key={i} className={styles.lineWrap}>
                <span>{line}</span>
              </span>
            ))}
          </h1>

          <p className={styles.subtext}>
            A decade of manufacturing &amp; export experience. Three decades of
            paper trade heritage. One dependable partner.
          </p>

          <div className={styles.ctas}>
            <Link href="/products" className={styles.ctaPrimary}>
              Explore Our Products
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                <path d="M3 7.5h9M9 4l3.5 3.5L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/contact-us" className={styles.ctaSecondary}>
              Partner With Us
            </Link>
          </div>

        </div>

        {/* ─── RIGHT: image ─── */}
        <div className={styles.rightCol}>
          <div className={styles.imageFrame}>
            <div className={styles.imageInner} ref={imageRef}>
              <Image
                src="/images/editorial/hero-factory.jpg"
                alt="Twofold manufacturing facility, Palghar, Maharashtra"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 52vw"
                className={styles.img}
              />
            </div>

            {/* Floating metadata badge */}
            <div className={styles.badge} aria-hidden="true">
              <span className={styles.badgeLabel}>Palghar Facility</span>
              <span className={styles.badgeSub}>Maharashtra, IN</span>
            </div>
          </div>
        </div>

      </div>

      {/* ── Scroll cue ── */}
      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLine} />
      </div>

    </section>
  );
}
