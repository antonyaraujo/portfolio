export interface ProjectProps {
  title: string;
  image: string;
  content?: string;
  link?: string;
}

export const projects: ProjectProps[] = [
  {
    title: 'Plataforma Ecológico-Econômica de PE',
    image: '/public/projects/cabure.png',
    link: 'https://plataformaecope.cprh.pe.gov.br/',
  },
  {
    title: ' Programa Prioritário de Bioeconomia - PPBio',
    image: '/public/projects/ppbio.png',
    link: 'https://bioeconomia.org.br/noticias/',
  },
];
