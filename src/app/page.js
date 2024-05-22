import Image from 'next/image';
import styles from './styles/Home.module.css';
import Slider from './components/Slider';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image src="/logo.png" alt="CodeForged Logo" width={250} height={250} />
        <nav className={styles.navbar}>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main className={styles.main}>
      <h2>Welcome to CodeForged</h2>
        <Slider />
        
        <h2>Continuous Support</h2>
        <p>Our commitment to you doesn't end when the project is complete. We offer continuous support and maintenance to ensure that your software continues to perform at its best.</p>

      </main>
      <footer className={styles.footer}>
        <p>© 2024 CodeForged. All rights reserved.</p>
      </footer>
    </div>
  );
}
