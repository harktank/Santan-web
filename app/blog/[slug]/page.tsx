"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Calendar, User, Clock, ArrowLeft, Share2, Heart, MessageCircle } from "lucide-react"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Mock blog post data - in real app, this would be fetched based on slug
  const blogPost = {
    title: "The Relevance of Gurukul Education in Modern Times",
    content: `
      <p>In an era dominated by digital learning and standardized education systems, the ancient gurukul tradition offers profound insights that remain remarkably relevant today. This traditional Indian educational system, which flourished for thousands of years, provides a holistic approach to learning that modern educators are beginning to recognize and appreciate.</p>

      <h2>The Foundation of Gurukul Education</h2>
      <p>The gurukul system was built on the sacred relationship between the guru (teacher) and shishya (student). Unlike modern educational institutions where knowledge transfer is often one-directional, the gurukul fostered a deep, personal bond that facilitated not just academic learning but character development and spiritual growth.</p>

      <p>Students lived with their teachers, sharing daily life experiences that extended learning beyond formal classroom hours. This immersive environment created opportunities for continuous learning through observation, practice, and reflection.</p>

      <h2>Key Principles That Remain Relevant</h2>
      <h3>1. Personalized Learning</h3>
      <p>Long before modern education discovered the importance of individualized instruction, gurukuls practiced personalized learning. Teachers understood each student's unique capabilities, learning style, and pace, adapting their teaching methods accordingly.</p>

      <h3>2. Holistic Development</h3>
      <p>The gurukul system emphasized the development of the whole person - intellectual, physical, emotional, and spiritual. Students learned not just academic subjects but also life skills, ethics, and values that would serve them throughout their lives.</p>

      <h3>3. Experiential Learning</h3>
      <p>Knowledge was not merely theoretical but deeply practical. Students learned through direct experience, hands-on activities, and real-world applications. This approach ensured that learning was meaningful and lasting.</p>

      <h2>Modern Applications</h2>
      <p>Today's educational institutions can learn much from the gurukul tradition:</p>
      <ul>
        <li><strong>Mentorship Programs:</strong> Establishing strong mentor-student relationships that go beyond academic instruction</li>
        <li><strong>Character Education:</strong> Integrating values and ethics into the curriculum</li>
        <li><strong>Community Learning:</strong> Creating learning communities where students support each other's growth</li>
        <li><strong>Practical Application:</strong> Emphasizing hands-on learning and real-world problem solving</li>
      </ul>

      <h2>Challenges and Adaptations</h2>
      <p>While the gurukul system offers valuable insights, it must be adapted to contemporary needs. Modern gurukul-inspired institutions need to balance traditional wisdom with current academic requirements, technology integration, and global perspectives.</p>

      <p>The key is not to replicate the ancient system exactly but to extract its essential principles and apply them in ways that serve today's learners while preparing them for tomorrow's challenges.</p>

      <h2>Conclusion</h2>
      <p>The gurukul tradition reminds us that education is not just about information transfer but about transformation. It's about nurturing human potential in all its dimensions and creating individuals who are not only knowledgeable but also wise, compassionate, and capable of contributing meaningfully to society.</p>

      <p>As we continue to evolve our educational systems, the timeless wisdom of the gurukul tradition offers a valuable compass, pointing us toward more holistic, personalized, and meaningful approaches to learning.</p>
    `,
    author: "Dr. Priya Sharma",
    date: "February 10, 2024",
    readTime: "8 min read",
    category: "Education",
    image: "/placeholder.svg?height=400&width=800",
    likes: 42,
    comments: 15,
    tags: ["Education", "Gurukul", "Traditional Learning", "Modern Education"],
  }

  const relatedPosts = [
    {
      title: "Yoga and Meditation: Ancient Practices for Modern Wellness",
      excerpt: "Discover how incorporating yoga and meditation in daily routine can improve mental health...",
      author: "Swami Ananda",
      date: "February 5, 2024",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Sanskrit Literature: A Treasure Trove of Wisdom",
      excerpt: "Exploring the rich heritage of Sanskrit literature and its continued relevance...",
      author: "Prof. Meera Devi",
      date: "February 2, 2024",
      image: "/placeholder.svg?height=200&width=300",
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
              <Link href="/blog" className="text-orange-800 hover:text-orange-600 transition-colors font-medium">
                Blog
              </Link>
              <Link href="/contact" className="text-orange-700 hover:text-orange-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog">
            <Button variant="ghost" className="text-orange-600 hover:text-orange-800 hover:bg-orange-50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Badge className="bg-orange-100 text-orange-800 mb-4">{blogPost.category}</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-orange-900 mb-6 leading-tight">{blogPost.title}</h1>

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-6 text-orange-600">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{blogPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blogPost.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{blogPost.readTime}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsLiked(!isLiked)}
                  className={`${isLiked ? "text-red-500" : "text-orange-600"} hover:text-red-500`}
                >
                  <Heart className={`w-4 h-4 mr-1 ${isLiked ? "fill-current" : ""}`} />
                  {blogPost.likes}
                </Button>
                <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-800">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  {blogPost.comments}
                </Button>
                <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-800">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="relative h-64 lg:h-96 mb-8">
              <Image
                src={blogPost.image || "/placeholder.svg"}
                alt={blogPost.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div
              className="text-orange-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.75",
              }}
            />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-orange-200">
            <h3 className="text-lg font-semibold text-orange-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="border-orange-300 text-orange-700">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-white rounded-xl shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-900 mb-2">{blogPost.author}</h3>
                <p className="text-orange-700">
                  Dr. Priya Sharma is a renowned educator and researcher specializing in traditional Indian education
                  systems. She has over 20 years of experience in integrating ancient wisdom with modern pedagogical
                  approaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-orange-900 mb-12 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedPosts.map((post, index) => (
              <Card key={index} className="transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-orange-900 mb-3 line-clamp-2">{post.title}</h3>
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
                  <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Button variant="ghost" className="w-full text-orange-600 hover:text-orange-800 hover:bg-orange-50">
                      Read More
                    </Button>
                  </Link>
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
