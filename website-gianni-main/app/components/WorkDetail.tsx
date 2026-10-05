'use client';

import Link from 'next/link';
import projects from '../data/projects';
import styles from './WorkDetail.module.scss';

// We'll show the main project image + some extra images from the pool
const extraImages = [
  '/pics/boxing-02.jpeg',
  '/pics/darra.jpeg',
  '/pics/darra1.jpeg',
  '/pics/boxing-13.jpeg',
  '/pics/handstand.jpeg',
  '/pics/shared-image.jpeg',
  '/pics/rummikub.jpeg',
  '/pics/shared-image-1.jpeg',
  '/pics/shared-image-2.jpeg',
  '/pics/bg1.jpg',
];

// Some projects have their own dedicated shoot to pull extras from
// instead of the generic pool above.
const projectExtraImages: Record<string, string[]> = {
  'lukk-the-dj': [
    '/pics/lukk-dj-02.jpg',
    '/pics/lukk-dj-03.jpg',
    '/pics/lukk-dj-04.jpg',
    '/pics/lukk-dj-05.jpg',
    '/pics/lukk-dj-06.jpg',
    '/pics/lukk-dj-07.jpg',
    '/pics/lukk-dj-08.jpg',
    '/pics/lukk-dj-09.jpg',
    '/pics/lukk-dj-10.jpg',
    '/pics/lukk-dj-11.jpg',
    '/pics/lukk-dj-12.jpg',
    '/pics/lukk-dj-13.jpg',
    '/pics/lukk-dj-14.jpg',
  ],
};

export default function WorkDetail({ id }: { id: string }) {
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <section className={styles.detail}>
        <h1 className={styles.title}>Project not found</h1>
        <Link href="/work" className={styles.backLink}>← Back to Work</Link>
      </section>
    );
  }

  // Pick 4 extra images that are different from the project's main image, repeating if needed
  const extras = (projectExtraImages[project.id] ?? extraImages)
    .filter((img) => img !== project.image)
    .slice(0, 4);

  return (
    <section className={styles.detail}>
      <div className={styles.heroImage}>
        <img src={project.image} alt={project.alt} />
      </div>

      <div className={styles.info}>
        <h1 className={styles.title}>{project.title}</h1>
        <div className={styles.meta}>
          <span>{project.year}</span>
          <span>{project.category.map(c => c.replace('-', ' ')).join(', ').toUpperCase()}</span>
        </div>
      </div>

      <div className={styles.imageGrid}>
        {extras.map((img, idx) => (
          <div key={idx} className={styles.gridImage}>
            <img src={img} alt={`${project.title} detail ${idx + 1}`} />
          </div>
        ))}
      </div>

      <div className={styles.backNav}>
        <Link href="/work" className={styles.backLink}>← Back to Work</Link>
      </div>
    </section>
  );
}
