"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { ChevronLeft, ChevronRight, Award, Code, Briefcase, GraduationCap, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Skeleton } from "@/components/ui/skeleton"

const aboutData = [
  {
    id: 1,
    title: "The Beginning",
    subtitle: "My Journey into Tech",
    image: "/professional/judge behas.jpeg",
    description:
      "My fascination with technology began at age 11, when I wrote my first line of code in QBasic. What started as curiosity about how websites work soon became a passion for building seamless, interactive digital experiences.",
    highlights: [
      "First coded in QBasic at age 11",
      "Built early websites using HTML & CSS",
      "Developed a love for problem-solving and user experience",
      "Maintained a 150+ day LeetCode streak",
    ],
    icon: <Code className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Academic Excellence",
    subtitle: "Education & Learning",
    image: "/professional/dean's list.jpeg",
    description:
      "Currently pursuing B.Tech. in Computer Science Engineering (Honours in IoT) at Manipal University Jaipur, I've consistently aimed for real-world impact beyond the classroom. My commitment to academic excellence earned me a place on the Dean's List.",
    highlights: [
      "B.Tech. CSE (Honours in IoT), Manipal University Jaipur (CGPA: 8.5+)",
      "Dean's List for Academic Excellence",
      "Certifications in Data Science and Machine Learning (IBM, Google)",
      "Guided by inspiring mentors in DSA, AI/ML, and Embedded Systems",
    ],
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Professional Growth",
    subtitle: "Career Milestones",
    image: "/professional/navo pod.png",
    description:
      "My professional journey is defined by hands-on experience in both engineering and leadership. As a MERN Stack Developer at Agilus Labs, I led the Sharanya Care website revamp and HMS integration.",
    highlights: [
      "Led Sharanya Care's website revamp and HMS integration at Agilus Labs",
      "Developed AI-powered projects: Smart Notes App, Itadaki Masu, Infinity Gate, ICARUS",
      "Convened Navonmesh 2024, managing 100+ team members and 500+ participants",
      "Mentored juniors and represented LITMUS at national MUN conferences",
    ],
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Achievements & Recognition",
    subtitle: "Milestones & Awards",
    image: "/professional/navo award.jpeg",
    description:
      "My dedication to excellence has been recognized through academic honors, leadership roles, and competitive achievements. These milestones reflect my commitment to continuous growth and innovation.",
    highlights: [
      "Dean's List for Academic Excellence, MUJ",
      "Vice Chairperson, UNGA Legal at Indian Summit 2024 (MNIT Jaipur)",
      "Under Secretary General, MUJMUN 11.0",
      "Smart India Hackathon 2024: Top 50 out of 250+ teams (Project Aegis)",
      "HackX MUJ Hackathon: Top 50 out of 350+ teams (Project ICARUS)",
    ],
    icon: <Award className="w-6 h-6" />,
  },
  {
    id: 5,
    title: "Current Focus",
    subtitle: "Present & Future",
    image: "/professional/navo pod nc new.png",
    description:
      "I am currently focused on leveraging AI and full-stack development to create impactful solutions in education, healthcare, and accessibility. As Technical Secretary of LITMUS, I continue to mentor peers and build innovative projects.",
    highlights: [
      "Building AI-driven platforms for learning and healthcare",
      "Mentoring and leading technical teams at LITMUS",
      "Pursuing advanced roles in AI, web development, and product engineering",
      "Committed to continuous learning, leadership, and societal impact",
    ],
    icon: <Target className="w-6 h-6" />,
  },
]

export function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: string]: boolean }>({})
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const controls = useAnimation()

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  // Preload images
  useEffect(() => {
    aboutData.forEach((item) => {
      const img = new window.Image()
      img.src = item.image
      img.onload = () => {
        setImagesLoaded(prev => ({ ...prev, [item.image]: true }))
      }
    })
  }, [])

  // Touch handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % aboutData.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % aboutData.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + aboutData.length) % aboutData.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const currentData = aboutData[currentSlide]

  return (
    <section className="py-12 px-4 flex items-center">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 text-gruvbox-green/90">About Me</h2>
          <p className="text-xl text-gruvbox-text/60">My journey, achievements, and passion for technology</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-sm bg-[#3c3836]/10 border border-[#504945]/20 rounded-2xl overflow-hidden"
        >
          <div 
            className="grid grid-cols-1 lg:grid-cols-2 h-[900px] lg:h-[600px] md:h-[800px] sm:h-[700px]"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Image Carousel */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-full"
                >
                  {!imagesLoaded[currentData.image] ? (
                    <Skeleton className="w-full h-full" />
                  ) : (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="relative w-full h-full lg:w-full lg:h-full sm:w-[120%] sm:h-[120%] md:w-[110%] md:h-[110%]">
                        <Image
                          src={currentData.image}
                          alt={currentData.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={currentSlide === 0}
                          className="object-cover object-center lg:object-cover sm:object-contain md:object-cover"
                          quality={90}
                        />
                      </div>
                    </div>
                  )}

                  {/* Desktop Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 hidden lg:block">
                    <div className="backdrop-blur-sm bg-[#3c3836]/40 rounded-lg p-4 border border-[#504945]/20">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-full bg-[#3c3836]/10 border border-[#504945]/20">
                          {currentData.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gruvbox-text/80">{currentData.title}</h3>
                          <p className="text-sm text-gruvbox-orange/80">{currentData.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows - Hidden on mobile */}
              <Button
                variant="glass"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 hidden lg:flex backdrop-blur-sm bg-[#3c3836]/10 border-[#504945]/20"
                onClick={prevSlide}
              >
                <ChevronLeft className="w-5 h-5 text-gruvbox-text/80" />
              </Button>
              <Button
                variant="glass"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 hidden lg:flex backdrop-blur-sm bg-[#3c3836]/10 border-[#504945]/20"
                onClick={nextSlide}
              >
                <ChevronRight className="w-5 h-5 text-gruvbox-text/80" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6 lg:p-8 flex flex-col justify-center overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gruvbox-orange/80 mb-2">{currentData.title}</h3>
                    <p className="text-base lg:text-lg text-gruvbox-green/80 font-medium">{currentData.subtitle}</p>
                  </div>

                  <p className="text-gruvbox-text/60 leading-relaxed text-sm lg:text-base">{currentData.description}</p>

                  <div className="space-y-3">
                    <h4 className="text-lg lg:text-xl font-semibold text-gruvbox-text/80">Key Highlights</h4>
                    <div className="grid gap-2">
                      {currentData.highlights.map((highlight, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-gruvbox-orange/60 mt-2 flex-shrink-0" />
                          <span className="text-gruvbox-text/60 text-sm lg:text-base leading-relaxed">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center items-center gap-2 p-4 border-t border-[#504945]/20">
            {aboutData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-gruvbox-orange/80 scale-125" : "bg-[#3c3836]/20 hover:bg-gruvbox-orange/30"
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="h-1 bg-[#3c3836]/20">
            <motion.div
              className="h-full bg-gradient-to-r from-gruvbox-orange/60 to-gruvbox-green/60"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentSlide + 1) / aboutData.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        >
          {[
            { label: "Years Experience", value: "2+", color: "gruvbox-orange" },
            { label: "Projects Completed", value: "15+", color: "gruvbox-green" },
            { label: "Day LeetCode Streak", value: "150+", color: "gruvbox-purple" },
          ].map((stat, index) => (
            <Card key={index} className="backdrop-blur-sm bg-[#3c3836]/10 border-[#504945]/20 text-center">
              <CardContent className="p-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`text-3xl font-bold ${stat.color === "gruvbox-purple" ? "text-[#d3869b]" : `text-${stat.color}/80`} mb-2`}
                >
                  {stat.value}
                </motion.div>
                <p className="text-gruvbox-text/60 text-sm">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
