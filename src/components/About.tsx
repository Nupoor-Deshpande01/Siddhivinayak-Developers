"use client";

import React, { useEffect, useRef, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

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

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={elementRef} className="about-section scroll-offset">
      <div className="container">
        <div className="about-grid">
          <div className={`about-image-container fade-in ${isVisible ? "appear" : ""}`}>
            <div className="about-img-wrapper">
              <img 
                src="/assets/hero_villa.png" 
                alt="Siddhivinayak Estate Architectural Design" 
                className="about-img main-img"
              />
              <div className="image-accent-border"></div>
              <div className="experience-badge">
                <span className="badge-num">15+</span>
                <span className="badge-txt">Years Designing Dreams</span>
              </div>
            </div>
          </div>
          
          <div className={`about-content fade-in ${isVisible ? "appear" : ""}`} style={{ transitionDelay: "0.2s" }}>
            <span className="section-subtitle">A LEGACY OF CRAFTSMANSHIP</span>
            <h2 className="section-title">
              We Don't Just Build Spaces.<br />
              <span className="text-gold">We Engineer Legacies.</span>
            </h2>
            <p className="about-text">
              For over a decade and a half, <strong>Siddhivinayak Developers</strong> has stood as a hallmark of architectural distinction, structural integrity, and exquisite styling. Founded with the mission to redefine premium living, we focus on handcrafting properties that reflect luxury and offer timeless appreciation.
            </p>
            <p className="about-text">
              Every column we build, every window we position, and every premium finish we apply is driven by our vision to blend functionality with artistic excellence.
            </p>

            <div className="pillars-grid">
              <div className="pillar-item">
                <div className="pillar-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className="pillar-info">
                  <h4>Architectural Brilliance</h4>
                  <p>Sleek, contemporary aesthetics customized by leading architects.</p>
                </div>
              </div>
              <div className="pillar-item">
                <div className="pillar-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="pillar-info">
                  <h4>Uncompromising Quality</h4>
                  <p>Grade-A materials and strict structural compliance testing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
