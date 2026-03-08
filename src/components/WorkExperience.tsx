"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./WorkExperience.module.css";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "3rd Shade",
    roles: [
      {
        title: "Co-founder | Product Manager",
        duration: "08/2023 - 12/2023",
        description: "AI-powered customer engagement and growth automation agency.",
        bullets: [
          "Owned product-led growth across acquisition, onboarding, and monetization.",
          "Increased customer LTV by 28% and reduced early churn by 22%.",
          "Improved activation by 30% and conversion efficiency by 32%.",
        ],
      },
    ],
  },
  {
    company: "Egniol Services Pvt Ltd",
    roles: [
      {
        title: "VP, Growth & GTM Strategy",
        duration: "06/2023 - 07/2023",
        description: "B2B services growth advisory and startup funding.",
        bullets: [
          "Led productized GTM strategy, supporting 2.5x revenue growth.",
          "Scaled partner and channel-led growth contributing 35% of pipeline.",
        ],
      },
      {
        title: "Strategic Alliances Manager",
        duration: "02/2023 - 05/2023",
        description: "",
        bullets: [
          "Closed 100+ channel partnerships creating scalable revenue pipelines.",
        ],
      },
    ],
  },
  {
    company: "BYJU'S",
    roles: [
      {
        title: "Training Manager - Sales",
        duration: "01/2022 - 12/2022",
        description: "Sales enablement for 3,200+ associates.",
        bullets: [
          "Drove 120% revenue growth during OJT phase contributing ₹5.18 Cr.",
          "Generated ₹1.12 Cr revenue from new trainees in their first month.",
        ],
      },
      {
        title: "Business Development Associate",
        duration: "10/2020 - 12/2021",
        description: "",
        bullets: [
          "Delivered ₹80L+ in revenue, ranking among top performers.",
        ],
      },
    ],
  },
];

export default function WorkExperience() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".job-row", {
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
    <section className={styles.experience} ref={containerRef}>
      <div className="container">
        <h2 className={styles.heading}>Work Experience</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div key={i} className="job-group">
              {exp.roles.map((role, j) => (
                <div key={j} className={`job-row ${styles.job}`}>
                  <div className={styles.titleWrapper}>
                    <p className={styles.company}>{j === 0 ? exp.company : ""}</p>
                    <h3 className={styles.role}>{role.title}</h3>
                  </div>
                  <div className={styles.details}>
                    <span className={styles.duration}>{role.duration}</span>
                    {role.description && <p className={styles.description}>{role.description}</p>}
                    {role.bullets && (
                      <ul className={styles.bullets}>
                        {role.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
