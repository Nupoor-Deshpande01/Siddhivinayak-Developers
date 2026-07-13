"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhyUs from "@/components/WhyUs";
import EnquiryModal from "@/components/EnquiryModal";
import FloatingActions from "@/components/FloatingActions";

export default function WhyUsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  const [modalSubject, setModalSubject] = useState("");

  const openModal = (project: string = "", subject: string = "") => {
    setSelectedProject(project);
    setModalSubject(subject || "Why Us Page Lead");
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
          backgroundImage: "linear-gradient(to right, rgba(10, 15, 30, 0.7) 0%, rgba(10, 15, 30, 0.4) 35%, rgba(10, 15, 30, 0.05) 100%), url('/assets/hero_villa.png')",
          height: "40vh",
          minHeight: "350px",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div className="container" style={{ paddingTop: "80px" }}>
          <span className="section-subtitle">THE CORE EXCELLENCE</span>
          <h1 className="hero-title" style={{ fontSize: "clamp(32px, 5vw, 48px)", margin: "10px 0" }}>Why Choose Us</h1>
          <p className="hero-desc" style={{ fontSize: "18px", maxWidth: "600px" }}>
            Discover the structural design engineering, transparent legal deeds, and values that define our brand reputation.
          </p>
        </div>
      </section>

      {/* Why Choose Us Pillars Section */}
      <WhyUs />

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
