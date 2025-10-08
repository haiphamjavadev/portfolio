import {asset} from "../../utils/Assets.jsx";
import {getDuration} from "../../utils/DateUtils.jsx";


export const careerGoals =
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

export const educations =
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

export const skills = {
    skills:
        [
            {
                title: "Backend Development",
                icon: "Terminal",
                color: "blue",
                gradient: "from-blue-500 to-cyan-500",
                // level: 95,
                skills: [
                    {name: "Java Core", level: 95, icon: asset("/imgs/skills/backend/java-background.png")},
                    {name: "Spring Framework", level: 90, icon: asset("/imgs/skills/backend/spring-icon.svg")},
                    {
                        name: "Monolith & Microservices",
                        level: 88,
                        icon: asset("/imgs/skills/backend/microservice.png")
                    },
                    {name: "REST API", level: 92, icon: asset("/imgs/skills/backend/restApi.jpeg")},
                    {name: "Hibernate/JPA", level: 87, icon: asset("/imgs/skills/backend/hibernate&jpa.png")},
                    {name: "Maven/Gradle", level: 95, icon: asset("/imgs/skills/backend/maven&gradle.jpeg")},
                    {name: "Kafka", level: 90, icon: asset("/imgs/skills/backend/kafka.png")},
                    {name: "IAM (Keycloak)", level: 80, icon: asset("/imgs/skills/backend/keycloak.jpeg")},
                    {name: "Object Storage (Minio)", level: 80, icon: asset("/imgs/skills/backend/minio.png")},
                    {name: "Docs (Swagger)", level: 80, icon: asset("/imgs/skills/backend/swagger.png")},
                ]
            },
            {
                title: "Database & Caching",
                icon: "Database",
                color: "green",
                gradient: "from-green-500 to-emerald-500",
                // level: 90,
                skills: [
                    {name: "Database Design", level: 95, icon: asset("/imgs/skills/database/database_design.png")},
                    {name: "Transaction & ACID", level: 90, icon: asset("/imgs/skills/database/sql_skill.png")},
                    {name: "MariaDB/MySQL", level: 92, icon: asset("/imgs/skills/database/mariadb&mysql.png")},
                    {name: "PostgresSQL", level: 88, icon: asset("/imgs/skills/database/postgres.jpeg")},
                    {name: "Oracle", level: 85, icon: asset("/imgs/skills/database/oracle.png")},
                    {name: "Redis", level: 87, icon: asset("/imgs/skills/database/redis.png")},
                    {
                        name: "Query Optimization",
                        level: 90,
                        icon: asset("/imgs/skills/database/query_otimize.png")
                    },
                    {name: "Indexing Strategy", level: 88, icon: asset("/imgs/skills/database/index.png")},
                    {name: "Migration", level: 90, icon: asset("/imgs/skills/database/liquibase.png")},
                    {name: "Replication", level: 80, icon: asset("/imgs/skills/database/replication.png")},
                ]
            },
            {
                title: "DevOps & Cloud",
                icon: "Server",
                color: "purple",
                gradient: "from-purple-500 to-pink-500",
                // level: 85,
                skills: [
                    {
                        name: "Opera System (Windows & Linux)",
                        level: 80,
                        icon: asset("/imgs/skills/devOps/opera_system.jpeg")
                    },
                    {name: "Docker", level: 90, icon: asset("/imgs/skills/devOps/docker.jpeg")},
                    {name: "Kubernetes", level: 75, icon: asset("/imgs/skills/devOps/k8s.jpeg")},
                    {name: "Jenkins", level: 87, icon: asset("/imgs/skills/devOps/jenkins.jpeg")},
                    {name: "GitLab CI/CD", level: 85, icon: asset("/imgs/skills/devOps/gitlabcicd.png")},
                    {name: "ELK Stack", level: 80, icon: asset("/imgs/skills/devOps/elk.png")},
                    {
                        name: "Prometheus & Grafana",
                        level: 80,
                        icon: asset("/imgs/skills/devOps/prometheus&&grafana.png")
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
                    {name: "HTML/CSS", level: 85, icon: asset("/imgs/skills/frontend/html&css.png")},
                    {name: "JavaScript/TypeScript", level: 80, icon: asset("/imgs/skills/frontend/js&ts.jpeg")},
                    {name: "React", level: 80, icon: asset("/imgs/skills/frontend/reactjs.jpeg")},
                    {name: "Angular", level: 70, icon: asset("/imgs/skills/frontend/angular.jpeg")},
                    {name: "Bootstrap", level: 82, icon: asset("/imgs/skills/frontend/boostrap.jpeg")},
                    {name: "Material UI", level: 78, icon: asset("/imgs/skills/frontend/masterialUi.png")},
                    {name: "Tailwind CSS", level: 70, icon: asset("/imgs/skills/frontend/tailwind.png")}
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

export const experiences = [
    {
        company: "Viettel Software",
        period: "05/2024 - Present",
        duration: getDuration("2024-05-01", new Date()),
        position: "Software Development Engineer",
        description: "Sub Leader development of enterprise-scale systems for Vietnam Airlines and VAS with multiple high-impact projects",
        logo: asset("/imgs/company/viettelsoftware.png"),
        color: "green",
        current: true,
        projects: [
            {
                name: "VNA-MO",
                description: "Vietnam Airlines electronic flight document software system",
                period: "09/2024 - Present",
                customer: "Vietnam Airlines",
                teamSize: 60,
                role: "Backend Engineer",
                fullDescription: "Enterprise-scale electronic flight document management system supporting 70,000 users including cabin crews, pilots, and flight operation center staff, handling over 10,000 daily operations with real-time data synchronization across multiple platforms to ensure seamless flight operations and safety compliance.",
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
                    Architecture: ["Microservices", "Event-Driven"],
                    Backend: ["Java", "Spring Boot", "Spring Cloud", "Spring MVC", "Hibernate/JPA", "OpenFeign"],
                    Gateway: ["Kong"],
                    Database: ["MariaDB", "Max Scale"],
                    Devops: ["Kubernetes", "Jenkins", "Docker", "Harbor"],
                    Messaging: ["Kafka"],
                    Security: ["Keycloak", "Spring Security"],
                    Monitoring: ["ELK", "Zipkin", "Prometheus & Grafana"],
                    Cache: ["Redis"],
                    Scheduler: ["Quartz"]
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
        duration: getDuration("2022-07-01", "2024-04-30"),
        position: "Software Development Engineer",
        description: "Full-stack development and team leadership for multiple client projects across fintech and automotive sectors",
        logo: asset("/imgs/company/ac_company.png"),
        color: "blue",
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
        duration: getDuration("2022-01-01", "2022-06-30"),
        position: "Software Development Engineer",
        description: "Developed internal HRM system with microservices architecture for employee management",
        logo: asset("/imgs/company/vissoft.png"),
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


export const hobbies = {
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

export const allProjects = experiences.flatMap(exp => exp.projects || []); // gom hết project từ mọi experience

export const headers = {
    profile: {
        initials: "PH",
        name: "Pham Quang Hai",
        avatar: asset("/imgs/avatar/avatar_me.jpeg"),
        title: "Software Development Engineer",
        bio: "Software Development Engineer with expertise in Spring Boot, Spring Security, " +
            "Spring Cloud, and microservices architecture. Experienced in designing scalable " +
            "backend systems, building REST APIs, and integrating with SQL databases, Kafka, Docker," +
            " and Kubernetes. Passionate about clean code, problem-solving, and delivering enterprise-grade" +
            " applications that serve thousands of users daily.",
        status: {text: "Available", color: "green-500"},
        badges: [
            {
                text: getDuration("2022-01-01"),
                i18n: "year_exp",
                color: "yellow-400",
                textColor: "gray-900",
                position: "top-right",
                rotate: "rotate-12"
            },
            {
                text: "",
                i18n: "role",
                color: "purple-500",
                textColor: "white",
                position: "bottom-left",
                rotate: "-rotate-12"
            }
        ]
    },
    stats: [
        {value: getDuration("2022-01-01"), i18n: "year_exp"},
        {value: allProjects.length, i18n: "projects"},
        {value: Math.max(...allProjects.map(p => p.teamSize || 0)), i18n: "team_size"} //
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

export const whyHireMe = {
    whyHireMe: {
        tag: "Why",
        title: "Why Choose Me?",
        subtitle: "Reasons why I’m a strong fit for the Software Engineer position",
        reasons: [
            {
                title: "Experience with Large Enterprises",
                desc: "Successfully delivered projects for Vietnam Airlines, Viettel Telecom, and TPBank with high performance and scalability."
            },
            {
                title: "Microservices Architecture",
                desc: "Proficient in Spring Framework and modern technologies, with hands-on experience in distributed systems and event-driven architecture."
            },
            {
                title: "System Performance Optimization",
                desc: "Optimized SQL queries, implemented Redis caching, and reduced response time in production systems serving tens of thousands of users."
            },
            {
                title: "Team Leadership Experience",
                desc: "Led a small development team, mentored juniors, conducted code reviews, and ensured both code quality and project deadlines."
            },
            {
                title: "DevOps Proficiency",
                desc: "Built CI/CD pipelines with Jenkins and GitLab CI, containerized applications using Docker, and deployed to Kubernetes clusters for faster delivery."
            },
            {
                title: "Fast Learner & Problem Solver",
                desc: "Adapt quickly to new technologies, analyze complex requirements with BA teams, and propose optimal solutions in Agile environments."
            }
        ]
    }
};
