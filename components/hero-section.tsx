"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "AI Engineer | Web Developer | DL Enthusiast"

  const { scrollY } = useScroll()

  // Very slow stretching effect - much larger scroll range for subtle stretching
  const nameScaleX = useTransform(scrollY, [0, 1200], [1, 1.8])
  const nameOpacity = useTransform(scrollY, [0, 800], [1, 0.3])

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
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-sm bg-[#3c3836]/10 border border-[#504945]/20 rounded-2xl p-12 max-w-4xl mx-auto"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#504945]/20 shadow-2xl">
                <img
                  src="/professional/navo pfp.png"
                  alt="Vikrant Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Very Slowly Stretching Name */}
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gruvbox-orange/80 to-gruvbox-green/80 bg-clip-text text-transparent overflow-hidden"
            style={{
              scaleX: nameScaleX,
              opacity: nameOpacity,
              transformOrigin: "center",
            }}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Vikrant Sharma
          </motion.h1>

          <div className="h-16 mb-8 sm:mb-8 md:mb-8 lg:mb-8">
            <motion.p
              className="text-2xl md:text-3xl text-gruvbox-text/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                className="text-gruvbox-orange/60"
              >
                |
              </motion.span>
            </motion.p>
          </div>

          <motion.div
            className="flex gap-4 justify-center flex-wrap mt-12 sm:mt-12 md:mt-8 lg:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Button
              variant="glass"
              size="lg"
              className="hover:scale-105 transition-transform"
              whileHover={{ rotate: [0, -2, 2, 0] }}
              onClick={scrollToProjects}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              className="bg-[#8ec07c] text-gruvbox-dark hover:bg-[#b8bb26] hover:text-gruvbox-dark hover:scale-105 transition-all border-0"
              asChild
            >
              <a href="https://drive.google.com/drive/folders/1fZ9n6fuGvmd5OpIhHv2JGFDYwbKwnmb5?usp=sharing" target="_blank" rel="noopener noreferrer">
                Download Resume
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
        <ChevronDown className="w-8 h-8 text-gruvbox-orange" />
      </motion.div>
    </section>
  )
}
