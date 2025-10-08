import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Mail, Phone, MapPin, Linkedin, Github, Code, Database, Server, Award, Briefcase, ChevronRight, Globe, Zap, Users, TrendingUp, Shield, Layers, GitBranch, Target, CheckCircle, Star } from 'lucide-react';

const translations = {
    en: {
        nav: {
            home: 'Home',
            why: 'Why Hire Me',
            experience: 'Experience',
            projects: 'Projects',
            skills: 'Skills',
            contact: 'Contact'
        },
        hero: {
            greeting: 'Hi, I\'m',
            name: 'Pham Quang Hai',
            role: 'Backend Spring Developer',
            subtitle: 'Building scalable microservices for enterprise applications',
            yearsExp: '3+ Years Experience',
            projects: 'Major Projects',
            teamSize: 'Max Team Size',
            cta: 'Why Hire Me?',
            contact: 'Get In Touch'
        },
        whyHireMe: {
            title: 'Why Hire Me?',
            subtitle: 'What makes me the right fit for your Backend Spring Developer role',
            reasons: [
                {
                    title: 'Enterprise-Scale Experience',
                    desc: 'Successfully delivered projects for Vietnam Airlines (60 members), Viettel (27 members), and TPBank with proven scalability and performance.'
                },
                {
                    title: 'Microservices Expert',
                    desc: 'Deep expertise in Spring Cloud ecosystem: Eureka, OpenFeign, API Gateway, with hands-on experience in distributed systems and event-driven architecture.'
                },
                {
                    title: 'Performance Optimizer',
                    desc: 'Track record of optimizing SQL queries, implementing Redis caching, and reducing response times in production systems serving millions of users.'
                },
                {
                    title: 'Technical Leadership',
                    desc: 'Led a team of 7 developers, mentored juniors, conducted code reviews, and ensured high-quality deliverables on the Loyalty System project.'
                },
                {
                    title: 'Full DevOps Pipeline',
                    desc: 'Built CI/CD with Jenkins and GitLab CI, containerized applications with Docker, and deployed to Kubernetes clusters for high availability.'
                },
                {
                    title: 'Fast Learner & Problem Solver',
                    desc: 'Quickly adapt to new technologies, analyze complex requirements with BA teams, and propose optimal solutions in Agile environments.'
                }
            ]
        },
        experience: {
            title: 'Work Experience',
            current: 'Current',
            companies: [
                {
                    company: 'Viettel Software',
                    role: 'Software Development Engineer',
                    period: 'May 2024 - Present',
                    location: 'Hanoi, Vietnam',
                    projects: ['VNA-MO (Vietnam Airlines)', 'Mydio (Audio & Podcast Platform)'],
                    highlights: [
                        'Working on critical flight document system for Vietnam Airlines',
                        'Team size: 60 members - Largest project experience',
                        'Designed RESTful APIs for Web & Mobile with high performance',
                        'Optimized system with Redis, Kafka, ELK stack',
                        'Built data synchronization ensuring consistency across platforms'
                    ]
                },
                {
                    company: 'AC',
                    role: 'Software Development Engineer',
                    period: 'Jul 2022 - Apr 2024',
                    location: 'Hanoi, Vietnam',
                    projects: ['Cardoctor Platform', 'Loyalty System', 'TPBank Blacklist System'],
                    highlights: [
                        'Led team of 7 developers on Loyalty System project',
                        'Onsite at TPBank for suspicious customer detection system',
                        'Full-stack development: Spring Cloud + ReactJS + MUI',
                        'Implemented Keycloak multitenancy architecture',
                        'Built CI/CD pipelines with GitLab CI and K8S deployment'
                    ]
                },
                {
                    company: 'Vissoft JSC',
                    role: 'Software Development Engineer',
                    period: 'Jan 2022 - Jun 2022',
                    location: 'Hanoi, Vietnam',
                    projects: ['HRM System'],
                    highlights: [
                        'First professional experience with Spring microservices',
                        'Developed HRM system with 15-member team',
                        'Worked with Spring Cloud Gateway, Eureka, OpenFeign',
                        'Gained solid foundation in enterprise Java development'
                    ]
                }
            ]
        },
        projects: {
            title: 'Featured Projects',
            items: [
                {
                    name: 'VNA-MO System',
                    company: 'Vietnam Airlines',
                    period: 'Sep 2024 - Present',
                    team: '60 members',
                    desc: 'Electronic flight document management system for national carrier',
                    tech: ['Spring Boot', 'MariaDB', 'Redis', 'Kafka', 'ELK', 'Keycloak', 'K8S', 'Jenkins'],
                    achievements: [
                        'Mission-critical system for airline operations',
                        'Handled high-volume concurrent requests',
                        'Implemented Quartz Scheduler for automated tasks',
                        'Data synchronization across web and mobile platforms'
                    ]
                },
                {
                    name: 'Mydio Platform',
                    company: 'Viettel VAS',
                    period: 'May 2024 - Sep 2024',
                    team: '27 members',
                    desc: 'Audio streaming and podcast platform for Viettel customers',
                    tech: ['Spring Boot', 'Spring Cloud', 'MySQL', 'ElasticSearch', 'Kafka', 'Redis', 'Docker'],
                    achievements: [
                        'RESTful API for content delivery and personalization',
                        'ElasticSearch integration for fast search',
                        'User analytics: views, favorites, recommendations',
                        'CI/CD automation with Jenkins'
                    ]
                },
                {
                    name: 'Loyalty System',
                    company: 'Cardoctor',
                    period: 'Feb 2023 - Oct 2023',
                    team: '7 members (Team Lead)',
                    desc: 'Point accumulation system for customer retention',
                    tech: ['Spring Cloud', 'PostgreSQL', 'ElasticSearch', 'Keycloak', 'ReactJS', 'MUI', 'K8S'],
                    achievements: [
                        '🏆 Led development team of 7 engineers',
                        'Implemented multitenancy with Keycloak',
                        'Full-stack: Backend APIs + Frontend UI',
                        'Code review, task assignment, mentoring juniors',
                        'GitLab CI pipeline for automated deployment'
                    ]
                },
                {
                    name: 'TPBank Blacklist System',
                    company: 'TPBank (Onsite)',
                    period: 'Oct 2023 - Apr 2024',
                    team: '3 members',
                    desc: 'Suspicious customer detection and management for banking',
                    tech: ['Spring MVC', 'Oracle', 'Kafka', 'Weblogic'],
                    achievements: [
                        'Banking-grade security and compliance',
                        'Real-time blacklist checking with Kafka',
                        'Oracle optimization for large datasets',
                        'Deployed on Weblogic for enterprise stability'
                    ]
                },
                {
                    name: 'Cardoctor Platform',
                    company: 'Cardoctor',
                    period: 'Jul 2022 - Oct 2023',
                    team: '20 members',
                    desc: 'Comprehensive driving support platform',
                    tech: ['Spring Cloud', 'PostgreSQL', 'ElasticSearch', 'Minio', 'Keycloak', 'K8S'],
                    achievements: [
                        'Microservices architecture with OpenFeign',
                        'Object storage with Minio',
                        'Authentication with Keycloak',
                        'Kubernetes orchestration for scalability'
                    ]
                }
            ]
        },
        skills: {
            title: 'Technical Stack',
            subtitle: 'Technologies I work with daily',
            categories: [
                {
                    icon: 'code',
                    name: 'Backend & Frameworks',
                    items: [
                        'Java 8+ (OOP, Multithreading, Collections)',
                        'Spring Boot & Spring Cloud',
                        'Spring MVC, Data JPA, Security',
                        'Hibernate/JPA, Liquibase, Flyway',
                        'Maven & Gradle'
                    ]
                },
                {
                    icon: 'database',
                    name: 'Databases & Storage',
                    items: [
                        'Oracle, MySQL, MariaDB, PostgreSQL',
                        'Query Optimization & Indexing',
                        'Redis (Caching)',
                        'ElasticSearch (Search & Analytics)',
                        'Minio (Object Storage)'
                    ]
                },
                {
                    icon: 'layers',
                    name: 'Microservices & Architecture',
                    items: [
                        'Spring Cloud (Gateway, Eureka, OpenFeign)',
                        'Kafka (Event Streaming)',
                        'RESTful API Design',
                        'Keycloak (Authentication)',
                        'Monolithic → Microservices Migration'
                    ]
                },
                {
                    icon: 'server',
                    name: 'DevOps & Deployment',
                    items: [
                        'Docker & Docker Compose',
                        'Kubernetes (K8S)',
                        'Jenkins & GitLab CI/CD',
                        'ELK Stack (Logging)',
                        'Linux & Weblogic'
                    ]
                },
                {
                    icon: 'users',
                    name: 'Methodologies & Tools',
                    items: [
                        'Agile/Scrum',
                        'Jira & Confluence',
                        'Git (GitLab, GitHub, SourceTree)',
                        'Swagger/OpenAPI',
                        'Code Review & Mentoring'
                    ]
                },
                {
                    icon: 'code',
                    name: 'Frontend (Bonus)',
                    items: [
                        'ReactJS & Angular',
                        'HTML, CSS, SCSS',
                        'Bootstrap & MUI',
                        'JavaScript, jQuery, Ajax'
                    ]
                }
            ]
        },
        goals: {
            title: 'Career Goals',
            shortTerm: {
                title: 'Short-term Goals',
                items: [
                    'Master advanced system design and architectural patterns',
                    'Gain cloud certifications (AWS/Azure)',
                    'Lead technical initiatives in medium to large-scale projects',
                    'Mentor and grow junior developers',
                    'Contribute to open-source Spring projects'
                ]
            },
            longTerm: {
                title: 'Long-term Vision',
                items: [
                    'Become Senior/Lead Backend Engineer',
                    'Transition to Solution Architect or Technical Lead role',
                    'Build expertise in distributed systems at scale',
                    'Explore Project Management and tech leadership',
                    'Collaborate on innovative tech startups'
                ]
            }
        },
        contact: {
            title: 'Let\'s Connect',
            subtitle: 'Open to exciting backend opportunities and collaborations',
            info: {
                email: 'haiphamjavadev@gmail.com',
                phone: '+84 979 015 430',
                location: 'Ho Tung Mau, Nam Tu Liem, Hanoi'
            },
            cta: 'Available for full-time positions and interesting projects'
        },
        footer: {
            rights: 'All rights reserved',
            note: 'Built with React & Tailwind CSS'
        }
    },
    vi: {
        nav: {
            home: 'Trang chủ',
            why: 'Tại sao chọn tôi',
            experience: 'Kinh nghiệm',
            projects: 'Dự án',
            skills: 'Kỹ năng',
            contact: 'Liên hệ'
        },
        hero: {
            greeting: 'Xin chào, tôi là',
            name: 'Phạm Quang Hải',
            role: 'Backend Spring Developer',
            subtitle: 'Xây dựng hệ thống microservices cho ứng dụng doanh nghiệp',
            yearsExp: '3+ Năm Kinh Nghiệm',
            projects: 'Dự Án Lớn',
            teamSize: 'Team Lớn Nhất',
            cta: 'Tại Sao Chọn Tôi?',
            contact: 'Liên Hệ Ngay'
        },
        whyHireMe: {
            title: 'Tại Sao Chọn Tôi?',
            subtitle: 'Lý do tôi phù hợp với vị trí Backend Spring Developer',
            reasons: [
                {
                    title: 'Kinh Nghiệm Doanh Nghiệp Lớn',
                    desc: 'Đã thành công triển khai dự án cho Vietnam Airlines (60 người), Viettel (27 người), và TPBank với hiệu suất và khả năng mở rộng đã được chứng minh.'
                },
                {
                    title: 'Chuyên Gia Microservices',
                    desc: 'Kinh nghiệm sâu về Spring Cloud: Eureka, OpenFeign, API Gateway, với thực chiến trong hệ thống phân tán và kiến trúc event-driven.'
                },
                {
                    title: 'Tối Ưu Hiệu Suất',
                    desc: 'Thành tích tối ưu SQL queries, triển khai Redis caching, giảm response time trong hệ thống production phục vụ hàng triệu người dùng.'
                },
                {
                    title: 'Lãnh Đạo Kỹ Thuật',
                    desc: 'Dẫn dắt team 7 developers, hướng dẫn juniors, review code, đảm bảo chất lượng cao trong dự án Loyalty System.'
                },
                {
                    title: 'DevOps Toàn Diện',
                    desc: 'Xây dựng CI/CD với Jenkins và GitLab CI, containerize ứng dụng với Docker, deploy lên Kubernetes cluster để đảm bảo high availability.'
                },
                {
                    title: 'Học Nhanh & Giải Quyết Vấn Đề',
                    desc: 'Thích nghi nhanh với công nghệ mới, phân tích requirements phức tạp cùng BA team, đề xuất giải pháp tối ưu trong môi trường Agile.'
                }
            ]
        },
        experience: {
            title: 'Kinh Nghiệm Làm Việc',
            current: 'Hiện tại',
            companies: [
                {
                    company: 'Viettel Software',
                    role: 'Software Development Engineer',
                    period: 'Tháng 5/2024 - Hiện tại',
                    location: 'Hà Nội, Việt Nam',
                    projects: ['VNA-MO (Vietnam Airlines)', 'Mydio (Nền tảng Audio & Podcast)'],
                    highlights: [
                        'Làm việc trên hệ thống tài liệu bay quan trọng cho Vietnam Airlines',
                        'Quy mô team: 60 thành viên - Dự án lớn nhất từng tham gia',
                        'Thiết kế RESTful APIs cho Web & Mobile với hiệu suất cao',
                        'Tối ưu hệ thống với Redis, Kafka, ELK stack',
                        'Xây dựng đồng bộ dữ liệu đảm bảo tính nhất quán'
                    ]
                },
                {
                    company: 'AC',
                    role: 'Software Development Engineer',
                    period: 'Tháng 7/2022 - Tháng 4/2024',
                    location: 'Hà Nội, Việt Nam',
                    projects: ['Nền tảng Cardoctor', 'Hệ thống Loyalty', 'Hệ thống Blacklist TPBank'],
                    highlights: [
                        'Dẫn dắt team 7 developers trong dự án Loyalty System',
                        'Onsite tại TPBank cho hệ thống phát hiện khách hàng nghi vấn',
                        'Phát triển full-stack: Spring Cloud + ReactJS + MUI',
                        'Triển khai kiến trúc Keycloak multitenancy',
                        'Xây dựng CI/CD pipeline với GitLab CI và K8S'
                    ]
                },
                {
                    company: 'Vissoft JSC',
                    role: 'Software Development Engineer',
                    period: 'Tháng 1/2022 - Tháng 6/2022',
                    location: 'Hà Nội, Việt Nam',
                    projects: ['Hệ thống HRM'],
                    highlights: [
                        'Kinh nghiệm chuyên nghiệp đầu tiên với Spring microservices',
                        'Phát triển hệ thống HRM với team 15 người',
                        'Làm việc với Spring Cloud Gateway, Eureka, OpenFeign',
                        'Xây dựng nền tảng vững chắc về Java doanh nghiệp'
                    ]
                }
            ]
        },
        projects: {
            title: 'Dự Án Tiêu Biểu',
            items: [
                {
                    name: 'Hệ Thống VNA-MO',
                    company: 'Vietnam Airlines',
                    period: 'Tháng 9/2024 - Hiện tại',
                    team: '60 thành viên',
                    desc: 'Hệ thống quản lý tài liệu bay điện tử cho hãng hàng không quốc gia',
                    tech: ['Spring Boot', 'MariaDB', 'Redis', 'Kafka', 'ELK', 'Keycloak', 'K8S', 'Jenkins'],
                    achievements: [
                        'Hệ thống quan trọng cho vận hành hàng không',
                        'Xử lý lượng requests đồng thời lớn',
                        'Triển khai Quartz Scheduler cho tác vụ tự động',
                        'Đồng bộ dữ liệu giữa web và mobile'
                    ]
                },
                {
                    name: 'Nền Tảng Mydio',
                    company: 'Viettel VAS',
                    period: 'Tháng 5/2024 - Tháng 9/2024',
                    team: '27 thành viên',
                    desc: 'Nền tảng nghe audio và podcast cho khách hàng Viettel',
                    tech: ['Spring Boot', 'Spring Cloud', 'MySQL', 'ElasticSearch', 'Kafka', 'Redis', 'Docker'],
                    achievements: [
                        'RESTful API cho phân phối nội dung và cá nhân hóa',
                        'Tích hợp ElasticSearch cho tìm kiếm nhanh',
                        'Phân tích người dùng: lượt xem, yêu thích, gợi ý',
                        'Tự động hóa CI/CD với Jenkins'
                    ]
                },
                {
                    name: 'Hệ Thống Loyalty',
                    company: 'Cardoctor',
                    period: 'Tháng 2/2023 - Tháng 10/2023',
                    team: '7 thành viên (Team Lead)',
                    desc: 'Hệ thống tích điểm cho khách hàng thân thiết',
                    tech: ['Spring Cloud', 'PostgreSQL', 'ElasticSearch', 'Keycloak', 'ReactJS', 'MUI', 'K8S'],
                    achievements: [
                        '🏆 Dẫn dắt team 7 kỹ sư phát triển',
                        'Triển khai multitenancy với Keycloak',
                        'Full-stack: Backend APIs + Frontend UI',
                        'Review code, phân công tasks, hướng dẫn juniors',
                        'GitLab CI pipeline cho deployment tự động'
                    ]
                },
                {
                    name: 'Hệ Thống Blacklist TPBank',
                    company: 'TPBank (Onsite)',
                    period: 'Tháng 10/2023 - Tháng 4/2024',
                    team: '3 thành viên',
                    desc: 'Phát hiện và quản lý khách hàng nghi vấn cho ngân hàng',
                    tech: ['Spring MVC', 'Oracle', 'Kafka', 'Weblogic'],
                    achievements: [
                        'Bảo mật và tuân thủ chuẩn ngân hàng',
                        'Kiểm tra blacklist real-time với Kafka',
                        'Tối ưu Oracle cho tập dữ liệu lớn',
                        'Deploy trên Weblogic cho ổn định doanh nghiệp'
                    ]
                },
                {
                    name: 'Nền Tảng Cardoctor',
                    company: 'Cardoctor',
                    period: 'Tháng 7/2022 - Tháng 10/2023',
                    team: '20 thành viên',
                    desc: 'Nền tảng hỗ trợ lái xe toàn diện',
                    tech: ['Spring Cloud', 'PostgreSQL', 'ElasticSearch', 'Minio', 'Keycloak', 'K8S'],
                    achievements: [
                        'Kiến trúc microservices với OpenFeign',
                        'Lưu trữ object với Minio',
                        'Xác thực với Keycloak',
                        'Điều phối Kubernetes cho khả năng mở rộng'
                    ]
                }
            ]
        },
        skills: {
            title: 'Công Nghệ Sử Dụng',
            subtitle: 'Các công nghệ tôi làm việc hàng ngày',
            categories: [
                {
                    icon: 'code',
                    name: 'Backend & Frameworks',
                    items: [
                        'Java 8+ (OOP, Multithreading, Collections)',
                        'Spring Boot & Spring Cloud',
                        'Spring MVC, Data JPA, Security',
                        'Hibernate/JPA, Liquibase, Flyway',
                        'Maven & Gradle'
                    ]
                },
                {
                    icon: 'database',
                    name: 'Cơ Sở Dữ Liệu',
                    items: [
                        'Oracle, MySQL, MariaDB, PostgreSQL',
                        'Tối ưu Query & Indexing',
                        'Redis (Caching)',
                        'ElasticSearch (Search & Analytics)',
                        'Minio (Object Storage)'
                    ]
                },
                {
                    icon: 'layers',
                    name: 'Microservices & Kiến Trúc',
                    items: [
                        'Spring Cloud (Gateway, Eureka, OpenFeign)',
                        'Kafka (Event Streaming)',
                        'Thiết kế RESTful API',
                        'Keycloak (Authentication)',
                        'Chuyển đổi Monolithic → Microservices'
                    ]
                },
                {
                    icon: 'server',
                    name: 'DevOps & Triển Khai',
                    items: [
                        'Docker & Docker Compose',
                        'Kubernetes (K8S)',
                        'Jenkins & GitLab CI/CD',
                        'ELK Stack (Logging)',
                        'Linux & Weblogic'
                    ]
                },
                {
                    icon: 'users',
                    name: 'Phương Pháp & Công Cụ',
                    items: [
                        'Agile/Scrum',
                        'Jira & Confluence',
                        'Git (GitLab, GitHub, SourceTree)',
                        'Swagger/OpenAPI',
                        'Code Review & Mentoring'
                    ]
                },
                {
                    icon: 'code',
                    name: 'Frontend (Bonus)',
                    items: [
                        'ReactJS & Angular',
                        'HTML, CSS, SCSS',
                        'Bootstrap & MUI',
                        'JavaScript, jQuery, Ajax'
                    ]
                }
            ]
        },
        goals: {
            title: 'Mục Tiêu Nghề Nghiệp',
            shortTerm: {
                title: 'Ngắn Hạn',
                items: [
                    'Nắm vững thiết kế hệ thống và các pattern kiến trúc nâng cao',
                    'Đạt chứng chỉ cloud (AWS/Azure)',
                    'Dẫn dắt các sáng kiến kỹ thuật trong dự án quy mô trung-lớn',
                    'Hướng dẫn và phát triển junior developers',
                    'Đóng góp cho các dự án Spring open-source'
                ]
            },
            longTerm: {
                title: 'Dài Hạn',
                items: [
                    'Trở thành Senior/Lead Backend Engineer',
                    'Chuyển sang vai trò Solution Architect hoặc Technical Lead',
                    'Xây dựng chuyên môn về distributed systems ở quy mô lớn',
                    'Khám phá quản lý dự án và lãnh đạo công nghệ',
                    'Hợp tác trong các startup công nghệ sáng tạo'
                ]
            }
        },
        contact: {
            title: 'Kết Nối',
            subtitle: 'Sẵn sàng cho các cơ hội backend thú vị và hợp tác',
            info: {
                email: 'haiphamjavadev@gmail.com',
                phone: '+84 979 015 430',
                location: 'Hồ Tùng Mậu, Nam Từ Liêm, Hà Nội'
            },
            cta: 'Sẵn sàng cho vị trí full-time và các dự án thú vị'
        },
        footer: {
            rights: 'Bảo lưu mọi quyền',
            note: 'Được xây dựng với React & Tailwind CSS'
        }
    }
};

const iconMap = {
    code: Code,
    database: Database,
    layers: Layers,
    server: Server,
    users: Users
};

export default function Portfolio2() {
    const [theme, setTheme] = useState('dark');
    const [lang, setLang] = useState('en');
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const t = translations[lang];

    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
    const toggleLang = () => setLang(lang === 'en' ? 'vi' : 'en');

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'why', 'experience', 'projects', 'skills', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isDark = theme === 'dark';
    const bgPrimary = isDark ? 'bg-gray-900' : 'bg-gray-50';
    const bgSecondary = isDark ? 'bg-gray-800' : 'bg-white';
    const bgTertiary = isDark ? 'bg-gray-700' : 'bg-gray-100';
    const textPrimary = isDark ? 'text-white' : 'text-gray-900';
    const textSecondary = isDark ? 'text-gray-300' : 'text-gray-600';
    const accent = 'text-emerald-500';
    const accentBg = 'bg-emerald-500';
    const accentHover = 'hover:bg-emerald-600';
    const border = isDark ? 'border-gray-700' : 'border-gray-200';

    return (
        <div className={`min-h-screen ${bgPrimary} ${textPrimary} transition-colors duration-300`}>
            {/* Navigation */}
            <nav className={`fixed top-0 w-full ${bgSecondary} shadow-lg z-50 backdrop-blur-lg bg-opacity-95`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0 font-bold text-xl">
                            <span className={accent}>{'<'}</span>
                            <span>Hai</span>
                            <span className={accent}>{'>'}</span>
                        </div>

                        <div className="hidden md:flex space-x-8">
                            {['home', 'why', 'experience', 'projects', 'skills', 'contact'].map(item => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={`hover:${accent} transition-colors ${activeSection === item ? accent : ''}`}
                                >
                                    {t.nav[item]}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center space-x-4">
                            <button onClick={toggleTheme} className={`p-2 rounded-lg ${bgTertiary}`}>
                                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            <button onClick={toggleLang} className={`p-2 rounded-lg ${bgTertiary} flex items-center gap-1`}>
                                <Globe size={20} />
                                <span className="text-sm font-semibold">{lang.toUpperCase()}</span>
                            </button>
                            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
                                {menuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {menuOpen && (
                    <div className={`md:hidden ${bgSecondary} border-t ${border}`}>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {['home', 'why', 'experience', 'projects', 'skills', 'contact'].map(item => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={`block w-full text-left px-3 py-2 rounded-md ${bgTertiary} ${activeSection === item ? accent : ''}`}
                                >
                                    {t.nav[item]}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <p className={`${textSecondary} mb-4 text-lg`}>{t.hero.greeting}</p>
                        <h1 className="text-5xl md:text-7xl font-bold mb-2">
                            {t.hero.name}
                        </h1>
                        <h2 className={`text-3xl md:text-4xl font-bold ${accent} mb-6`}>
                            {t.hero.role}
                        </h2>
                        <p className={`${textSecondary} text-lg md:text-xl max-w-2xl mx-auto mb-12`}>
                            {t.hero.subtitle}
                        </p>

                        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
                            <div className={`${bgSecondary} p-4 rounded-lg`}>
                                <Award className={`${accent} mx-auto mb-2`} size={32} />
                                <p className="text-2xl font-bold">3+</p>
                                <p className={`${textSecondary} text-sm`}>{t.hero.yearsExp}</p>
                            </div>
                            <div className={`${bgSecondary} p-4 rounded-lg`}>
                                <Briefcase className={`${accent} mx-auto mb-2`} size={32} />
                                <p className="text-2xl font-bold">6</p>
                                <p className={`${textSecondary} text-sm`}>{t.hero.projects}</p>
                            </div>
                            <div className={`${bgSecondary} p-4 rounded-lg`}>
                                <Users className={`${accent} mx-auto mb-2`} size={32} />
                                <p className="text-2xl font-bold">60</p>
                                <p className={`${textSecondary} text-sm`}>{t.hero.teamSize}</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <button
                                onClick={() => scrollToSection('why')}
                                className={`${accentBg} text-white px-8 py-3 rounded-lg ${accentHover} transition-colors flex items-center gap-2 font-semibold`}
                            >
                                {t.hero.cta}
                                <Target size={20} />
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className={`border-2 border-emerald-500 ${textPrimary} px-8 py-3 rounded-lg hover:bg-emerald-500 hover:text-white transition-colors font-semibold`}
                            >
                                {t.hero.contact}
                            </button>
                        </div>

                        <div className="flex justify-center gap-6">
                            <a href="mailto:haiphamjavadev@gmail.com" className={`${textSecondary} hover:${accent} transition-colors`}>
                                <Mail size={24} />
                            </a>
                            <a href="https://github.com/haipham" target="_blank" rel="noopener noreferrer" className={`${textSecondary} hover:${accent} transition-colors`}>
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com/in/haipham" target="_blank" rel="noopener noreferrer" className={`${textSecondary} hover:${accent} transition-colors`}>
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Hire Me Section - Most Important */}
            <section id="why" className={`py-20 px-4 ${bgSecondary}`}>
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.whyHireMe.title}</h2>
                        <p className={`${textSecondary} text-lg max-w-3xl mx-auto`}>{t.whyHireMe.subtitle}</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {t.whyHireMe.reasons.map((reason, idx) => (
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

            {/* Experience Section */}
            <section id="experience" className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">{t.experience.title}</h2>

                    <div className="space-y-8">
                        {t.experience.companies.map((company, idx) => (
                            <div key={idx} className={`${bgSecondary} p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow`}>
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                    <div className="mb-4 md:mb-0">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Briefcase className={accent} size={24} />
                                            <h3 className="text-2xl font-bold">{company.role}</h3>
                                        </div>
                                        <p className={`text-xl ${accent} font-semibold`}>{company.company}</p>
                                    </div>
                                    <div className="text-left md:text-right">
                                        <p className={`${textSecondary} font-medium flex items-center gap-2 md:justify-end`}>
                                            {idx === 0 && <span className={`${accentBg} text-white px-2 py-1 rounded text-xs`}>{t.experience.current}</span>}
                                            {company.period}
                                        </p>
                                        <p className={`${textSecondary} text-sm flex items-center gap-1 md:justify-end`}>
                                            <MapPin size={16} />
                                            {company.location}
                                        </p>
                                    </div>
                                </div>

                                <div className={`mb-4 pb-4 border-b ${border}`}>
                                    <p className={`${textSecondary} font-semibold mb-2`}>Key Projects:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {company.projects.map((proj, i) => (
                                            <span key={i} className={`${bgTertiary} px-3 py-1 rounded-full text-sm`}>
                        {proj}
                      </span>
                                        ))}
                                    </div>
                                </div>

                                <ul className="space-y-2">
                                    {company.highlights.map((highlight, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <ChevronRight className={`${accent} flex-shrink-0 mt-0.5`} size={20} />
                                            <span className={textSecondary}>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className={`py-20 px-4 ${bgSecondary}`}>
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">{t.projects.title}</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {t.projects.items.map((project, idx) => (
                            <div key={idx} className={`${bgPrimary} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border-2 ${border}`}>
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold mb-1">{project.name}</h3>
                                        <p className={`${accent} font-semibold mb-2`}>{project.company}</p>
                                    </div>
                                    {idx === 2 && <Star className="text-yellow-500 fill-yellow-500" size={24} />}
                                </div>

                                <div className={`${textSecondary} text-sm mb-3 flex items-center gap-4`}>
                  <span className="flex items-center gap-1">
                    <Users size={16} />
                      {project.team}
                  </span>
                                    <span>{project.period}</span>
                                </div>

                                <p className={`${textSecondary} mb-4`}>{project.desc}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className={`${bgTertiary} px-2 py-1 rounded text-xs font-medium`}>
                      {tech}
                    </span>
                                    ))}
                                </div>

                                <div className={`border-t ${border} pt-4`}>
                                    <p className="font-semibold mb-2 text-sm">Key Achievements:</p>
                                    {project.achievements.map((achievement, i) => (
                                        <div key={i} className="flex items-start gap-2 mb-2">
                                            <Zap size={16} className={`${accent} flex-shrink-0 mt-0.5`} />
                                            <span className={`${textSecondary} text-sm`}>{achievement}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">{t.skills.title}</h2>
                        <p className={`${textSecondary} text-lg`}>{t.skills.subtitle}</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {t.skills.categories.map((category, idx) => {
                            const IconComponent = iconMap[category.icon];
                            return (
                                <div key={idx} className={`${bgSecondary} p-6 rounded-xl shadow-lg`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <IconComponent className={accent} size={28} />
                                        <h3 className="text-xl font-bold">{category.name}</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {category.items.map((skill, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <ChevronRight className={`${accent} flex-shrink-0 mt-0.5`} size={18} />
                                                <span className={textSecondary}>{skill}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>

                    {/* Career Goals */}
                    <div className="mt-16 grid md:grid-cols-2 gap-8">
                        <div className={`${bgSecondary} p-6 rounded-xl`}>
                            <div className="flex items-center gap-3 mb-4">
                                <Target className={accent} size={28} />
                                <h3 className="text-2xl font-bold">{t.goals.shortTerm.title}</h3>
                            </div>
                            <ul className="space-y-2">
                                {t.goals.shortTerm.items.map((goal, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <TrendingUp className={`${accent} flex-shrink-0 mt-0.5`} size={18} />
                                        <span className={textSecondary}>{goal}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={`${bgSecondary} p-6 rounded-xl`}>
                            <div className="flex items-center gap-3 mb-4">
                                <Star className={accent} size={28} />
                                <h3 className="text-2xl font-bold">{t.goals.longTerm.title}</h3>
                            </div>
                            <ul className="space-y-2">
                                {t.goals.longTerm.items.map((goal, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <TrendingUp className={`${accent} flex-shrink-0 mt-0.5`} size={18} />
                                        <span className={textSecondary}>{goal}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={`py-20 px-4 ${bgSecondary}`}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">{t.contact.title}</h2>
                    <p className={`${textSecondary} text-lg mb-12`}>{t.contact.subtitle}</p>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <a href={`mailto:${t.contact.info.email}`} className={`${bgPrimary} p-6 rounded-xl hover:shadow-lg transition-shadow`}>
                            <Mail size={40} className={`${accent} mx-auto mb-3`} />
                            <p className="font-semibold mb-2">Email</p>
                            <p className={`${textSecondary} text-sm`}>{t.contact.info.email}</p>
                        </a>
                        <a href={`tel:${t.contact.info.phone.replace(/\s/g, '')}`} className={`${bgPrimary} p-6 rounded-xl hover:shadow-lg transition-shadow`}>
                            <Phone size={40} className={`${accent} mx-auto mb-3`} />
                            <p className="font-semibold mb-2">Phone</p>
                            <p className={`${textSecondary} text-sm`}>{t.contact.info.phone}</p>
                        </a>
                        <div className={`${bgPrimary} p-6 rounded-xl`}>
                            <MapPin size={40} className={`${accent} mx-auto mb-3`} />
                            <p className="font-semibold mb-2">Location</p>
                            <p className={`${textSecondary} text-sm`}>{t.contact.info.location}</p>
                        </div>
                    </div>

                    <div className={`${bgPrimary} p-6 rounded-xl mb-8`}>
                        <Shield className={`${accent} mx-auto mb-3`} size={32} />
                        <p className={`${textSecondary} italic`}>{t.contact.cta}</p>
                    </div>

                    <div className="flex justify-center gap-6">
                        <a href="mailto:haiphamjavadev@gmail.com" className={`${accentBg} text-white p-3 rounded-full hover:bg-emerald-600 transition-colors`}>
                            <Mail size={24} />
                        </a>
                        <a href="https://github.com/haipham" target="_blank" rel="noopener noreferrer" className={`${accentBg} text-white p-3 rounded-full hover:bg-emerald-600 transition-colors`}>
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com/in/haipham" target="_blank" rel="noopener noreferrer" className={`${accentBg} text-white p-3 rounded-full hover:bg-emerald-600 transition-colors`}>
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={`${bgPrimary} py-8 px-4 border-t ${border}`}>
                <div className="max-w-7xl mx-auto text-center">
                    <p className={`${textSecondary} mb-2`}>
                        © 2025 Pham Quang Hai. {t.footer.rights}
                    </p>
                    <p className={`${textSecondary} text-sm flex items-center justify-center gap-2`}>
                        {t.footer.note} <span className="text-red-500">♥</span>
                    </p>
                </div>
            </footer>
        </div>
    );
}