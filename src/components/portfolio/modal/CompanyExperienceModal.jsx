import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {
    Award,
    Briefcase,
    Building,
    Calendar, CheckCircle,
    ChevronDown, ChevronRight,
    Code,
    ExternalLink,
    Layers,
    Target,
    Users,
    X
} from "lucide-react";
import {ProjectDetailModal} from "./ProjectDetailModal.jsx";

export const CompanyExperienceModal = ({ experience, isOpen, onClose }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [expandedProject, setExpandedProject] = useState(null);
    const { t } = useTranslation("experience");

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setExpandedProject(null);
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !experience) return null;

    return (
        <>
            <div className="fixed inset-0 z-40 flex items-center justify-center p-4 animate-fade-in">
                <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm" onClick={onClose} />

                <div
                    className="relative bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto animate-scale-up">
                    {/* Company Header */}
                    <div
                        className={`bg-gradient-to-r from-${experience.color}-600 to-${experience.color}-400 p-8 text-white relative overflow-hidden`}>

                        <button onClick={onClose}
                                className="absolute top-6 right-6 p-2 bg-white/20 hover:bg-white/30 rounded-full transition backdrop-blur-sm z-20">
                            <X size={24} />
                        </button>

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-4">
                                <div
                                    className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center text-5xl">
                                    <img src={experience.logo} alt={experience.company} className="w-20 h-20 object-contain" />
                                </div>
                                <div>
                                    <h2 className="text-4xl font-black">{experience.company}</h2>
                                    <p className="text-white/90 text-xl font-semibold">{experience.position}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <div
                                    className="flex items-center gap-2 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full border border-white/30">
                                    <Calendar size={18} />
                                    <span className="font-semibold">{experience.period}</span>
                                </div>
                                <div
                                    className="flex items-center gap-2 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full border border-white/30">
                                    <Briefcase size={18} />
                                    <span className="font-semibold">{experience.projects.length} {t("common:projects")}</span>
                                </div>
                                {experience.current && (
                                    <div
                                        className="flex items-center gap-2 bg-green-500 px-4 py-2 rounded-full font-bold animate-pulse">
                                        <span className="w-2 h-2 bg-white rounded-full"></span>
                                        {t("currentlyWorkingHere")}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Company Overview */}
                    <div className="p-8 border-b-2 border-gray-100">
                        <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
                            <Building className={`text-${experience.color}-600`} size={28} />
                            {t("companyOverview")}
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed">{experience.description}</p>
                    </div>

                    {/* Projects Section */}
                    <div className="p-8">
                        <h3 className="text-3xl font-black text-gray-900 mb-8 flex items-center gap-3">
                            <Layers className={`text-${experience.color}-600`} size={32} />
                            {t("projectsIWorkedOn")}
                            <span
                                className={`px-4 py-1 bg-${experience.color}-100 text-${experience.color}-800 rounded-full text-base font-bold`}>
                                {experience.projects.length}
                            </span>
                        </h3>

                        <div className="space-y-6">
                            {experience.projects.map((project, idx) => (
                                <div key={idx} className="group relative">
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-r from-${experience.color}-400 to-${experience.color}-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition`}></div>

                                    <div
                                        className="relative bg-white border-2 border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden">
                                        {/* Project Header */}
                                        <div
                                            className="p-6 cursor-pointer"
                                            onClick={() => setExpandedProject(expandedProject === idx ? null : idx)}
                                        >
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <div className={`p-2 bg-${experience.color}-100 rounded-lg`}>
                                                            <Code className={`text-${experience.color}-600`} size={24} />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-2xl font-black text-gray-900">{project.name}</h4>
                                                            <p className="text-gray-600">{project.description}</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap gap-3 mt-4">
                                                        <div
                                                            className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-lg text-sm">
                                                            <Calendar size={14} />
                                                            <span
                                                                className="font-semibold text-gray-700">{project.period}</span>
                                                        </div>
                                                        <div
                                                            className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-lg text-sm">
                                                            <Users size={14} />
                                                            <span
                                                                className="font-semibold text-gray-700">{project.teamSize} {t("common:members")}</span>
                                                        </div>
                                                        <div
                                                            className="flex items-center gap-2 px-3 py-1 bg-blue-100 rounded-lg text-sm">
                                                            <Award size={14} className="text-blue-600" />
                                                            <span
                                                                className="font-semibold text-blue-700">{project.role}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col gap-2">
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setSelectedProject(project);
                                                        }}
                                                        className={`px-6 py-3 bg-gradient-to-r from-${experience.color}-600 to-${experience.color}-400 text-white rounded-xl font-bold hover:shadow-lg transition flex items-center gap-2 whitespace-nowrap`}
                                                    >
                                                        <span>{t("common:viewDetails")}</span>
                                                        <ExternalLink size={18} />
                                                    </button>
                                                    <button
                                                        className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition display flex items-center gap-2">
                                                        <ChevronDown
                                                            size={20}
                                                            className={`transform transition ${expandedProject === idx ? 'rotate-180' : ''}`}
                                                        />
                                                        <span>{t("common:more")}</span>

                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Expanded Content */}
                                        {expandedProject === idx && (
                                            <div
                                                className="px-6 pb-6 pt-0 border-t-2 border-gray-100 animate-slide-down">
                                                <div className="grid md:grid-cols-2 gap-6 mt-6">
                                                    {/* Quick Overview */}
                                                    <div>
                                                        <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                                            <Target size={18}
                                                                    className={`text-${experience.color}-600`} />
                                                            {t("quickOverview")}
                                                        </h5>
                                                        <div className="space-y-2 text-sm">
                                                            <p><span
                                                                className="font-semibold">{t("customer")}:</span> {project.customer}
                                                            </p>
                                                            <p><span
                                                                className="font-semibold">{t("duration")}:</span> {project.period}
                                                            </p>
                                                            <p><span
                                                                className="font-semibold">{t("teamSize")}:</span> {project.teamSize} {t("common:members")}
                                                            </p>
                                                            <p><span
                                                                className="font-semibold">{t("myRole")}:</span> {project.role}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Key Tech */}
                                                    <div>
                                                        <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                                            <Code size={18} className={`text-${experience.color}-600`} />
                                                            {t("keyTechnologies")}
                                                        </h5>
                                                        <div className="flex flex-wrap gap-2">
                                                            {Object.values(project.techStack).flat().slice(0, 8).map((tech, techIdx) => (
                                                                <span key={techIdx}
                                                                      className={`px-3 py-1 bg-${experience.color}-100 text-${experience.color}-800 rounded-full text-xs font-medium`}>
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* My Responsibilities Preview */}
                                                <div className="mt-6">
                                                    <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                                        <CheckCircle size={18}
                                                                     className={`text-${experience.color}-600`} />
                                                        {t('myResponsibilities')}
                                                    </h5>
                                                    <ul className="space-y-2">
                                                        {project.responsibilities.slice(0, 4).map((resp, rIdx) => (
                                                            <li key={rIdx}
                                                                className="flex items-start gap-2 text-sm text-gray-700">
                                                                <ChevronRight
                                                                    className={`text-${experience.color}-600 mt-0.5 flex-shrink-0`}
                                                                    size={16} />
                                                                <span>{resp}</span>
                                                            </li>
                                                        ))}
                                                        {project.responsibilities.length > 4 && (
                                                            <li className="text-sm text-gray-500 italic">
                                                                +{project.responsibilities.length - 4} {t('common:more')}...
                                                            </li>
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div
                        className={`bg-gradient-to-r from-${experience.color}-50 to-white p-6 border-t-2 border-${experience.color}-100`}>
                        <div className="flex items-center justify-between">
                            <p className="text-gray-600">
                                {t("totalDuration")}: <span
                                className="font-bold text-gray-900">{experience.duration || 'Ongoing'} {t('common:years')}</span>
                            </p>
                            <button onClick={onClose}
                                    className={`px-8 py-3 bg-gradient-to-r from-${experience.color}-600 to-${experience.color}-400 text-white rounded-xl font-bold hover:shadow-lg transition`}>
                                {t('common:close')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Detail Modal (nested) */}
            <ProjectDetailModal
                project={selectedProject}
                companyColor={experience.color}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </>
    );
};