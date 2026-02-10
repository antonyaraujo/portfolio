import { useTranslation } from "react-i18next";

export function Hero() {
    const { t } = useTranslation();

    return (
        <section className="min-h-screen flex items-center justify-center p-4 text-center">
            <div className="max-w-4xl mx-auto">
                <p className="text-lg text-primary/70 md:text-xl">{t('hero.greeting')} &gt;</p>
                <h1 className="text-6xl md:text-8xl font-bold text-primary animate-flicker my-4 tracking-widest">{t('hero.title')}</h1>
                <p className="text-xl md:text-2xl text-text/80 max-w-2xl mx-auto">{t('hero.subtitle')}</p>
                <a 
                    href="#contact" 
                    className="mt-12 inline-block text-lg text-primary border-2 border-primary px-8 py-3 font-bold transition-all duration-300 hover:bg-primary/20 hover:shadow-[0_0_20px_0_rgba(0,255,149,0.5)] active:scale-95">
                    &gt; {t('hero.button')}
                </a>
            </div>
        </section>
    );
}
