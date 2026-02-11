import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, Variants } from "framer-motion";
import { Github, ExternalLink, Presentation } from 'lucide-react';
import { SlideModal } from "../SlideModal";

export function Projects() {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [slideUrl, setSlideUrl] = useState('');

    const busonSlideUrl = "https://docs.google.com/presentation/d/e/2PACX-1vSNJ7FQZynVEF9Eaay264z1FfFzZSfktRwf1aVXp725_pheF19o3VMvCj6BDn3EI_zWDJsL1pJDDpEU/pubembed?start=true&loop=false&delayms=30000";

    const handleOpenModal = (url: string) => {
        setSlideUrl(url);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSlideUrl('');
    };

    const sectionVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' as const } },
    };

    return (
        <section id="projects" className="p-4 py-20">
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={sectionVariants}
                className="max-w-6xl mx-auto">
                <motion.h2 
                    variants={itemVariants}
                    className="text-3xl font-bold text-center mb-16">
                     {t('projects.title')}
                </motion.h2>
                <div className="space-y-20">
                    {(t('projects.items', { returnObjects: true }) as any[]).map((project, index) => (
                        <motion.div 
                            key={index} 
                            variants={itemVariants}
                            className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            
                            {project.title === 'Buson' ? (
                                <div className="block w-full md:w-1/2 relative group">
                                    <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg shadow-lg filter grayscale hover:grayscale-0 transition-all duration-300"/>
                                    <div className="absolute inset-0 bg-primary/30 group-hover:bg-transparent transition-all duration-300 rounded-lg"></div>
                                </div>
                            ) : (
                                <a href={project.live || project.repo} target="_blank" rel="noopener noreferrer" className="block w-full md:w-1/2 relative group">
                                    <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg shadow-lg filter grayscale hover:grayscale-0 transition-all duration-300"/>
                                    <div className="absolute inset-0 bg-primary/30 group-hover:bg-transparent transition-all duration-300 rounded-lg"></div>
                                </a>
                            )}

                            <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'text-left' : 'text-right'}`}>
                                <p className="text-primary font-mono text-sm">{t('projects.tag')}</p>
                                <h3 className="text-3xl font-bold text-light-text my-2">{project.title}</h3>
                                <div className="bg-background p-6 rounded-md shadow-lg my-4">
                                    <p className="text-text text-left">{project.description}</p>
                                </div>
                                <div className={`flex items-center gap-4 mt-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                                    {project.repo && (
                                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-text/80 hover:text-primary transition-colors">
                                            <Github size={24} />
                                        </a>
                                    )}
                                    
                                    {project.title === 'Buson' ? (
                                        <button onClick={() => handleOpenModal(busonSlideUrl)} className="text-text/80 hover:text-primary transition-colors" aria-label="View presentation">
                                            <Presentation size={24} />
                                        </button>
                                    ) : (
                                        project.live && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-text/80 hover:text-primary transition-colors" aria-label="View live site">
                                                <ExternalLink size={24} />
                                            </a>
                                        )
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <SlideModal isOpen={isModalOpen} onClose={handleCloseModal} slideUrl={slideUrl} />
        </section>
    );
}
