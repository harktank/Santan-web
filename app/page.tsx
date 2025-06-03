"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, BookOpen, Users, Calendar, Sparkles, ArrowRight } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
      {/* Navigation */}
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
              <Link href="/" className="text-orange-800 hover:text-orange-600 transition-all duration-300 font-medium transform hover:scale-105">Sanatan Discoveries</Link>
              <Link href="/about" className="text-orange-700 hover:text-orange-600 transition-all duration-300 transform hover:scale-105">About</Link>
              <Link href="#" className="text-orange-700 hover:text-orange-600 transition-all duration-300 transform hover:scale-105">Sanatan Sishushala</Link>
              <Link href="#" className="text-orange-700 hover:text-orange-600 transition-all duration-300 transform hover:scale-105">Sanatan Gurukulam</Link>
              <Link href="#" className="text-orange-700 hover:text-orange-600 transition-all duration-300 transform hover:scale-105">Sanatan Viswavidyalaya</Link>
              <Link href="/events" className="text-orange-700 hover:text-orange-600 transition-all duration-300 transform hover:scale-105">Events</Link>
              <Link href="/blog" className="text-orange-700 hover:text-orange-600 transition-all duration-300 transform hover:scale-105">Blog</Link>
              <Link href="/contact" className="text-orange-700 hover:text-orange-600 transition-all duration-300 transform hover:scale-105">Contact</Link>
            </div>
            <div className="md:hidden flex items-center">
            <MobileNav />
          </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
          style={{
            backgroundImage: "url('/images/navbar-logo.jpeg')",
            transform: `translateY(${scrollY * 0.3}px)`,
            backgroundPosition: "center 30%",
          }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 py-16 md:py-32">
          {/* You can add a headline or call-to-action here if desired */}
        </div>
      </section>

      {/* About Section */}
      <section className="flex items-center justify-center min-h-screen py-12 md:py-20 bg-white/70 backdrop-blur-sm w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div
            className={`text-center mb-8 md:mb-12 transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-900 mb-4 md:mb-6 animate-fade-in-up">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 animate-gradient">
                सनातन शंखनाद
              </span>
            </h2>
            <p className="text-lg md:text-xl text-orange-800 max-w-4xl mx-auto leading-relaxed">
              We are dedicated to preserving and promoting the eternal values of Sanatan Dharma through comprehensive
              education, cultural activities, and spiritual development programs.
            </p>
          </div>

          {/* YouTube Video - Improved for mobile and preview */}
          <div
            className={`w-full mx-auto transform transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"}`}
          >
            <div className="relative w-full" style={{ paddingBottom: '56.25%', minHeight: '400px', width: '100vw', maxWidth: '100%' }}>
              {!showVideo ? (
                <div className="absolute inset-0 flex items-center justify-center cursor-pointer group" onClick={() => setShowVideo(true)}>
                  <img
                    src="https://img.youtube.com/vi/D4mlEt48zC8/hqdefault.jpg"
                    alt="About Sanatan Shankhnad Preview"
                    className="w-full h-full object-cover rounded-xl shadow-2xl group-hover:brightness-90 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-32 h-32 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 84 84">
                      <circle cx="42" cy="42" r="42" fill="rgba(0,0,0,0.5)" />
                      <polygon points="34,28 62,42 34,56" fill="white" />
                    </svg>
                  </div>
                </div>
              ) : (
              <iframe
                  className="absolute inset-0 w-full h-full rounded-xl shadow-2xl min-h-[400px]"
                  src="https://www.youtube.com/embed/D4mlEt48zC8?si=QPsvdTyTQFVPCCsg&autoplay=1"
                title="About Sanatan Shankhnad"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              )}
            </div>
            {/* Know More and Watch Video Buttons */}
            <div className="mt-6 md:mt-8 text-center flex flex-col items-center gap-4">
              <Link href="/about">
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-5 md:px-8 md:py-6 text-base md:text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg group w-full md:w-auto">
                  Know More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <a
                href="https://youtu.be/D4mlEt48zC8?si=NSHuf1Zt5fSL09Wk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="outline" className="text-orange-700 border-orange-500 hover:bg-orange-50 w-full md:w-auto">
                  Watch About Video on YouTube
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

     

      {/* What We Offer Section */}
      <section className="flex items-center justify-center min-h-screen py-12 md:py-20 bg-white/70 backdrop-blur-sm w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">What We Offer</h2>
            <p className="text-lg md:text-xl text-orange-700 max-w-3xl mx-auto">
              Comprehensive educational programs that bridge ancient wisdom with modern innovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
            <Card className="transform transition-all duration-700 hover:scale-105 hover:shadow-xl group">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-orange-400 to-red-400 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-orange-900 mb-4">Sanatan Shishu-Shala</h3>
                <p className="text-orange-700 leading-relaxed">
                  A unique early learning environment that combines Vedic wisdom with foundational STEM education.
                </p>
              </CardContent>
            </Card>
            <Card className="transform transition-all duration-700 hover:scale-105 hover:shadow-xl group">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-red-400 to-pink-400 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-orange-900 mb-4">Sanatan Gurukulam</h3>
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full mb-3">
                  [Future]
                </span>
                <p className="text-orange-700 leading-relaxed">
                  A revival of the ancient ashram-based learning model, adapted for the needs of the 21st century.
                </p>
              </CardContent>
            </Card>
            <Card className="transform transition-all duration-700 hover:scale-105 hover:shadow-xl group">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-orange-900 mb-4">Sanatan Vishwavidyalaya</h3>
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full mb-3">
                  [Future]
                </span>
                <p className="text-orange-700 leading-relaxed">
                  A future-forward university concept that fosters critical thinking, spiritual growth, and global
                  leadership.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Why Sanatan Shankhnaad */}
          <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-3xl p-8 md:p-12 mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-orange-900 mb-6 text-center">Why Sanatan Shankhnaad?</h3>
            <p className="text-lg text-orange-800 leading-relaxed text-center max-w-4xl mx-auto">
              In a world that often separates tradition from progress, Sanatan Shankhnaad stands as a bridge—uniting the
              best of both worlds. We believe that by honoring our roots and embracing innovation, we can cultivate
              well-rounded individuals and resilient communities.
            </p>
          </div>

          {/* Join the Movement */}
          
        </div>
      </section>

      {/* Importance Section */}
      <section className="flex items-center justify-center min-h-screen py-12 md:py-20 bg-gradient-to-r from-white/50 to-orange-50/50 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">
              The Importance of Sanatan Shiksha in Today's World
            </h2>
            <p className="text-lg md:text-xl text-orange-700 max-w-4xl mx-auto leading-relaxed">
              In a rapidly evolving world driven by technology, competition, and material advancement, the ancient
              wisdom of Sanatan Shiksha—India's eternal education system—holds unparalleled relevance.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <p className="text-lg text-orange-800 mb-6 leading-relaxed">
                Rooted in holistic development, ethical living, and spiritual awareness, Sanatan Shiksha offers a
                timeless blueprint for cultivating not just intellectual excellence, but also inner harmony and social
                responsibility.
              </p>
              <p className="text-lg text-orange-800 leading-relaxed">
                Sanatan Shiksha is not a relic of the past—it is a living, breathing philosophy of education that the
                modern world desperately needs. By reviving its essence and aligning it with today's educational needs,
                we can create a future that is intelligent, compassionate, sustainable, and spiritually awakened.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold text-orange-900 mb-4">
                How Sanatan Shiksha & STEM Education Benefit Students
              </h3>
              <p className="text-orange-700 leading-relaxed">
                At Sanatan Shankhnaad, we believe in the power of integration—where the ancient wisdom of Sanatan
                Shiksha meets the innovative force of STEM education (Science, Technology, Engineering, Mathematics).
                This unique blend offers students a comprehensive, values-driven, and future-ready learning experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Movement Section above Footer */}
      <section className="py-12 bg-gradient-to-r from-orange-100 to-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 rounded-2xl p-6 md:p-8 shadow-lg text-center w-full">
            <h3 className="text-2xl md:text-3xl font-bold text-orange-900 mb-4">Join the Movement</h3>
            <p className="text-xl md:text-2xl text-orange-800 mb-4 font-serif">
              "तमसो मा ज्योतिर्गमय" का मंत्र विश्व पर छाएगा, तक्षशिला नालंदा का इतिहास लौट कर आएगा।
            </p>
            <p className="text-lg text-orange-700 mb-4 max-w-4xl mx-auto leading-relaxed">
              This is more than just an educational initiative—it's a cultural renaissance. Whether you're a parent, educator, student, or supporter, we invite you to be a part of this transformative journey.
            </p>
            <p className="text-lg text-orange-700 mb-4 max-w-4xl mx-auto leading-relaxed">
              Together, let us shape a future where education is sacred, empowering, and universally accessible—a future where the echoes of the Shankhnaad awaken the world to the brilliance of Sanatan Shiksha.
            </p>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md max-w-4xl mx-auto mb-4">
              <p className="text-orange-800 leading-relaxed italic">
                Mr. Sanjay Kumar's efforts not only revive our cultural heritage but also prepare today's youth to become global leaders while staying connected to their roots. This is a philosophical revolution — a powerful step towards making India the "Vishwaguru" (world teacher) once again.
              </p>
              <p className="text-orange-900 font-bold mt-4">
                It is our collective responsibility to support this historic initiative.
              </p>
            </div>
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
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      Contact Us
                    </Link>
                  </li>
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
    </main>
  )
}
