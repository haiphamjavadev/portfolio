import {useIntersectionObserver} from "../../hooks/useIntersectionObserver.js";
import {ChevronRight, Github, Heart, Linkedin, Mail, MapPin, Phone} from "lucide-react";
import {ParticleSystem} from "../../utils/ParticleSystem.jsx";

export const Experience = () => {
    const [ref, isVisible] = useIntersectionObserver();

    const experiences = [
        {
            company: "Viettel Software",
            period: "05/2024 - Present",
            position: "Software Development Engineer",
            description: "Leading development of enterprise-scale systems for Vietnam Airlines and VAS",
            achievements: [
                "Architected microservices for 60-member team",
                "Optimized system performance by 40%",
                "Implemented CI/CD pipeline reducing deployment time by 60%"
            ],
            tech: ["Java", "Spring Boot", "K8S", "Kafka", "Redis"],
            logo: "🔷",
            color: "blue",
            current: true
        },
        {
            company: "AC",
            period: "07/2022 - 04/2024",
            position: "Software Development Engineer",
            description: "Full-stack development and team leadership for multiple client projects",
            achievements: [
                "Led team of 7 engineers",
                "Delivered 4 major projects on time",
                "Reduced query response time by 50%"
            ],
            tech: ["Java", "PostgreSQL", "React", "Keycloak", "GitLab CI"],
            logo: "🟢",
            color: "green",
            current: false
        },
        {
            company: "Vissoft JSC",
            period: "01/2022 - 06/2022",
            position: "Software Development Engineer",
            description: "Developed HRM system with microservices architecture",
            achievements: [
                "Built RESTful API gateway",
                "Implemented OpenFeign service communication",
                "Deployed to production environment"
            ],
            tech: ["Java", "Spring Cloud", "MariaDB", "MinIO"],
            logo: "🟣",
            color: "purple",
            current: false
        }
    ];

    return (
        <section ref={ref}
                 className={`py-24 bg-gray-900 text-white relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <ParticleSystem />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center font-black text-xl">
                                PH
                            </div>
                            <div>
                                <h3 className="text-2xl font-black">Pham Quang Hai</h3>
                                <p className="text-gray-400">Software Development Engineer</p>
                            </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Passionate backend developer specializing in building scalable microservices,
                            optimizing database performance, and architecting cloud-native solutions.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com"
                               className="group bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition transform hover:scale-110">
                                <Github size={24} className="group-hover:rotate-12 transition" />
                            </a>
                            <a href="https://linkedin.com"
                               className="group bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition transform hover:scale-110">
                                <Linkedin size={24} className="group-hover:rotate-12 transition" />
                            </a>
                            <a href="mailto:haiphamjavadev@gmail.com"
                               className="group bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition transform hover:scale-110">
                                <Mail size={24} className="group-hover:rotate-12 transition" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                            <ChevronRight className="text-blue-400" size={20} />
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {["Home", "Skills", "Projects", "Experience", "Contact"].map((link, idx) => (
                                <li key={idx}>
                                    <a href="#"
                                       className="text-gray-400 hover:text-blue-400 transition flex items-center gap-2 group">
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                            <Mail className="text-blue-400" size={20} />
                            Get In Touch
                        </h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-start gap-2">
                                <Mail size={16} className="mt-1 text-blue-400 flex-shrink-0" />
                                <a href="mailto:haiphamjavadev@gmail.com"
                                   className="hover:text-blue-400 transition text-sm break-all">
                                    haiphamjavadev@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <Phone size={16} className="mt-1 text-green-400 flex-shrink-0" />
                                <a href="tel:0979015430" className="hover:text-green-400 transition text-sm">
                                    0979 015 430
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin size={16} className="mt-1 text-red-400 flex-shrink-0" />
                                <span className="text-sm">Hanoi, Vietnam</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            &copy; 2024 Pham Quang Hai. All rights reserved.
                        </p>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <span>Built with</span>
                            <Heart size={16} className="text-red-500 animate-pulse" />
                            <span>using React & Tailwind CSS</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};