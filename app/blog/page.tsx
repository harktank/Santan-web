"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Calendar, User, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const blogPosts = [
    {
      title: "The Relevance of Gurukul Education in Modern Times",
      excerpt:
        "Exploring how traditional gurukul methods can enhance contemporary education systems and create well-rounded individuals.",
      author: "Dr. Priya Sharma",
      date: "February 10, 2024",
      category: "Education",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Celebrating Saraswati Puja: Honoring the Goddess of Knowledge",
      excerpt:
        "Understanding the significance of Saraswati Puja and its role in promoting learning and wisdom in our educational institutions.",
      author: "Pandit Rajesh Kumar",
      date: "February 8, 2024",
      category: "Culture",
      readTime: "4 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Yoga and Meditation: Ancient Practices for Modern Wellness",
      excerpt:
        "Discover how incorporating yoga and meditation in daily routine can improve mental health and academic performance.",
      author: "Swami Ananda",
      date: "February 5, 2024",
      category: "Wellness",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Sanskrit Literature: A Treasure Trove of Wisdom",
      excerpt:
        "Exploring the rich heritage of Sanskrit literature and its continued relevance in understanding human nature and philosophy.",
      author: "Prof. Meera Devi",
      date: "February 2, 2024",
      category: "Literature",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Building Character Through Traditional Values",
      excerpt:
        "How ancient Indian values and ethics can shape the character of young minds in today's challenging world.",
      author: "Dr. Vikram Singh",
      date: "January 28, 2024",
      category: "Values",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Community Service: The Path of Seva in Education",
      excerpt:
        "Understanding the importance of selfless service and how it forms an integral part of holistic education.",
      author: "Sister Kamala",
      date: "January 25, 2024",
      category: "Service",
      readTime: "4 min read",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Education":
        return "bg-blue-100 text-blue-800"
      case "Culture":
        return "bg-orange-100 text-orange-800"
      case "Wellness":
        return "bg-green-100 text-green-800"
      case "Literature":
        return "bg-purple-100 text-purple-800"
      case "Values":
        return "bg-red-100 text-red-800"
      case "Service":
        return "bg-pink-100 text-pink-800"
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
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Blog</span>
            </h1>
            <p className="text-xl text-orange-800 max-w-4xl mx-auto leading-relaxed">
              Insights, wisdom, and stories from our journey of preserving ancient knowledge while embracing modern
              education.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-orange-900 mb-8 text-center">Featured Article</h2>
            <Card className="overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Featured Article"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className={getCategoryColor("Education")}>Education</Badge>
                    <span className="text-sm text-orange-600">Featured</span>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-900 mb-4">
                    The Relevance of Gurukul Education in Modern Times
                  </h3>
                  <p className="text-orange-700 mb-6 leading-relaxed">
                    Exploring how traditional gurukul methods can enhance contemporary education systems and create
                    well-rounded individuals who are both academically excellent and morally grounded.
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-orange-600">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>Dr. Priya Sharma</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>February 10, 2024</span>
                      </div>
                    </div>
                    <span className="text-sm text-orange-600">5 min read</span>
                  </div>
                  <Link href="/blog/the-relevance-of-gurukul-education-in-modern-times">
                    <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-orange-900 mb-12 text-center">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card
                key={index}
                className={`transform transition-all duration-500 hover:scale-105 hover:shadow-xl delay-${index * 100}`}
              >
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getCategoryColor(post.category)}>{post.category}</Badge>
                    <span className="text-xs text-orange-600">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg text-orange-900 line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-700 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-orange-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/[^a-z0-9-]/g, "")}`}
                  >
                    <Button variant="ghost" className="w-full text-orange-600 hover:text-orange-800 hover:bg-orange-50">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-r from-orange-100 to-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-orange-900 mb-6">Stay Informed</h2>
          <p className="text-xl text-orange-800 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter to receive the latest articles, insights, and updates from our educational
            community.
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
