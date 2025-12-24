export interface ExperienceProps {
  position: string;
  description: string;
  date: string;
  image: string;
  link?: string;
}

export const experiences: ExperienceProps[] = [
  {
    position: 'Desenvolvedor Front-end Pleno na Softplus',
    description:
      'Desenvolvimento de um sistema ACS (Auto-Configuration System), solução responsável pelo gerenciamento de dispositivos de rede para provedores de internet. Contribuí na criação de interfaces e funcionalidades voltadas ao controle, monitoramento, diagnóstico e correção de equipamentos, apoiando a automação de processos e a melhoria da eficiência operacional da rede, fazendo uso de protoclos como o TR-069 e TR-181.',
    date: 'Mai 2025 - Atualmente',
    image: '/companies/softplus.png',
    link: 'https://www.linkedin.com/company/softplus-tec',
  },
  {
    position: 'Desenvolvedor Front-end Junior na Geodatin',
    description:
      'Atuei no desenvolvimento de múltiplas plataformas digitais de grande impacto, como o PPBio, a Plataforma Ecológico-Econômica de Pernambuco e o PPGM. Trabalhei com stacks modernas — Next.js, React, TypeScript, Chakra UI, Material UI, Styled Components, ContextAPI e Strapi — criando interfaces responsivas, componentes reutilizáveis, formulários complexos e integrações com CMS. Contribuí para soluções robustas, com boa performance e SEO, além de experiências de usuário intuitivas em sistemas voltados a geoprocessamento, monitoramento ambiental e gestão de conteúdo.',
    date: 'Mar 2022 - Dez 2024',
    image: '/companies/geodatin.png',
    link: 'https://geodatin.com/',
  },
  {
    position: 'Estagiário de Segurança em TI no Grupo Meddi',
    description:
      'Gerenciamento de controle e acesso de rede e sistemas internos Responsável por co-gerenciar o acesso dos funcionários de todo o grupo às suas máquinas, através do gerenciamento de Directory Access, implementado com o protocolo LDAP (Lightweight Directory Access Protocol). Além do controle de acesso, era responsável pela política de sites, endereços e protocolos permitidos ou bloqueados na rede interna através do firewall da FortiNet, bem como dos dispositivos conectados a rede e o controle de v´ırus e eventuais falhas ou invasões na rede interna, devido a existência de sistemas críticos.',
    date: 'Set 2021 - Jan 2022',
    image: '/companies/meddi.png',
    link: 'https://grupomeddi.com.br/',
  },
];
