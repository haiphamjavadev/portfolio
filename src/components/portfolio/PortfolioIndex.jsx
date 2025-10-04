import {useEffect} from "react";
import {Header} from "./Header.jsx";
import {CareerGoals} from "./CareerGoals.jsx";
import {Education} from "./Education.jsx";
import {Skills} from "./Skills.jsx";
import {Experience} from "./Experience.jsx";
import {Projects} from "./Projects.jsx";
import {Hobbies} from "./Hobbies.jsx";
import {Footer} from "./Footer.jsx";
import {getDuration} from "../../utils/DateUtils.jsx";


const careerGoals =
    [
        {
            "type": "short-term",
            "title": "Short-term Goals",
            "subtitle": "Next 1-3 Years",
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
            "subtitle": "Next 4-10 Years",
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

const educations =
    [
        {
            "school": "Hanoi University of Business and Technology",
            "degree": "Engineer of Information Technology",
            "gpa": "3.33/4.0",
            "gpaLabel": "GPA Score",
            "duration": "2019 - 2023",
            "durationLabel": "Duration",
            "courses": [
                "IT Fundamentals", "Programming & Languages",
                "Software Architecture & Design", "Technology & Tools",
                "Advanced Subjects", "Soft Skills"
            ]
        }
    ];

const skills = {
    skills:
        [
            {
                title: "Backend Development",
                icon: "Terminal",
                color: "blue",
                gradient: "from-blue-500 to-cyan-500",
                // level: 95,
                skills: [
                    {name: "Java Core", level: 95, icon: "public/assets/imgs/skills/backend/java-background.png"},
                    {name: "Spring Framework", level: 90, icon: "public/assets/imgs/skills/backend/spring-icon.svg"},
                    {
                        name: "Monolith & Microservices",
                        level: 88,
                        icon: "public/assets/imgs/skills/backend/microservice.png"
                    },
                    {name: "REST API", level: 92, icon: "public/assets/imgs/skills/backend/restApi.jpeg"},
                    {name: "Hibernate/JPA", level: 87, icon: "public/assets/imgs/skills/backend/hibernate&jpa.png"},
                    {name: "Maven/Gradle", level: 95, icon: "public/assets/imgs/skills/backend/maven&gradle.jpeg"},
                    {name: "Kafka", level: 90, icon: "public/assets/imgs/skills/backend/kafka.png"},
                    {name: "IAM (Keycloak)", level: 80, icon: "public/assets/imgs/skills/backend/keycloak.jpeg"},
                    {name: "Object Storage (Minio)", level: 80, icon: "public/assets/imgs/skills/backend/minio.png"},
                    {name: "Docs (Swagger)", level: 80, icon: "public/assets/imgs/skills/backend/swagger.png"},
                ]
            },
            {
                title: "Database & Caching",
                icon: "Database",
                color: "green",
                gradient: "from-green-500 to-emerald-500",
                // level: 90,
                skills: [
                    {name: "Database Design", level: 95, icon: "public/assets/imgs/skills/database/database_design.png"},
                    {name: "Transaction & ACID", level: 90, icon: "public/assets/imgs/skills/database/sql_skill.png"},
                    {name: "MariaDB/MySQL", level: 92, icon: "public/assets/imgs/skills/database/mariadb&mysql.png"},
                    {name: "PostgresSQL", level: 88, icon: "public/assets/imgs/skills/database/postgres.jpeg"},
                    {name: "Oracle", level: 85, icon: "public/assets/imgs/skills/database/oracle.png"},
                    {name: "Redis", level: 87, icon: "public/assets/imgs/skills/database/redis.png"},
                    {
                        name: "Query Optimization",
                        level: 90,
                        icon: "public/assets/imgs/skills/database/query_otimize.png"
                    },
                    {name: "Indexing Strategy", level: 88, icon: "public/assets/imgs/skills/database/index.png"},
                    {name: "Migration", level: 90, icon: "public/assets/imgs/skills/database/liquibase.png"},
                    {name: "Replication", level: 80, icon: "public/assets/imgs/skills/database/replication.png"},
                ]
            },
            {
                title: "DevOps & Cloud",
                icon: "Server",
                color: "purple",
                gradient: "from-purple-500 to-pink-500",
                // level: 85,
                skills: [
                    {name: "Opera System (Windows & Linux)", level: 80, icon: "public/assets/imgs/skills/devOps/opera_system.jpeg"},
                    {name: "Docker", level: 90, icon: "public/assets/imgs/skills/devOps/docker.jpeg"},
                    {name: "Kubernetes", level: 75, icon: "public/assets/imgs/skills/devOps/k8s.jpeg"},
                    {name: "Jenkins", level: 87, icon: "public/assets/imgs/skills/devOps/jenkins.jpeg"},
                    {name: "GitLab CI/CD", level: 85, icon: "public/assets/imgs/skills/devOps/gitlabcicd.png"},
                    {name: "ELK Stack", level: 80, icon: "public/assets/imgs/skills/devOps/elk.png"},
                    {
                        name: "Prometheus & Grafana",
                        level: 80,
                        icon: "public/assets/imgs/skills/devOps/prometheus&&grafana.png"
                    }
                ]
            },
            {
                title: "Frontend & UI",
                icon: "Code",
                color: "orange",
                gradient: "from-orange-500 to-red-500",
                // level: 75,
                skills: [
                    {name: "HTML/CSS", level: 85, icon: "public/assets/imgs/skills/frontend/html&css.png"},
                    {name: "JavaScript/TypeScript", level: 80, icon: "public/assets/imgs/skills/frontend/js&ts.jpeg"},
                    {name: "React", level: 80, icon: "public/assets/imgs/skills/frontend/reactjs.jpeg"},
                    {name: "Angular", level: 70, icon: "public/assets/imgs/skills/frontend/angular.jpeg"},
                    {name: "Bootstrap", level: 82, icon: "public/assets/imgs/skills/frontend/boostrap.jpeg"},
                    {name: "Material UI", level: 78, icon: "public/assets/imgs/skills/frontend/masterialUi.png"},
                    {name: "Tailwind CSS", level: 70, icon: "public/assets/imgs/skills/frontend/tailwind.png"}
                ]
            }
        ],
    get techStacks() {
        return [...new Set(
            this.skills.flatMap(category =>
                category.skills.map(skill => skill.name)
            )
        )];
    }
};

const experiences = [
    {
        company: "Viettel Software",
        period: "05/2024 - Present",
        duration: "9+ months",
        position: "Software Development Engineer",
        description: "Leading development of enterprise-scale systems for Vietnam Airlines and VAS with multiple high-impact projects",
        logo: "🔷",
        color: "blue",
        current: true,
        projects: [
            {
                name: "VNA-MO",
                description: "Vietnam Airlines electronic flight document software system",
                period: "09/2024 - Present",
                customer: "Vietnam Airlines",
                teamSize: 60,
                role: "Backend Engineer",
                fullDescription: "Enterprise-scale electronic flight document management system handling 10,000+ daily operations with real-time data synchronization across multiple platforms.",
                responsibilities: [
                    "Analyze SRS documents, work closely with Business Analyst to clarify business requirements",
                    "Design and develop features on both web and mobile platforms",
                    "Participate in Agile meetings (daily stand-up, sprint planning, retrospective)",
                    "Design and implement RESTful API system for Web and Mobile platforms",
                    "Debug, troubleshoot and optimize the system, ensure stable system operation",
                    "Optimize SQL queries, improve system performance, reduce response time",
                    "Build data synchronization system between platforms, ensuring consistency"
                ],
                techStack: {
                    backend: ["Java", "Spring Boot", "Spring Cloud", "Hibernate"],
                    database: ["MariaDB", "Redis"],
                    devops: ["K8S", "Jenkins", "Docker"],
                    messaging: ["Kafka"],
                    security: ["Keycloak"],
                    monitoring: ["ELK", "Zipkin"],
                    scheduler: ["Quartz"]
                },
                achievements: [
                    "Architected microservices for 60-member team",
                    "Optimized system performance by 40%",
                    "Reduced response time from 3s to 1.2s",
                    "Implemented CI/CD pipeline reducing deployment time by 60%"
                ]
            },
            {
                name: "Mydio",
                description: "Provides an app/web to listen to audio and podcasts",
                period: "05/2024 - 09/2024",
                customer: "VAS - Viettel Business Center",
                teamSize: 27,
                role: "Backend Engineer",
                fullDescription: "Audio streaming and podcast platform serving 100K+ users with personalized recommendations and sophisticated book management system.",
                responsibilities: [
                    "Discuss, receive requests, analyze and confirm API solutions with customers",
                    "Write documents describing API solutions",
                    "Design and deploy RESTful API systems for Web and Mobile platforms",
                    "Participate in daily meetings with project team and customers",
                    "Build book data management system, record information on views, favorites",
                    "Maintain and optimize the system",
                    "Build CI/CD by Jenkins and deploy applications to DEV environments"
                ],
                techStack: {
                    backend: ["Java", "Spring Boot", "Spring Cloud", "OpenFeign"],
                    database: ["MySQL", "Elasticsearch"],
                    devops: ["Jenkins", "Docker"],
                    messaging: ["Kafka"],
                    cache: ["Redis"],
                    logging: ["Log4j"]
                },
                achievements: [
                    "Built scalable microservices architecture",
                    "Integrated Elasticsearch for advanced search",
                    "Implemented personalized recommendation system",
                    "Handled 100K+ concurrent users"
                ]
            }
        ]
    },
    {
        company: "AC",
        period: "07/2022 - 04/2024",
        duration: "1 year 10 months",
        position: "Software Development Engineer",
        description: "Full-stack development and team leadership for multiple client projects across fintech and automotive sectors",
        logo: "🟢",
        color: "green",
        current: false,
        projects: [
            {
                name: "Cardoctor",
                description: "Safe - Convenient - Economical Driving Support Platform",
                period: "07/2022 - 10/2023",
                customer: "Cardoctor",
                teamSize: 20,
                role: "Backend Engineer",
                fullDescription: "Comprehensive driving assistance platform with real-time tracking, maintenance alerts, cost optimization, and integrated third-party services for vehicle management.",
                responsibilities: [
                    "Communicate and receive requests with customers",
                    "Participate in Agile meetings (daily stand-up, sprint planning, retrospective)",
                    "Design and deploy RESTful API system for Web and Mobile platforms",
                    "Debug, troubleshoot and optimize the system, ensuring stable system operation",
                    "Optimize SQL queries, improve system performance, reduce response time",
                    "Support other team members on technical issues"
                ],
                techStack: {
                    backend: ["Java", "Spring Framework", "Spring MVC", "Spring Cloud", "OpenFeign"],
                    database: ["PostgreSQL"],
                    search: ["Elasticsearch"],
                    storage: ["MinIO"],
                    security: ["Keycloak"],
                    devops: ["K8S", "GitLab CI"]
                },
                achievements: [
                    "Built RESTful API for 20-member team",
                    "Reduced query response time by 50%",
                    "Implemented real-time vehicle tracking",
                    "Integrated multiple payment gateways"
                ]
            },
            {
                name: "Loyalty System",
                description: "Point accumulation system for loyal customers",
                period: "02/2023 - 10/2023",
                customer: "Cardoctor",
                teamSize: 7,
                role: "Team Lead & Full-stack Engineer",
                fullDescription: "Multi-tenant loyalty management system supporting multiple clients with complex point calculation algorithms, reward management, and comprehensive admin dashboards.",
                responsibilities: [
                    "Participate in Agile meetings and report progress",
                    "Design and deploy RESTful API system for Web and Mobile platforms",
                    "Debug, troubleshoot and optimize the system",
                    "Optimize SQL queries, improve system performance",
                    "Develop and maintain user interface (UI) for web and mobile applications",
                    "Assign tasks, guide and mentor team members to improve technical skills",
                    "Review code, manage project progress and ensure timely delivery",
                    "Support other team members on technical issues",
                    "Build CI/CD by GitLab CI and deploy applications to DEV environments"
                ],
                techStack: {
                    backend: ["Java", "Spring Framework", "Spring MVC", "Spring Cloud"],
                    database: ["PostgreSQL"],
                    search: ["Elasticsearch"],
                    storage: ["MinIO"],
                    security: ["Keycloak (Multitenancy)"],
                    frontend: ["React.js", "Material UI", "SCSS"],
                    devops: ["GitLab CI", "K8S"]
                },
                achievements: [
                    "Led team of 7 engineers successfully",
                    "Implemented multitenancy architecture",
                    "Built full-stack solution (React + Java)",
                    "Delivered project on time with high quality",
                    "Established code review process"
                ]
            },
            {
                name: "TPBank Blacklist System",
                description: "Suspicious customer project, blacklist management",
                period: "10/2023 - 04/2024",
                customer: "TPBank (Onsite)",
                teamSize: 3,
                role: "Backend Engineer (Onsite)",
                fullDescription: "Critical banking security infrastructure managing blacklisted customers and suspicious transactions with real-time event processing for fraud detection.",
                responsibilities: [
                    "Participate in Agile meetings (daily stand-up, sprint planning, retrospective)",
                    "Design and deploy RESTful API system for Web, ensuring performance and security",
                    "Debug, troubleshoot and optimize the system, ensuring stable system operation",
                    "Optimize SQL queries, improve system performance, reduce response time",
                    "Develop and maintain user interface (UI) for web applications",
                    "Build and deploy applications to DEV, UAT environments by Weblogic"
                ],
                techStack: {
                    backend: ["Java", "Spring Framework", "Spring MVC"],
                    database: ["Oracle"],
                    messaging: ["Kafka"],
                    server: ["Weblogic"]
                },
                achievements: [
                    "Built critical banking security system",
                    "Implemented real-time fraud detection with Kafka",
                    "Optimized Oracle queries for high performance",
                    "Worked onsite at TPBank headquarters",
                    "Delivered secure and compliant solution"
                ]
            }
        ]
    },
    {
        company: "Vissoft JSC",
        period: "01/2022 - 06/2022",
        duration: "6 months",
        position: "Software Development Engineer",
        description: "Developed internal HRM system with microservices architecture for employee management",
        logo: "🟣",
        color: "purple",
        current: false,
        projects: [
            {
                name: "HRM System",
                description: "Human resource management system",
                period: "01/2022 - 06/2022",
                customer: "Internal Company",
                teamSize: 15,
                role: "Backend Engineer",
                fullDescription: "Internal HRM system handling employee management, attendance, payroll, and performance reviews with API Gateway pattern and service discovery.",
                responsibilities: [
                    "Communicate and receive requests with customers",
                    "Participate in Agile meetings (daily stand-up, sprint planning, retrospective)",
                    "Design and deploy RESTful API system for Web and Mobile platforms",
                    "Debug, troubleshoot and optimize the system, ensuring stable system operation",
                    "Optimize SQL queries, improve system performance",
                    "Build and deploy applications to DEV environments"
                ],
                techStack: {
                    backend: ["Java", "Spring Data JPA", "Spring Cloud", "OpenFeign", "Eureka"],
                    database: ["MariaDB"],
                    storage: ["MinIO"],
                    frontend: ["React.js", "Bootstrap"],
                    gateway: ["Spring Cloud Gateway"]
                },
                achievements: [
                    "Built API Gateway with Spring Cloud Gateway",
                    "Implemented service discovery with Eureka",
                    "Developed employee management modules",
                    "Integrated MinIO for document storage",
                    "Deployed to production environment successfully"
                ]
            }
        ]
    }
];

const projects = [
    {
        name: "VNA-MO",
        company: "Viettel Software",
        period: "09/2024 - Present",
        description: "Enterprise-scale electronic flight document management system for Vietnam Airlines",
        fullDescription: "Architected and developed a comprehensive flight document management system handling 10,000+ daily operations. Implemented microservices architecture with event-driven design for real-time data synchronization across multiple platforms.",
        team: 60,
        role: "Backend Engineer",
        tech: ["Java", "Spring Boot", "MariaDB", "Redis", "Kafka", "ELK", "Keycloak", "K8S", "Jenkins"],
        highlights: [
            "RESTful API Design for Web & Mobile",
            "Real-time Data Synchronization System",
            "40% Performance Optimization",
            "Agile/Scrum Development Process"
        ],
        status: "Active",
        color: "blue",
        icon: "✈️"
    },
    {
        name: "Mydio",
        company: "Viettel Software",
        period: "05/2024 - 09/2024",
        description: "Audio streaming and podcast platform with personalized recommendations",
        fullDescription: "Built a scalable microservices-based audio streaming platform serving 100K+ users. Implemented sophisticated book management system with view tracking, favorites, and personalized recommendations using Elasticsearch.",
        team: 27,
        role: "Backend Engineer",
        tech: ["Java", "Spring Boot", "Spring Cloud", "MySQL", "Elasticsearch", "Kafka", "Redis", "Docker"],
        highlights: [
            "Microservices Architecture",
            "Elasticsearch Integration",
            "Book Management System",
            "Jenkins CI/CD Pipeline"
        ],
        status: "Completed",
        color: "purple",
        icon: "🎧"
    },
    {
        name: "Cardoctor",
        company: "AC",
        period: "07/2022 - 10/2023",
        description: "Comprehensive driving support platform with safety and economic features",
        fullDescription: "Developed a full-featured driving assistance platform with real-time tracking, maintenance alerts, and cost optimization. Integrated multiple third-party services for comprehensive vehicle management.",
        team: 20,
        role: "Backend Engineer",
        tech: ["Java", "Spring Framework", "PostgreSQL", "Elasticsearch", "MinIO", "Keycloak", "K8S"],
        highlights: [
            "RESTful API Development",
            "50% Query Optimization",
            "Kubernetes Deployment",
            "Team Collaboration"
        ],
        status: "Completed",
        color: "green",
        icon: "🚗"
    },
    {
        name: "Loyalty System",
        company: "AC",
        period: "02/2023 - 10/2023",
        description: "Multi-tenant point accumulation system for customer retention",
        fullDescription: "Led development of a sophisticated loyalty management system supporting multiple tenants. Implemented complex point calculation algorithms, reward management, and admin dashboards with React.",
        team: 7,
        role: "Team Lead & Full-stack Engineer",
        tech: ["Java", "Spring Framework", "PostgreSQL", "Elasticsearch", "React.js", "MUI", "GitLab CI"],
        highlights: [
            "Full-stack Development",
            "Team Leadership (7 members)",
            "Multitenancy Architecture",
            "Code Review Process"
        ],
        status: "Completed",
        color: "orange",
        icon: "🎁"
    },
    {
        name: "TPBank Blacklist",
        company: "AC (Onsite)",
        period: "10/2023 - 04/2024",
        description: "Banking security system for suspicious customer and blacklist management",
        fullDescription: "Developed critical security infrastructure for TPBank managing blacklisted customers and suspicious transactions. Implemented real-time event processing with Kafka for fraud detection.",
        team: 3,
        role: "Backend Engineer",
        tech: ["Java", "Spring Framework", "Oracle", "Kafka", "Weblogic"],
        highlights: [
            "Banking Security System",
            "Real-time Event Processing",
            "Production Deployment",
            "Oracle Optimization"
        ],
        status: "Completed",
        color: "red",
        icon: "🔒"
    },
    {
        name: "HRM System",
        company: "Vissoft JSC",
        period: "01/2022 - 06/2022",
        description: "Human resource management system with microservices architecture",
        fullDescription: "Built internal HRM system handling employee management, attendance, payroll, and performance reviews. Implemented API Gateway pattern with Spring Cloud Gateway and service discovery with Eureka.",
        team: 15,
        role: "Backend Engineer",
        tech: ["Java", "Spring Data JPA", "Spring Cloud", "MariaDB", "MinIO", "React.js", "Bootstrap"],
        highlights: [
            "Gateway Architecture",
            "OpenFeign Integration",
            "Employee Management Module",
            "Agile Development"
        ],
        status: "Completed",
        color: "indigo",
        icon: "👥"
    }
];

const hobbies = {
    hobbies: [
        {name: "Gaming", icon: "🎮", color: "purple", desc: "Strategy & RPG enthusiast"},
        {name: "Football", icon: "⚽", color: "green", desc: "Weekend warrior"},
        {name: "Badminton", icon: "🏸", color: "red", desc: "Competitive player"},
        {name: "Traveling", icon: "✈️", color: "blue", desc: "Exploring cultures"}
    ],
    personals: [
        {
            icon: "CheckCircle",
            color: "blue-400",
            text: "Passionate about building relationships through sports"
        },
        {
            icon: "CheckCircle",
            color: "green-400",
            text: "Committed to continuous learning and growth"
        },
        {
            icon: "CheckCircle",
            color: "purple-400",
            text: "Open to new challenges and opportunities"
        }
    ],
    workStyles: [
        {
            icon: "CheckCircle",
            color: "yellow-400",
            text: "Willing to work overtime when needed"
        },
        {
            icon: "CheckCircle",
            color: "orange-400",
            text: "Flexible with relocation opportunities"
        },
        {
            icon: "CheckCircle",
            color: "red-400",
            text: "Team player with strong collaboration skills"
        }
    ]
}

const headers = {
    profile: {
        initials: "PH",
        name: "Pham Quang Hai",
        avatar: "https://ui-avatars.com/api/?name=Pham+Quang+Hai&size=200&background=1e40af&color=fff&bold=true&format=svg",
        title: "Software Development Engineer",
        status: {text: "Available", color: "green-500"},
        badges: [
            {
                text: getDuration("2022-01-01"),
                color: "yellow-400",
                textColor: "gray-900",
                position: "top-right",
                rotate: "rotate-12"
            },
            {
                text: "Developer",
                color: "purple-500",
                textColor: "white",
                position: "bottom-left",
                rotate: "-rotate-12"
            }
        ]
    },
    stats: [
        {value: getDuration("2022-01-01"), label: "Years Exp"},
        {value: projects.length, label: "Projects"},
        {
            value: projects.reduce((max, item) =>
                item.team > max ? item.team : max, 0),
            label: "Team Size"
        }
    ],
    contacts: [
        {
            type: "email",
            icon: "Mail",
            value: "haiphamjavadev@gmail.com",
            href: "mailto:haiphamjavadev@gmail.com"
        },
        {
            type: "phone",
            icon: "Phone",
            value: "0979 015 430",
            href: "tel:0979015430"
        },
        {
            type: "location",
            icon: "MapPin",
            value: "Hanoi, Vietnam"
        }
    ],
    socials: [
        {
            icon: "FiGithub",
            href: "https://github.com",
            bg: "from-gray-800 to-gray-900",
            hoverBg: "from-gray-700 to-gray-800"
        },
        {
            icon: "Linkedin",
            href: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
            bg: "from-blue-600 to-blue-700",
            hoverBg: "from-blue-500 to-blue-600"
        }
    ]
};

const PortfolioIndex = () => {
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
        <div className="min-h-screen bg-white font-sans antialiased">
            <Header headers={headers}/>
            <CareerGoals careerGoals={careerGoals}/>
            <Education educations={educations}/>
            <Skills skills={skills}/>
            <Experience experiences={experiences}/>
            <Projects projects={projects}/>
            <Hobbies hobbies={hobbies}/>
            <Footer profiles={headers.profile}
                    socials={headers.socials}
                    quickLinks={headers.quickLinks}
                    contacts={headers.contacts}/>
        </div>
    );
};

export default PortfolioIndex;