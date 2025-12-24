"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Code2, Loader2 } from "lucide-react"
import { sendEmail } from "@/lib/emailjs"
import { toast } from "sonner"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast.error("Please fill in all fields")
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address")
      setIsSubmitting(false)
      return
    }

    try {
      console.log('Submitting form with data:', formData);
  await sendEmail(formData)
  // show concise success notification as requested
  toast.success('message sent')
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      })
    
    } catch (error: any) {
      console.error('Form submission error:', error);
      // show concise, user-friendly error notification as requested
      toast.error('there was an error, please try again later')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-dracula-purple to-dracula-pink bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-dracula-foreground/70">{"Let's work together on your next project"}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-lg bg-dracula-current/50 border-dracula-purple/30 hover:border-dracula-pink hover:shadow-lg hover:shadow-dracula-purple/20 transition-all h-full">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-dracula-purple">Contact Information</CardTitle>
                <CardDescription className="text-dracula-foreground/70">
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-dracula-pink/20 border border-dracula-pink/30">
                    <Mail className="w-5 h-5 text-dracula-pink" />
                  </div>
                  <div>
                    <p className="font-medium text-dracula-foreground">Email</p>
                    <p className="text-dracula-foreground/70 text-sm md:text-base">500vikrant@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-dracula-purple/20 border border-dracula-purple/30">
                    <Phone className="w-5 h-5 text-dracula-purple" />
                  </div>
                  <div>
                    <p className="font-medium text-dracula-foreground">Phone</p>
                    <p className="text-dracula-foreground/70 text-sm md:text-base">+91 7291858859</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-dracula-cyan/20 border border-dracula-cyan/30">
                    <MapPin className="w-5 h-5 text-dracula-cyan" />
                  </div>
                  <div>
                    <p className="font-medium text-dracula-foreground">Location</p>
                    <p className="text-dracula-foreground/70 text-sm md:text-base">India</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-dracula-purple/30">
                  <p className="font-medium text-dracula-foreground mb-4">Follow me on</p>
                  <div className="flex space-x-4 flex-wrap">
                    <motion.a
                      href="https://github.com/vikrant500"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-dracula-selection border border-dracula-purple/30 hover:border-dracula-purple hover:bg-dracula-purple/20 transition-all group"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5 text-dracula-foreground group-hover:text-dracula-purple transition-colors" />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/vikrant-sharma3/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-dracula-selection border border-dracula-cyan/30 hover:border-dracula-cyan hover:bg-dracula-cyan/20 transition-all group"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="w-5 h-5 text-dracula-foreground group-hover:text-dracula-cyan transition-colors" />
                    </motion.a>
                    <motion.a
                      href="https://x.com/vik_5000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-dracula-selection border border-dracula-cyan/30 hover:border-dracula-cyan hover:bg-dracula-cyan/20 transition-all group"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Twitter className="w-5 h-5 text-dracula-foreground group-hover:text-dracula-cyan transition-colors" />
                    </motion.a>
                    <motion.a
                      href="https://leetcode.com/u/vikr4nt_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-dracula-selection border border-dracula-yellow/30 hover:border-dracula-yellow hover:bg-dracula-yellow/20 transition-all group"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Code2 className="w-5 h-5 text-dracula-foreground group-hover:text-dracula-yellow transition-colors" />
                    </motion.a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-lg bg-dracula-current/50 border-dracula-purple/30 hover:border-dracula-pink hover:shadow-lg hover:shadow-dracula-purple/20 transition-all">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-dracula-purple">Send a Message</CardTitle>
                <CardDescription className="text-dracula-foreground/70">
                  {"I'll get back to you as soon as possible"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-dracula-foreground">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="bg-dracula-selection border-dracula-purple/30 text-dracula-foreground placeholder:text-dracula-comment focus:border-dracula-purple focus:ring-dracula-purple"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-dracula-foreground">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="bg-dracula-selection border-dracula-purple/30 text-dracula-foreground placeholder:text-dracula-comment focus:border-dracula-purple focus:ring-dracula-purple"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-dracula-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="john@example.com"
                      className="bg-dracula-selection border-dracula-purple/30 text-dracula-foreground placeholder:text-dracula-comment focus:border-dracula-purple focus:ring-dracula-purple"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-dracula-foreground">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Collaboration"
                      className="bg-dracula-selection border-dracula-purple/30 text-dracula-foreground placeholder:text-dracula-comment focus:border-dracula-purple focus:ring-dracula-purple"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-dracula-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-dracula-selection border-dracula-purple/30 text-dracula-foreground placeholder:text-dracula-comment focus:border-dracula-purple focus:ring-dracula-purple resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-dracula-purple text-dracula-bg hover:bg-dracula-pink hover:scale-105 transition-all shadow-lg shadow-dracula-purple/50 font-semibold"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center space-x-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
