"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "AI Engineer | Web Developer | DL Enthusiast"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center z-10 w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-lg bg-dracula-current/50 border border-dracula-purple/30 rounded-2xl p-8 md:p-12 shadow-2xl shadow-dracula-purple/10"
        >
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-dracula-purple/50 shadow-2xl shadow-dracula-purple/20">
              <img
                src="/professional/navo pfp.png"
                alt="Vikrant Sharma"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-dracula-purple via-dracula-pink to-dracula-cyan bg-clip-text text-transparent">
            Vikrant Sharma
          </h1>

          <div className="h-12 md:h-16 mb-8">
            <motion.p
              className="text-xl md:text-3xl text-dracula-foreground/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                className="text-dracula-purple"
              >
                |
              </motion.span>
            </motion.p>
          </div>

          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Button
              variant="glass"
              size="lg"
              className="bg-dracula-purple/20 text-dracula-foreground border-2 border-dracula-purple hover:bg-dracula-purple hover:text-dracula-bg hover:scale-105 transition-all shadow-lg shadow-dracula-purple/30 font-semibold"
              onClick={scrollToProjects}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              className="bg-dracula-green text-dracula-bg hover:bg-dracula-cyan hover:scale-105 transition-all border-0 shadow-lg shadow-dracula-green/50 font-semibold"
            >
              <a href="https://drive.google.com/drive/folders/1fZ9n6fuGvmd5OpIhHv2JGFDYwbKwnmb5?usp=sharing" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown className="w-8 h-8 text-dracula-purple" />
      </motion.div>
    </section>
  )
}
