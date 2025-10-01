import React, { useState, useEffect } from 'react';
import { Home, Search, ArrowLeft, Mail, Phone, MessageCircle, Zap, AlertTriangle, Ghost, Rocket, MapPin, RefreshCw } from 'lucide-react';

// Floating Particles Component
const FloatingParticles = () => {
    const particles = Array.from({ length: 20 }, (_, i) => i);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((i) => (
                <div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`
                    }}
                />
            ))}
        </div>
    );
};

// Glitch Text Component
const GlitchText = ({ text, className = "" }) => {
    return (
        <div className={`relative ${className}`}>
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 text-cyan-400 opacity-70 animate-glitch-1" aria-hidden="true">
        {text}
      </span>
            <span className="absolute top-0 left-0 text-red-400 opacity-70 animate-glitch-2" aria-hidden="true">
        {text}
      </span>
        </div>
    );
};

// Animated 404 Number
const Animated404 = () => {
    return (
        <div className="relative">
            {/* Background glow */}
            <div className="absolute inset-0 blur-3xl opacity-30">
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* 404 Text */}
            <div className="relative text-9xl md:text-[20rem] font-black leading-none">
                <div className="relative inline-block">
          <span className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
            4
          </span>
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                </div>

                <div className="relative inline-block mx-4 md:mx-8">
                    <div className="w-24 h-24 md:w-48 md:h-48 border-8 border-dashed border-purple-500 rounded-full inline-flex items-center justify-center animate-spin-slow">
                        <Ghost className="w-12 h-12 md:w-24 md:h-24 text-purple-500 animate-bounce" />
                    </div>
                </div>

                <div className="relative inline-block">
          <span className="bg-gradient-to-br from-pink-600 via-red-600 to-orange-600 bg-clip-text text-transparent animate-gradient-x">
            4
          </span>
                    <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full blur-2xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
            </div>
        </div>
    );
};

// Search Bar Component
const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className="relative max-w-2xl mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition"></div>
            <div className="relative flex items-center bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-100">
                <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search for pages, products, or articles..."
                    className="flex-1 px-6 py-5 text-lg focus:outline-none"
                />
                <button className="px-8 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:from-blue-700 hover:to-purple-700 transition flex items-center gap-2">
                    <Search size={24} />
                    <span className="hidden md:inline">Search</span>
                </button>
            </div>
        </div>
    );
};

// Quick Link Card
const QuickLinkCard = ({ icon: Icon, title, description, onClick, color = "blue" }) => {
    return (
        <div className="group relative">
            <div className={`absolute inset-0 bg-gradient-to-r from-${color}-400 to-${color}-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition`}></div>
            <button
                onClick={onClick}
                className="relative w-full bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 text-left transform group-hover:-translate-y-2"
            >
                <div className={`inline-flex p-4 bg-${color}-100 rounded-xl mb-4 group-hover:scale-110 transition`}>
                    <Icon className={`text-${color}-600`} size={32} />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
                <div className="mt-4 flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all">
                    <span>Go now</span>
                    <ArrowLeft className="w-5 h-5 rotate-180 transform group-hover:translate-x-2 transition" />
                </div>
            </button>
        </div>
    );
};

// Animated Robot/Astronaut
const AnimatedCharacter = () => {
    return (
        <div className="relative w-64 h-64 mx-auto mb-12">
            {/* Floating effect */}
            <div className="absolute inset-0 animate-float">
                {/* Astronaut */}
                <div className="relative w-full h-full">
                    {/* Helmet */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full border-4 border-gray-300 shadow-2xl">
                        {/* Visor */}
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-80">
                            {/* Reflection */}
                            <div className="absolute top-2 left-2 w-6 h-6 bg-white rounded-full opacity-40"></div>
                        </div>
                        {/* Antenna */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-400">
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="absolute top-36 left-1/2 transform -translate-x-1/2 w-24 h-28 bg-gradient-to-br from-gray-100 to-gray-300 rounded-2xl border-4 border-gray-300 shadow-xl">
                        {/* Control panel */}
                        <div className="flex gap-1 justify-center mt-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                    </div>

                    {/* Arms */}
                    <div className="absolute top-40 left-4 w-6 h-16 bg-gray-300 rounded-full border-2 border-gray-400 transform rotate-12 origin-top animate-wave"></div>
                    <div className="absolute top-40 right-4 w-6 h-16 bg-gray-300 rounded-full border-2 border-gray-400 transform -rotate-12 origin-top animate-wave" style={{ animationDelay: '0.5s' }}></div>

                    {/* Stars around */}
                    <div className="absolute top-0 left-0 text-yellow-400 animate-twinkle">⭐</div>
                    <div className="absolute top-4 right-4 text-yellow-400 animate-twinkle" style={{ animationDelay: '0.5s' }}>✨</div>
                    <div className="absolute bottom-8 left-8 text-yellow-400 animate-twinkle" style={{ animationDelay: '1s' }}>⭐</div>
                </div>
            </div>
        </div>
    );
};

// Main 404 Page
const Error404Page = () => {
    const [countdown, setCountdown] = useState(null);

    const goHome = () => {
        window.location.href = '/';
    };

    const goBack = () => {
        window.history.back();
    };

    const quickLinks = [
        {
            icon: Home,
            title: "Go to Homepage",
            description: "Start fresh from our main page",
            color: "blue",
            onClick: goHome
        },
        {
            icon: ArrowLeft,
            title: "Go Back",
            description: "Return to previous page",
            color: "purple",
            onClick: goBack
        },
        {
            icon: Search,
            title: "Search Site",
            description: "Find what you're looking for",
            color: "green",
            onClick: () => document.querySelector('input')?.focus()
        },
        {
            icon: Mail,
            title: "Contact Support",
            description: "Get help from our team",
            color: "orange",
            onClick: () => window.location.href = 'mailto:support@example.com'
        }
    ];

    useEffect(() => {
        // Add custom styles
        const style = document.createElement('style');
        style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      @keyframes gradient-x {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes glitch-1 {
        0% { transform: translateX(0); }
        20% { transform: translateX(-2px); }
        40% { transform: translateX(2px); }
        60% { transform: translateX(-2px); }
        80% { transform: translateX(2px); }
        100% { transform: translateX(0); }
      }
      @keyframes glitch-2 {
        0% { transform: translateX(0); }
        20% { transform: translateX(2px); }
        40% { transform: translateX(-2px); }
        60% { transform: translateX(2px); }
        80% { transform: translateX(-2px); }
        100% { transform: translateX(0); }
      }
      @keyframes wave {
        0%, 100% { transform: rotate(12deg); }
        50% { transform: rotate(-12deg); }
      }
      @keyframes twinkle {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.3; transform: scale(0.8); }
      }
      
      .animate-float { animation: float 3s ease-in-out infinite; }
      .animate-gradient-x { 
        background-size: 200% 200%;
        animation: gradient-x 3s ease infinite;
      }
      .animate-spin-slow { animation: spin-slow 8s linear infinite; }
      .animate-glitch-1 { animation: glitch-1 0.3s infinite; }
      .animate-glitch-2 { animation: glitch-2 0.3s infinite; }
      .animate-wave { animation: wave 2s ease-in-out infinite; }
      .animate-twinkle { animation: twinkle 2s ease-in-out infinite; }
    `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
            <FloatingParticles />

            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
                <div className="absolute top-40 right-20 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 py-12">
                {/* Header */}
                <header className="flex justify-between items-center mb-12">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center font-black text-white text-xl shadow-lg">
                            PH
                        </div>
                        <span className="text-2xl font-black text-gray-900">Portfolio</span>
                    </div>
                    <button
                        onClick={goHome}
                        className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 rounded-xl font-bold text-gray-900 shadow-lg transition border-2 border-gray-200"
                    >
                        <Home size={20} />
                        <span className="hidden md:inline">Back to Home</span>
                    </button>
                </header>

                {/* Main Content */}
                <div className="text-center mb-16">
                    {/* Animated Character */}
                    <AnimatedCharacter />

                    {/* 404 Number */}
                    <div className="mb-8 flex justify-center">
                        <Animated404 />
                    </div>

                    {/* Error Message */}
                    <div className="mb-8">
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-4">
                            <GlitchText text="Page Not Found" />
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Houston, we have a problem! The page you're looking for seems to have drifted into{' '}
                            <span className="text-purple-600 font-bold">deep space</span>. 🚀
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="mb-16">
                        <SearchBar />
                    </div>
                </div>

                {/* Quick Links Grid */}
                <div className="max-w-6xl mx-auto mb-16">
                    <h2 className="text-3xl font-black text-gray-900 text-center mb-8">
                        Choose Your Next Destination
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {quickLinks.map((link, idx) => (
                            <QuickLinkCard key={idx} {...link} />
                        ))}
                    </div>
                </div>

                {/* Popular Pages */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100">
                        <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                            <Zap className="text-yellow-500" size={28} />
                            Popular Pages
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { name: "About Me", url: "/about" },
                                { name: "Projects", url: "/projects" },
                                { name: "Skills", url: "/skills" },
                                { name: "Contact", url: "/contact" },
                                { name: "Blog", url: "/blog" },
                                { name: "Resume", url: "/resume" }
                            ].map((page, idx) => (
                                <a
                                    key={idx}
                                    href={page.url}
                                    className="flex items-center justify-between p-4 bg-gray-50 hover:bg-blue-50 rounded-xl transition group"
                                >
                                    <span className="font-semibold text-gray-900">{page.name}</span>
                                    <ArrowLeft className="w-5 h-5 rotate-180 text-blue-600 transform group-hover:translate-x-2 transition" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Error Code Details */}
                <div className="max-w-2xl mx-auto">
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-red-100 rounded-xl">
                                <AlertTriangle className="text-red-600" size={32} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-black text-gray-900 mb-2">Error Details</h3>
                                <div className="space-y-2 text-gray-700">
                                    <p><span className="font-bold">Error Code:</span> 404 - Not Found</p>
                                    <p><span className="font-bold">URL:</span> {window.location.href}</p>
                                    <p><span className="font-bold">Timestamp:</span> {new Date().toLocaleString()}</p>
                                    <p className="text-sm text-gray-600 mt-4">
                                        If you believe this is a mistake, please contact our support team.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-20 text-center text-gray-600">
                    <div className="flex items-center justify-center gap-6 mb-4">
                        <button className="p-3 bg-white hover:bg-gray-50 rounded-xl shadow-lg transition border-2 border-gray-200">
                            <Mail size={20} />
                        </button>
                        <button className="p-3 bg-white hover:bg-gray-50 rounded-xl shadow-lg transition border-2 border-gray-200">
                            <MessageCircle size={20} />
                        </button>
                        <button className="p-3 bg-white hover:bg-gray-50 rounded-xl shadow-lg transition border-2 border-gray-200">
                            <RefreshCw size={20} />
                        </button>
                    </div>
                    <p className="text-sm">
                        © 2024 Pham Quang Hai. Made with 💙 and lots of coffee ☕
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default Error404Page;