import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { FaLaptop, FaRobot, FaServer } from "react-icons/fa"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const DATA = {
  // Social Media
  social_media: [
    {
      icon: FaLinkedinIn,
      link: "#",
    },
    {
      icon: FaGithub,
      link: "#",
    },
    {
      icon: FaInstagram,
      link: "#",
    },
  ],

  // Projects
  projects: [
    {
      title: "Website Balai Pelatihan Vokasi dan Produktivitas Bantaeng",
      description:
        "BPVP Bantaeng Website is a web-based platform that provides training information, registration services, news, schedules, and institutional profiles, developed using PHP, CodeIgniter 3, Bootstrap, and jQuery.",
      img: "https://siwtkmwmylvjamusqkdi.supabase.co/storage/v1/object/public/Portofolio-Pictures/web-bpvp-bantaeng.webp",
      links: {
        repositories: null,
        demo: "https://bpvpbantaeng.kemnaker.go.id/",
      },
    },
    {
      title: "Sipantau BPVP Bantaeng",
      description:
        "SIPANTAU BPVP Bantaeng is an administrative document tracking system built with Next.js and Supabase. It allows administrators to update the status and location of employee submissions, providing transparent and efficient monitoring of administrative processes.",
      img: "https://siwtkmwmylvjamusqkdi.supabase.co/storage/v1/object/public/Portofolio-Pictures/sipantau-bpvp-bantaeng.webp",
      links: {
        repositories: null,
        demo: "https://sipantau-bpvp-bantaeng.vercel.app/",
      },
    },
    {
      title: "Alif Islamic Art",
      description:
        "Alif Islamic Art Landing Page is a modern and responsive landing page developed with Next.js and Bootstrap, designed to showcase Islamic art products, improve brand visibility, and provide visitors with an engaging browsing experience.",
      img: "https://siwtkmwmylvjamusqkdi.supabase.co/storage/v1/object/public/Portofolio-Pictures/alif-islamic-art.webp",
      links: {
        repositories: null,
        demo: "https://alif-islamic-mmsgjv2ik-akhmad-ardi.vercel.app/",
      },
    },
    {
      title: "Evowish",
      description:
        "EvoWish is a web-based digital invitation platform built with Next.js, Shadcn/UI, Tailwind CSS, Go, and Fiber. It enables users to create, customize, and share digital invitations through a modern and responsive user experience.",
      img: null,
      links: {
        repositories: [
          "https://github.com/akhmad-ardi/fe-undangan-digital",
          "https://github.com/akhmad-ardi/be-undangan-digital",
        ],
        demo: null,
      },
    },
    {
      title: "Forum API",
      description: `Forum API is a backend forum application developed as the final submission for Dicoding's "Menjadi Back-End Developer Expert dengan JavaScript" course. The project applies Clean Architecture principles, CI/CD automation with GitHub Actions, and Nginx for deployment and request handling.`,
      img: null,
      links: {
        repositories: ["https://github.com/akhmad-ardi/forum-api"],
        demo: null,
      },
    },
    {
      title: "Notes App 1",
      description: `Notes App is a React-based note-taking application developed as the final submission for Dicoding's "Belajar Membuat Aplikasi Web dengan React" course. The application was built using React Class Components and includes features for creating, searching, archiving, and deleting notes.`,
      img: null,
      links: {
        repositories: [
          "https://github.com/akhmad-ardi/react-aplikasi-web-notes-app/",
        ],
        demo: null,
      },
    },
    {
      title: "Notes App 2",
      description: `Notes App is a React-based note management application developed for Dicoding's "Belajar Fundamental Aplikasi Web dengan React" course, utilizing Class Components, Functional Components, APIs, Context, and Hooks.`,
      img: null,
      links: {
        repositories: [
          "https://github.com/akhmad-ardi/react-fundamental-notes-app/",
        ],
        demo: null,
      },
    },
    {
      title: "Open Music API",
      description: `Open Music API is a RESTful backend application developed for Dicoding's "Belajar Fundamental Back-End dengan JavaScript" course, featuring JWT authentication, playlist management, collaboration, Redis caching, RabbitMQ integration, and PostgreSQL.`,
      img: null,
      links: {
        repositories: ["https://github.com/akhmad-ardi/open-music-api/"],
        demo: null,
      },
    },
    {
      title: "Predict Student Performance",
      description: `Predict Student Performance is an MLOps project developed for Dicoding's "Machine Learning Operations (MLOps)" course, utilizing TFX, TensorFlow Serving, hyperparameter tuning, and Docker to build and deploy a student performance prediction model.`,
      img: null,
      links: {
        repositories: [
          "https://github.com/akhmad-ardi/ML_Predict_Student_Performance",
        ],
        demo: null,
      },
    },
    {
      title: "Subject Recommendation System",
      description: `Subject Recommendation System is a recommendation system developed as the final project submission for Dicoding's Machine Learning Terapan course. It leverages machine learning techniques to provide personalized subject recommendations based on user preferences and data patterns.`,
      img: null,
      links: {
        repositories: [
          "https://github.com/akhmad-ardi/Subject_Recommendation_System",
        ],
        demo: null,
      },
    },
    {
      title: "PeduliPasal",
      description: `PeduliPasal is an AI-powered legal information platform developed as a Bangkit Academy Capstone Project. It utilizes machine learning and NLP technologies to help users access and understand legal information more easily through an interactive and accessible system.`,
      img: null,
      links: {
        repositories: [
          "https://github.com/aliefauzan/Bangkit-Project-PeduliPasal",
        ],
        demo: null,
      },
    },
  ],

  // Skills
  skills: [
    {
      icon: FaLaptop,
      title: "Fullstack Development",
      description:
        "Experienced using NextJS, ExpressJS, and NodeJS to build responsive and efficient web applications. And also I am experienced using PHP with Laravel and CodeIgniter framework",
    },
    {
      icon: FaRobot,
      title: "Machine Learning",
      description:
        "Experienced using TensorFlow and Scikit-learn and apply AI models fot data analysis and automation.",
    },
    {
      icon: FaServer,
      title: "Backend & Database",
      description:
        "Proficient in Go, Supabase, PostgreSQL, MySQL, Firebase, as well as managing APIs with ExpressJS and PrismaORM.",
    },
  ],
}
