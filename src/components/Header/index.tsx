import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

// SVGs for icons
const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const BlueskyIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6">
        <title>Bluesky</title>
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.8c-6.075 0-10.8-4.725-10.8-10.8S5.925 1.2 12 1.2s10.8 4.725 10.8 10.8-4.725 10.8-10.8 10.8zm-2.16-5.88c-.336.216-.72.336-1.104.336-.936 0-1.68-.744-1.68-1.68s.744-1.68 1.68-1.68c.384 0 .768.12 1.104.336.216.144.48.24.744.24.576 0 1.056-.48 1.056-1.056V9.84c0-.576-.48-1.056-1.056-1.056s-1.056.48-1.056 1.056v.72a3.12 3.12 0 0 0-1.848-.6c-1.728 0-3.12 1.392-3.12 3.12s1.392 3.12 3.12 3.12c.696 0 1.344-.24 1.848-.6v.72c0 .576.48 1.056 1.056 1.056s1.056-.48 1.056-1.056v-2.016c0-.264-.264-.36-.744-.24zm4.32-4.92c-.336-.216-.72-.336-1.104-.336-.936 0-1.68.744-1.68 1.68s.744 1.68 1.68 1.68c.384 0 .768.12 1.104.336.216.144.48.24.744.24.576 0 1.056-.48 1.056-1.056V9.84c0-.576-.48-1.056-1.056-1.056s-1.056.48-1.056 1.056v.72a3.12 3.12 0 0 0-1.848-.6c-1.728 0-3.12 1.392-3.12 3.12s1.392 3.12 3.12 3.12c.696 0 1.344-.24 1.848-.6v.72c0 .576.48 1.056 1.056 1.056s1.056-.48 1.056-1.056v-2.016c0-.264-.264-.36-.744-.24z"/>
    </svg>
);

export function Header() {
    const { i18n, t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleChangeLang = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    const menuVariants = {
        hidden: { opacity: 0, y: "-100%" },
        visible: { opacity: 1, y: 0, transition: { type: "tween" as const, ease: "circOut" as const, duration: 0.5 } },
        exit: { opacity: 0, y: "-100%", transition: { type: "tween" as const, ease: "circIn" as const, duration: 0.4 } },
    };

    return (
        <>
            <motion.header 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="fixed top-0 left-0 right-0 z-30 bg-background/80 backdrop-blur-md shadow-md">
                <div className="container mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
                    <motion.p
                        whileHover={{ scale: 1.1, textShadow: "0 0 10px #00ff95" }}
                        className="text-text/60 text-2xl font-mono font-bold text-primary animate-flicker cursor-pointer font-mono">
                        antony.dev
                    </motion.p>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                         <nav className="flex items-center space-x-6 text-sm font-mono text-text/90">
                            <motion.a whileHover={{ color: '#00ff95' }} href="#experience" className="transition-colors duration-300"><span className="text-primary">01.</span> {t('navbar.experience')}</motion.a>
                            <motion.a whileHover={{ color: '#00ff95' }} href="#projects" className="transition-colors duration-300"><span className="text-primary">02.</span> {t('navbar.projects')}</motion.a>
                            <motion.a whileHover={{ color: '#00ff95' }} href="#skills" className="transition-colors duration-300"><span className="text-primary">03.</span> {t('navbar.skills')}</motion.a>
                            <motion.a whileHover={{ color: '#00ff95' }} href="#contact" className="transition-colors duration-300"><span className="text-primary">04.</span> {t('navbar.contact')}</motion.a>
                        </nav>
                        <div className="flex items-center space-x-4">
                            <motion.a 
                                href="/resume.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ 
                                    scale: 1.05,
                                    backgroundColor: 'rgba(0, 255, 149, 0.1)',
                                    boxShadow: '0 0 15px rgba(0, 255, 149, 0.3)',
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="text-sm text-primary border border-primary px-4 py-2 font-mono font-bold">
                                Resumo
                            </motion.a>
                            <div className="flex space-x-1 text-sm font-mono">
                                <motion.button 
                                    whileHover={{ color: '#00ff95'}}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => handleChangeLang('en')} 
                                    className={`p-1 ${i18n.language === 'en' ? 'text-primary' : 'text-text/60'}`}>
                                    EN
                                </motion.button>
                                <span className="text-text/40">/</span>
                                <motion.button 
                                    whileHover={{ color: '#00ff95' }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => handleChangeLang('pt')} 
                                    className={`p-1 ${i18n.language === 'pt' ? 'text-primary' : 'text-text/60'}`}>
                                    PT
                                </motion.button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <motion.button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-primary focus:outline-none"
                            whileTap={{ scale: 0.9 }}>
                            {isMenuOpen ? (
                                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </motion.button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-20 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center"
                    >
                        <nav className="flex flex-col items-center space-y-8 text-xl font-mono text-text/90">
                            <motion.a onClick={() => setIsMenuOpen(false)} whileHover={{ color: '#00ff95' }} href="#experience" className="transition-colors duration-300"><span className="text-primary">01.</span> {t('navbar.experience')}</motion.a>
                            <motion.a onClick={() => setIsMenuOpen(false)} whileHover={{ color: '#00ff95' }} href="#projects" className="transition-colors duration-300"><span className="text-primary">02.</span> {t('navbar.projects')}</motion.a>
                            <motion.a onClick={() => setIsMenuOpen(false)} whileHover={{ color: '#00ff95' }} href="#skills" className="transition-colors duration-300"><span className="text-primary">03.</span> {t('navbar.skills')}</motion.a>
                            <motion.a onClick={() => setIsMenuOpen(false)} whileHover={{ color: '#00ff95' }} href="#contact" className="transition-colors duration-300"><span className="text-primary">04.</span> {t('navbar.contact')}</motion.a>
                        </nav>

                        <motion.a 
                            href="/resume.pdf" 
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMenuOpen(false)}
                            className="mt-10 text-lg text-primary border border-primary px-10 py-3 font-mono font-bold">
                            Resumo
                        </motion.a>

                        <div className="flex mt-10 space-x-6 text-primary">
                            <motion.a href="https://www.linkedin.com/in/antony-araujo/" whileHover={{ scale: 1.1, color: '#00ff95' }}><LinkedInIcon /></motion.a>
                            <motion.a href="https://github.com/Antony-Araujo" whileHover={{ scale: 1.1, color: '#00ff95' }}><GitHubIcon /></motion.a>
                            <motion.a href="https://bsky.app/profile/antonyaraujo.bsky.social" whileHover={{ scale: 1.1, color: '#00ff95' }}><BlueskyIcon /></motion.a>
                        </div>

                        <div className="absolute bottom-8 flex space-x-2 text-lg font-mono">
                             <motion.button 
                                whileHover={{ color: '#00ff95'}}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleChangeLang('en')} 
                                className={`p-1 ${i18n.language === 'en' ? 'text-primary' : 'text-text/60'}`}>
                                EN
                            </motion.button>
                            <span className="text-text/40">/</span>
                            <motion.button 
                                whileHover={{ color: '#00ff95' }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleChangeLang('pt')} 
                                className={`p-1 ${i18n.language === 'pt' ? 'text-primary' : 'text-text/60'}`}>
                                PT
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
