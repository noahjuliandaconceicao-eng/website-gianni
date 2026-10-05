'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import styles from './ContactContent.module.scss';

export default function ContactContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    // Hero text reveal
    const heroLines = heroRef.current?.querySelectorAll(`.${styles.heroLine}`);
    if (heroLines) {
      tl.fromTo(
        heroLines,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    }

    // Info section
    if (infoRef.current) {
      tl.fromTo(
        infoRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
        },
        '-=0.4'
      );
    }

    // Form fields
    const fields = formRef.current?.querySelectorAll(`.${styles.formGroup}`);
    if (fields) {
      tl.fromTo(
        fields,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.06,
          ease: 'power3.out',
        },
        '-=0.5'
      );
    }

    // Submit button
    const btn = formRef.current?.querySelector(`.${styles.submitBtn}`);
    if (btn) {
      tl.fromTo(
        btn,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
        '-=0.3'
      );
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Mailto fallback — opens the user's email client
    const mailtoLink = `mailto:dongianniwatson@outlook.com?subject=${encodeURIComponent(
      formData.subject || 'Contact from website'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1000);
  };

  return (
    <section className={styles.contactPage}>
      {/* Hero */}
      <div className={styles.hero} ref={heroRef}>
        <h1 className={styles.heroTitle}>
          <span className={styles.heroLine}>LET&apos;S</span>
          <span className={styles.heroLine}>WORK</span>
          <span className={styles.heroLine}>TOGETHER</span>
        </h1>
      </div>

      {/* Content grid */}
      <div className={styles.content}>
        {/* Left — contact info */}
        <div className={styles.infoSide} ref={infoRef}>
          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>EMAIL</span>
            <a href="mailto:dongianniwatson@outlook.com" className={styles.infoValue}>
              DONGIANNIWATSON@OUTLOOK.COM
            </a>
          </div>

          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>BASED IN</span>
            <span className={styles.infoValue}>ROTTERDAM, NL</span>
          </div>

          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>SOCIALS</span>
            <div className={styles.socialLinks}>
              <a href="https://www.instagram.com/d0n_g1ann1" target="_blank" rel="noopener noreferrer">
                INSTAGRAM
              </a>
              <a href="https://www.linkedin.com/in/dongianniwatson" target="_blank" rel="noopener noreferrer">
                LINKEDIN
              </a>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <span className={styles.infoLabel}>AVAILABILITY</span>
            <span className={styles.infoValue}>OPEN FOR FREELANCE & COLLABORATIONS</span>
          </div>
        </div>

        {/* Right — form */}
        <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.formInput}
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="YOUR NAME"
              autoComplete="name"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>EMAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.formInput}
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="YOUR@EMAIL.COM"
              autoComplete="email"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject" className={styles.formLabel}>SUBJECT</label>
            <select
              id="subject"
              name="subject"
              className={styles.formInput}
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="" disabled>SELECT A SUBJECT</option>
              <option value="Photography">PHOTOGRAPHY</option>
              <option value="Video Editing">VIDEO EDITING</option>
              <option value="Art Direction">ART DIRECTION</option>
              <option value="Collaboration">COLLABORATION</option>
              <option value="General Inquiry">GENERAL INQUIRY</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>MESSAGE</label>
            <textarea
              id="message"
              name="message"
              className={styles.formTextarea}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="TELL ME ABOUT YOUR PROJECT..."
              rows={6}
            />
          </div>

          <button type="submit" className={styles.submitBtn} disabled={status === 'sending'}>
            <span className={styles.btnText}>
              {status === 'sending' ? 'OPENING MAIL...' : status === 'sent' ? 'DONE' : 'SEND MESSAGE'}
            </span>
            <span className={styles.btnArrow}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerNav}>
          <a href="/about">HOME</a>
          <a href="/work">WORK</a>
          <a href="/archive">ARCHIVE</a>
          <a href="/">ABOUT</a>
          <span className={styles.footerActive}>CONTACT</span>
        </div>
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
