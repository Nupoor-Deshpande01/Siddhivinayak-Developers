"use client";

import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      alert(`Thank you! ${email} has been added to our exclusive privilege list.`);
      setEmail("");
      // Reset after a while
      setTimeout(() => setIsSubscribed(false), 5000);
    }, 1000);
  };

  return (
    <footer className="main-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#home" className="logo footer-logo">
            <svg className="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 15L80 40V80H65V60H35V80H20V40L50 15Z" stroke="#D4AF37" stroke-width="3" stroke-linejoin="round" />
              <path d="M50 5L50 15" stroke="#D4AF37" stroke-width="3" stroke-linecap="round" />
            </svg>
            <div className="logo-text">
              <span className="brand-name text-white">SIDDHIVINAYAK</span>
              <span className="brand-sub">DEVELOPERS</span>
            </div>
          </a>
          <p className="brand-desc">
            Architects of high-end urban spaces and sustainable properties. Creating legacies since 2011.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Legacy</a></li>
            <li><a href="/projects">Signature Projects</a></li>
            <li><a href="/why-us">Why Choose Us</a></li>
            <li><a href="/contact">Contact Desk</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Projects Portal</h4>
          <ul>
            <li><a href="/projects/vista">Siddhivinayak Vista</a></li>
            <li><a href="/projects/villas">Signature Villas</a></li>
            <li><a href="/projects/lumina">Siddhivinayak Lumina</a></li>
            <li><a href="/projects">Upcoming Launches</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Privilege Circle</h4>
          <p>Subscribe to receive pre-launch priority invitations and luxury property reports.</p>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              required 
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting || isSubscribed}
            />
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting || isSubscribed}
            >
              {isSubmitting ? "WAIT..." : isSubscribed ? "SUBSCRIBED" : "Subscribe"}
            </button>
          </form>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          &copy; 2026 Siddhivinayak Developers. All Rights Reserved. | <a href="/privacy">Privacy Policy</a> | <a href="/faq">FAQ Desk</a>
        </p>
        <p className="rera-disclaimer">
          *Disclaimer: All visuals, amenities, layouts, and specifications shown are conceptual. Real estate projects are subject to MahaRERA registration permissions.
        </p>
      </div>
    </footer>
  );
}
