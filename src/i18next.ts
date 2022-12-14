import i18next from 'i18next';
import backend from 'i18next-http-backend';
import languageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18next
    .use(backend)
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        debug: true,
        detection: {
            order: ['queryString', 'cookie'],
            caches: ['cookie']
        },
        interpolation: {
            escapeValue: false
        }
    })

    export default i18next;