"use client"

import Navigation from '@/components/Navigation/Navigation'
import Container from '@/components/ui/Container'
import SkillBadge from '@/components/SkillBadge/SkillBadge'
import Footer from '@/components/Footer/Footer'
import { skills } from '@/data/skills'
import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { FaCode, FaDatabase, FaServer, FaTools, FaCloud, FaShieldAlt } from 'react-icons/fa'

const categories = [
  { id: 'all', label: 'All Skills', icon: FaCode },
  { id: 'frontend', label: 'Frontend', icon: FaCode },
  { id: 'backend', label: 'Backend', icon: FaServer },
  { id: 'database', label: 'Database', icon: FaDatabase },
  { id: 'devops', label: 'DevOps & Cloud', icon: FaCloud },
  { id: 'security', label: 'Security', icon: FaShieldAlt },
  { id: 'tools', label: 'Tools', icon: FaTools },
] as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]['id']>('all')
  const [sortBy, setSortBy] = useState<'proficiency' | 'experience' | 'name'>('proficiency')

  const filteredSkills = useMemo(() => {
    let filtered = selectedCategory === 'all'
      ? skills
      : skills.filter(skill => skill.category === selectedCategory)

    return filtered.sort((a, b) => {
      if (sortBy === 'proficiency') return b.proficiency - a.proficiency
      if (sortBy === 'experience') return parseInt(b.experience || '0') - parseInt(a.experience || '0')
      return a.name.localeCompare(b.name)
    })
  }, [selectedCategory, sortBy])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-premium-black text-gray-900 dark:text-white pt-24 pb-16">
      <Navigation />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Technical Skills
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise, tools, and technologies
            I've worked with throughout my career.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          <div className="bg-white dark:bg-premium-gray p-6 rounded-2xl border border-gray-200 dark:border-white/5 text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-500 mb-2">{skills.length}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total Skills</div>
          </div>
          <div className="bg-white dark:bg-premium-gray p-6 rounded-2xl border border-gray-200 dark:border-white/5 text-center">
            <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-500 mb-2">
              {skills.filter(s => s.proficiency >= 90).length}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Expert Level</div>
          </div>
          <div className="bg-white dark:bg-premium-gray p-6 rounded-2xl border border-gray-200 dark:border-white/5 text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-500 mb-2">
              {new Set(skills.map(s => s.category)).size}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Categories</div>
          </div>
          <div className="bg-white dark:bg-premium-gray p-6 rounded-2xl border border-gray-200 dark:border-white/5 text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-500 mb-2">5+</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Years Exp.</div>
          </div>
        </motion.div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                  : 'bg-white dark:bg-premium-gray text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-white/5'
                  }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 bg-white dark:bg-premium-gray p-1 rounded-xl border border-gray-200 dark:border-white/5">
            <span className="text-sm text-gray-500 dark:text-gray-400 px-3">Sort by:</span>
            {(['proficiency', 'experience', 'name'] as const).map((sort) => (
              <button
                key={sort}
                onClick={() => setSortBy(sort)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${sortBy === sort
                  ? 'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
              >
                {sort.charAt(0).toUpperCase() + sort.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="visible"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              layout
            >
              <SkillBadge skill={skill} />
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Legend */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-white/5 pt-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>Expert (90-100%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span>Advanced (75-89%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span>Intermediate (50-74%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
            <span>Beginner (0-49%)</span>
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  )
}