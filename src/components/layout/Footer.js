'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* ── Modern Floating Card Box (Enky Design Reference) ── */}
        <div className={styles.footerCard}>

          {/* ── TOP SECTION: NEWSLETTER + SITEMAP / LINKS ── */}
          <div className={styles.topRow}>

            {/* Left: Newsletter Subscription & Social Links */}
            <div className={styles.brandCol}>
              <div className={styles.logoWrapper}>
                <Image
                  src="/Logo/Two Fold.png"
                  alt="Twofold Stationery"
                  width={160}
                  height={50}
                  className={styles.brandLogoImg}
                  priority
                />
              </div>

              <p className={styles.newsletterPrompt}>
                Join our newsletter to stay up to date on high-volume paper manufacturing, product releases, and export updates.
              </p>

              {/* Newsletter Input Box */}
              <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={styles.emailInput}
                />
                <button type="submit" className={styles.subscribeBtn}>
                  {subscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </form>

              {/* Circular Social Links */}
              <div className={styles.socialRow}>
                <a href="#" className={styles.socialCircle} aria-label="Facebook">
                  f
                </a>
                <a href="#" className={styles.socialCircle} aria-label="Instagram">
                  o
                </a>
                <a href="#" className={styles.socialCircle} aria-label="LinkedIn">
                  in
                </a>
                <a href="#" className={styles.socialCircle} aria-label="YouTube">
                  ▶
                </a>
              </div>
            </div>

            {/* Right: Navigation Columns */}
            <div className={styles.linksGrid}>

              <div className={styles.linkGroup}>
                <h4 className={styles.groupHeading}>Sitemap</h4>
                <ul className={styles.linkList}>
                  <li><Link href="/" className={styles.footerLink}>Home</Link></li>
                  <li><Link href="/about-us" className={styles.footerLink}>About Us</Link></li>
                  <li><Link href="/products" className={styles.footerLink}>Products</Link></li>
                  <li><Link href="/blog" className={styles.footerLink}>Blog & Insights</Link></li>
                  <li><Link href="/contact-us" className={styles.footerLink}>Contact Us</Link></li>
                </ul>
              </div>

              <div className={styles.linkGroup}>
                <h4 className={styles.groupHeading}>Products</h4>
                <ul className={styles.linkList}>
                  <li><Link href="/products" className={styles.footerLink}>Exercise Books</Link></li>
                  <li><Link href="/products" className={styles.footerLink}>Spiral Bound</Link></li>
                  <li><Link href="/products" className={styles.footerLink}>Wire-O Bound</Link></li>
                  <li><Link href="/products" className={styles.footerLink}>Hardcover Journals</Link></li>
                  <li><Link href="/products" className={styles.footerLink}>Perfect Bound</Link></li>
                </ul>
              </div>

              <div className={styles.linkGroup}>
                <h4 className={styles.groupHeading}>Contact</h4>
                <div className={styles.contactDetails}>
                  <p className={styles.contactItem}>Palghar, Maharashtra, India</p>
                  <p className={styles.contactItem}>Email: export@twofoldpaper.com</p>
                  <p className={styles.contactItem}>Phone: +91 (022) 2854-9900</p>
                  <p className={styles.contactItem}>WhatsApp: +91 98200 00000</p>
                </div>
              </div>

            </div>

          </div>

          {/* ── BOTTOM SECTION: GIANT BRAND LOGO WITH SUBTLE GRADIENT ── */}
          <div className={styles.giantLogoContainer}>
            <div className={styles.gradientMaskOverlay} />
            <Image
              src="/Logo/Two Fold.png"
              alt="Twofold"
              width={1100}
              height={320}
              className={styles.giantLogoImg}
            />
          </div>

          {/* ── BOTTOM BAR: COPYRIGHT & LEGAL ── */}
          <div className={styles.bottomBar}>
            <p className={styles.copyText}>© {new Date().getFullYear()} Twofold Manufacturing. All rights reserved.</p>
            <div className={styles.legalLinks}>
              <Link href="/privacy-policy" className={styles.legalLink}>Privacy Policy</Link>
              <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
