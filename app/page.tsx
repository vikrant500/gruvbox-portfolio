"use client"
import { AnimatePresence } from "framer-motion"
import { ParticleBackground } from "@/components/particle-background"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProfessionalHighlightsSection } from "@/components/professional-highlights-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Portfolio() {
  return (
    <AnimatePresence>
      <div className="min-h-screen bg-dracula-bg text-dracula-foreground overflow-x-hidden">
        <ParticleBackground />
        <ScrollProgress />

        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ProfessionalHighlightsSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
      </div>
    </AnimatePresence>
  )
}
