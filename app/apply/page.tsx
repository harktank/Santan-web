"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload, CheckCircle } from "lucide-react"

export default function ApplyPage() {
  const searchParams = useSearchParams()
  const programId = searchParams.get("program")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pincode: "",

    // Program Information
    program: programId || "",
    preferredStartDate: "",

    // Guardian Information (for minors)
    guardianName: "",
    guardianEmail: "",
    guardianPhone: "",
    guardianRelation: "",

    // Educational Background
    previousEducation: "",
    schoolName: "",
    percentage: "",

    // Additional Information
    motivation: "",
    specialNeeds: "",
    medicalConditions: "",

    // Agreements
    termsAccepted: false,
    dataConsent: false,
  })

  const programs = [
    { id: "1", name: "Early Childhood Program (Sishushala)" },
    { id: "2", name: "Residential Gurukul Program" },
    { id: "3", name: "Bachelor of Vedic Studies" },
    { id: "4", name: "Ayurveda Medicine Program" },
    { id: "5", name: "Yoga Teacher Training" },
    { id: "6", name: "Weekend Cultural Classes" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log("Application submitted:", formData)
    setIsSubmitted(true)
  }

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto shadow-xl">
          <CardContent className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-orange-900 mb-4">Application Submitted!</h2>
            <p className="text-orange-700 mb-6">
              Thank you for your application. We will review it and contact you within 3-5 business days.
            </p>
            <div className="space-y-3">
              <Link href="/programs">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                  View Other Programs
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="w-full border-orange-500 text-orange-700 hover:bg-orange-50">
                  Return Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

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

      {/* Application Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-orange-900 mb-4">
              Application{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Form</span>
            </h1>
            <p className="text-xl text-orange-800">
              Begin your journey with Sanatan Heritage. Please fill out all required information.
            </p>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-900">Student Application</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-orange-900 mb-4">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleChange("firstName", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleChange("lastName", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="gender">Gender *</Label>
                      <Select onValueChange={(value) => handleChange("gender", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Label htmlFor="address">Address *</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleChange("address", e.target.value)}
                      required
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleChange("city", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={(e) => handleChange("state", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="pincode">PIN Code *</Label>
                      <Input
                        id="pincode"
                        value={formData.pincode}
                        onChange={(e) => handleChange("pincode", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Program Information */}
                <div>
                  <h3 className="text-lg font-semibold text-orange-900 mb-4">Program Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="program">Select Program *</Label>
                      <Select onValueChange={(value) => handleChange("program", value)} defaultValue={programId || ""}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Choose a program" />
                        </SelectTrigger>
                        <SelectContent>
                          {programs.map((program) => (
                            <SelectItem key={program.id} value={program.id}>
                              {program.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="preferredStartDate">Preferred Start Date *</Label>
                      <Input
                        id="preferredStartDate"
                        type="date"
                        value={formData.preferredStartDate}
                        onChange={(e) => handleChange("preferredStartDate", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Guardian Information */}
                <div>
                  <h3 className="text-lg font-semibold text-orange-900 mb-4">
                    Guardian Information (Required for minors)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="guardianName">Guardian Name</Label>
                      <Input
                        id="guardianName"
                        value={formData.guardianName}
                        onChange={(e) => handleChange("guardianName", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="guardianEmail">Guardian Email</Label>
                      <Input
                        id="guardianEmail"
                        type="email"
                        value={formData.guardianEmail}
                        onChange={(e) => handleChange("guardianEmail", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="guardianPhone">Guardian Phone</Label>
                      <Input
                        id="guardianPhone"
                        value={formData.guardianPhone}
                        onChange={(e) => handleChange("guardianPhone", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="guardianRelation">Relation to Student</Label>
                      <Select onValueChange={(value) => handleChange("guardianRelation", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select relation" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="father">Father</SelectItem>
                          <SelectItem value="mother">Mother</SelectItem>
                          <SelectItem value="guardian">Legal Guardian</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Educational Background */}
                <div>
                  <h3 className="text-lg font-semibold text-orange-900 mb-4">Educational Background</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="previousEducation">Highest Education Level</Label>
                      <Select onValueChange={(value) => handleChange("previousEducation", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select education level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="primary">Primary School</SelectItem>
                          <SelectItem value="secondary">Secondary School</SelectItem>
                          <SelectItem value="higher-secondary">Higher Secondary</SelectItem>
                          <SelectItem value="graduate">Graduate</SelectItem>
                          <SelectItem value="post-graduate">Post Graduate</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="schoolName">Last School/Institution</Label>
                      <Input
                        id="schoolName"
                        value={formData.schoolName}
                        onChange={(e) => handleChange("schoolName", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="percentage">Percentage/Grade</Label>
                      <Input
                        id="percentage"
                        value={formData.percentage}
                        onChange={(e) => handleChange("percentage", e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h3 className="text-lg font-semibold text-orange-900 mb-4">Additional Information</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="motivation">Why do you want to join this program? *</Label>
                      <Textarea
                        id="motivation"
                        value={formData.motivation}
                        onChange={(e) => handleChange("motivation", e.target.value)}
                        required
                        className="mt-1"
                        rows={4}
                        placeholder="Please share your motivation and goals..."
                      />
                    </div>
                    <div>
                      <Label htmlFor="specialNeeds">Special Learning Needs</Label>
                      <Textarea
                        id="specialNeeds"
                        value={formData.specialNeeds}
                        onChange={(e) => handleChange("specialNeeds", e.target.value)}
                        className="mt-1"
                        rows={3}
                        placeholder="Any special accommodations needed..."
                      />
                    </div>
                    <div>
                      <Label htmlFor="medicalConditions">Medical Conditions</Label>
                      <Textarea
                        id="medicalConditions"
                        value={formData.medicalConditions}
                        onChange={(e) => handleChange("medicalConditions", e.target.value)}
                        className="mt-1"
                        rows={3}
                        placeholder="Any medical conditions we should be aware of..."
                      />
                    </div>
                  </div>
                </div>

                {/* Document Upload */}
                <div>
                  <h3 className="text-lg font-semibold text-orange-900 mb-4">Documents</h3>
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-orange-300 rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                      <p className="text-orange-700">
                        Upload required documents (ID proof, educational certificates, photos)
                      </p>
                      <Button variant="outline" className="mt-2 border-orange-500 text-orange-700">
                        Choose Files
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.termsAccepted}
                      onCheckedChange={(checked) => handleChange("termsAccepted", checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I accept the{" "}
                      <Link href="/terms" className="text-orange-600 hover:underline">
                        Terms and Conditions
                      </Link>{" "}
                      *
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="consent"
                      checked={formData.dataConsent}
                      onCheckedChange={(checked) => handleChange("dataConsent", checked as boolean)}
                    />
                    <Label htmlFor="consent" className="text-sm">
                      I consent to the processing of my personal data for admission purposes *
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={!formData.termsAccepted || !formData.dataConsent}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 text-lg"
                  >
                    Submit Application
                  </Button>
                  <p className="text-sm text-orange-600 mt-2 text-center">
                    Application fee: ₹1,000 (payable after initial review)
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
