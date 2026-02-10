import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export function Header() {
    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const handleChangeLang = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <motion.header 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="fixed top-0 left-0 right-0 z-30 bg-background/80 backdrop-blur-md shadow-md">
            <div className="container mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
                <motion.div 
                    whileHover={{ scale: 1.1, textShadow: "0 0 10px #00ff95" }}
                    className="text-2xl font-bold text-primary animate-flicker cursor-pointer font-mono">
                    antony.dev
                </motion.div>
                <div className="flex items-center space-x-6">
                    <nav className="hidden md:flex items-center space-x-6 text-sm font-mono text-text/90">
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
                            className="hidden md:inline-block text-sm text-primary border border-primary px-4 py-2 font-mono font-bold">
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
            </div>
        </motion.header>
    );
}
