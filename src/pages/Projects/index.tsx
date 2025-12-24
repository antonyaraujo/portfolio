import Project from '@/components/Project';
import { projects } from '@/constants/projects';
import { stacks } from '@/constants/stacks';
import { type IconType } from 'react-icons';

function Projects() {
  return (
    <div id="projects">
      <div className="flex flex-col flex-wrap items-center justify-center gap-4 mt-[96px]">
        <h1 className="text-4xl font-black tracking-tighter bg-gradient-to-b from-[#EF744E] to-[#CC5333] bg-clip-text text-transparent uppercase">
          Projects
        </h1>
        <div className="grid grid-cols-2 gap-9 mt-7">
          {projects.map((project) => (
            <Project
              image={project.image}
              title={project.title}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
