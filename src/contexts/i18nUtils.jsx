import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// ESM import JSON (vite/webpack sẽ bundle)
import common_en from "../locales/i18n/en/common.json";
import header_en from "../locales/i18n/en/header.json";
import careerGoals_en from "../locales/i18n/en/careerGoals.json";
import education_en from "../locales/i18n/en/education.json";
import skill_en from "../locales/i18n/en/skill.json";
import experience_en from "../locales/i18n/en/experience.json";
import projects_en from "../locales/i18n/en/projects.json";
import hobbies_en from "../locales/i18n/en/hobbies.json";



import common_vi from "../locales/i18n/vi/common.json";
import header_vi from "../locales/i18n/vi/header.json";
import careerGoals_vi from "../locales/i18n/vi/careerGoals.json";
import education_vi from "../locales/i18n/vi/education.json";
import skill_vi from "../locales/i18n/vi/skill.json";
import experience_vi from "../locales/i18n/vi/experience.json";
import projects_vi from "../locales/i18n/vi/projects.json";
import hobbies_vi from "../locales/i18n/vi/hobbies.json";


// consistent key name in localStorage: 'locale'
const savedLang = localStorage.getItem("locale") || "vi";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                common: common_en,
                header: header_en,
                careerGoals: careerGoals_en,
                education: education_en,
                skills: skill_en,
                experience: experience_en,
                projects: projects_en,
                hobbies: hobbies_en
            },
            vi: {
                common: common_vi,
                header: header_vi,
                careerGoals: careerGoals_vi,
                education: education_vi,
                skills: skill_vi,
                experience: experience_vi,
                projects: projects_vi,
                hobbies: hobbies_vi
            },
        },
        lng: savedLang,
        fallbackLng: "en",
        ns: ["common", "header", "careerGoals", "education", "skills", "experience", "projects", "hobbies"],
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
