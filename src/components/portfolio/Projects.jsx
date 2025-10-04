import React, {useState} from 'react';
import {X, Calendar, Users, Briefcase, CheckCircle, ChevronRight, Award, Code, Target} from 'lucide-react';

const colorKeys = [
    "blue", "purple", "green", "orange", "red", "indigo",
    "pink", "yellow", "teal", "cyan", "lime", "amber",
    "emerald", "fuchsia", "rose", "violet", "sky", "slate"
];
const getRandomColor = () => colorKeys[Math.floor(Math.random() * colorKeys.length)];

export const Projects = ({projects}) => {
    const [selectedProject, setSelectedProject] = useState(null);

    const getColorClasses = (color) => {
        const colors = {
            blue: {
                gradient: 'from-blue-600 to-cyan-500',
                bg: 'bg-blue-100',
                text: 'text-blue-800',
                border: 'border-blue-200',
                hover: 'hover:from-blue-700 hover:to-cyan-600'
            },
            purple: {
                gradient: 'from-purple-600 to-pink-500',
                bg: 'bg-purple-100',
                text: 'text-purple-800',
                border: 'border-purple-200',
                hover: 'hover:from-purple-700 hover:to-pink-600'
            },
            green: {
                gradient: 'from-green-600 to-emerald-500',
                bg: 'bg-green-100',
                text: 'text-green-800',
                border: 'border-green-200',
                hover: 'hover:from-green-700 hover:to-emerald-600'
            },
            orange: {
                gradient: 'from-orange-600 to-amber-500',
                bg: 'bg-orange-100',
                text: 'text-orange-800',
                border: 'border-orange-200',
                hover: 'hover:from-orange-700 hover:to-amber-600'
            },
            red: {
                gradient: 'from-red-600 to-rose-500',
                bg: 'bg-red-100',
                text: 'text-red-800',
                border: 'border-red-200',
                hover: 'hover:from-red-700 hover:to-rose-600'
            },
            indigo: {
                gradient: 'from-indigo-600 to-blue-500',
                bg: 'bg-indigo-100',
                text: 'text-indigo-800',
                border: 'border-indigo-200',
                hover: 'hover:from-indigo-700 hover:to-blue-600'
            },
            pink: {
                gradient: 'from-pink-600 to-fuchsia-500',
                bg: 'bg-pink-100',
                text: 'text-pink-800',
                border: 'border-pink-200',
                hover: 'hover:from-pink-700 hover:to-fuchsia-600'
            },
            yellow: {
                gradient: 'from-yellow-400 to-amber-500',
                bg: 'bg-yellow-100',
                text: 'text-yellow-800',
                border: 'border-yellow-200',
                hover: 'hover:from-yellow-500 hover:to-amber-600'
            },
            teal: {
                gradient: 'from-teal-500 to-cyan-400',
                bg: 'bg-teal-100',
                text: 'text-teal-800',
                border: 'border-teal-200',
                hover: 'hover:from-teal-600 hover:to-cyan-500'
            },
            cyan: {
                gradient: 'from-cyan-500 to-blue-400',
                bg: 'bg-cyan-100',
                text: 'text-cyan-800',
                border: 'border-cyan-200',
                hover: 'hover:from-cyan-600 hover:to-blue-500'
            },
            lime: {
                gradient: 'from-lime-500 to-green-400',
                bg: 'bg-lime-100',
                text: 'text-lime-800',
                border: 'border-lime-200',
                hover: 'hover:from-lime-600 hover:to-green-500'
            },
            amber: {
                gradient: 'from-amber-500 to-yellow-400',
                bg: 'bg-amber-100',
                text: 'text-amber-800',
                border: 'border-amber-200',
                hover: 'hover:from-amber-600 hover:to-yellow-500'
            },
            emerald: {
                gradient: 'from-emerald-500 to-green-400',
                bg: 'bg-emerald-100',
                text: 'text-emerald-800',
                border: 'border-emerald-200',
                hover: 'hover:from-emerald-600 hover:to-green-500'
            },
            fuchsia: {
                gradient: 'from-fuchsia-500 to-pink-400',
                bg: 'bg-fuchsia-100',
                text: 'text-fuchsia-800',
                border: 'border-fuchsia-200',
                hover: 'hover:from-fuchsia-600 hover:to-pink-500'
            },
            rose: {
                gradient: 'from-rose-500 to-red-400',
                bg: 'bg-rose-100',
                text: 'text-rose-800',
                border: 'border-rose-200',
                hover: 'hover:from-rose-600 hover:to-red-500'
            },
            violet: {
                gradient: 'from-violet-500 to-purple-400',
                bg: 'bg-violet-100',
                text: 'text-violet-800',
                border: 'border-violet-200',
                hover: 'hover:from-violet-600 hover:to-purple-500'
            },
            sky: {
                gradient: 'from-sky-500 to-blue-400',
                bg: 'bg-sky-100',
                text: 'text-sky-800',
                border: 'border-sky-200',
                hover: 'hover:from-sky-600 hover:to-blue-500'
            },
            slate: {
                gradient: 'from-slate-500 to-gray-400',
                bg: 'bg-slate-100',
                text: 'text-slate-800',
                border: 'border-slate-200',
                hover: 'hover:from-slate-600 hover:to-gray-500'
            }
        };
        return colors[color] || colors.blue;
    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <div
                        className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-bold text-sm mb-4 shadow-lg">
                        🚀 PORTFOLIO
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
                        Featured <span
                        className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Building impactful solutions for enterprise clients
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => {
                        const colors = getColorClasses(project.color || getRandomColor());
                        const allTech = Object.values(project.techStack).flat();

                        return (
                            <div
                                key={idx}
                                className="group relative cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                {/* Glow effect */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} rounded-2xl blur opacity-25 group-hover:opacity-50 transition`}></div>

                                <div
                                    className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform group-hover:-translate-y-2 border-2 border-gray-100">
                                    {/* Header */}
                                    <div className={`bg-gradient-to-r ${colors.gradient} p-6 relative overflow-hidden`}>
                                        {/*<div className="absolute top-0 right-0 text-6xl opacity-20">{project.icon}</div>*/}
                                        <div className="relative z-10">
                                            <div className="flex items-start justify-between mb-2">
                                                <h3 className="text-2xl font-black text-white">{project.name}</h3>
                                            </div>
                                            <p className="text-white font-semibold opacity-90">{project.company}</p>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <p className="text-gray-700 mb-4 line-clamp-2 leading-relaxed">{project.description}</p>

                                        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-gray-500"/>
                                                <span className="font-medium">{project.period}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="w-4 h-4 text-gray-500"/>
                                                <span className="font-medium">{project.team}</span>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Briefcase className="w-4 h-4 text-gray-500"/>
                                                <span className="text-sm font-bold text-gray-900">{project.role}</span>
                                            </div>
                                            <h4 className="text-sm font-bold text-gray-900 mb-2">Tech Stack:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {allTech.slice(0, 4).map((tech, techIdx) => (
                                                    <span key={techIdx}
                                                          className={`px-2 py-1 ${colors.bg} ${colors.text} rounded text-xs font-medium`}>
                            {tech}
                          </span>
                                                ))}
                                                {allTech.length > 4 && (
                                                    <span
                                                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                            +{allTech.length - 4}
                          </span>
                                                )}
                                            </div>
                                        </div>

                                        <button
                                            className={`w-full bg-gradient-to-r ${colors.gradient} ${colors.hover} text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition transform group-hover:scale-105 shadow-lg`}>
                                            <span>View Details</span>
                                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm"
                    onClick={() => setSelectedProject(null)}>
                    <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
                         onClick={(e) => e.stopPropagation()}>
                        {/* Modal Header */}
                        <div
                            className={`bg-gradient-to-r ${getColorClasses(selectedProject.color).gradient} p-8 relative overflow-hidden`}>
                            <div className="absolute top-0 right-0 text-9xl opacity-10">{selectedProject.icon}</div>
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition"
                            >
                                <X className="w-6 h-6 text-white"/>
                            </button>
                            <div className="relative z-10">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="text-5xl">{selectedProject.icon}</div>
                                    <div className="flex-1">
                                        <h3 className="text-4xl font-black text-white mb-2">{selectedProject.name}</h3>
                                        <p className="text-xl text-white opacity-90 font-semibold">{selectedProject.company}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-6 text-white text-sm">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-5 h-5"/>
                                        <span className="font-semibold">{selectedProject.period}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="w-5 h-5"/>
                                        <span className="font-semibold">{selectedProject.team} members</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Briefcase className="w-5 h-5"/>
                                        <span className="font-semibold">{selectedProject.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
                            {/* Description */}
                            <div className="mb-8">
                                <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Target className="w-6 h-6 text-blue-600"/>
                                    Project Overview
                                </h4>
                                <p className="text-gray-700 text-lg leading-relaxed">{selectedProject.fullDescription}</p>
                            </div>

                            {/* Tech Stack */}
                            <div className="mb-8">
                                <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Code className="w-6 h-6 text-purple-600"/>
                                    Technology Stack
                                </h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {Object.entries(selectedProject.techStack).map(([category, techs], idx) => (
                                        <div key={idx}
                                             className={`bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border-2 ${getColorClasses(selectedProject.color).border}`}>
                                            <h5 className="font-bold text-gray-900 mb-3">{category}</h5>
                                            <div className="flex flex-wrap gap-2">
                                                {techs.map((tech, techIdx) => (
                                                    <span key={techIdx}
                                                          className={`px-3 py-1 ${getColorClasses(selectedProject.color).bg} ${getColorClasses(selectedProject.color).text} rounded-lg text-sm font-medium`}>
                            {tech}
                          </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Responsibilities */}
                            <div className="mb-8">
                                <h4 className="text-2xl font-bold text-gray-900 mb-4">Key Responsibilities</h4>
                                <div className="grid gap-3">
                                    {selectedProject.responsibilities.map((resp, idx) => (
                                        <div key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"/>
                                            <span className="text-gray-700 leading-relaxed">{resp}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Achievements */}
                            <div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Award className="w-6 h-6 text-yellow-600"/>
                                    Key Achievements
                                </h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {selectedProject.achievements.map((achievement, idx) => (
                                        <div key={idx}
                                             className={`bg-gradient-to-br ${getColorClasses(selectedProject.color).gradient} p-6 rounded-xl text-white shadow-lg`}>
                                            <div className="flex items-start gap-3">
                                                <div
                                                    className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="font-bold">{idx + 1}</span>
                                                </div>
                                                <p className="font-semibold leading-relaxed">{achievement}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
