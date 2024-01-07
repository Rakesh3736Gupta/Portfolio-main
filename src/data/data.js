import React from 'react';
import Weather from '../assets/projects/Weather.png';
import Shopping from '../assets/projects/Shopping.png';
import Study from '../assets/projects/Study.png';  // Fix the typo in the path here
import Todo from '../assets/projects/Todo.png';    // Fix the typo in the path here
import Web from '../assets/projects/Web.png';      // Fix the extra space in the path here
import Ludo from '../assets/projects/Ludo.png';
import Profile from '../assets/projects/Profile.png';
import Invoice from '../assets/projects/Invoice.png';

export const data = [
  {
    id: 1,
    name: "STUDY NOTION",
    image: Study,
    github: "https://github.com/Rakesh3736Gupta/EdTech",
    live: "https://study-notion-project-mern.vercel.app/",
  },
  {
    id: 2,
    name: "TaskManager",
    image: Todo,
    github: "https://github.com/Rakesh3736Gupta",
    live: "https://to-do-project-mern-ym3s.vercel.app/",
  },
  {
    id: 3,
    name: "WEATHER APP",
    image: Weather,
    github: "https://github.com/Rakesh3736Gupta/Weather-app",
    live: "https://rakesh3736gupta.github.io/Weather-app/",
  },
  {
    id: 4,  // Correct the id to be unique
    name: "Dev-Detective",
    image: Web,
    github: "https://github.com/Rakesh3736Gupta",
    live: "https://rakesh3736gupta.github.io/Dev-Detective-Project/",
  },

  {
    id: 5,  // Correct the id to be unique
    name: "Invoice-Generator",
    image: Invoice,
    github: "https://github.com/Rakesh3736Gupta/Invoice-Generator/blob/master/README.md",
    live: "https://6592a9ccb4d60cb83a2e631a--effulgent-pixie-1e45f3.netlify.app/",
  },
  {
    id: 6,  // Correct the id to be unique
    name: "Guess-Number",
    image: Ludo,
    github: "https://github.com/Rakesh3736Gupta",
    live: "https://6592a9ccb4d60cb83a2e631a--effulgent-pixie-1e45f3.netlify.app/",
  },
  {
    id: 7,
    name: "Shopping-Cart",
    image: Shopping,
    github: "https://github.com/Rakesh3736Gupta",
    live: "https://65804df6ff0bc2488daaec1c--gorgeous-palmier-c55c86.netlify.app/",
  },
  {
    id: 8,
    name: "modal-cv",
    image: Profile,
    github: "https://github.com/Rakesh3736Gupta",
    live: "https://rakesh3736gupta.github.io/modal-cv/",
  },
];
