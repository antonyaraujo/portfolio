import { useTranslation } from "react-i18next";

export function Header() {
    const { i18n } = useTranslation();

    const handleChangeLang = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-sm border-b border-primary/20 shadow-[0_4px_14px_0_rgba(0,255,149,0.1)]">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-3xl font-bold text-primary animate-flicker">[A.]</div>
                <nav className="hidden md:flex items-center space-x-6 text-lg">
                    <a href="#experience" className="hover:text-primary hover:animate-flicker transition-colors duration-300">// 01. Experience</a>
                    <a href="#projects" className="hover:text-primary hover:animate-flicker transition-colors duration-300">// 02. Projects</a>
                    <a href="#skills" className="hover:text-primary hover:animate-flicker transition-colors duration-300">// 03. Skills</a>
                    <a href="#contact" className="hover:text-primary hover:animate-flicker transition-colors duration-300">// 04. Contact</a>
                </nav>
                <div className="flex space-x-2 text-lg">
                    <button 
                        onClick={() => handleChangeLang('en')} 
                        className={`px-2 border ${i18n.language === 'en' ? 'text-primary border-primary animate-flicker' : 'border-transparent text-text/50 hover:text-primary'}`}>
                        [ EN ]
                    </button>
                    <span className="text-text/50">/</span>
                    <button 
                        onClick={() => handleChangeLang('pt')} 
                        className={`px-2 border ${i18n.language === 'pt' ? 'text-primary border-primary animate-flicker' : 'border-transparent text-text/50 hover:text-primary'}`}>
                        [ PT ]
                    </button>
                </div>
            </div>
        </header>
    );
}
