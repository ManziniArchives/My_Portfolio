"use client"

import Navigation from '@/components/Navigation/Navigation'
import Hero from '@/components/Hero/Hero'
import Footer from '@/components/Footer/Footer'
import { personalInfo } from '@/data/personalInfo'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope, FaGraduationCap, FaLaptopCode, FaTools, FaEnvelope as FaEnvelopeAlt } from 'react-icons/fa'

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-premium-black text-gray-900 dark:text-white">
      <Navigation />
      <Hero />

      {/* About Me Section */}
      <section className="py-32 bg-white dark:bg-premium-black">
        <div className="container">
          <motion.div
            variants={sectionVariants}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-center">
              {personalInfo.about}
            </p>

            <div className="flex justify-center space-x-8 mt-12">
              <Link
                href="https://github.com/ManziniArchives"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <FaGithub className="w-8 h-8" />
              </Link>
              <Link
                href="https://linkedin.com/in/musawenkosi-manzini"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <FaLinkedin className="w-8 h-8" />
              </Link>
              <Link
                href="mailto:manziniarchives@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                <FaEnvelope className="w-8 h-8" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-32 bg-gray-50 dark:bg-premium-gray">
        <div className="container">
          <motion.div
            variants={sectionVariants}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Explore My Work
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-xl">
                  Discover my projects, certifications, and technical skills.
                </p>
              </div>
              <Link href="/projects" className="hidden md:inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                View All Projects &rarr;
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/certifications"
                className="bg-white dark:bg-premium-black border border-gray-200 dark:border-white/5 p-8 rounded-xl hover:border-primary-500/50 dark:hover:border-white/20 shadow-sm dark:shadow-none transition-all duration-300 group"
              >
                <FaGraduationCap className="w-10 h-10 mb-6 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-white transition-colors" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Certifications
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-gray-400 transition-colors">
                  View my professional certifications
                </p>
              </Link>

              <Link
                href="/projects"
                className="bg-white dark:bg-premium-black border border-gray-200 dark:border-white/5 p-8 rounded-xl hover:border-primary-500/50 dark:hover:border-white/20 shadow-sm dark:shadow-none transition-all duration-300 group"
              >
                <FaLaptopCode className="w-10 h-10 mb-6 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-white transition-colors" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Projects
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-gray-400 transition-colors">
                  Explore my GitHub projects
                </p>
              </Link>

              <Link
                href="/skills"
                className="bg-white dark:bg-premium-black border border-gray-200 dark:border-white/5 p-8 rounded-xl hover:border-primary-500/50 dark:hover:border-white/20 shadow-sm dark:shadow-none transition-all duration-300 group"
              >
                <FaTools className="w-10 h-10 mb-6 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-white transition-colors" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Skills
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-gray-400 transition-colors">
                  Technologies I work with
                </p>
              </Link>

              <Link
                href="/contact"
                className="bg-white dark:bg-premium-black border border-gray-200 dark:border-white/5 p-8 rounded-xl hover:border-primary-500/50 dark:hover:border-white/20 shadow-sm dark:shadow-none transition-all duration-300 group"
              >
                <FaEnvelopeAlt className="w-10 h-10 mb-6 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-white transition-colors" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Contact
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-gray-400 transition-colors">
                  Get in touch with me
                </p>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}