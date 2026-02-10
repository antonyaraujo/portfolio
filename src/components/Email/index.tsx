import { motion } from "framer-motion";

export function Email() {
    return (
        <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="hidden md:flex flex-col gap-6 fixed bottom-0 right-8 z-20 items-center">
            
            <motion.a
                href="mailto:contato.antonyaraujo@gmail.com"
                whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    letterSpacing: '0.1em',
                    transition: { duration: 0.2 }
                }}
                className="text-text/60 hover:text-primary vertical-text font-mono text-sm tracking-widest">
                contato.antonyaraujo@gmail.com
            </motion.a>

            <div className="h-24 w-px bg-text/30 mx-auto mt-6"></div>
        </motion.div>
    );
}
