"use client"

import Navigation from '@/components/Navigation/Navigation'
import Container from '@/components/ui/Container'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import Footer from '@/components/Footer/Footer'
import { featuredProjects, defaultProjects } from '@/data/projects'
import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { FaGithub, FaSearch } from 'react-icons/fa'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Projects() {
  const allProjects = [...featuredProjects, ...defaultProjects]
  const [filter, setFilter] = useState<'all' | 'featured'>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProjects = useMemo(() => {
    let filtered = allProjects

    if (filter === 'featured') {
      filtered = filtered.filter(project => project.featured)
    }

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    return filtered
  }, [allProjects, filter, searchTerm])

  const allTechnologies = useMemo(() => {
    const techs = new Set<string>()
    allProjects.forEach(project => {
      project.technologies.forEach(tech => techs.add(tech))
    })
    return Array.from(techs).sort()
  }, [allProjects])

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
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            A collection of my software development projects, including full-stack applications,
            data analysis tools, and cybersecurity utilities.
          </p>

          <div className="flex justify-center">
            <a
              href="https://github.com/ManziniArchives"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
            >
              <FaGithub className="w-5 h-5 mr-2" />
              View GitHub Profile
            </a>
          </div>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white dark:bg-premium-gray border border-gray-200 dark:border-white/5 p-4 rounded-2xl shadow-sm dark:shadow-none">
            <div className="flex gap-2 bg-gray-100 dark:bg-black/20 p-1 rounded-xl">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${filter === 'all'
                  ? 'bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/5'
                  }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('featured')}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${filter === 'featured'
                  ? 'bg-white dark:bg-white/10 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/5'
                  }`}
              >
                Featured
              </button>
            </div>

            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-80 px-4 py-2.5 pl-11 bg-gray-100 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-gray-900 dark:text-white placeholder-gray-500 transition-all"
              />
              <FaSearch className="absolute left-4 top-3.5 text-gray-500" />
            </div>
          </div>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2 mt-6 justify-center md:justify-start">
            {allTechnologies.slice(0, 10).map((tech) => (
              <button
                key={tech}
                onClick={() => setSearchTerm(tech)}
                className="px-3 py-1 text-xs font-medium bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/5 rounded-full hover:bg-primary-50 dark:hover:bg-primary-500/10 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-200 dark:hover:border-primary-500/20 transition-all duration-200"
              >
                {tech}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="visible"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              custom={index}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white dark:bg-premium-gray rounded-2xl border border-gray-200 dark:border-white/5"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-6">
              No projects found matching your criteria.
            </p>
            <button
              onClick={() => {
                setFilter('all')
                setSearchTerm('')
              }}
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 text-center border-t border-gray-200 dark:border-white/5 pt-12"
        >
          <div className="inline-flex items-center space-x-8 text-sm text-gray-500 uppercase tracking-widest">
            <span>Total Projects: <strong className="text-gray-900 dark:text-white ml-2">{allProjects.length}</strong></span>
            <span className="text-gray-300 dark:text-white/20">•</span>
            <span>Featured: <strong className="text-gray-900 dark:text-white ml-2">{allProjects.filter(p => p.featured).length}</strong></span>
          </div>
        </motion.div>
      </Container>

      <Footer />
    </div>
  )
}