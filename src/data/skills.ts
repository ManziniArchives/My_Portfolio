import { Skill } from '@/types/skill';

/**
 * ============================================================================
 * SKILLS DATA
 * ============================================================================
 *
 * To add a new skill:
 * 1. Copy and paste the existing skill template below
 * 2. Update the fields:
 *    - name: skill name (as it should appear on the portfolio)
 *    - proficiency: proficiency level (1-5 scale, where 5 is expert)
 *    - experience: years of experience (currently '2+ years' for all)
 *    - category: one of: 'language', 'frontend', 'backend', 'database', 'tools'
 *
 * Skill Categories:
 * - language: Programming languages (Java, Python, JavaScript, SQL)
 * - frontend: Frontend technologies (React, React Native, HTML, CSS, TypeScript)
 * - backend: Backend frameworks (Node.js, Express.js)
 * - database: Database systems (MySQL, MongoDB, PostgreSQL)
 * - tools: Development tools and platforms (Git, Docker, AWS, Oracle Cloud)
 *
 * Proficiency Scale:
 * 1: Basic familiarity
 * 2: Working knowledge
 * 3: Comfortable / Intermediate
 * 4: Proficient / Advanced
 * 5: Expert / Master level
 * ============================================================================
 */

export const skills: Skill[] = [
  // Programming Languages
  {
    name: 'Java',
    category: 'language',
    proficiency: 4,
    experience: '2+ years'
  },
  {
    name: 'Python',
    category: 'language',
    proficiency: 5,
    experience: '2+ years'
  },
  {
    name: 'JavaScript',
    category: 'language',
    proficiency: 5,
    experience: '2+ years'
  },
  {
    name: 'SQL',
    category: 'language',
    proficiency: 4,
    experience: '2+ years'
  },

  // Frontend
  {
    name: 'React',
    category: 'frontend',
    proficiency: 5,
    experience: '2+ years'
  },
  {
    name: 'React Native',
    category: 'frontend',
    proficiency: 3,
    experience: '2+ years'
  },
  {
    name: 'HTML',
    category: 'frontend',
    proficiency: 5,
    experience: '2+ years'
  },
  {
    name: 'CSS',
    category: 'frontend',
    proficiency: 5,
    experience: '2+ years'
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    proficiency: 4,
    experience: '2+ years'
  },

  // Backend
  {
    name: 'Node.js',
    category: 'backend',
    proficiency: 4,
    experience: '2+ years'
  },
  {
    name: 'Express.js',
    category: 'backend',
    proficiency: 4,
    experience: '2+ years'
  },

  // Databases
  {
    name: 'MySQL',
    category: 'database',
    proficiency: 4,
    experience: '2+ years'
  },
  {
    name: 'MongoDB',
    category: 'database',
    proficiency: 4,
    experience: '2+ years'
  },
  {
    name: 'PostgreSQL',
    category: 'database',
    proficiency: 3,
    experience: '2+ years'
  },

  // Tools
  {
    name: 'Git',
    category: 'tools',
    proficiency: 5,
    experience: '2+ years'
  },
  {
    name: 'Docker',
    category: 'tools',
    proficiency: 3,
    experience: '2+ years'
  },
  {
    name: 'AWS',
    category: 'tools',
    proficiency: 3,
    experience: '2+ years'
  },
  {
    name: 'Oracle Cloud',
    category: 'tools',
    proficiency: 4,
    experience: '2+ years'
  }
];