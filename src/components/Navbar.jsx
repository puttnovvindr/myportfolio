import { useState } from 'react';
import '../index.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State untuk toggle menu
  const [activeSection, setActiveSection] = useState('home'); // State untuk bagian aktif

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const offset = 80; // Atur offset sesuai kebutuhan
    const top = section.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: top,
      behavior: 'smooth'
    });

    setActiveSection(id); // Set bagian aktif
    setIsOpen(false); // Menutup menu setelah klik
  };

  return (
    <nav className="bg-black text-gray-400 shadow-md border-zinc-900 w-full fixed z-10 top-0 transition duration-300">
      <div className="md:container md:mx-auto p-6 flex justify-center items-center">
        {/* Menu Items */}
        <ul className="flex space-x-28 md:flex hidden">
          <li>
            <a
              href="#home"
              onClick={() => scrollToSection('home')}
              className={`hover:text-white ${activeSection === 'home' ? 'text-white' : ''}`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={() => scrollToSection('experience')}
              className={`hover:text-white ${activeSection === 'experience' ? 'text-white' : ''}`}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#project"
              onClick={() => scrollToSection('project')}
              className={`hover:text-white ${activeSection === 'project' ? 'text-white' : ''}`}
            >
              Project
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => scrollToSection('about')}
              className={`hover:text-white ${activeSection === 'about' ? 'text-white' : ''}`}
            >
              About
            </a>
          </li>
        </ul>

        {/* Hamburger Menu Button for Mobile */}
        <div className="md:hidden ml-auto">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black rounded-b-lg">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a
                href="#home"
                onClick={() => scrollToSection('home')}
                className={`hover:text-white ${activeSection === 'home' ? 'text-white' : ''}`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={() => scrollToSection('experience')}
                className={`hover:text-white ${activeSection === 'experience' ? 'text-white' : ''}`}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#project"
                onClick={() => scrollToSection('project')}
                className={`hover:text-white ${activeSection === 'project' ? 'text-white' : ''}`}
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => scrollToSection('about')}
                className={`hover:text-white ${activeSection === 'about' ? 'text-white' : ''}`}
              >
                About
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
