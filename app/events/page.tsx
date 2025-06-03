"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Calendar, MapPin, Clock, Users } from "lucide-react"

export default function EventsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const events = [
    {
      title: "Saraswati Puja Celebration",
      date: "February 14, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Main Campus",
      category: "Cultural",
      description:
        "Annual celebration honoring Goddess Saraswati with traditional rituals, cultural performances, and educational activities.",
      attendees: "500+",
      status: "upcoming",
    },
    {
      title: "Gurukul Education Seminar",
      date: "March 2, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Conference Hall",
      category: "Educational",
      description: "Interactive seminar on traditional gurukul education methods and their relevance in modern times.",
      attendees: "150",
      status: "upcoming",
    },
    {
      title: "Yoga & Meditation Workshop",
      date: "March 15, 2024",
      time: "6:00 AM - 8:00 AM",
      location: "Yoga Hall",
      category: "Wellness",
      description: "Weekly yoga and meditation sessions for students, faculty, and community members.",
      attendees: "75",
      status: "recurring",
    },
    {
      title: "Sanskrit Literature Festival",
      date: "April 5-7, 2024",
      time: "All Day",
      location: "Cultural Center",
      category: "Cultural",
      description:
        "Three-day festival celebrating Sanskrit literature with recitations, discussions, and performances.",
      attendees: "300+",
      status: "upcoming",
    },
    {
      title: "Annual Sports Day",
      date: "January 20, 2024",
      time: "8:00 AM - 6:00 PM",
      location: "Sports Ground",
      category: "Sports",
      description: "Traditional and modern sports competitions promoting physical fitness and team spirit.",
      attendees: "400+",
      status: "completed",
    },
    {
      title: "Community Service Drive",
      date: "January 15, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "Local Villages",
      category: "Service",
      description: "Monthly community service activities including education support and health awareness programs.",
      attendees: "100",
      status: "completed",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-green-100 text-green-800"
      case "recurring":
        return "bg-blue-100 text-blue-800"
      case "completed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-orange-100 text-orange-800"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Cultural":
        return "bg-orange-100 text-orange-800"
      case "Educational":
        return "bg-blue-100 text-blue-800"
      case "Wellness":
        return "bg-green-100 text-green-800"
      case "Sports":
        return "bg-red-100 text-red-800"
      case "Service":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
     <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300 w-full">
        <div className="flex flex-row items-center h-16 w-full">
          {/* Logo - absolutely left */}
          <div className="flex items-center flex-shrink-0 ml-0 pl-0 h-16 px-4">
            <Link href="/" className="flex items-center space-x-3 group ml-0 pl-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                <img
                  src="/images/navbar-logo.jpeg"
                  alt="Sanatan Shankhanad Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-xl md:text-2xl font-bold text-orange-800 tracking-wide transform transition-all duration-300 group-hover:text-orange-600"
                style={{
                  fontFamily: "serif",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                  letterSpacing: "0.5px",
                }}
              >
                सनातन शंखनाद
              </span>
            </Link>
          </div>
          {/* Rest of navbar in container */}
          <nav className="flex-1 max-w-7xl mx-auto flex flex-row items-center justify-between h-16 px-0 sm:px-0 lg:px-0">
            <div className="hidden md:flex flex-row items-center space-x-8 flex-1 justify-center">
              <Link href="/" className="text-orange-700 hover:text-orange-600 transition-colors">Sanatan Discoveries</Link>
              <Link href="/about" className="text-orange-800 hover:text-orange-600 transition-colors font-medium">About</Link>
              <Link href="/" className="text-orange-700 hover:text-orange-600 transition-colors">Sanatan Sishushala</Link>
              <Link href="/" className="text-orange-700 hover:text-orange-600 transition-colors">Sanatan Gurukulam</Link>
              <Link href="/" className="text-orange-700 hover:text-orange-600 transition-colors">Sanatan Viswavidyalaya</Link>
              <Link href="/events" className="text-orange-700 hover:text-orange-600 transition-colors">Events</Link>
              <Link href="/blog" className="text-orange-700 hover:text-orange-600 transition-colors">Blog</Link>
              <Link href="/contact" className="text-orange-700 hover:text-orange-600 transition-colors">Contact</Link>
            </div>
            {/* Mobile Nav placeholder */}
            <div className="md:hidden flex items-center">
              {/* <MobileNav /> */}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-orange-900 mb-6">
              Events &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                Activities
              </span>
            </h1>
            <p className="text-xl text-orange-800 max-w-4xl mx-auto leading-relaxed">
              Join us in celebrating our rich cultural heritage through festivals, educational seminars, wellness
              programs, and community service activities.
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <Card
                key={index}
                className={`transform transition-all duration-500 hover:scale-105 hover:shadow-xl delay-${index * 100}`}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-orange-900">{event.title}</CardTitle>
                    <div className="flex gap-2">
                      <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                      <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-700 mb-4 leading-relaxed">{event.description}</p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-orange-800">
                      <Calendar className="w-5 h-5" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-orange-800">
                      <Clock className="w-5 h-5" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-orange-800">
                      <MapPin className="w-5 h-5" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-orange-800">
                      <Users className="w-5 h-5" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                  {event.status === "upcoming" && (
                    <Link href={`/events/register?event=${index}`}>
                      <Button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                        Register Now
                      </Button>
                    </Link>
                  )}
                  {event.status === "recurring" && (
                    <Button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
                      Join Regular Sessions
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-100 to-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-orange-900 mb-6">Stay Updated</h2>
          <p className="text-xl text-orange-800 mb-8 max-w-3xl mx-auto">
            Don't miss out on our upcoming events and activities. Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8">
              Subscribe
            </Button>
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
