"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Terra Nova Global",
    description: "Advisory firm specializing in UAE Golden Visa services for investors, professionals, and families",
    image: "/professional/pro_terra_nova.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    github: "https://www.terra-nova.global/",
    isWebsite: true,
  },
  {
    id: 2,
    title: "Sharanya Care Website and HMS",
    description: "Revamped healthcare website with enhanced UI/UX and integrated Hospital Management System",
    image: "/professional/sharanya care.png",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://sharanyacare.com/",
    isWebsite: true,
  },
  {
    id: 3,
    title: "Infinity Gate: AI based Visual Novel",
    description: "AI-driven visual novel with unique playthroughs based on user-selected genres and themes",
    image: "/professional/infinity gate.png",
    tags: ["Gemini", "Django", "Python", "React", "Vite", "PostgreSQL"],
    github: "https://github.com/AyanBoii/infinity-gate_engine",
    isWebsite: false,
  },
  {
    id: 4,
    title: "Smart Notes App with Generative AI",
    description: "AI-powered notes app with LaTeX rendering and automated equation solving capabilities",
    image: "/professional/note_ai.png",
    tags: ["Gemini", "FastAPI", "Python", "React", "Vite", "MathJax"],
    github: "https://github.com/vikrant500/SmartNotes_api",
    isWebsite: false,
  },
  {
    id: 5,
    title: "Itadaki Masu: AI Smart Kitchen",
    description: "AI-powered recipe generator with food detection model and locally hosted LLAMA LLM",
    image: "/professional/itadaki masu.jpg",
    tags: ["LLAMA", "Gemini", "FastAPI", "Python", "React", "AWS"],
    github: "https://github.com/AyanBoii/itadaki-masu",
    isWebsite: false,
  },
  {
    id: 6,
    title: "ICARUS: Adaptive Learning Platform",
    description: "Web extension that enhances reading for neurodiverse students with AI-powered features",
    image: "/professional/icarus_image.png",
    tags: ["Gemini", "Python", "React", "Tailwind"],
    github: "https://github.com/vikrant500/Icarus_HackX24",
    isWebsite: false,
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
    <section id="projects" ref={containerRef} className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-dracula-purple to-dracula-pink bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-dracula-foreground/70">A showcase of my recent work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              className="group"
            >
              <Card className="backdrop-blur-lg bg-dracula-current/50 border-dracula-purple/30 hover:border-dracula-pink hover:shadow-xl hover:shadow-dracula-purple/20 transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dracula-darker/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <CardTitle className="text-dracula-foreground group-hover:text-dracula-pink transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-dracula-foreground/70">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-dracula-purple/20 text-dracula-cyan border border-dracula-purple/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="glass"
                      size="sm"
                      className="w-full bg-dracula-purple/20 text-dracula-foreground border-2 border-dracula-purple hover:bg-dracula-purple hover:text-dracula-bg font-semibold shadow-md shadow-dracula-purple/30"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        {project.isWebsite ? (
                          <>
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Visit Us
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
