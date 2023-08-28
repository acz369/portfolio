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
    name: "Works",
    ref: "works",
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
  "I design and develop web pages",
  "I develop modern frontend apps",
  "I design dynamic user experience"
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
    "Javascript",
    "React",
    "redux",
    "typescript",
    "tailwind",
    "sass",
    "html",
    "css"
  ],
  backend: [
    "Next",
    "java",
    "python",
    "docker"
  ],
  userInterface: ["figma"],
  testing: ["jest", "cypress"],
  other: ["git", "webpack", "Storybook", "Babel", "Bitbucket", "SQL", "jenkins", "flutter"],
};

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
