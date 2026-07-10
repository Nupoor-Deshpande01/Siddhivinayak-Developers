"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import EnquiryModal from "@/components/EnquiryModal";
import FloatingActions from "@/components/FloatingActions";

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  const [modalSubject, setModalSubject] = useState("");

  const openModal = (project: string = "", subject: string = "") => {
    setSelectedProject(project);
    setModalSubject(subject || "About Us Page Lead");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header openModal={openModal} />

      {/* Page Header Banner */}
      <section 
        className="hero-section" 
        style={{ 
          backgroundImage: "linear-gradient(to bottom, rgba(8, 9, 12, 0.6), rgba(8, 9, 12, 0.98)), url('/assets/project_highrise.png')",
          height: "40vh",
          minHeight: "350px",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div className="container" style={{ paddingTop: "80px" }}>
          <span className="section-subtitle">THE LEGACY PROFILES</span>
          <h1 className="hero-title" style={{ fontSize: "clamp(32px, 5vw, 48px)", margin: "10px 0" }}>About Us</h1>
          <p className="hero-desc" style={{ fontSize: "16px", maxWidth: "600px" }}>
            Learn about our core pillars, engineering history, and absolute pursuit of quality since 2011.
          </p>
        </div>
      </section>

      {/* Standard About Legacy Block */}
      <About />

      {/* Vision & Mission Section */}
      <section style={{ padding: "80px 0", backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border-color)" }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-subtitle">OUR VALUES</span>
            <h2 className="section-title">Vision & Mission</h2>
            <p className="section-desc">
              The ethical compass directing every project, contract, and handover we execute.
            </p>
          </div>

          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr 1fr", 
              gap: "40px",
              marginTop: "40px" 
            }} 
            className="split-row"
          >
            {/* Vision Card */}
            <div 
              style={{ 
                backgroundColor: "var(--bg-surface)", 
                border: "1px solid var(--border-color)", 
                padding: "45px 35px",
                transition: "var(--transition-smooth)"
              }}
              className="amenity-card"
            >
              <div 
                style={{ 
                  color: "var(--gold)", 
                  width: "56px", 
                  height: "56px", 
                  backgroundColor: "var(--bg-primary)",
                  border: "1px solid var(--border-color)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px"
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
              </div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", color: "var(--text-white)", marginBottom: "15px" }}>
                Our Vision
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.7", fontWeight: 300, margin: 0 }}>
                To create architectural masterpieces that inspire community living, elevate environmental standards, and stand as structural legacies of trust, safety, and luxurious aesthetic values for generations.
              </p>
            </div>

            {/* Mission Card */}
            <div 
              style={{ 
                backgroundColor: "var(--bg-surface)", 
                border: "1px solid var(--border-color)", 
                padding: "45px 35px",
                transition: "var(--transition-smooth)"
              }}
              className="amenity-card"
            >
              <div 
                style={{ 
                  color: "var(--gold)", 
                  width: "56px", 
                  height: "56px", 
                  backgroundColor: "var(--bg-primary)",
                  border: "1px solid var(--border-color)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px"
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", color: "var(--text-white)", marginBottom: "15px" }}>
                Our Mission
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: "1.7", fontWeight: 300, margin: 0 }}>
                To construct and hand over exceptional developments through direct on-site engineering supervision, Grade-A premium materials, legal transparency under RERA governance, and complete customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <EnquiryModal 
        isOpen={isModalOpen} 
        closeModal={closeModal} 
        selectedProject={selectedProject}
        subject={modalSubject}
      />
      <FloatingActions />
    </>
  );
}
