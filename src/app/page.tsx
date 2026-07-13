"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Projects from "@/components/Projects";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  const [modalSubject, setModalSubject] = useState("");

  const openModal = (project: string = "", subject: string = "") => {
    setSelectedProject(project);
    setModalSubject(subject || "General Web Enquiry");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header openModal={openModal} />
      <Hero openModal={openModal} />
      <Stats />
      <About />
      <Projects />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Contact />
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
