'use client';

import { useState } from 'react';
import Link from 'next/link';
import projects from '../data/projects';
import styles from './WorkGrid.module.scss';

const categories = ['all', 'art-direction', 'photography'];

export default function WorkGrid() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section className={styles.workPage}>
      <h1 className={styles.pageTitle}>WORK</h1>

      <div className={styles.filters}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${activeFilter === cat ? styles.active : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat === 'all' ? 'ALL' : cat.replace('-', ' ').toUpperCase()}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={`/work/${project.id}`}
            className={styles.projectCard}
          >
            <div className={styles.imageWrapper}>
              <img src={project.image} alt={project.alt} />
            </div>
            <div className={styles.projectInfo}>
              <span className={styles.projectTitle}>{project.title}</span>
              <span className={styles.projectYear}>{project.year}</span>
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
