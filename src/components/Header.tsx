"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  openModal: (project?: string, subject?: string) => void;
}

export default function Header({ openModal }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

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

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={`main-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <Link href="/" className="logo" onClick={closeNav}>
          <svg className="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 15L80 40V80H65V60H35V80H20V40L50 15Z" stroke="url(#gold-grad-header)" stroke-width="3" stroke-linejoin="round"/>
            <path d="M50 25L70 42V70H60V50H40V70H30V42L50 25Z" stroke="url(#gold-grad-header)" stroke-width="2" stroke-linejoin="round" opacity="0.7"/>
            <path d="M50 5L50 15" stroke="url(#gold-grad-header)" stroke-width="3" stroke-linecap="round"/>
            <defs>
              <linearGradient id="gold-grad-header" x1="20" y1="15" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#3A3A3C" />
                <stop offset="100%" stop-color="#0A0A0C" />
              </linearGradient>
            </defs>
          </svg>
          <div className="logo-text">
            <span className="brand-name">SIDDHIVINAYAK</span>
            <span className="brand-sub">DEVELOPERS</span>
          </div>
        </Link>

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
              <Link 
                href="/" 
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                onClick={closeNav}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`nav-link ${isActive("/about") ? "active" : ""}`}
                onClick={closeNav}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                href="/projects" 
                className={`nav-link ${isActive("/projects") ? "active" : ""}`}
                onClick={closeNav}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                href="/why-us" 
                className={`nav-link ${isActive("/why-us") ? "active" : ""}`}
                onClick={closeNav}
              >
                Why Us
              </Link>
            </li>
            <li>
              <Link 
                href="/faq" 
                className={`nav-link ${isActive("/faq") ? "active" : ""}`}
                onClick={closeNav}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link 
                href="/privacy" 
                className={`nav-link ${isActive("/privacy") ? "active" : ""}`}
                onClick={closeNav}
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                onClick={closeNav}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right CTA */}
        <button 
          className="btn btn-primary header-cta" 
          onClick={() => openModal("", "Header Action Enquiry")}
        >
          Enquire Now
        </button>
      </div>
    </header>
  );
}
