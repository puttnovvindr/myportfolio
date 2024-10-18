import { useState } from 'react';
import '../index.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State untuk toggle menu

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const offset = 80; // Atur offset sesuai kebutuhan
    const top = section.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: top,
      behavior: 'smooth'
    });

    setIsOpen(false); // Menutup menu setelah klik
  };

  return (
    <nav className="bg-black text-white shadow-md  border-zinc-900 w-full fixed w-full z-10 top-0 transition bg-opacity-70 duration-300">
      <div className="md:container md:mx-auto p-6 flex justify-center items-center">
        {/* Menu Items */}
        <ul className="flex space-x-28 md:flex hidden">
          <li><a href="#" onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a></li>
          <li><a href="#project" onClick={() => scrollToSection('project')}>Project</a></li>
          <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
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
        <div className="md:hidden bg-black bg-opacity-70 rounded-b-lg">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><a href="#" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a></li>
            <li><a href="#project" onClick={() => scrollToSection('project')}>Project</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
