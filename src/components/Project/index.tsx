import { ArrowUpRight } from 'lucide-react'; // Ou use o ícone de sua preferência
import { useNavigate } from 'react-router';

interface ProjectProps {
  image: string;
  title: string;
  content?: string;
  link: string;
}

function Project({ image, title, link }: ProjectProps) {
  const navigate = useNavigate();

  return (
    <div
      className="w-[490px] overflow-hidden rounded-3xl bg-[#1A1A1A] transition-transform hover:scale-[1.02] cursor-pointer"
      onClick={() => window.open(link, '_blank')}
    >
      {/* Container da Imagem */}
      <div className="h-[235px] w-full">
        <img className="h-full w-full object-cover" src={image} alt={title} />
      </div>

      {/* Container do Texto / Footer do Card */}
      <div className="flex flex-row items-center justify-between p-5 bg-[#262626] gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-left font-bold tracking-widest text-gray-400 uppercase">
            Click here to visit
          </span>
          <h3 className="text-2xl text-left font-black uppercase tracking-tight text-white">
            {title}
          </h3>
        </div>

        {/* Ícone de Seta */}
        <div className="text-white">
          <ArrowUpRight size={28} strokeWidth={3} />
        </div>
      </div>
    </div>
  );
}

export default Project;
