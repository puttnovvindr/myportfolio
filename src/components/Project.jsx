import { IoLogoFigma } from "react-icons/io5";
import { FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiPhp, SiMysql } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import govspeak from '../assets/govspeak.png';
import nexa from '../assets/nexa.png';
import altera from '../assets/altera.png';
import iBalance from '../assets/IBalance.png';
import craft from '../assets/craft.png';
import connecta from '../assets/connecta.png';
import taskspring from '../assets/taskspring.png';
import progate from '../assets/progate.png';
import cgv from '../assets/cgv.png';
import starbucks from '../assets/starbucks.png';

// Menentukan warna khusus untuk setiap teknologi
const iconStyles = {
  figma: "bg-pink-600 text-white",
  html: "bg-orange-600 text-white",
  css: "bg-blue-500 text-white",
  php: "bg-purple-700 text-white",
  mysql: "bg-blue-800 text-white",
  laravel: "bg-red-500",
  javascript: "bg-yellow-500 text-white",
  reactjs: "bg-blue-400 text-white", 
  tailwind: "bg-teal-500 text-white"
};

const icons = {
  figma: <IoLogoFigma className="text-2xl" />,
  html: <FaHtml5 className="text-2xl" />,
  css: <FaCss3Alt className="text-2xl" />,
  php: <SiPhp className="text-2xl" />,
  mysql: <SiMysql className="text-2xl" />,
  laravel: <FaLaravel className="text-2xl"/>,
  javascript: <IoLogoJavascript className="text-2xl" />,
  reactjs: <RiReactjsFill className="text-2xl"/>,
  tailwind: <RiTailwindCssFill className="text-2xl"/>

};

function Project() {
  return (
    <section id="project" className="py-10 py-28">
      <div className="wrapper mx-auto max-w-7xl px-8">
        <h1 className="text-4xl font-bold text-center mb-10 text-white">Project</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {[
            { 
              img: govspeak, 
              title: 'Govspeak', 
              desc: 'A communication platform between government and citizens, emphasizing accessibility and user engagement through thoughtful UI/UX design', 
              githubLink: 'https://github.com/puttnovvindr/govspeak-2.git', 
              figmaLink: 'https://www.figma.com/design/dF9obXtrXIiNkg6CLVY0Ns/Govspeak?node-id=0-1&t=VjV9NWaK2DAU0bZO-1', 
              tech: ['figma', 'html', 'css', 'javascript', 'php', 'mysql']
            },
            { 
              img: nexa, 
              title: 'Nexa', 
              desc: 'An educational platform aimed at helping students prepare for internships and scholarships, featuring an intuitive interface and comprehensive resources', 
              githubLink: 'https://github.com/RayNvN/ProjectWebProgramming.git', 
              figmaLink: 'https://www.figma.com/design/gsiCIg84x1VooObTGV1dCl/Web-Programming?node-id=0-1&t=VjV9NWaK2DAU0bZO-1', 
              tech: ['figma', 'html', 'css', 'javascript', 'laravel']
            },
            { 
              img: altera, 
              title: 'Altera', 
              desc: 'An intuitive website exploring exoplanets, featuring resources on their discovery, characteristics, and habitability', 
              githubLink: 'https://github.com/rizkiafdl/nasaProject.git', 
              tech: ['figma', 'html', 'css', 'javascript']
            },
            { 
              img: iBalance, 
              title: 'IBalance', 
              desc: 'A mental health platform offering AI-based company recommendations, customized to align with users mental health tolerance levels', 
              githubLink: 'https://github.com/puttnovvindr/iBalance.git', 
              tech: ['figma', 'html', 'css', 'javascript', 'php', 'mysql']
            },
            { 
              img: craft, 
              title: 'Craft', 
              desc: 'A digital agency platform delivering innovative branding and web development solutions, integrating smooth UI/UX design with backend functionality', 
              githubLink: 'https://github.com/puttnovvindr/craft.git', 
              figmaLink: 'https://www.figma.com/design/bVZzTlDEV4Jwa7bwAsMFRq/Agency-Website?t=VjV9NWaK2DAU0bZO-1', 
              tech: ['figma', 'html', 'css', 'javascript']
            },
            { 
              img: connecta, 
              title: 'Connecta', 
              desc: 'Educational platform designed to help students prepare for internships and scholarships, with a user-friendly interface and detailed resources', 
              githubLink: 'https://github.com/puttnovvindr/connecta.git', 
              figmaLink: 'https://www.figma.com/design/oo5nYnqjUUSyWBQpImMpjs/Untitled?node-id=0-1&t=VjV9NWaK2DAU0bZO-1', 
              tech: ['figma', 'html', 'css', 'javascript']
            },
            { 
              img: taskspring, 
              title: 'Taskspring', 
              desc: 'Enhanced productivity features with an improved to-do list, timer, and schedule interface, fostering an engaging learning community', 
              githubLink: '#', 
              figmaLink: 'https://www.figma.com/design/uHRjOBryj2zQ31IVmcSckp/Entreprenuership?node-id=0-1&t=iSSUrgfy8jEpzQUn-1', 
              tech: ['figma', 'html', 'css', 'javascript', 'reactjs', 'tailwind']
            },
            { 
              img: progate, 
              title: 'Progate', 
              desc: 'Streamlined the platform for reading articles and simplified the process for users to become paid writers', 
              figmaLink: 'https://www.figma.com/design/pyuAemDUqH4TrzHDw941XP/Progate-%3A-Pitchdeck-%26-Wireframe?node-id=0-1&t=7KRYNSe7C6ipdQpR-1', 
              tech: ['figma']
            },
            { 
              img: cgv, 
              title: 'Redesign CGV', 
              desc: 'Optimized the moviegoing experience with an improved user flow and updated visual design', 
              figmaLink: 'https://www.figma.com/design/SekbbqC6tdslin77Fp7WdN/Redesign-CGV?t=7KRYNSe7C6ipdQpR-1', 
              tech: ['figma']
            },
            { 
              img: starbucks, 
              title: 'Redesign Starbucks', 
              desc: 'Streamlined the platform for reading articles and simplified the process for users to become paid writers', 
              figmaLink: 'https://www.figma.com/design/lTD7UmDP39Wt1kXZ9vCUas/Starbucks?node-id=0-1&t=WrljCHN02ogV0R9X-1', 
              tech: ['figma']
            }

          ].map((project, index) => (
            <div key={index} className="bg-black border border-zinc-900 rounded-lg text-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="picture">
                <img src={project.img} alt={project.title} className="m-4 w-full h-full object-cover" />
              </div>
              <div className="description p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <div className="flex md:flex-row justify-start items-center gap-4 my-3 flex-wrap">
                  {project.tech.map((tech, i) => (
                    <p 
                      key={i} 
                      className={`flex items-center gap-2 py-2 px-4 rounded-full transition-colors ${iconStyles[tech]}`}
                    >
                      {icons[tech]} {tech.toUpperCase()}
                    </p>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">{project.desc}</p>
                <ul className="flex flex-col md:flex-row justify-start items-center gap-4">
                  {project.githubLink && (
                    <li className="w-full md:w-auto">
                      <a 
                        href={project.githubLink} 
                        className="flex items-center justify-center gap-2 border-2 border-white text-white py-2 px-6 rounded-full hover:bg-zinc-900 transition-colors w-full"
                      >
                        <FaGithub className="text-2xl"/> Github
                      </a>
                    </li>
                  )}
                  {project.figmaLink && (
                    <li className="w-full md:w-auto">
                      <a 
                        href={project.figmaLink} 
                        className="flex items-center justify-center gap-2 border-2 border-white text-white py-2 px-6 rounded-full hover:bg-zinc-900 transition-colors w-full"
                      >
                        <IoLogoFigma className="text-2xl"/> Figma
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
