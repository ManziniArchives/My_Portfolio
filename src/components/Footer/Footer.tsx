"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import { personalInfo } from '@/data/personalInfo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-gradient">Musawenkosi Manzini</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Full-Stack Technology Specialist passionate about creating innovative solutions
              across software development, cybersecurity, and data science.
            </p>
            <div className="flex space-x-4">
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
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
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
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>
                <span className="font-medium">Email:</span>{' '}
                <a
                  href="mailto:manziniarchives@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  manziniarchives@gmail.com
                </a>
              </p>
              <p>
                <span className="font-medium">Phone:</span>{' '}
                <a
                  href="tel:+27760123729"
                  className="hover:text-white transition-colors duration-200"
                >
                  +27 76 012 3729
                </a>
              </p>
              <p>
                <span className="font-medium">Location:</span> South Africa
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
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Built with{' '}
              <FaHeart className="w-4 h-4 mx-1 text-red-500" />
              using Next.js & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}