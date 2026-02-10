import { useTranslation } from "react-i18next";
import { motion, Variants } from "framer-motion";

export function Contact() {
    const { t } = useTranslation();

    const sectionVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" as const }
        },
    };

    return (
        <section id="contact" className="p-4 py-20">
            <motion.div 
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-3xl mx-auto text-center bg-light-background/50 backdrop-blur-lg border border-primary/20 rounded-lg p-8 md:p-12 shadow-2xl">
                
                <h2 className="text-4xl md:text-5xl font-bold text-primary animate-flicker mb-4">
                    {t('contact.title')}
                </h2>
                
                <p className="text-lg md:text-xl text-text/80 max-w-xl mx-auto mb-8">
                    {t('contact.description')}
                </p>
                
                <motion.a 
                    href="mailto:antonyaraujo@gmail.com" 
                    whileHover={{ 
                        scale: 1.05,
                        backgroundColor: 'rgba(0, 255, 149, 0.2)',
                        boxShadow: '0 0 20px 0 rgba(0, 255, 149, 0.5)',
                        transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block text-lg text-primary border-2 border-primary px-8 py-3 font-bold">
                    &gt; {t('contact.button')}
                </motion.a>

            </motion.div>
        </section>
    );
}
