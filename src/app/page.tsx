import Navigation from '@/components/Navigation/Navigation'
import Hero from '@/components/Hero/Hero'
import Footer from '@/components/Footer/Footer'
import { personalInfo } from '@/data/personalInfo'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

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
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      {/* About Me Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center">
              {personalInfo.about}
            </p>

            <div className="flex justify-center space-x-6 mt-12">
              <Link
                href="https://github.com/ManziniArchives"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com/in/musawenkosi-manzini"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:manziniarchives@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                <FaEnvelope className="w-6 h-6" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Explore My Work
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/certifications"
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 text-center group"
              >
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Certifications
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  View my professional certifications
                </p>
              </Link>

              <Link
                href="/projects"
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 text-center group"
              >
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Projects
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Explore my GitHub projects
                </p>
              </Link>

              <Link
                href="/skills"
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 text-center group"
              >
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Skills
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Technologies I work with
                </p>
              </Link>

              <Link
                href="/contact"
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 text-center group"
              >
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Contact
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
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