'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import styles from './FloatingGallery.module.scss';

const images = [
  // Row 1 - 3 images
  { src: '/pics/boxing-02.jpeg', alt: 'Boxer training' },
  { src: '/pics/darra.jpeg', alt: 'Darra' },
  { src: '/pics/handstand.jpeg', alt: 'Handstand' },
  // Row 2 - 3 images
  { src: '/pics/shared-image.jpeg', alt: 'Shared' },
  { src: '/pics/boxing-13.jpeg', alt: 'Boxer portrait' },
  { src: '/pics/rummikub.jpeg', alt: 'Rummikub' },
  // Row 3 - 3 images
  { src: '/pics/darra1.jpeg', alt: 'Darra 1' },
  { src: '/pics/shared-image-1.jpeg', alt: 'Shared 1' },
  { src: '/pics/don_gianni.png', alt: 'Background' },
  // Row 4 - 2 images
  { src: '/pics/shared-image-2.jpeg', alt: 'Shared 2' },
  { src: '/pics/boxing-04.jpeg', alt: 'Sparring session' },
];

export default function FloatingGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const plane1Ref = useRef<HTMLDivElement>(null);
  const plane2Ref = useRef<HTMLDivElement>(null);
  const plane3Ref = useRef<HTMLDivElement>(null);
  const plane4Ref = useRef<HTMLDivElement>(null);

  let rafId: number | null = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const lerp = (start: number, target: number, amount: number) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);

    gsap.set(plane1Ref.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2Ref.current, { x: `+=${xForce * 0.6}`, y: `+=${yForce * 0.6}` });
    gsap.set(plane3Ref.current, { x: `+=${xForce * 0.35}`, y: `+=${yForce * 0.35}` });
    gsap.set(plane4Ref.current, { x: `+=${xForce * 0.2}`, y: `+=${yForce * 0.2}` });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce !== 0 || yForce !== 0) {
      requestAnimationFrame(animate);
    } else {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = null;
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (rafId === null) {
      rafId = requestAnimationFrame(animate);
    }
  };

  // Entrance animation
  useEffect(() => {
    const imgEls = containerRef.current?.querySelectorAll(`.${styles.floatingImg}`);
    if (imgEls) {
      gsap.fromTo(
        imgEls,
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          stagger: 0.08,
          ease: 'power3.out',
          delay: 0.3,
        }
      );
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className={styles.gallery}
      onMouseMove={handleMouseMove}
    >
      {/* Large center text */}
      <div className={styles.centerText}>
        <h1 className={styles.headline}>
          <span className={styles.line1}>ROTTERDAM</span>
          <span className={styles.line2}>BASED</span>
          <span className={styles.line3}>PHOTOGRAPHER</span>
          <span className={styles.line4}>+ VIDEOGRAPHER & EDITOR</span>
        </h1>
      </div>

      {/* Plane 1 - Row 1 images (fastest) */}
      <div ref={plane1Ref} className={styles.plane}>
        <div className={`${styles.floatingImg} ${styles.img1}`}>
          <img src={images[0].src} alt={images[0].alt} />
        </div>
        <div className={`${styles.floatingImg} ${styles.img2}`}>
          <img src={images[1].src} alt={images[1].alt} />
        </div>
        <div className={`${styles.floatingImg} ${styles.img3}`}>
          <img src={images[2].src} alt={images[2].alt} />
        </div>
      </div>

      {/* Plane 2 - Row 2 images */}
      <div ref={plane2Ref} className={styles.plane}>
        <div className={`${styles.floatingImg} ${styles.img4}`}>
          <img src={images[3].src} alt={images[3].alt} />
        </div>
        <div className={`${styles.floatingImg} ${styles.img5}`}>
          <img src={images[4].src} alt={images[4].alt} />
        </div>
        <div className={`${styles.floatingImg} ${styles.img6}`}>
          <img src={images[5].src} alt={images[5].alt} />
        </div>
      </div>

      {/* Plane 3 - Row 3 images */}
      <div ref={plane3Ref} className={styles.plane}>
        <div className={`${styles.floatingImg} ${styles.img7}`}>
          <img src={images[6].src} alt={images[6].alt} />
        </div>
        <div className={`${styles.floatingImg} ${styles.img8}`}>
          <img src={images[7].src} alt={images[7].alt} />
        </div>
        <div className={`${styles.floatingImg} ${styles.img9}`}>
          <img src={images[8].src} alt={images[8].alt} />
        </div>
      </div>

      {/* Plane 4 - Row 4 images (slowest) */}
      <div ref={plane4Ref} className={styles.plane}>
        <div className={`${styles.floatingImg} ${styles.img10}`}>
          <img src={images[9].src} alt={images[9].alt} />
        </div>
        <div className={`${styles.floatingImg} ${styles.img11}`}>
          <img src={images[10].src} alt={images[10].alt} />
        </div>
      </div>

      {/* Bottom navigation links */}
      <div className={styles.bottomLinks}>
        <a href="/archive" className={styles.bottomLink}>Go to Photography</a>
        <a href="/work" className={styles.bottomLink}>Go to Work</a>
        <a href="/vlog" className={styles.bottomLink}>Go to Vlog</a>
        <a href="/" className={styles.bottomLink}>Go to About</a>
      </div>
    </section>
  );
}
