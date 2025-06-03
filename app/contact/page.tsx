"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Sparkles, MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-orange-900 mb-6">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Us</span>
            </h1>
            <p className="text-xl text-orange-800 max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you. Get in touch with us for admissions, inquiries, or to learn more about our
              programs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-900">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="mt-1"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-orange-900">Address</h3>
                      <p className="text-orange-700">
                        SANATAN SHIKSHA & STEM EDUCATION
                        <br />
                        SCIENTIFIC RESEARCH COUNCIL
                        <br />
                        1392, Jail road, Nehru Nagar
                        <br />
                        Rae Bareli 229001
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-orange-900">Phone</h3>
                      <p className="text-orange-700">+91 98713 36678</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-orange-900">Email</h3>
                      <p className="text-orange-700">officialsanatanshankhnaad@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-900 mb-4">Visit Our Campus</h2>
            <p className="text-orange-700">Experience our beautiful campus and meet our dedicated faculty</p>
          </div>
          <div className="bg-orange-100 rounded-xl p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-orange-900 mb-2">Interactive Map Coming Soon</h3>
            <p className="text-orange-700">We're working on an interactive map to help you find us easily</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-900 text-white py-10 md:py-12 relative overflow-hidden mt-auto w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-800/20 to-red-800/20 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="transform transition-all duration-500 hover:scale-105 col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3 mb-4 group">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12">
                  <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
                <span className="text-lg md:text-xl font-bold group-hover:text-orange-200 transition-colors duration-300">
                  Sanatan Shankhnaad
                </span>
              </div>
              <p className="text-orange-200 hover:text-white transition-colors duration-300 text-sm md:text-base">
                Preserving tradition, embracing progress
              </p>
            </div>
            <div className="transform transition-all duration-500 delay-100 hover:scale-105">
              <h4 className="font-bold mb-3 md:mb-4 text-orange-100">Education</h4>
              <ul className="space-y-1 md:space-y-2 text-orange-200 text-sm md:text-base">
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Sishushala
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Gurukulam
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Viswavidyalaya
                  </Link>
                </li>
              </ul>
            </div>
            <div className="transform transition-all duration-500 delay-200 hover:scale-105">
              <h4 className="font-bold mb-3 md:mb-4 text-orange-100">Community</h4>
              <ul className="space-y-1 md:space-y-2 text-orange-200 text-sm md:text-base">
                <li>
                  <Link
                    href="/events"
                    className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="transform transition-all duration-500 delay-300 hover:scale-105">
              <div>
                <h4 className="font-bold mb-3 md:mb-4 text-orange-100">Connect</h4>
                <ul className="space-y-1 md:space-y-2 text-orange-200 text-sm md:text-base">
                  
                  <li className="hover:text-white transition-colors duration-300">
                    officialsanatanshankhnaad@gmail.com
                  </li>
                  <li className="hover:text-white transition-colors duration-300">+91 98713 36678</li>
                  <li className="text-xs mt-2 text-orange-300">
                    SANATAN SHIKSHA & STEM EDUCATION
                    <br />
                    SCIENTIFIC RESEARCH COUNCIL
                  </li>
                  <li className="text-xs text-orange-300">
                    1392, Jail road, Nehru Nagar,
                    <br />
                    Rae Bareli 229001
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-orange-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-orange-200">
            <p className="hover:text-white transition-colors duration-300 text-sm">
              &copy; 2024 AITIK SOFTWARE PVT. LTD. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
