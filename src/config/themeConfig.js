// ============================================
// THEME CONFIGURATION FILE
// theme.config.js
// Dùng CSS variables, kết hợp Tailwind
// ============================================
export const themeConfig = {
    colors: {
        // Backgrounds
        background: {
            primary: 'var(--bg-primary)',
            secondary: 'var(--bg-secondary)',
            gradient: 'var(--bg-gradient)',
            header: 'var(--bg-header)'
        },

        // Text
        text: {
            primary: 'var(--text-primary)',
            secondary: 'var(--text-secondary)',
            muted: 'var(--text-muted)'
        },

        // Borders
        border: {
            default: 'var(--border-default)',
            light: 'var(--border-light)'
        },

        // Cards
        card: {
            background: 'var(--card-bg)',
            hover: 'var(--card-hover)'
        },

        // Accent gradients
        accent: {
            blue: 'var(--accent-blue)',
            purple: 'var(--accent-purple)',
            pink: 'var(--accent-pink)',
            green: 'var(--accent-green)'
        }
    }
};
