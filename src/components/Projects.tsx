"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { projectsList } from "@/data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | "residential" | "commercial" | "redevelopment">("all");
  const [isTransitioning, setIsTransitioning] = useState(false);
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
      { threshold: 0.05 }
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

  const handleFilterChange = (filter: typeof activeFilter) => {
    if (filter === activeFilter) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveFilter(filter);
      setIsTransitioning(false);
    }, 250);
  };

  const filteredProjects = projectsList.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="projects-section scroll-offset"
    >
      <div className="container">
        <div className={`section-header text-center fade-in ${isVisible ? "appear" : ""}`}>
          <span className="section-subtitle">OUR EXCLUSIVE PORTFOLIO</span>
          <h2 className="section-title">Signature Architectural Landmarks</h2>
          <p className="section-desc">
            Explore our curated collection of luxury residential complexes, premium grade-A business hubs, and iconic redevelopment projects in Pune.
          </p>
        </div>

        {/* Project Filters */}
        <div className={`project-filters fade-in ${isVisible ? "appear" : ""}`} style={{ transitionDelay: "0.1s" }}>
          <button 
            className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => handleFilterChange("all")}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${activeFilter === "residential" ? "active" : ""}`}
            onClick={() => handleFilterChange("residential")}
          >
            Residential
          </button>
          <button 
            className={`filter-btn ${activeFilter === "commercial" ? "active" : ""}`}
            onClick={() => handleFilterChange("commercial")}
          >
            Commercial
          </button>
          <button 
            className={`filter-btn ${activeFilter === "redevelopment" ? "active" : ""}`}
            onClick={() => handleFilterChange("redevelopment")}
          >
            Redevelopment
          </button>
        </div>

        {/* Projects Grid */}
        <div 
          className={`projects-grid fade-in ${isVisible ? "appear" : ""}`} 
          style={{ 
            transitionDelay: "0.2s",
            opacity: isTransitioning ? 0 : 1,
            transform: isTransitioning ? "translateY(15px)" : "translateY(0)",
            transition: "opacity 0.25s ease, transform 0.25s ease"
          }}
        >
          {/* Render Filtered Projects */}
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-img-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-img" 
                />
                <div className="project-badge">{project.status}</div>
              </div>
              <div className="project-details">
                <div>
                  <span className="project-loc">{project.location}</span>
                  <h3 className="project-name">{project.title}</h3>
                  <p className="project-specs">{project.specs}</p>
                </div>
                <div className="project-footer">
                  <span className="project-price">{project.price}</span>
                  <Link 
                    href={`/projects/${project.id}`} 
                    className="btn btn-outline"
                  >
                    Explore Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
