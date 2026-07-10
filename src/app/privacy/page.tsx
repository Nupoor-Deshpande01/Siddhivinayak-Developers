"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import FloatingActions from "@/components/FloatingActions";

export default function PrivacyPolicyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  const [modalSubject, setModalSubject] = useState("");

  const openModal = (project: string = "", subject: string = "") => {
    setSelectedProject(project);
    setModalSubject(subject || "Privacy Policy Lead");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header openModal={openModal} />

      <main style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh", paddingTop: "140px", paddingBottom: "80px" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <span className="section-subtitle">SIDDHIVINAYAK LEGAL</span>
          <h1 className="section-title" style={{ fontSize: "36px", marginBottom: "30px" }}>Privacy & Data Policy</h1>
          
          <div style={{ color: "var(--text-white)", lineHeight: "1.8", fontWeight: 300, display: "grid", gap: "25px" }}>
            <p>
              At <strong>Siddhivinayak Developers</strong>, we respect your privacy and are committed to protecting any personal data that you share with us. This policy details how we collect, store, and utilize information submitted via our digital portal.
            </p>

            <hr style={{ border: "none", borderTop: "1px solid var(--border-color)", margin: "10px 0" }} />

            <div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "var(--gold)", marginBottom: "12px", fontWeight: 600 }}>
                1. Information Collection
              </h3>
              <p>
                We collect personal information that you voluntarily provide to us when expressing interest in our projects. This includes:
              </p>
              <ul style={{ listStyleType: "disc", paddingLeft: "20px", marginTop: "10px", display: "grid", gap: "8px" }}>
                <li>Your name and contact details (mobile number and email address).</li>
                <li>Details of your real estate preferences and budget constraints.</li>
                <li>Digital logs generated during form transmission (IP stamps, dates).</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "var(--gold)", marginBottom: "12px", fontWeight: 600 }}>
                2. Data Storage and Local Logs
              </h3>
              <p>
                All project enquiries submitted on this website are transmitted and stored in a secure local database configuration (JSON format) located on our system servers. Access to this raw lead information is restricted strictly to authorised sales managers and relationship executives.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "var(--gold)", marginBottom: "12px", fontWeight: 600 }}>
                3. Purpose of Processing
              </h3>
              <p>
                We use your registered details to send requested architectural brochures, price sheets, and to arrange follow-up calls or site visits. We do not sell, rent, or lease your contact information to external third-party agencies or advertising networks.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "var(--gold)", marginBottom: "12px", fontWeight: 600 }}>
                4. RERA Compliance Disclosures
              </h3>
              <p>
                The drawings, perspectives, and specifications presented on this website are conceptual indicators. The final details of residential and commercial properties are governed by standard sale agreements registered under the Real Estate Regulation and Development Act (MahaRERA) provisions.
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "var(--gold)", marginBottom: "12px", fontWeight: 600 }}>
                5. Contact & Erasure Rights
              </h3>
              <p>
                If you wish to examine, correct, or request the permanent deletion of your recorded enquiries, you may contact our relationship officer at <a href="mailto:privacy@siddhivinayak.com" style={{ color: "var(--gold)", fontWeight: 500 }}>privacy@siddhivinayak.com</a>.
              </p>
            </div>
          </div>
        </div>
      </main>

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
