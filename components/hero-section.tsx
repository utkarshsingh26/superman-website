"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Mail } from "lucide-react"

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-red-900/20"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Superman Symbol */}
          <div className="w-24 h-24 mx-auto mb-8 relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 transform rotate-45 rounded-lg shadow-2xl"></div>
            <div className="absolute inset-3 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-red-800 font-bold text-2xl transform rotate-45">
              S
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-white to-red-400 bg-clip-text text-transparent">
            Utkar<span className="text-red-500">S</span>h
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-blue-300 mb-4 font-light">Full Stack Developer & Digital Hero</p>

          {/* Subtitle */}
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into powerful digital solutions with the strength of Superman and the precision of a
            master craftsman. Ready to save your next project!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Download className="mr-2 h-5 w-5" />
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce cursor-pointer" onClick={scrollToAbout}>
            <ArrowDown className="h-8 w-8 text-yellow-400 mx-auto" />
            <p className="text-sm text-gray-400 mt-2">Discover My Story</p>
          </div>
        </div>
      </div>
    </section>
  )
}
