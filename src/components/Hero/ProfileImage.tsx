"use client"

import { useState } from 'react'
import Image from 'next/image'
import { FiUser, FiCamera } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function ProfileImage() {
  const [usePhoto, setUsePhoto] = useState(true)

  const initials = 'MSM'

  return (
    <div className="relative group">
      <motion.div
        className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {usePhoto ? (
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary-500 shadow-xl">
            <Image
              src="/images/profile.JPG"
              alt="Musawenkosi Manzini"
              fill
              className="object-cover"
              priority
            />
          </div>
        ) : (
          <div className="w-full h-full rounded-full bg-primary-600 flex items-center justify-center text-white text-4xl md:text-5xl lg:text-6xl font-bold border-4 border-primary-500 shadow-xl">
            {initials}
          </div>
        )}
      </motion.div>

      <button
        onClick={() => setUsePhoto(!usePhoto)}
        className="absolute bottom-2 right-2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-110"
        aria-label="Toggle profile image"
      >
        {usePhoto ? (
          <FiUser className="w-4 h-4 text-gray-700 dark:text-gray-300" />
        ) : (
          <FiCamera className="w-4 h-4 text-gray-700 dark:text-gray-300" />
        )}
      </button>

      <motion.div
        className="absolute inset-0 rounded-full border-4 border-primary-300 opacity-0 group-hover:opacity-100"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </div>
  )
}