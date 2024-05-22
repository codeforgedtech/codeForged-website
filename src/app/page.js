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
        <section id="about" className={styles.section}>
          <h2>About</h2>
          CodeForged, founded by me, Christer Holm, is the result of my passion and journey in the developer world. My fascination with programming began at the age of 12, when I explored the basics of BASIC. Over time, my interest evolved, and I delved into web development with HTML and CSS, experimenting with ASP and PHP around 1999.
          <p>Over the years, I have continuously developed my skills and kept up with the evolution of various technologies. I have experience in Java, JavaScript, TypeScript, PHP, C#, HTML, CSS, SASS, Ruby, C++, Python, and Go. I also have a deep understanding of various CSS frameworks such as Bulma, Tailwind CSS, and Bootstrap.</p>
          <p>I studied to become a Java developer and have recently delved into TypeScript. CodeForged represents not only my professional work but also my passion and constant pursuit of learning and evolving in the programming world.</p>
          <a href="#top" className={styles.upButton}>↑ Back to Top</a>
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
          <a href="#top" className={styles.upButton}>↑ Back to Top</a>
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
          <a href="#top" className={styles.upButton}>↑ Back to Top</a>
        </section>
        <h2>Continuous Support</h2>
        <p>Our commitment to you doesn't end when the project is complete. We offer continuous support and maintenance to ensure that your software continues to perform at its best.</p>

      </main>
      <footer className={styles.footer}>
        <p>© 2024 CodeForged. All rights reserved.</p>
      </footer>
    </div>
  );
}
