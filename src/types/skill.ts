export interface Skill {
  name: string;
  category: 'language' | 'frontend' | 'backend' | 'database' | 'tools';
  proficiency: number; // 1-5 scale
  icon?: string;
  experience?: string;
}