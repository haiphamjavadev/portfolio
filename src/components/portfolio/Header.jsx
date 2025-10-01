import { useState } from "react";
import { Download, Github, Linkedin, Mail, MapPin, Phone, Terminal } from "lucide-react";
import {AnimatedBackground} from "../../utils/AnimatedBackground.jsx";
import {FloatingCodeLines} from "../../utils/FloatingCodeLines.jsx";
import {ParticleSystem} from "../../utils/ParticleSystem.jsx";

export const Header = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: (e.clientX - rect.left - rect.width / 2) / 20,
            y: (e.clientY - rect.top - rect.height / 2) / 20
        });
    };

    return (
        <header
            className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-24 overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            <AnimatedBackground />
            <FloatingCodeLines />
            <ParticleSystem />

            {/* Mesh Grid Background */}
            <div
                className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Avatar with 3D tilt effect */}
                        <div
                            className="relative group perspective-1000"
                            style={{
                                transform: `rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg)`
                            }}
                        >
                            <div className="w-48 h-48 relative">
                                {/* Glowing rings */}
                                <div
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow"></div>
                                <div
                                    className="absolute inset-2 rounded-full bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 animate-spin-reverse"></div>

                                {/* Avatar */}
                                <div
                                    className="absolute inset-4 rounded-full bg-gray-900 overflow-hidden border-4 border-white shadow-2xl">
                                    <img
                                        src="https://ui-avatars.com/api/?name=Pham+Quang+Hai&size=200&background=1e40af&color=fff&bold=true&format=svg"
                                        alt="Pham Quang Hai"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Status indicator */}
                                <div
                                    className="absolute bottom-4 right-4 flex items-center gap-2 bg-green-500 px-3 py-1 rounded-full shadow-lg animate-pulse">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    <span className="text-xs font-bold text-white">Available</span>
                                </div>
                            </div>

                            {/* Floating badges */}
                            <div
                                className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold text-sm shadow-xl transform rotate-12 animate-bounce-slow">
                                ⭐ 3+ Years
                            </div>
                            <div
                                className="absolute -bottom-2 -left-4 bg-purple-500 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-xl transform -rotate-12 animate-bounce-slow animation-delay-1000">
                                💻 Full Stack
                            </div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            {/* Typing effect title */}
                            <div className="mb-4">
                                <span className="text-blue-400 font-mono text-sm">$ whoami</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black mb-4 relative">
                                <span
                                    className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                                    Pham Quang Hai
                                </span>
                                <div
                                    className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition"></div>
                            </h1>

                            <div className="flex items-center gap-3 justify-center md:justify-start mb-6">
                                <Terminal className="text-green-400 animate-pulse" size={24} />
                                <p className="text-2xl md:text-3xl font-bold">
                                    <span className="text-gray-300">Software Development</span>{" "}
                                    <span
                                        className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Engineer</span>
                                </p>
                            </div>

                            {/* Stats Bar */}
                            <div className="grid grid-cols-3 gap-4 mb-8 max-w-xl mx-auto md:mx-0">
                                <div
                                    className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:scale-105 transition transform">
                                    <div className="text-3xl font-bold text-blue-400">3+</div>
                                    <div className="text-sm text-gray-300">Years Exp</div>
                                </div>
                                <div
                                    className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:scale-105 transition transform">
                                    <div className="text-3xl font-bold text-purple-400">15+</div>
                                    <div className="text-sm text-gray-300">Projects</div>
                                </div>
                                <div
                                    className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:scale-105 transition transform">
                                    <div className="text-3xl font-bold text-green-400">60+</div>
                                    <div className="text-sm text-gray-300">Team Size</div>
                                </div>
                            </div>

                            {/* Contact info with glassmorphism */}
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-gray-300 mb-8">
                                <a href="mailto:haiphamjavadev@gmail.com"
                                    className="flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-lg hover:bg-white/20 transition border border-white/20">
                                    <Mail size={18} className="text-blue-400" />
                                    <span className="text-sm font-medium">haiphamjavadev@gmail.com</span>
                                </a>
                                <a href="tel:0979015430"
                                    className="flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-lg hover:bg-white/20 transition border border-white/20">
                                    <Phone size={18} className="text-green-400" />
                                    <span className="text-sm font-medium">0979 015 430</span>
                                </a>
                                <div
                                    className="flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-lg border border-white/20">
                                    <MapPin size={18} className="text-red-400" />
                                    <span className="text-sm font-medium">Hanoi, Vietnam</span>
                                </div>
                            </div>

                            {/* CTA Buttons with premium effects */}
                            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                                    className="group relative bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 p-4 rounded-xl transition transform hover:scale-110 border border-gray-700 overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition"></div>
                                    <Github size={24} className="relative z-10" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                                    className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 p-4 rounded-xl transition transform hover:scale-110 overflow-hidden">
                                    <div
                                        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition"></div>
                                    <Linkedin size={24} className="relative z-10" />
                                </a>
                                <button
                                    className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-4 rounded-xl flex items-center gap-3 transition transform hover:scale-105 overflow-hidden shadow-2xl">
                                    <div
                                        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition"></div>
                                    <Download size={24} className="relative z-10 group-hover:animate-bounce" />
                                    <span className="font-bold text-lg relative z-10">Download CV</span>
                                </button>
                                <button
                                    className="group relative bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 px-8 py-4 rounded-xl flex items-center gap-3 transition transform hover:scale-105 overflow-hidden shadow-2xl">
                                    <div
                                        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition"></div>
                                    <Mail size={24} className="relative z-10" />
                                    <span className="font-bold text-lg relative z-10">Contact Me</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-white rounded-full animate-scroll"></div>
                </div>
            </div>
        </header>
    );
};