import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import React from 'react';
import dictionary from './images/dictionary.png';
import movie from './images/movie.png';
import quiz from './images/quiz.png';
import todo from './images/todo.png';

export const sublinks = [
  {
    page: 'projects',
    links: [
      { label: 'Movie Search Site', icon: <FaCreditCard />, url: '#projects' },
      { label: 'Quiz App', icon: <FaCreditCard />, url: '#projects' },
      { label: 'Dictionary App', icon: <FaCreditCard />, url: '#projects' },
      { label: 'To-do App', icon: <FaCreditCard />, url: '#projects' }
    ],
  },
  {
    page: 'skills',
    links: [
      { label: 'Soft', icon: <FaBook />, url: '#skills' },
      { label: 'Hard', icon: <FaBook />, url: '#skills' },
      { label: 'Education', icon: <FaBook />, url: '#skills' }
    ],
  },
  {
    page: 'contact details',
    links: [
      { label: 'E-mail', icon: <FaBriefcase />, url: '#contacts' },
      { label: 'Social Networks', icon: <FaBriefcase />, url: '#contacts' },
    ],
  },
];

export const items = [
  {
    id: "recAGJfiU4CeaV0HL",
    order: 3,
    title: "Soft Skills",
    duties: [
      { desc: "Well-organized and patient"},
      {desc: "Confident English speaking and writing skills"},
      {desc: "Not afraid to make mistakes and ask questions"},
      {desc: "Enjoy structure and logic"},
      {desc: "Open-minded, thougthful and team-oriented"},
      {desc: "Strong willingness to learn"}
    ],
    activity: "SOFT"
  },
  {
    id: "recIL6mJNfWObonls",
    order: 2,
    title: "Hard Skills",
    duties: [
      { desc: "Strong knowledge within HTML5, CSS3 (grid, flexbox), SCSS"},
      {desc: "Practical experience with ReactJS and React Hooks"},
      {desc: "Comfortable working with APIs"},
      {desc: "JavaScript(ES6), Bootstrap"},
      {desc: "Experience with Git, npm and webpacks"},
      {desc: "Responsive layout design/development"}
    ],
    activity: "HARD"
  },
  {
    id: "recAGJfiU4C0HL",
    order: 1,
    title: "Education and Previous Work Experience",
    duties: [
      { years: "January 2019-present",
        desc: 
      "Have been learning to code through tutorials on YouTube, freecodecamp.org and codecademy.com."
      } ,
      { years: "September 2017- January 2019",
        desc: 
      "Worked as a Clinical Trials Coordinator at OCT, Russia. (Medicine, Pharmaceuticals, Pharmacies). Mostly administrative work with a bit of translation."
      },
      { years: "September 2009-2017",
        desc: 
      "Worked as a Clinical Trials Coordinator at PSI CO Ltd., Russia. (Medicine, Pharmaceuticals, Pharmacies). Mostly administrative work: documentation workflow, translation, maintaining of database, communication with clients and investigatots, organisation of meetings (local and international)."
      },
      {
        years: "2001 - 2006",
        desc: "Studied at Leningrad’s State University named after A.S. Pushkin for Interpreter"
      }
    ],
    activity: "EDUCATION"
  },
];

export const projects = [
  { title: "Movie Search App",
    img_url: movie,
    description: "Multi-page search site, created with OMDB API in React. User can look for movies by title and save them to the list of favorites.",
    features: "Local Storage and React hooks.",
    url: "https://juliasemakhina.github.io/movie-search-app/"
  },
  {title: "Quiz App",
    img_url: quiz,
    description: "Simple Quiz App in React. User can choose categories of questions' difficulty.",
    features: "Framer motion and randomizer for quiestions' answers.",
    url: "https://juliasemakhina.github.io/Quiz-React-App/"
  },
  { title: "To-do App",
    img_url: todo,
    description: "Simple To-do App in React. User can toggle light and dark theme and filter entered tasks.",
    features: "Local Storage and React hooks.",
    url: "https://juliasemakhina.github.io/React-to-do-app/"
    },
  {title: "Dictionary App",
    img_url: dictionary,
    description: "English Thesaurus built in React with Wordnik API to search for definition, examples, synonyms and  pronounciation of a word.",
    features: "Multiple API calls and search input animation.",
    url: "https://juliasemakhina.github.io/Dictionary-React-App/"
  }
]

export const socials = [
  {id: "01",
    title: "My Email",
    icon:  <FaEnvelope />,
    url: "contremoi@yandex.ru",
    short: "contremoi@yandex.ru"
  },
  {id: "002",
    title: "Github Page",
    icon: <FaGithub />,
    url: "https://github.com/JuliaSemakhina",
    short: "JuliaSemakhina"
  },
  {id: "003",
    title: "Telegram",
    icon: <FaTelegramPlane />,
    url: "@Contremoi",
    short: "@Contremoi"
  }
]


