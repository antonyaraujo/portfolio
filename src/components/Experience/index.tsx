import React from 'react';
import { useTranslation } from "react-i18next";

export function Experience() {
    const { t } = useTranslation();

    return (
        <section id="experience" className="p-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold">{t('experiences.title')}</h2>
                <div className="mt-8 space-y-8">
                    {(t('experiences.items', { returnObjects: true }) as any[]).map((item, index) => (
                        <div key={index} className="flex">
                            <div className="w-1/4">
                                <h3 className="font-bold">{item.position}</h3>
                                <p className="text-sm text-gray-400">{item.date}</p>
                            </div>
                            <div className="w-3/4">
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}