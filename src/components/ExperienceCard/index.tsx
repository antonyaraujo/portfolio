interface ExperienceCardProps {
  position: string;
  description: string;
  date: string;
  image: string;
  link?: string;
  addDescriptionMargin?: boolean;
}

function ExperienceCard({
  position,
  description,
  date,
  image,
  link,
  addDescriptionMargin = false,
}: ExperienceCardProps) {
  return (
    <div className="w-full max-w-4xl py-6">
      {/* Cabeçalho: Logo, Título e Data */}
      <div className="flex flex-col items-center justify-start  mb-4 md:flex-row md:justify-between">
        <div className="flex items-center gap-3 w-full md:w-max">
          <div className="flex flex-row items-center gap-4 ">
            {/* Logo Simulado */}
            <div
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center content-center border-2 cursor-pointer"
              onClick={() => window.open(link ? link : '', '_blank')}
            >
              <img src={image} alt={position} className="rounded-full" />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {position}
            </h3>
          </div>
        </div>
        <div className="flex w-full justify-start md:w-max">
          <span className="text-gray-500 font-medium ml-19 ">{date}</span>
        </div>
      </div>

      {/* Descrição */}
      <p
        className={
          'text-lg text-left leading-relaxed text-gray-400 font-normal' +
          (addDescriptionMargin ? ' ml-19' : '')
        }
      >
        {description}
      </p>
    </div>
  );
}

export default ExperienceCard;
