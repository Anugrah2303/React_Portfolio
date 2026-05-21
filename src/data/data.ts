import { FaGithub, FaLinkedin, FaWhatsapp, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaPaintBrush, FaServer, FaMobileAlt, FaCode, FaDatabase, FaLocationArrow, FaCalendarAlt } from "react-icons/fa"
import type { LinkType, navLinksData, previewDataInterface, ProjectCardProps, verticalTimelineProps, whatAmIDoingProps, AllSkillData } from "../types/type"
import { IoMdMail } from "react-icons/io"
import { SiTailwindcss, SiJavascript, SiTypescript, SiGsap, SiMongodb, SiC, SiCplusplus, SiExpress, SiGit, SiGithub, SiNpm, SiVite, SiEslint, SiTwilio, SiPostman, SiNodemon, SiCloudinary, SiZod, SiAxios, SiReactquery, SiJsonwebtokens, SiReactrouter, SiRedux, SiAuth0, SiVercel, SiNetlify, SiGooglechrome, SiNextdotjs, SiReact, SiDotenv, SiRender, SiGreensock, SiScrollreveal } from "react-icons/si"
import cartSutraImg from "../assets/images/cartSutra-thumbnail.png"
import { HiAcademicCap } from "react-icons/hi"
import { PiCertificateFill } from "react-icons/pi"
import { MdEmail } from "react-icons/md"
import { VscVscode } from "react-icons/vsc"
import { TbApi, TbCookie, TbLoader, TbWorld } from "react-icons/tb"
import { FiUploadCloud } from "react-icons/fi"
import { LuContactRound } from "react-icons/lu"

export const previewData: previewDataInterface[] = [
    {
        Icon: IoMdMail,
        title: "Email",
        data: "23bmiit081@gmail.com",
    },
    {
        Icon: LuContactRound,
        title: "Mobile",
        data: "+91 90238 35422",
    },
    {
        Icon: FaCalendarAlt,
        title: "Data-Of-Birth",
        data: "March 23, 2006",
    },
    {
        Icon: FaLocationArrow,
        title: "Location",
        data: "Surat, Gujarat",
    },
];

export const navLinks: navLinksData[] = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About me",
        path: "/about"
    },
    {
        title: "Skills",
        path: "/skills"
    },
    {
        title: "Projects",
        path: "/projects"
    },
    {
        title: "Contact me",
        path: "/contact"
    },
]

export const links: LinkType[] = [{
    icon: FaGithub,
    link: "https://github.com/Anugrah2303"
}, {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/rakholiya-anugrah/"
}, {
    icon: IoMdMail,
    link: "mailto:23bmmit081@gmail.com"
}, {
    icon: FaWhatsapp,
    link: "https://wa.me/9023835422"
}];

export const whatAmIDoing: whatAmIDoingProps[] = [
    {
        title: "Web Interface Design",
        Icon: FaPaintBrush,
        description: "Creating modern responsive web interfaces with clean design and smooth interactions."

    },
    {
        title: "Frontend Development",
        Icon: FaReact,
        description: "Building responsive web apps using React, TypeScript, and Tailwind CSS."
    },
    {
        title: "Backend Development",
        Icon: FaServer,
        description: "Developing secure APIs and scalable server-side applications efficiently."
    },
    {
        title: "Full Stack Projects",
        Icon: FaCode,
        description: "Building complete web applications with frontend and backend technologies."
    },
    {
        title: "Mobile-Friendly Design",
        Icon: FaMobileAlt,
        description: "Designing responsive layouts optimized for all devices and screens."
    },
    {
        title: "Database Management",
        Icon: FaDatabase,
        description: "Managing databases with optimized structures, queries, and secure data handling."
    }
]

export const AboutMeDescription: string = "Passionate Full Stack Developer crafting modern web experiences using MERN stack with TypeScript, clean design, and performance-first approach.";


export const allSkills: AllSkillData[] = [
    {
        title: "Skills",
        data: [
            {
                title: "HTML",
                Icon: FaHtml5,
                options: {
                    color: "#E34F26",
                    size: 35
                }
            },
            {
                title: "CSS",
                Icon: FaCss3Alt,
                options: {
                    color: "#1572B6",
                    size: 35
                }
            },
            {
                title: "JavaScript",
                Icon: SiJavascript,
                options: {
                    color: "#F7DF1E",
                    size: 35
                }
            },
            {
                title: "TypeScript",
                Icon: SiTypescript,
                options: {
                    color: "#3178C6",
                    size: 35
                }
            },
            {
                title: "React.js",
                Icon: FaReact,
                options: {
                    color: "#61DAFB",
                    size: 35
                }
            },
            {
                title: "Next.js",
                Icon: SiNextdotjs,
                options: {
                    color: "#000000",
                    size: 35
                }
            },
            {
                title: "React Router",
                Icon: SiReactrouter,
                options: {
                    color: "#CA4245",
                    size: 35
                }
            },
            {
                title: "Redux",
                Icon: SiRedux,
                options: {
                    color: "#764ABC",
                    size: 35
                }
            },
            {
                title: "TanStack Query",
                Icon: SiReactquery,
                options: {
                    color: "#FF4154",
                    size: 35
                }
            },
            {
                title: "Tailwind CSS",
                Icon: SiTailwindcss,
                options: {
                    color: "#06B6D4",
                    size: 35
                }
            },
            {
                title: "Bootstrap",
                Icon: FaBootstrap,
                options: {
                    color: "#7952B3",
                    size: 35
                }
            },
            {
                title: "GSAP",
                Icon: SiGsap,
                options: {
                    color: "#88CE02",
                    size: 35
                }
            },
            {
                title: "ScrollTrigger",
                Icon: SiGreensock,
                options: {
                    color: "#000000",
                    size: 35
                }
            },
            {
                title: "Lenis",
                Icon: SiScrollreveal,
                options: {
                    color: "#000000",
                    size: 35
                }
            },
            {
                title: "React Loading Skeleton",
                Icon: TbLoader,
                options: {
                    color: "#9CA3AF",
                    size: 35
                }
            },
            {
                title: "Node.js",
                Icon: FaNodeJs,
                options: {
                    color: "#339933",
                    size: 35
                }
            },
            {
                title: "Express.js",
                Icon: SiExpress,
                options: {
                    color: "#000000",
                    size: 35
                }
            },
            {
                title: "MongoDB",
                Icon: SiMongodb,
                options: {
                    color: "#47A248",
                    size: 35
                }
            },
            {
                title: "REST API",
                Icon: TbApi,
                options: {
                    color: "#8B5CF6",
                    size: 35
                }
            },
            {
                title: "JWT Auth",
                Icon: SiJsonwebtokens,
                options: {
                    color: "#000000",
                    size: 35
                }
            },
            {
                title: "bcrypt",
                Icon: SiAuth0,
                options: {
                    color: "#EB5424",
                    size: 35
                }
            },

            {
                title: "C",
                Icon: SiC,
                options: {
                    color: "#A8B9CC",
                    size: 35
                }
            },
            {
                title: "C++",
                Icon: SiCplusplus,
                options: {
                    color: "#00599C",
                    size: 35
                }
            }
        ]
    },

    {
        title: "Technology",
        data: [
            {
                title: "Axios",
                Icon: SiAxios,
                options: {
                    color: "#5A29E4",
                    size: 35
                }
            },
            {
                title: "Zod",
                Icon: SiZod,
                options: {
                    color: "#3E67B1",
                    size: 35
                }
            },
            {
                title: "Cloudinary",
                Icon: SiCloudinary,
                options: {
                    color: "#3448C5",
                    size: 35
                }
            },
            {
                title: "Multer",
                Icon: FiUploadCloud,
                options: {
                    color: "#FF6B35",
                    size: 35
                }
            },
            {
                title: "dotenv",
                Icon: SiDotenv,
                options: {
                    color: "#ECD53F",
                    size: 35
                }
            },
            {
                title: "Cookie Parser",
                Icon: TbCookie,
                options: {
                    color: "#D97706",
                    size: 35
                }
            },
            {
                title: "CORS",
                Icon: TbWorld,
                options: {
                    color: "#3B82F6",
                    size: 35
                }
            },
            {
                title: "React Hot Toast",
                Icon: SiReact,
                options: {
                    color: "#61DAFB",
                    size: 35
                }
            },
            {
                title: "Nodemailer",
                Icon: MdEmail,
                options: {
                    color: "#30B980",
                    size: 35
                }
            },
            {
                title: "EmailJS",
                Icon: MdEmail,
                options: {
                    color: "#FF8434",
                    size: 35
                }
            },
            {
                title: "Twilio",
                Icon: SiTwilio,
                options: {
                    color: "#F22F46",
                    size: 35
                }
            }
        ]
    },

    {
        title: "Tools",
        data: [
            {
                title: "VS Code",
                Icon: VscVscode,
                options: {
                    color: "#007ACC",
                    size: 35
                }
            },
            {
                title: "Git",
                Icon: SiGit,
                options: {
                    color: "#F05032",
                    size: 35
                }
            },
            {
                title: "GitHub",
                Icon: SiGithub,
                options: {
                    color: "#000000",
                    size: 35
                }
            },
            {
                title: "Postman",
                Icon: SiPostman,
                options: {
                    color: "#FF6C37",
                    size: 35
                }
            },
            {
                title: "MongoDB Compass",
                Icon: SiMongodb,
                options: {
                    color: "#47A248",
                    size: 35
                }
            },
            {
                title: "NPM",
                Icon: SiNpm,
                options: {
                    color: "#CB3837",
                    size: 35
                }
            },
            {
                title: "Vite",
                Icon: SiVite,
                options: {
                    color: "#646CFF",
                    size: 35
                }
            },
            {
                title: "ESLint",
                Icon: SiEslint,
                options: {
                    color: "#4B32C3",
                    size: 35
                }
            },
            {
                title: "Nodemon",
                Icon: SiNodemon,
                options: {
                    color: "#76D04B",
                    size: 35
                }
            },
            {
                title: "Chrome DevTools",
                Icon: SiGooglechrome,
                options: {
                    color: "#4285F4",
                    size: 35
                }
            },
            {
                title: "Vercel",
                Icon: SiVercel,
                options: {
                    color: "#000000",
                    size: 35
                }
            },
            {
                title: "Netlify",
                Icon: SiNetlify,
                options: {
                    color: "#00C7B7",
                    size: 35
                }
            },
            {
                title: "Render",
                Icon: SiRender,
                options: {
                    color: "#000000",
                    size: 35
                }
            }
        ]
    }
];

export const projectsData: ProjectCardProps[] = [
    {
        title: "cartSutra",
        slug: "cart-sutra",
        // github: "akscnalsknlaksknc",
        // live: "ljacsnaksncjkldn l",
        description:
            "A modern full-stack MERN e-commerce platform built with scalable architecture, secure authentication, reusable UI components, React Query integration, and responsive design.",
        status: "Developing",
        image: cartSutraImg,

        techStack: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "React Query", "Axios"],

        productDetail: {
            description: [
                "cartSutra is a modern eco-friendly MERN e-commerce platform designed with scalability, performance, and clean UI architecture in mind.",
                "The project focuses on reusable component design, secure authentication, optimized API handling, and responsive layouts for real-world production-level applications.",
                "It includes role-based authentication, protected routes, reusable API abstraction, React Query integration, category management, and scalable frontend architecture.",
                "The application follows modern development practices using TypeScript, custom hooks, centralized API management, and modular folder structures.",
                "cartSutra aims to deliver a seamless shopping experience with clean animations, responsive product browsing, and reusable UI systems."
            ],

            techStack: [
                {
                    title: "frontend",
                    data: ["React.js", "TypeScript", "Tailwind CSS", "React Router DOM", "React Query", "Axios", "React Hot Toast"]
                },

                {
                    title: "backend",
                    data: ["Node.js", "Express.js", "JWT Authentication", "Bcrypt", "Cookie-based Authentication", "REST API", "multer",]
                },

                {
                    title: "database",
                    data: ["MongoDB", "Mongoose", "cloudinary"]
                },

                {
                    title: "tools",
                    data: ["Git", "GitHub", "Netlify", "Postman", "VS Code"]
                }
            ],

            detail: [
                {
                    title: "Key Future",
                    data: [
                        {
                            title: "Authentication & Authorization",
                            description:
                                "Implemented secure login and registration flow with protected routes and role-based access control for users and admins."
                        },

                        {
                            title: "Reusable API Architecture",
                            description:
                                "Built a centralized Axios API handling system with TypeScript generics, automatic error handling, and toast notifications."
                        },

                        {
                            title: "Reusable UI Component System",
                            description:
                                "Designed reusable buttons, inputs, headings, cards, and layouts to maintain scalability and consistent UI across the application."
                        },

                        {
                            title: "React Query Integration",
                            description:
                                "Integrated React Query for optimized server-state management, API caching, mutation handling, and improved performance."
                        },

                        {
                            title: "Responsive Modern UI",
                            description:
                                "Created a fully responsive eco-commerce design using Tailwind CSS, gradients, animations, and reusable styling variables."
                        },

                        {
                            title: "Scalable Folder Architecture",
                            description:
                                "Structured the project using modular architecture with separate folders for hooks, components, APIs, layouts, routes, and types."
                        },

                        {
                            title: "Admin Dashboard Architecture",
                            description:
                                "Prepared scalable admin routing and authorization architecture for future product, order, and user management systems."
                        }
                    ]
                },
                {
                    title: "Challenges",
                    data: [
                        {
                            title: "Protected Route Handling",
                            description:
                                "Managing authentication persistence and protected navigation using React Router and React Query required careful state synchronization."
                        },

                        {
                            title: "Reusable TypeScript API Layer",
                            description:
                                "Creating a fully reusable API abstraction with generic TypeScript support while handling multipart uploads and notifications was challenging."
                        },

                        {
                            title: "Scalable Component Design",
                            description:
                                "Building reusable UI components that remain flexible, responsive, and maintainable across different pages required structured planning."
                        },

                        {
                            title: "State & Server Management",
                            description:
                                "Optimizing API requests, caching, invalidation, and loading states using React Query improved performance but required proper architecture."
                        },

                        {
                            title: "Responsive E-Commerce Layout",
                            description:
                                "Designing modern responsive layouts for categories, products, hero banners, and future dashboards while maintaining consistency was complex."
                        }
                    ]
                }
            ]
        }
    }
]

export const verticalTimelineData: verticalTimelineProps[] = [
    {
        Icon: HiAcademicCap,
        title: "Education",
        card: [
            {
                cardTitle: "Graduation",
                cardSubTitle: "2023 - 2024",
                cardDescription: "I completed one year of B.Sc IT at Uka Tarsadia University and then focused on practical development and portfolio building."
            }
        ]
    },
    {
        Icon: PiCertificateFill,
        title: "Certificate",
        card: [
            {
                cardTitle: "NSS",
                cardSubTitle: "2023 - 2024",
                cardDescription: "Tree Plantation Drive (NSS, Uka Tarsadia University) – Actively participated in environmental sustainability initiative through organized plantation activity."
            },
            {
                cardTitle: "C-tsunami",
                cardSubTitle: "2026",
                cardDescription: "C Tsunami (C Language Competition) – Participated, showcasing programming and problem-solving skills."
            }
        ]
    }
]

export const skillsNavBtn: {title: string}[] = [
    {
        title: "All"
    },
    {
        title: "Skills"
    },
    {
        title: "Technology"
    },
    {
        title: "Tools"
    }
]