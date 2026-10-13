export const portfolioData = {
  personalInfo: {
    name: "Abhishek Mahara",
    role: "Frontend Developer",
    tagline: "FRONTEND WEB DEVELOPER",
    email: "asmahara265@gmail.com",
    phone: "+91 7428599697",
    location: "Gurugram, Haryana",
    linkedin: "https://www.linkedin.com/in/webdev-abhishek-mahara",
    github: "https://github.com/abhisheksinghmahara/abhisheksmahara.git",
    resumeLink: "https://drive.google.com/drive/folders/1M-mIoNThFtAAEJwEM36gs_OWM8pqluLr",
  },

  summary: {
    heroDescription:
      "With over 2 years of total experience, including building scalable SaaS platforms. Currently evolving into a <span class='text-blue-600 font-bold'>MERN stack</span> engineer and exploring <span class='text-blue-600 font-bold'>AI-driven</span> web technologies.",

    aboutText:
      "I hold a Bachelor of Technology degree and specialize in <strong>React.js, Next.js, and Tailwind CSS</strong>. Previously at <em>RenderEase</em>, I developed comprehensive admin dashboards and interactive 3D web applications from scratch.<br /><br />I am highly passionate about transforming complex UI/UX designs into clean, production-grade code. Moving forward, my goal is to master the full MERN stack (MongoDB, Express, React, Node.js) and adapt to AI tools to build smarter, future-ready applications.",
  },

  skills: {
    coreFrontend: [
      "React.js",
      "Next.js",
      "TypeScript (TSX)",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    toolsAndConcepts: [
      "Responsive Web Design",
      "REST API Integration",
      "Redux Toolkit",
      "Zustand",
      "Git/GitHub",
      "AWS (S3)",
    ],
    stylingAndUI: [
      "Tailwind CSS",
      "Bootstrap",
      "Radix UI",
      "Shadcn UI",
      "Framer Motion",
      "GSAP",
    ],
    newInterests: [
      "MongoDB",
      "Express.js",
      "Node.js",
      "AI Technologies (OpenAI API, GenAI)",
    ],
  },
  softSkills: [
    "Analytical & Quantitative",
    "Adaptability",
    "Problem-Solving",
    "Creativity",
    "Strong Work Ethic",
    "Critical Thinking",
  ],

  experience: [
    {
      id: 1,
      company: "RenderEase Technovations Private Limited",
      location: "Remote",
      role: "Frontend Developer",
      duration: "March 2025 - July 2026",
      achievements: [
        "Won a company-wide proposal competition to modernize the corporate website; presented a comprehensive analysis of legacy site shortcomings and pitched a from-scratch architectural strategy.",
        "Developed and maintained responsive frontend single-page applications (SPAs) for the corporate website and the core SaaS Platform utilizing Next.js, React.js, and Tailwind CSS.",
        "Built interactive user interfaces for the newly introduced 3D Render Room and 3D product configurator, writing scalable TypeScript code.",
        "Integrated complex RESTful APIs using JSON to power admin dashboards, incorporating state management and dynamic data visualization components.",
      ],
    },
    {
      id: 2,
      company: "RenderEase Technovations Private Limited",
      location: "Remote",
      role: "Frontend Developer Intern",
      duration: "November 2024 - March 2025",
      achievements: [
        "Converted complex Figma UI/UX prototypes into functional, mobile-responsive web pages for the customer-facing SaaS platform.",
        "Integrated secure login verification APIs and collaborated closely with the backend engineering team to establish seamless user authentication workflows.",
      ],
    },
    {
      id: 3,
      company: "Ensino Research and Development Pvt. Ltd.",
      location: "On-site",
      role: "Full-Stack Web Development Intern",
      duration: "July 2022 - December 2022",
      achievements: [
        "Completed a comprehensive 6-month commercial training curriculum starting with foundational web technologies including HTML, CSS, and Bootstrap.",
        "Progressed to building full-stack web applications utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js) for end-to-end development.",
      ],
    },
  ],

  projects: [
    {
      id: "renderease-saas",
      title: "RenderEase SaaS Platform",
      description:
        "Developed the core frontend architecture for a production-grade SaaS platform. Integrated complex RESTful APIs for dynamic data visualization and state management across comprehensive admin dashboards.",
      images: [
        "/assets/projectImg/RendereaseDashboard0.png",
        "/assets/projectImg/RendereaseDashboard1.png",
      ],
      link: "https://www.renderease.com/products/platform",
      techStack: [
        "Next.js 15",
        "React 18",
        "TypeScript",
        "Three.js",
        "React Three Fiber",
        "Redux Toolkit",
        "Tailwind CSS",
        "Radix UI",
        "Shadcn UI",
        "Chart.js / Recharts",
        "D3.js",
        "Framer Motion",
      ],
    },
    {
      id: "renderease-admin",
      title: "RenderEase Admin Panel",
      description:
        "Engineered a dedicated artists/admin management dashboard featuring secure authentication, dynamic data tables, PDF report generation, and direct cloud asset management.",
      images: [], // This will automatically trigger your awesome "Confidential" placeholder!
      link: "https://www.renderease.com/products/admin",
      techStack: ["React 19", "Vite", "Redux Persist", "AWS SDK (S3)", "Axios"],
    },
    {
      id: "renderease-renderroom",
      title: "3D Render Room",
      description:
        "Built a 3D virtual staging application enabling users to initialize custom interior environments, seamlessly position multiple products, and generate high-quality lifestyle visuals for eCommerce marketing.",
      images: ["/assets/projectImg/Render-room3d.png"],
      link: "https://www.renderease.com/products/renderroom",
      techStack: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "GSAP / @gsap/react",
        "Framer Motion",
        "Tailwind CSS v4",
        "Shadcn UI",
        "Radix UI",
      ],
    },
    {
      id: "renderease-configurator",
      title: "3D Product Configurator",
      description:
        "Engineered a comprehensive 3D viewer featuring 360° inspection, material customization, interactive information hotspots, real-time dimensional overlays, rendering quality toggles, and AR visualization via QR codes.",
      images: [
        "/assets/projectImg/ProductConfigurator3d0.png",
        "/assets/projectImg/ProductConfigurator3d1.png",
        "/assets/projectImg/ProductConfigurator3d2.png",
        "/assets/projectImg/ProductConfigurator3d3.png",
        "/assets/projectImg/ProductConfigurator3d4.png",
      ],
      link: "https://www.renderease.com/products/3d-configurator",
      techStack: [
        "React 19",
        "TypeScript",
        "Vite",
        "Three.js",
        "React Three Fiber",
        "Drei",
        "Zustand",
        "Tailwind CSS v4",
        "Framer Motion",
        "Headless UI",
      ],
    },
    {
      id: "renderease-redesign",
      title: "RenderEase Corporate Website Redesign",
      description:
        "Led the modernization of the corporate website after winning an internal proposal. Pitched and executed a from-scratch architectural strategy to resolve legacy shortcomings, building a responsive SPA.",
      images: ["/assets/projectImg/RenderEaseWebsite.png"],
      link: "https://www.renderease.com",
      techStack: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "Framer Motion",
        "Shadcn UI",
        "Radix UI",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Technology (BTech)",
      institution: "Dev Bhoomi Institute of Technology (DBIT)",
      location: "Dehradun, Uttarakhand",
      year: "2022",
      description:
        "Completed a rigorous engineering curriculum, developing strong analytical, quantitative, and problem-solving skills that laid the groundwork for my career.",
    },
  ],

  certifications: [
    {
      title: "Advanced React Engineering Certification",
      issuer: "NamasteDev",
      duration: "July 2024 - September 2024",
      description:
        "Completed an in-depth, hands-on React.js program focusing on core component rendering, custom hooks, and modern frontend application architecture.",
    },
  ],
};
