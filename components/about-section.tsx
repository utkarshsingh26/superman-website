"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Zap, Shield, Target } from "lucide-react"

export default function AboutSection() {
  const superpowers = [
    {
      icon: <Code className="h-8 w-8 text-blue-400" />,
      title: "Full Stack Mastery",
      description:
        "Like Superman's diverse abilities, I master both frontend and backend technologies to create complete solutions.",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: "Systems Faster Than Speeding Bullets",
      description: "Delivering projects at super speed without compromising on quality or attention to detail.",
    },
    {
      icon: <Shield className="h-8 w-8 text-red-400" />,
      title: "Bulletproof Code",
      description: "Writing secure, scalable, and maintainable code that stands the test of time and traffic.",
    },
    {
      icon: <Target className="h-8 w-8 text-green-400" />,
      title: "Mission-Focused",
      description: "Every project is a mission to save the day, delivering exactly what clients need to succeed.",
    },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
              About the Hero
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Every hero has an origin story. Mine began with a passion for technology and a mission to create digital
              solutions that make a difference.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Story Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">The Journey Begins</h3>
              <p className="text-gray-300 leading-relaxed">
                Like Clark Kent discovering his powers, my journey into development started with curiosity and grew into
                a superpower. I've spent years honing my abilities across the full technology stack, from crafting
                pixel-perfect user interfaces to architecting robust backend systems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My mission is simple: use technology as a force for good. Whether it's building scalable web
                applications, optimizing performance, or solving complex problems, I approach every project with the
                dedication of a hero protecting their city.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me staying updated with the latest technologies, contributing to open
                source projects, or mentoring aspiring developers. Because every hero knows that with great power comes
                great responsibility.
              </p>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-900/30 to-red-900/30 rounded-2xl flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <div className="w-80 h-80 mx-auto mb-4 relative">
                    <img src="/Summer_of_Superman.webp" alt="Superman Photo" className="w-full h-full object-contain" />
                  </div>
                  <p className="text-gray-400">Professional Photo Coming Soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Superpowers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {superpowers.map((power, index) => (
              <Card
                key={index}
                className="bg-black/20 border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{power.icon}</div>
                  <h4 className="text-lg font-bold text-white mb-3">{power.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{power.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
