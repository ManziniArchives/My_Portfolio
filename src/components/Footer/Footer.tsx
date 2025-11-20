"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { personalInfo } from '@/data/personalInfo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/5 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white tracking-tight">Musawenkosi Manzini</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Full-Stack Technology Specialist passionate about creating innovative solutions
              across software development, cybersecurity, and data science.
            </p>
            <div className="flex space-x-5">
              <Link
                href="https://github.com/ManziniArchives"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com/in/musawenkosi-manzini"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:manziniarchives@gmail.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Email"
              >
                <FaEnvelope className="w-6 h-6" />
              </Link>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Resume
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
            <div className="space-y-4 text-gray-400">
              <p className="flex flex-col">
                <span className="font-medium text-white mb-1">Email</span>
                <a
                  href="mailto:manziniarchives@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  manziniarchives@gmail.com
                </a>
              </p>
              <p className="flex flex-col">
                <span className="font-medium text-white mb-1">Phone</span>
                <a
                  href="tel:+27760123729"
                  className="hover:text-white transition-colors duration-200"
                >
                  +27 76 012 3729
                </a>
              </p>
              <p className="flex flex-col">
                <span className="font-medium text-white mb-1">Location</span>
                <span>South Africa</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}