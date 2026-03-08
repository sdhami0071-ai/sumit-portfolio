"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AboutSection.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Reveal lines or words as user scrolls
    const textEl = textRef.current;
    if (!textEl) return;

    // Split text into words or span-wrapped lines for GSAP
    // Here we do a simple opacity/y fade in for the whole container first.
    // A staggering effect on words provides the "reveal on scroll" feel.
    const words = textEl.innerText.split(" ");
    textEl.innerHTML = "";
    words.forEach(word => {
      const span = document.createElement("span");
      span.innerText = word + " ";
      span.className = "word";
      textEl.appendChild(span);
    });

    const spans = textEl.querySelectorAll(".word");

    gsap.fromTo(
      spans,
      { opacity: 0.2, y: 10 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        ease: "power1.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="about" className={styles.about} ref={containerRef}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.heading}>MISSION</h2>
        <p className={styles.statement} ref={textRef}>
          Translating business needs and data insights into scalable product 
          and revenue solutions across SaaS and services industries. 
          Focusing on product strategy, experimentation, and AI-enabled automation 
          to drive acquisition, retention, and monetization.
        </p>
      </div>
    </section>
  );
}
