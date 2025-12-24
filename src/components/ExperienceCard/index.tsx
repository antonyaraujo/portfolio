interface ExperienceCardProps {
  position: string;
  description: string;
  date: string;
  image: string;
  link: string;
}

function ExperienceCard({
  position,
  description,
  date,
  image,
  link,
}: ExperienceCardProps) {
  return (
    <div className="w-full max-w-4xl py-6">
      {/* Cabeçalho: Logo, Título e Data */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="flex flex-row items-center gap-4">
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
        <div>
          <span className="text-gray-500 font-medium">{date}</span>
        </div>
      </div>

      {/* Descrição */}
      <p className="text-lg text-left leading-relaxed text-gray-400 font-normal">
        {description}
      </p>
    </div>
  );
}

export default ExperienceCard;
