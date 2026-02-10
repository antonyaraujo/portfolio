import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export function Hero() {
    const { t } = useTranslation();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.5 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    };

    return (
        <section className="min-h-screen flex items-center justify-start p-4 md:px-20 lg:px-32">
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-3xl">                
                
                <motion.h1 
                    variants={itemVariants} 
                    className="text-5xl md:text-7xl font-bold text-light-text mb-2">
                    {t('hero.title')}
                </motion.h1>
                
                <motion.h2
                    variants={itemVariants}
                    className="text-4xl md:text-6xl font-bold text-text/60 mb-6">
                    {t('hero.subtitle')}
                </motion.h2>
                
                <motion.p 
                    variants={itemVariants} 
                    className="text-base md:text-lg text-text/70 max-w-xl leading-relaxed">
                    {t('hero.description')}
                </motion.p>
                
                <motion.a 
                    variants={itemVariants}
                    href="#contact" 
                    whileHover={{ 
                        scale: 1.05,
                        backgroundColor: 'rgba(0, 255, 149, 0.1)',
                        boxShadow: '0 0 15px rgba(0, 255, 149, 0.3)',
                        transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-12 inline-block text-lg text-primary border border-primary px-10 py-4 font-mono font-bold tracking-wider">
                    {t('hero.button')}
                </motion.a>
            </motion.div>
        </section>
    );
}
