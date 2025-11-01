import {
    SiJavascript, SiTypescript, SiReact,
    SiNextdotjs, SiSvelte, SiTailwindcss,
    SiSass, SiRedux, SiVite, SiAxios,
    SiGraphql, SiLighthouse, SiFigma, SiJest,
    SiCypress,
    //backend
    SiNodedotjs, SiExpress, SiPython,
    SiFastapi, SiMongodb, SiPostgresql,
    SiRedis, SiDocker, SiKubernetes, SiJenkins, SiGithubactions,
    SiPostman, SiSwagger, SiJsonwebtokens, SiSocketdotio,
    SiRabbitmq, SiNginx, SiApache, SiGithub
} from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import type { IconType } from "react-icons";
import { docUrls } from "../../utils/constant";

// Mapping des noms vers les composants d'icônes
const iconMap: Record<string, IconType | null> = {
    "JavaScript": SiJavascript,
    "TypeScript": SiTypescript,
    "React": SiReact,
    "Next.js": SiNextdotjs,
    "Svelte": SiSvelte,
    "Tailwind CSS": SiTailwindcss,
    "Sass (SCSS)": SiSass,
    "Redux": SiRedux,
    "Vite": SiVite,
    "Axios": SiAxios,
    "GraphQL": SiGraphql,
    "Lighthouse": SiLighthouse,
    "Figma": SiFigma,
    "Jest": SiJest,
    "Cypress": SiCypress,
    // Backend
    "Node.js": SiNodedotjs,
    "Express": SiExpress,
    "Python": SiPython,
    "FastAPI": SiFastapi,
    "MongoDB": SiMongodb,
    "PostgreSQL": SiPostgresql,
    "Redis": SiRedis,
    "Docker": SiDocker,
    "Kubernetes": SiKubernetes,
    "Jenkins": SiJenkins,
    "GitHub Actions": SiGithubactions,
    "Postman": SiPostman,
    "Swagger": SiSwagger,
    "JWT": SiJsonwebtokens,
    "Socket.io": SiSocketdotio,
    "RabbitMQ": SiRabbitmq,
    "Nginx": SiNginx,
    "Apache": SiApache,
    "Github": SiGithub,
    "Microservices": BiNetworkChart
};

interface SkillProps {
    name: string;
}

const Skill: React.FC<SkillProps> = ({ name }) => {
    const IconComponent = iconMap[name];
    const docUrl = docUrls[name];
    
    return (
        <a 
            href={docUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="skill-item"
            title={`Voir la documentation de ${name}`}
        >
            {IconComponent && <IconComponent size={40} />}
            <span className="skill-name">{name}</span>
        </a>
    );
}
export default Skill;