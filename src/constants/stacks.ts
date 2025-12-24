import { IconType } from 'react-icons';
import {
  DiLaravel,
  DiLinux,
  DiNodejs,
  DiReact,
  DiHtml5,
  DiCss3,
} from 'react-icons/di';
import {
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiChakraui,
  SiStyledcomponents,
  SiExpress,
  SiFastify,
  SiSequelize,
  SiJest,
  SiGit,
  SiStrapi,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export interface Stack {
  stack: string;
  icone: IconType;
}

export const stacks: Stack[] = [
  // Front-End
  { stack: 'ReactJS', icone: DiReact },
  { stack: 'NextJS', icone: SiNextdotjs },
  { stack: 'TypeScript', icone: SiTypescript },
  { stack: 'JavaScript', icone: SiJavascript },
  { stack: 'HTML5', icone: DiHtml5 },
  { stack: 'CSS3', icone: DiCss3 },
  { stack: 'Tailwind CSS', icone: SiTailwindcss },
  { stack: 'Material UI', icone: SiMui },
  { stack: 'Chakra UI', icone: SiChakraui },
  { stack: 'Styled Components', icone: SiStyledcomponents },

  // Back-End & CMS
  { stack: 'Node.js', icone: DiNodejs },
  { stack: 'Express', icone: SiExpress },
  { stack: 'Fastify', icone: SiFastify },
  { stack: 'PHP Laravel', icone: DiLaravel },
  { stack: 'Java', icone: FaJava },
  { stack: 'Strapi CMS', icone: SiStrapi },

  // Database & Tools
  { stack: 'MySQL', icone: SiMysql },
  { stack: 'Sequelize ORM', icone: SiSequelize },
  { stack: 'Linux', icone: DiLinux },
  { stack: 'Git/GitHub', icone: SiGit },
  { stack: 'Jest', icone: SiJest },
];
