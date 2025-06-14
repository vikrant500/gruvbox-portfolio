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
      const result = await sendEmail(formData)
      if (result.success) {
        toast.success("Message sent successfully! I'll get back to you soon.")
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        })
      } else {
        // Show more detailed error message
        const errorMessage = result.error?.message || result.error?.text || "Failed to send message"
        console.error('Email send failed:', result.error);
        toast.error(`Failed to send message: ${errorMessage}`)
      }
    } catch (error: any) {
      console.error('Form submission error:', error);
      toast.error(`An error occurred: ${error?.message || 'Unknown error'}`)
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
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-gruvbox-purple">Get In Touch</h2>
          <p className="text-xl text-gruvbox-text/70">{"Let's work together on your next project"}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-sm bg-[#3c3836]/10 border-[#504945]/20 h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-gruvbox-orange/80">Contact Information</CardTitle>
                <CardDescription className="text-gruvbox-text/60">
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-[#3c3836]/10 border border-[#504945]/20">
                    <Mail className="w-5 h-5 text-gruvbox-orange/80" />
                  </div>
                  <div>
                    <p className="font-medium text-gruvbox-text/80">Email</p>
                    <p className="text-gruvbox-text/60">500vikrant@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-[#3c3836]/10 border border-[#504945]/20">
                    <Phone className="w-5 h-5 text-gruvbox-green/80" />
                  </div>
                  <div>
                    <p className="font-medium text-gruvbox-text/80">Phone</p>
                    <p className="text-gruvbox-text/60">+91 7291858859</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-[#3c3836]/10 border border-[#504945]/20">
                    <MapPin className="w-5 h-5 text-gruvbox-purple/80" />
                  </div>
                  <div>
                    <p className="font-medium text-gruvbox-text/80">Location</p>
                    <p className="text-gruvbox-text/60">India</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#504945]/20">
                  <p className="font-medium text-gruvbox-text/80 mb-4">Follow me on</p>
                  <div className="flex space-x-4 flex-wrap">
                    <motion.a
                      href="https://github.com/vikrant500"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-[#3c3836]/10 border border-[#504945]/20 hover:border-[#fe8019]/30 transition-all group"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5 text-gruvbox-text/80 group-hover:text-[#fe8019]/80 transition-colors" />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/vikrant-sharma3/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-[#3c3836]/10 border border-[#504945]/20 hover:border-[#8ec07c]/30 transition-all group"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="w-5 h-5 text-gruvbox-text/80 group-hover:text-[#8ec07c]/80 transition-colors" />
                    </motion.a>
                    <motion.a
                      href="https://x.com/vik_5000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-[#3c3836]/10 border border-[#504945]/20 hover:border-[#d3869b]/30 transition-all group"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Twitter className="w-5 h-5 text-gruvbox-text/80 group-hover:text-[#d3869b]/80 transition-colors" />
                    </motion.a>
                    <motion.a
                      href="https://leetcode.com/u/vikr4nt_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-[#3c3836]/10 border border-[#504945]/20 hover:border-[#fb4934]/30 transition-all group"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Code2 className="w-5 h-5 text-gruvbox-text/80 group-hover:text-[#fb4934]/80 transition-colors" />
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
            <Card className="backdrop-blur-sm bg-[#3c3836]/10 border-[#504945]/20">
              <CardHeader>
                <CardTitle className="text-2xl text-gruvbox-green/80">Send a Message</CardTitle>
                <CardDescription className="text-gruvbox-text/60">
                  {"I'll get back to you as soon as possible"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gruvbox-text/80">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="bg-[#3c3836]/10 border-[#504945]/20 text-gruvbox-text/80 placeholder:text-gruvbox-text/40 focus:border-gruvbox-orange/30"
                        disabled={isSubmitting}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gruvbox-text/80">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="bg-[#3c3836]/10 border-[#504945]/20 text-gruvbox-text/80 placeholder:text-gruvbox-text/40 focus:border-gruvbox-orange/30"
                        disabled={isSubmitting}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gruvbox-text/80">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="bg-[#3c3836]/10 border-[#504945]/20 text-gruvbox-text/80 placeholder:text-gruvbox-text/40 focus:border-gruvbox-orange/30"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gruvbox-text/80">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      className="min-h-[150px] bg-[#3c3836]/10 border-[#504945]/20 text-gruvbox-text/80 placeholder:text-gruvbox-text/40 focus:border-gruvbox-orange/30 resize-none"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gruvbox-orange text-gruvbox-dark hover:bg-gruvbox-green hover:text-gruvbox-dark transition-colors"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
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
