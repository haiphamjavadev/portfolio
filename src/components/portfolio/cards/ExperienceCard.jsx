import {useTranslation} from "react-i18next";
import {ArrowRight, Clock, Users} from "lucide-react";
import React from "react";

export const ExperienceCard = ({experience, index, onClick}) => {
    const isLeft = index % 2 === 0;
    const {t} = useTranslation("experience");

    return (
        <div className={`relative ${isLeft ? 'md:pr-[50%]' : 'md:pl-[50%] md:text-right'}`}>
            {/* Timeline dot */}
            <div className="absolute left-8 md:left-1/2 top-8 w-16 h-16 transform -translate-x-1/2 hidden md:block">
                <div
                    className={`w-full h-full bg-gradient-to-br from-${experience.color}-500 to-${experience.color}-400 rounded-full flex items-center justify-center text-3xl shadow-2xl animate-pulse-slow border-4 border-gray-900`}>
                    <img src={experience.logo} alt={experience.company} className="w-20 h-20 object-contain"/>
                </div>
            </div>

            <div className="group relative md:mx-8">
                <div
                    className={`absolute inset-0 bg-gradient-to-r from-${experience.color}-500 to-${experience.color}-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition`}></div>

                <div
                    className="relative bg-gray-800 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition duration-500 border-2 border-gray-700 transform group-hover:-translate-y-2">
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                        <div className={isLeft ? '' : 'md:text-right'}>
                            <h3 className="text-3xl font-black mb-2">{experience.company}</h3>
                            <p className="text-xl font-bold text-gray-300 mb-2">{experience.position}</p>
                            <p className="text-gray-400 leading-relaxed mb-4">{experience.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                <span
                                    className={`px-3 py-1 bg-${experience.color}-500/20 text-${experience.color}-300 rounded-full text-sm font-bold border border-${experience.color}-500/30`}>
                                    {experience.projects.length} {t('common:projects')}
                                </span>
                                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-bold">
                                    {experience.duration} {t('common:years')}
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-2">
                            {experience.current && (
                                <span
                                    className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-bold shadow-lg animate-pulse">
                                    {t("currentlyWorkingHere")}
                                </span>
                            )}
                            <span className="flex items-center gap-2 text-gray-400 font-medium">
                                <Clock size={18}/>
                                {experience.period}
                            </span>
                        </div>
                    </div>

                    {/* Project Preview Cards */}
                    <div className="mb-6">
                        <h4 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wide">{t("keyProjects")}:</h4>
                        <div className="space-y-2">
                            {experience.projects.slice(0, 3).map((project, pIdx) => (
                                <div key={pIdx} className="p-3 bg-gray-700/50 rounded-lg border border-gray-600">
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col items-start">
                                            <p className="font-bold text-white text-sm">{project.name}</p>
                                            <p className="text-xs text-gray-400">{project.role}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <p className="text-xs text-gray-400">{project.teamSize}</p>
                                            <Users size={14} className="text-gray-400"/>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {experience.projects.length > 3 && (
                                <p className="text-sm text-gray-400 italic">+{experience.projects.length - 3} {t("moreProjects")}...</p>
                            )}
                        </div>
                    </div>

                    <button
                        onClick={() => onClick(experience)}
                        className={`w-full bg-gradient-to-r from-${experience.color}-600 to-${experience.color}-400 hover:from-${experience.color}-700 hover:to-${experience.color}-500 text-white py-4 px-6 rounded-xl font-bold transition transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg`}
                    >
                        <span>{t("viewAllProjects", {count: experience.projects.length})}</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition"/>
                    </button>
                </div>
            </div>
        </div>
    );
};