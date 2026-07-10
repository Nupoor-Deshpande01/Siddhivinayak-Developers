"use client";

import React, { useState, useEffect, useRef } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Form states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
          message,
          consent,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        // Clear fields
        setName("");
        setPhone("");
        setEmail("");
        setProject("");
        setMessage("");
        setConsent(true);

        // Reset display after 10 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 10000);
      } else {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Could not connect to the server. Please check your network.");
      console.error("[Contact Form Submit Error]", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="contact-section scroll-offset"
    >
      <div className="container">
        <div className="contact-grid">
          
          {/* Contact Details Panel */}
          <div className={`contact-info-panel fade-in ${isVisible ? "appear" : ""}`}>
            <span className="section-subtitle font-gold">GET IN TOUCH</span>
            <h2 className="section-title text-white">Let's Discuss Your Dream Home</h2>
            <p className="contact-lead-text">
              Arrange a private viewing or speak directly with our luxury relationship managers. We are at your service.
            </p>

            <div className="info-details">
              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="info-content">
                  <span>Phone Number</span>
                  <a href="tel:+912098765432">+91 20 9876 5432</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="info-content">
                  <span>Email Address</span>
                  <a href="mailto:sales@siddhivinayakdevelopers.com">sales@siddhivinayakdevelopers.com</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="info-content">
                  <span>Corporate Office</span>
                  <p>Suite 402, Signature Towers, Senapati Bapat Road, Pune - 411016</p>
                </div>
              </div>
            </div>

            {/* Custom Luxury Map Layout */}
            <div className="map-container">
              <div className="map-placeholder">
                <div className="map-overlay">
                  <div className="map-pin"></div>
                  <span className="map-label">Siddhivinayak Corporate Office</span>
                  <button 
                    className="btn btn-outline btn-sm"
                    onClick={() => window.open("https://maps.google.com/?q=Senapati+Bapat+Road+Pune+Signature+Towers", "_blank")}
                  >
                    Open Google Maps
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Panel */}
          <div 
            className={`contact-form-panel fade-in ${isVisible ? "appear" : ""}`} 
            style={{ transitionDelay: "0.2s" }}
          >
            <h3 className="panel-form-title">Schedule a Private Consultation</h3>
            <p className="panel-form-desc">
              Please complete the form below. A luxury property consultant will reach out to you within 2 business hours.
            </p>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="luxury-form">
                <div className="form-row">
                  <div className="form-group floating-group">
                    <input 
                      type="text" 
                      id="contact-name" 
                      className="form-control" 
                      required 
                      placeholder=" "
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="contact-name" className="floating-label">Full Name</label>
                  </div>
                </div>

                <div className="form-row split-row">
                  <div className="form-group floating-group">
                    <input 
                      type="tel" 
                      id="contact-phone" 
                      className="form-control" 
                      required 
                      placeholder=" "
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <label htmlFor="contact-phone" className="floating-label">Mobile Number</label>
                  </div>
                  <div className="form-group floating-group">
                    <input 
                      type="email" 
                      id="contact-email" 
                      className="form-control" 
                      required 
                      placeholder=" "
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="contact-email" className="floating-label">Email Address</label>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group floating-group">
                    <select 
                      id="contact-interest" 
                      className="form-control" 
                      required
                      value={project}
                      onChange={(e) => setProject(e.target.value)}
                    >
                      <option value="" disabled hidden></option>
                      <option value="Siddhivinayak Vista">Siddhivinayak Vista (Residential Highrise)</option>
                      <option value="Signature Villas">Siddhivinayak Signature Villas (Luxury Estates)</option>
                      <option value="Siddhivinayak Lumina">Siddhivinayak Lumina (Commercial/Penthouse)</option>
                      <option value="General Enquiry">General Investment / Builder Query</option>
                    </select>
                    <label htmlFor="contact-interest" className="floating-label select-label">Project of Interest</label>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group floating-group">
                    <textarea 
                      id="contact-message" 
                      className="form-control" 
                      rows={4} 
                      placeholder=" "
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <label htmlFor="contact-message" className="floating-label">Message / Specific Requirements (Optional)</label>
                  </div>
                </div>
                
                <div className="form-row checkbox-row">
                  <label className="checkbox-container">
                    <input 
                      type="checkbox" 
                      id="contact-consent" 
                      required 
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                    />
                    <span className="checkmark"></span>
                    <span className="checkbox-label">
                      I consent to receiving brochures and details from Siddhivinayak Developers via email, phone, and WhatsApp.
                    </span>
                  </label>
                </div>

                {errorMessage && (
                  <p style={{ color: "#E07A5F", fontSize: "12px", marginTop: "5px" }}>{errorMessage}</p>
                )}

                <button 
                  type="submit" 
                  className="btn btn-primary btn-block"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "TRANSMITTING..." : "Submit Enquiry"}
                </button>
              </form>
            ) : (
              <div className="form-status-alert success-alert">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <div>
                  <h4>Enquiry Submitted Successfully</h4>
                  <p>Thank you for connecting with Siddhivinayak. Our relationship advisor will call you shortly.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
