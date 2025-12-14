"use client"

import Navigation from '@/components/Navigation/Navigation'
import Container from '@/components/ui/Container'
import Footer from '@/components/Footer/Footer'
import { motion } from 'framer-motion'
import { FaDownload, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaCode, FaProjectDiagram } from 'react-icons/fa'
import { personalInfo } from '@/data/personalInfo'
import { Button } from '@/components/ui/button'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-premium-black text-gray-900 dark:text-white pt-24 pb-16">
      <Navigation />

      <Container>
        {/* Header Section */}
        <motion.div
          initial="visible"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-xl text-primary-600 dark:text-primary-500 font-medium">
              {personalInfo.title}
            </p>
          </div>
          <Button
            asChild
            variant="default"
            className="flex items-center gap-2 shadow-lg shadow-primary-600/20"
          >
            <a href="/resume/Musawenkosi Manzini Resume..pdf" download target="_blank" rel="noopener noreferrer">
              <FaDownload />
              Download Resume
            </a>
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar (Left Column) */}
          <motion.div
            initial="visible"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="bg-white dark:bg-premium-gray p-6 rounded-2xl border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary-500 rounded-full"></span>
                Contact
              </h3>
              <div className="space-y-4">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <div className="p-2 bg-gray-100 dark:bg-black/20 rounded-lg text-primary-600 dark:text-primary-500">
                    <FaEnvelope />
                  </div>
                  <span className="text-sm break-all">{personalInfo.email}</span>
                </a>
                <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <div className="p-2 bg-gray-100 dark:bg-black/20 rounded-lg text-green-600 dark:text-green-500">
                    <FaPhone />
                  </div>
                  <span className="text-sm">{personalInfo.phone}</span>
                </a>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <div className="p-2 bg-gray-100 dark:bg-black/20 rounded-lg text-red-600 dark:text-red-500">
                    <FaMapMarkerAlt />
                  </div>
                  <span className="text-sm">Pretoria, South Africa</span>
                </div>
                <a href={`https://linkedin.com/in/${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <div className="p-2 bg-gray-100 dark:bg-black/20 rounded-lg text-blue-600 dark:text-blue-500">
                    <FaLinkedin />
                  </div>
                  <span className="text-sm">LinkedIn Profile</span>
                </a>
                <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <div className="p-2 bg-gray-100 dark:bg-black/20 rounded-lg text-purple-600 dark:text-purple-500">
                    <FaGithub />
                  </div>
                  <span className="text-sm">GitHub Profile</span>
                </a>
              </div>
            </div>

            {/* Skills Summary */}
            <div className="bg-white dark:bg-premium-gray p-6 rounded-2xl border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-secondary-500 rounded-full"></span>
                Key Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'SQL', 'AWS', 'Git', 'Tailwind CSS'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium border border-gray-200 dark:border-white/5">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white dark:bg-premium-gray p-6 rounded-2xl border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-green-500 rounded-full"></span>
                Languages
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">English</span>
                  <span className="text-xs px-2 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded">Native</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">Zulu</span>
                  <span className="text-xs px-2 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded">Native</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content (Right Column) */}
          <motion.div
            initial="visible"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Professional Summary */}
            <section className="bg-white dark:bg-premium-gray p-8 rounded-2xl border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <FaBriefcase className="text-primary-500" />
                Professional Summary
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {personalInfo.about}
              </p>
            </section>

            {/* Experience */}
            <section className="bg-white dark:bg-premium-gray p-8 rounded-2xl border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <FaProjectDiagram className="text-secondary-500" />
                Experience
              </h2>

              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-gray-200 dark:border-white/10">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary-500 border-4 border-white dark:border-premium-gray"></div>
                  <div className="mb-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Full Stack Developer</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">Freelance</p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2023 - Present</p>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Developed and deployed multiple full-stack applications using Next.js, React, and Node.js.</li>
                    <li>Implemented secure authentication systems and integrated third-party APIs.</li>
                    <li>Optimized application performance and ensured responsive design across devices.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="bg-white dark:bg-premium-gray p-8 rounded-2xl border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <FaGraduationCap className="text-green-500" />
                Education
              </h2>

              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-gray-200 dark:border-white/10">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 border-4 border-white dark:border-premium-gray"></div>
                  <div className="mb-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Diploma In Computer Science</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">Tshwane University Of Technology</p>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2023 - 2025</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Relevant coursework includes Software Programming, Mobile Device Programming,
                    Database Design and System Analysis.Actively participating in knowledge-sharing initiatives and projects to enhance technical
                    expertise and stay updated with industry needs.
                  </p>
                </div>
              </div>
            </section>

            {/* Certifications Highlight */}
            <section className="bg-white dark:bg-premium-gray p-8 rounded-2xl border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <FaCode className="text-purple-500" />
                Top Certifications
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Oracle Cloud Infrastructure 2025 Certified Developer Professional',
                  'Software Engineer (HackerRank)',
                  'Back End Development and APIs (freeCodeCamp)',
                  'Data Analytics Essentials (Credly)'
                ].map((cert, index) => (
                  <div key={index} className="p-4 bg-gray-50 dark:bg-black/20 rounded-xl border border-gray-200 dark:border-white/5 flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-200 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>
        </div>
      </Container>

      <Footer />
    </div>
  )
}