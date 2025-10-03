import {useIntersectionObserver} from "../../hooks/useIntersectionObserver.js";
import {Award, Calendar, GraduationCap} from "lucide-react";
import {ParticleSystem} from "../../utils/ParticleSystem.jsx";

const educationList =
    [
        {
            "school": "Hanoi University of Business and Technology",
            "degree": "Bachelor of Information Technology",
            "gpa": "3.33/4.0",
            "gpaLabel": "GPA Score",
            "duration": "2019 - 2023",
            "durationLabel": "Duration",
            "courses": [
                "Software Engineering",
                "Data Structures",
                "Algorithms",
                "Database Design",
                "Web Development"
            ]
        }
    ];

export const Education = ({educations}) => {
    const [ref, isVisible] = useIntersectionObserver();

    return (
        <section ref={ref}
                 className={`py-24 bg-gray-900 text-white relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <ParticleSystem/>
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="text-center mb-16">
                    <div
                        className="inline-block bg-blue-500/20 text-blue-400 px-6 py-2 rounded-full font-bold text-sm mb-4 backdrop-blur-lg border border-blue-500/30">
                        🎓 ACADEMIC BACKGROUND
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black mb-4">
                        Education <span
                        className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
                    </h2>
                </div>
                {educations.map((education, idx) => (
                    <div key={idx} className="relative group perspective-1000 mb-12">
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition"></div>
                        <div
                            className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-3xl shadow-2xl border-2 border-gray-700 transform group-hover:scale-105 transition duration-500">
                            <div className="grid md:grid-cols-3 gap-8 items-center">
                                <div className="md:col-span-1 flex justify-center">
                                    <div className="relative">
                                        <div
                                            className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center transform rotate-6 group-hover:rotate-12 transition shadow-2xl">
                                            <GraduationCap size={64} className="text-white"/>
                                        </div>
                                        <div
                                            className="absolute -bottom-2 -right-2 bg-yellow-400 text-gray-900 px-3 py-1 rounded-lg font-bold text-sm shadow-xl">
                                            {education.gpa}
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <div className="flex items-start gap-3 mb-4">
                                        <div className="bg-blue-500/20 p-2 rounded-lg">
                                            <GraduationCap className="text-blue-400" size={24}/>
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-black mb-2">{education.school}</h3>
                                            <p className="text-xl text-blue-400 font-bold mb-4">{education.degree}</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mt-6">
                                        <div
                                            className="bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/20">
                                            <Calendar className="text-purple-400 mb-2" size={24}/>
                                            <div className="text-2xl font-bold">{education.duration}</div>
                                            <div className="text-sm text-gray-400">{education.durationLabel}</div>
                                        </div>
                                        <div
                                            className="bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/20">
                                            <Award className="text-yellow-400 mb-2" size={24}/>
                                            <div className="text-2xl font-bold">{education.gpa}</div>
                                            <div className="text-sm text-gray-400">{education.gpaLabel}</div>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {education.courses.map((course, cidx) => (
                                            <span key={cidx}
                                                  className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                                                {course}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};