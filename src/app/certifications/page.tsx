import Navigation from '@/components/Navigation/Navigation'
import Container from '@/components/ui/Container'
import CertificationCard from '@/components/CertificationCard/CertificationCard'
import Footer from '@/components/Footer/Footer'
import { certifications } from '@/data/certifications'
import { motion } from 'framer-motion'
import { useState } from 'react'

const categories = ['all', 'security', 'development', 'data', 'cloud'] as const

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

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>('all')

  const filteredCertifications = selectedCategory === 'all'
    ? certifications
    : certifications.filter(cert => cert.category === selectedCategory)

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
            Professional Certifications
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of my professional certifications spanning cybersecurity, cloud computing,
            software development, and data science.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCertifications.map((certification, index) => (
            <motion.div
              key={certification.id}
              variants={itemVariants}
              custom={index}
            >
              <CertificationCard certification={certification} />
            </motion.div>
          ))}
        </motion.div>

        {filteredCertifications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400">
              No certifications found for the selected category.
            </p>
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
            <span>Total Certifications: <strong className="text-primary-600 dark:text-primary-400">{certifications.length}</strong></span>
            <span>•</span>
            <span>Categories: <strong className="text-primary-600 dark:text-primary-400">{categories.length - 1}</strong></span>
          </div>
        </motion.div>
      </Container>

      <Footer />
    </div>
  )
}