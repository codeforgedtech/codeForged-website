import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/Home.module.css';
import Slider from './components/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles['header-container']}>
        <header className={styles.header}>
          <Image src="/logo.png" alt="CodeForged Logo" width={150} height={150} />
          <nav className={styles.navbar}>
            <Link href="#about">About</Link>
            <Link href="#services">Services</Link>
            <Link href="#clients">Clients</Link>
            <Link href="#contact">Contact</Link>
            
          </nav>
        </header>
      </div>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h2>Welcome to CodeForged</h2>
          <Slider />
        </section>
        
        <section id="about" className={styles.section}>
          <h2>About</h2>
          <p>
            CodeForged, founded by Christer Holm, is the culmination of a passion and journey in the developer world. My fascination with programming began at the age of 12, exploring the basics of BASIC. Over time, my interest evolved into web development with HTML and CSS, experimenting with ASP and PHP around 1999.
          </p>
          <p>
            Throughout the years, I have continuously honed my skills and kept up with the evolution of various technologies. I have experience in Java, JavaScript, TypeScript, PHP, C#, HTML, CSS, SASS, Ruby, C++, Python, and Go. Additionally, I have a deep understanding of various CSS frameworks such as Bulma, Tailwind CSS, and Bootstrap.
          </p>
          <p>
            I studied to become a Java developer and have recently delved into TypeScript. CodeForged represents not only my professional work but also my passion and constant pursuit of learning and evolving in the programming world.
          </p>
          <Link href="#top" className={styles.upButton}>↑ Back to Top</Link>
        </section>
        
        <section id="services" className={styles.section}>
          <h2>Services</h2>
          <p>At CodeForged, we offer a wide range of services to meet your software development needs. Our expertise includes:</p>
          <ul>
            <li>Website Development</li>
            <li>App Development</li>
            <li>Custom Code Solutions</li>
            <li>Backend Development</li>
            <li>Frontend Development</li>
          </ul>
          <p>We have extensive knowledge and experience in various technologies and frameworks, including:</p>
          <p><strong>Languages:</strong> Java, JavaScript, TypeScript, PHP, C#, HTML, CSS, SASS, Ruby, C++, Python, Go</p>
          <p><strong>Frameworks:</strong> Node.js, React.js, Express.js, Angular, WordPress, Spring Boot, Ruby on Rails, Vue.js, React Native, Django, .NET</p>
          <p><strong>Databases:</strong> MySQL, MongoDB, MariaDB, Firebase, Supabase</p>
          <Link href="#top" className={styles.upButton}>↑ Back to Top</Link>
        </section>
        <section id="clients" className={styles.section}>
  <h2>Clients</h2>
  <p>We have had the pleasure of working with a diverse range of clients. Here are some of the clients we've collaborated with:</p>
  <ul className={styles.clientList}>
    <li className={styles.clientItem}>WeatherMan Tattoo</li>
    <li className={styles.clientItem}>Annelie Eng</li>
    <li className={styles.clientItem}>Foxen</li>
    <li className={styles.clientItem}>Arctic Design</li>
    <li className={styles.clientItem}>TWOTWO</li>
    <li className={styles.clientItem}>Zapp</li>
    <li className={styles.clientItem}>Modemedia</li>
    <li className={styles.clientItem}>Bilaccessoarer</li>
  </ul>
  <Link href="#top" className={styles.upButton}>↑ Back to Top</Link>
</section>
        <section id="contact" className={styles.section}>
          <h2>Contact</h2>
          <form className={styles.contactForm} action="https://formspree.io/f/your-form-id" method="POST">
            <div className={styles.formGroup}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>
          <Link href="#top" className={styles.upButton}>↑ Back to Top</Link>
        </section>

        <section className={styles.support}>
          <h2>Continuous Support</h2>
          <p>Our commitment to you doesn't end when the project is complete. We offer continuous support and maintenance to ensure that your software continues to perform at its best.</p>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>© 2024 CodeForged. All rights reserved.</p>
      </footer>
    </div>
  );
}

