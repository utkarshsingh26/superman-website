"use client"

import { useState, useEffect } from "react"
import LandingAnimation from "@/components/landing-animation"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import EducationSection from "@/components/education-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  const [showLanding, setShowLanding] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleAnimationComplete = () => {
    setShowLanding(false)
  }

  const handleSkipAnimation = () => {
    setShowLanding(false)
  }

  if (showLanding) {
    return <LandingAnimation onComplete={handleAnimationComplete} onSkip={handleSkipAnimation} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-red-500 to-yellow-400">
      <Navigation isScrolled={isScrolled} />

      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}
