import { createContext, useContext, useState, useEffect } from 'react';
import vi from '../locales/vi.json';
import en from '../locales/en.json';

const I18nContext = createContext(undefined);

const translations = { vi, en };

export const I18nProvider = ({ children }) => {
    const [locale, setLocale] = useState(() => {
        // 1. Check localStorage
        const saved = localStorage.getItem('locale');
        if (saved && translations[saved]) return saved;

        // 2. Check browser language
        const browserLang = navigator.language.split('-')[0];
        if (translations[browserLang]) return browserLang;

        // 3. Default to Vietnamese
        return 'vi';
    });

    useEffect(() => {
        localStorage.setItem('locale', locale);
        document.documentElement.lang = locale;
    }, [locale]);

    /**
     * Translate function
     * @param {string} key - Translation key (e.g., "header.downloadCV")
     * @param {object} params - Parameters to replace in translation (e.g., {name: "John"})
     * @returns {string} Translated text
     */
    const t = (key, params = {}) => {
        const keys = key.split('.');
        let value = translations[locale];

        // Navigate through nested keys
        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                console.warn(`Translation key not found: ${key}`);
                return key; // Return key if not found
            }
        }

        // Replace parameters like {name}
        if (typeof value === 'string' && Object.keys(params).length > 0) {
            return value.replace(/\{(\w+)\}/g, (match, key) => {
                return params[key] !== undefined ? params[key] : match;
            });
        }

        return value || key;
    };

    const changeLocale = (newLocale) => {
        if (translations[newLocale]) {
            setLocale(newLocale);
            localStorage.setItem('locale', newLocale);
            window.location.reload();
        } else {
            console.warn(`Locale not available: ${newLocale}`);
        }
    };

    const value = {
        locale,
        t,
        changeLocale,
        availableLocales: Object.keys(translations),
        isVietnamese: locale === 'vi',
        isEnglish: locale === 'en'
    };

    return (
        <I18nContext.Provider value={value}>
            {children}
        </I18nContext.Provider>
    );
};

export const useI18n = () => {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useI18n must be used within I18nProvider');
    }
    return context;
};