'use client';

import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import Button from '@/components/ui/Button';
import styles from './FoldExperience.module.css';

export default function FoldExperience() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [activePanel, setActivePanel] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || isMobile) return;

    const panels = containerRef.current?.querySelectorAll(`.${styles.foldPanel}`);
    const shadows = containerRef.current?.querySelectorAll(`.${styles.foldShadow}`);
    if (!panels || panels.length < 4) return;

    // Set initial folded state: panels 2-4 are folded closed (rotateY: -180)
    gsap.set(panels[1], { rotateY: -180 });
    gsap.set(panels[2], { rotateY: -180 });
    gsap.set(panels[3], { rotateY: -180 });

    // Set initial shadow state
    if (shadows) {
      gsap.set(shadows, { opacity: 0 });
    }

    // Create the master fold timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=400%',
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress < 0.25) setActivePanel(0);
          else if (progress < 0.5) setActivePanel(1);
          else if (progress < 0.75) setActivePanel(2);
          else setActivePanel(3);
        },
      },
    });

    // Phase 1: Unfold panel 2 (0% - 25%)
    tl.to(panels[1], {
      rotateY: 0,
      duration: 1,
      ease: 'power2.inOut',
    })
    .fromTo(shadows[1] || {}, { opacity: 0.8 }, { opacity: 0, duration: 1 }, '<')
    .from(panels[1].querySelector(`.${styles.panelContent}`), {
      opacity: 0,
      x: -20,
      duration: 0.5,
      ease: 'power2.out',
    }, '-=0.3');

    // Phase 2: Unfold panel 3 (25% - 50%)
    tl.to(panels[2], {
      rotateY: 0,
      duration: 1,
      ease: 'power2.inOut',
    })
    .fromTo(shadows[2] || {}, { opacity: 0.8 }, { opacity: 0, duration: 1 }, '<')
    .from(panels[2].querySelector(`.${styles.panelContent}`), {
      opacity: 0,
      x: -20,
      duration: 0.5,
      ease: 'power2.out',
    }, '-=0.3');

    // Phase 3: Unfold panel 4 (50% - 75%)
    tl.to(panels[3], {
      rotateY: 0,
      duration: 1,
      ease: 'power2.inOut',
    })
    .fromTo(shadows[3] || {}, { opacity: 0.8 }, { opacity: 0, duration: 1 }, '<')
    .from(panels[3].querySelector(`.${styles.panelContent}`), {
      opacity: 0,
      x: -20,
      duration: 0.5,
      ease: 'power2.out',
    }, '-=0.3');

    // Phase 4: All panels settle (75% - 100%)
    tl.to(containerRef.current, {
      scale: 0.92,
      opacity: 0.6,
      duration: 0.5,
      ease: 'power2.in',
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === sectionRef.current) t.kill();
      });
    };
  }, { scope: sectionRef, dependencies: [isMobile] });

  return (
    <section className={styles.foldSection} ref={sectionRef} id="fold-story">
      <div className={styles.foldContainer} ref={containerRef}>
        <div className={styles.foldInner}>
          
          {/* FOLD 01 — THE BRAND */}
          <div className={`${styles.foldPanel} ${styles.panel1}`}>
            <div className={`${styles.panelFace} ${styles.panel1}`}>
              <div className={styles.foldShadow} />
              <div className={styles.panelContent}>
                <span className={styles.panelLabel}>01 / The Brand</span>
                <h2 className={styles.panelHeadline}>
                  Designed to Fold.<br />
                  Made to Create.
                </h2>
                <p className={styles.panelBody}>
                  Twofold is a modern stationery manufacturer combining practical 
                  functionality, thoughtful design, and dependable production to 
                  create paper products for everyday use and global markets.
                </p>
              </div>
            </div>
          </div>

          {/* FOLD 02 — THE MANUFACTURER */}
          <div className={`${styles.foldPanel} ${styles.panel2}`}>
            <div className={`${styles.panelFace} ${styles.panel2}`}>
              <div className={styles.foldShadow} />
              <div className={styles.panelContent}>
                <span className={styles.panelLabel}>02 / The Manufacturer</span>
                <h2 className={styles.panelHeadline}>
                  Made With Experience.<br />
                  Built For Scale.
                </h2>
                <p className={styles.panelBody}>
                  We combine hands-on manufacturing experience with established 
                  supply chains and export-ready production.
                </p>
                <div className={styles.statsGrid}>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>10+</div>
                    <div className={styles.statLabel}>Years Manufacturing<br />& Export Experience</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>1988</div>
                    <div className={styles.statLabel}>Family Heritage<br />in Paper Trade</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>AQL</div>
                    <div className={styles.statLabel}>Quality Inspected<br />Before Dispatch</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={styles.statNumber}>JNPT</div>
                    <div className={styles.statLabel}>Global Shipping<br />Gateway</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FOLD 03 — THE PRODUCTS */}
          <div className={`${styles.foldPanel} ${styles.panel3}`}>
            <div className={`${styles.panelFace} ${styles.panel3}`}>
              <div className={styles.foldShadow} />
              <div className={styles.panelContent}>
                <span className={styles.panelLabel}>03 / The Products</span>
                <h2 className={styles.panelHeadline}>
                  Paper, Made<br />
                  With Purpose.
                </h2>
                <div className={styles.productList}>
                  <div className={styles.productItem}>
                    <span className={styles.productIndex}>01</span>
                    <span className={styles.productName}>Exercise Books</span>
                  </div>
                  <div className={styles.productItem}>
                    <span className={styles.productIndex}>02</span>
                    <span className={styles.productName}>Spiral Bound</span>
                  </div>
                  <div className={styles.productItem}>
                    <span className={styles.productIndex}>03</span>
                    <span className={styles.productName}>Double Wire Bound</span>
                  </div>
                  <div className={styles.productItem}>
                    <span className={styles.productIndex}>04</span>
                    <span className={styles.productName}>Hard Cover Gally Bound</span>
                  </div>
                  <div className={styles.productItem}>
                    <span className={styles.productIndex}>05</span>
                    <span className={styles.productName}>Centre Stitched</span>
                  </div>
                  <div className={styles.productItem}>
                    <span className={styles.productIndex}>06</span>
                    <span className={styles.productName}>Glue Bound</span>
                  </div>
                </div>
                <div className={styles.panelCTA} style={{ marginTop: 'var(--space-lg)' }}>
                  <Button variant="primary" size="small" href="/products" hasArrow>
                    Explore Products
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* FOLD 04 — THE CONNECTION */}
          <div className={`${styles.foldPanel} ${styles.panel4}`}>
            <div className={`${styles.panelFace} ${styles.panel4}`}>
              <div className={styles.foldShadow} />
              <div className={styles.panelContent}>
                <span className={styles.panelLabel}>04 / The Connection</span>
                <h2 className={styles.panelHeadline}>
                  From Our Facility<br />
                  to the World.
                </h2>
                <p className={styles.panelBody}>
                  From our facility in Palghar, Maharashtra, Twofold exports paper 
                  stationery to distributors, wholesalers, importers, and stationery 
                  brands across global markets.
                </p>
                <div className={styles.panelCTA}>
                  <Button variant="outline-white" size="small" href="/contact-us" hasArrow>
                    Request a Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Progress Indicator */}
        <div className={styles.progressBar} aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`${styles.progressDot} ${activePanel >= i ? styles.active : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
