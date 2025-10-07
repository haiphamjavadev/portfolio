import { Terminal, Database, Server, Code } from 'react-feather';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver.js';
import { getIconComponent } from "../../utils/GetIconForAll.jsx";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

export const Skills = ({ skills }) => {
    const [ref, isVisible] = useIntersectionObserver();
    const [showAll, setShowAll] = useState(false);
    const { t } = useTranslation("skills");
    const MAX_VISIBLE = 5;


    return (
        <section ref={ref}
            className={`py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <div
                        className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full font-bold text-sm mb-4 shadow-lg">
                        💪 {t("expertise")}
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
                        {t("technical")} <span
                            className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t("arsenal")}</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {t("masteringTools")}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skills.skills.map((category, idx) => (
                        <div key={idx} className="group relative">
                            <div
                                className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition`}></div>

                            <div
                                className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 border-2 border-gray-100">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={`bg-${category.color}-100 p-4 rounded-xl group-hover:scale-110 transition`}>
                                            {getIconComponent(category.icon, 32, `text-${category.color}-400`)}

                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-gray-900">{category.title}</h3>
                                            <p className="text-sm text-gray-500 font-medium">{t("proficiencyLevel")}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ${isVisible ? 'animate-skill-bar' : ''}`}
                                            style={{ width: isVisible ? `${100}%` : '0%' }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {category.skills.map((skill, skillIdx) => (
                                        <div key={skillIdx}
                                            className="group/skill bg-gray-50 hover:bg-gray-100 p-4 rounded-xl transition">
                                            <div className="flex items-center gap-3 mb-2">
                                                <img
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    className="w-10 h-10 object-contain"
                                                />
                                                <span className="font-bold text-gray-900 text-sm">{skill.name}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000`}
                                                        style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                                                    ></div>
                                                </div>
                                                <span className="text-xs font-bold text-gray-600">{skill.level}%</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {skills.techStacks.length > 0 && (
                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">{t("completeTechStack")}</h3>
                        <div className="flex flex-wrap gap-3 justify-center max-w-5xl mx-auto">
                            {(showAll ? skills.techStacks : skills.techStacks.slice(0, MAX_VISIBLE)).map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="group relative px-5 py-3 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border-2 border-gray-200 hover:border-blue-400 font-bold text-gray-800 cursor-pointer"
                                >
                                    <span className="relative z-10">{tech}</span>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-10 transition"></div>
                                </span>
                            ))}
                        </div>
                        {skills.techStacks.length > MAX_VISIBLE && (
                            <button
                                className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full font-bold shadow hover:bg-blue-600 transition"
                                onClick={() => setShowAll((prev) => !prev)}
                            >
                                {showAll ? t("showLess") : t("showMore")}
                            </button>
                        )}
                    </div>
                )}

            </div>
        </section>
    );
};
