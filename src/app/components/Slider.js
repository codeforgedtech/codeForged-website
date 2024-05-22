'use client';

import { useState, useEffect } from 'react';
import styles from './Slider.module.css';

const slides = [
  {
    title: 'Your partner!',
    description: 'Here at CodeForged, we strive to be like the skilled blacksmiths of the digital realm. Just as the blacksmith shapes and forges iron with precision and skill, we meld our projects together with high-quality code and expertise. Our primary goal is to provide you, our client, with a sense of complete assurance when it comes to your software projects',
    buttonText: 'Contact',
    buttonLink: '#contact',
    backgroundImage: '/images/slidebg.png'
  },
  {
    title: 'What can you expect?',
    description: 'Whether you need to develop new software from scratch, enhance an existing application, or tackle complex technical challenges, you can rely on CodeForged to deliver top-quality results.',
    buttonText: 'Contact',
    buttonLink: '#contact',
    backgroundImage: '/images/slidebg.png'
  },
  {
    title: 'Quality Code',
    description: 'We always aim to deliver software of the highest quality. Every line of code is carefully crafted and reviewed to ensure stability, security, and performance.',
    buttonText: 'Contact',
    buttonLink: '#contact',
    backgroundImage: '/images/slidebg.png'
  },
  {
    title: 'Customized Solutions',
    description: 'We understand that every business and every project is unique. Therefore, we work closely with you to understand your needs and goals, creating customized solutions that fit you perfectly.',
    buttonText: 'Contact',
    buttonLink: '#contact',
    backgroundImage: '/images/slidebg.png'
  },
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Byt bild varje 5 sekunder

    return () => clearInterval(interval); // Rensa intervallet när komponenten avmonteras
  }, [currentSlide]);

  return (
    <div className={styles.slider}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          style={{ backgroundImage: `url(${slide.backgroundImage})` }}
        >
          <div className={styles.description}>
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            <button
              className={styles.ctaButton}
              onClick={() => window.location.href = slide.buttonLink}
            >
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}
      <button className={styles.prev} onClick={prevSlide}>&#10094;</button>
      <button className={styles.next} onClick={nextSlide}>&#10095;</button>
    </div>
  );
}

