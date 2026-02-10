
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const socialLinks = [
    { 
        name: "GitHub", 
        icon: <Github size={24} />, 
        url: "https://github.com/antonyaraujo"
    },
    {
        name: "LinkedIn",
        icon: <Linkedin size={24} />,
        url: "https://linkedin.com/in/antonyoaraujo"
    }
];

export function SocialLinks() {
    return (
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="hidden md:flex flex-col gap-6 fixed bottom-0 left-8 z-20">
            {socialLinks.map((link, index) => (
                <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                        scale: 1.2, 
                        y: -5, 
                        color: '#00ff95', 
                        transition: { duration: 0.2 }
                    }}
                    className="text-text/60 hover:text-primary">
                    {link.icon}
                </motion.a>
            ))}
            <div className="h-24 w-px bg-text/30 mx-auto mt-2"></div>
        </motion.div>
    );
}
