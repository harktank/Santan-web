"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, BookOpen, ExternalLink, Download } from "lucide-react"

export default function ResearchPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const researchCenters = [
    {
      name: "Center for Vedic Sciences",
      description: "Interdisciplinary research in ancient mathematics, astronomy, and natural sciences",
      director: "Dr. Rajesh Sharma",
      established: "2015",
      projects: 12,
      publications: 45,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Institute of Traditional Medicine",
      description: "Clinical research in Ayurveda and integrative healing approaches",
      director: "Dr. Priya Devi",
      established: "2018",
      projects: 8,
      publications: 32,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Consciousness Studies Lab",
      description: "Scientific investigation of meditation and consciousness states",
      director: "Dr. Ananda Swami",
      established: "2020",
      projects: 6,
      publications: 18,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Sustainable Living Research",
      description: "Developing eco-friendly solutions based on traditional practices",
      director: "Dr. Meera Singh",
      established: "2019",
      projects: 10,
      publications: 28,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const currentProjects = [
    {
      title: "Ancient Mathematical Algorithms in Modern Computing",
      lead: "Dr. Rajesh Sharma",
      duration: "2023-2025",
      funding: "₹25 Lakhs",
      status: "Ongoing",
      description: "Exploring the application of Vedic mathematical principles in quantum computing algorithms.",
    },
    {
      title: "Ayurvedic Treatment for Chronic Diseases",
      lead: "Dr. Priya Devi",
      duration: "2024-2026",
      funding: "₹40 Lakhs",
      status: "Ongoing",
      description: "Clinical trials on traditional Ayurvedic treatments for diabetes and hypertension.",
    },
    {
      title: "Meditation and Neuroplasticity",
      lead: "Dr. Ananda Swami",
      duration: "2023-2024",
      funding: "₹15 Lakhs",
      status: "Final Phase",
      description: "Studying the effects of traditional meditation practices on brain structure and function.",
    },
    {
      title: "Traditional Agriculture and Climate Change",
      lead: "Dr. Meera Singh",
      duration: "2024-2027",
      funding: "₹35 Lakhs",
      status: "Starting",
      description: "Investigating ancient farming techniques for sustainable agriculture in changing climate.",
    },
  ]

  const publications = [
    {
      title: "Vedic Mathematics in Quantum Computing: A New Paradigm",
      authors: "Sharma, R., Kumar, A., Patel, S.",
      journal: "International Journal of Quantum Information",
      year: "2024",
      type: "Research Paper",
    },
    {
      title: "Efficacy of Panchakarma in Metabolic Disorders: A Clinical Study",
      authors: "Devi, P., Singh, M., Gupta, R.",
      journal: "Journal of Ayurveda and Integrative Medicine",
      year: "2024",
      type: "Clinical Study",
    },
    {
      title: "Mindfulness Meditation and Cognitive Enhancement: An fMRI Study",
      authors: "Swami, A., Reddy, K., Joshi, V.",
      journal: "Consciousness and Cognition",
      year: "2023",
      type: "Research Paper",
    },
    {
      title: "Traditional Water Harvesting Systems: Lessons for Modern Sustainability",
      authors: "Singh, M., Verma, A., Chandra, S.",
      journal: "Environmental Science & Policy",
      year: "2023",
      type: "Review Article",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-md">
                <img
                  src="/images/navbar-logo.jpeg"
                  alt="Sanatan Shankhanad Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-2xl font-bold text-orange-800 tracking-wide"
                style={{
                  fontFamily: "serif",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                  letterSpacing: "0.5px",
                }}
              >
                सनातन शंखनाद
              </span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-orange-700 hover:text-orange-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-orange-700 hover:text-orange-600 transition-colors">
                About
              </Link>
              <span className="text-orange-700 cursor-default">Sishushala</span>
              <span className="text-orange-700 cursor-default">Gurukulam</span>
              <span className="text-orange-700 cursor-default">Viswavidyalaya</span>
              <Link href="/events" className="text-orange-700 hover:text-orange-600 transition-colors">
                Events
              </Link>
              <Link href="/blog" className="text-orange-700 hover:text-orange-600 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-orange-700 hover:text-orange-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-orange-900 mb-6">
              Research &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Innovation
              </span>
            </h1>
            <p className="text-xl text-orange-800 max-w-4xl mx-auto leading-relaxed">
              Bridging ancient wisdom with modern science through cutting-edge research and innovative applications.
            </p>
          </div>
        </div>
      </section>

      {/* Research Centers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-900 mb-4">Research Centers</h2>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto">
              Our specialized research centers focus on different aspects of traditional knowledge and its modern
              applications.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {researchCenters.map((center, index) => (
              <Card
                key={index}
                className={`transform transition-all duration-500 hover:scale-105 hover:shadow-xl delay-${index * 100}`}
              >
                <div className="relative h-48">
                  <Image
                    src={center.image || "/placeholder.svg"}
                    alt={center.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-orange-900">{center.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-700 mb-4 leading-relaxed">{center.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-orange-600">Director:</span>
                      <span className="text-orange-800 font-medium">{center.director}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-orange-600">Established:</span>
                      <span className="text-orange-800 font-medium">{center.established}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-orange-600">Active Projects:</span>
                      <span className="text-orange-800 font-medium">{center.projects}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-orange-600">Publications:</span>
                      <span className="text-orange-800 font-medium">{center.publications}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full mt-4 text-orange-600 hover:text-orange-800 hover:bg-orange-50"
                  >
                    Learn More <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-900 mb-4">Current Research Projects</h2>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto">
              Ongoing research initiatives that are pushing the boundaries of knowledge.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => (
              <Card
                key={index}
                className={`transform transition-all duration-500 hover:scale-105 delay-${index * 100}`}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg text-orange-900">{project.title}</CardTitle>
                    <Badge
                      className={
                        project.status === "Ongoing"
                          ? "bg-green-100 text-green-800"
                          : project.status === "Final Phase"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-700 mb-4 leading-relaxed">{project.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-orange-600">Principal Investigator:</span>
                      <span className="text-orange-800 font-medium">{project.lead}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-orange-600">Duration:</span>
                      <span className="text-orange-800 font-medium">{project.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-orange-600">Funding:</span>
                      <span className="text-orange-800 font-medium">{project.funding}</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-4 border-orange-500 text-orange-700 hover:bg-orange-50"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-900 mb-4">Recent Publications</h2>
            <p className="text-xl text-orange-700 max-w-3xl mx-auto">
              Our research findings published in peer-reviewed journals and conferences.
            </p>
          </div>
          <div className="space-y-6">
            {publications.map((publication, index) => (
              <Card
                key={index}
                className={`transform transition-all duration-500 hover:shadow-lg delay-${index * 100}`}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-orange-900 flex-1">{publication.title}</h3>
                    <div className="flex items-center space-x-2 ml-4">
                      <Badge className="bg-orange-100 text-orange-800">{publication.type}</Badge>
                      <span className="text-sm text-orange-600">{publication.year}</span>
                    </div>
                  </div>
                  <p className="text-orange-700 mb-2">Authors: {publication.authors}</p>
                  <p className="text-orange-600 text-sm mb-4">Published in: {publication.journal}</p>
                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-orange-500 text-orange-700 hover:bg-orange-50"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Online
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-orange-500 text-orange-700 hover:bg-orange-50"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Opportunities */}
      <section className="py-20 bg-gradient-to-r from-orange-100 to-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-orange-900 mb-6">Join Our Research Community</h2>
              <p className="text-lg text-orange-800 mb-8 leading-relaxed">
                We welcome researchers, scholars, and students who are passionate about exploring the intersection of
                traditional wisdom and modern science.
              </p>
              <div className="space-y-4">
                {[
                  "PhD and Post-doctoral positions",
                  "Research internships for students",
                  "Collaborative research opportunities",
                  "Visiting scholar programs",
                  "Industry partnerships",
                ].map((opportunity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-orange-800">{opportunity}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-red-300 rounded-3xl transform -rotate-6 opacity-30"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-900 mb-4">Apply for Research Position</h3>
                  <p className="text-orange-700 mb-6">
                    Join our team of dedicated researchers and contribute to groundbreaking discoveries.
                  </p>
                  <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Sanatan Heritage</span>
              </div>
              <p className="text-orange-200">Preserving tradition, embracing progress</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Education</h4>
              <ul className="space-y-2 text-orange-200">
                <li>
                  <Link href="#sishushala" className="hover:text-white transition-colors">
                    Sishushala
                  </Link>
                </li>
                <li>
                  <Link href="#gurukulam" className="hover:text-white transition-colors">
                    Gurukulam
                  </Link>
                </li>
                <li>
                  <Link href="#viswavidyalaya" className="hover:text-white transition-colors">
                    Viswavidyalaya
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-orange-200">
                <li>
                  <Link href="/events" className="hover:text-white transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-orange-200">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>info@sanatanheritage.org</li>
                <li>+91 98765 43210</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-orange-800 mt-8 pt-8 text-center text-orange-200">
            <p>&copy; 2024 Sanatan Heritage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
