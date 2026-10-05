'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import styles from './AboutContent.module.scss';

const floatingImages = [
  '/pics/boxing-02.jpeg',
  '/pics/darra.jpeg',
  '/pics/boxing-13.jpeg',
  '/pics/handstand.jpeg',
  '/pics/shared-image.jpeg',
  '/pics/darra1.jpeg',
  '/pics/rummikub.jpeg',
  '/pics/boxing-04.jpeg',
  '/pics/shared-image-1.jpeg',
  '/pics/shared-image-2.jpeg',
  '/pics/don_gianni.png',
  '/pics/boxing-08.jpeg',
  '/pics/darra.jpeg',
  '/pics/boxing-18.jpeg',
  '/pics/handstand.jpeg',
  '/pics/boxing-11.jpeg',
  '/pics/shared-image.jpeg',
];

export default function AboutContent() {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imgs = galleryRef.current?.querySelectorAll(`.${styles.galleryImg}`);
    if (imgs) {
      gsap.fromTo(
        imgs,
        { opacity: 0, y: 40, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.06,
          ease: 'power3.out',
          delay: 0.2,
        }
      );
    }
  }, []);

  return (
    <section className={styles.aboutPage}>
      {/* Hero section with large text */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>
          <span>CREATING</span>
          <span>VISUAL PEACE</span>
        </h1>
      </div>

      {/* Photo gallery strip */}
      <div className={styles.galleryStrip} ref={galleryRef}>
        <div className={styles.galleryTrack}>
          {floatingImages.map((img, idx) => (
            <div key={idx} className={styles.galleryImg}>
              <img src={img} alt={`Gallery ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* About Me */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>ABOUT ME</h2>
        <div className={styles.aboutMeGrid}>
          <div className={styles.aboutPortrait}>
            <img src="/pics/don_gianni.png" alt="Don Gianni Watson" />
            <span className={styles.aboutPortraitCaption}>DON GIANNI WATSON</span>
          </div>
          <div className={styles.aboutText}>
            <p>
              I AM DON GIANNI WATSON, A PHOTOGRAPHER, VIDEOGRAPHER AND VIDEO EDITOR BASED IN ROTTERDAM.
            </p>
            <p>
              BY PUSHING VISUAL BOUNDARIES THROUGH EXPERIMENTAL PROJECTS, I SHAPE MY CREATIVE
              VISION AROUND THE SHIFT BETWEEN PEACEFUL SATURATION AND HARSH DARKNESS.
            </p>
            <p>
              MY SKILLS SPAN PHOTOGRAPHY (FILM AND DIGITAL), ART DIRECTION, BRANDING,
              PRINT, AND A TOUCH OF CODING.
            </p>
            <p>
              EAGER FOR NEW CHALLENGES, MY ULTIMATE GOAL IS TO WORK 100% ON-SET, CONTINUOUSLY
              EVOLVING IN THE DYNAMIC WORLD OF VISUAL STORYTELLING.
            </p>
            <p>
              BEYOND THAT, I LOVE ENGAGING IN SIDE PROJECTS, FROM PHOTO ZINES TO COLLABORATING
              WITH INDEPENDENT CREATORS IN TV/FILM INDUSTRY.
            </p>
          </div>
        </div>
      </div>

      {/* Experiences */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>EXPERIENCES</h2>
        <div className={styles.experienceList}>
          <div className={styles.experienceItem}>
            <span className={styles.expRole}>VIDEO EDITOR</span>
            <span className={styles.expCompany}>CREATIVE AGENCY</span>
            <span className={styles.expDate}>JANUARY 2023 - PRESENT</span>
          </div>
          <div className={styles.experienceItem}>
            <span className={styles.expRole}>VIDEO EDITOR, PHOTOGRAPHER & VIDEOGRAPHER</span>
            <span className={styles.expCompany}>FREELANCE</span>
            <span className={styles.expDate}>CURRENTLY</span>
          </div>
          <div className={styles.experienceItem}>
            <span className={styles.expRole}>PHOTOGRAPHER</span>
            <span className={styles.expCompany}>STUDIO ROTTERDAM</span>
            <span className={styles.expDate}>FEBRUARY 2022 - DECEMBER 2022</span>
          </div>
          <div className={styles.experienceItem}>
            <span className={styles.expRole}>CREATIVE DEVELOPER INTERN</span>
            <span className={styles.expCompany}>DIGITAL STUDIO</span>
            <span className={styles.expDate}>APRIL - JULY 2021</span>
          </div>
        </div>
      </div>

      {/* Clients */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>CLIENTS</h2>
        <div className={styles.clientsList}>
          <span>CREATIVE STUDIO ROTTERDAM</span>
          <span>VISUAL ARTS COLLECTIVE</span>
          <span>INDEPENDENT CREATORS</span>
          <span>& MORE</span>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href="https://www.instagram.com/d0n_g1ann1" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
          <a href="https://www.linkedin.com/in/dongianniwatson" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <a href="mailto:dongianniwatson@gmail.com">EMAIL</a>
          <a href="https://wa.me/31636217432" target="_blank" rel="noopener noreferrer">WHATSAPP</a>
        </div>
      </footer>
    </section>
  );
}
