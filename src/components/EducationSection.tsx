"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./EducationSection.module.css";

gsap.registerPlugin(ScrollTrigger);

const eduData = [
  {
    college: "IMT Ghaziabad",
    degree: "Post Graduate Diploma in Management",
    year: "2024 - 2026",
  },
  {
    college: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
    degree: "Bachelor Of Technology",
    year: "2016 - 2020",
  },
];

export default function EducationSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".edu-row", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.education} ref={containerRef}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.heading}>Education</h2>
        <div className={styles.list}>
          {eduData.map((edu, i) => (
            <div key={i} className={`edu-row ${styles.row}`}>
              <div className={styles.left}>
                <h3 className={styles.college}>{edu.college}</h3>
                <p className={styles.degree}>{edu.degree}</p>
              </div>
              <div className={styles.right}>
                <span className={styles.year}>{edu.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
