import {CheckCircle} from "lucide-react";
import React from "react";

const isDark = false;
const bgPrimary = isDark ? 'bg-gray-900' : 'bg-gray-50';
const bgSecondary = isDark ? 'bg-gray-800' : 'bg-white';
const bgTertiary = isDark ? 'bg-gray-700' : 'bg-gray-100';
const textPrimary = isDark ? 'text-white' : 'text-gray-900';
const textSecondary = isDark ? 'text-gray-300' : 'text-gray-600';
const accent = 'text-emerald-500';
const accentBg = 'bg-emerald-500';
const accentHover = 'hover:bg-emerald-600';
const border = isDark ? 'border-gray-700' : 'border-gray-200';
export const WhyHireMe = ({whyHireMe}) => {
    console.log("Rendering WhyHireMe:", whyHireMe);

    return (
        <section id="why" className={`py-20 px-4 ${bgSecondary}`}>
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <div
                        className="inline-block bg-blue-500/20 px-6 py-2 rounded-full font-bold text-sm mb-4 backdrop-blur-lg border border-blue-500/30">
                        ❓{whyHireMe.whyHireMe.tag}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{whyHireMe.whyHireMe.title}</h2>
                    <p className={`${textSecondary} text-lg max-w-3xl mx-auto`}>{whyHireMe.whyHireMe.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {whyHireMe.whyHireMe.reasons.map((reason, idx) => (
                        <div key={idx} className={`${bgPrimary} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 border-2 ${border}`}>
                            <div className="flex items-start gap-4 mb-3">
                                <CheckCircle className={`${accent} flex-shrink-0 mt-1`} size={24} />
                                <h3 className="text-xl font-bold">{reason.title}</h3>
                            </div>
                            <p className={`${textSecondary} leading-relaxed`}>{reason.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}