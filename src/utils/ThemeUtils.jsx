import {themeConfig} from "../config/themeConfig.js";

export const getThemeClasses = (...paths) => {
    return paths.map(path => {
        const keys = path.split('.');
        let value = themeConfig.colors;

        for (const key of keys) {
            value = value?.[key];
        }

        if (value && typeof value === 'object') {
            return `${value.light} ${value.dark}`;
        }
        return value || '';
    }).join(' ');
};