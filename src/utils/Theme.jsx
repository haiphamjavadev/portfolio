// Detect system theme preference
export const getSystemTheme = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
};

export const watchSystemTheme = (callback) => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handler = (e) => {
        callback(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handler);

    // Return cleanup function
    return () => mediaQuery.removeEventListener('change', handler);
};

export const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
};