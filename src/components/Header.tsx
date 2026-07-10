"use client";

import React, { useState, useEffect } from "react";

interface HeaderProps {
  openModal: (project?: string, subject?: string) => void;
}

export default function Header({ openModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Highlight active nav links on scroll
      const sections = ["home", "about", "projects", "why-us", "contact"];
      let currentSection = "home";
      const scrollPosition = window.scrollY + 120; // Offset for header height

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = sectionId;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial run

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    if (!isNavOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const closeNav = () => {
    setIsNavOpen(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <header className={`main-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <a href="#home" className="logo" onClick={closeNav}>
          <svg className="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 15L80 40V80H65V60H35V80H20V40L50 15Z" stroke="url(#gold-grad-header)" stroke-width="3" stroke-linejoin="round"/>
            <path d="M50 25L70 42V70H60V50H40V70H30V42L50 25Z" stroke="url(#gold-grad-header)" stroke-width="2" stroke-linejoin="round" opacity="0.7"/>
            <path d="M50 5L50 15" stroke="url(#gold-grad-header)" stroke-width="3" stroke-linecap="round"/>
            <defs>
              <linearGradient id="gold-grad-header" x1="20" y1="15" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#F3E5AB" />
                <stop offset="50%" stop-color="#D4AF37" />
                <stop offset="100%" stop-color="#AA7C11" />
              </linearGradient>
            </defs>
          </svg>
          <div className="logo-text">
            <span className="brand-name">SIDDHIVINAYAK</span>
            <span className="brand-sub">DEVELOPERS</span>
          </div>
        </a>

        {/* Hamburger Menu Icon */}
        <button 
          className={`nav-toggle ${isNavOpen ? "active" : ""}`} 
          onClick={toggleNav}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Links Navigation */}
        <nav className={`nav-menu ${isNavOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a 
                href="#home" 
                className={`nav-link ${activeSection === "home" ? "active" : ""}`}
                onClick={closeNav}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={`nav-link ${activeSection === "about" ? "active" : ""}`}
                onClick={closeNav}
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
                onClick={closeNav}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#why-us" 
                className={`nav-link ${activeSection === "why-us" ? "active" : ""}`}
                onClick={closeNav}
              >
                Why Us
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
                onClick={closeNav}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-cta">
          <button 
            className="btn btn-primary" 
            onClick={() => openModal("", "Header Navigation Button")}
          >
            Enquire Now
          </button>
        </div>
      </div>
    </header>
  );
}
