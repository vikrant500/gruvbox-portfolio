"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Sharanya Care Website and HMS",
    description: "Revamped healthcare website with enhanced UI/UX and integrated Hospital Management System",
    image: "/professional/sharanya care.png",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://sharanyacare.com/",
    isWebsite: true,
    // live: "https://sharanyacare.com/",
  },
  {
    id: 2,
    title: "Infinity Gate: AI based Visual Novel",
    description: "AI-driven visual novel with unique playthroughs based on user-selected genres and themes",
    image: "/professional/infinity gate.png",
    tags: ["Gemini", "Django", "Python", "React", "Vite", "PostgreSQL"],
    github: "https://github.com/AyanBoii/infinity-gate_engine",
    isWebsite: false,
    // live: "#",
  },
  {
    id: 3,
    title: "Smart Notes App with Generative AI",
    description: "AI-powered notes app with LaTeX rendering and automated equation solving capabilities",
    image: "/professional/note_ai.png",
    tags: ["Gemini", "FastAPI", "Python", "React", "Vite", "MathJax"],
    github: "https://github.com/vikrant500/SmartNotes_api",
    isWebsite: false,
    // live: "#",
  },
  {
    id: 4,
    title: "Itadaki Masu: AI Smart Kitchen",
    description: "AI-powered recipe generator with food detection model and locally hosted LLAMA LLM",
    image: "/professional/itadaki masu.jpg",
    tags: ["LLAMA", "Gemini", "FastAPI", "Python", "React", "AWS"],
    github: "https://github.com/AyanBoii/itadaki-masu",
    isWebsite: false,
    // live: "#",
  },
  {
    id: 5,
    title: "ICARUS: Adaptive Learning Platform",
    description: "Web extension that enhances reading for neurodiverse students with AI-powered features",
    image: "/professional/icarus.png",
    tags: ["Gemini", "Python", "React", "Tailwind"],
    github: "https://github.com/vikrant500/Icarus_HackX24",
    isWebsite: false,
    // live: "#",
  },
  {
    id: 6,
    title: "Gruvbox Portfolio Website",
    description: "Responsive portfolio with smooth animations and glassmorphism effects",
    image: "/professional/portfolio.png",
    tags: ["React", "Framer Motion", "Tailwind", "TypeScript"],
    github: "#",
    isWebsite: false,
    // live: "#",
  },
]

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="projects" ref={containerRef} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-gruvbox-orange">Featured Projects</h2>
          <p className="text-xl text-gruvbox-text/70">A showcase of my recent work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6}}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              className="group"
            >
              <Card className="backdrop-blur-lg bg-[#3c3836]/30 border-[#504945]/30 hover:border-gruvbox-orange/50 transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-top transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gruvbox-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <CardTitle className="text-gruvbox-text group-hover:text-gruvbox-orange transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gruvbox-text/70">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-gruvbox-green/20 text-gruvbox-green border border-gruvbox-green/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {/* Commented out Live Demo button for future use */}
                    {/* <Button variant="glass" size="sm" className="flex-1" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button> */}
                    <Button variant="glass" size="sm" className="w-full" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        {project.isWebsite ? (
                          <>
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Visit Website
                          </>
                        ) : (
                          <>
                            <Github className="w-4 h-4 mr-2" />
                            View on GitHub
                          </>
                        )}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
