"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Sparkles,
  Target,
  Globe,
  Shield,
  BookOpen,
  Lightbulb,
  Star,
  Compass,
  Microscope,
  Leaf,
  Building,
  Music,
  Zap,
  ArrowRight,
} from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

export default function AboutPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 group">
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
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-orange-700 hover:text-orange-600 transition-all duration-300 transform hover:scale-105"
              >
              Sanatan Discoveries
              </Link>
              <Link
                href="/about"
                className="text-orange-800 hover:text-orange-600 transition-all duration-300 font-medium transform hover:scale-105"
              >
                About
              </Link>
              <span className="text-orange-700 cursor-default transition-all duration-300 hover:text-orange-500">
                Sishushala
              </span>
              <span className="text-orange-700 cursor-default transition-all duration-300 hover:text-orange-500">
                Gurukulam
              </span>
              <span className="text-orange-700 cursor-default transition-all duration-300 hover:text-orange-500">
                Viswavidyalaya
              </span>
              <Link
                href="/events"
                className="text-orange-700 hover:text-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Events
              </Link>
              <Link
                href="/blog"
                className="text-orange-700 hover:text-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-orange-700 hover:text-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Contact
              </Link>
            </div>
            <MobileNav />
          </div>
        </div>
      </nav>

      
      {/* Hero Section */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/50 to-red-100/50 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center transform transition-all duration-2000 ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-95"}`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-900 mb-4 md:mb-6 animate-bounce-in">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 animate-gradient">
                Sanatan Shankhnaad
              </span>
            </h1>
            <div
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-800 mb-6 md:mb-8"
              style={{ fontFamily: "serif" }}
            >
              "तमसो मा ज्योतिर्गमय"
            </div>
            <p className="text-lg md:text-xl text-orange-700 mb-4 font-medium">
              का मंत्र विश्व पर छाएगा, तक्षशिला नालंदा का इतिहास लौट कर आएगा।
            </p>
            <p className="text-xl md:text-2xl text-orange-800 max-w-5xl mx-auto leading-relaxed font-semibold">
              Our Legacy from Sindhu Ghati to Sanatan Shiksha - Awakening Sanatan Shiksha Eternal Genius. Rebuilding the
              Future.
            </p>
          </div>
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

      {/* Vision Section - NEW */}
      <section className="py-12 md:py-20 bg-white/70 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50/30 to-red-50/30 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex items-center justify-center mb-6 md:mb-8">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-orange-900 animate-bounce-in">Our Vision</h2>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-orange-800 mb-6 md:mb-8 text-center">
              Rebuilding India's Eternal Legacy Through Education
            </h3>

            <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 mb-8">
              <p className="text-orange-800 leading-relaxed mb-4 text-base md:text-lg">
                Sanatan Shankhnaad envisions a powerful renaissance of Bharat's ancient educational ethos, where the
                spiritual depth, scientific precision, and cultural richness of Sanatan Shiksha are harmoniously blended
                with modern educational frameworks like STEM (Science, Technology, Engineering, Mathematics). Our goal
                is to reclaim India's position as a "Vishwaguru" (world teacher)—by rebuilding, modernizing, and
                globalizing the spirit of institutions like Takshashila, Nalanda, and Vikramshila Vishwavidyalaya.
              </p>
              <p className="text-orange-800 leading-relaxed text-base md:text-lg">
                We strive to create a new generation of learners who are deeply rooted in Indian civilization and yet
                future-ready—students who understand not only coding and robotics, but also Ayurveda, Vedanga, and
                Arthashastra; who are trained not just in AI and IoT, but also in Sanskrit logic, Yogic sciences, and
                Dharmic ethics.
              </p>
            </div>

            <h4 className="text-xl font-bold text-orange-800 mb-4 text-center">
              Our dream is to establish institutions that revive the brilliance of:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
              {[
                {
                  title: "Takshashila & Nalanda",
                  description: "Centers of logic, grammar, Ayurveda, and global learning",
                  icon: <Building className="w-6 h-6 md:w-7 md:h-7 text-orange-600" />,
                },
                {
                  title: "Chikitsa (Ayurveda)",
                  description: "Natural healing systems documented in Charaka Samhita",
                  icon: <Leaf className="w-6 h-6 md:w-7 md:h-7 text-orange-600" />,
                },
                {
                  title: "Khagolshastra & Ganit",
                  description: "Astronomy and Mathematics pioneered by Aryabhata, Varahamihira",
                  icon: <Star className="w-6 h-6 md:w-7 md:h-7 text-orange-600" />,
                },
                {
                  title: "Vaidik Granthas",
                  description: "Texts like Surya Siddhanta, Vimana Shastra, and Panini's Ashtadhyayi",
                  icon: <BookOpen className="w-6 h-6 md:w-7 md:h-7 text-orange-600" />,
                },
                {
                  title: "Upavedas",
                  description: "Ayurveda, Dhanurveda (warfare), Gandharvaveda (music), Arthashastra (governance)",
                  icon: <Shield className="w-6 h-6 md:w-7 md:h-7 text-orange-600" />,
                },
                {
                  title: "Vedang & Panchang",
                  description: "Core sciences of linguistics, rituals, astronomy, and time-keeping",
                  icon: <Compass className="w-6 h-6 md:w-7 md:h-7 text-orange-600" />,
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className={`transform transition-all duration-700 hover:scale-105 hover:shadow-xl hover:-translate-y-1 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"} group cursor-pointer`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-5 md:p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-red-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex items-center mb-3 md:mb-4">
                        <div className="flex justify-center items-center w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                          {item.icon}
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-orange-900 group-hover:text-orange-700 transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-orange-700 leading-relaxed group-hover:text-orange-600 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">
              <p className="text-orange-800 leading-relaxed text-base md:text-lg">
                Bharat's influence on Western education through the zero system, advanced metallurgy, surgery, yoga, and
                meditation has been profound yet often overlooked. Our vision is to highlight these contributions while
                creating a new educational paradigm that honors this legacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bharat's Avishkaar Section - NEW */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 to-red-100/20 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-10 md:mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                <Microscope className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-orange-900 animate-bounce-in">Bharat's Avishkaar</h2>
            </div>
            <p className="text-xl md:text-2xl text-orange-800 font-semibold mb-2">
              Timeless Discoveries through Sanatan Shiksha
            </p>
            <p className="text-lg md:text-xl text-orange-700 max-w-4xl mx-auto">
              Rediscovering India's Scientific Legacy through the Lens of Eternal Education
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 mb-8 md:mb-12">
            <p className="text-orange-800 leading-relaxed mb-4 text-base md:text-lg">
              The vision of Sanatan Shankhnaad is rooted not just in preserving culture, but in reviving the forgotten
              genius of Bharat—a civilization that pioneered profound discoveries in every sphere of human knowledge.
              The ancient system of Sanatan Shiksha was not theoretical or limited to scriptures—it was a living,
              dynamic force of scientific inquiry, innovation, and holistic learning.
            </p>
          </div>

          <div className="space-y-8 md:space-y-12">
            {/* Astronomy & Mathematics */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-all duration-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-orange-900">
                  Astronomy & Mathematics (Jyotish & Ganit)
                </h3>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-orange-800">
                <li className="text-base md:text-lg">
                  Aryabhata, educated in the Nalanda tradition, formulated the concept of zero, accurately calculated pi
                  (π), and proposed that the Earth rotates on its axis—centuries before Copernicus.
                </li>
                <li className="text-base md:text-lg">
                  Bhaskaracharya introduced advanced calculus, algebra, and planetary models. His works like Lilavati
                  are mathematical masterpieces.
                </li>
                <li className="text-base md:text-lg">
                  The Surya Siddhanta remains a stellar example of ancient Indian astronomy, calculating planetary
                  positions with astonishing precision.
                </li>
              </ul>
            </div>

            {/* Medicine & Health Sciences */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-all duration-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-orange-900">Medicine & Health Sciences (Ayurveda)</h3>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-orange-800">
                <li className="text-base md:text-lg">
                  Charaka and Sushruta—giants of Ayurveda—documented detailed diagnostic methods, surgical techniques
                  (like cataract and plastic surgery), and holistic treatments that continue to influence global health
                  systems.
                </li>
                <li className="text-base md:text-lg">
                  Sushruta Samhita describes over 300 surgeries and 120 surgical instruments, making it the world's
                  first surgical manual.
                </li>
                <li className="text-base md:text-lg">
                  Concepts like tridosha (Vata, Pitta, Kapha) balance, immunity-building, and herbal pharmacology were
                  embedded in everyday life.
                </li>
              </ul>
            </div>

            {/* Architecture & Engineering */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-all duration-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-orange-900">
                  Architecture, Engineering & Town Planning
                </h3>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-orange-800">
                <li className="text-base md:text-lg">
                  Vastu Shastra, the science of sacred architecture, guided the building of temples, homes, and entire
                  cities with geometric precision, cosmic alignment, and ecological harmony.
                </li>
                <li className="text-base md:text-lg">
                  Ancient cities like Mohenjo-Daro and Dholavira showcased advanced drainage systems, grid planning, and
                  water management.
                </li>
              </ul>
            </div>

            {/* Arts & Sciences */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-all duration-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-orange-900">
                  Arts & Sciences (Gandharva-Ved, Dhanur-Ved, Arthashastra)
                </h3>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-orange-800">
                <li className="text-base md:text-lg">
                  Gandharva Ved, the Upaveda of Samaveda, codified the foundation of Indian classical music and dance,
                  linking rhythm, emotion, and spiritual growth.
                </li>
                <li className="text-base md:text-lg">
                  Dhanur-Veda, the science of warfare, detailed archery, martial arts, strategy, and ethics of
                  warfare—used in training Kshatriyas.
                </li>
                <li className="text-base md:text-lg">
                  Arthashastra by Chanakya is a treatise on economics, politics, and governance that rivals modern
                  administrative manuals.
                </li>
              </ul>
            </div>

            {/* Language, Grammar & Logic */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-all duration-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-orange-900">Language, Grammar & Logic</h3>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-orange-800">
                <li className="text-base md:text-lg">
                  Panini's Ashtadhyayi, a precise grammar system for Sanskrit, is considered the world's first
                  computational language framework, influencing modern linguistics and even AI systems.
                </li>
                <li className="text-base md:text-lg">
                  Nyaya Shastra and Mimansa emphasized logic, debate, epistemology, and proof—developing rational
                  thinking centuries before the West.
                </li>
              </ul>
            </div>

            {/* Spiritual Sciences */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-all duration-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-orange-900">
                  Spiritual Sciences & Consciousness Studies
                </h3>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-orange-800">
                <li className="text-base md:text-lg">
                  Yogic sciences, as systematized by Patanjali, explore the conscious mind, breath, meditation, and
                  higher awareness—now widely embraced by neuroscience and psychology.
                </li>
                <li className="text-base md:text-lg">
                  Vedanta, Samkhya, and Yoga schools provided models of consciousness, self-realization, and universal
                  harmony.
                </li>
              </ul>
            </div>

            {/* Global Relevance */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-all duration-500">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-orange-900">Global Relevance of Sanatan Shiksha</h3>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-orange-800">
                <li className="text-base md:text-lg">
                  Contribution to Western science: Zero, calculus precursors, surgery, yoga, and meditation now form
                  global wellness and tech foundations
                </li>
                <li className="text-base md:text-lg">
                  Ayurveda and Yogic science: Rising interest in preventive healthcare and mind-body medicine
                </li>
                <li className="text-base md:text-lg">
                  Sanskrit & Linguistics: Structural depth of Paninian grammar influencing modern AI/NLP
                </li>
                <li className="text-base md:text-lg">
                  Astronomy & Calendar Science: Panchang and Surya Siddhanta are models of cosmic precision
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section - NEW */}
      <section className="py-12 md:py-20 bg-white/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50/30 to-red-50/30 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-10 md:mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-orange-900 animate-bounce-in">Why It Matters</h2>
            </div>
            <p className="text-xl md:text-2xl text-orange-800 font-semibold mb-2">Challenges & Rebuilding</p>
          </div>

          <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 mb-8">
            <p className="text-orange-800 leading-relaxed mb-4 text-base md:text-lg">We acknowledge that:</p>
            <ul className="list-disc pl-6 space-y-3 text-orange-800">
              <li className="text-base md:text-lg">
                Colonial disruption led to the erosion of India's native education system, language, and scientific
                achievements.
              </li>
              <li className="text-base md:text-lg">
                There is an urgent need to reclaim and rebuild this lost legacy—not to look backward, but to build
                forward with deeper roots.
              </li>
              <li className="text-base md:text-lg">
                India's contributions to Western education systems—from the concept of zero, trigonometry, and surgery
                to metallurgy, meditation, and herbal medicine—have often been overlooked or forgotten.
              </li>
              <li className="text-base md:text-lg">
                Our mission is not just revival, but evolution—to create a global education system where Sanatan Dharma
                and scientific innovation walk hand in hand.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission Section - NEW */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 to-red-100/20 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-10 md:mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-orange-900 animate-bounce-in">Our Mission</h2>
            </div>
            <p className="text-xl md:text-2xl text-orange-800 font-semibold mb-2">Tradition Meets Innovation</p>
          </div>

          <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 mb-8">
            <p className="text-orange-800 leading-relaxed mb-4 text-base md:text-lg">
              Sanatan shiksha & stem education scientific research council As a trust our mission is not merely
              educational—it is civilizational. It is about reclaiming Bharat's rightful role as a Vishwaguru and
              inspiring the world through the confluence of ancient wisdom and future vision & the mission is to bring
              these Avishkaaras out of dusty archives and make them accessible, applicable, and integrated into modern
              learning systems.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-all duration-500">
            <h3 className="text-xl md:text-2xl font-bold text-orange-900 mb-4 text-center">We are committed to:</h3>
            <ul className="list-disc pl-6 space-y-3 text-orange-800">
              <li className="text-base md:text-lg">
                Reconstructing India's ancient centers of learning like Takshashila, Nalanda, and Vikramshila in modern
                forms—fostering critical thinking, inner growth, and global leadership.
              </li>
              <li className="text-base md:text-lg">
                Integrating Sanatan knowledge systems—Ayurveda, Yoga, Vedic mathematics, astronomy, grammar, philosophy,
                and the Upavedas—with modern STEM disciplines, through experiential and value-driven education.
              </li>
              <li className="text-base md:text-lg">
                Empowering students with both spiritual depth and scientific innovation, cultivating a generation of
                conscious creators, technocrats with dharma, and compassionate problem-solvers.
              </li>
              <li className="text-base md:text-lg">
                Building institutions—from Shishu-Shalas to Gurukulams to Vishwavidyalayas—that combine the guru-shishya
                ethos with digital-age excellence.
              </li>
              <li className="text-base md:text-lg">
                Conducting research, documentation, and global dissemination of ancient Indian contributions to
                medicine, astronomy, governance, arts, and ethics—highlighting India's foundational role in world
                civilization.
              </li>
              <li className="text-base md:text-lg">
                Creating a bridge between ancient insight and modern relevance, preparing youth not just for careers,
                but for meaningful, sustainable, and enlightened living.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Indus Valley Legacy */}
      <section className="py-12 md:py-20 bg-white/70 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50/30 to-red-50/30 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-6 md:mb-8 text-center animate-bounce-in">
              The Dawn of Bharat's Civilizational Journey
            </h2>
            <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">
              <p className="text-orange-800 leading-relaxed mb-4 text-base md:text-lg">
                The <strong>Indus Valley Civilization</strong> marks the dawn of Bharat's civilizational journey, where
                urban planning, advanced water systems, and structured living emerged nearly 5,000 years ago. Far more
                than bricks and seals, this was a society rooted in harmony with nature, sacred geometry, and social
                organization—proof that India's scientific and spiritual legacy began long before recorded history.
              </p>
              <p className="text-orange-800 leading-relaxed text-base md:text-lg">
                From the meticulously designed cities of <strong>Mohenjo-Daro</strong> and <strong>Dholavira</strong> to
                the sacred syllables of the Vedas, the legacy of Bharat's education is not merely historical—it is
                civilizational.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ancient Universities */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 to-red-100/20 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-10 md:mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4 animate-bounce-in">
              Our Civilizational Torchbearers
            </h2>
            <p className="text-lg md:text-xl text-orange-700 max-w-4xl mx-auto">
              Ancient centers of learning that illuminated the world with knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {[
              {
                title: "Takshashila",
                period: "Est. ~700 BCE",
                description:
                  "Students mastered astronomy, Ayurveda, philosophy, and political science. The world's first university where knowledge knew no boundaries.",
                icon: <BookOpen className="w-7 h-7 md:w-8 md:h-8 text-orange-600" />,
                delay: "delay-100",
              },
              {
                title: "Nalanda",
                period: "Est. ~5th century CE",
                description:
                  "Knowledge flowed freely across borders, drawing seekers from China, Tibet, Persia, and beyond. A beacon of international learning.",
                icon: <Globe className="w-7 h-7 md:w-8 md:h-8 text-orange-600" />,
                delay: "delay-200",
              },
              {
                title: "Vikramshila",
                period: "8th century CE",
                description:
                  "Advanced center for Buddhist learning and philosophy, complementing Nalanda in spreading wisdom across continents.",
                icon: <Lightbulb className="w-7 h-7 md:w-8 md:h-8 text-orange-600" />,
                delay: "delay-300",
              },
            ].map((university, index) => (
              <Card
                key={index}
                className={`transform transition-all duration-700 hover:scale-105 md:hover:scale-110 hover:shadow-xl md:hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2 ${university.delay} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"} group cursor-pointer`}
              >
                <CardContent className="p-6 md:p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-red-100 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex justify-center mb-4 md:mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                      {university.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-orange-900 mb-2 group-hover:text-orange-700 transition-colors duration-300">
                      {university.title}
                    </h3>
                    <p className="text-sm md:text-base text-orange-600 font-medium mb-3">{university.period}</p>
                    <p className="text-sm md:text-base text-orange-700 leading-relaxed group-hover:text-orange-600 transition-colors duration-300">
                      {university.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-orange-100 to-red-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-200/20 to-red-200/20 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4 md:mb-6">
              Join the Renaissance of Sanatan Shiksha
            </h2>
            <p className="text-lg md:text-xl text-orange-800 max-w-4xl mx-auto leading-relaxed mb-6 md:mb-8">
              Through our diverse educational ventures, we aim to reimagine education as a means of empowerment,
              enlightenment, and evolution. Each model is thoughtfully designed to serve as a beacon of knowledge,
              ethics, and innovation for future generations.
            </p>
            <p className="text-base md:text-lg text-orange-700 max-w-3xl mx-auto mb-6 md:mb-8">
              Be part of the movement where ancient wisdom meets modern innovation, where tradition guides
              transformation, and where India reclaims its position as the world's teacher.
            </p>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg px-6 py-2 md:px-8 md:py-3 text-base md:text-lg w-full sm:w-auto">
              Join Our Mission
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
