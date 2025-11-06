import Navigation from '@/components/Navigation/Navigation'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Footer from '@/components/Footer/Footer'
import { personalInfo } from '@/data/personalInfo'
import { certifications } from '@/data/certifications'
import { skills } from '@/data/skills'
import { motion } from 'framer-motion'
import { FaDownload, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaUser } from 'react-icons/fa'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
    },
  },
}

export default function Resume() {
  const resumeUrl = "/resume/Musawenkosi-Manzini-Resume.pdf"

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
            Resume & CV
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Download my complete resume or view the key information below. Feel free to reach out
            if you'd like to discuss my qualifications in more detail.
          </p>

          <Button
            href={resumeUrl}
            download="Musawenkosi-Manzini-Resume.pdf"
            variant="primary"
            className="inline-flex items-center text-lg px-8 py-4"
          >
            <FaDownload className="mr-2" />
            Download Resume (PDF)
          </Button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Personal Information */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FaUser className="mr-3 text-primary-600 dark:text-primary-400" />
              Personal Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                  {personalInfo.name}
                </h3>
                <p className="text-lg text-primary-600 dark:text-primary-400 mb-4">
                  {personalInfo.title}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {personalInfo.about}
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <FaEnvelope className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400" />
                  <a href="mailto:manziniarchives@gmail.com" className="hover:text-primary-600 dark:hover:text-primary-400">
                    manziniarchives@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <FaPhone className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400" />
                  <a href="tel:+27760123729" className="hover:text-primary-600 dark:hover:text-primary-400">
                    +27 76 012 3729
                  </a>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <FaLinkedin className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400" />
                  <a
                    href="https://linkedin.com/in/musawenkosi-manzini"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    Musawenkosi Manzini
                  </a>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <FaGithub className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400" />
                  <a
                    href="https://github.com/ManziniArchives"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    ManziniArchives
                  </a>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <FaMapMarkerAlt className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400" />
                  <span>South Africa</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Professional Summary */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Summary
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Versatile Full-Stack Technology Specialist with over 4 years of experience spanning
              software development, cybersecurity, data science, and cloud computing. Proven ability
              to design, develop, and deploy robust software solutions while maintaining security
              best practices and optimizing performance. Strong foundation in modern web technologies
              with a passion for continuous learning and adapting to emerging technologies.
            </p>
          </motion.div>

          {/* Key Skills */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {['language', 'frontend', 'backend', 'database'].map((category) => {
                const categorySkills = skills.filter(s => s.category === category)
                if (categorySkills.length === 0) return null

                return (
                  <div key={category}>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3 capitalize">
                      {category === 'language' ? 'Programming Languages' : category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill) => (
                        <span
                          key={skill.name}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FaGraduationCap className="mr-3 text-primary-600 dark:text-primary-400" />
              Professional Certifications
            </h2>
            <div className="space-y-4">
              {certifications.slice(0, 6).map((cert) => (
                <div key={cert.id} className="border-l-4 border-primary-600 dark:border-primary-400 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              ))}
              {certifications.length > 6 && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  ... and {certifications.length - 6} more certifications
                </p>
              )}
            </div>
          </motion.div>

          {/* Projects Highlights */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FaBriefcase className="mr-3 text-primary-600 dark:text-primary-400" />
              Featured Projects
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary-600 dark:border-primary-400 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Football Management System
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  A scouting system for identifying young football talents with advanced analytics and reporting capabilities.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'MongoDB', 'Express'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-l-4 border-primary-600 dark:border-primary-400 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Professional Portfolio Website
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Modern personal portfolio built with Next.js, TypeScript, and Tailwind CSS featuring responsive design and optimized performance.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg p-8 border border-primary-200 dark:border-primary-700 text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm always open to discussing new opportunities, collaborations, or interesting projects.
              Feel free to reach out through my contact form or directly via email.
            </p>
            <div className="flex justify-center space-x-4">
              <Button href="/contact" variant="primary">
                Contact Me
              </Button>
              <Button href={resumeUrl} download variant="outline">
                <FaDownload className="mr-2" />
                Download Full Resume
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      <Footer />
    </div>
  )
}