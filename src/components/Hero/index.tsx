import { useTranslation } from "react-i18next";
import { motion, Variants } from "framer-motion";

export function Hero() {
    const { t } = useTranslation();

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.5 },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    };

    const imageContainerVariants: Variants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1, 
            transition: { 
                duration: 0.7, 
                ease: "easeOut" as const
            } 
        },
    };

    return (
        <section className="min-h-screen flex items-center justify-center p-4 md:px-20 lg:px-32">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-8">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-2xl text-center md:text-left">

                    <motion.div 
                        variants={itemVariants} 
                        className="mb-4">
                        <span className="inline-block bg-primary/10 text-primary text-sm font-mono font-bold px-3 py-1 rounded-full">
                            {t('hero.available')}
                        </span>
                    </motion.div>
                    
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
                        className="text-base md:text-lg text-text/70 max-w-xl leading-relaxed mx-auto md:mx-0">
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

                <motion.div
                    variants={imageContainerVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 mb-8 md:mb-0 mt-20 md:mt-0"
                >
                    {/* Background Circle with Glow and Pulse */}
                    <motion.div
                        className="absolute inset-0 rounded-full border-4 border-primary animate-pulse-slow"
                        whileHover={{
                            boxShadow: "0 0 40px rgba(0, 255, 149, 0.4)",
                            transition: { duration: 0.3 }
                        }}
                    ></motion.div>

                    {/* Avatar Image on Top */}
                    <motion.img
                        src="/avatar.png"
                        alt="Antony Araujo"
                        className="relative z-10 w-full h-full object-contain"
                        animate={{
                            scale: 1.05
                        }}
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.3 }
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
