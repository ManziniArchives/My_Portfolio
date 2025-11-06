"use client"

import { Certification } from '@/types/certification'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaShieldAlt, FaCode, FaDatabase, FaCloud, FaBriefcase, FaServer } from 'react-icons/fa'

interface CertificationCardProps {
  certification: Certification
}

const categoryIcons = {
  security: FaShieldAlt,
  development: FaCode,
  data: FaDatabase,
  cloud: FaCloud,
  business: FaBriefcase,
  database: FaServer,
}

const categoryColors = {
  security: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  development: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  data: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  cloud: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
}

export default function CertificationCard({ certification }: CertificationCardProps) {
  const Icon = categoryIcons[certification.category]

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl p-6 h-full flex flex-col"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-3 rounded-lg ${categoryColors[certification.category]}`}>
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
              {certification.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {certification.issuer}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-grow">
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <span className="capitalize">{certification.category}</span>
          <span>{certification.date}</span>
        </div>
      </div>

      <Button
        href={certification.verificationLink}
        target="_blank"
        variant="outline"
        className="w-full group"
      >
        <span className="flex items-center justify-center">
          View Certificate
          <FaExternalLinkAlt className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </span>
      </Button>
    </motion.div>
  )
}