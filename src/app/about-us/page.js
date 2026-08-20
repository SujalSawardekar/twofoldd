'use client';

import React from 'react';
import styles from './page.module.css';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/ui/CTASection';

export default function AboutUsPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <span className="label">ABOUT TWOFOLD</span>
          <h1 className="h1">Built on Experience. Driven by Consistency.</h1>
          <p className={styles.heroSubtitle}>
            A manufacturing partner rooted in decades of paper trade heritage.
          </p>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className={`container ${styles.storyGrid}`}>
          <div className={styles.storyText}>
            <SectionHeading label="OUR STORY" title="The Twofold Journey" />
            <p>
              Twofold operates from Palghar, Maharashtra, with over a decade of manufacturing and export experience and family roots in the paper trade since 1988. What began as a family enterprise in paper trading has grown into a full-scale notebook manufacturing and export operation, serving distributors, wholesalers, and stationery brands across global markets.
            </p>
          </div>
          <div>
            <div className={styles.storyImage} />
          </div>
        </div>
      </section>

      <section className={styles.timelineSection}>
        <div className="container">
          <SectionHeading label="OUR HERITAGE" title="A Legacy in Paper" align="center" />
          <div className={styles.timelineWrapper}>
            <div className={styles.timelineLine}></div>
            <div className={styles.timelinePoint}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineYear}>1988</div>
              <div className={styles.timelineDesc}>Family roots in paper trade</div>
            </div>
            <div className={styles.timelinePoint}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineYear}>Manufacturing Era</div>
              <div className={styles.timelineDesc}>Production and export operations begin</div>
            </div>
            <div className={styles.timelinePoint}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineYear}>Today</div>
              <div className={styles.timelineDesc}>Twofold exports across global markets</div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.facilitySection}>
        <div className="container">
          <SectionHeading label="OUR FACILITY" title="Where Production Meets Precision" align="center" />
          <div className={styles.facilityImage} />
          <p className={styles.facilityCopy}>
            Our manufacturing facility in Palghar is designed for efficiency and scale. With a skilled workforce, established supply chains, and high-volume production capabilities, we ensure consistent quality. Our strategic location near key logistical hubs allows for seamless export operations.
          </p>
          
          <div className={styles.infraGrid}>
            <div className={styles.infraCard}>
              <div className={styles.infraIcon}>
                <svg width="28" height="28" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_workforce)">
                    <path d="M13.5 8L9.38 13.5L6.63 11.44" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 5C6.24264 5 7.25 3.99264 7.25 2.75C7.25 1.50736 6.24264 0.5 5 0.5C3.75736 0.5 2.75 1.50736 2.75 2.75C2.75 3.99264 3.75736 5 5 5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 12.5H0.5V11C0.500782 10.1105 0.765127 9.24125 1.25965 8.50196C1.75417 7.76266 2.45668 7.1865 3.27846 6.84623C4.10024 6.50596 5.00442 6.41685 5.87682 6.59016C6.74921 6.76346 7.55068 7.19141 8.18 7.81995" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_workforce">
                      <rect width="14" height="14" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className={styles.infraTitle}>Skilled Workforce</h3>
              <p className={styles.infraDesc}>Experienced teams dedicated to maintaining production quality and efficiency.</p>
            </div>
            <div className={styles.infraCard}>
              <div className={styles.infraIcon}>
                <svg width="28" height="28" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_supply_chain)">
                    <path d="M5.5 5.5H2.5C1.96957 5.5 1.46086 5.71071 1.08579 6.08579C0.710714 6.46086 0.5 6.96957 0.5 7.5V11.5H2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.5 11.5H13.5V4.5C13.5 4.23478 13.3946 3.98043 13.2071 3.79289C13.0196 3.60536 12.7652 3.5 12.5 3.5H6.5C6.23478 3.5 5.98043 3.60536 5.79289 3.79289C5.60536 3.98043 5.5 4.23478 5.5 4.5V10.18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 11.5H8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 13.5C5.10457 13.5 6 12.6046 6 11.5C6 10.3954 5.10457 9.5 4 9.5C2.89543 9.5 2 10.3954 2 11.5C2 12.6046 2.89543 13.5 4 13.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.5 13.5C11.6046 13.5 12.5 12.6046 12.5 11.5C12.5 10.3954 11.6046 9.5 10.5 9.5C9.39543 9.5 8.5 10.3954 8.5 11.5C8.5 12.6046 9.39543 13.5 10.5 13.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_supply_chain">
                      <rect width="14" height="14" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className={styles.infraTitle}>Established Supply Chain</h3>
              <p className={styles.infraDesc}>Reliable sourcing of raw materials to ensure uninterrupted production.</p>
            </div>
            <div className={styles.infraCard}>
              <div className={styles.infraIcon}>
                <svg width="28" height="28" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_mfg_infra)">
                    <path d="M0.5 4.5H13.5V13C13.5 13.1326 13.4473 13.2598 13.3536 13.3536C13.2598 13.4473 13.1326 13.5 13 13.5H1C0.867392 13.5 0.740215 13.4473 0.646447 13.3536C0.552678 13.2598 0.5 13.1326 0.5 13V4.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0.5 4.5C0.5 3.43913 0.921427 2.42172 1.67157 1.67157C2.42172 0.921427 3.43913 0.5 4.5 0.5H9.5C10.5609 0.5 11.5783 0.921427 12.3284 1.67157C13.0786 2.42172 13.5 3.43913 13.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 13.5V8C11 7.86739 10.9473 7.74021 10.8536 7.64645C10.7598 7.55268 10.6326 7.5 10.5 7.5H3.5C3.36739 7.5 3.24021 7.55268 3.14645 7.64645C3.05268 7.74021 3 7.86739 3 8V13.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 9.5H11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 11.5H11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_mfg_infra">
                      <rect width="14" height="14" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className={styles.infraTitle}>Export-Ready Production</h3>
              <p className={styles.infraDesc}>High-volume capabilities tailored to meet international market demands.</p>
            </div>
            <div className={styles.infraCard}>
              <div className={styles.infraIcon}>
                <svg width="28" height="28" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_location)">
                    <path d="M11.5 5C11.5 7.49 7 13.5 7 13.5C7 13.5 2.5 7.49 2.5 5C2.5 3.80653 2.97411 2.66193 3.81802 1.81802C4.66193 0.974106 5.80653 0.5 7 0.5C8.19347 0.5 9.33807 0.974106 10.182 1.81802C11.0259 2.66193 11.5 3.80653 11.5 5V5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 6.5C7.82843 6.5 8.5 5.82843 8.5 5C8.5 4.17157 7.82843 3.5 7 3.5C6.17157 3.5 5.5 4.17157 5.5 5C5.5 5.82843 6.17157 6.5 7 6.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_location">
                      <rect width="14" height="14" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h3 className={styles.infraTitle}>Strategic Location</h3>
              <p className={styles.infraDesc}>Proximity to major ports like JNPT for efficient global shipping.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.exportSection}>
        <div className="container">
          <SectionHeading label="EXPORT PROCESS" title="From Order to Delivery" />
          <div className={styles.exportProcess}>
            {['Order Confirmation', 'Production', 'Pre-Shipment AQL Inspection', 'Export Documentation', 'Shipment via JNPT', 'Destination Port'].map((step, idx) => (
              <div key={idx} className={styles.exportStep}>
                <div className={styles.stepNumber}>
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className={styles.stepTitle}>{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.qualitySection}>
        <div className="container">
          <h2 className={styles.qualityHeadline}>Consistency Before Every Shipment.</h2>
          <p className={styles.qualityCopy}>
            Every shipment undergoes Acceptance Quality Level (AQL) inspection before dispatch, ensuring consistency and reliability for our global buyers.
          </p>
        </div>
      </section>

      <section className={styles.whyPartnerSection}>
        <div className="container">
          <SectionHeading label="WHY PARTNER WITH US" title="The Twofold Advantage" align="center" />
          <div className={styles.whyGrid}>
            {[
              'Direct manufacturer',
              'Skilled workforce',
              'Established supply chain',
              'High-volume production capability',
              'AQL quality inspection',
              'Family heritage since 1988'
            ].map((point, idx) => (
              <div key={idx} className={styles.whyPoint}>
                <div className={styles.whyIcon}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 8.55005L3.23 12.06C3.32212 12.1797 3.44016 12.277 3.57525 12.3446C3.71034 12.4121 3.85898 12.4482 4.01 12.45C4.15859 12.4518 4.3057 12.4203 4.44063 12.3581C4.57555 12.2958 4.6949 12.2042 4.79 12.09L13.5 1.55005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.whyText}>{point}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Partner?" 
        description="Let's discuss how Twofold can support your stationery sourcing needs."
        buttonText="Partner With Us"
        buttonHref="/contact-us"
      />
    </main>
  );
}
