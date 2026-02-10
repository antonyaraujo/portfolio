import { useTranslation } from "react-i18next";

export function Contact() {
    const { t } = useTranslation();

    return (
        <section id="contact" className="p-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold">{t('contact.title')}</h2>
                <p className="mt-4">{t('contact.description')}</p>
                <a href="mailto:antonyaraujo@gmail.com" className="mt-8 inline-block bg-green-400 text-gray-900 px-6 py-3 font-bold">{t('contact.button')}</a>
            </div>
        </section>
    );
}