'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import Button from '@/components/ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(`.${styles.label}`, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.3,
    })
    .from(`.${styles.headline}`, {
      opacity: 0,
      y: 40,
      duration: 1,
    }, '-=0.4')
    .from(`.${styles.subtitle}`, {
      opacity: 0,
      y: 30,
      duration: 0.8,
    }, '-=0.5')
    .from(`.${styles.actions}`, {
      opacity: 0,
      y: 20,
      duration: 0.7,
    }, '-=0.4')
    .from(`.${styles.scrollIndicator}`, {
      opacity: 0,
      duration: 0.6,
    }, '-=0.3');
  }, { scope: heroRef });

  return (
    <section className={styles.hero} ref={heroRef} id="hero">
      <div className={styles.content} ref={contentRef}>
        <span className={styles.label}>Twofold</span>
        <h1 className={styles.headline}>
          Manufacturing Quality<br />
          Paper Stationery<br />
          <em>for the World.</em>
        </h1>
        <p className={styles.subtitle}>
          A decade of manufacturing and export experience. Three decades 
          of paper trade heritage. One dependable partner for notebook 
          and stationery sourcing.
        </p>
        <div className={styles.actions}>
          <Button variant="primary" size="large" href="/products" hasArrow>
            Explore Our Products
          </Button>
          <Button variant="outline" size="large" href="/contact-us" hasArrow>
            Partner With Us
          </Button>
        </div>
      </div>
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
