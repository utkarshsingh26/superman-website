"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-400" />,
      title: "Email",
      value: "singh.utkarsh26@gmail.com",
      link: "mailto:singh.utkarsh26@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-green-400" />,
      title: "Phone",
      value: "+1 (555) 555-5555",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-6 w-6 text-red-400" />,
      title: "Location",
      value: "Tempe, AZ",
      link: "#",
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      name: "GitHub",
      url: "http://github.com/utkarshsingh26",
      color: "hover:text-gray-400",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/singhutkarsh98/",
      color: "hover:text-blue-400",
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      name: "Twitter",
      url: "https://twitter.com/utkarsh",
      color: "hover:text-blue-400",
    },
  ]

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
              Call for Help
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Every hero needs a signal. Whether you need to save your project or start a new mission, I'm here to help.
              Let's create something extraordinary together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-black/20 border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-black/30 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-black/30 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-black/30 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-black/30 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500 resize-none"
                      placeholder="Tell me about your project or how I can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="bg-black/20 border-white/10">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.link}
                        className="flex items-center space-x-4 p-4 rounded-lg bg-black/20 hover:bg-black/40 transition-colors group"
                      >
                        <div className="flex-shrink-0">{info.icon}</div>
                        <div>
                          <p className="text-sm text-gray-400">{info.title}</p>
                          <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-black/20 border-white/10">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Connect with Me</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-lg bg-black/20 hover:bg-black/40 transition-all duration-300 transform hover:scale-110 text-gray-400 ${social.color}`}
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/30 to-red-900/30 rounded-lg border border-white/10">
                    <h4 className="text-lg font-bold text-white mb-2">Ready to Start?</h4>
                    <p className="text-gray-300 text-sm mb-4">
                      I'm currently available for new projects and collaborations. Let's discuss how I can help bring
                      your vision to life!
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm font-medium">Available for work</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-800 transform rotate-45 rounded flex items-center justify-center">
                <span className="text-yellow-400 font-bold text-sm transform -rotate-45">S</span>
              </div>
              <span className="text-white font-bold text-lg">
                Utkar<span className="text-red-500">S</span>h
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Utkarsh. All rights reserved. Built with ❤️ and superpowers.
            </p>
          </div>
        </div>
      </footer>
    </section>
  )
}
