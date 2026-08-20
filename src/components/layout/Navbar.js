'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-us' },
    { name: 'Products', path: '/products' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact-us' },
  ];

  return (
    <>
      <div className={`${styles.navbarWrapper} ${scrolled ? styles.scrolled : ''}`}>
        <nav className={styles.navbar}>
          <Link href="/" className={styles.logo} aria-label="Twofold Home">
            <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
              <rect width="120" height="40" rx="8" fill="#1B2A4A" />
              <text x="60" y="26" fontFamily="Playfair Display, serif" fontSize="20" fill="#FAF8F5" textAnchor="middle" fontWeight="bold">two fold</text>
            </svg>
          </Link>

          <div className={styles.navLinks}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`${styles.navLink} ${pathname === item.path ? styles.active : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className={styles.rightSection}>
            <Link href="/contact-us" className={styles.ctaButton}>
              Request a Quote
            </Link>
            
            <button 
              className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`}
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className={styles.navIcon} width="24" height="24" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_close)">
                    <path d="M13.5 0.5L0.5 13.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M0.5 0.5L13.5 13.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_close">
                      <rect width="14" height="14" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg className={styles.navIcon} width="24" height="24" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 2H0.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.5 7H0.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.5 12H0.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileNavLinks}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            href="/contact-us" 
            className={styles.mobileNavLink}
            style={{ marginTop: '24px', fontSize: '1.25rem', padding: '12px 32px', backgroundColor: 'var(--color-warm-white)', color: 'var(--color-navy)', borderRadius: '9999px', fontFamily: 'Inter, sans-serif' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
