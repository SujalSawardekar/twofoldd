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
    { name: 'About Us and Infrastructure', path: '/about-us' },
    { name: 'Products', path: '/products' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <>
      <div className={`${styles.navbarWrapper} ${scrolled ? styles.scrolled : ''}`}>
        <nav className={styles.navbar}>
          <Link href="/" className={styles.logo} aria-label="Twofold Home">
            <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
              <rect width="120" height="40" rx="8" fill="#1B2A4A" />
              <text x="60" y="26" fontFamily="var(--font-display), serif" fontSize="20" fill="#FAF8F5" textAnchor="middle" fontWeight="bold">two fold</text>
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
            <a 
              href="https://wa.me/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.whatsappLink}
              aria-label="Chat on WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.004 22C6.486 22 2 17.514 2 12.004C2 10.026 2.584 8.168 3.593 6.59L2.015 2.015L6.686 3.614C8.218 2.601 10.046 2.008 12.004 2.008C17.522 2.008 22.008 6.494 22.008 12.004C22.008 17.514 17.522 22 12.004 22ZM12.004 3.513C7.318 3.513 3.505 7.327 3.505 12.004C3.505 13.684 4.004 15.26 4.908 16.593L4.998 16.744L4.133 19.866L7.336 18.995L7.498 19.081C8.795 19.92 10.339 20.495 12.004 20.495C16.69 20.495 20.503 16.681 20.503 12.004C20.503 7.327 16.69 3.513 12.004 3.513ZM17.11 14.996C16.903 15.541 16.035 16.002 15.485 16.082C15.005 16.152 14.375 16.202 12.26 15.322C9.444 14.152 7.629 11.272 7.489 11.082C7.349 10.892 6.349 9.562 6.349 8.182C6.349 6.802 7.049 6.132 7.329 5.852C7.559 5.622 7.939 5.512 8.309 5.512C8.429 5.512 8.539 5.522 8.639 5.522C8.929 5.532 9.079 5.552 9.269 5.992C9.509 6.572 10.099 8.012 10.169 8.162C10.239 8.312 10.309 8.512 10.209 8.712C10.109 8.912 10.029 9.012 9.879 9.182C9.729 9.352 9.569 9.562 9.429 9.712C9.279 9.872 9.119 10.042 9.299 10.352C9.479 10.662 10.109 11.692 11.039 12.522C12.239 13.592 13.219 13.932 13.529 14.062C13.839 14.192 14.019 14.162 14.199 13.962C14.379 13.762 14.979 13.062 15.209 12.732C15.439 12.402 15.669 12.452 15.979 12.572C16.289 12.692 18.179 13.632 18.569 13.822C18.959 14.012 19.219 14.112 19.309 14.282C19.399 14.452 19.399 15.272 17.11 14.996Z" fill="currentColor"/>
              </svg>
            </a>

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
