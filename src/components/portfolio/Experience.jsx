import React, { useEffect, useRef, useState } from 'react';
import {
    ArrowRight,
    Award,
    Briefcase,
    Building,
    Calendar,
    CheckCircle,
    ChevronDown,
    ChevronRight,
    Clock,
    Code,
    Database,
    ExternalLink,
    GitBranch,
    Layers,
    Server,
    Shield,
    Target,
    Users,
    X
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';


// Intersection Observer Hook
const useIntersectionObserver = (options = {}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, { threshold: 0.1, ...options });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return [elementRef, isVisible];
};

// Particle System Component
const ParticleSystem = () => {
    const particles = Array.from({ length: 30 }, (_, i) => i);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full animate-particle"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${10 + Math.random() * 10}s`
                    }}
                />
            ))}
        </div>
    );
};

// Project Detail Modal Component
const ProjectDetailModal = ({ project, companyColor, isOpen, onClose }) => {
    if (!isOpen || !project) return null;
    const { t } = useTranslation("experience");
    // const { tCommon } = useTranslation("common");


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm" onClick={onClose} />

            <div
                className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto animate-scale-up">
                {/* Header */}
                <div
                    className={`bg-gradient-to-r from-${companyColor}-600 to-${companyColor}-400 p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 text-9xl opacity-10">🚀</div>

                    <button onClick={onClose}
                        className="absolute top-6 right-6 p-2 bg-white/20 hover:bg-white/30 rounded-full transition backdrop-blur-sm z-20">
                        <X size={25} />
                    </button>

                    <div className="relative z-10">
                        <div className="flex items-start gap-4 mb-4">
                            <div className={`p-4 bg-white/20 backdrop-blur-lg rounded-2xl border-2 border-white/30`}>
                                <Code size={32} />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-4xl font-black mb-2">{project.name}</h2>
                                <p className="text-xl text-white/90 mb-3">{project.description}</p>
                                <div className="flex flex-wrap gap-3">
                                    <div
                                        className="flex items-center gap-2 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full border border-white/30">
                                        <Calendar size={16} />
                                        <span className="font-semibold text-sm">{project.period}</span>
                                    </div>
                                    <div
                                        className="flex items-center gap-2 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full border border-white/30">
                                        <Users size={16} />
                                        <span className="font-semibold text-sm">{project.teamSize} {t("common:members")}</span>
                                    </div>
                                    <div
                                        className="flex items-center gap-2 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full border border-white/30">
                                        <Briefcase size={16} />
                                        <span className="font-semibold text-sm">{project.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className="p-8 space-y-8">
                    {/* Customer */}
                    <div>
                        <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
                            <Building className={`text-${companyColor}-600`} size={28} />
                            {t("customerDetails")}
                        </h3>
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <p className="text-lg"><span className="font-bold">{t("customer")}</span> {project.customer}</p>
                            <p className="text-gray-600 mt-2">{project.fullDescription}</p>
                        </div>
                    </div>

                    {/* My Role & Responsibilities */}
                    <div>
                        <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
                            <Target className={`text-${companyColor}-600`} size={28} />
                            {t("myRoleResponsibilities")}
                        </h3>
                        <div
                            className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border-2 border-blue-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-blue-600 rounded-xl">
                                    <Award className="text-white" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-gray-900">{project.role}</h4>
                                    <p className="text-sm text-gray-600">{t("positionInThisProject")}</p>
                                </div>
                            </div>
                            <ul className="space-y-3">
                                {project.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                                        <CheckCircle className={`text-${companyColor}-600 mt-1 flex-shrink-0`}
                                            size={20} />
                                        <span className="leading-relaxed">{resp}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Technologies Used */}
                    <div>
                        <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
                            <Code className={`text-${companyColor}-600`} size={28} />
                            {t("technologyStack")}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {Object.entries(project.techStack).map(([category, techs]) => (
                                <div key={category} className="p-6 bg-gray-50 rounded-xl">
                                    <h4 className="font-bold text-gray-900 mb-3 capitalize flex items-center gap-2">
                                        {category}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {techs.map((tech, idx) => (
                                            <span key={idx}
                                                className={`px-3 py-1 bg-${companyColor}-100 text-${companyColor}-800 rounded-full text-sm font-medium`}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {project.achievements && (
                        <div>
                            <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
                                <Trophy className={`text-${companyColor}-600`} size={28} />
                                {t("keyAchievements")}
                            </h3>
                            <div className="space-y-3">
                                {project.achievements.map((achievement, idx) => (
                                    <div key={idx}
                                        className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-100 flex items-start gap-3">
                                        <div className="p-2 bg-green-500 rounded-lg">
                                            <CheckCircle className="text-white" size={20} />
                                        </div>
                                        <span className="text-gray-900 font-semibold flex-1">{achievement}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div
                    className={`bg-gradient-to-r from-${companyColor}-50 to-white p-6 border-t-2 border-${companyColor}-100`}>
                    <button onClick={onClose}
                        className={`w-full bg-gradient-to-r from-${companyColor}-600 to-${companyColor}-400 text-white py-4 rounded-xl font-bold hover:shadow-lg transition`}>
                        {t("common:close")}
                    </button>
                </div>
            </div>
        </div>
    );
};

// Company Experience Modal Component
const CompanyExperienceModal = ({ experience, isOpen, onClose }) => {
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

// Experience Card Component
const ExperienceCard = ({ experience, index, onClick }) => {
    const isLeft = index % 2 === 0;
    const { t } = useTranslation("experience");

    return (
        <div className={`relative ${isLeft ? 'md:pr-[50%]' : 'md:pl-[50%] md:text-right'}`}>
            {/* Timeline dot */}
            <div className="absolute left-8 md:left-1/2 top-8 w-16 h-16 transform -translate-x-1/2 hidden md:block">
                <div
                    className={`w-full h-full bg-gradient-to-br from-${experience.color}-500 to-${experience.color}-400 rounded-full flex items-center justify-center text-3xl shadow-2xl animate-pulse-slow border-4 border-gray-900`}>
                    <img src={experience.logo} alt={experience.company} className="w-20 h-20 object-contain" />
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
                                <Clock size={18} />
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
                                        <div>
                                            <p className="font-bold text-white text-sm">{project.name}</p>
                                            <p className="text-xs text-gray-400">{project.role}</p>
                                        </div>
                                        <Users size={14} className="text-gray-400" />
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
                        <span>{t("viewAllProjects", { count: experience.projects.length })}</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
                    </button>
                </div>
            </div>
        </div>
    );
};

const Trophy = Award;

export const Experience = ({ experiences }) => {
    const [ref, isVisible] = useIntersectionObserver();
    const [selectedExperience, setSelectedExperience] = useState(null);
    const { t } = useTranslation("experience");

    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
      @keyframes particle {
        0%, 100% { transform: translate(0, 0); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translate(var(--tx, 100px), var(--ty, -100px)); opacity: 0; }
      }
      @keyframes pulse-slow {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
      @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes scale-up {
        from { transform: scale(0.9); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
      @keyframes slide-down {
        from { 
          opacity: 0;
          max-height: 0;
          transform: translateY(-10px);
        }
        to { 
          opacity: 1;
          max-height: 1000px;
          transform: translateY(0);
        }
      }
      .animate-particle { animation: particle linear infinite; }
      .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
      .animate-fade-in { animation: fade-in 0.3s ease-out; }
      .animate-scale-up { animation: scale-up 0.3s ease-out; }
      .animate-slide-down { animation: slide-down 0.4s ease-out; }
      .shadow-3xl { box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3); }
    `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <>
            <section ref={ref}
                className={`py-24 bg-gray-900 text-white relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <ParticleSystem />

                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                        <div
                            className="inline-block bg-green-500/20 text-green-400 px-6 py-2 rounded-full font-bold text-sm mb-4 backdrop-blur-lg border border-green-500/30">
                            💼 {t("professionalPath")}
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black mb-4">
                            {t("myWorkExperience")} <span
                                className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">{t("experience")}</span>
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div
                            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-purple-500 hidden md:block transform -translate-x-1/2"></div>

                        <div className="space-y-12">
                            {experiences.map((exp, idx) => (
                                <ExperienceCard
                                    key={idx}
                                    experience={exp}
                                    index={idx}
                                    onClick={setSelectedExperience}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Experience Modal */}
            <CompanyExperienceModal
                experience={selectedExperience}
                isOpen={!!selectedExperience}
                onClose={() => setSelectedExperience(null)}
            />
        </>
    );
};

