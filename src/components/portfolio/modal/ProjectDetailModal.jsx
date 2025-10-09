import {useTranslation} from "react-i18next";
import React, {useState} from "react";
import {
    Award,
    Briefcase,
    Building,
    Calendar,
    CheckCircle,
    Code,
    Image as ImageIcon,
    Target,
    Users,
    X
} from "lucide-react";
import {
    Globe, Database, Server, Smartphone, Settings, Cpu, Box, Cloud, Layers, Shield, Network, Zap, Lock, Bell, Clock
} from "lucide-react";

export const ProjectDetailModal = ({project, companyColor, isOpen, onClose}) => {
    const techIcons = {
        architecture: <Layers className={companyColor.text} size={20}/>,
        backend: <Server className={companyColor.text} size={20}/>,
        gateway: <Network className={companyColor.text} size={20}/>,
        database: <Database className={companyColor.text} size={20}/>,
        devops: <Cloud className={companyColor.text} size={20}/>,
        messaging: <Zap className={companyColor.text} size={20}/>,
        security: <Shield className={companyColor.text} size={20}/>,
        monitoring: <Bell className={companyColor.text} size={20}/>,
        cache: <Box className={companyColor.text} size={20}/>,
        scheduler: <Clock className={companyColor.text} size={20}/>,
        tools: <Settings className={companyColor.text} size={20}/>,
        core: <Cpu className={companyColor.text} size={20}/>,
        frontend: <Globe className={companyColor.text} size={20}/>,
        framework: <Layers className={companyColor.text} size={20}/>,
        mobile: <Smartphone className={companyColor.text} size={20}/>,
        other: <Settings className={companyColor.text} size={20}/>
    };

    if (!isOpen || !project) return null;
    const {t} = useTranslation("experience");
    const [previewImage, setPreviewImage] = useState(null);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm" onClick={onClose}/>
            <div
                className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto animate-scale-up">
                {/* Header */}
                <div className={`bg-gradient-to-r ${companyColor.gradient} p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 text-9xl opacity-10">🚀</div>
                    <button onClick={onClose}
                            className="absolute top-6 right-6 p-2 bg-white/20 hover:bg-white/30 rounded-full transition backdrop-blur-sm z-20">
                        <X size={25}/>
                    </button>
                    <div className="relative z-10">
                        <div className="flex items-start gap-4 mb-4">
                            <div className="p-4 bg-white/20 backdrop-blur-lg rounded-2xl border-2 border-white/30">
                                <Code size={32}/>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-4xl font-black mb-2">{project.name}</h2>
                                <p className="text-xl text-white/90 mb-3">{project.description}</p>
                                <div className="flex flex-wrap gap-3">
                                    <div
                                        className="flex items-center gap-2 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full border border-white/30">
                                        <Calendar size={16}/>
                                        <span className="font-semibold text-sm">{project.period}</span>
                                    </div>
                                    <div
                                        className="flex items-center gap-2 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full border border-white/30">
                                        <Users size={16}/>
                                        <span
                                            className="font-semibold text-sm">{project.teamSize} {t("common:members")}</span>
                                    </div>
                                    <div
                                        className="flex items-center gap-2 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full border border-white/30">
                                        <Briefcase size={16}/>
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
                        <h3 className={`text-2xl font-black text-gray-900 mb-4 flex items-center gap-2 ${companyColor.text}`}>
                            <Building className={companyColor.text} size={28}/>
                            {t("customerDetails")}
                        </h3>
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <p className="text-lg"><span className="font-bold">{t("customer")}</span> {project.customer}
                            </p>
                            <p className="text-gray-600 mt-2">{project.fullDescription}</p>
                        </div>
                    </div>

                    {/* My Role & Responsibilities */}
                    {project.responsibilities && (
                        <div>
                            <h3 className={`text-2xl font-black mb-4 flex items-center gap-2 ${companyColor.text}`}>
                                <Target className={companyColor.text} size={28}/>
                                {t("myRoleResponsibilities")}
                            </h3>
                            <div className="space-y-3">
                                {project.responsibilities.map((resp, idx) => (
                                    <div
                                        key={idx}
                                        className={`p-4 ${companyColor.bg} rounded-xl border-2 ${companyColor.bg} flex items-start gap-3`}
                                    >
                                        <div className={`p-2 ${companyColor.bg} rounded-lg`}>
                                            <Award className={`text-${companyColor.bg}}`} size={20}/>
                                        </div>
                                        <span
                                            className={`font-semibold flex-1 ${companyColor.text}`}>{resp}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Technologies Used */}
                    <div>
                        <h3 className={`text-2xl font-black text-gray-900 mb-4 flex items-center gap-2 ${companyColor.text}`}>
                            <Code className={companyColor.text} size={28}/>
                            {t("common:technologyStack")}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {Object.entries(project.techStack).map(([category, techs]) => (
                                <div key={category} className="p-6 bg-gray-50 rounded-xl">
                                    <h4 className="font-bold text-gray-900 mb-3 capitalize flex items-center gap-2">
                                        {techIcons[category.toLowerCase()] || techIcons.other}
                                        {category}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {techs.map((tech, idx) => (
                                            <span key={idx}
                                                  className={`px-3 py-1 ${companyColor.bg} ${companyColor.text} rounded-full text-sm font-medium`}>
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
                            <h3 className={`text-2xl font-black mb-4 flex items-center gap-2 ${companyColor.text}`}>
                                <Award className={companyColor.text} size={28}/>
                                {t("common:keyAchievements")}
                            </h3>
                            <div className="space-y-3">
                                {project.achievements.map((achievement, idx) => (
                                    <div
                                        key={idx}
                                        className={`p-4 ${companyColor.bg} rounded-xl border-2 ${companyColor.bg} flex items-start gap-3`}
                                    >
                                        <div className={`p-2 ${companyColor.bg} rounded-lg`}>
                                            <CheckCircle className={`text-${companyColor.text}}`} size={20}/>
                                        </div>
                                        <span
                                            className={`font-semibold flex-1 ${companyColor.text}`}>{achievement}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {project.images && project.images.length > 0 && (
                        <div className="p-8">
                            <h3 className={`text-2xl font-black text-gray-900 mb-4 flex items-center gap-2 ${companyColor.text}`}>
                                <ImageIcon className={companyColor.text} size={28}/>
                                {t("common:projectImages")}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {project.images.map((img, idx) => (
                                    <div key={idx}
                                         className="relative bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
                                         onClick={() => setPreviewImage(img.src)}>
                                        <img src={img.src} alt={img.alt} className="w-full h-48 object-cover"/>
                                        <div className="p-3 text-sm text-gray-700 text-center bg-white border-t">
                                            {img.alt}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {previewImage && (
                                <div
                                    className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in"
                                    onClick={() => setPreviewImage(null)}>
                                    <div
                                        className="relative bg-white rounded-2xl overflow-hidden shadow-2xl max-w-5xl w-[90%]"
                                        onClick={(e) => e.stopPropagation()}>
                                        <button onClick={() => setPreviewImage(null)}
                                                className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10 transition">
                                            <X size={20}/>
                                        </button>
                                        <img src={previewImage} alt="Preview"
                                             className="w-full max-h-[80vh] object-contain bg-black"/>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Footer */}
                    <div className={`bg-gradient-to-r ${companyColor.bg} to-white p-6 border-t-2 ${companyColor.bg}`}>
                        <button onClick={onClose}
                                className={`w-full bg-gradient-to-r ${companyColor.gradient} text-white py-4 rounded-xl font-bold hover:shadow-lg transition`}>
                            {t("common:close")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}