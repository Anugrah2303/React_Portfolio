import { FaGithub, FaLinkedin, FaWhatsapp, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaPaintBrush, FaServer, FaMobileAlt, FaCode, FaDatabase, FaLocationArrow, FaCalendarAlt } from "react-icons/fa"
import type { LinkType, navLinksData, previewDataInterface, ProjectCardProps, verticalTimelineProps, whatAmIDoingProps, AllSkillData } from "../types/type"
import { IoMdMail } from "react-icons/io"
import { SiTailwindcss, SiJavascript, SiTypescript, SiGsap, SiMongodb, SiC, SiCplusplus, SiExpress, SiGit, SiGithub, SiNpm, SiVite, SiEslint, SiTwilio, SiPostman, SiNodemon, SiCloudinary, SiZod, SiAxios, SiReactquery, SiJsonwebtokens, SiReactrouter, SiRedux, SiAuth0, SiVercel, SiNetlify, SiGooglechrome, SiNextdotjs, SiReact, SiDotenv, SiRender, SiGreensock, SiScrollreveal } from "react-icons/si"
import cartSutraBackend from "../assets/images/cartSutra backend.png"
import cartSutraAdmin from "../assets/images/cartSutra - admin.jpg"
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
        data: "anugrahrakholiya3@gmail.com",
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
    title: "cartSutra — Backend API",
    slug: "cartsutra-backend",
    description:
      "A production-grade multi-vendor e-commerce REST API built with Node.js, Express 5, TypeScript, and MongoDB — covering catalog, cart/checkout, payments, vendor payouts, returns/refunds, shipping, reviews, CMS, and analytics.",
    status: "LIVE",
    image: cartSutraBackend,
    github: "https://github.com/Anugrah2303/cartSutra-backend",
    live: "https://cartsutra-backend.onrender.com/v3/api",
    techStack: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Zod",
      "JWT",
      "Bcrypt",
      "Multer",
      "Cloudinary",
      "Razorpay",
      "Nodemailer",
    ],
    productDetail: {
      description: [
        "cartSutra's backend is a modular multi-vendor marketplace API supporting three roles — customer, vendor, and admin — with role-based route protection at every layer.",
        "It models the full commerce lifecycle: product approval workflows, cart and checkout with coupon/gift-card stacking, Razorpay payments with webhook verification, order status flows, vendor-owned shipments, returns, and a refund service that handles both gateway and wallet refunds.",
        "Vendor operations are fully self-serve — vendors manage their own products, variants, warehouses, inventory logs, KYC documents, and payout requests — while a single admin surface can act on any vendor's data via shared, ownership-aware controllers.",
        "A generic queryFeatures helper standardizes pagination, sorting, and aggregation pipelines across ~30 resources, and a centralized ApiError/asyncHandler pattern keeps error handling and response shape consistent throughout.",
        "The API also includes a lightweight CMS (banners, pages, blogs), a notification system with audience targeting, and analytics endpoints for sales, top products/vendors, category performance, and customer growth."
      ],
      techStack: [
        {
          title: "core",
          data: ["Node.js", "Express.js 5", "TypeScript", "ESM modules"],
        },
        {
          title: "data & validation",
          data: ["MongoDB", "Mongoose", "Zod schema validation", "Aggregation pipelines"],
        },
        {
          title: "auth & security",
          data: [
            "JWT (cookie-based)",
            "Bcrypt password hashing",
            "OTP-based email verification",
            "Role-based authorization",
            "CSRF double-submit protection",
            "Helmet",
            "express-rate-limit",
          ],
        },
        {
          title: "integrations",
          data: ["Razorpay (orders, refunds, webhooks)", "Cloudinary (media uploads)", "Nodemailer (transactional email)", "Multer (multipart uploads)"],
        },
        {
          title: "tooling",
          data: ["tsx", "Git", "GitHub", "Postman", "Render (deployment)"],
        },
      ],
      detail: [
        {
          title: "Key Features",
          data: [
            {
              title: "Multi-vendor product lifecycle",
              description:
                "Vendors submit products for review; admins approve/reject with reason tracking and a full approval-history audit trail before a product becomes purchasable.",
            },
            {
              title: "Cart, coupons & gift cards",
              description:
                "Cart supports variant-aware items, coupon discounts (percentage/flat with caps), and gift-card redemption, all reconciled at checkout into a locked order snapshot.",
            },
            {
              title: "Payments & refunds",
              description:
                "Razorpay order creation, signature-verified payment confirmation, raw-body webhook handling, and a dedicated refund service supporting original-payment, wallet, and UPI refund methods.",
            },
            {
              title: "Order → shipment → return pipeline",
              description:
                "Orders drive per-vendor shipments with a tracked status flow; delivered orders can be returned within a configurable window, triggering pickup scheduling and automatic refund + inventory restock.",
            },
            {
              title: "Vendor payouts & wallet",
              description:
                "Vendor revenue accrues to a wallet on delivery (net of commission); vendors request payouts against a minimum threshold, with admin approve/reject and automatic wallet reversal on rejection.",
            },
            {
              title: "Inventory & warehouse management",
              description:
                "Every stock change (restock, damage, adjustment, order, return) is logged with before/after quantities; vendors can operate multiple warehouses and assign products to them.",
            },
            {
              title: "Reviews, ratings & moderation",
              description:
                "Verified-purchase reviews with vendor replies, helpful/not-helpful voting, user reporting, and admin moderation that recalculates product and vendor rating aggregates.",
            },
            {
              title: "CMS, notifications & analytics",
              description:
                "Admin-managed banners/pages/blogs, audience-targeted notifications (user/role/broadcast), and analytics endpoints for revenue trends, top sellers, and low-stock alerts.",
            },
          ],
        },
        {
          title: "Engineering Challenges",
          data: [
            {
              title: "Consistent ownership scoping",
              description:
                "Nearly every vendor-facing route also had to work for admins acting on a vendor's behalf, requiring a repeatable pattern for conditionally scoping Mongo filters by role rather than duplicating controllers.",
            },
            {
              title: "Idempotent payment & refund flows",
              description:
                "Reconciling Razorpay webhooks with direct client-confirmed payments (which can race each other) while keeping order payment status and refund ledgers accurate required careful status-guarded writes.",
            },
            {
              title: "Cross-resource financial consistency",
              description:
                "Vendor revenue, wallet balance, and platform-side refunds all had to stay in sync across order delivery, cancellation, and return-refund paths without double-crediting or under-reversing commission.",
            },
            {
              title: "Generic, reusable querying",
              description:
                "Building a single queryFeatures utility that transparently supports both plain Mongoose queries and complex aggregation pipelines (with pagination baked in) across dozens of differently-shaped resources.",
            },
            {
              title: "Security hardening on a cross-origin admin app",
              description:
                "Supporting `sameSite: none` cookies across separate admin/vendor/client origins safely required layering in CSRF double-submit tokens, strict CORS allowlists, and per-route rate limiting.",
            },
          ],
        },
      ],
    },
  },
  {
    title: "cartSutra — Admin Panel",
    slug: "cartsutra-admin",
    description:
      "A full-featured React + TypeScript admin dashboard for operating the cartSutra marketplace — products, orders, vendors, payments, shipping, returns, CMS, analytics, and more, all backed by React Query and a themeable design system.",
    status: "LIVE",
    image: cartSutraAdmin,
    github: "https://github.com/Anugrah2303/cartSutra-admin",
    live: "https://cart-sutra-admin-delta.vercel.app/admin",
    techStack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Query",
      "React Router",
      "React Hook Form",
      "Zod",
      "Recharts",
      "Axios",
    ],
    productDetail: {
      description: [
        "The cartSutra Admin Panel is a single-page dashboard giving marketplace operators full control over catalog, commerce, vendor, and content operations — 20+ management modules behind one consistent UI shell.",
        "Every list view follows the same pattern: server-driven filters/pagination via React Query, optimistic-feeling mutations with toast feedback, and consistent skeleton loading states so the UI never feels empty or janky.",
        "The app implements soft-delete/trash-and-restore flows for core entities (products, categories, brands, coupons, gift cards), approval workflows for vendors and products, and detail pages with inline editing for complex records like orders, vendors, and shipments.",
        "A global cross-entity search, a live notification bell, and role-aware navigation badges (pending vendors, failed shipments, unread alerts) keep operators oriented without needing to visit every page.",
        "Theming is CSS-variable driven with light/dark support, and the component layer (buttons, modals, tables, forms) is fully reusable across all 20+ feature areas rather than duplicated per page."
      ],
      techStack: [
        {
          title: "core",
          data: ["React 19", "TypeScript", "Vite", "React Router v7"],
        },
        {
          title: "state & data",
          data: ["TanStack React Query", "Axios", "Custom useApiQuery/useApiMutation hooks", "Optimistic invalidation patterns"],
        },
        {
          title: "forms & validation",
          data: ["React Hook Form", "Zod", "@hookform/resolvers"],
        },
        {
          title: "ui & styling",
          data: ["Tailwind CSS v4", "CSS custom properties theming (light/dark)", "Lucide icons", "Recharts (analytics charts)", "Sonner (toasts)"],
        },
        {
          title: "tooling",
          data: ["ESLint", "Git", "GitHub", "Vercel (deployment)"],
        },
      ],
      detail: [
        {
          title: "Key Features",
          data: [
            {
              title: "20+ management modules",
              description:
                "Products, categories, brands, orders, shipping, returns, refunds, vendors, vendor payouts, customers, reviews, coupons, gift cards, warehouses, tickets, notifications, CMS, admins, settings, and analytics — each with dedicated filters, tables, and detail views.",
            },
            {
              title: "Reusable data-table & form system",
              description:
                "A shared set of components (Card, Modal, Pagination, ConfirmDialog, ReasonModal, StatusToggle, skeletons) drives every module, so new features compose from existing primitives instead of custom-building UI.",
            },
            {
              title: "Approval & moderation workflows",
              description:
                "Vendor onboarding and product listings go through approve/reject flows with required rejection reasons; reviews support report resolution and visibility toggling.",
            },
            {
              title: "Order, shipment & return operations",
              description:
                "Detail modals let admins advance order/shipment statuses along a validated flow, assign couriers, process refunds, and walk returns through approve → pickup → receive → refund.",
            },
            {
              title: "Trash & restore across core entities",
              description:
                "Products, categories, brands, coupons, and gift cards support soft-delete with a dedicated trash view, restore, and permanent-delete actions to prevent accidental data loss.",
            },
            {
              title: "Global search & live notifications",
              description:
                "A debounced cross-entity search queries 18+ resource types in parallel, and a notification bell with unread counts and mark-as-read keeps admins aware of platform activity in real time.",
            },
            {
              title: "Analytics & reporting dashboard",
              description:
                "Dashboard and Reports pages visualize revenue trends, top products/vendors, category sales, customer growth, and order-status distribution using Recharts, with date-range filtering throughout.",
            },
            {
              title: "Theming & responsive design",
              description:
                "A CSS-variable-based theme system supports light/dark mode across the entire app, with fully responsive table→card layouts for mobile and tablet breakpoints.",
            },
          ],
        },
        {
          title: "Engineering Challenges",
          data: [
            {
              title: "Consistent async UX at scale",
              description:
                "Standardizing loading (skeletons), empty, and error states across 20+ independently-built modules required a shared skeleton component library rather than ad hoc spinners per page.",
            },
            {
              title: "Complex multi-step detail workflows",
              description:
                "Screens like order/shipment/return detail modals needed to reset local form state cleanly when switching records without stale state leaking between selections — solved with derived-state patterns instead of effects.",
            },
            {
              title: "Type-safe forms over a large, evolving API surface",
              description:
                "Keeping React Hook Form + Zod schemas in sync with backend validators across dozens of multipart and JSON endpoints, including FormData construction for image uploads mixed with structured fields.",
            },
            {
              title: "Cross-cutting global search",
              description:
                "Building a single search experience that fans out to 18+ differently-shaped list endpoints (some paginated as `data`, others as named keys like `coupons`) required a normalized extraction layer per category.",
            },
            {
              title: "Cache coherency across related resources",
              description:
                "Actions in one module (e.g. processing a refund) needed to correctly invalidate related React Query caches (orders, refunds, payouts) to keep numbers consistent across the dashboard without manual refreshes.",
            },
          ],
        },
      ],
    },
  },
];

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
                cardTitle: "Full Stack Development",
                cardSubTitle: "2025 - 2026",
                cardDescription: "Full Stack Development training at Red & White Multimedia Education, focused on modern web technologies and real-world projects."
            },
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

export const skillsNavBtn: { title: string }[] = [
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