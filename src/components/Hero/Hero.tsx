"use client"

import { personalInfo } from '@/data/personalInfo'
import ProfileImage from './ProfileImage'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 pt-16">
      <div className="container">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <ProfileImage />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mt-8 mb-4"
            variants={itemVariants}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-medium text-gradient mb-6"
            variants={itemVariants}
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
            variants={itemVariants}
          >
            {personalInfo.intro}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <Button
              href="/projects"
              variant="primary"
              className="w-full sm:w-auto"
            >
              View My Work
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="w-full sm:w-auto"
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
            variants={itemVariants}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">
                {personalInfo.stats.yearsOfExperience}
              </div>
              <div className="text-gray-600 dark:text-gray-400 mt-2">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">
                {personalInfo.stats.certifications}
              </div>
              <div className="text-gray-600 dark:text-gray-400 mt-2">
                Certifications
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">
                {personalInfo.stats.projects}+
              </div>
              <div className="text-gray-600 dark:text-gray-400 mt-2">
                Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">
                {personalInfo.stats.technologies}+
              </div>
              <div className="text-gray-600 dark:text-gray-400 mt-2">
                Technologies
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}