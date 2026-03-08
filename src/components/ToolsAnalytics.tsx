"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ToolsAnalytics.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function ToolsAnalytics() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-item", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.tools} ref={containerRef}>
      <div className="container">
        <h2 className={styles.heading}>Capabilities & Initiatives</h2>
        
        <div className={styles.grid}>
          {/* Tools Designed Card */}
          <div className={`bento-item ${styles.card}`}>
            <h3 className={styles.cardTitle}>Tools Designed</h3>
            <ul className={styles.cardList}>
              <li>WhatsApp AI agent for customer engagement and bookings.</li>
              <li>AI calling agent for lead qualification and scheduling.</li>
              <li>Automated AI email workflows for follow-ups and consultations.</li>
              <li>AI-integrated CRM for sales, KPI tracking, and churn reduction.</li>
            </ul>
          </div>

          {/* AI-Driven Analytics Initiatives Card */}
          <div className={`bento-item ${styles.card}`}>
            <h3 className={styles.cardTitle}>AI-Driven Analytics</h3>
            <ul className={styles.cardList}>
              <li>Designed churn prediction system translating behavioral insights into retention triggers.</li>
              <li>Built campaign response prediction models scoring user intent by channel.</li>
              <li>Integrated insights into growth dashboards and experimentation frameworks.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
