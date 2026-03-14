import React from 'react';

const timelineData = [
  {
    type: 'experience',
    year: 'Dec 2024 – Jan 2025',
    title: 'MERN Stack Web Development Intern',
    organization: 'EY GDS & AICTE – Next Gen Employability Program',
    description: 'Developed and deployed full-stack web applications, including a categorized News Web App using MongoDB, Express.js, React.js, and Node.js.'
  },
  {
    type: 'experience',
    year: 'July 2024',
    title: 'Full Stack Web Development Intern',
    organization: 'Pacelab Kochi',
    description: 'Gained foundational experience in building responsive websites and basics of frontend-backend integration.'
  },
  {
    type: 'achievement',
    year: '2025 – 2026',
    title: 'Founder & Co-Lead of Etcetera Coding Club',
    organization: 'MGM College of Engineering and Technology',
    description: 'Spearheaded technical events, coding workshops, and fostered a strong developer community within the college.'
  },
  {
    type: 'achievement',
    year: '2024',
    title: 'Magazine Editor - Calista24',
    organization: 'MGM College of Engineering and Technology',
    description: 'Successfully developed "Calista24", the very first magazine of MGMCET featuring student and faculty achievements.'
  },
  {
    type: 'achievement',
    year: 'Feb 2024',
    title: 'PeCan+ CTF Cyber Security - Top-Performing Team',
    organization: 'Edith Cowan University, Australia (at IIT Madras)',
    description: 'Awarded as a top performer at the Capture the Flag competition hosted by Edith Cowan University at IIT Madras.'
  },
  {
    type: 'education',
    year: 'Jan 2022 – Present',
    title: 'B.Tech in Computer Science and Engineering',
    organization: 'MGM College of Engineering and Technology, Ernakulam',
    description: 'Pursuing undergraduate degree with a strong track record in academic and extra-curricular initiatives.'
  },
  {
    type: 'education',
    year: 'Jun 2020 – Apr 2022',
    title: 'Higher Secondary Education (Computer Science)',
    organization: 'GHSS Thiruvanvandoor, Kerala',
    description: 'Graduated higher secondary education with a focus on Computer Science.'
  }
];

export default function Timeline() {
  return (
    <section className="relative w-full bg-[#121212] z-20 py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto flex flex-col gap-16">
        
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">
            Journey
          </h2>
          <p className="text-lg text-white/50 font-light max-w-xl">
            A timeline of my education, experience, and key achievements.
          </p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0">
          {timelineData.map((item, index) => (
            <div key={index} className="mb-12 ml-8 relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-[#121212] border-2 border-white/30 group-hover:border-white group-hover:bg-white transition-colors duration-300"></div>
              
              <div className="flex flex-col gap-2">
                <span className="text-sm font-light tracking-widest text-white/40 uppercase">
                  {item.year}
                </span>
                <h3 className="text-2xl font-semibold text-white tracking-tight">
                  {item.title}
                </h3>
                <h4 className="text-md text-white/70 italic font-light">
                  {item.organization}
                </h4>
                <p className="text-white/50 font-light leading-relaxed mt-2 max-w-2xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
