'use client';

import Link from 'next/link';
import archiveItems from '../data/archive';
import styles from './ArchiveGrid.module.scss';

export default function ArchiveGrid() {
  return (
    <section className={styles.archivePage}>
      <h1 className={styles.pageTitle}>ARCHIVE</h1>

      <div className={styles.grid}>
        {archiveItems.map((item) => (
          <Link
            key={item.id}
            href={`/archive/${item.id}`}
            className={styles.archiveCard}
          >
            <div className={styles.imageWrapper}>
              <img src={item.image} alt={item.alt} />
              <div className={styles.overlay}>
                <span className={styles.itemTitle}>{item.title}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

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
