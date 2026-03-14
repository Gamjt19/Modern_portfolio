import Image from 'next/image';

const projects = [
  {
    title: 'Lab Smart',
    category: 'Smart Attendance System',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2670&auto=format&fit=crop',
    color: 'from-blue-500/20 to-cyan-500/20',
    description: 'An intelligent lab attendance system using QR codes with device fingerprinting and static IP whitelisting for strict security.'
  },
  {
    title: 'AI-Fitness-Tracker',
    category: 'Personalized Plans',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop', // Updated image link
    color: 'from-emerald-500/20 to-teal-500/20',
    description: 'An AI-assisted platform generating bespoke fitness regimens based on user biometrics and specific activity levels.'
  },
  {
    title: 'News Web App',
    category: 'Full Stack MERN App',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2670&auto=format&fit=crop',
    color: 'from-purple-500/20 to-pink-500/20',
    description: 'A dynamic news aggregation platform fetching curated stories from public APIs with seamless categorization.'
  }
];

export default function Projects() {
  return (
    <section className="relative w-full bg-[#121212] z-20 py-32 px-6 sm:px-12 lg:px-24 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-32">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-white/10">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
              Projects
            </h2>
            <p className="text-xl text-white/50 font-light max-w-xl leading-relaxed">
              A selection of robust web applications, intelligent systems, and full-stack development case studies.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 group">
            <span className="text-sm font-medium uppercase tracking-wider">View All Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </button>
        </div>

        <div className="flex flex-col gap-32 lg:gap-48">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`group relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center cursor-pointer`}
              >

                {/* Image Section */}
                <div className="w-full lg:w-3/5">
                  <div className="relative w-full aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden glass transition-all duration-700 shadow-2xl shadow-black/50">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none mix-blend-overlay`} />
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1200}
                      height={900}
                      className="w-full h-full object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-[1.5s] ease-out saturate-50 group-hover:saturate-100"
                    />
                  </div>
                </div>

                {/* Text Content Section */}
                <div className="w-full lg:w-2/5 flex flex-col gap-6 lg:gap-10">
                  <div className="flex items-center gap-4 text-white/40 uppercase tracking-[0.2em] text-sm font-light">
                    <span>{project.year}</span>
                    <span className="w-8 h-[1px] bg-white/20"></span>
                    <span>{project.category}</span>
                  </div>

                  <div>
                    <h3 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-500">
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-lg lg:text-xl font-light leading-relaxed max-w-lg">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-4 text-white hover:text-white/70 transition-colors w-fit group/btn">
                    <span className="text-sm font-medium uppercase tracking-wider">Explore Project</span>
                    <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45 group-hover/btn:rotate-0 transition-transform duration-300"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
