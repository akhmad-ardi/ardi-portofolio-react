import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { DashboardIcon } from "@radix-ui/react-icons"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const DATA = {
  projects: [
    {
      title: "Project Title",
      description:
        "Brief description of the project goes here. Highlight the technologies used and the impact it had.",
      img: "/dummy-img.jpg",
      links: {
        repository: "",
        demo: "",
      },
    },
    {
      title: "Project Title",
      description:
        "Brief description of the project goes here. Highlight the technologies used and the impact it had.",
      img: "/dummy-img.jpg",
      links: {
        repository: "",
        demo: "",
      },
    },
    {
      title: "Project Title",
      description:
        "Brief description of the project goes here. Highlight the technologies used and the impact it had.",
      img: "/dummy-img.jpg",
      links: {
        repository: "",
        demo: "",
      },
    },
  ],
  skills: [
    {
      icon: DashboardIcon,
      title: "Fullstack Development",
      description:
        "Experienced using NextJS, ExpressJS, and NodeJS to build responsive and efficient web applications. And also I am experienced using PHP with Laravel and CodeIgniter framework",
    },
    {
      icon: DashboardIcon,
      title: "Machine Learning",
      description:
        "Experienced using TensorFlow and Scikit-learn and apply AI models fot data analysis and automation.",
    },
    {
      icon: DashboardIcon,
      title: "Backend & Database",
      description:
        "Proficient in Go, Supabase, PostgreSQL, MySQL, Firebase, as well as managing APIs with ExpressJS and PrismaORM.",
    },
  ],
}
