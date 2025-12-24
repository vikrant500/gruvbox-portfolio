"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Award, Code, Briefcase, GraduationCap, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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
    <section className="py-12 md:py-20 px-4 flex items-center">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-dracula-purple to-dracula-pink bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-dracula-foreground/70">
            My journey, achievements, and passion for technology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-lg bg-dracula-current/50 border border-dracula-purple/30 rounded-2xl overflow-hidden shadow-xl shadow-dracula-purple/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:h-[600px]">
            {/* Image Carousel */}
            <div className="relative overflow-hidden h-64 lg:h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-full"
                >
                  <img
                    src={currentData.image || "/placeholder.svg"}
                    alt={currentData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-dracula-darker/60 to-transparent" />

                  {/* Image Overlay Info */}
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                    <div className="backdrop-blur-sm bg-dracula-current/80 rounded-lg p-3 md:p-4 border border-dracula-purple/30">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-full bg-dracula-purple/20 border border-dracula-purple/30">
                          {currentData.icon}
                        </div>
                        <div>
                          <h3 className="text-base md:text-lg font-semibold text-dracula-foreground">
                            {currentData.title}
                          </h3>
                          <p className="text-xs md:text-sm text-dracula-pink">{currentData.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <Button
                variant="glass"
                size="icon"
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-dracula-purple/30 border-dracula-purple hover:bg-dracula-purple hover:text-dracula-bg"
                onClick={prevSlide}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="glass"
                size="icon"
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-dracula-purple/30 border-dracula-purple hover:bg-dracula-purple hover:text-dracula-bg"
                onClick={nextSlide}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-4 md:p-6 lg:p-8 flex flex-col justify-center overflow-y-auto">
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
                    <h3 className="text-2xl lg:text-3xl font-bold text-dracula-purple mb-2">{currentData.title}</h3>
                    <p className="text-base lg:text-lg text-dracula-pink font-medium">{currentData.subtitle}</p>
                  </div>

                  <p className="text-dracula-foreground/80 leading-relaxed text-sm lg:text-base">
                    {currentData.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-lg lg:text-xl font-semibold text-dracula-foreground">Key Highlights</h4>
                    <div className="grid gap-2">
                      {currentData.highlights.map((highlight, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-dracula-purple mt-2 flex-shrink-0" />
                          <span className="text-dracula-foreground/90 text-sm lg:text-base leading-relaxed">
                            {highlight}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center items-center gap-2 p-4 border-t border-dracula-purple/30">
            {aboutData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-dracula-purple scale-125"
                    : "bg-dracula-selection hover:bg-dracula-purple/50"
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="h-1 bg-dracula-selection">
            <motion.div
              className="h-full bg-gradient-to-r from-dracula-purple to-dracula-pink"
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
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8"
        >
          {[
            { label: "Years Experience", value: "2+", color: "dracula-purple" },
            { label: "Projects Completed", value: "15+", color: "dracula-pink" },
            { label: "Day LeetCode Streak", value: "300+", color: "dracula-cyan" },
          ].map((stat, index) => (
            <Card
              key={index}
              className="backdrop-blur-sm bg-dracula-current/30 border-dracula-purple/30 text-center hover:border-dracula-purple hover:shadow-lg hover:shadow-dracula-purple/20 transition-all"
            >
              <CardContent className="p-4 md:p-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`text-2xl md:text-3xl font-bold text-${stat.color} mb-2`}
                >
                  {stat.value}
                </motion.div>
                <p className="text-dracula-foreground/70 text-xs md:text-sm">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
