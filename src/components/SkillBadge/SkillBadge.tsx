"use client"

import { Skill } from '@/types/skill'
import { motion } from 'framer-motion'

interface SkillBadgeProps {
  skill: Skill
  showProgress?: boolean
}

const getCategoryColor = (category: string) => {
  const colors = {
    language: 'from-blue-500 to-blue-600 shadow-blue-500/20',
    frontend: 'from-green-500 to-green-600 shadow-green-500/20',
    backend: 'from-purple-500 to-purple-600 shadow-purple-500/20',
    database: 'from-orange-500 to-orange-600 shadow-orange-500/20',
    tools: 'from-gray-500 to-gray-600 shadow-gray-500/20',
  }
  return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600 shadow-gray-500/20'
}

const getProficiencyLabel = (proficiency: number) => {
  const labels = {
    1: 'Beginner',
    2: 'Novice',
    3: 'Intermediate',
    4: 'Advanced',
    5: 'Expert',
  }
  return labels[proficiency as keyof typeof labels] || 'Unknown'
}

export default function SkillBadge({ skill, showProgress = true }: SkillBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-premium-gray rounded-xl p-5 border border-white/5 hover:border-white/20 transition-colors duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-white text-lg">
          {skill.name}
        </h3>
        <span className={`px-2.5 py-1 text-xs font-medium text-white bg-gradient-to-r ${getCategoryColor(skill.category)} rounded-full shadow-lg`}>
          {skill.category}
        </span>
      </div>

      {showProgress && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400 font-medium">
              {getProficiencyLabel(skill.proficiency)}
            </span>
            <span className="text-gray-500">
              {skill.proficiency}/5
            </span>
          </div>

          <div className="w-full bg-black/40 rounded-full h-2 overflow-hidden border border-white/5">
            <motion.div
              className={`h-full bg-gradient-to-r ${getCategoryColor(skill.category)}`}
              initial={{ width: 0 }}
              animate={{ width: `${(skill.proficiency / 5) * 100}%` }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
        </div>
      )}

      {skill.experience && (
        <div className="mt-4 text-xs text-gray-500 border-t border-white/5 pt-3">
          {skill.experience} experience
        </div>
      )}
    </motion.div>
  )
}