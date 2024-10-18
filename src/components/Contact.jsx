import { FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="py-10 flex items-center justify-center text-white">
      <div className="container mx-auto max-w-6xl px-6 py-28 rounded-lg shadow-md text-center relative">
        {/* Background garis-garis */}
        <div className="absolute inset-0 bg-pattern"></div>
        <div className="about-container relative z-10">
          <h1 className="text-5xl font-bold mb-2 text-center">
            Available for work or internship opportunities
          </h1>
          <h3 className="text-xl mb-4">
            I would love to be a part of your team
          </h3>

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
            
        </div>
      </div>
    </section>
  );
}

export default About;
