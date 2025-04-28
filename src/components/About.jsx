import image from '../assets/puput.jpg';

function About() {
  return (
    <div id="about" className="flex flex-col justify-center items-center min-h-screen p-4 py-28">
        <h1 className="text-white text-4xl font-bold text-center mb-8">About</h1>
      <div className="bg-neutral-950 rounded-lg shadow-lg p-8 max-w-6xl w-full flex flex-col md:flex-row bord">
        <img 
          src={image} 
          alt="Puput Novita Indraini" 
          className="w-full md:w-1/3 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
        />
        <div className="w-full md:w-2/3 flex flex-col justify-center text-justify">
          <h1 className="text-3xl font-bold mb-2 text-white">I am Puput Novita Indraini</h1>
          <p className="text-gray-300 text-lg">
            I’m a 6th-semester Computer Science student passionate about software engineering, with hands-on 
            experience in web development and technologies like React.js, PHP (Laravel), .NET (C#), SQL, and 
            more. I thrive on problem-solving, data analysis, and collaborating with teams, always staying 
            adaptable with a growth mindset. Whether it’s coding or figuring out why my plants grow better in 
            certain spots, I’m all about learning, improving, and creating impactful solutions!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
