"use client"

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
            Professional Certifications
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A collection of my professional certifications spanning cybersecurity, cloud computing,
            software development, and data science.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${selectedCategory === category
                ? 'bg-primary-600 border-primary-600 text-white shadow-lg shadow-primary-900/20'
                : 'bg-white dark:bg-transparent border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-primary-500 dark:hover:border-white/30 hover:text-primary-600 dark:hover:text-white'
                }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="visible"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
            className="text-center py-20 bg-white dark:bg-premium-gray rounded-2xl border border-gray-200 dark:border-white/5"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No certifications found for the selected category.
            </p>
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
            <span>Total Certifications: <strong className="text-gray-900 dark:text-white ml-2">{certifications.length}</strong></span>
            <span className="text-gray-300 dark:text-white/20">•</span>
            <span>Categories: <strong className="text-gray-900 dark:text-white ml-2">{categories.length - 1}</strong></span>
          </div>
        </motion.div>
      </Container>

      <Footer />
    </div>
  )
}