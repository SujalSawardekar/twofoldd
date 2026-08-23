import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.logoArea}>
            <Link href="/" className={styles.logo} aria-label="Twofold Home">
              <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="40" rx="8" fill="#FAF8F5" />
                <text x="60" y="26" fontFamily="var(--font-display), serif" fontSize="20" fill="#1B2A4A" textAnchor="middle" fontWeight="bold">two fold</text>
              </svg>
            </Link>
            <p className={styles.tagline}>
              Three-decade family legacy combined with modern high-capacity automated paper production facility in Western India.
            </p>
          </div>

          <div className={styles.navCol}>
            <h3 className={styles.columnHeading}>Navigation</h3>
            <ul className={styles.linkList}>
              <li><Link href="/" className={styles.footerLink}>Home</Link></li>
              <li><Link href="/about-us" className={styles.footerLink}>About Us and Infrastructure</Link></li>
              <li><Link href="/products" className={styles.footerLink}>Products</Link></li>
              <li><Link href="/blog" className={styles.footerLink}>Blog</Link></li>
              <li><Link href="/contact-us" className={styles.footerLink}>Contact Us</Link></li>
            </ul>
          </div>

          <div className={styles.contactCol}>
            <h3 className={styles.columnHeading}>Contact</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>Palghar, Maharashtra, India</div>
              <div className={styles.contactItem}>Email: [PLACEHOLDER]</div>
              <div className={styles.contactItem}>Phone: [PLACEHOLDER]</div>
              <div className={styles.contactItem}>
                WhatsApp: <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className={styles.footerWhatsapp}>[PLACEHOLDER]</a>
              </div>
            </div>
          </div>

          <div className={styles.socialCol}>
            <h3 className={styles.columnHeading}>Follow Us</h3>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <svg viewBox="0 0 14 14" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_fb)">
                    <path d="M0.5 12.5V1.5C0.5 1.23478 0.605357 0.98043 0.792893 0.792893C0.98043 0.605357 1.23478 0.5 1.5 0.5H12.5C12.7652 0.5 13.0196 0.605357 13.2071 0.792893C13.3946 0.98043 13.5 1.23478 13.5 1.5V12.5C13.5 12.7652 13.3946 13.0196 13.2071 13.2071C13.0196 13.3946 12.7652 13.5 12.5 13.5H9.5V8.76H10.21C10.3718 8.76 10.5269 8.69573 10.6413 8.58134C10.7557 8.46694 10.82 8.31178 10.82 8.15V7.38C10.82 7.29989 10.8042 7.22057 10.7736 7.14656C10.7429 7.07255 10.698 7.00531 10.6413 6.94866C10.5847 6.89202 10.5174 6.84709 10.4434 6.81643C10.3694 6.78578 10.2901 6.77 10.21 6.77H9.54V5.83C9.54 4.99 9.92 4.99 10.3 4.99H10.79C10.8705 4.99332 10.9507 4.97891 11.025 4.94781C11.0993 4.91671 11.1659 4.86966 11.22 4.81C11.2781 4.75468 11.3241 4.68789 11.3551 4.61388C11.3861 4.53986 11.4014 4.46023 11.4 4.38V3.64C11.4027 3.55857 11.3893 3.47741 11.3605 3.40117C11.3318 3.32492 11.2884 3.25508 11.2326 3.19564C11.1769 3.13621 11.11 3.08833 11.0358 3.05476C10.9616 3.02119 10.8814 3.00258 10.8 3H9.65C9.31445 2.98738 8.98016 3.04776 8.67021 3.17696C8.36027 3.30615 8.08207 3.50109 7.85483 3.7483C7.62758 3.99552 7.45671 4.28911 7.35401 4.60881C7.25131 4.92851 7.21924 5.26669 7.26 5.6V6.77H6.62C6.53906 6.76867 6.45866 6.78347 6.38349 6.81353C6.30832 6.84359 6.23989 6.88831 6.18219 6.94509C6.12448 7.00187 6.07865 7.06956 6.04737 7.14423C6.01609 7.2189 5.99999 7.29905 6 7.38V8.15C5.99999 8.23095 6.01609 8.3111 6.04737 8.38577C6.07865 8.46044 6.12448 8.52813 6.18219 8.58491C6.23989 8.64169 6.30832 8.68641 6.38349 8.71647C6.45866 8.74653 6.53906 8.76133 6.62 8.76H7.26V13.5H1.5C1.23478 13.5 0.98043 13.3946 0.792893 13.2071C0.605357 13.0196 0.5 12.7652 0.5 12.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_fb">
                      <rect width="14" height="14" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                <svg viewBox="0 0 14 14" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_li)">
                    <path d="M3.53999 1.70993C3.54271 2.05926 3.40787 2.39563 3.16462 2.64637C2.92138 2.8971 2.58924 3.04206 2.23999 3.04993C1.89147 3.03714 1.56117 2.89095 1.31737 2.64156C1.07357 2.39218 0.934887 2.05866 0.929993 1.70993C0.945143 1.37017 1.08892 1.04888 1.33218 0.811191C1.57543 0.573505 1.89997 0.437208 2.23999 0.429932C2.57902 0.437344 2.90242 0.573979 3.14405 0.8119C3.38569 1.04982 3.52733 1.37106 3.53999 1.70993ZM1.06999 5.42993C1.06999 4.65993 1.55999 4.77993 2.23999 4.77993C2.91999 4.77993 3.39999 4.65993 3.39999 5.42993V12.9299C3.39999 13.7099 2.90999 13.5499 2.23999 13.5499C1.56999 13.5499 1.06999 13.7099 1.06999 12.9299V5.42993Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.42 5.42996C5.42 4.99996 5.58 4.83996 5.83 4.78996C6.08 4.73996 6.94 4.78996 7.24 4.78996C7.54 4.78996 7.66 5.27996 7.65 5.64996C7.90662 5.30555 8.24732 5.03276 8.63951 4.85767C9.0317 4.68259 9.46226 4.61107 9.89 4.64996C10.31 4.62428 10.7308 4.68726 11.1249 4.83479C11.519 4.98232 11.8776 5.21112 12.1775 5.50631C12.4774 5.8015 12.7119 6.15648 12.8656 6.54819C13.0194 6.9399 13.089 7.35958 13.07 7.77996V12.9C13.07 13.68 12.59 13.52 11.91 13.52C11.23 13.52 10.75 13.68 10.75 12.9V8.89996C10.7676 8.69409 10.7407 8.48685 10.671 8.29232C10.6014 8.09778 10.4908 7.9205 10.3466 7.77251C10.2024 7.62453 10.0281 7.5093 9.83539 7.43467C9.64272 7.36003 9.43625 7.32773 9.23 7.33996C9.0247 7.33475 8.82064 7.3732 8.63132 7.45278C8.442 7.53235 8.27174 7.65124 8.13182 7.80156C7.9919 7.95188 7.8855 8.13021 7.81968 8.32474C7.75385 8.51927 7.7301 8.72556 7.75 8.92996V12.93C7.75 13.71 7.26 13.55 6.58 13.55C5.9 13.55 5.42 13.71 5.42 12.93V5.42996Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_li">
                      <rect width="14" height="14" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Twitter">
                <svg viewBox="0 0 14 14" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 9.40002C3.28594 9.96089 2.46635 10.3724 1.59 10.61C1.49348 10.6451 1.41008 10.709 1.35114 10.793C1.29221 10.8771 1.26059 10.9773 1.26059 11.08C1.26059 11.0827 1.29221 11.2829 1.35114 11.367C1.41008 11.4511 1.49348 11.515 1.59 11.55C8.51 14.39 12.91 10 12.24 5.13002L13.36 2.81002H12.06C10.44 0.820022 6.14 0.920022 6.85 5.16002C6.85 5.16002 4.55 5.57002 1.61 2.68002C1.54199 2.61288 1.45617 2.56663 1.36269 2.54676C1.26921 2.52689 1.17199 2.53422 1.08255 2.56789C0.993113 2.60156 0.915197 2.66016 0.858031 2.73675C0.800866 2.81333 0.766846 2.9047 0.760002 3.00002C0.449134 4.27787 0.604706 5.62472 1.1987 6.79805C1.7927 7.97138 2.7861 8.89409 4 9.40002V9.40002Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="YouTube">
                <svg viewBox="0 0 14 14" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5 2H2.5C1.39543 2 0.5 2.89543 0.5 4V10C0.5 11.1046 1.39543 12 2.5 12H11.5C12.6046 12 13.5 11.1046 13.5 10V4C13.5 2.89543 12.6046 2 11.5 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.31001 9.31998V5.11998C5.30793 5.04907 5.32522 4.97894 5.36003 4.91713C5.39484 4.85532 5.44585 4.80417 5.50757 4.7692C5.56929 4.73422 5.63938 4.71675 5.71029 4.71865C5.7812 4.72055 5.85026 4.74175 5.91001 4.77998L9.51001 6.87998C9.57016 6.91527 9.62004 6.96568 9.6547 7.0262C9.68936 7.08671 9.70759 7.15524 9.70759 7.22498C9.70759 7.29472 9.68936 7.36325 9.6547 7.42376C9.62004 7.48428 9.57016 7.53469 9.51001 7.56998L5.91001 9.66998C5.84894 9.70524 5.77963 9.72374 5.70911 9.72358C5.63859 9.72342 5.56936 9.70462 5.50845 9.66909C5.44753 9.63356 5.3971 9.58255 5.36225 9.52124C5.3274 9.45993 5.30938 9.3905 5.31001 9.31998V9.31998Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.bottomText}>
            © {new Date().getFullYear()} Twofold. All rights reserved.
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy-policy" className={styles.legalLink}>Privacy Policy</Link>
            <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
