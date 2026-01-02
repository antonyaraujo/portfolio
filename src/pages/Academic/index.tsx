import ExperienceCard from '@/components/ExperienceCard';
import { academics } from '@/constants/academics';

function Academic() {
  return (
    <div id="academic">
      <h1 className="text-4xl font-black tracking-tighter bg-gradient-to-b from-[#5BADFF] to-[#1373D1] bg-clip-text text-transparent uppercase mt-[96px]">
        EXPERIÊNCIA ACADÊMICA
      </h1>
      <div className="flex w-full justify-center">
        <div className="flex w-full items-center flex-col">
          {academics.map((experience) => (
            <ExperienceCard
              position={experience.position}
              date={experience.date}
              description={experience.description}
              image={experience.image}
              link={experience.link}
              addDescriptionMargin
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Academic;
