'use client';

import Link from 'next/link';
import archiveItems from '../data/archive';
import styles from './ArchiveDetail.module.scss';

export default function ArchiveDetail({ id }: { id: string }) {
  const item = archiveItems.find((a) => a.id === id);

  if (!item) {
    return (
      <section className={styles.detail}>
        <h1 className={styles.title}>Archive not found</h1>
        <Link href="/archive" className={styles.backLink}>← Back to Archive</Link>
      </section>
    );
  }

  return (
    <section className={styles.detail}>
      <h1 className={styles.title}>{item.title}</h1>

      <div className={styles.imageList}>
        {item.images.map((img, idx) => (
          <div key={idx} className={styles.imageItem}>
            <img src={img} alt={`${item.title} ${idx + 1}`} />
          </div>
        ))}
      </div>

      <div className={styles.backNav}>
        <Link href="/archive" className={styles.backLink}>← Back to Archive</Link>
      </div>
    </section>
  );
}
