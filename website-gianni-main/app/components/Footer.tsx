import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <span className={styles.name}>DON GIANNI WATSON</span>
        <nav className={styles.nav}>
          <Link href="/work" className={styles.navLink}>WORK</Link>
          <Link href="/" className={styles.navLink}>ABOUT</Link>
          <Link href="/archive" className={styles.navLink}>ARCHIVE</Link>
          <Link href="/vlog" className={styles.navLink}>VLOG</Link>
          <Link href="/contact" className={styles.navLink}>CONTACT</Link>
        </nav>
      </div>

      <div className={styles.bottom}>
        <span className={styles.copy}>© {new Date().getFullYear()} DON GIANNI WATSON — ROTTERDAM, NL</span>
        <span className={styles.credit}>GEMAAKT DOOR NOAH JULIAN DA CONCEICAO</span>
      </div>
    </footer>
  );
}
