"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import EnquiryModal from "@/components/EnquiryModal";
import FloatingActions from "@/components/FloatingActions";

export default function ProjectsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  const [modalSubject, setModalSubject] = useState("");

  const openModal = (project: string = "", subject: string = "") => {
    setSelectedProject(project);
    setModalSubject(subject || "Projects Page Lead");
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
          backgroundImage: "linear-gradient(to bottom, rgba(8, 9, 12, 0.6), rgba(8, 9, 12, 0.98)), url('/assets/project_commercial.png')",
          height: "40vh",
          minHeight: "350px",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div className="container" style={{ paddingTop: "80px" }}>
          <span className="section-subtitle">THE SIGNATURE LANDMARKS</span>
          <h1 className="hero-title" style={{ fontSize: "clamp(32px, 5vw, 48px)", margin: "10px 0" }}>Our Projects</h1>
          <p className="hero-desc" style={{ fontSize: "16px", maxWidth: "600px" }}>
            Explore our curated residential, commercial, and redevelopment developments designed to elevate urban benchmarks.
          </p>
        </div>
      </section>

      {/* Standard Projects Portfolio List */}
      <Projects openModal={openModal} />

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
