import vgnIcon from '../assets/vgn.png';
import topkiferIcon from '../assets/topkifer.jpg';
import softDesignIcon from '../assets/softdesign.png';

export const contacts: { [key: string]: string } = {
  Mail: "klmanikella@gmail.com",
  Tel: "+228 70 01 69 92",
  Linkindin: "https://www.linkedin.com/in/grace-anikella-43672124b/"
}

export const frontendSkills: string[] = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Svelte",
  "Tailwind CSS",
  "Sass (SCSS)",
  "Redux",
  "Vite",
  "Axios",
  "Lighthouse",

];

export const others: string[] = [
  "Python",
  "Docker",
  "GitHub Actions",
  "Github",
  "Jest",
  "Cypress",
  "Figma",
  "Apache",
  "Postman",
  "Swagger",
]

export const backendSkills: string[] = [
  "Node.js",
  "Express",
  "FastAPI",
  "MongoDB",
  "PostgreSQL",
  "Kubernetes",
  "Nginx",
  "Redis",
  "GraphQL",
  "Socket.io",
  "JWT",
  "Microservices",
];


// URLs de documentation officielle
export const docUrls: Record<string, string> = {
  // Frontend
  "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  "TypeScript": "https://www.typescriptlang.org/docs/",
  "React": "https://react.dev/",
  "Next.js": "https://nextjs.org/docs",
  "Svelte": "https://svelte.dev/docs",
  "Tailwind CSS": "https://tailwindcss.com/docs",
  "Sass (SCSS)": "https://sass-lang.com/documentation/",
  "Redux": "https://redux.js.org/introduction/getting-started",
  "Vite": "https://vitejs.dev/guide/",
  "Axios": "https://axios-http.com/docs/intro",
  "GraphQL": "https://graphql.org/learn/",
  "Lighthouse": "https://developer.chrome.com/docs/lighthouse/overview/",
  "Figma": "https://help.figma.com/",
  "Jest": "https://jestjs.io/docs/getting-started",
  "Cypress": "https://docs.cypress.io/",

  // Backend
  "Node.js": "https://nodejs.org/docs/latest/api/",
  "Express": "https://expressjs.com/en/starter/installing.html",
  "Python": "https://docs.python.org/3/",
  "FastAPI": "https://fastapi.tiangolo.com/",
  "MongoDB": "https://www.mongodb.com/docs/",
  "PostgreSQL": "https://www.postgresql.org/docs/",
  "Redis": "https://redis.io/docs/",
  "Docker": "https://docs.docker.com/",
  "Kubernetes": "https://kubernetes.io/docs/home/",
  "Jenkins": "https://www.jenkins.io/doc/",
  "GitHub Actions": "https://docs.github.com/en/actions",
  "Postman": "https://learning.postman.com/docs/introduction/overview/",
  "Swagger": "https://swagger.io/docs/",
  "JWT": "https://jwt.io/introduction",
  "Socket.io": "https://socket.io/docs/v4/",
  "RabbitMQ": "https://www.rabbitmq.com/documentation.html",
  "Nginx": "https://nginx.org/en/docs/",
  "Apache": "https://httpd.apache.org/docs/",
  "Github": "https://docs.github.com/",
  "Microservices": "https://microservices.io/",
};


export const Experiences: Experience[] = [
  {
    startDate: "October 2024",
    endDate: "Present",
    title: "Software Engineer",
    company: "VGN ",
    location: "Remote",
    description: [`Globale Digital Vision(VGN) is a professional training center specialized in blockchain technologies and cryptocurrencies.
We also offer courses in computer science, graphic design, digital illustration, printing on all media, and road safety.
`, `My main goal was to design and develop an e-learning platform dedicated to teaching students about cryptocurrencies, blockchain technologies, and investment strategies.

In addition to training, VGN provides tailored and practical services in each of these fields, supporting both individuals and businesses in their digital transformation and professional development.`],
    skills: ["React", "Git", "Express", "JWT", "MongoDB", "Tailwind CSS", "Bun", "Docker", "TypeScript"],
    icon: vgnIcon,
  },
  {
    startDate: "February 2023",
    endDate: "Present",
    title: "Software Engineer",
    company: "TOPKIFER",
    location: "Part-Time, Lomé, Togo",
    description: `Topkifer strives to bring the entire African community's shopping experience together in one place. It provides a stable, fast, and responsive platform tailored to meet the unique needs of African users. Continuously evolving, it adapts to user expectations while remaining data-efficient and delivering rich, diverse content. With the support of local partners, orders are fulfilled in less than 24 hours.`,
    skills: ["React", "React Native", "TypeScript", "Node.js", "Firebase", "REST API", "Git", "GitLab", "GitHub", "JWT", "Docker"],
    icon: topkiferIcon,
  },
  {
    startDate: "September 2020",
    endDate: "October 2023",
    title: "Software Engineer",
    company: "Soft-Design",
    location: "Full-Time, Lomé, Togo",
    description: `A software development company specialized in creating custom web and mobile applications tailored to clients’ needs. The company focuses on delivering high quality, scalable, and user friendly digital solutions that help businesses grow and innovate.`,
    skills: ["React", "Git", "GitLab", "GitHub", "Python", "Java", "C++", "TypeScript", "PHP", "Go", "Kotlin", "Swift"],
    icon: softDesignIcon
  }
];
