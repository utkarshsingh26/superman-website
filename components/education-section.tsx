"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react"

export default function EducationSection() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Arizona State University",
      location: "Tempe, AZ",
      period: "2023 - 2025",
      gpa: "3.8/4.0",
      highlights: [
        "Teaching Assistant for CSE 578; Data Visualization",
        "Top 1% performer in CSE 512; Distributed Database Systems",
        "Published a research paper in HICSS (2026)",
        "Interned at Resilience, Inc",
      ],
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "SRM Institute of Science and Technology",
      location: "Chennai, India",
      period: "2017 - 2021",
      gpa: "3.7/4.0",
      highlights: [
        "Perfect 10/10 GPA in the final semester",
        "President of Computer Science Society",
        "Published a research paper in IEEE",
        "Interned at Cognizant & DRDO, India's premier research institute",
      ],
    },
  ]

  const certifications = [
    {
      name: "A Comprehensive Survey on Movie Recommendation Systems",
      issuer: "International Conference on Artificial Intelligence and Smart Systems (ICAIS)",
      date: "2021",
      level: "IEEE Explore",
    },
    {
      name: "PatientLens: AI-Enabled Interactive Avatars for Patient Report Summarization and Visualization",
      issuer: "Hawaii International Conference on System Sciences",
      date: "2026",
      level: "HICSS",
    },
  ]

  const skills = [
    { category: "Frontend", technologies: ["React", "Vue.js", "Angular", "TypeScript", "Next.js"] },
    { category: "Backend", technologies: ["Node.js", "Python", "Java", "Go", "PHP"] },
    { category: "Database", technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "DynamoDB"] },
    { category: "Cloud", technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"] },
    { category: "AI/ML", technologies: ["LLMs", "Google Cloud", "Azure", "Docker", "Kubernetes"] },
    { category: "Tools", technologies: ["Git", "Jenkins", "Terraform", "Webpack", "Jest"] },
  ]

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
              Training & Powers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Like Superman's training in the Fortress of Solitude, my education and continuous learning have shaped me
              into the developer I am today.
            </p>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <GraduationCap className="h-6 w-6 mr-3 text-blue-400" />
              Academic Foundation
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="bg-black/20 border-white/10 hover:border-blue-500/50 transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-1">
                        <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                        <p className="text-blue-400 font-semibold mb-2">{edu.institution}</p>
                        <div className="space-y-1 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {edu.period}
                          </div>
                          <p>{edu.location}</p>
                          <Badge variant="outline" className="border-yellow-500 text-yellow-400 mt-2">
                            GPA: {edu.gpa}
                          </Badge>
                        </div>
                      </div>
                      <div className="lg:col-span-2">
                        <h5 className="text-lg font-semibold text-white mb-4">Key Highlights</h5>
                        <ul className="space-y-2">
                          {edu.highlights.map((highlight, i) => (
                            <li key={i} className="text-gray-300 flex items-start">
                              <span className="text-red-400 mr-2 mt-1">▶</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Award className="h-6 w-6 mr-3 text-yellow-400" />
              Research Publications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="bg-black/20 border-white/10 hover:border-yellow-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-white mb-2">{cert.name}</h4>
                    <p className="text-yellow-400 font-semibold mb-2">{cert.issuer}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">{cert.date}</span>
                      <Badge variant="outline" className="border-blue-500 text-blue-400">
                        {cert.level}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <BookOpen className="h-6 w-6 mr-3 text-green-400" />
              Technical Arsenal
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <Card
                  key={index}
                  className="bg-black/20 border-white/10 hover:border-green-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-white mb-4">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-green-900/30 text-green-300 border-green-500/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
