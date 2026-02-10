import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export function Experience() {
    const { t } = useTranslation();

    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    };

    return (
        <section id="experience" className="p-4 py-20">
            <motion.div 
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-4xl mx-auto">
                <motion.h2 
                    variants={itemVariants}
                    className="text-4xl font-bold text-center mb-12">
                    <span className="text-primary">//</span> {t('experiences.title')}
                </motion.h2>
                <div className="space-y-8">
                    {(t('experiences.items', { returnObjects: true }) as any[]).map((item, index) => (
                        <motion.div 
                            key={index} 
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.03,
                                boxShadow: '0 0 25px rgba(0, 255, 149, 0.2)',
                                transition: { duration: 0.3 }
                            }}
                            className="bg-light-background/50 backdrop-blur-md border border-primary/20 rounded-lg p-6 shadow-lg">
                            <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                                <h3 className="text-xl font-bold text-primary">{item.position}</h3>
                                <p className="text-sm text-text/50 font-mono">{item.date}</p>
                            </div>
                            <p className="text-text/80">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
