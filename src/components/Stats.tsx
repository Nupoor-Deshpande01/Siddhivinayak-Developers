"use client";

import React, { useEffect, useRef, useState } from "react";

interface StatItem {
  target: number;
  suffix: string;
  label: string;
}

const statsData: StatItem[] = [
  { target: 15, suffix: "+", label: "Years of Excellence" },
  { target: 500, suffix: "+", label: "Luxury Homes Delivered" },
  { target: 32, suffix: " Lakhs+", label: "Sq. Ft. Constructed" },
  { target: 100, suffix: "%", label: "Transparency & Trust" },
];

function Counter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
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
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = target;
    const range = end - start;
    const stepTime = 16; // 60 FPS approx
    const totalSteps = duration / stepTime;
    const increment = range / totalSteps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      start += increment;
      if (step >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return (
    <div ref={elementRef} className="stat-card fade-in appear">
      <h3 className="stat-number">{count}</h3>
      <span className="stat-plus"></span>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <section ref={sectionRef} className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, idx) => {
            const [count, setCount] = useState(0);

            useEffect(() => {
              if (!isVisible) return;
              const duration = 2000;
              const stepTime = 16;
              const totalSteps = duration / stepTime;
              const increment = stat.target / totalSteps;
              let currentStep = 0;
              let currentVal = 0;

              const timer = setInterval(() => {
                currentStep++;
                currentVal += increment;
                if (currentStep >= totalSteps) {
                  setCount(stat.target);
                  clearInterval(timer);
                } else {
                  setCount(Math.ceil(currentVal));
                }
              }, stepTime);

              return () => clearInterval(timer);
            }, [isVisible, stat.target]);

            return (
              <div key={idx} className="stat-card fade-in appear">
                <h3 className="stat-number">{count}</h3>
                <span className="stat-plus">{stat.suffix}</span>
                <p className="stat-label">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
