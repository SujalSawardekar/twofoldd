'use client';

import React from 'react';
import styles from './page.module.css';
import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from '@/components/ui/ContactForm';
import Accordion from '@/components/ui/Accordion';

export default function ContactUsPage() {
  const faqs = [
    {
      title: 'What is your MOQ?',
      content: '[Details to be confirmed. Please contact us for minimum order quantity information.]'
    },
    {
      title: 'Do you provide samples?',
      content: '[Details to be confirmed. Please contact us to discuss sample availability and terms.]'
    },
    {
      title: 'What are production lead times?',
      content: '[Details to be confirmed. Lead times vary based on order volume and product specifications.]'
    },
    {
      title: 'What are shipping timelines?',
      content: '[Details to be confirmed. Shipping timelines depend on destination and shipping method.]'
    },
    {
      title: 'What payment terms do you accept?',
      content: '[Details to be confirmed. Please contact our export team to discuss payment terms.]'
    },
    {
      title: 'Do you ship FOB / CIF?',
      content: '[Details to be confirmed. We can discuss shipping terms based on your requirements.]'
    }
  ];

  return (
    <main>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className="h1">Let's Build Your Next Stationery Range.</h1>
          <p className={styles.heroSubtitle}>
            Whether you're an importer, distributor, wholesaler or retail chain looking for a dependable notebook and paper stationery manufacturing partner, our team is ready to discuss your requirements, minimum order quantities and export timelines.
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={`container ${styles.contactGrid}`}>
          <div className={styles.infoBlock}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_contact_loc)">
                    <path d="M11.5 5C11.5 7.49 7 13.5 7 13.5C7 13.5 2.5 7.49 2.5 5C2.5 3.80653 2.97411 2.66193 3.81802 1.81802C4.66193 0.974106 5.80653 0.5 7 0.5C8.19347 0.5 9.33807 0.974106 10.182 1.81802C11.0259 2.66193 11.5 3.80653 11.5 5V5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 6.5C7.82843 6.5 8.5 5.82843 8.5 5C8.5 4.17157 7.82843 3.5 7 3.5C6.17157 3.5 5.5 4.17157 5.5 5C5.5 5.82843 6.17157 6.5 7 6.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_contact_loc">
                      <rect width="14" height="14" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h3>Address</h3>
                <p>Palghar, Maharashtra, India</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_contact_email)">
                    <path d="M12.5 1.75H1.5C0.947715 1.75 0.5 2.19772 0.5 2.75V11.25C0.5 11.8023 0.947715 12.25 1.5 12.25H12.5C13.0523 12.25 13.5 11.8023 13.5 11.25V2.75C13.5 2.19772 13.0523 1.75 12.5 1.75Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0.5 3L6.36 8C6.53969 8.14967 6.76615 8.23163 7 8.23163C7.23385 8.23163 7.46031 8.14967 7.64 8L13.5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_contact_email">
                      <rect width="14" height="14" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h3>Email</h3>
                <p>[PLACEHOLDER]</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_contact_phone)">
                    <path d="M8.76 12.9999C9.37582 13.3972 10.1097 13.5704 10.8381 13.4902C11.5666 13.4101 12.2453 13.0816 12.76 12.5599L13.21 12.1199C13.4073 11.9182 13.5177 11.6472 13.5177 11.3649C13.5177 11.0827 13.4073 10.8117 13.21 10.6099L11.3 8.71994C11.0999 8.52329 10.8306 8.4131 10.55 8.4131C10.2694 8.4131 10.0001 8.52329 9.8 8.71994V8.71994C9.59821 8.91723 9.32721 9.02769 9.045 9.02769C8.76279 9.02769 8.49179 8.91723 8.29 8.71994L5.29 5.71994C5.18992 5.62132 5.11045 5.50378 5.0562 5.37417C5.00196 5.24456 4.97402 5.10545 4.97402 4.96494C4.97402 4.82444 5.00196 4.68533 5.0562 4.55572C5.11045 4.4261 5.18992 4.30857 5.29 4.20994V4.20994C5.48665 4.00984 5.59685 3.7405 5.59685 3.45994C5.59685 3.17938 5.48665 2.91005 5.29 2.70994L3.39 0.809944C3.1882 0.612659 2.91721 0.502197 2.635 0.502197C2.35279 0.502197 2.08179 0.612659 1.88 0.809944L1.44 1.25994C0.918344 1.77469 0.589833 2.45335 0.509701 3.18181C0.42957 3.91028 0.602706 4.64412 0.999998 5.25994C3.07004 8.31068 5.70394 10.9378 8.76 12.9999V12.9999Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_contact_phone">
                      <rect width="14" height="14" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h3>Phone</h3>
                <p>[PLACEHOLDER]</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_contact_chat)">
                    <path d="M4.5 12.5L0.5 13.5L1.5 10.5V1.5C1.5 1.23478 1.60536 0.98043 1.79289 0.792893C1.98043 0.605357 2.23478 0.5 2.5 0.5H12.5C12.7652 0.5 13.0196 0.605357 13.2071 0.792893C13.3946 0.98043 13.5 1.23478 13.5 1.5V11.5C13.5 11.7652 13.3946 12.0196 13.2071 12.2071C13.0196 12.3946 12.7652 12.5 12.5 12.5H4.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_contact_chat">
                      <rect width="14" height="14" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h3>WhatsApp</h3>
                <p>[PLACEHOLDER]</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_contact_hours)">
                    <path d="M7 13.5C10.5899 13.5 13.5 10.5899 13.5 7C13.5 3.41015 10.5899 0.5 7 0.5C3.41015 0.5 0.5 3.41015 0.5 7C0.5 10.5899 3.41015 13.5 7 13.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 4.5V7L9.54 9.96" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_contact_hours">
                      <rect width="14" height="14" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={styles.infoContent}>
                <h3>Business Hours</h3>
                <p>Monday – Saturday, 9:00 AM – 6:00 PM IST</p>
              </div>
            </div>
          </div>
          
          <div className={styles.formBlock}>
            <ContactForm />
          </div>
        </div>
      </section>
 
      <section className={styles.faqSection}>
        <div className={`container ${styles.faqWrapper}`}>
          <div className={styles.faqHeader}>
            <SectionHeading label="FREQUENTLY ASKED QUESTIONS" title="Common Questions" align="center" />
          </div>
          <div className={styles.faqAccordion}>
            <Accordion items={faqs.map(faq => ({ question: faq.title, answer: faq.content }))} />
          </div>
        </div>
      </section>
    </main>
  );
}
