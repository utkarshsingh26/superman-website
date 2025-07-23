"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Award } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer - Cloud Infrastructure Research",
      company: "Arizona State University",
      location: "Tempe, AZ",
      period: "2024 - Present",
      type: "Full-time",
      achievements: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced application load time by 60% through optimization",
        "Mentored 5 junior developers and established coding standards",
        "Implemented CI/CD pipeline reducing deployment time by 80%",
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
    },
    {
      title: "Software Engineer Intern",
      company: "Resilience, Inc",
      location: "Tempe, AZ",
      period: "2024 - 2024",
      type: "Full-time",
      achievements: [
        "Built and maintained 15+ client web applications",
        "Integrated third-party APIs and payment systems",
        "Collaborated with design team to implement responsive UIs",
        "Achieved 99.9% uptime across all production applications",
      ],
      technologies: ["Vue.js", "Python", "Django", "MySQL", "Redis"],
    },
    {
      title: "Software Engineer",
      company: "Jio Platforms Ltd.",
      location: "Mumbai, India",
      period: "2021 - 2023",
      type: "Full-time",
      achievements: [
        "Developed responsive web applications from scratch",
        "Implemented modern JavaScript frameworks and libraries",
        "Optimized applications for mobile and desktop platforms",
        "Collaborated with UX/UI designers for pixel-perfect implementations",
      ],
      technologies: ["JavaScript", "React", "SASS", "Webpack", "Git"],
    },
    {
      title: "Application Developer Intern",
      company: "Cognizant",
      location: "Pune, India",
      period: "2021 - 2021",
      type: "Full-time",
      achievements: [
        "Developed responsive web applications from scratch",
        "Implemented modern JavaScript frameworks and libraries",
        "Optimized applications for mobile and desktop platforms",
        "Collaborated with UX/UI designers for pixel-perfect implementations",
      ],
      technologies: ["JavaScript", "React", "SASS", "Webpack", "Git"],
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-transparent to-blue-900/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
              Hero's Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Every superhero's strength comes from their experiences. Here's how I've honed my powers through
              real-world challenges and victories.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-black/20 border-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Job Info */}
                    <div className="lg:col-span-1">
                      <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-blue-400 font-semibold mb-2">{exp.company}</p>

                      <div className="space-y-2 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {exp.location}
                        </div>
                        <Badge variant="outline" className="border-yellow-500 text-yellow-400">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="lg:col-span-2">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <Award className="h-5 w-5 mr-2 text-yellow-400" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-300 flex items-start">
                            <span className="text-red-400 mr-2 mt-1">▶</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div>
                        <h5 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="bg-blue-900/30 text-blue-300 border-blue-500/30"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
