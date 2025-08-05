import React from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiDotnet,
  SiCplusplus,
  SiPython,
  SiLua,
  SiGithub,
} from 'react-icons/si';
import { FiExternalLink, FiFolder } from 'react-icons/fi';

// Wrapper for consistent styling on Skill icons
const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-8 h-8 text-purple flex items-center justify-center">
    {children}
  </div>
);

/* -------------------------------------------------------------------------- */
/*                              Social / General                             */
/* -------------------------------------------------------------------------- */

export const GitHubIcon: React.FC = () => <SiGithub size={24} />;
export const LiveDemoIcon: React.FC = () => <FiExternalLink size={18} />;
export const RepoIcon: React.FC = () => <FiFolder size={18} />;

/* -------------------------------------------------------------------------- */
/*                                   Skills                                  */
/* -------------------------------------------------------------------------- */

export const JavaScriptIcon: React.FC = () => (
  <IconWrapper>
    <SiJavascript size={32} />
  </IconWrapper>
);

export const TypeScriptIcon: React.FC = () => (
  <IconWrapper>
    <SiTypescript size={32} />
  </IconWrapper>
);

export const ReactIcon: React.FC = () => (
  <IconWrapper>
    <SiReact size={32} />
  </IconWrapper>
);

export const NextjsIcon: React.FC = () => (
  <IconWrapper>
    <SiNextdotjs size={32} />
  </IconWrapper>
);

export const NodejsIcon: React.FC = () => (
  <IconWrapper>
    <SiNodedotjs size={32} />
  </IconWrapper>
);

export const TailwindCssIcon: React.FC = () => (
  <IconWrapper>
    <SiTailwindcss size={32} />
  </IconWrapper>
);

export const CSharpIcon: React.FC = () => (
  <IconWrapper>
    <SiDotnet size={32} />
  </IconWrapper>
);

export const CppIcon: React.FC = () => (
  <IconWrapper>
    <SiCplusplus size={32} />
  </IconWrapper>
);

export const PythonIcon: React.FC = () => (
  <IconWrapper>
    <SiPython size={32} />
  </IconWrapper>
);

export const LuaIcon: React.FC = () => (
  <IconWrapper>
    <SiLua size={32} />
  </IconWrapper>
);
