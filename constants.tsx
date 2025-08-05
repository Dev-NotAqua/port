import React from 'react';
import type { Skill, Project } from './types';
import { GitHubIcon, JavaScriptIcon, TypeScriptIcon, ReactIcon, NextjsIcon, NodejsIcon, TailwindCssIcon, CSharpIcon, CppIcon, PythonIcon, LuaIcon } from './components/icons.tsx';

export const SKILLS_DATA: Skill[] = [
  { name: 'JavaScript', category: 'Frontend', icon: <JavaScriptIcon /> },
  { name: 'TypeScript', category: 'Frontend', icon: <TypeScriptIcon /> },
  { name: 'React', category: 'Frontend', icon: <ReactIcon /> },
  { name: 'Next.js', category: 'Fullstack', icon: <NextjsIcon /> },
  { name: 'Node.js', category: 'Backend', icon: <NodejsIcon /> },
  { name: 'TailwindCSS', category: 'Styling', icon: <TailwindCssIcon /> },
  { name: 'C#', category: 'Backend', icon: <CSharpIcon /> },
  { name: 'C++', category: 'Systems', icon: <CppIcon /> },
  { name: 'Python', category: 'Backend', icon: <PythonIcon /> },
  { name: 'lua', category: 'Scripting', icon: <LuaIcon /> },
];

export const PROJECTS: Project[] = [
  {
    title: 'MC&D Onboarding Handbook',
    description: 'A digital, interactive onboarding handbook for the fictional organization Marshall, Carter & Dark Ltd. (MC&D), built with a modern tech stack.',
    tags: ['Next.js', 'React', 'TailwindCSS', 'Vercel'],
    imageUrl: 'https://i.ibb.co/fz245Kjz/image.png',
    liveUrl: 'https://mcd-onboarding-handbook.vercel.app',
    repoUrl: 'https://github.com/Dev-NotAqua/mcd-onboarding-handbook',
  },
  {
    title: 'FiveM Anticheat (WIP)',
    description: 'A robust, work-in-progress anticheat solution for the FiveM platform, using advanced techniques to detect and prevent cheating in game.',
    tags: ['Lua', 'Backend', 'Systems'],
    repoUrl: 'https://github.com/Dev-NotAqua/FivemAC',
  },
];


export const SOCIALS = {
  github: {
    name: 'GitHub',
    url: 'https://github.com',
    icon: <GitHubIcon />,
  },
};