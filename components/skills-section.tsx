"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const skills = [
  // Languages
  { name: "Java", level: 60, category: "language", color: "gruvbox-orange" },
  { name: "Python", level: 85, category: "language", color: "gruvbox-green" },
  { name: "C/C++", level: 90, category: "language", color: "gruvbox-purple" },
  { name: "SQL (Postgres)", level: 80, category: "language", color: "gruvbox-orange" },
  { name: "JavaScript", level: 85, category: "language", color: "gruvbox-green" },
  { name: "TypeScript", level: 85, category: "language", color: "gruvbox-purple" },
  { name: "HTML/CSS", level: 95, category: "language", color: "gruvbox-orange" },
  { name: "Lua", level: 60, category: "language", color: "gruvbox-green" },
  { name: "Embedded C", level: 60, category: "language", color: "gruvbox-purple" },

  // Frameworks
  { name: "React", level: 80, category: "framework", color: "gruvbox-orange" },
  { name: "Node.js", level: 80, category: "framework", color: "gruvbox-green" },
  { name: "Django", level: 80, category: "framework", color: "gruvbox-purple" },
  { name: "FastAPI", level: 85, category: "framework", color: "gruvbox-orange" },

  // Developer Tools
  { name: "Git", level: 90, category: "tools", color: "gruvbox-green" },
  { name: "Docker", level: 60, category: "tools", color: "gruvbox-purple" },
  { name: "Excel", level: 90, category: "tools", color: "gruvbox-orange" },
  { name: "Jupyter", level: 90, category: "tools", color: "gruvbox-green" },
  { name: "MongoDB", level: 80, category: "tools", color: "gruvbox-purple" },
  { name: "Anaconda", level: 90, category: "tools", color: "gruvbox-orange" },
  { name: "WSL", level: 75, category: "tools", color: "gruvbox-green" },
  { name: "Nvim", level: 90, category: "tools", color: "gruvbox-purple" },
  { name: "Matlab", level: 60, category: "tools", color: "gruvbox-orange" },
  { name: "AWS", level: 70, category: "tools", color: "gruvbox-green" },
  { name: "LLAMA", level: 75, category: "tools", color: "gruvbox-purple" },
  { name: "Arduino", level: 90, category: "tools", color: "gruvbox-orange" },
  { name: "Raspberry Pi", level: 75, category: "tools", color: "gruvbox-green" },

  // Libraries
  { name: "Pandas", level: 75, category: "library", color: "gruvbox-orange" },
  { name: "NumPy", level: 75, category: "library", color: "gruvbox-green" },
  { name: "Matplotlib", level: 72, category: "library", color: "gruvbox-purple" },
  { name: "PyTorch", level: 75, category: "library", color: "gruvbox-orange" },
  { name: "scikit-learn", level: 80, category: "library", color: "gruvbox-green" },
  { name: "TensorFlow", level: 75, category: "library", color: "gruvbox-purple" },
]

const categories = {
  language: "Languages",
  framework: "Frameworks",
  tools: "Developer Tools",
  library: "Libraries",
}

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredSkills = selectedCategory ? skills.filter((skill) => skill.category === selectedCategory) : skills

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-gruvbox-green/90">Skills & Technologies</h2>
          <p className="text-xl text-gruvbox-text/60">My technical expertise</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-sm bg-[#3c3836]/10 border border-[#504945]/20 rounded-2xl p-8"
        >
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === null
                  ? "bg-gruvbox-orange/80 text-gruvbox-dark"
                  : "bg-[#3c3836]/10 text-gruvbox-text/80 hover:bg-gruvbox-orange/10 border border-[#504945]/20"
              }`}
            >
              All
            </button>
            {Object.entries(categories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === key
                    ? "bg-gruvbox-orange/80 text-gruvbox-dark"
                    : "bg-[#3c3836]/10 text-gruvbox-text/80 hover:bg-gruvbox-orange/10 border border-[#504945]/20"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(254, 128, 25, 0.1)",
                }}
                transition={{ 
                  duration: 0.2, 
                  ease: "easeOut",
                  default: { duration: 0.4 }
                }}
                className="backdrop-blur-sm bg-[#3c3836]/10 rounded-xl p-4 border border-[#504945]/20 hover:border-gruvbox-orange/30 transition-all duration-200 ease-out cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-semibold text-gruvbox-text/80 group-hover:text-gruvbox-orange/80 transition-colors duration-200">
                    {skill.name}
                  </h3>
                  <span className="text-xs text-gruvbox-text/60">{skill.level}%</span>
                </div>

                <div className="w-full bg-[#3c3836]/20 rounded-full h-1.5 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r from-gruvbox-orange/60 to-gruvbox-green/60 rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1}}
                    viewport={{ once: true }}
                  />
                </div>

                <motion.div 
                  className="mt-1 text-xs text-gruvbox-text/60 capitalize transition-colors duration-200" 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {categories[skill.category as keyof typeof categories]}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
