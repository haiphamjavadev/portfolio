import React, { useState, useEffect, useRef } from 'react';
import {
    Briefcase, Clock, Users, CheckCircle, X, ExternalLink,
    TrendingUp, Award, Code, Target, Calendar, MapPin,
    ChevronRight, Zap, Star, Building, ArrowRight
} from 'lucide-react';

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

// Experience Detail Modal Component
const ExperienceModal = ({ experience, isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !experience) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-up">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r from-${experience.color}-600 to-${experience.color}-400 p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 text-9xl opacity-10">{experience.logo}</div>

                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 bg-white/20 hover:bg-white/30 rounded-full transition backdrop-blur-sm"
                    >
                        <X size={24} />
                    </button>

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center text-4xl border-2 border-white/30">
                                {experience.logo}
                            </div>
                            <div>
                                <h2 className="text-3xl font-black">{experience.company}</h2>
                                <p className="text-white/90 text-lg font-semibold">{experience.position}</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full border border-white/30">
                                <Calendar size={16} />
                                <span className="font-semibold">{experience.period}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full border border-white/30">
                                <Users size={16} />
                                <span className="font-semibold">{experience.teamSize || 'Team Project'}</span>
                            </div>
                            {experience.current && (
                                <div className="flex items-center gap-2 bg-green-500 px-4 py-2 rounded-full font-bold animate-pulse">
                                    <span className="w-2 h-2 bg-white rounded-full"></span>
                                    Currently Working
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Modal Body */}
                <div className="p-8 space-y-8">
                    {/* Description */}
                    <div>
                        <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
                            <Building className={`text-${experience.color}-600`} size={28} />
                            About the Role
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-lg">{experience.description}</p>
                    </div>

                    {/* Key Achievements */}
                    <div>
                        <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
                            <Award className={`text-${experience.color}-600`} size={28} />
                            Key Achievements
                        </h3>
                        <div className="space-y-3">
                            {experience.achievements.map((achievement, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition group">
                                    <div className={`p-2 bg-${experience.color}-100 rounded-lg group-hover:scale-110 transition flex-shrink-0`}>
                                        <CheckCircle className={`text-${experience.color}-600`} size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-900 font-semibold leading-relaxed">{achievement}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Detailed Responsibilities */}
                    {experience.responsibilities && (
                        <div>
                            <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
                                <Target className={`text-${experience.color}-600`} size={28} />
                                Responsibilities
                            </h3>
                            <ul className="space-y-2">
                                {experience.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                                        <ChevronRight className={`text-${experience.color}-600 mt-1 flex-shrink-0`} size={18} />
                                        <span>{resp}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Technologies Used */}
                    <div>
                        <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
                            <Code className={`text-${experience.color}-600`} size={28} />
                            Technologies & Tools
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {experience.tech.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className={`px-4 py-2 bg-${experience.color}-100 text-${experience.color}-800 rounded-full font-semibold text-sm hover:scale-110 transition cursor-default`}
                                >
                  {tech}
                </span>
                            ))}
                        </div>
                    </div>

                    {/* Projects Worked On */}
                    {experience.projects && (
                        <div>
                            <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
                                <Briefcase className={`text-${experience.color}-600`} size={28} />
                                Projects Delivered
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {experience.projects.map((project, idx) => (
                                    <div key={idx} className="p-4 bg-gray-50 rounded-xl hover:shadow-lg transition border-2 border-gray-100">
                                        <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                            <Star className={`text-${experience.color}-600`} size={16} />
                                            {project.name}
                                        </h4>
                                        <p className="text-sm text-gray-600">{project.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Impact & Metrics */}
                    {experience.metrics && (
                        <div>
                            <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
                                <TrendingUp className={`text-${experience.color}-600`} size={28} />
                                Impact & Metrics
                            </h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                {experience.metrics.map((metric, idx) => (
                                    <div key={idx} className={`p-6 bg-gradient-to-br from-${experience.color}-50 to-white rounded-xl border-2 border-${experience.color}-100`}>
                                        <div className="text-4xl font-black text-gray-900 mb-2">{metric.value}</div>
                                        <div className="text-sm text-gray-600 font-semibold">{metric.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className={`bg-gradient-to-r from-${experience.color}-50 to-white p-6 border-t-2 border-${experience.color}-100`}>
                    <div className="flex items-center justify-between">
                        <p className="text-gray-600 text-sm">
                            Duration: <span className="font-bold text-gray-900">{experience.duration || 'Ongoing'}</span>
                        </p>
                        <button
                            onClick={onClose}
                            className={`px-6 py-3 bg-gradient-to-r from-${experience.color}-600 to-${experience.color}-400 text-white rounded-xl font-bold hover:shadow-lg transition flex items-center gap-2`}
                        >
                            <span>Close</span>
                            <X size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Experience Card Component
const ExperienceCard = ({ experience, index, onClick }) => {
    const isLeft = index % 2 === 0;

    return (
        <div className={`relative ${isLeft ? 'md:pr-[50%]' : 'md:pl-[50%] md:text-right'}`}>
            {/* Timeline dot */}
            <div className="absolute left-8 md:left-1/2 top-8 w-16 h-16 transform -translate-x-1/2 hidden md:block">
                <div className={`w-full h-full bg-gradient-to-br from-${experience.color}-500 to-${experience.color}-400 rounded-full flex items-center justify-center text-3xl shadow-2xl animate-pulse-slow border-4 border-gray-900`}>
                    {experience.logo}
                </div>
            </div>

            <div className="group relative md:mx-8">
                <div className={`absolute inset-0 bg-gradient-to-r from-${experience.color}-500 to-${experience.color}-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition`}></div>

                <div className="relative bg-gray-800 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition duration-500 border-2 border-gray-700 transform group-hover:-translate-y-2">
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                        <div className={isLeft ? '' : 'md:text-right'}>
                            <h3 className="text-3xl font-black mb-2">{experience.company}</h3>
                            <p className="text-xl font-bold text-gray-300 mb-2">{experience.position}</p>
                            <p className="text-gray-400 leading-relaxed">{experience.description}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                            {experience.current && (
                                <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-bold shadow-lg animate-pulse">
                  Current
                </span>
                            )}
                            <span className="flex items-center gap-2 text-gray-400 font-medium">
                <Clock size={18} />
                                {experience.period}
              </span>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                            <Zap className={`text-${experience.color}-400`} size={20} />
                            Key Achievements
                        </h4>
                        <ul className="space-y-2">
                            {experience.achievements.slice(0, 3).map((achievement, aIdx) => (
                                <li key={aIdx} className="flex items-start gap-3">
                                    <CheckCircle className={`text-${experience.color}-400 mt-1 flex-shrink-0`} size={18} />
                                    <span className="text-gray-300">{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {experience.tech.slice(0, 5).map((tech, tIdx) => (
                            <span key={tIdx} className={`px-3 py-1 bg-${experience.color}-500/20 text-${experience.color}-300 rounded-full text-sm font-medium border border-${experience.color}-500/30`}>
                {tech}
              </span>
                        ))}
                        {experience.tech.length > 5 && (
                            <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-medium">
                +{experience.tech.length - 5} more
              </span>
                        )}
                    </div>

                    <button
                        onClick={() => onClick(experience)}
                        className={`w-full bg-gradient-to-r from-${experience.color}-600 to-${experience.color}-400 hover:from-${experience.color}-700 hover:to-${experience.color}-500 text-white py-3 px-6 rounded-xl font-bold transition transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg`}
                    >
                        <span>View Full Details</span>
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
                    </button>
                </div>
            </div>
        </div>
    );
};

// Main Experience Component
export const Experience = () => {
    const [ref, isVisible] = useIntersectionObserver();
    const [selectedExperience, setSelectedExperience] = useState(null);

    const experiences = [
        {
            company: "Viettel Software",
            period: "05/2024 - Present",
            duration: "9+ months",
            position: "Software Development Engineer",
            description: "Leading development of enterprise-scale systems for Vietnam Airlines and VAS",
            teamSize: "60 members",
            achievements: [
                "Architected microservices for 60-member team",
                "Optimized system performance by 40%",
                "Implemented CI/CD pipeline reducing deployment time by 60%",
                "Built scalable event-driven architecture with Kafka",
                "Mentored 5 junior developers on best practices"
            ],
            responsibilities: [
                "Design and develop RESTful APIs for Web and Mobile platforms",
                "Analyze SRS documents and work with Business Analysts",
                "Participate in Agile ceremonies (stand-ups, sprint planning, retrospectives)",
                "Optimize SQL queries and improve system performance",
                "Build data synchronization systems between platforms",
                "Debug and troubleshoot production issues"
            ],
            tech: ["Java", "Spring Boot", "K8S", "Kafka", "Redis", "MariaDB", "ELK", "Keycloak", "Jenkins", "Quartz"],
            projects: [
                { name: "VNA-MO", description: "Vietnam Airlines electronic flight document system" },
                { name: "Mydio", description: "Audio streaming and podcast platform" }
            ],
            metrics: [
                { value: "40%", label: "Performance Boost" },
                { value: "60%", label: "Faster Deployment" },
                { value: "10K+", label: "Daily Operations" }
            ],
            logo: "🔷",
            color: "blue",
            current: true
        },
        {
            company: "AC",
            period: "07/2022 - 04/2024",
            duration: "1 year 10 months",
            position: "Software Development Engineer",
            description: "Full-stack development and team leadership for multiple client projects",
            teamSize: "7-20 members",
            achievements: [
                "Led team of 7 engineers",
                "Delivered 4 major projects on time",
                "Reduced query response time by 50%",
                "Implemented multitenancy architecture for Loyalty System",
                "Worked onsite at TPBank for critical banking system"
            ],
            responsibilities: [
                "Lead technical discussions and architecture decisions",
                "Assign tasks and mentor team members",
                "Review code and ensure quality standards",
                "Design RESTful APIs for multiple platforms",
                "Develop both frontend (React) and backend (Java)",
                "Build CI/CD pipelines with GitLab CI",
                "Optimize database queries and indexing"
            ],
            tech: ["Java", "PostgreSQL", "React", "Keycloak", "GitLab CI", "Spring Cloud", "Elasticsearch", "MinIO", "Oracle", "Kafka"],
            projects: [
                { name: "Cardoctor", description: "Driving support platform" },
                { name: "Loyalty System", description: "Multi-tenant point accumulation" },
                { name: "TPBank Blacklist", description: "Banking security system" }
            ],
            metrics: [
                { value: "50%", label: "Query Optimization" },
                { value: "4", label: "Projects Delivered" },
                { value: "7", label: "Team Members Led" }
            ],
            logo: "🟢",
            color: "green",
            current: false
        },
        {
            company: "Vissoft JSC",
            period: "01/2022 - 06/2022",
            duration: "6 months",
            position: "Software Development Engineer",
            description: "Developed HRM system with microservices architecture",
            teamSize: "15 members",
            achievements: [
                "Built RESTful API gateway",
                "Implemented OpenFeign service communication",
                "Deployed to production environment",
                "Developed employee management modules",
                "Integrated MinIO for file storage"
            ],
            responsibilities: [
                "Communicate and gather requirements from stakeholders",
                "Design and implement microservices architecture",
                "Develop API Gateway with Spring Cloud Gateway",
                "Implement service discovery with Eureka",
                "Build employee management features",
                "Deploy applications to DEV environments"
            ],
            tech: ["Java", "Spring Cloud", "MariaDB", "MinIO", "React.js", "Bootstrap", "Spring Data JPA", "OpenFeign", "Eureka"],
            projects: [
                { name: "HRM System", description: "Internal human resource management platform" }
            ],
            metrics: [
                { value: "15", label: "Team Members" },
                { value: "100%", label: "On-Time Delivery" },
                { value: "5+", label: "Modules Built" }
            ],
            logo: "🟣",
            color: "purple",
            current: false
        }
    ];

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
      .animate-particle { animation: particle linear infinite; }
      .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
      .animate-fade-in { animation: fade-in 0.3s ease-out; }
      .animate-scale-up { animation: scale-up 0.3s ease-out; }
      .shadow-3xl { box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3); }
    `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <>
            <section ref={ref} className={`py-24 bg-gray-900 text-white relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <ParticleSystem />

                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-block bg-green-500/20 text-green-400 px-6 py-2 rounded-full font-bold text-sm mb-4 backdrop-blur-lg border border-green-500/30">
                            💼 PROFESSIONAL PATH
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black mb-4">
                            Work <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Experience</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Building impactful solutions across multiple industries
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-purple-500 hidden md:block transform -translate-x-1/2"></div>

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

            {/* Experience Detail Modal */}
            <ExperienceModal
                experience={selectedExperience}
                isOpen={!!selectedExperience}
                onClose={() => setSelectedExperience(null)}
            />
        </>
    );
};

