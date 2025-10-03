import {useState} from "react";
import {Download, Github, Linkedin, Mail, MapPin, Phone, Terminal} from "lucide-react";
import {AnimatedBackground} from "../../utils/AnimatedBackground.jsx";
import {FloatingCodeLines} from "../../utils/FloatingCodeLines.jsx";
import {ParticleSystem} from "../../utils/ParticleSystem.jsx";
import {getIconComponent} from "../../utils/GetIconForAll.jsx";

// Helper to get a random Tailwind color
const tailwindColors = [
    "blue-400", "purple-400", "green-400", "yellow-400", "pink-400", "red-400", "emerald-400", "indigo-400"
];

function getRandomColor() {
    return tailwindColors[Math.floor(Math.random() * tailwindColors.length)];
}

const headers = {
    profile: {
        name: "Pham Quang Hai",
        avatar: "https://ui-avatars.com/api/?name=Pham+Quang+Hai&size=200&background=1e40af&color=fff&bold=true&format=svg",
        title: "Software Development Engineer",
        status: {text: "Available", color: "green-500"},
        badges: [
            {
                text: "3+ Years",
                color: "yellow-400",
                textColor: "gray-900",
                position: "top-right",
                rotate: "rotate-12"
            },
            {
                text: "Developer",
                color: "purple-500",
                textColor: "white",
                position: "bottom-left",
                rotate: "-rotate-12"
            }
        ]
    },
    stats: [
        {value: "3+", label: "Years Exp"},
        {value: "15+", label: "Projects"},
        {value: "60+", label: "Team Size"}
    ],
    contacts: [
        {
            type: "email",
            icon: "Mail",
            value: "haiphamjavadev@gmail.com",
            href: "mailto:haiphamjavadev@gmail.com"
        },
        {
            type: "phone",
            icon: "Phone",
            value: "0979 015 430",
            href: "tel:0979015430"
        },
        {
            type: "location",
            icon: "MapPin",
            value: "Hanoi, Vietnam"
        }
    ],
    socials: [
        {
            icon: "Github",
            href: "https://github.com",
            bg: "from-gray-800 to-gray-900",
            hoverBg: "from-gray-700 to-gray-800"
        },
        {
            icon: "Linkedin",
            href: "https://linkedin.com",
            bg: "from-blue-600 to-blue-700",
            hoverBg: "from-blue-500 to-blue-600"
        }
    ],
    ctas: [
        {
            type: "download",
            icon: "Download",
            text: "Download CV",
            bg: "from-purple-600 to-pink-600",
            hoverBg: "from-purple-500 to-pink-500"
        },
        {
            type: "contact",
            icon: "Mail",
            text: "Contact Me",
            bg: "from-green-600 to-emerald-600",
            hoverBg: "from-green-500 to-emerald-500"
        }
    ]
};

export const Header = () => {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: (e.clientX - rect.left - rect.width / 2) / 20,
            y: (e.clientY - rect.top - rect.height / 2) / 20
        });
    };

    return (
        <header
            className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-24 overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            <AnimatedBackground/>
            <FloatingCodeLines/>
            <ParticleSystem/>

            <div
                className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Avatar with 3D tilt effect */}
                        <div
                            className="relative group perspective-1000"
                            style={{
                                transform: `rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg)`
                            }}
                        >
                            <div className="w-48 h-48 relative">
                                <div
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow"></div>
                                <div
                                    className="absolute inset-2 rounded-full bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 animate-spin-reverse"></div>
                                <div
                                    className="absolute inset-4 rounded-full bg-gray-900 overflow-hidden border-4 border-white shadow-2xl">
                                    <img
                                        src={headers.profile.avatar}
                                        alt={headers.profile.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div
                                    className={`absolute bottom-4 right-4 flex items-center gap-2 bg-${headers.profile.status.color} px-3 py-1 rounded-full shadow-lg animate-pulse`}>
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-xs font-bold text-white">{headers.profile.status.text}</span>
                                </div>
                            </div>
                            {/* Floating badges */}
                            {headers.profile.badges.map((badge, idx) => (
                                <div
                                    key={idx}
                                    className={`absolute ${badge.position === "top-right" ? "-top-4 -right-4" : "-bottom-2 -left-4"} bg-${badge.color} text-${badge.textColor} px-4 py-2 rounded-lg font-bold text-sm shadow-xl transform ${badge.rotate} animate-bounce-slow`}
                                    style={{animationDelay: idx * 500 + "ms"}}
                                >
                                    {badge.text}
                                </div>
                            ))}
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <div className="mb-4">
                                <span className="text-blue-400 font-mono text-sm">$ whoami</span>
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
                                <Terminal className="text-green-400 animate-pulse" size={24}/>
                                <p className="text-2xl md:text-3xl font-bold">
                                    <span className="text-gray-300">{headers.profile.title.split(" ")[0]}</span>{" "}
                                    <span
                                        className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">{headers.profile.title.split(" ").slice(1).join(" ")}</span>
                                </p>
                            </div>
                            {/* Stats Bar */}
                            <div className="grid grid-cols-3 gap-4 mb-8 max-w-xl mx-auto md:mx-0">
                                {headers.stats.map((stat, idx) => {
                                    const color = stat.color || getRandomColor();
                                    return (
                                        <div
                                            key={idx}
                                            className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:scale-105 transition transform"
                                        >
                                            <div className={`text-3xl font-bold text-${color}`}>{stat.value}</div>
                                            <div className="text-sm text-gray-300">{stat.label}</div>
                                        </div>
                                    );
                                })}
                            </div>
                            {/* Contact info */}
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-gray-300 mb-8">
                                {headers.contacts.map((contact, idx) => {
                                    const color = contact.color || getRandomColor();
                                    return contact.href ? (
                                        <a key={idx} href={contact.href}
                                           className="flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-lg hover:bg-white/20 transition border border-white/20">
                                            {getIconComponent(contact.icon, 18, `text-${color}`)}
                                            <span className="text-sm font-medium">{contact.value}</span>
                                        </a>
                                    ) : (
                                        <div key={idx}
                                             className="flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-lg border border-white/20">
                                            {getIconComponent(contact.icon, 18, `text-${color}`)}
                                            <span className="text-sm font-medium">{contact.value}</span>
                                        </div>
                                    );
                                })}
                            </div>
                            {/* CTA Buttons and Socials */}
                            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                                {headers.socials.map((social, idx) => (
                                    <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer"
                                       className={`group relative bg-gradient-to-r ${social.bg} hover:${social.hoverBg} p-4 rounded-xl transition transform hover:scale-110 border border-gray-700 overflow-hidden`}>
                                        <div
                                            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition"></div>
                                        {getIconComponent(social.icon, 24, `relative z-10`)}
                                    </a>
                                ))}
                                {headers.ctas.map((cta, idx) => (
                                    <button
                                        key={idx}
                                        className={`group relative bg-gradient-to-r ${cta.bg} hover:${cta.hoverBg} px-8 py-4 rounded-xl flex items-center gap-3 transition transform hover:scale-105 overflow-hidden shadow-2xl`}
                                    >
                                        <div
                                            className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition"></div>
                                        {getIconComponent(cta.icon, 24, `relative z-10 group-hover:animate-bounce`)}
                                        <span className="font-bold text-lg relative z-10">{cta.text}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-white rounded-full animate-scroll"></div>
                </div>
            </div>
        </header>
    );
};