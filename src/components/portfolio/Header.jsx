import {useEffect, useState} from "react";
import {AnimatedBackground} from "../../utils/AnimatedBackground.jsx";
import {FloatingCodeLines} from "../../utils/FloatingCodeLines.jsx";
import {ParticleSystem} from "../../utils/ParticleSystem.jsx";
import {getIconComponent} from "../../utils/GetIconForAll.jsx";
import {TypingBio} from "../../utils/TypingBio.jsx";
import {asset} from "../../utils/Assets.jsx";
import {useTheme} from "../../contexts/ThemeContext.jsx";
import {useTranslation} from "react-i18next";
import {AnimatedStat} from "../../utils/AnimatedStat.jsx";

// Tailwind color palette
const tailwindColors = [
    "blue-400", "purple-400", "green-400", "yellow-400", "pink-400", "red-400", "emerald-400", "indigo-400"
];

// CTA buttons JSON
const ctas = [
    {
        type: "download",
        icon: "Download",
        textKey: "downloadCV", // i18n key
        bg: "from-purple-600 to-pink-600",
        hoverBg: "from-purple-500 to-pink-500",
        onClickHandle: "downloadCV",
        href: asset("/cv/pham_quang_hai_software_develop.pdf")
    },
    {
        type: "contact",
        icon: "Mail",
        textKey: "contactMe", // i18n key
        bg: "from-green-600 to-emerald-600",
        hoverBg: "from-green-500 to-emerald-500",
        onClickHandle: "contactMe",
        href: "#contact"
    }
];

const handlers = {
    downloadCV: (cta) => {
        const link = document.createElement("a");
        link.href = cta.href;
        link.download = "pham_quang_hai_software_developer_en_cv.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    },
    contactMe: () => {
        window.location.href = "mailto:haiphamjavadev@gmail.com";
    }
};

function getRandomColor() {
    return tailwindColors[Math.floor(Math.random() * tailwindColors.length)];
}

export const Header = ({headers}) => {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    // ✅ Sử dụng đúng hooks
    const {theme, toggleTheme, isDark} = useTheme();
    const {t, i18n} = useTranslation("header");

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: (e.clientX - rect.left - rect.width / 2) / 20,
            y: (e.clientY - rect.top - rect.height / 2) / 20
        });
    };

    // ✅ Toggle giữa vi và en
    const handleLangChange = () => {
        const newLang = i18n.language === "en" ? "vi" : "en";
        i18n.changeLanguage(newLang); // tự động lưu localStorage
    };

    // ✅ Sync theme với dark class
    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
    }, [isDark]);

    return (
        <header
            className={`relative ${isDark
                ? "bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white"
                : "bg-white text-gray-900"
            } py-24 overflow-hidden transition-colors duration-300`}
            onMouseMove={handleMouseMove}
        >

            <div className="absolute top-6 left-6 z-30">
                {isDark
                    ? getIconComponent("Moon", 32, "text-blue-400 drop-shadow-lg")
                    : getIconComponent("Sun", 32, "text-yellow-400 drop-shadow-lg")}
            </div>

            <AnimatedBackground/>
            <FloatingCodeLines/>
            <ParticleSystem/>

            {/* Top-right controls - Fixed */}
            <div className="absolute top-6 right-6 flex gap-4 z-20">
                {/* Theme Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className={`${isDark
                        ? "bg-white/10 hover:bg-white/20"
                        : "bg-gray-200 hover:bg-gray-300"
                    } px-3 py-2 rounded-lg border ${isDark ? "border-white/20" : "border-gray-300"
                    } transition-all duration-300`}
                    aria-label="Toggle theme"
                >
                    {isDark
                        ? getIconComponent("Sun", 20, "text-yellow-400")
                        : getIconComponent("Moon", 20, "text-blue-600")}
                </button>

                {/* Language Toggle Button */}
                <button
                    onClick={handleLangChange}
                    className={`${isDark
                        ? "bg-white/10 hover:bg-white/20"
                        : "bg-gray-200 hover:bg-gray-300"
                    } px-3 py-2 rounded-lg border ${isDark ? "border-white/20" : "border-gray-300"
                    } transition-all duration-300 font-bold flex items-center gap-2`}
                >
                    {i18n.language === "en"
                        ? (
                            <>
                                <span className="text-xl">🇻🇳</span> VI
                            </>
                        )
                        : (
                            <>
                                <span className="text-xl">🇬🇧</span> EN
                            </>
                        )
                    }
                </button>
            </div>

            {/* Grid Background */}
            <div className={`absolute inset-0 ${isDark
                ? "bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)]"
                : "bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]"
            } bg-[size:100px_100px]`}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Avatar with 3D tilt effect */}
                        <div
                            className="relative group perspective-1000"
                        >
                            <div className="w-48 h-48 relative">
                                <div
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                                <div
                                    className="absolute inset-2 rounded-full bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500"></div>
                                <div className={`absolute inset-4 rounded-full ${isDark ? "bg-gray-900" : "bg-white"
                                } overflow-hidden border-4 border-white shadow-2xl`}>
                                    <img
                                        src={headers.profile.avatar || asset("/imgs/avatar/avatar_me.jpeg")}
                                        alt={headers.profile.name}
                                        className="w-full h-full object-cover"
                                        onError={e => {
                                            e.target.onerror = null;
                                            e.target.src = asset("/imgs/avatar/avatar_me.jpeg");
                                        }}
                                    />
                                </div>
                                <div
                                    className={`absolute bottom-4 right-4 flex items-center gap-2 bg-${headers.profile.status.color} px-3 py-1 rounded-full shadow-lg animate-pulse`}>
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-xs font-bold text-white">
                                        {t(`status.profile`)}
                                    </span>
                                </div>
                            </div>

                            {/* Floating badges */}
                            {headers.profile.badges.map((badge, idx) => (
                                <div
                                    key={idx}
                                    className={`absolute ${badge.position === "top-right" ? "-top-4 -right-4" : "-bottom-2 -left-4"
                                    } bg-${badge.color} text-${badge.textColor} px-4 py-2 rounded-lg font-bold text-sm shadow-xl transform ${badge.rotate} animate-bounce-slow`}
                                    style={{animationDelay: idx * 500 + "ms"}}
                                >
                                    {badge.text}
                                    {t(`badges.${badge.i18n}`) || badge.i18n}
                                </div>
                            ))}
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 text-center md:text-left">
                            <div className="mb-4">
                                <span className={`${isDark ? "text-blue-400" : "text-blue-600"
                                } font-mono text-sm`}>$ whoami</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black mb-4 relative">
                                <span
                                    className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                                    {headers.profile.name}
                                </span>
                                <div
                                    className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition"></div>
                            </h1>

                            <div className="flex items-center gap-3 justify-center md:justify-start mb-6">
                                {getIconComponent("Terminal", 24, "text-green-400 animate-pulse")}
                                <p className="text-2xl md:text-3xl font-bold">
                                    <span className="text-gray-300">{headers.profile.title.split(" ")[0]}</span>{" "}
                                    <span
                                        className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                                        {headers.profile.title.split(" ").slice(1).join(" ")}
                                    </span>
                                </p>
                            </div>

                            <TypingBio text={headers.profile.bio}
                                       speed={40}
                                       className={`
                                                text-center md:text-left font-semibold
                                            ${isDark
                                            ? "bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent"
                                            : "bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent"}
                                                `}
                            />

                            {/* Stats Bar */}
                            <div className="grid grid-cols-3 gap-4 mb-8 max-w-xl mx-auto md:mx-0">
                                {headers.stats.map((stat, idx) => {
                                    const color = tailwindColors[idx % tailwindColors.length];
                                    return (
                                        <div
                                            key={idx}
                                            className={`${isDark ? "bg-white/10" : "bg-gray-100"
                                            } backdrop-blur-lg rounded-xl p-4 border ${isDark ? "border-white/20" : "border-gray-200"
                                            } hover:scale-105 transition transform`}
                                        >
                                            {/*<div className={`text-3xl font-bold text-${color}`}>{stat.value}+</div>*/}
                                            <AnimatedStat value={stat.value} color={color} />
                                            <div className={isDark ? "text-gray-300" : "text-gray-600 text-sm"}>
                                                {t(`stats.labels.${stat.i18n}`) || stat.i18n}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Contact info */}
                            <div
                                className={`flex flex-wrap gap-4 justify-center md:justify-start ${isDark ? "text-gray-300" : "text-gray-700"
                                } mb-8`}>
                                {headers.contacts.map((contact, idx) => {
                                    const color = tailwindColors[idx % tailwindColors.length];
                                    return contact.href ? (
                                        <a
                                            key={idx}
                                            href={contact.href}
                                            className={`flex items-center gap-2 ${isDark
                                                ? "bg-white/10 hover:bg-white/20 border-white/20"
                                                : "bg-gray-100 hover:bg-gray-200 border-gray-200"
                                            } backdrop-blur-lg px-4 py-2 rounded-lg transition border`}
                                        >
                                            {getIconComponent(contact.icon, 18, `text-${color}`)}
                                            <span className="text-sm font-medium">{contact.value}</span>
                                        </a>
                                    ) : (
                                        <div
                                            key={idx}
                                            className={`flex items-center gap-2 ${isDark ? "bg-white/10 border-white/20" : "bg-gray-100 border-gray-200"
                                            } backdrop-blur-lg px-4 py-2 rounded-lg border`}
                                        >
                                            {getIconComponent(contact.icon, 18, `text-${color}`)}
                                            <span className="text-sm font-medium">{contact.value}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* CTA Buttons and Socials */}
                            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                                {/* Social Links */}
                                {headers.socials.map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group relative bg-gradient-to-r ${social.bg} hover:${social.hoverBg} p-4 rounded-xl transition transform hover:scale-110 border border-gray-700 overflow-hidden`}
                                        aria-label={social.icon}
                                    >
                                        <div
                                            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition"></div>
                                        {getIconComponent(social.icon, 24, "relative z-10 text-gray-800 dark:text-white")}
                                    </a>
                                ))}
                                {ctas.map((cta, idx) => (
                                    <button
                                        key={idx}
                                        className={`group relative bg-gradient-to-r ${cta.bg} hover:${cta.hoverBg} px-8 py-4 rounded-xl flex items-center gap-3 transition transform hover:scale-105 overflow-hidden shadow-2xl`}
                                        onClick={() => handlers[cta.onClickHandle]?.(cta)}
                                    >
                                        <div
                                            className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition"></div>
                                        {getIconComponent(cta.icon, 24, "relative z-10 group-hover:animate-bounce text-gray-800 dark:text-white")}
                                        <span className="font-bold text-lg relative z-10 text-gray-800 dark:text-white">
                                            {t(cta.textKey) || cta.text}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className={`w-6 h-10 border-2 ${isDark ? "border-white/30" : "border-gray-400"
                } rounded-full flex items-start justify-center p-2`}>
                    <div className={`w-1 h-2 ${isDark ? "bg-white" : "bg-gray-600"
                    } rounded-full animate-scroll`}></div>
                </div>
            </div>
        </header>
    );
};