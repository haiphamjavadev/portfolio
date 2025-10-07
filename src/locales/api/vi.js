import {asset} from "../../utils/Assets.jsx";
import {getDuration} from "../../utils/DateUtils.jsx";

export const careerGoals = [
    {
        type: "short-term",
        title: "Mục tiêu ngắn hạn",
        subtitle: "Trong 1 - 3 năm tới",
        progressLabel: "TIẾN ĐỘ",
        progressValue: "65%",
        progressPercent: 65,
        goals: [
            {icon: "Code", text: "Thành thạo thiết kế hệ thống nâng cao & các mẫu kiến trúc"},
            {icon: "TrendingUp", text: "Triển khai dự án thực tế có hơn 100.000 người dùng"},
            {icon: "Server", text: "Đào sâu kiến thức về Cloud, DevOps, CI/CD, Kubernetes"},
            {icon: "Users", text: "Nâng cao kỹ năng mềm: lãnh đạo & giao tiếp"},
            {icon: "Award", text: "Đạt chứng chỉ chuyên nghiệp (AWS, GCP)"},
            {icon: "Briefcase", text: "Dẫn dắt nhóm 3–5 kỹ sư phần mềm"}
        ]
    },
    {
        type: "long-term",
        title: "Mục tiêu dài hạn",
        subtitle: "Trong 4 - 10 năm tới",
        progressLabel: "TẦM NHÌN",
        progressValue: "∞",
        goals: [
            {icon: "Award", text: "Trở thành Senior Software Engineer / Architect"},
            {icon: "Briefcase", text: "Giữ vị trí Tech Lead / Solution Architect"},
            {icon: "Users", text: "Chuyển hướng sang quản lý kỹ thuật (PM/EM)"},
            {icon: "Zap", text: "Khởi nghiệp công nghệ sáng tạo"},
            {icon: "Globe", text: "Đóng góp cho cộng đồng mã nguồn mở & kỹ thuật"},
            {icon: "TrendingUp", text: "Hướng dẫn và đào tạo thế hệ lập trình viên tiếp theo"}
        ]
    }
];

export const educations = [
    {
        school: "Đại học Kinh doanh và Công nghệ Hà Nội",
        degree: "Kỹ sư Công nghệ Thông tin",
        gpa: "3.33/4.0",
        gpaLabel: "Điểm trung bình",
        duration: "2019 - 2023",
        durationLabel: "Thời gian học",
        courses: [
            "Kiến thức cơ sở CNTT", "Lập trình & Ngôn ngữ",
            "Kiến trúc & Thiết kế phần mềm", "Công nghệ & Công cụ",
            "Các môn nâng cao", "Kỹ năng mềm"
        ]
    }
];

export const skills = {
    skills: [
        {
            title: "Phát triển Backend",
            icon: "Terminal",
            color: "blue",
            gradient: "from-blue-500 to-cyan-500",
            skills: [
                {name: "Java Core", level: 95, icon: asset("/imgs/skills/backend/java-background.png")},
                {name: "Spring Framework", level: 90, icon: asset("/imgs/skills/backend/spring-icon.svg")},
                {name: "Monolith & Microservices", level: 88, icon: asset("/imgs/skills/backend/microservice.png")},
                {name: "REST API", level: 92, icon: asset("/imgs/skills/backend/restApi.jpeg")},
                {name: "Hibernate/JPA", level: 87, icon: asset("/imgs/skills/backend/hibernate&jpa.png")},
                {name: "Maven/Gradle", level: 95, icon: asset("/imgs/skills/backend/maven&gradle.jpeg")},
                {name: "Kafka", level: 90, icon: asset("/imgs/skills/backend/kafka.png")},
                {name: "IAM (Keycloak)", level: 80, icon: asset("/imgs/skills/backend/keycloak.jpeg")},
                {name: "Object Storage (Minio)", level: 80, icon: asset("/imgs/skills/backend/minio.png")},
                {name: "Tài liệu (Swagger)", level: 80, icon: asset("/imgs/skills/backend/swagger.png")}
            ]
        },
        {
            title: "Cơ sở dữ liệu & Cache",
            icon: "Database",
            color: "green",
            gradient: "from-green-500 to-emerald-500",
            skills: [
                {name: "Thiết kế cơ sở dữ liệu", level: 95, icon: asset("/imgs/skills/database/database_design.png")},
                {name: "Transaction & ACID", level: 90, icon: asset("/imgs/skills/database/sql_skill.png")},
                {name: "MariaDB/MySQL", level: 92, icon: asset("/imgs/skills/database/mariadb&mysql.png")},
                {name: "PostgreSQL", level: 88, icon: asset("/imgs/skills/database/postgres.jpeg")},
                {name: "Oracle", level: 85, icon: asset("/imgs/skills/database/oracle.png")},
                {name: "Redis", level: 87, icon: asset("/imgs/skills/database/redis.png")},
                {name: "Tối ưu truy vấn", level: 90, icon: asset("/imgs/skills/database/query_otimize.png")},
                {name: "Chiến lược Indexing", level: 88, icon: asset("/imgs/skills/database/index.png")},
                {name: "Migration", level: 90, icon: asset("/imgs/skills/database/liquibase.png")},
                {name: "Replication", level: 80, icon: asset("/imgs/skills/database/replication.png")}
            ]
        },
        {
            title: "DevOps & Cloud",
            icon: "Server",
            color: "purple",
            gradient: "from-purple-500 to-pink-500",
            skills: [
                {name: "Hệ điều hành (Windows & Linux)", level: 80, icon: asset("/imgs/skills/devOps/opera_system.jpeg")},
                {name: "Docker", level: 90, icon: asset("/imgs/skills/devOps/docker.jpeg")},
                {name: "Kubernetes", level: 75, icon: asset("/imgs/skills/devOps/k8s.jpeg")},
                {name: "Jenkins", level: 87, icon: asset("/imgs/skills/devOps/jenkins.jpeg")},
                {name: "GitLab CI/CD", level: 85, icon: asset("/imgs/skills/devOps/gitlabcicd.png")},
                {name: "ELK Stack", level: 80, icon: asset("/imgs/skills/devOps/elk.png")},
                {name: "Prometheus & Grafana", level: 80, icon: asset("/imgs/skills/devOps/prometheus&&grafana.png")}
            ]
        },
        {
            title: "Frontend & UI",
            icon: "Code",
            color: "orange",
            gradient: "from-orange-500 to-red-500",
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
        period: "05/2024 - Hiện tại",
        duration: getDuration("2024-05-01", new Date()),
        position: "Kỹ sư Phát triển Phần mềm",
        description: "Phó nhóm phát triển hệ thống quy mô doanh nghiệp cho Vietnam Airlines và VAS với nhiều dự án có tác động lớn",
        logo: asset("/imgs/company/viettelsoftware.png"),
        color: "green",
        current: true,
        projects: [
            {
                name: "VNA-MO",
                description: "Hệ thống tài liệu điện tử chuyến bay của Vietnam Airlines",
                period: "09/2024 - Hiện tại",
                customer: "Vietnam Airlines",
                teamSize: 60,
                role: "Kỹ sư Backend",
                fullDescription: "Hệ thống quản lý tài liệu điện tử quy mô doanh nghiệp phục vụ 70.000 người dùng gồm tiếp viên, phi công và nhân viên trung tâm điều hành chuyến bay, xử lý hơn 10.000 nghiệp vụ mỗi ngày với đồng bộ dữ liệu thời gian thực giữa nhiều nền tảng nhằm đảm bảo hoạt động chuyến bay và tuân thủ an toàn.",
                responsibilities: [
                    "Phân tích tài liệu SRS, làm việc với Business Analyst để làm rõ yêu cầu nghiệp vụ",
                    "Thiết kế và phát triển tính năng cho cả nền tảng web và mobile",
                    "Tham gia các cuộc họp Agile (daily stand-up, sprint planning, retrospective)",
                    "Thiết kế và triển khai hệ thống RESTful API cho Web và Mobile",
                    "Gỡ lỗi, xử lý sự cố và tối ưu hệ thống, đảm bảo vận hành ổn định",
                    "Tối ưu truy vấn SQL, cải thiện hiệu năng hệ thống, giảm thời gian phản hồi",
                    "Xây dựng hệ thống đồng bộ dữ liệu giữa các nền tảng, đảm bảo tính nhất quán"
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
                    "Thiết kế kiến trúc microservices cho đội ngũ 60 thành viên",
                    "Tối ưu hiệu năng hệ thống tăng 40%",
                    "Giảm thời gian phản hồi từ 3s xuống còn 1.2s",
                    "Triển khai pipeline CI/CD giúp giảm 60% thời gian deploy"
                ]
            },
            {
                name: "Mydio",
                description: "Ứng dụng/người dùng web nghe audio và podcast",
                period: "05/2024 - 09/2024",
                customer: "VAS - Trung tâm Kinh doanh Viettel",
                teamSize: 27,
                role: "Kỹ sư Backend",
                fullDescription: "Nền tảng nghe audio và podcast phục vụ hơn 100.000 người dùng với hệ thống gợi ý cá nhân hóa và quản lý sách chuyên sâu.",
                responsibilities: [
                    "Trao đổi, nhận yêu cầu, phân tích và xác nhận giải pháp API với khách hàng",
                    "Viết tài liệu mô tả giải pháp API",
                    "Thiết kế và triển khai hệ thống RESTful API cho Web và Mobile",
                    "Tham gia họp hằng ngày với nhóm dự án và khách hàng",
                    "Xây dựng hệ thống quản lý dữ liệu sách, ghi nhận lượt xem, yêu thích",
                    "Bảo trì và tối ưu hệ thống",
                    "Xây dựng CI/CD bằng Jenkins và triển khai ứng dụng lên môi trường DEV"
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
                    "Xây dựng kiến trúc microservices mở rộng",
                    "Tích hợp Elasticsearch cho tìm kiếm nâng cao",
                    "Triển khai hệ thống gợi ý cá nhân hóa",
                    "Xử lý hơn 100.000 người dùng đồng thời"
                ]
            }
        ]
    },
    {
        company: "AC",
        period: "07/2022 - 04/2024",
        duration: getDuration("2022-07-01", "2024-04-30"),
        position: "Kỹ sư Phát triển Phần mềm",
        description: "Phát triển full-stack và dẫn dắt nhóm cho nhiều dự án khách hàng trong lĩnh vực fintech và ô tô",
        logo: asset("/imgs/company/ac_company.png"),
        color: "blue",
        current: false,
        projects: [
            {
                name: "Cardoctor",
                description: "Nền tảng hỗ trợ lái xe An toàn - Tiện lợi - Tiết kiệm",
                period: "07/2022 - 10/2023",
                customer: "Cardoctor",
                teamSize: 20,
                role: "Kỹ sư Backend",
                fullDescription: "Nền tảng hỗ trợ lái xe toàn diện với tính năng theo dõi thời gian thực, cảnh báo bảo dưỡng, tối ưu chi phí và tích hợp dịch vụ bên thứ ba cho quản lý phương tiện.",
                responsibilities: [
                    "Trao đổi và nhận yêu cầu từ khách hàng",
                    "Tham gia các cuộc họp Agile (daily stand-up, sprint planning, retrospective)",
                    "Thiết kế và triển khai hệ thống RESTful API cho Web và Mobile",
                    "Gỡ lỗi, xử lý sự cố và tối ưu hệ thống, đảm bảo hoạt động ổn định",
                    "Tối ưu truy vấn SQL, cải thiện hiệu năng, giảm thời gian phản hồi",
                    "Hỗ trợ các thành viên khác về kỹ thuật"
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
                    "Xây dựng RESTful API cho nhóm 20 thành viên",
                    "Giảm 50% thời gian phản hồi truy vấn",
                    "Triển khai tính năng theo dõi xe thời gian thực",
                    "Tích hợp nhiều cổng thanh toán"
                ]
            },
            {
                name: "Hệ thống Loyalty",
                description: "Hệ thống tích điểm cho khách hàng thân thiết",
                period: "02/2023 - 10/2023",
                customer: "Cardoctor",
                teamSize: 7,
                role: "Trưởng nhóm & Kỹ sư Full-stack",
                fullDescription: "Hệ thống quản lý khách hàng thân thiết đa tenant, hỗ trợ nhiều khách hàng với thuật toán tính điểm phức tạp, quản lý phần thưởng và bảng điều khiển quản trị toàn diện.",
                responsibilities: [
                    "Tham gia họp Agile và báo cáo tiến độ",
                    "Thiết kế và triển khai hệ thống RESTful API cho Web và Mobile",
                    "Gỡ lỗi, xử lý sự cố và tối ưu hệ thống",
                    "Tối ưu truy vấn SQL, cải thiện hiệu năng",
                    "Phát triển và bảo trì giao diện người dùng (UI) cho web và mobile",
                    "Phân công nhiệm vụ, hướng dẫn và mentor các thành viên trong nhóm",
                    "Review code, quản lý tiến độ dự án và đảm bảo giao hàng đúng hạn",
                    "Hỗ trợ kỹ thuật cho các thành viên khác",
                    "Xây dựng CI/CD bằng GitLab CI và triển khai lên môi trường DEV"
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
                    "Dẫn dắt nhóm 7 kỹ sư thành công",
                    "Triển khai kiến trúc đa tenant",
                    "Xây dựng giải pháp full-stack (React + Java)",
                    "Hoàn thành dự án đúng hạn với chất lượng cao",
                    "Thiết lập quy trình review code"
                ]
            },
            {
                name: "Hệ thống Blacklist TPBank",
                description: "Dự án quản lý khách hàng nghi ngờ, danh sách đen",
                period: "10/2023 - 04/2024",
                customer: "TPBank (Onsite)",
                teamSize: 3,
                role: "Kỹ sư Backend (Onsite)",
                fullDescription: "Hạ tầng bảo mật ngân hàng quan trọng, quản lý khách hàng bị nghi ngờ và giao dịch đáng ngờ với xử lý sự kiện thời gian thực nhằm phát hiện gian lận.",
                responsibilities: [
                    "Tham gia các cuộc họp Agile (daily stand-up, sprint planning, retrospective)",
                    "Thiết kế và triển khai RESTful API cho Web, đảm bảo hiệu năng và bảo mật",
                    "Gỡ lỗi, xử lý sự cố và tối ưu hệ thống, đảm bảo vận hành ổn định",
                    "Tối ưu truy vấn SQL, cải thiện hiệu năng, giảm thời gian phản hồi",
                    "Phát triển và bảo trì giao diện người dùng (UI) cho ứng dụng web",
                    "Xây dựng và triển khai ứng dụng lên môi trường DEV, UAT bằng Weblogic"
                ],
                techStack: {
                    backend: ["Java", "Spring Framework", "Spring MVC"],
                    database: ["Oracle"],
                    messaging: ["Kafka"],
                    server: ["Weblogic"]
                },
                achievements: [
                    "Xây dựng hệ thống bảo mật ngân hàng trọng yếu",
                    "Triển khai phát hiện gian lận thời gian thực với Kafka",
                    "Tối ưu truy vấn Oracle cho hiệu năng cao",
                    "Làm việc onsite tại trụ sở TPBank",
                    "Bàn giao giải pháp an toàn và tuân thủ"
                ]
            }
        ]
    },
    {
        company: "Vissoft JSC",
        period: "01/2022 - 06/2022",
        duration: getDuration("2022-01-01", "2022-06-30"),
        position: "Kỹ sư Phát triển Phần mềm",
        description: "Phát triển hệ thống HRM nội bộ theo kiến trúc microservices để quản lý nhân viên",
        logo: asset("/imgs/company/vissoft.png"),
        color: "purple",
        current: false,
        projects: [
            {
                name: "Hệ thống HRM",
                description: "Hệ thống quản lý nhân sự",
                period: "01/2022 - 06/2022",
                customer: "Nội bộ công ty",
                teamSize: 15,
                role: "Kỹ sư Backend",
                fullDescription: "Hệ thống quản lý nhân sự nội bộ xử lý quản lý nhân viên, chấm công, bảng lương và đánh giá hiệu suất với mô hình API Gateway và service discovery.",
                responsibilities: [
                    "Trao đổi và nhận yêu cầu từ khách hàng nội bộ",
                    "Tham gia các cuộc họp Agile (daily stand-up, sprint planning, retrospective)",
                    "Thiết kế và triển khai RESTful API cho Web và Mobile",
                    "Gỡ lỗi, xử lý sự cố và tối ưu hệ thống, đảm bảo hoạt động ổn định",
                    "Tối ưu truy vấn SQL, cải thiện hiệu năng hệ thống",
                    "Xây dựng và triển khai ứng dụng lên môi trường DEV"
                ],
                techStack: {
                    backend: ["Java", "Spring Data JPA", "Spring Cloud", "OpenFeign", "Eureka"],
                    database: ["MariaDB"],
                    storage: ["MinIO"],
                    frontend: ["React.js", "Bootstrap"],
                    gateway: ["Spring Cloud Gateway"]
                },
                achievements: [
                    "Xây dựng API Gateway bằng Spring Cloud Gateway",
                    "Triển khai service discovery với Eureka",
                    "Phát triển module quản lý nhân viên",
                    "Tích hợp MinIO cho lưu trữ tài liệu",
                    "Triển khai thành công lên môi trường production"
                ]
            }
        ]
    }
];

export const hobbies = {
    hobbies: [
        {name: "Chơi game", icon: "🎮", color: "purple", desc: "Đam mê chiến thuật & RPG"},
        {name: "Bóng đá", icon: "⚽", color: "green", desc: "Chiến binh cuối tuần"},
        {name: "Cầu lông", icon: "🏸", color: "red", desc: "Vận động viên phong trào"},
        {name: "Du lịch", icon: "✈️", color: "blue", desc: "Khám phá văn hoá và vùng đất mới"}
    ],
    personals: [
        {icon: "CheckCircle", color: "blue-400", text: "Đam mê xây dựng mối quan hệ qua thể thao"},
        {icon: "CheckCircle", color: "green-400", text: "Luôn học hỏi và phát triển bản thân"},
        {icon: "CheckCircle", color: "purple-400", text: "Sẵn sàng đón nhận thử thách mới"}
    ],
    workStyles: [
        {icon: "CheckCircle", color: "yellow-400", text: "Sẵn sàng làm thêm giờ khi cần thiết"},
        {icon: "CheckCircle", color: "orange-400", text: "Linh hoạt với cơ hội công tác xa"},
        {icon: "CheckCircle", color: "red-400", text: "Tinh thần đồng đội và hợp tác cao"}
    ]
};

export const allProjects = experiences.flatMap(exp => exp.projects || []);

export const headers = {
    profile: {
        initials: "PH",
        name: "Phạm Quang Hải",
        avatar: asset("/imgs/avatar/avatar_me.jpeg"),
        title: "Kỹ sư phát triển phần mềm",
        bio: "Kỹ sư phần mềm với kinh nghiệm trong Spring Boot, Spring Security, Spring Cloud và kiến trúc microservices. Thành thạo trong thiết kế hệ thống backend có khả năng mở rộng, xây dựng REST API, và tích hợp với cơ sở dữ liệu SQL, Kafka, Docker, Kubernetes. Đam mê clean code, giải quyết vấn đề và phát triển các ứng dụng doanh nghiệp phục vụ hàng nghìn người dùng mỗi ngày.",
        status: {text: "Sẵn sàng làm việc", color: "green-500"},
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
        {value: 7, i18n: "projects"},
        {value: 60, i18n: "team_size"}
    ],
    contacts: [
        {type: "email", icon: "Mail", value: "haiphamjavadev@gmail.com", href: "mailto:haiphamjavadev@gmail.com"},
        {type: "phone", icon: "Phone", value: "0979 015 430", href: "tel:0979015430"},
        {type: "location", icon: "MapPin", value: "Hà Nội, Việt Nam"}
    ],
    socials: [
        {icon: "FiGithub", href: "https://github.com", bg: "from-gray-800 to-gray-900", hoverBg: "from-gray-700 to-gray-800"},
        {icon: "Linkedin", href: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile", bg: "from-blue-600 to-blue-700", hoverBg: "from-blue-500 to-blue-600"}
    ]
};
