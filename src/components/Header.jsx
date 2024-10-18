import { FaLinkedin } from "react-icons/fa";
import '../index.css';

function Header() {
  return (
    <header 
      id="home" 
      className="space-background container mx-auto p-6 py-48 text-center md:text-left md:mx-20 text-white bg-opacity-90 border border-zinc-900 rounded-lg shadow-lg relative overflow-hidden"
    >
      {/* Animasi trampolin ketika hover */}
      <div className="my-10 transition-transform duration-300 ease-in-out hover:scale-105">
        <h2 className="text-4xl sm:text-4xl md:text-6xl font-bold mb-4 text-center">
          Hi, I am Puput Novita Indraini
        </h2>
        <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
          Web Frontend Developer & UI/UX Designer
        </h4>
        <p className="text-md sm:text-lg md:text-xl mt-4 text-center">
          Specialist in Figma, HTML5, CSS5, JavaScript, React.js, Laravel, Tailwind and Bootstrap
        </p>
      </div>

      {/* Call to Action (CTA) */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <a 
          href="mailto:puput.indraini@binus.ac.id" 
          className="bg-white text-black py-2 px-6 rounded-full hover:bg-zinc-200 transition-colors w-full md:w-auto items-center justify-center z-30"
        >
          Contact Me
        </a>
        <a 
          href="https://www.linkedin.com/in/puput-novita-indraini/" 
          className="flex items-center justify-center gap-2 border-2 border-white text-white py-2 px-6 rounded-full hover:bg-zinc-900 transition-colors w-full md:w-auto z-30"
        >
          <FaLinkedin className="text-2xl" /> LinkedIn
        </a>
      </div>
    </header>
  );
}

export default Header;
