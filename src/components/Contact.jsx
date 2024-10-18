import { FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="py-10 flex items-center justify-center text-white">
      <div className="container mx-auto max-w-6xl p-36  rounded-lg shadow-md text-center relative">
        {/* Background garis-garis */}
        <div className="absolute inset-0 bg-pattern"></div>
        <div className="about-container relative z-10">
          <h1 className="text-4xl font-bold mb-2 text-center">
            Available for work or internship opportunities
          </h1>
          <h3 className="text-xl mb-4">
            I would love to be a part of your team
          </h3>

          <ul className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
            <li className="w-full md:w-auto">
              <a
                href="mailto:puput.indraini@binus.ac.id"
                className="bg-white text-black py-2 px-6 rounded-full hover:bg-zinc-100 transition-colors flex justify-center items-center w-full"
              >
                Contact Me
              </a>
            </li>
            <li className="w-full md:w-auto">
              <a
                href="https://www.linkedin.com/in/puput-novita-indraini/"
                className="flex items-center justify-center gap-2 border-2 border-white text-white py-2 px-6 rounded-full hover:bg-zinc-900 transition-colors w-full"
              >
                <FaLinkedin className="text-2xl" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
