"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Zap, Users, TrendingUp } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment processing, and advanced analytics. Built to handle high traffic and scale seamlessly.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
      features: ["Real-time inventory", "Payment integration", "Admin dashboard", "Mobile responsive"],
      metrics: {
        users: "50K+",
        performance: "99.9%",
        growth: "300%",
      },
      links: {
        live: "#",
        github: "#",
      },
      status: "Live",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description:
        "Machine learning dashboard that provides predictive analytics and insights for business intelligence. Features real-time data processing and interactive visualizations.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Vue.js", "Python", "TensorFlow", "D3.js", "Docker"],
      features: ["Predictive analytics", "Real-time data", "Interactive charts", "ML models"],
      metrics: {
        users: "25K+",
        performance: "98.5%",
        growth: "250%",
      },
      links: {
        live: "#",
        github: "#",
      },
      status: "Live",
    },
    {
      title: "Social Media Management Tool",
      description:
        "Comprehensive social media management platform with scheduling, analytics, and team collaboration features. Supports multiple social platforms and provides detailed insights.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Angular", "Express.js", "MongoDB", "Socket.io", "GCP"],
      features: ["Multi-platform support", "Team collaboration", "Analytics", "Scheduling"],
      metrics: {
        users: "15K+",
        performance: "99.2%",
        growth: "180%",
      },
      links: {
        live: "#",
        github: "#",
      },
      status: "Live",
    },
    {
      title: "Real-time Chat Application",
      description:
        "Scalable real-time messaging application with end-to-end encryption, file sharing, and group management. Built for high concurrency and security.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "WebRTC"],
      features: ["End-to-end encryption", "File sharing", "Group chats", "Video calls"],
      metrics: {
        users: "100K+",
        performance: "99.7%",
        growth: "400%",
      },
      links: {
        live: "#",
        github: "#",
      },
      status: "Live",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-blue-900/10 to-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
              Heroic Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Every superhero is known by their greatest victories. Here are the digital solutions I've crafted to save
              the day and transform businesses.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-black/20 border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-[1.02] overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-600 text-white">{project.status}</Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, i) => (
                        <Badge key={i} variant="outline" className="border-blue-500/30 text-blue-300 text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-black/20 rounded-lg">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="h-4 w-4 text-blue-400 mr-1" />
                        <span className="text-blue-400 font-bold text-sm">{project.metrics.users}</span>
                      </div>
                      <p className="text-xs text-gray-400">Users</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Zap className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-yellow-400 font-bold text-sm">{project.metrics.performance}</span>
                      </div>
                      <p className="text-xs text-gray-400">Uptime</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <TrendingUp className="h-4 w-4 text-green-400 mr-1" />
                        <span className="text-green-400 font-bold text-sm">{project.metrics.growth}</span>
                      </div>
                      <p className="text-xs text-gray-400">Growth</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-red-900/30 text-red-300 border-red-500/30 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 flex-1"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 flex-1 bg-transparent"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black px-8 py-3 bg-transparent"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
