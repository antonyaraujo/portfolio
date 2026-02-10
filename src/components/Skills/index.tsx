import { useTranslation } from "react-i18next";

export function Skills() {
    const { t } = useTranslation();

    return (
        <section id="skills" className="p-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold">{t('stacks.title')}</h2>
                <div className="mt-8 flex flex-wrap gap-4">
                    {(t('stacks.items', { returnObjects: true }) as any[]).map((item, index) => (
                        <div key={index} className="bg-gray-800 px-4 py-2">
                            {item.stack}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}