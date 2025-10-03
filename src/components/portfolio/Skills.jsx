import {Terminal, Database, Server, Code} from 'react-feather';
import {useIntersectionObserver} from '../../hooks/useIntersectionObserver.js';
import {getIconComponent} from "../../utils/GetIconForAll.jsx";

export const Skills = () => {
    const [ref, isVisible] = useIntersectionObserver();

    const skillCategories = {
        skills:
            [
                {
                    title: "Backend Development",
                    // className="text-blue-400" size={32}
                    icon: "Terminal",
                    color: "blue",
                    gradient: "from-blue-500 to-cyan-500",
                    level: 95,
                    skills: [
                        {name: "Java Core", level: 95, icon: "☕"},
                        {name: "Spring Boot", level: 90, icon: "🍃"},
                        {name: "Spring Cloud", level: 85, icon: "☁️"},
                        {name: "Microservices", level: 88, icon: "🔧"},
                        {name: "REST API", level: 92, icon: "🌐"},
                        {name: "Hibernate/JPA", level: 87, icon: "📦"}
                    ]
                },
                {
                    title: "Database & Caching",
                    icon: "Database",
                    color: "green",
                    gradient: "from-green-500 to-emerald-500",
                    level: 90,
                    skills: [
                        {name: "MariaDB/MySQL", level: 92, icon: "🗄️"},
                        {name: "PostgreSQL", level: 88, icon: "🐘"},
                        {name: "Oracle", level: 85, icon: "🔴"},
                        {name: "Redis", level: 87, icon: "⚡"},
                        {name: "Query Optimization", level: 90, icon: "🚀"},
                        {name: "Indexing Strategy", level: 88, icon: "📊"}
                    ]
                },
                {
                    title: "DevOps & Cloud",
                    icon: "Server",
                    color: "purple",
                    gradient: "from-purple-500 to-pink-500",
                    level: 85,
                    skills: [
                        {name: "Docker", level: 90, icon: "🐳"},
                        {name: "Kubernetes", level: 85, icon: "☸️"},
                        {name: "Jenkins", level: 87, icon: "🔧"},
                        {name: "GitLab CI/CD", level: 85, icon: "🦊"},
                        {name: "Kafka", level: 82, icon: "📨"},
                        {name: "ELK Stack", level: 80, icon: "🔍"}
                    ]
                },
                {
                    title: "Frontend & UI",
                    icon: "Code",
                    color: "orange",
                    gradient: "from-orange-500 to-red-500",
                    level: 75,
                    skills: [
                        {name: "React.js", level: 80, icon: "⚛️"},
                        {name: "Angular", level: 70, icon: "🅰️"},
                        {name: "TypeScript", level: 75, icon: "📘"},
                        {name: "HTML/CSS", level: 85, icon: "🎨"},
                        {name: "Material UI", level: 78, icon: "💎"},
                        {name: "Bootstrap", level: 82, icon: "🥾"}
                    ]
                }
            ],
        techStacks: ["JAVA", "Spring Boot", "Spring Cloud", "Microservices", "REST API", "Hibernate/JPA",]
    }

    return (
        <section ref={ref}
                 className={`py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <div
                        className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full font-bold text-sm mb-4 shadow-lg">
                        💪 EXPERTISE
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
                        Technical <span
                        className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Arsenal</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Mastering the tools that power modern software
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.skills.map((category, idx) => (
                        <div key={idx} className="group relative">
                            <div
                                className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition`}></div>

                            <div
                                className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 border-2 border-gray-100">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={`bg-${category.color}-100 p-4 rounded-xl group-hover:scale-110 transition`}>
                                            {getIconComponent(category.icon, 32, `text-${category.color}-400`)}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-gray-900">{category.title}</h3>
                                            <p className="text-sm text-gray-500 font-medium">Proficiency Level</p>
                                        </div>
                                    </div>
                                    <div className="text-4xl font-black text-gray-900">
                                        {category.level}<span className="text-xl text-gray-400">%</span>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ${isVisible ? 'animate-skill-bar' : ''}`}
                                            style={{width: isVisible ? `${category.level}%` : '0%'}}
                                        ></div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {category.skills.map((skill, skillIdx) => (
                                        <div key={skillIdx}
                                             className="group/skill bg-gray-50 hover:bg-gray-100 p-4 rounded-xl transition">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-2xl">{skill.icon}</span>
                                                <span className="font-bold text-gray-900 text-sm">{skill.name}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000`}
                                                        style={{width: isVisible ? `${skill.level}%` : '0%'}}
                                                    ></div>
                                                </div>
                                                <span className="text-xs font-bold text-gray-600">{skill.level}%</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {skillCategories.techStacks.length > 0 && (
                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Complete Tech Stack</h3>
                        <div className="flex flex-wrap gap-3 justify-center max-w-5xl mx-auto">
                            {skillCategories.techStacks.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="group relative px-5 py-3 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border-2 border-gray-200 hover:border-blue-400 font-bold text-gray-800 cursor-pointer"
                                >
                    <span className="relative z-10">{tech}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl opacity-0 group-hover:opacity-10 transition"></div>
                </span>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};
