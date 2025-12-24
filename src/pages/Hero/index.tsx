import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden py-20 px-4 text-center"
      id="start"
    >
      {/* Efeito de luz de fundo (Glow) */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="container flex max-w-[800px] flex-col items-center gap-4">
        {/* Badge de status ou saudação */}

        <img src="src\assets\eu_emoji.png" className="h-[254px] w-[254px]" />

        {/* Título Principal */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-6xl">
          {t('welcome_title', 'Olá, eu sou Antony e transformo')}{' '}
          <span className="bg-gradient-to-r from-[#FF8660] to-[#9A33FF] bg-clip-text text-transparent">
            café
          </span>
          {t('welcome_sequence', ' em')}{' '}
          <span className="bg-gradient-to-r from-[#FF8660] to-[#9A33FF] bg-clip-text text-transparent">
            código
          </span>
        </h1>

        {/* Subtítulo / Descrição */}
        <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">
          {t(
            'hero_description',
            'Sou um desenvolvedor de software Full Stack com mais de 3 anos de experiência profissional, especializado em construir aplicações escaláveis, e interfaces otimizadas. Tenho expertise em arquiteturas modernas utilizando o ecossistema React, NextJS e Node.js.',
          )}
        </p>

        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary animate-in fade-in slide-in-from-bottom-3">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          {t('status_disponivel', 'Disponível para novos projetos')}
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <Button variant="pill" size="xl" asChild>
            <a
              href="https://wa.me/5574999711770"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              Contate-me
            </a>
          </Button>
          <Button variant="pill_outline" size="xl" asChild>
            <a
              href="src\assets\Curriculo_Antony_FS.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </Button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com/antonyaraujo"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/antonyoaraujo/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:antony@ecomp.uefs.br">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
