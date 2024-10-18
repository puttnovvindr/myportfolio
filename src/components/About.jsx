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
            I am a fifth-semester Computer Science student at Bina Nusantara University, with a big passion for web development and UI/UX. 
            I specialize in HTML5, CSS3, JavaScript, Java, Laravel, and Bootstrap, and love building websites that don’t just work but look great too. 
            With a strong focus on user experience, I’m always looking for ways to make things smoother and more intuitive. 
            I stay up-to-date with the latest tech and trends, aiming to create cool, user-friendly solutions for real-world problems.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
