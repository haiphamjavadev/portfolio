import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// ESM import JSON (vite/webpack sẽ bundle)
import header_en from "../locales/i18n/en/header.json";
import careerGoals_en from "../locales/i18n/en/careerGoals.json";

import header_vi from "../locales/i18n/vi/header.json";
import careerGoals_vi from "../locales/i18n/vi/careerGoals.json";

// consistent key name in localStorage: 'locale'
const savedLang = localStorage.getItem("locale") || "vi";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { header: header_en, careerGoals: careerGoals_en },
            vi: { header: header_vi, careerGoals: careerGoals_vi },
        },
        lng: savedLang,
        fallbackLng: "en",
        ns: ["header", "careerGoals"],
        defaultNS: "header",
        interpolation: { escapeValue: false },
        react: { useSuspense: false }, // đảm bảo components re-render khi đổi ngôn ngữ
        debug: false,
    });

i18n.on("languageChanged", (lng) => {
    try {
        localStorage.setItem("locale", lng);
        document.documentElement.lang = lng;
        window.location.reload();
    } catch (e) {
        // ignore (some environments may block localStorage)
        console.warn("Failed to save locale:", e);
    }
});

export default i18n;
