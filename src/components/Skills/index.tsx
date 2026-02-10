import { useTranslation } from "react-i18next";
import { motion, Variants } from "framer-motion";

export function Skills() {
    const { t } = useTranslation();

    const sectionVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    };

    const skillsData = t('stacks.items', { returnObjects: true });
    const skills = Array.isArray(skillsData) ? skillsData : [];

    return (
        <section id="skills" className="p-4 py-20">
            <motion.div 
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-4xl mx-auto text-center">
                <motion.h2 
                    variants={itemVariants}
                    className="text-3xl font-bold mb-12">
                    {t('stacks.title')}
                </motion.h2>
                <motion.div 
                    variants={sectionVariants}
                    className="flex flex-wrap justify-center gap-4">
                    {skills.map((item: { stack: string }, index: number) => (
                        <motion.div 
                            key={index} 
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.1,
                                y: -5,
                                backgroundColor: "rgba(0, 255, 149, 0.1)",
                                boxShadow: "0 0 15px rgba(0, 255, 149, 0.2)",
                                transition: { duration: 0.3 }
                            }}
                            className="bg-light-background/50 backdrop-blur-md border border-primary/20 rounded-md px-5 py-2 text-lg font-mono text-text/80">
                            {item.stack}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
