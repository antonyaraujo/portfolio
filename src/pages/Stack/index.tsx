import { stacks } from '@/constants/stacks';
import { type IconType } from 'react-icons';

function Stack() {
  return (
    <div id="stacks">
      <div className="flex flex-col flex-wrap items-center justify-center mt-[96px]">
        {/* Definição do Gradiente SVG */}
        <svg width="0" height="0" className="absolute">
          <linearGradient id="icon-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.05" />
          </linearGradient>
        </svg>

        <h4 className="scroll-m-20 text-xl tracking-widest font-semibold tracking-tight text-white/80 mb-6">
          EXPERIENCE WITH
        </h4>

        <div className="flex flex-row justify-center gap-8 max-w-3xl flex-wrap mt-[48px]">
          {stacks.map((item: { stack: string; icone: IconType }) => (
            <div
              key={item.stack}
              /* 1. 'group' permite controlar o ícone quando passamos o mouse na div pai */
              className="group flex flex-col items-center justify-center w-20 gap-2 cursor-pointer"
            >
              <div className="relative flex items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-2">
                {/* Ícone Base (Gradiente) - Desaparece no Hover */}
                <item.icone
                  size={56}
                  style={{ fill: 'url(#icon-fade)' }}
                  className="transition-opacity duration-300 group-hover:opacity-0"
                />

                {/* Ícone de Sobreposição (Sólido + Brilho) - Aparece no Hover */}
                {/* Posicionamos ele exatamente em cima do outro com 'absolute' */}
                <item.icone
                  size={56}
                  className="absolute top-0 left-0 text-white opacity-0 transition-all duration-300 
                           group-hover:opacity-100 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                />
              </div>

              {/* Opcional: Nome da Stack aparecendo sutilmente */}
              <span className="text-xs text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                {item.stack}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stack;
