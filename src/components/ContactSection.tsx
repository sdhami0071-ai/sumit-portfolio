"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ContactSection.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-el", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.contact} ref={containerRef}>
      <div className={`container ${styles.inner}`}>
        <div className="contact-el">
          <h2 className={styles.megaTitle}>Let&apos;s Connect</h2>
        </div>
        
        <div className={`contact-el ${styles.links}`}>
          <a href="mailto:s.dhami0071@gmail.com" className={styles.link}>
            <span className={styles.label}>Email</span>
            <span className={styles.value}>s.dhami0071@gmail.com</span>
          </a>
          <a href="tel:7999866007" className={styles.link}>
            <span className={styles.label}>Phone</span>
            <span className={styles.value}>7999866007</span>
          </a>
          <a href="https://www.linkedin.com/in/sumit-dhami-oo7" target="_blank" rel="noopener noreferrer" className={styles.link}>
            <span className={styles.label}>LinkedIn</span>
            <span className={styles.value}>sumit-dhami-oo7</span>
          </a>
        </div>

        <div className={`contact-el ${styles.footer}`}>
          <p>© {new Date().getFullYear()} Sumit Dhami. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
