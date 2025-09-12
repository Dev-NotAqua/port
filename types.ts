export interface Skill {
  name: string;
  category: string;
  icon?: any; // Using any for JSX elements to avoid import issues
  proficiency: number;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
}