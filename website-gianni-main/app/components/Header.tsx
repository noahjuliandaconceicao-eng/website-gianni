'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import styles from './Header.module.scss';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const footerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
    const overlay = overlayRef.current;
    if (!overlay) return;

    const tl = gsap.timeline();

    // Animate background curtain
    tl.to(bgRef.current, {
      scaleY: 1,
      duration: 0.6,
      ease: 'power4.inOut',
    });

    // Stagger in the nav links
    tl.fromTo(
      linksRef.current.filter(Boolean),
      { y: 80, opacity: 0, rotateX: -15 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
      },
      '-=0.2'
    );

    // Close button + footer fade in
    tl.fromTo(
      [closeBtnRef.current, footerRef.current],
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
      '-=0.4'
    );
  }, []);

  const closeMenu = useCallback(() => {
    const tl = gsap.timeline({
      onComplete: () => setMenuOpen(false),
    });

    tl.to(linksRef.current.filter(Boolean), {
      y: -40,
      opacity: 0,
      duration: 0.3,
      stagger: 0.04,
      ease: 'power2.in',
    });

    tl.to([closeBtnRef.current, footerRef.current], {
      opacity: 0,
      duration: 0.2,
    }, '-=0.2');

    tl.to(bgRef.current, {
      scaleY: 0,
      duration: 0.5,
      ease: 'power4.inOut',
    });
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    if (menuOpen) {
      setMenuOpen(false);
      gsap.set(bgRef.current, { scaleY: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const navItems = [
    { href: '/about', label: 'HOME' },
    { href: '/work', label: 'WORK' },
    { href: '/archive', label: 'ARCHIVE' },
    { href: '/vlog', label: 'VLOG' },
    { href: '/', label: 'ABOUT' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <>
      {/* Fixed top nav bar */}
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <Link href="/about" className={styles.homeLink}>
            <img src="/pics/don_gianni.png" alt="DGW" className={styles.homeLinkImg} />
            <span className={styles.homeLinkText}>Don Gianni Watson</span>
          </Link>
        </div>

        {/* Desktop inline nav links */}
        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${pathname === item.href ? styles.navLinkActive : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button className={styles.menuBtn} onClick={openMenu}>
          <span className={styles.menuDot} />
          MENU
        </button>
      </nav>

      {/* Full-screen menu overlay */}
      <div
        ref={overlayRef}
        className={`${styles.menuOverlay} ${menuOpen ? styles.menuOpen : ''}`}
      >
        {/* Animated background curtain */}
        <div ref={bgRef} className={styles.menuBg} />

        <button ref={closeBtnRef} className={styles.closeBtn} onClick={closeMenu}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          CLOSE
        </button>

        <div className={styles.menuContent}>
          <nav className={styles.menuNav}>
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                ref={(el) => { linksRef.current[i] = el; }}
                className={`${styles.menuLink} ${pathname === item.href ? styles.active : ''}`}
                onClick={closeMenu}
              >
                <span className={styles.menuLinkIndex}>0{i + 1}</span>
                <span className={styles.menuLinkLabel}>{item.label}</span>
                <span className={styles.menuLinkArrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            ))}
          </nav>

          <div ref={footerRef} className={styles.menuFooter}>
            <div className={styles.menuFooterLeft}>
              <span className={styles.menuFooterLabel}>SOCIALS</span>
              <div className={styles.menuFooterLinks}>
                <a href="https://www.instagram.com/d0n_g1ann1" target="_blank" rel="noopener noreferrer">
                  INSTAGRAM
                  <span className={styles.linkLine} />
                </a>
                <a href="https://www.linkedin.com/in/dongianniwatson" target="_blank" rel="noopener noreferrer">
                  LINKEDIN
                  <span className={styles.linkLine} />
                </a>
                <a href="mailto:dongianniwatson@gmail.com">
                  EMAIL
                  <span className={styles.linkLine} />
                </a>
              </div>
            </div>
            <div className={styles.menuFooterRight}>
              <span className={styles.menuFooterLabel}>DON GIANNI WATSON</span>
              <p className={styles.menuFooterDesc}>PHOTOGRAPHER, VIDEOGRAPHER &amp; EDITOR<br />ROTTERDAM, NL</p>
              <p className={styles.menuFooterCredit}>GEMAAKT DOOR NOAH JULIAN DA CONCEICAO</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
