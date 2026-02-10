import { useTranslation } from "react-i18next";

export function Projects() {
    const { t } = useTranslation();

    return (
        <section id="projects" className="p-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold">{t('projects.title')}</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {(t('projects.items', { returnObjects: true }) as any[]).map((item, index) => (
                        <a href={item.link} key={index} className="border border-green-400 p-4">
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover"/>
                            <h3 className="mt-4 font-bold">{item.title}</h3>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}