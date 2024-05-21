import Image from 'next/image'
import styles from './styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image src="/./logo.png" alt="CodeForged Logo" width={200} height={200} />
      </header>
      <main className={styles.main}>
        <h2>Welcome to CodeForged</h2>
        <p>Your partner in crafting high-quality software solutions.</p>
       
        <p>Here at CodeForged, we strive to be like the skilled blacksmiths of the digital realm. Just as the blacksmith shapes and forges iron with precision and skill, we meld our projects together with high-quality code and expertise. Our primary goal is to provide you, our client, with a sense of complete assurance when it comes to your software projects.</p>
        <h2>What can you expect from us at CodeForged?</h2>
        <p>Whether you need to develop new software from scratch, enhance an existing application, or tackle complex technical challenges, you can rely on CodeForged to deliver top-quality results.</p>
        <p>Contact us today to discuss your projects and how we can help bring your visions to life.</p>
      </main>
      <footer className={styles.footer}>
        <p>© 2024 CodeForged. All rights reserved.</p>
      </footer>
    </div>
  )
}
