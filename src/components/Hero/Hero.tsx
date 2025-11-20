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
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-premium-black pt-20">
      <div className="container">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="visible"
          animate="visible"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div className="flex-1 text-center md:text-left" variants={itemVariants}>
              <h2 className="text-primary-600 dark:text-primary-500 font-medium tracking-wide uppercase mb-4">
                {personalInfo.title}
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl">
                {personalInfo.intro}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  href="/projects"
                  variant="custom"
                  className="w-full sm:w-auto bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 shadow-md hover:shadow-lg"
                >
                  View Selected Works
                </Button>
                <Button
                  href="/contact"
                  variant="custom"
                  className="w-full sm:w-auto border-2 border-gray-300 dark:border-white/20 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                >
                  Let's Talk
                </Button>
              </div>
            </motion.div>

            <motion.div className="flex-1 flex justify-center md:justify-end" variants={itemVariants}>
              <div className="relative">
                <div className="absolute inset-0 bg-primary-500 blur-3xl opacity-20 rounded-full"></div>
                <ProfileImage />
              </div>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-gray-200 dark:border-white/10 pt-12"
            variants={itemVariants}
          >
            <div className="text-center md:text-left">
              <div className="text-4xl font-bold text-gray-900 dark:text-white">
                {personalInfo.stats.yearsOfExperience}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider mt-2">
                Years Exp.
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-4xl font-bold text-gray-900 dark:text-white">
                {personalInfo.stats.certifications}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider mt-2">
                Certifications
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-4xl font-bold text-gray-900 dark:text-white">
                {personalInfo.stats.projects}+
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider mt-2">
                Projects
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-4xl font-bold text-gray-900 dark:text-white">
                {personalInfo.stats.technologies}+
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wider mt-2">
                Technologies
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}