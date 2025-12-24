export interface ProjectProps {
  title: string;
  image: string;
  content?: string;
  link?: string;
}

export const projects: ProjectProps[] = [
  {
    title: 'Plataforma Ecológico-Econômica de PE',
    image: '//projects/cabure.png',
    link: 'https://plataformaecope.cprh.pe.gov.br/',
  },
  {
    title: ' Programa Prioritário de Bioeconomia - PPBio',
    image: '//projects/ppbio.png',
    link: 'https://bioeconomia.org.br/noticias/',
  },
];
