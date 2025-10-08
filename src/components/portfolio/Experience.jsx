import React, {useEffect, useState} from 'react';
import {Award} from 'lucide-react';
import {useTranslation} from 'react-i18next';
import {useIntersectionObserver} from "../../hooks/useIntersectionObserver.js";
import {ExperienceCard} from "./cards/ExperienceCard.jsx";
import {CompanyExperienceModal} from "./modal/CompanyExperienceModal.jsx";
import {ParticleSystem} from "../../utils/ParticleSystem.jsx";


// Intersection Observer Hook
// const useIntersectionObserver = (options = {}) => {
//     const [isVisible, setIsVisible] = useState(false);
//     const elementRef = useRef(null);
//
//
//     useEffect(() => {
//         const observer = new IntersectionObserver(([entry]) => {
//             if (entry.isIntersecting) {
//                 setIsVisible(true);
//             }
//         }, { threshold: 0.1, ...options });
//
//         if (elementRef.current) {
//             observer.observe(elementRef.current);
//         }
//
//         return () => {
//             if (elementRef.current) {
//                 observer.unobserve(elementRef.current);
//             }
//         };
//     }, []);
//
//     return [elementRef, isVisible];
// };

// Particle System Component
// const ParticleSystem = () => {
//     const particles = Array.from({ length: 30 }, (_, i) => i);
//
//     return (
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             {particles.map((i) => (
//                 <div
//                     key={i}
//                     className="absolute w-1 h-1 bg-blue-400 rounded-full animate-particle"
//                     style={{
//                         top: `${Math.random() * 100}%`,
//                         left: `${Math.random() * 100}%`,
//                         animationDelay: `${Math.random() * 5}s`,
//                         animationDuration: `${10 + Math.random() * 10}s`
//                     }}
//                 />
//             ))}
//         </div>
//     );
// };


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
                            {t("myWorkExperience")} & <span
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

