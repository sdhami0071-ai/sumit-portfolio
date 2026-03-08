"use client";

import HeroSequence from "./HeroSequence";
import styles from "./HeroSection.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Basic entrance animation for the text
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: "power3.out", delay: 0.5 }
      );
    }, textRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background Sequence fixed/pinned */}
      <HeroSequence />

      {/* Overlay Text */}
      <div className={styles.overlay} ref={textRef}>
        <div className="container">
          <div className={styles.content}>
            <p className={`hero-text ${styles.subtitle}`}>Business Analyst & Product Manager</p>
            <h1 className={`hero-text ${styles.title}`}>SUMIT DHAMI</h1>
            
            <div className={`hero-text ${styles.bottomNav}`}>
              <a href="#about" className={styles.link}>Scroll to discover</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
