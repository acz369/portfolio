// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | Andrea Calderon",
  siteUrl: "https://acz369.github.io/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Experience",
    ref: "experience",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "Solution Architect",
  "Technical Team Lead",
  "Cloud & Integration Architecture"
];

export const EMAIL = "andrea.calderon.zuluaga@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/acalderonzuluaga/",
  github: "https://github.com/acz369",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Si Ciudadania",
    image: "/projects/siCiudadania.png",
    blurImage: "/projects/siCiudadania.PNG",
    description: "Improve UI experience.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://siciudadania.co/",
    tech: ["wordpress", "css", "php"],
  },
  {
    name: "Laboratorios Website",
    image: "/projects/Laboratorios.png",
    blurImage: "/projects/Laboratorios.png",
    description: "Built the portal from zero to production 🚀",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://laboratoriosciudadanos.siciudadania.co/",
    tech: ["wordpress", "css", "php"],
  },
  {
    name: "ShoppingCart Website",
    image: "/projects/ShoppingCart.png",
    blurImage: "/projects/blur/ShoppingCart.png",
    description: "Built the portal from zero to production 🚀",
    gradient: ["#245B57", "#004741"],
    url: "https://wonderful-kowalevski-78476e.netlify.app/",
    tech: ["react", "next"],
  },
  {
    name: "veterinary patient administrator Website",
    image: "/projects/veterinary.png",
    blurImage: "/projects/veterinary.png",
    description: "Built the portal from zero to production 🚀",
    gradient: ["#5E4C06", "#746528"],
    url: "https://citasveterinaria01.netlify.app/",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "Ipisis website",
    image: "/projects/Ipisis.png",
    blurImage: "/projects/Ipisis.png",
    description: "Improve UI experience",
    gradient: ["#470700", "#712A23"],
    url: "https://siona.udea.edu.co/home",
    tech: ["javascript", "react", "sass", "next"],
  }
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "typescript",
    "tailwind",
    "sass",
    "html",
    "css"
  ],
  backend: [
    "java",
    "python",
    "docker",
    "SQL"
  ],
  userInterface: ["figma", "angular"],
  testing: ["jest", "cypress"],
  other: ["git", "jenkins", "Bitbucket", "webpack", "babel"],
};

export const EXPERIENCE = [
  {
    role: "Solution Architect / Technical Team Lead",
    company: "Europastry",
    period: "Feb 2024 - Present",
    summary:
      "Leads a multidisciplinary team of approximately 15 people across architecture, development, support, delivery, and implementation.",
    highlights: [
      "Defines enterprise integration architecture across JDE, OutSystems, Azure, MuleSoft, APIs, databases, and internal business applications.",
      "Guides cloud adoption, Java modernization, delivery planning, technical estimation, risk identification, and architecture documentation.",
    ],
  },
  {
    role: "Implementation Analyst / Frontend Engineer",
    company: "YR",
    period: "Nov 2022 - Feb 2024",
    summary:
      "Built responsive digital experiences and coordinated delivery for 3D product personalization projects.",
    highlights: [
      "Developed maintainable React, JavaScript, and TypeScript applications with reusable components and consistent user flows.",
      "Improved performance and release practices with Google Cloud Platform, Webpack, Babel, Jest, Cypress, GitHub, GitLab, and Bitbucket.",
    ],
  },
  {
    role: "Developer",
    company: "University of Antioquia",
    period: "Aug 2020 - Sep 2021",
    summary:
      "Contributed to institutional digital solutions across frontend, backend, database, and user experience work.",
    highlights: [
      "Developed and maintained applications using WordPress, PHP, React, JavaScript, Docker, and MySQL.",
      "Partnered with academic and administrative teams to align technical solutions with user and institutional needs.",
    ],
  },
];

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
