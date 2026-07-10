"use client";

import React from "react";

interface HeroProps {
  openModal: (project?: string, subject?: string) => void;
}

export default function Hero({ openModal }: HeroProps) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-tagline">ARCHITECTURAL MASTERPIECES</span>
          <h1 className="hero-title">
            Where Luxury Meets <span className="text-gold">Legacy</span>
          </h1>
          <p className="hero-desc">
            Crafting high-end, iconic residential and estate projects designed for the discerning few. Experience unparalleled luxury combined with generational trust.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Explore Portfolios
            </a>
            <button 
              className="btn btn-secondary" 
              onClick={() => openModal("", "Bespoke Consultation Request (Hero)")}
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated scroll down indicator */}
      <a href="#about" className="scroll-down" aria-label="Scroll to About Section">
        <span className="mouse">
          <span className="wheel"></span>
        </span>
        <span className="scroll-text">Scroll Down</span>
      </a>
    </section>
  );
}
