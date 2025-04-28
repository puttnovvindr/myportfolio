function Experience() {
    return (
      <section id="experience" className="container mx-auto p-6 my-18 py-28 mt-32">
        <h1 className="text-4xl font-bold text-center mb-10 text-white">Experience</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black border border-zinc-900 rounded-lg text-white shadow-md rounded-lg p-6 py-20">
            <h2 className="text-2xl font-semibold mb-2">PT Lion Super Indo</h2>
            <p className="text-gray-600">Feb 2025 - Now</p>
            <p className="mt-2">Worked on various aspects of application development, focusing on performance optimization and system design.</p>
            <ul className="list-disc list-inside mt-4">
              <li>Developed UI, APIs, and databases using .NET (C#), React.js, and SQL Server</li>
              <li>Collaborated with cross-functional teams to deliver efficient app solutions</li>
              <li>Optimized system performance through testing, analysis, and tuning</li>
            </ul>
          </div>
          <div className="bg-black border border-zinc-900 rounded-lg text-white shadow-md rounded-lg p-6 py-20">
            <h2 className="text-2xl font-semibold mb-2">Bina Nusantara Computer Club Staff</h2>
            <p className="text-gray-600">Dec 2023 - Dec 2024</p>
            <p className="mt-2">Supervised content creation and managed media partnerships</p>
            <ul className="list-disc list-inside mt-4">
              <li>Created 30+ engaging posts for BNCC Bandung’s Instagram, sharing activities and updates</li>
              <li>Mentored 10+ activists in promoting events and building external partnerships</li>
              <li>Collaborated with R&D on website development, improving UI/UX design</li>
            </ul>
          </div>
          <div className="bg-black border border-zinc-900 rounded-lg text-white shadow-md rounded-lg p-6 py-20">
            <h2 className="text-2xl font-semibold mb-2">Bina Nusantara Computer Club Activiest</h2>
            <p className="text-gray-600">Nov 2022 - Nov 2023</p>
            <p className="mt-2">Participated in multiple roles across seven event committees, primarily focusing on UI/UX and visual design</p>
            <ul className="list-disc list-inside mt-4">
              <li>Contributed to 8 event committees, supporting planning and execution of tech events</li>
              <li>Created social media content to boost engagement on BNCC’s platforms</li>
              <li>Built partnerships with media and sponsors to enhance event visibility and resources</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  
  export default Experience;
  