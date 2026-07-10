"use client";

import React, { useState, useEffect } from "react";

interface EnquiryModalProps {
  isOpen: boolean;
  closeModal: () => void;
  selectedProject: string;
  subject: string;
}

export default function EnquiryModal({ isOpen, closeModal, selectedProject, subject }: EnquiryModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Sync selectedProject prop to local state when modal opens or selectedProject changes
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setErrorMessage("");
      setName("");
      setPhone("");
      setEmail("");
      
      // Attempt to map selected project value
      if (selectedProject) {
        // Handle variations (e.g. "Signature Villas" vs "Siddhivinayak Signature Villas")
        if (selectedProject.includes("Vista")) {
          setProject("Siddhivinayak Vista");
        } else if (selectedProject.includes("Villa")) {
          setProject("Signature Villas");
        } else if (selectedProject.includes("Lumina")) {
          setProject("Siddhivinayak Lumina");
        } else {
          setProject("General Enquiry");
        }
      } else {
        setProject("");
      }
    }
  }, [isOpen, selectedProject]);

  const handleSubmit = async (e: React.FormEvent) => {
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
          project,
          message: `Source: Modal Popup - Subject: ${subject}`,
          consent: true,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        // Reset local states
        setName("");
        setPhone("");
        setEmail("");
        setProject("");

        // Auto close after 3 seconds
        setTimeout(() => {
          closeModal();
        }, 3000);
      } else {
        setErrorMessage(data.error || "Submission failed. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Could not connect to the server. Please verify your connection.");
      console.error("[Modal Form Submit Error]", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  return (
    <div 
      className={`modal-backdrop ${isOpen ? "open" : ""}`}
      onClick={handleBackdropClick}
    >
      <div className="modal-content">
        <button 
          className="modal-close" 
          onClick={closeModal} 
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="modal-body-grid">
          
          {/* Modal Left Side Banner */}
          <div className="modal-side-visual">
            <div className="modal-visual-overlay"></div>
            <div className="modal-visual-text">
              <svg className="visual-logo" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 15L80 40V80H65V60H35V80H20V40L50 15Z" stroke="#D4AF37" stroke-width="3" />
              </svg>
              <h3>Siddhivinayak</h3>
              <p>Living Redefined</p>
            </div>
          </div>

          {/* Modal Right Side Form */}
          <div className="modal-form-side">
            <h3 className="modal-title">Express Your Interest</h3>
            <p className="modal-desc">
              Please fill out this form to download the premium brochure and price sheets.
            </p>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="luxury-form">
                <div className="form-group floating-group">
                  <input 
                    type="text" 
                    id="modal-name" 
                    className="form-control" 
                    required 
                    placeholder=" "
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="modal-name" className="floating-label">Full Name</label>
                </div>

                <div className="form-group floating-group">
                  <input 
                    type="tel" 
                    id="modal-phone" 
                    className="form-control" 
                    required 
                    placeholder=" "
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <label htmlFor="modal-phone" className="floating-label">Mobile Number</label>
                </div>

                <div className="form-group floating-group">
                  <input 
                    type="email" 
                    id="modal-email" 
                    className="form-control" 
                    required 
                    placeholder=" "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="modal-email" className="floating-label">Email Address</label>
                </div>

                <div className="form-group floating-group">
                  <select 
                    id="modal-project" 
                    className="form-control" 
                    required
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                  >
                    <option value="" disabled hidden></option>
                    <option value="Siddhivinayak Vista">Siddhivinayak Vista (Residential Highrise)</option>
                    <option value="Signature Villas">Siddhivinayak Signature Villas (Luxury Estates)</option>
                    <option value="Siddhivinayak Lumina">Siddhivinayak Lumina (Commercial/Penthouse)</option>
                    <option value="General Enquiry">General / Other Details</option>
                  </select>
                  <label htmlFor="modal-project" className="floating-label select-label">Select Project</label>
                </div>

                {errorMessage && (
                  <p style={{ color: "#E07A5F", fontSize: "11px", marginTop: "-5px" }}>{errorMessage}</p>
                )}

                <button 
                  type="submit" 
                  className="btn btn-primary btn-block"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "REGISTERING INTEREST..." : "Request Call Back"}
                </button>
              </form>
            ) : (
              <div className="form-status-alert success-alert">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <div>
                  <h4>Request Received</h4>
                  <p>An executive has been assigned to your profile and will call you within 15 minutes.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
