import React from 'react';

export interface Skill {
  name: string;
  category: string;
  icon?: React.ReactNode;
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