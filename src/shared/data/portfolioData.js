import project1 from "@/shared/assets/img/mock-1.png";
import project2 from "@/shared/assets/img/mock-2.png";
import project3 from "@/shared/assets/img/mock-3.png";
import project4 from "@/shared/assets/img/mock-4.png";
import project5 from "@/shared/assets/img/mock-5.png";
import project6 from "@/shared/assets/img/mock-6.png";
import project7 from "@/shared/assets/img/mock-7.png";
import project8 from "@/shared/assets/img/mock-8.png";

import physics from "@/shared/assets/img/physics.svg";
import githubIcon from "@/shared/assets/img/github.svg";
import api from "@/shared/assets/img/api.svg";
import ui from "@/shared/assets/img/ui.svg";
import figma from "@/shared/assets/img/figma.svg";
import html from "@/shared/assets/img/html.svg";
import css from "@/shared/assets/img/css.svg";
import gsapIcon from "@/shared/assets/img/gsap.svg";
import reduxjs from "@/shared/assets/img/reduxjs.svg";
import nodejs from "@/shared/assets/img/nodejs.svg";
import mongodb from "@/shared/assets/img/mongodb.svg";
import auth0 from "@/shared/assets/img/auth0.svg";
import postman from "@/shared/assets/img/postman.svg";

import vite from "@/shared/assets/img/vite.svg";
import netlify from "@/shared/assets/img/netlify.svg";
import seo from "@/shared/assets/img/seo.svg";
import framerMotion from "@/shared/assets/img/framer.svg";
import JavaScript from "@/shared/assets/img/javascript.svg";

import certificate1 from "@/shared/assets/certificates/certificate1.png";
import certificate2 from "@/shared/assets/certificates/certificate2.png";
import certificate3 from "@/shared/assets/certificates/certificate3.png";
import certificate4 from "@/shared/assets/certificates/certificate4.png";
import certificate5 from "@/shared/assets/certificates/certificate5.png";

// ===== Проекты =====
export const projects = [
  { id: "idiomFlow", imgUrl: project7, tags: ["React", "Redux Toolkit", "Auth0", "Node.js", "GSAP", "Framer Motion"], github: "https://github.com/91Helen/node-idiomFlow-frontend", netlify: "https://learning-idioms-node.netlify.app/" },
  { id: "recipeApp", imgUrl: project1, tags: ["React", "Edamam Recipe API", "JavaScript (ES6+)", "CSS"], github: "https://github.com/91Helen/recipe-for-netlify", netlify: "https://recipe-portfolio-my-project.netlify.app/" },
  { id: "nutritionApp", imgUrl: project2, tags: ["React", "JavaScript (ES6+)", "API Ninjas Nutrition", "CSS"], github: "https://github.com/91Helen/api-ninjas-mine", netlify: "https://nutrition-analysis-ninjas.netlify.app/" },
  { id: "mealPlan", imgUrl: project3, tags: ["React", "Hooks", "LocalStorage", "UI library", "uuid", "Git + GitHub"], github: "https://github.com/91Helen/meal-plan-thirteen", netlify: "https://weekly-meal-plan-ideas-project.netlify.app/" },
  { id: "feniks", imgUrl: project5, tags: ["JavaScript (ES6+)", "CSS", "Git + GitHub", "SEO", "AOS + GSAP"], github: "https://github.com/91Helen/feniks-logoped", netlify: "https://feniks-logo.kz/" },
  { id: "phrasalVerb", imgUrl: project8, tags: ["React", "Vite", "JavaScript (ES6+)", "CSS3", "Interactive UI"], github: "https://github.com/91Helen/phrasal-verb-trainer-app-vite", netlify: "https://phrasal-verbs-trainer-app.netlify.app/" },
  { id: "psychologist", imgUrl: project6, tags: ["JavaScript (ES6+)", "SEO", "CSS", "GSAP", "Swiper.js slider"], github: "https://github.com/91Helen/Psychologist-landing-page", netlify: "psychologist-shansharbayeva-aliya.netlify.app" },
  { id: "clothingStore", imgUrl: project4, tags: ["React", "JavaScript (ES6+)", "CSS", "Git + GitHub", "SweetAlert2"], github: "https://github.com/91Helen/seventh-module-store-for-portfolio", netlify: "https://online-store-filtering-project.netlify.app/" },
];

// ===== Скиллы =====
export const skillsData = [
  { img: physics, title: "React (Hooks / Context)" },
  { img: reduxjs, title: "Redux Toolkit / RTK Query" },
  { img: api, title: "REST API / Axios" },
  { img: JavaScript, title: "JavaScript (ES6+ Logic & Web APIs)" },

  { img: ui, title: "Toast / SweetAlert2" },
  { img: framerMotion, title: "Framer Motion (Events)" },
  { img: gsapIcon, title: "GSAP Animations" },

  { img: nodejs, title: "Node / Express Router" },
  { img: mongodb, title: "MongoDB / Mongoose" },
  { img: auth0, title: "Auth0 Security" },

  { img: vite, title: "Vite / npm" },
  { img: netlify, title: "Netlify / Render" },
  { img: githubIcon, title: "Git / GitHub CI-CD" },

  { img: seo, title: "SEO Optimization" },
  { img: postman, title: "Postman Testing" },
  { img: figma, title: "Figma UI/UX" },
  { img: html, title: "HTML5 / Semantic" },
  { img: css, title: "CSS3 / SASS/SCSS" },
];

// ===== Опыт работы =====
export const experience = [
  {
    id: "al_tech",
    link: "https://altech.digital"
  },
];

// ===== Сертификаты =====
export const certificates = [
  { img: certificate1, title: "Certificate 1" },
  { img: certificate2, title: "Certificate 2" },
  { img: certificate3, title: "Certificate 3" },
  { img: certificate4, title: "Certificate 4" },
  { img: certificate5, title: "Certificate 5" },
];