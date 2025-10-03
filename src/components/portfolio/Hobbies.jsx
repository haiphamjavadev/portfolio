import React from "react";
import {useIntersectionObserver} from "../../hooks/useIntersectionObserver.js";
import {ParticleSystem} from "../../utils/ParticleSystem.jsx";
import {getIconComponent} from "../../utils/GetIconForAll.jsx";

export const Hobbies = ({hobbies}) => {
    const [ref, isVisible] = useIntersectionObserver();

    return (
        <section ref={ref}
                 className={`py-24 bg-gray-900 text-white relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <ParticleSystem/>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <div
                        className="inline-block bg-pink-500/20 text-pink-400 px-6 py-2 rounded-full font-bold text-sm mb-4 backdrop-blur-lg border border-pink-500/30">
                        ❤️ LIFE BEYOND CODE
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black mb-4">
                        Hobbies & <span
                        className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">Interests</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-4 gap-6 mb-12">
                    {hobbies.hobbies.map((hobby, idx) => (
                        <div key={idx} className="group relative">
                            <div
                                className={`absolute inset-0 bg-gradient-to-r from-${hobby.color}-500 to-${hobby.color}-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition`}></div>
                            <div
                                className="relative bg-gray-800 p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition duration-500 transform group-hover:-translate-y-2 text-center border-2 border-gray-700">
                                <div
                                    className="text-6xl mb-4 group-hover:scale-125 transition transform">{hobby.icon}</div>
                                <h3 className="text-xl font-black mb-2">{hobby.name}</h3>
                                <p className="text-gray-400 text-sm">{hobby.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative group">
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition"></div>
                        <div className="relative bg-gray-800 p-8 rounded-2xl border-2 border-gray-700">
                            <h3 className="text-2xl font-black mb-4 flex items-center gap-3">
                                {getIconComponent("Heart", 28, "text-red-400")}
                                Personal Values
                            </h3>
                            <ul className="space-y-3">
                                {hobbies.personals.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        {getIconComponent(item.icon, 20, `text-${item.color} mt-1 flex-shrink-0`)}
                                        <span className="text-gray-300">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="relative group">
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition"></div>
                        <div className="relative bg-gray-800 p-8 rounded-2xl border-2 border-gray-700">
                            <h3 className="text-2xl font-black mb-4 flex items-center gap-3">
                                {getIconComponent("Zap", 28, "text-yellow-400")}
                                Work Style
                            </h3>
                            <ul className="space-y-3">
                                {hobbies.workStyles.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        {getIconComponent(item.icon, 20, `text-${item.color} mt-1 flex-shrink-0`)}
                                        <span className="text-gray-300">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};