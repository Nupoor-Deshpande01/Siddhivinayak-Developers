"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { projectsList, ProjectDetail } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import FloatingActions from "@/components/FloatingActions";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params?.id as string;

  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  const [modalSubject, setModalSubject] = useState("");

  // Contact form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (projectId) {
      const match = projectsList.find((p) => p.id === projectId);
      if (match) {
        setProject(match);
      }
    }
  }, [projectId]);

  const openModal = (projName: string = "", subject: string = "") => {
    setSelectedProject(projName || project?.title || "");
    setModalSubject(subject || `Detail Page Enquiry - ${project?.title}`);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          project: project?.title || "Unknown Project",
          message: message || `Direct detail page enquiry for ${project?.title}`,
          consent: true,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      } else {
        setErrorMessage(data.error || "Submission failed. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Could not connect to the server.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!project) {
    return (
      <div style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-white)",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-sans)"
      }}>
        <h2 style={{ fontFamily: "var(--font-serif)", color: "var(--gold)", marginBottom: "20px" }}>Project Not Found</h2>
        <p style={{ color: "var(--text-muted)", marginBottom: "30px" }}>The luxury landmark you are looking for does not exist or has been archived.</p>
        <button className="btn btn-primary" onClick={() => router.push("/")}>Return to Home</button>
      </div>
    );
  }

  return (
    <>
      <Header openModal={openModal} />

      {/* Hero Banner for Detail Page */}
      <section 
        className="hero-section" 
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(245, 236, 229, 0.15), rgba(245, 236, 229, 0.25)), url('${project.image}')`,
          height: "60vh",
          minHeight: "450px"
        }}
      >
        <div className="hero-bg-overlay"></div>
        <div className="container hero-container" style={{ paddingTop: "120px" }}>
          <div className="hero-content" style={{ maxWidth: "800px" }}>
            <span className="hero-tagline" style={{ display: "inline-block", background: "rgba(43, 58, 85, 0.08)", padding: "4px 12px", border: "1px solid var(--gold)" }}>
              {project.category.toUpperCase()} &bull; {project.status.toUpperCase()}
            </span>
            <h1 className="hero-title" style={{ marginTop: "15px", marginBottom: "15px" }}>{project.title}</h1>
            <p className="hero-desc" style={{ marginBottom: "0", fontSize: "18px" }}>{project.location}</p>
          </div>
        </div>
      </section>

      {/* Main Details Body */}
      <section style={{ padding: "80px 0", backgroundColor: "var(--bg-primary)" }}>
        <div className="container">
          {/* Back link */}
          <button 
            onClick={() => router.push("/#projects")}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--gold)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "12px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: "40px"
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to All Projects
          </button>

          <div 
            style={{
              display: "grid",
              gridTemplateColumns: "1.6fr 1fr",
              gap: "60px",
              alignItems: "start"
            }}
            className="split-row"
          >
            {/* Left side details */}
            <div>
              <span className="section-subtitle">PROJECT OVERVIEW</span>
              <h2 className="section-title" style={{ fontSize: "32px", marginBottom: "24px" }}>Elevating the Standards of Design</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: "1.8", fontWeight: 300, marginBottom: "30px" }}>
                {project.overview}
              </p>

              {/* Specifications Table */}
              <div style={{ marginBottom: "50px" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "var(--gold)", marginBottom: "20px", borderBottom: "1px solid var(--border-color)", paddingBottom: "10px" }}>
                  Key Project Facts
                </h3>
                <div style={{ display: "grid", gap: "15px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--border-color)" }}>
                    <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>Typology</span>
                    <span style={{ color: "var(--text-white)", fontWeight: 500, fontSize: "14px" }}>{project.specs}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--border-color)" }}>
                    <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>Investment Bracket</span>
                    <span style={{ color: "var(--gold)", fontWeight: 600, fontSize: "14px" }}>{project.price}</span>
                  </div>
                  {project.features.map((feature, idx) => (
                    <div key={idx} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--border-color)" }}>
                      <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>{feature.label}</span>
                      <span style={{ color: "var(--text-white)", fontWeight: 500, fontSize: "14px" }}>{feature.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Unique Features */}
              <div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "var(--gold)", marginBottom: "20px", borderBottom: "1px solid var(--border-color)", paddingBottom: "10px" }}>
                  Exquisite Highlights
                </h3>
                <div style={{ display: "grid", gap: "20px" }}>
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} style={{ display: "flex", gap: "15px", alignItems: "flex-start" }}>
                      <div style={{ color: "var(--gold)", flexShrink: 0, marginTop: "3px" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <p style={{ color: "var(--text-muted)", fontSize: "14px", margin: 0, lineHeight: "1.5", fontWeight: 300 }}>{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side sticky form */}
            <div 
              style={{
                position: "sticky",
                top: "120px",
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--border-color)",
                padding: "35px"
              }}
            >
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "22px", color: "var(--text-white)", marginBottom: "10px" }}>
                Request Premium Info
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "12px", marginBottom: "25px", fontWeight: 300 }}>
                Download brochures, sample floor plans, and pricing slabs for {project.title}.
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleFormSubmit} className="luxury-form">
                  <div className="form-group floating-group">
                    <input 
                      type="text" 
                      id="detail-name" 
                      className="form-control" 
                      required 
                      placeholder=" "
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="detail-name" className="floating-label">Full Name</label>
                  </div>

                  <div className="form-group floating-group">
                    <input 
                      type="tel" 
                      id="detail-phone" 
                      className="form-control" 
                      required 
                      placeholder=" "
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <label htmlFor="detail-phone" className="floating-label">Mobile Number</label>
                  </div>

                  <div className="form-group floating-group">
                    <input 
                      type="email" 
                      id="detail-email" 
                      className="form-control" 
                      required 
                      placeholder=" "
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="detail-email" className="floating-label">Email Address</label>
                  </div>

                  <div className="form-group floating-group">
                    <textarea 
                      id="detail-message" 
                      className="form-control" 
                      rows={3} 
                      placeholder=" "
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <label htmlFor="detail-message" className="floating-label">Message (Optional)</label>
                  </div>

                  {errorMessage && (
                    <p style={{ color: "#E07A5F", fontSize: "11px", marginTop: "5px" }}>{errorMessage}</p>
                  )}

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-block"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "TRANSMITTING..." : "Request Brochure"}
                  </button>
                </form>
              ) : (
                <div className="form-status-alert success-alert" style={{ marginTop: 0 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <div>
                    <h4>Details Sent</h4>
                    <p>Brochure and price slab files have been sent to your email address ({email}).</p>
                  </div>
                </div>
              )}
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
