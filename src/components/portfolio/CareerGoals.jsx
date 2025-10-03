import * as FeatherIcons from 'react-feather';
import {useIntersectionObserver} from '../../hooks/useIntersectionObserver.js';

const careerGoals =
    [
        {
            "type": "short-term",
            "title": "Short-term Goals",
            "subtitle": "Next 1-2 Years",
            "progressLabel": "PROGRESS",
            "progressValue": "65%",
            "progressPercent": 65,
            "goals": [
                {"icon": "Code", "text": "Master advanced system design & architecture patterns"},
                {"icon": "TrendingUp", "text": "Scale real-world projects (100K+ users)"},
                {"icon": "Server", "text": "Deep dive: Cloud, DevOps, CI/CD, K8S"},
                {"icon": "Users", "text": "Level up soft skills: leadership & communication"},
                {"icon": "Award", "text": "Earn professional certifications (AWS, GCP)"},
                {"icon": "Briefcase", "text": "Lead team of 3-5 engineers"}
            ]
        },
        {
            "type": "long-term",
            "title": "Long-term Goals",
            "subtitle": "Next 3-5 Years",
            "progressLabel": "VISION",
            "progressValue": "∞",
            "goals": [
                {"icon": "Award", "text": "Become Senior Software Engineer / Architect"},
                {"icon": "Briefcase", "text": "Tech Lead / Solution Architect position"},
                {"icon": "Users", "text": "Transition to engineering management (PM)"},
                {"icon": "Zap", "text": "Launch innovative tech startup"},
                {"icon": "Globe", "text": "Contribute to open-source & tech community"},
                {"icon": "TrendingUp", "text": "Mentor next-gen developers"}
            ]
        }
    ]
;

function getIconComponent(name, size = 20) {
    const Icon = FeatherIcons[name];
    return Icon ? <Icon size={size}/> : null;
}


export const CareerGoals = ({careerGoals}) => {
    const [ref, isVisible] = useIntersectionObserver();

    return (
        <section ref={ref}
                 className={`py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
            <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <div
                        className="inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-full font-bold text-sm mb-4 animate-fade-in">
                        🎯 MY VISION
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
                        Career <span
                        className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Roadmap</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Building the future, one commit at a time
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {careerGoals.map((goalSet, idx) => (
                        <div key={idx} className="group relative">
                            <div
                                className={`absolute inset-0 rounded-2xl blur opacity-25 group-hover:opacity-40 transition ${
                                    goalSet.type === 'short-term'
                                        ? 'bg-gradient-to-r from-blue-400 to-purple-400'
                                        : 'bg-gradient-to-r from-purple-400 to-pink-400'
                                }`}
                            ></div>
                            <div
                                className={`relative bg-white p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition duration-500 transform hover:-translate-y-2 border-2 ${
                                    goalSet.type === 'short-term' ? 'border-blue-100' : 'border-purple-100'
                                }`}
                            >
                                <div
                                    className={`absolute -top-6 ${goalSet.type === 'short-term' ? '-left-6' : '-right-6'} p-6 rounded-2xl shadow-xl transform ${
                                        goalSet.type === 'short-term' ? 'rotate-3 group-hover:rotate-6 bg-gradient-to-r from-blue-600 to-blue-400' : '-rotate-3 group-hover:-rotate-6 bg-gradient-to-r from-purple-600 to-pink-600'
                                    } transition`}
                                >
                                    {getIconComponent(goalSet.type === 'short-term' ? 'Zap' : 'Target', goalSet.type === 'short-term' ? 20 : 32)}                                </div>

                                <div className="mt-6 mb-6">
                                    <h3 className="text-3xl font-black text-gray-900 mb-2">{goalSet.title}</h3>
                                    <p className={goalSet.type === 'short-term' ? "text-blue-600 font-bold" : "text-purple-600 font-bold"}>
                                        {goalSet.subtitle}
                                    </p>
                                </div>

                                <ul className="space-y-4">
                                    {goalSet.goals.map((goal, gidx) => (
                                        <li key={gidx} className="flex items-start gap-4 group/item">
                                            <div
                                                className={`p-2 rounded-lg group-hover/item:scale-110 transition flex-shrink-0 ${
                                                    goalSet.type === 'short-term'
                                                        ? 'bg-blue-100 text-blue-600'
                                                        : 'bg-purple-100 text-purple-600'
                                                }`}
                                            >
                                                {getIconComponent(goal.icon)}
                                            </div>
                                            <span
                                                className="text-gray-700 font-medium leading-relaxed">{goal.text}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-bold text-gray-500">{goalSet.progressLabel}</span>
                                        <span
                                            className={`text-sm font-bold ${goalSet.type === 'short-term' ? 'text-blue-600' : 'text-purple-600'}`}>{goalSet.progressValue}</span>
                                    </div>
                                    <div className="mt-2 h-3 bg-gray-200 rounded-full overflow-hidden">
                                        {goalSet.type === 'short-term' ? (
                                            <div
                                                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-progress-bar"
                                                style={{width: `${goalSet.progressPercent}%`}}
                                            ></div>
                                        ) : (
                                            <div
                                                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};