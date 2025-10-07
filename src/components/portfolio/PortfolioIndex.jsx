import {useEffect} from "react";
import {Header} from "./Header.jsx";
import {CareerGoals} from "./CareerGoals.jsx";
import {Education} from "./Education.jsx";
import {Skills} from "./Skills.jsx";
import {Experience} from "./Experience.jsx";
import {Projects} from "./Projects.jsx";
import {Hobbies} from "./Hobbies.jsx";
import {Footer} from "./Footer.jsx";
import * as en from '../../locales/api/en.js';
import * as vi from '../../locales/api/vi.js';
import {useTranslation} from "react-i18next";

const PortfolioIndex = () => {
    const { i18n } = useTranslation();

    // ✅ lấy dữ liệu theo ngôn ngữ hiện tại
    const data = i18n.language === "vi" ? vi : en;

    useEffect(() => {
        // Add custom animations to document
        const style = document.createElement('style');
        style.textContent = `
      @keyframes blob {
        0%, 100% { transform: translate(0, 0) scale(1); }
        25% { transform: translate(20px, -50px) scale(1.1); }
        50% { transform: translate(-20px, 20px) scale(0.9); }
        75% { transform: translate(50px, 50px) scale(1.05); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
        10% { opacity: 0.3; }
        90% { opacity: 0.3; }
        100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
      }
      @keyframes particle {
        0%, 100% { transform: translate(0, 0); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translate(var(--tx, 100px), var(--ty, -100px)); opacity: 0; }
      }
      @keyframes gradient-x {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes spin-reverse {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
      }
      @keyframes bounce-slow {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      @keyframes progress-bar {
        from { width: 0%; }
        to { width: var(--width); }
      }
      @keyframes skill-bar {
        from { width: 0%; }
      }
      @keyframes scroll {
        0% { transform: translateY(0); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateY(16px); opacity: 0; }
      }
      @keyframes pulse-slow {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .animate-blob { animation: blob 7s infinite; }
      .animation-delay-2000 { animation-delay: 2s; }
      .animation-delay-4000 { animation-delay: 4s; }
      .animation-delay-1000 { animation-delay: 1s; }
      .animate-float { animation: float linear infinite; }
      .animate-particle { animation: particle linear infinite; }
      .animate-gradient-x { 
        background-size: 200% 200%;
        animation: gradient-x 3s ease infinite;
      }
      .animate-spin-slow { animation: spin-slow 3s linear infinite; }
      .animate-spin-reverse { animation: spin-reverse 3s linear infinite; }
      .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
      .animate-progress-bar { animation: progress-bar 1.5s ease-out forwards; }
      .animate-skill-bar { animation: skill-bar 1.5s ease-out forwards; }
      .animate-scroll { animation: scroll 2s ease-in-out infinite; }
      .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
      .animate-fade-in { animation: fade-in 0.6s ease-out; }
      
      .perspective-1000 { perspective: 1000px; }
      .shadow-3xl { box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3); }
      
      .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        console.log("Rendering header:", data.headers),

        <div className="min-h-screen bg-white font-sans antialiased">
            <Header headers={data.headers}/>
            <CareerGoals careerGoals={data.careerGoals}/>
            <Education educations={data.educations}/>
            <Skills skills={data.skills}/>
            <Experience experiences={data.experiences}/>
            <Projects projects={data.allProjects}/>
            <Hobbies hobbies={data.hobbies}/>
            <Footer profiles={data.headers.profile}
                    socials={data.headers.socials}
                    quickLinks={data.headers.quickLinks}
                    contacts={data.headers.contacts}/>
        </div>
    );
};

export default PortfolioIndex;