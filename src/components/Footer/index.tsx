import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

// Interfaces para tipagem dos dados
interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Dados de redes sociais (substitua pelos seus links reais)
  const socialLinks: SocialLink[] = [
    { name: 'GitHub', href: 'https://github.com/antonyaraujo', icon: Github },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/antonyoaraujo',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:contato.antonyaraujo@gmail.com',
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-secondary text-primary-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-2xl font-bold text-white tracking-tight">
          Contate-me
        </div>
        <div className="w-full flex flex-col justify-center items-left gap-8">
          {/* 1. Logo / Identidade */}
          <div className="text-left">
            <p className="mt-2 font-light text-sm ">
              Desenvolvedor Full Stack apaixonado por criar experiências
              digitais únicas e performáticas.
            </p>
          </div>

          {/** Email */}
          <div className="flex gap-4">
            <Mail />{' '}
            <span className="font-bold">contato.antonyaraujo@gmail.com</span>
          </div>

          {/* 3. Redes Sociais */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="p-2 bg-white text-black rounded-full hover:bg-black hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Linha Divisória e Copyright */}
        <div className="mt-12 pt-8 border-t border-white flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} Seu Nome. Todos os direitos reservados.</p>

          <p className="flex items-center gap-1">
            Feito com <Heart className="w-3 h-3 text-red-500 fill-current" />{' '}
            usando React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
