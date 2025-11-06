import Navigation from '@/components/Navigation/Navigation'
import Container from '@/components/ui/Container'
import SkillBadge from '@/components/SkillBadge/SkillBadge'
import Footer from '@/components/Footer/Footer'
import { skills } from '@/data/skills'
import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'

const categories = [
  { value: 'all', label: 'All Skills', icon: '🎯' },
  { value: 'language', label: 'Programming Languages', icon: '💻' },
  { value: 'frontend', label: 'Frontend', icon: '🎨' },
  { value: 'backend', label: 'Backend', icon: '⚙️' },
  { value: 'database', label: 'Databases', icon: '🗄️' },
  { value: 'tools', label: 'Tools & Others', icon: '🛠️' },
]

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

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState<'name' | 'proficiency'>('proficiency')

  const filteredSkills = useMemo(() => {
    let filtered = selectedCategory === 'all'
      ? skills
      : skills.filter(skill => skill.category === selectedCategory)

    return filtered.sort((a, b) => {
      if (sortBy === 'proficiency') {
        return b.proficiency - a.proficiency
      } else {
        return a.name.localeCompare(b.name)
      }
    })
  }, [selectedCategory, sortBy])

  const stats = useMemo(() => {
    const totalSkills = skills.length
    const expertSkills = skills.filter(s => s.proficiency >= 4).length
    const categories = [...new Set(skills.map(s => s.category))].length
    const avgProficiency = (skills.reduce((sum, s) => sum + s.proficiency, 0) / totalSkills).toFixed(1)

    return { totalSkills, expertSkills, categories, avgProficiency }
  }, [])

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
            Technical Skills
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains including
            programming languages, frameworks, databases, and development tools.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {stats.totalSkills}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Total Skills</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {stats.expertSkills}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Expert Level</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {stats.categories}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Categories</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
              {stats.avgProficiency}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Avg. Proficiency</div>
          </div>
        </motion.div>

        {/* Filters and Sort */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.value
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Sort by:
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'proficiency')}
                className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-900 dark:text-white"
              >
                <option value="proficiency">Proficiency</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              custom={index}
            >
              <SkillBadge skill={skill} />
            </motion.div>
          ))}
        </motion.div>

        {/* No Skills Found */}
        {filteredSkills.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-600 dark:text-gray-400">
              No skills found for the selected category.
            </p>
          </motion.div>
        )}

        {/* Proficiency Legend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Proficiency Scale
          </h3>
          <div className="grid md:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((level) => {
              const labels = {
                1: 'Beginner',
                2: 'Novice',
                3: 'Intermediate',
                4: 'Advanced',
                5: 'Expert',
              }
              return (
                <div key={level} className="text-center">
                  <div className="flex justify-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div
                        key={star}
                        className={`w-3 h-3 mx-0.5 rounded ${
                          star <= level ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {labels[level as keyof typeof labels]}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Level {level}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </Container>
    </div>
  )
}