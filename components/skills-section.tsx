"use client"

import { motion } from "framer-motion"
import { Code2, Wrench, BookOpen, Package } from "lucide-react"

const skills = [
  // Languages
  { name: "Java", category: "language" },
  { name: "Python", category: "language" },
  { name: "C/C++", category: "language" },
  { name: "SQL (Postgres)", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "HTML/CSS", category: "language" },
  { name: "Lua", category: "language" },
  { name: "Embedded C", category: "language" },

  // Frameworks
  { name: "React", category: "framework" },
  { name: "Node.js", category: "framework" },
  { name: "Django", category: "framework" },
  { name: "FastAPI", category: "framework" },

  // Developer Tools
  { name: "Git", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Excel", category: "tools" },
  { name: "Jupyter", category: "tools" },
  { name: "MongoDB", category: "tools" },
  { name: "Anaconda", category: "tools" },
  { name: "WSL", category: "tools" },
  { name: "Nvim", category: "tools" },
  { name: "Matlab", category: "tools" },
  { name: "AWS", category: "tools" },
  { name: "LLAMA", category: "tools" },
  { name: "Arduino", category: "tools" },
  { name: "Raspberry Pi", category: "tools" },

  // Libraries
  { name: "Pandas", category: "library" },
  { name: "NumPy", category: "library" },
  { name: "Matplotlib", category: "library" },
  { name: "PyTorch", category: "library" },
  { name: "scikit-learn", category: "library" },
  { name: "TensorFlow", category: "library" },
]

const categories = [
  {
    id: "language",
    name: "Languages",
    icon: Code2,
    gradient: "from-purple-primary to-purple-accent",
  },
  {
    id: "framework",
    name: "Frameworks",
    icon: Package,
    gradient: "from-purple-light to-purple-primary",
  },
  {
    id: "tools",
    name: "Developer Tools",
    icon: Wrench,
    gradient: "from-purple-accent to-purple-violet",
  },
  {
    id: "library",
    name: "Libraries",
    icon: BookOpen,
    gradient: "from-purple-lavender to-purple-light",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-dracula-purple to-dracula-pink bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg md:text-xl text-dracula-foreground/70">
            My technical expertise across multiple domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, categoryIndex) => {
            const Icon = category.icon
            const categorySkills = skills.filter((skill) => skill.category === category.id)

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-lg bg-dracula-current/50 border border-dracula-purple/30 rounded-2xl p-4 md:p-6 hover:border-dracula-pink hover:shadow-lg hover:shadow-dracula-purple/20 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.gradient} bg-opacity-20`}>
                    <Icon className="w-6 h-6 text-dracula-foreground" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-dracula-foreground">{category.name}</h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(189, 147, 249, 0.2)",
                      }}
                      className="px-3 py-1.5 rounded-full bg-dracula-bg/50 border border-dracula-purple/30 hover:border-dracula-pink transition-all cursor-default"
                    >
                      <span className="text-xs md:text-sm text-dracula-foreground/90 font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Skill Count Badge */}
                <div className="mt-6 pt-4 border-t border-dracula-purple/30">
                  <span className="text-xs text-dracula-comment">
                    {categorySkills.length} {categorySkills.length === 1 ? "skill" : "skills"}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
