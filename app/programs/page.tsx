"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Users, Clock, MapPin } from "lucide-react"

export default function ProgramsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const programs = [
    {
      id: 1,
      title: "Early Childhood Program",
      category: "sishushala",
      age: "2-5 years",
      duration: "Full Day",
      description: "Nurturing young minds with traditional values and modern learning techniques.",
      features: ["Play-based learning", "Cultural storytelling", "Basic Sanskrit", "Art & craft"],
      price: "₹15,000/month",
      location: "Sishushala Campus",
    },
    {
      id: 2,
      title: "Residential Gurukul Program",
      category: "gurukulam",
      age: "8-18 years",
      duration: "Academic Year",
      description: "Traditional gurukul education with modern academic curriculum.",
      features: ["Residential learning", "Character development", "Vedic studies", "Life skills"],
      price: "₹2,50,000/year",
      location: "Gurukulam Campus",
    },
    {
      id: 3,
      title: "Bachelor of Vedic Studies",
      category: "viswavidyalaya",
      age: "18+ years",
      duration: "3 years",
      description: "Comprehensive study of Vedic literature and philosophy.",
      features: ["Sanskrit mastery", "Philosophy", "Research projects", "Internships"],
      price: "₹1,50,000/year",
      location: "University Campus",
    },
    {
      id: 4,
      title: "Ayurveda Medicine Program",
      category: "viswavidyalaya",
      age: "18+ years",
      duration: "5.5 years",
      description: "Professional degree in traditional Ayurvedic medicine.",
      features: ["Clinical training", "Herbal medicine", "Panchakarma", "Modern integration"],
      price: "₹3,00,000/year",
      location: "Medical Campus",
    },
    {
      id: 5,
      title: "Yoga Teacher Training",
      category: "viswavidyalaya",
      age: "18+ years",
      duration: "200/500 hours",
      description: "Certified yoga instructor training program.",
      features: ["Asana practice", "Philosophy", "Teaching methodology", "Certification"],
      price: "₹75,000/course",
      location: "Yoga Center",
    },
    {
      id: 6,
      title: "Weekend Cultural Classes",
      category: "community",
      age: "All ages",
      duration: "Weekends",
      description: "Cultural education for working professionals and families.",
      features: ["Sanskrit basics", "Classical music", "Dance", "Spiritual practices"],
      price: "₹5,000/month",
      location: "Community Center",
    },
  ]

  const categories = [
    { id: "all", name: "All Programs" },
    { id: "sishushala", name: "Sishushala" },
    { id: "gurukulam", name: "Gurukulam" },
    { id: "viswavidyalaya", name: "Viswavidyalaya" },
    { id: "community", name: "Community" },
  ]

  const filteredPrograms =
    selectedCategory === "all" ? programs : programs.filter((program) => program.category === selectedCategory)

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
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Programs
              </span>
            </h1>
            <p className="text-xl text-orange-800 max-w-4xl mx-auto leading-relaxed">
              Comprehensive educational programs designed to nurture holistic development from early childhood to higher
              education.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                    : "border-orange-500 text-orange-700 hover:bg-orange-50"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, index) => (
              <Card
                key={program.id}
                className={`transform transition-all duration-500 hover:scale-105 hover:shadow-xl delay-${index * 100}`}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-orange-900">{program.title}</CardTitle>
                    <Badge className="bg-orange-100 text-orange-800">{program.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-700 mb-4 leading-relaxed">{program.description}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-3 text-orange-800">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">Age: {program.age}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-orange-800">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">Duration: {program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-orange-800">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{program.location}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-orange-900 mb-2">Program Features:</h4>
                    <ul className="space-y-1">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          <span className="text-sm text-orange-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold text-orange-900">{program.price}</span>
                  </div>

                  <div className="space-y-2">
                    <Link href={`/apply?program=${program.id}`}>
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                        Apply Now
                      </Button>
                    </Link>
                    <Link href={`/programs/${program.id}`}>
                      <Button variant="outline" className="w-full border-orange-500 text-orange-700 hover:bg-orange-50">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
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
                  <Link href="/sishushala" className="hover:text-white transition-colors">
                    Sishushala
                  </Link>
                </li>
                <li>
                  <Link href="/gurukulam" className="hover:text-white transition-colors">
                    Gurukulam
                  </Link>
                </li>
                <li>
                  <Link href="/viswavidyalaya" className="hover:text-white transition-colors">
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
