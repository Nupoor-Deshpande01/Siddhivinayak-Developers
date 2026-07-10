"use client";

import React, { useEffect, useRef, useState } from "react";

interface Reason {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const reasonsData: Reason[] = [
  {
    title: "Prime Locations",
    desc: "We secure premium land parcels in Pune's most coveted neighborhoods, guaranteeing high appreciation and exceptional convenience.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Timeless Architecture",
    desc: "Collaborating with elite architects to create designs that harmoniously blend contemporary luxury with lasting functionality.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M12 22V12m0 0L20 8M12 12L4 8M12 2l8 4m-8-4L4 6m8-4v10" />
      </svg>
    ),
  },
  {
    title: "Flawless Execution",
    desc: "Rigorous grade-A materials sourcing and on-site engineering protocols ensure that our structures endure for generations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Transparent Governance",
    desc: "Clear legal titles, real-time construction reporting, and absolute compliance with MahaRERA policies ensure worry-free ownership.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="why-us" 
      ref={sectionRef} 
      className="why-us-section scroll-offset"
      style={{
        padding: "100px 0",
        backgroundColor: "var(--bg-secondary)"
      }}
    >
      <div className="container">
        <div className={`section-header text-center fade-in ${isVisible ? "appear" : ""}`}>
          <span className="section-subtitle">WHY CHOOSE US</span>
          <h2 className="section-title">The Siddhivinayak Standard</h2>
          <p className="section-desc">
            A commitment to excellence, transparency, and architectural brilliance that sets us apart.
          </p>
        </div>

        <div 
          className={`amenities-grid fade-in ${isVisible ? "appear" : ""}`} 
          style={{ 
            transitionDelay: "0.2s",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px"
          }}
        >
          {reasonsData.map((reason, idx) => (
            <div key={idx} className="amenity-card">
              <div className="amenity-icon">
                {reason.icon}
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
