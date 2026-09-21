/**
 * All site content lives here so the components stay presentational.
 * Everything below comes from the resume or from the public GitHub repositories.
 */

export const profile = {
  name: "Kristopher Valladares",
  role: "Full-Stack & Data Analytics Developer",
  location: "Indianapolis, IN",
  email: "Kriskris9032@gmail.com",
  github: "https://github.com/Eltorogoz",
  githubUser: "Eltorogoz",
  linkedin: "https://www.linkedin.com/in/kristopher-valladares",
  resumePath: "/files/Kristopher-Valladares-Resume.pdf",
  tagline:
    "I build systems that turn messy, real-world data into something a person can actually act on.",
  intro:
    "Computer and Information Technology graduate from Purdue, working where full-stack engineering meets data analysis. Most of my projects start the same way: a dataset nobody has modelled properly, or a question nobody can answer without three spreadsheets. I design the schema, write the pipeline, and build the interface that makes the answer obvious.",
} as const;

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  repo: string;
  summary: string;
  problem: string;
  build: string[];
  outcomes: { label: string; value: string }[];
  stack: string[];
  accent: string;
};

/**
 * The three featured projects, ordered by how well they show engineering range:
 * a live data pipeline, a database architecture problem, and an analysis that
 * had to be honest about its own limits.
 */
export const featuredProjects: Project[] = [
  {
    slug: "indyassists",
    title: "IndyAssists",
    subtitle: "Real-time campus transit and dining analytics pipeline",
    period: "March 2026",
    repo: "https://github.com/Eltorogoz/hackindy",
    summary:
      "An end-to-end pipeline that pulls live transit coordinates and dining data from several REST APIs, normalises them into one queryable store, and lets a student ask questions in plain English.",
    problem:
      'Campus information is scattered across a transit feed, a dining service, and a university calendar, each with its own format and none of them designed to be queried together. Answering something as simple as "what\'s open near me before my next class" meant checking three systems by hand.',
    build: [
      "Integrated real-time streaming transit coordinates and dining datasets through REST APIs into a single ingestion layer.",
      "Wrote automated parsing algorithms to reconcile inconsistent payload shapes across sources before anything reached the database.",
      "Connected the Google Gemini API so open-ended natural-language questions resolve against both structured records and unstructured text.",
      "Implemented Supabase OAuth for authentication and deployed interactive map components that render raw spatial feeds as something readable.",
    ],
    outcomes: [
      { label: "Data sources unified", value: "3+ live APIs" },
      { label: "Query interface", value: "Natural language" },
      { label: "Auth", value: "Supabase OAuth" },
    ],
    stack: [
      "Python",
      "Node.js",
      "Express",
      "React",
      "Vite",
      "Supabase",
      "PostgreSQL",
      "Google Gemini API",
      "REST APIs",
    ],
    accent: "from-sky-500/20 to-cyan-500/5",
  },
  {
    slug: "polyglot-commerce",
    title: "Polyglot E-Commerce Analytics",
    subtitle: "PostgreSQL and MongoDB, each doing what it is good at",
    period: "April 2026",
    repo: "https://github.com/Eltorogoz/ecommerce-polyglot",
    summary:
      "A full-stack commerce platform built on two databases at once: PostgreSQL for transactional integrity, MongoDB Atlas for the catalog and review data that refuses to sit in fixed columns.",
    problem:
      "Orders need guaranteed consistency, and product catalogs and reviews need a flexible shape. Forcing both into one database means either rigid JSON blobs in Postgres or giving up transactional guarantees in Mongo. This project takes the harder path and runs both, with a service layer that knows which store owns which question.",
    build: [
      "Cleaned and analysed a real-world Kaggle dataset of 99,000+ order records to evaluate multi-dimensional operational metrics.",
      "Architected the persistence split: PostgreSQL for transactional data integrity, MongoDB Atlas for unstructured catalog and review feeds.",
      "Formulated MongoDB aggregation pipelines using $facet and $lookup so several statistics resolve in a single pass instead of repeated round trips.",
      "Built a React and Tailwind interface over an Express API that reads from both stores without the client knowing there are two.",
    ],
    outcomes: [
      { label: "Order records analysed", value: "99,000+" },
      { label: "Persistence model", value: "Dual-store" },
      { label: "Aggregations", value: "Single-pass $facet" },
    ],
    stack: [
      "PostgreSQL",
      "MongoDB Atlas",
      "Node.js",
      "Express",
      "React",
      "Tailwind CSS",
      "SQL",
      "Python",
    ],
    accent: "from-emerald-500/20 to-teal-500/5",
  },
  {
    slug: "f1-2021",
    title: "F1 2021: Hamilton vs Verstappen",
    subtitle:
      "A SQLite and Tableau analysis of a title decided on the last lap",
    period: "September 2026",
    repo: "https://github.com/Eltorogoz/F1-Project",
    summary:
      "A reproducible analysis of the 2021 Formula 1 season asking how Verstappen won the title decider — built as a SQLite database, 17 documented SQL analyses, and tidy exports designed for Tableau.",
    problem:
      "The 2021 title came down to one lap, and most of the commentary about it is argument rather than evidence. The interesting question is what the lap timing data can actually establish, and just as importantly, what it cannot.",
    build: [
      "Built a typed SQLite schema from the Ergast dataset with a reproducible Python build script and five sanity checks that fail the build rather than producing a quietly broken database.",
      "Wrote 17 commented SQL analyses covering points progression, qualifying gaps, race pace distributions, pit stop performance and the Abu Dhabi decider.",
      "Inferred safety car periods from lap times, since the dataset has no track status column, and validated the detector against races known to have run green.",
      "Normalised every cross-circuit comparison against a per-race benchmark, which reversed the naive pit stop ranking and revealed Red Bull's real advantage.",
    ],
    outcomes: [
      { label: "Points separating them after 21 rounds", value: "0" },
      { label: "Lead erased by the safety car", value: "15.4s → 0.5s" },
      { label: "Tyre age at the restart", value: "4 vs 44 laps" },
    ],
    stack: [
      "Python",
      "SQLite",
      "SQL",
      "pandas",
      "matplotlib",
      "Tableau",
      "Data modelling",
    ],
    accent: "from-rose-500/20 to-orange-500/5",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Data analytics & modelling",
    items: [
      "End-to-end analytic pipelines",
      "Exploratory data analysis",
      "Hypothesis testing",
      "Algorithm formulation",
      "Complex dataset manipulation",
      "Quantitative analysis",
    ],
  },
  {
    group: "Databases & systems",
    items: [
      "PostgreSQL (Supabase)",
      "MySQL",
      "MongoDB Atlas",
      "SQLite",
      "Relational & NoSQL architecture",
      "Schema design",
    ],
  },
  {
    group: "Full-stack & languages",
    items: [
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "Node.js",
      "React",
      "HTML/CSS",
      "RESTful APIs",
      "Git & GitHub",
    ],
  },
  {
    group: "Visualisation & tools",
    items: [
      "Power BI",
      "Tableau",
      "Advanced Excel",
      "Interactive web visualisations",
      "Data storytelling",
      "Technical documentation",
    ],
  },
];

export const experience = [
  {
    role: "Full-Stack & Analytics Developer",
    org: "Tigers College Consulting",
    location: "Princeton, NJ",
    period: "Sept. 2023 – Oct. 2023",
    points: [
      "Overhauled digital systems in a shared Git environment, analysing traffic data to optimise user engagement pathways and drive 20,000+ site impressions.",
      "Translated business goals into functional web solutions and technical documentation alongside non-technical stakeholders.",
      "Provided structured mentoring and educational guidance to students.",
    ],
  },
];

export const otherProjects = [
  {
    title: "MedSearch",
    subtitle: "Healthcare information & analytics platform",
    period: "May 2024 – Aug. 2024",
    description:
      "Aggregated pharmaceutical datasets into structured models to analyse side-effect profiles and medical risk correlations, with custom Supabase SQL for multi-variable filtering and an interface aimed at non-technical users.",
    stack: ["SQL", "Supabase", "JavaScript", "React"],
    repo: null,
  },
  {
    title: "Purdue Living Lab",
    subtitle: "RISE project discovery and enrolment platform",
    period: "2026",
    description:
      "A web application for Purdue's Living Lab initiative letting students browse approved RISE projects, access documents and submit enrolment requests, with authenticated accounts over a MySQL backend.",
    stack: ["React 19", "Express 5", "MySQL", "Tailwind CSS"],
    repo: "https://github.com/Eltorogoz/livinglabs",
  },
];

export const education = {
  school: "Purdue University",
  location: "Indianapolis, IN",
  degree: "B.S. Computer and Information Technology",
  graduated: "May 2026",
  certifications: [
    "Data Analysis Professional Certificate — Coursera",
    "AI Integration Professional Certificate — Coursera",
  ],
  languages: ["English (fluent)", "Spanish (proficient)"],
};

/**
 * Repositories the live GitHub section skips: empty scaffolds, duplicates of a
 * repo already listed, and coursework from the first weeks of learning to code.
 */
export const hiddenRepos = [
  "portfolio", // this site; listing itself would be circular
  "tuggon",
  "livinglab",
  "Blueline-Rental",
  "Hobbies",
  "Week1_basics",
  "first-website",
];

/**
 * Most of these repositories have no GitHub description. These one-liners are
 * written from what is actually in each repo and used as the fallback.
 */
export const repoNotes: Record<string, string> = {
  "google-maps-demo":
    "A Vite front end with a Node backend, built to get hands-on with the Google Maps JavaScript API.",
  "Full-Stack-Book-Manager-Application":
    "A small Express application for managing a book collection end to end, packaged for Google Cloud deployment.",
  "Italian-Hypercars":
    "A dark-mode front-end concept for Pagani and Ferrari with a carousel, filterable car cards and a specifications modal.",
  "Hobbies-Cars":
    "A single-page React app about cars, used to practise component composition with a carousel, accordion and Tailwind card grid.",
  "React-ive-Chocolate-Candy-Boxes":
    "An early React build for working through component state and props with a configurable candy box interface.",
  "Blueline-Auto-Rental":
    "A rental prototype for a small car business: Express and EJS over a relational schema, split into layers to stay maintainable.",
};

export const sections = [
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "background", label: "Background" },
  { id: "repos", label: "GitHub" },
  { id: "contact", label: "Contact" },
];
