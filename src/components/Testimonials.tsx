"use client";

import React, { useState, useEffect, useRef } from "react";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

const testimonialsData: Testimonial[] = [
  {
    quote: "Moving into Siddhivinayak Vista has exceeded our expectations. The attention to concrete and soundproofing, the exquisite marble lobby, and the responsive staff make living here a true pleasure.",
    author: "Mr. & Mrs. Kulkarni",
    position: "Business Entrepreneurs, Pune",
  },
  {
    quote: "Siddhivinayak Signature Villas are a masterpiece. The privacy we enjoy, combined with the elegant high ceilings and smart security systems, gives us absolute peace of mind during our weekend stays.",
    author: "Dr. Amit Ranade",
    position: "Senior Cardiologist",
  },
];

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    startTimer(); // Reset auto rotation interval
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % testimonialsData.length);
    startTimer(); // Reset auto rotation interval
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">TESTIMONIALS</span>
          <h2 className="section-title">From Our Distinguished Residents</h2>
        </div>
        
        <div className="testimonial-container">
          <div className="testimonial-slider">
            {testimonialsData.map((item, idx) => (
              <div 
                key={idx} 
                className={`testimonial-slide ${idx === activeSlide ? "active" : ""}`}
                style={{
                  opacity: idx === activeSlide ? 1 : 0,
                  visibility: idx === activeSlide ? "visible" : "hidden",
                  transition: "opacity 0.5s ease, visibility 0.5s ease",
                  position: idx === activeSlide ? "relative" : "absolute",
                  width: "100%",
                  top: 0,
                  left: 0
                }}
              >
                <div className="quote-mark">“</div>
                <p className="testimonial-text">{item.quote}</p>
                <div className="testimonial-author">
                  <h4>{item.author}</h4>
                  <span>{item.position}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-controls">
            <button 
              className="control-btn prev-btn" 
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <button 
              className="control-btn next-btn" 
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
