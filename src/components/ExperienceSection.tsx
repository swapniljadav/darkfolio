'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Experience {
  company: string
  role: string
  duration: string
  description: string
  icon?: string
}

export default function ExperienceSection() {
  const [experience, setExperience] = useState<Experience[]>([])

  useEffect(() => {
    fetch('/api/experience')
      .then((res) => res.json())
      .then((data) => setExperience(data))
  }, [])

  return (
    <section id="experience" className="w-full px-6 py-20 relative text-left overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-sora font-bold mb-10 text-center">Experience</h2>

      <div className="flex flex-col gap-8 max-w-4xl mx-auto">
        {experience.map((exp, index) => {
          const LucideIcon = (Icons[exp.icon as keyof typeof Icons] || Icons.Briefcase) as LucideIcon

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-md shadow-md text-white"
            >
              <div className="p-2 rounded-full bg-white/10">
                <LucideIcon className="w-6 h-6 text-purple-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <p className="text-sm text-purple-300">{exp.company} • {exp.duration}</p>
                <p className="text-sm text-gray-300 mt-2 whitespace-pre-line">{exp.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
