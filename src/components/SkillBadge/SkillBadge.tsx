import { Skill } from '@/types/skill'
import { motion } from 'framer-motion'

interface SkillBadgeProps {
  skill: Skill
  showProgress?: boolean
}

const getCategoryColor = (category: string) => {
  const colors = {
    language: 'from-blue-500 to-blue-600',
    frontend: 'from-green-500 to-green-600',
    backend: 'from-purple-500 to-purple-600',
    database: 'from-orange-500 to-orange-600',
    tools: 'from-gray-500 to-gray-600',
  }
  return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600'
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
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg p-4 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          {skill.name}
        </h3>
        <span className={`px-2 py-1 text-xs font-medium text-white bg-gradient-to-r ${getCategoryColor(skill.category)} rounded-full`}>
          {skill.category}
        </span>
      </div>

      {showProgress && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">
              {getProficiencyLabel(skill.proficiency)}
            </span>
            <span className="text-gray-600 dark:text-gray-400">
              {skill.proficiency}/5
            </span>
          </div>

          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
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
        <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
          {skill.experience} experience
        </div>
      )}
    </motion.div>
  )
}