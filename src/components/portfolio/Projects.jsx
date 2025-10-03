import { useIntersectionObserver } from "../../hooks/useIntersectionObserver.js";
import { useState } from "react";
import { Briefcase, Calendar, ChevronRight, Users } from "lucide-react";

export const Projects = ({projects}) => {
    const [ref, isVisible] = useIntersectionObserver();
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section ref={ref}
            className={`py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
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

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group relative cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div
                                className={`absolute inset-0 rounded-2xl blur opacity-25 group-hover:opacity-50 transition ${project.color === "blue" ? "bg-gradient-to-r from-blue-400 to-blue-600" :
                                        project.color === "purple" ? "bg-gradient-to-r from-purple-400 to-purple-600" :
                                            project.color === "green" ? "bg-gradient-to-r from-green-400 to-green-600" :
                                                project.color === "orange" ? "bg-gradient-to-r from-orange-400 to-orange-600" :
                                                    project.color === "red" ? "bg-gradient-to-r from-red-400 to-red-600" :
                                                        project.color === "indigo" ? "bg-gradient-to-r from-indigo-400 to-indigo-600" : ""
                                    }`}></div>

                            <div
                                className="relative bg-white rounded-2xl shadow-xl hover:shadow-3xl transition duration-500 overflow-hidden transform group-hover:-translate-y-2 border-2 border-gray-100">
                                {/* Project header with gradient */}
                                <div
                                    className={`bg-gradient-to-r from-${project.color}-600 to-${project.color}-400 p-6 relative overflow-hidden`}>
                                    <div className="absolute top-0 right-0 text-6xl opacity-20">{project.icon}</div>
                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="text-2xl font-black text-white">{project.name}</h3>
                                            <span
                                                className={`px-3 py-1 ${project.status === 'Active' ? 'bg-green-500' : 'bg-gray-700'} text-white rounded-full text-xs font-bold`}>
                                                {project.status}
                                            </span>
                                        </div>
                                        <p className="text-white/90 font-semibold">{project.company}</p>
                                    </div>
                                </div>

                                {/* Project content */}
                                <div className="p-6">
                                    <p className="text-gray-700 mb-4 line-clamp-2 leading-relaxed">{project.description}</p>

                                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} className="text-gray-500" />
                                            <span className="font-medium">{project.period}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users size={16} className="text-gray-500" />
                                            <span className="font-medium">{project.team}</span>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Briefcase size={16} className="text-gray-500" />
                                            <span className="text-sm font-bold text-gray-900">{project.role}</span>
                                        </div>
                                        <h4 className="text-sm font-bold text-gray-900 mb-2">Tech Stack:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.slice(0, 4).map((tech, techIdx) => (
                                                <span
                                                    key={techIdx}
                                                    className={`px-2 py-1 rounded text-xs font-medium ${project.color === "blue" ? "bg-blue-100 text-blue-800" :
                                                            project.color === "purple" ? "bg-purple-100 text-purple-800" :
                                                                project.color === "green" ? "bg-green-100 text-green-800" :
                                                                    project.color === "orange" ? "bg-orange-100 text-orange-800" :
                                                                        project.color === "red" ? "bg-red-100 text-red-800" :
                                                                            project.color === "indigo" ? "bg-indigo-100 text-indigo-800" : ""
                                                        }`}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.tech.length > 4 && (
                                                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                                                    +{project.tech.length - 4}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <button
                                        className={`w-full bg-gradient-to-r from-${project.color}-600 to-${project.color}-400 hover:from-${project.color}-700 hover:to-${project.color}-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition transform group-hover:scale-105`}
                                    >
                                        <span>View Details</span>
                                        <ChevronRight size={18} className="group-hover:translate-x-1 transition" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};