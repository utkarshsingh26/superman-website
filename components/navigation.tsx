"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  isScrolled: boolean
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: isScrolled ? "Service" : "Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed z-40 transition-all duration-300 ease-in-out ${
        isScrolled ? "bottom-6 left-1/2 transform -translate-x-1/2 w-auto" : "top-6 left-6 right-6 w-auto"
      }`}
    >
      <div
        className={`bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 transition-all duration-300 ${
          isScrolled ? "shadow-lg" : "shadow-xl"
        }`}
      >
        <div className="flex items-center space-x-6">
          {!isScrolled && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-800 transform rotate-45 rounded flex items-center justify-center">
                <span className="text-yellow-400 font-bold text-sm transform -rotate-45">S</span>
              </div>
              <span className="text-white font-bold text-lg">
                Utkar<span className="text-red-500">S</span>h
              </span>
            </div>
          )}

          {isScrolled && (
            <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-800 transform rotate-45 rounded flex items-center justify-center">
              <span className="text-yellow-400 font-bold text-sm transform -rotate-45">S</span>
            </div>
          )}

          <div className="flex space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={`text-white hover:text-yellow-400 transition-colors ${
                  activeSection === item.id ? "text-yellow-400" : ""
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
