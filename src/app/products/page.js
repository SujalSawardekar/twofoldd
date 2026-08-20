'use client';

import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import Button from '@/components/ui/Button';

export default function ProductsPage() {
  const products = [
    {
      id: '01',
      title: 'Exercise Books',
      desc: 'Durable staple-bound notebooks designed for schools, institutions, and everyday writing. Available in a range of page counts and ruling patterns.'
    },
    {
      id: '02',
      title: 'Spiral Bound',
      desc: 'Wire-coil binding designed for a smooth, practical writing experience. Lay-flat design for comfortable use.'
    },
    {
      id: '03',
      title: 'Double Wire Bound',
      desc: 'Twin-loop wire binding for a clean, professional finish. Popular across retail and corporate markets.'
    },
    {
      id: '04',
      title: 'Hard Cover Gally Bound',
      desc: 'Rigid cover notebooks with premium gally binding. Built for durability and a premium shelf presence.'
    },
    {
      id: '05',
      title: 'Centre Stitched',
      desc: 'Saddle-stitched notebooks for lightweight, everyday use. Cost-effective solution for bulk educational orders.'
    },
    {
      id: '06',
      title: 'Glue Bound',
      desc: 'Perfect-bound notebooks with a clean, seamless spine. Suitable for journals, branded notebooks, and retail distribution.'
    }
  ];

  return (
    <main>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className="h1">Paper Products. Built for Every Market.</h1>
          <p className={styles.heroSubtitle}>
            We manufacture a comprehensive range of notebooks designed to meet the sourcing needs of distributors, wholesalers, chain stores, stationery brands and educational institutes worldwide.
          </p>
        </div>
      </section>

      <section className={styles.showcaseSection}>
        <div className="container">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={`${styles.productRow} ${index % 2 !== 0 ? styles.rowReverse : ''}`}
            >
              <div className={styles.productImageWrapper}>
                <div className={styles.productImage} />
              </div>
              <div className={styles.productText}>
                <div className={styles.productNumber}>{product.id}</div>
                <h2 className={styles.productTitle}>{product.title}</h2>
                <p className={styles.productDesc}>{product.desc}</p>
                <Link href="/contact-us" className={styles.productLink}>
                  Enquire About This Product
                  <svg style={{ marginLeft: '6px', display: 'inline-block', verticalAlign: 'middle' }} width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_arrow_prod)">
                      <path d="M0.5 7H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 10.5L13.5 7L10 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_arrow_prod">
                        <rect width="14" height="14" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={`container ${styles.introContent}`}>
          <h2 className={styles.introHeadline}>Paper Packaging</h2>
          <p className={styles.introCopy}>
            Twofold is expanding into the paper packaging vertical, bringing our manufacturing experience to sustainable packaging solutions.
          </p>
          <p className={styles.introNote}>More details coming soon.</p>
        </div>
      </section>

      <section className={styles.introSection} style={{ backgroundColor: 'var(--color-pure-white)' }}>
        <div className={`container ${styles.introContent}`}>
          <h2 className={styles.introHeadline}>Customisation & Private Label</h2>
          <p className={styles.introCopy}>
            Information about customisation capabilities and private label services will be available soon. Contact us to discuss your specific requirements.
          </p>
          <div className={styles.introCta}>
            <Button href="/contact-us" variant="primary" hasArrow>Get in Touch</Button>
          </div>
        </div>
      </section>

      <section className={styles.pipelineSection}>
        <div className="container">
          <h2 className={styles.pipelineTitle}>Our Quality Pipeline</h2>
          <div className={styles.pipelineWrapper}>
            {[
              'Raw Material Check',
              'In-Process Check',
              'Pre-Shipment AQL Inspection',
              'Dispatch'
            ].map((step, idx, arr) => (
              <React.Fragment key={idx}>
                <div className={styles.pipelineStep}>
                  <div className={styles.pipelineNumber}>{idx + 1}</div>
                  <h3 className={styles.pipelineStepTitle}>{step}</h3>
                </div>
                {idx < arr.length - 1 && (
                  <div className={styles.pipelineArrow}>
                    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_arrow_pipe)">
                        <path d="M0.5 7H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 10.5L13.5 7L10 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_arrow_pipe">
                          <rect width="14" height="14" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.bottomCtas}>
        <div className="container">
          <div className={styles.bottomButtons}>
            <div className={styles.buttonWrapper}>
              <Button variant="outline" href="#">Download Product Catalogue</Button>
              <span className={styles.buttonNote}>[Coming Soon]</span>
            </div>
            <Button variant="outline" href="/contact-us">Request Samples</Button>
            <Button variant="primary" href="/contact-us">Get a Quote</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
