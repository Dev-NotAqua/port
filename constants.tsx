import type { Skill, Project } from './types';
import { GitHubIcon, JavaScriptIcon, TypeScriptIcon, ReactIcon, NextjsIcon, NodejsIcon, TailwindCssIcon, CSharpIcon, CppIcon, PythonIcon, LuaIcon } from './components/icons.tsx';

export const SKILLS_DATA: Skill[] = [
  { name: 'JavaScript', category: 'Frontend', icon: <JavaScriptIcon />, proficiency: 95 },
  { name: 'TypeScript', category: 'Frontend', icon: <TypeScriptIcon />, proficiency: 90 },
  { name: 'React', category: 'Frontend', icon: <ReactIcon />, proficiency: 92 },
  { name: 'Next.js', category: 'Fullstack', icon: <NextjsIcon />, proficiency: 88 },
  { name: 'Node.js', category: 'Backend', icon: <NodejsIcon />, proficiency: 85 },
  { name: 'TailwindCSS', category: 'Styling', icon: <TailwindCssIcon />, proficiency: 96 },
  { name: 'C#', category: 'Backend', icon: <CSharpIcon />, proficiency: 75 },
  { name: 'C++', category: 'Systems', icon: <CppIcon />, proficiency: 70 },
  { name: 'Python', category: 'Backend', icon: <PythonIcon />, proficiency: 80 },
  { name: 'Lua', category: 'Scripting', icon: <LuaIcon />, proficiency: 85 },
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
    title: 'Dark Whispers',
    description: 'A thrilling Roblox horror game featuring prophunt mechanics where players hide as objects while being hunted in dark, atmospheric environments. Built with immersive horror elements and strategic gameplay.',
    tags: ['Roblox', 'Lua', 'Game Development', 'Horror', 'Prophunt'],
    imageUrl: 'https://via.placeholder.com/600x400/ff6b35/ffffff?text=🚧+Work+In+Progress+🚧',
    liveUrl: 'https://dark-whispers-demo.vercel.app',
    repoUrl: 'https://github.com/Dev-NotAqua/dark-whispers',
  },
  {
    title: 'FiveM Anticheat (WIP)',
    description: 'A robust, work-in-progress anticheat solution for the FiveM platform, using advanced techniques to detect and prevent cheating in game.',
    tags: ['Lua', 'Backend', 'Systems'],
    imageUrl: 'https://via.placeholder.com/600x400/ff6b35/ffffff?text=🚧+Under+Development+🚧',
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