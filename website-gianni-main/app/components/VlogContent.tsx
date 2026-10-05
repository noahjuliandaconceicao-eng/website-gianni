'use client';

import styles from './VlogContent.module.scss';

const vlogs = [
  {
    id: 'lisbon',
    eyebrow: 'VLOG — EPISODE 01',
    title: ['LISBON', 'PORTUGAL'],
    video: '/video/lisbon-vlog.mp4',
    meta: ['EPISODE 01', 'LISBON, PORTUGAL', '2026'],
    description: [
      'MY FIRST VLOG. A FEW DAYS WANDERING THROUGH LISBON WITH A CAMERA IN HAND, CHASING LIGHT THROUGH THE STEEP STREETS OF ALFAMA AND THE VIEWS OVER THE TAGUS.',
      'THE START OF A NEW SERIES DOCUMENTING LIFE ON THE ROAD, BETWEEN PHOTOGRAPHY AND MOTION.',
    ],
    credit: null,
  },
  {
    id: 'sandwich-thief',
    eyebrow: 'VLOG — EPISODE 02',
    title: ['SANDWICH', 'THIEF'],
    video: '/video/SandwichThief.mp4',
    meta: ['EPISODE 02', '2026'],
    description: [
      'SANDWICH THIEF. A SHORT STORY SHOT ON THE FLY.',
    ],
    credit: 'CAMERAMAN: DON GIANNI WATSON',
  },
  {
    id: 'zonder-hem',
    eyebrow: 'SHORT FILM',
    title: ['ZONDER', 'HEM'],
    video: '/video/Zonder_hem.mp4',
    meta: ['SHORT FILM', 'NO DIALOGUE', '2026'],
    description: [
      'A STORY WITHOUT DIALOGUE. WITH THIS FILM I TRY TO TELL A SHORT STORY USING ONLY MOVEMENT AND VISUAL ELEMENTS.',
    ],
    credit: 'PRE-PRODUCTION, FILM & EDIT: DON GIANNI WATSON',
  },
  {
    id: 'tucknee',
    eyebrow: 'COMMERCIAL',
    title: ['TUCKNEE'],
    video: '/video/tucknee.mp4',
    meta: ['COMMERCIAL', '2026'],
    description: [
      'A SHORT COMMERCIAL VIDEO.',
    ],
    credit: 'EDIT: DON GIANNI WATSON',
  },
  {
    id: 'summer-recap',
    eyebrow: 'VLOG — EPISODE 03',
    title: ['SUMMER', 'RECAP'],
    video: '/video/Summer_edit.mp4',
    meta: ['EPISODE 03', '2026'],
    description: [
      'A SHORT VIDEO ABOUT WHAT I DID THIS SUMMER.',
    ],
    credit: 'FILM & EDIT: DON GIANNI WATSON',
  },
];

export default function VlogContent() {
  return (
    <section className={styles.vlogPage}>
      {vlogs.map((vlog) => (
        <article key={vlog.id} className={styles.entry}>
          {/* Hero */}
          <div className={styles.hero}>
            <span className={styles.eyebrow}>{vlog.eyebrow}</span>
            <h1 className={styles.heroTitle}>
              {vlog.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
          </div>

          {/* Video player */}
          <div className={styles.playerWrap}>
            <video
              className={styles.player}
              src={vlog.video}
              controls
              playsInline
              preload="metadata"
            />
          </div>

          {/* Meta + description */}
          <div className={styles.info}>
            <div className={styles.meta}>
              {vlog.meta.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
            <div className={styles.description}>
              {vlog.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {vlog.credit && <p className={styles.credit}>{vlog.credit}</p>}
          </div>
        </article>
      ))}
    </section>
  );
}
