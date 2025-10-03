import {useIntersectionObserver} from "../../hooks/useIntersectionObserver.js";
import {ParticleSystem} from "../../utils/ParticleSystem.jsx";
import {getIconComponent} from "../../utils/GetIconForAll.jsx";

const quickLinks = [
    {"label": "Home", "href": "#"},
    {"label": "Skills", "href": "#"},
    {"label": "Projects", "href": "#"},
    {"label": "Experience", "href": "#"},
    {"label": "Contact", "href": "#"},
];

export const Footer = ({profiles, socials, contacts}) => {
    const [ref, isVisible] = useIntersectionObserver();

    return (
        <section
            ref={ref}
            className={`py-24 bg-gray-900 text-white relative overflow-hidden transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
            <ParticleSystem/>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center font-black text-xl">
                                {profiles.initials}
                            </div>
                            <div>
                                <h3 className="text-2xl font-black">{profiles.name}</h3>
                                <p className="text-gray-400">{profiles.title}</p>
                            </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            {profiles.description}
                        </p>

                        <div className="flex gap-4">
                            {socials.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="group bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition transform hover:scale-110"
                                >
                                    {getIconComponent(social.icon, 24, "group-hover:rotate-12 transition")}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                            {getIconComponent("ChevronRight", 20, "text-blue-400")}
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-blue-400 transition flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all"></span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                            {getIconComponent("Mail", 20, "text-blue-400")}
                            Get In Touch
                        </h3>
                        <ul className="space-y-3 text-gray-400">
                            {contacts.map((contact, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    {getIconComponent(
                                        contact.icon,
                                        16,
                                        contact.type === "phone"
                                            ? "mt-1 text-green-400 flex-shrink-0"
                                            : contact.type === "location"
                                                ? "mt-1 text-red-400 flex-shrink-0"
                                                : "mt-1 text-blue-400 flex-shrink-0"
                                    )}
                                    {contact.href ? (
                                        <a
                                            href={contact.value}
                                            className={`hover:text-${
                                                contact.type === "phone" ? "green" : "blue"
                                            }-400 transition text-sm break-all`}
                                        >
                                            {contact.value}
                                        </a>
                                    ) : (
                                        <span className="text-sm">{contact.value}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            &copy; 2025 Pham Quang Hai. All rights reserved.
                        </p>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <span>Built with</span>
                            {getIconComponent("Heart", 16, "text-red-500 animate-pulse")}
                            <span>using React & Tailwind CSS</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};