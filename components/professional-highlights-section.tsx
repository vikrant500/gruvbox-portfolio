"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Award, TrendingUp, Users, Sparkles, Trophy, Target } from "lucide-react"

const highlights = [
  {
    id: 1,
    image: "/professional/acc-logo.png",
    description: "Successfull College Placement At Accenture",
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: 2,
    image: "/professional/dean's list.jpeg",
    description: "Dean's List for Academic Excellence at Manipal University Jaipur",
    icon: <Award className="w-5 h-5" />,
  },
  {
    id: 3,
    image: "/professional/leetcode 2025.png",
    description: "Recieved the LeetCode yearly 2025 badge",
    icon: <Award className="w-5 h-5" />,
  },
  {
    id: 4,
    image: "/professional/infosys-logo.png",
    description: "Successfull College Placement At Infosys",
    icon: <Target className="w-5 h-5" />,
  },
  {
    id: 5,
    image: "/professional/UL-logo.png",
    description: "Completed Internship At University Living as a Full Stack Developer",
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    id: 6,
    image: "/professional/inlighn-logo.png",
    description: "Completed Internship At Inlighn Tech as an AIML intern",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    id: 7,
    image: "/professional/navo pod nc new.png",
    description: "Convened Navonmesh 2024, managing 100+ team members and 500+ participants",
    icon: <Users className="w-5 h-5" />,
  },
]

export function ProfessionalHighlightsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container || isPaused || isDragging) return

    const scrollSpeed = 1
    let animationId: number

    const scroll = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0
      } else {
        container.scrollLeft += scrollSpeed
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationId)
  }, [isPaused, isDragging])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0))
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0))
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const x = e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk
    }
  }

  // Duplicate highlights for seamless looping
  const duplicatedHighlights = [...highlights, ...highlights, ...highlights]

  return (
    <section className="py-12 md:py-20 px-0 overflow-hidden">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-dracula-purple to-dracula-pink bg-clip-text text-transparent">
            Professional Highlights
          </h2>
          <p className="text-lg md:text-xl text-dracula-foreground/70">Recent achievements and milestones</p>
        </motion.div>

        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false)
            setIsDragging(false)
          }}
          className="flex gap-4 md:gap-6 overflow-x-hidden cursor-grab active:cursor-grabbing select-none"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {duplicatedHighlights.map((highlight, index) => (
            <motion.div
              key={`${highlight.id}-${index}`}
              className="flex-shrink-0 w-[300px] md:w-[400px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="backdrop-blur-lg bg-dracula-current/50 border border-dracula-purple/30 rounded-xl overflow-hidden hover:border-dracula-pink hover:shadow-2xl hover:shadow-dracula-purple/30 transition-all duration-300 h-full">
                <div className="relative overflow-hidden h-40 md:h-48">
                  <img
                    src={highlight.image || "/placeholder.svg"}
                    alt={highlight.description}
                    className="w-full h-full object-cover"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dracula-darker via-dracula-darker/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 p-2 rounded-full bg-dracula-purple/80 backdrop-blur-sm border border-dracula-pink/30">
                    {highlight.icon}
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <p className="text-dracula-foreground text-sm md:text-base leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interaction Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-dracula-comment text-xs md:text-sm mt-4 md:mt-6 px-4"
        >
          Hover to pause • Drag to explore • Swipe on mobile
        </motion.p>
      </div>
    </section>
  )
}
