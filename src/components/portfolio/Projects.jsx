import React, { useState } from 'react';
import { Calendar, Users, Briefcase, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ProjectDetailModal } from "./modal/ProjectDetailModal.jsx";
import {getColorClasses} from "../../utils/RandomColor.jsx";

const colorKeys = [
    "blue", "purple", "green", "orange", "red", "indigo",
    "pink", "yellow", "teal", "cyan", "lime", "amber",
    "emerald", "fuchsia", "rose", "violet", "sky", "slate"
];
const getRandomColor = () => colorKeys[Math.floor(Math.random() * colorKeys.length)];


export const Projects = ({ projects }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const { t } = useTranslation("projects");

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-bold text-sm mb-4 shadow-lg">
                        🚀 {t("portfolio")}
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
                        {t("featured")} &{" "}
                        <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                            {t("projects")}
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("deliveringSolutions")}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => {
                        const colors = getColorClasses(project.color || getRandomColor());
                        const allTech = Object.values(project.techStack).flat();

                        return (
                            <div
                                key={idx}
                                className="group relative cursor-pointer"
                                onClick={() => setSelectedProject({ ...project, colors })}
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} rounded-2xl blur opacity-25 group-hover:opacity-50 transition`}
                                ></div>

                                <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform group-hover:-translate-y-2 border-2 border-gray-100">
                                    <div className={`bg-gradient-to-r ${colors.gradient} p-6 relative overflow-hidden`}>
                                        <div className="relative z-10">
                                            <h3 className="text-2xl font-black text-white">{project.name}</h3>
                                            <p className="text-white font-semibold opacity-90">{project.company}</p>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <p className="text-gray-700 mb-4 line-clamp-2 leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-gray-500" />
                                                <span className="font-medium">{project.period}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="w-4 h-4 text-gray-500" />
                                                <span className="font-medium">{project.team}</span>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Briefcase className="w-4 h-4 text-gray-500" />
                                                <span className="text-sm font-bold text-gray-900">{project.role}</span>
                                            </div>
                                            <h4 className="text-sm font-bold text-gray-900 mb-2">
                                                {t("common:technologyStack")}:
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {allTech.slice(0, 4).map((tech, techIdx) => (
                                                    <span
                                                        key={techIdx}
                                                        className={`px-2 py-1 ${colors.bg} ${colors.text} rounded text-xs font-medium`}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {allTech.length > 4 && (
                                                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                                                        +{allTech.length - 4}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <button
                                            className={`w-full bg-gradient-to-r ${colors.gradient} ${colors.hover} text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition transform group-hover:scale-105 shadow-lg`}
                                        >
                                            <span>{t("common:viewDetails")}</span>
                                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {selectedProject && (
                <ProjectDetailModal
                    project={selectedProject}
                    companyColor={selectedProject.colors}
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
};
