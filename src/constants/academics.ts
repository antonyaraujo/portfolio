export interface AcademicsProps {
  position: string;
  description: string;
  date: string;
  image: string;
  link?: string;
}

export const academics: AcademicsProps[] = [
  {
    position: 'Bacharelado em Engenharia de Computação',
    description: 'Universidade Estadual de Feira de Santana',
    date: '2019 - Atualmente',
    image: 'public/academic/uefs.png',
    link: 'http://www.ecomp.uefs.br/',
  },
  {
    position: 'Técnico em Informática no IFBA',
    description: 'Instituto Federal de Educação, Ciência e Tecnologia da Bahia',
    date: 'Fev 2015 - Dez 2018',
    image: 'public/academic/ifba.png',
    link: 'https://portal.ifba.edu.br/',
  },
];
