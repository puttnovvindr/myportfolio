function Experience() {
    return (
      <section id="experience" className="container mx-auto p-6 my-18 py-28 mt-32">
        <h1 className="text-4xl font-bold text-center mb-10 text-white">Experience</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black border border-zinc-900 rounded-lg text-white shadow-md rounded-lg p-6 py-20">
            <h2 className="text-2xl font-semibold mb-2">Bina Nusantara Computer Club (BNCC) Activist</h2>
            <p className="text-gray-600">Oct 2023 - Feb 2024</p>
            <p className="mt-2">Participated in multiple roles across seven event committees, primarily focusing on UI/UX and visual design</p>
            <ul className="list-disc list-inside mt-4">
              <li>Designed user interfaces for web applications</li>
              <li>Created visual content for social media campaigns</li>
              <li>Collaborated on branding materials for events</li>
            </ul>
          </div>
          <div className="bg-black border border-zinc-900 rounded-lg text-white shadow-md rounded-lg p-6 py-20">
            <h2 className="text-2xl font-semibold mb-2">Bina Nusantara Computer Club (BNCC) Staff</h2>
            <p className="text-gray-600">Feb 2024 - Now</p>
            <p className="mt-2">Supervised content creation and managed media partnerships</p>
            <ul className="list-disc list-inside mt-4">
              <li>Developed social media strategies to boost engagement</li>
              <li>Built relationships with sponsors and media partners</li>
              <li>Mentored new members in Leadership Development Program</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  
  export default Experience;
  