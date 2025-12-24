import ExperienceCard from '@/components/ExperienceCard';
import { experiences } from '@/constants/experiences';

function Experience() {
  return (
    <div id="experience">
      <h1 className="text-4xl font-black tracking-tighter bg-gradient-to-b from-[#5BADFF] to-[#1373D1] bg-clip-text text-transparent uppercase mt-[96px]">
        EXPERIÊNCIA PROFISSIONAL
      </h1>
      <div className="flex w-full justify-center">
        <div className="flex flex-col">
          {experiences.map((experience) => (
            <ExperienceCard
              position={experience.position}
              date={experience.date}
              description={experience.description}
              image={experience.image}
              link={experience.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
