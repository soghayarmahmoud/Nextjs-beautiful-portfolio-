"use client";
import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";



export default function Home() {
  return (
       
      <main className="flex flex-col min-h-screen bg-[#eee]  scroll-smooth">
          <Navbar/>
        <div className="container mx-auto px-12 py-4 scroll-smooth">
          <HeroSection/>
          <AboutSection/>
          <ProjectsSection/>
          <EmailSection/>
        </div>
          <Footer/>
      </main>
  );
}
