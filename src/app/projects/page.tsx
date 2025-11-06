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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <Navigation />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            A collection of my software development projects, including full-stack applications,
            data analysis tools, and cybersecurity utilities.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/ManziniArchives"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
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
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                All Projects ({allProjects.length})
              </button>
              <button
                onClick={() => setFilter('featured')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === 'featured'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                Featured ({allProjects.filter(p => p.featured).length})
              </button>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-80 px-4 py-2 pl-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {allTechnologies.slice(0, 10).map((tech) => (
              <button
                key={tech}
                onClick={() => setSearchTerm(tech)}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
              >
                {tech}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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
        )}

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-600 dark:text-gray-400">
              No projects found matching your criteria.
            </p>
            <button
              onClick={() => {
                setFilter('all')
                setSearchTerm('')
              }}
              className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
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
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center space-x-8 text-sm text-gray-600 dark:text-gray-400">
              <span>Total Projects: <strong className="text-primary-600 dark:text-primary-400">{projects.length}</strong></span>
              <span>•</span>
              <span>Featured: <strong className="text-primary-600 dark:text-primary-400">{projects.filter(p => p.featured).length}</strong></span>
              <span>•</span>
              <span>Total Stars: <strong className="text-primary-600 dark:text-primary-400">{projects.reduce((sum, p) => sum + (p.stars || 0), 0)}</strong></span>
            </div>
          </motion.div>
        )}
      </Container>

      <Footer />
    </div>
  )
}