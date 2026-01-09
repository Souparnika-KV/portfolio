import React from 'react';

const projects = [
  {
    title: "Event Allocation System",
    description: "A complex system to register events and allocate halls based on department availability and time slots. Includes conflict detection logic.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    link: "https://github.com/SreelakshmiKSudheer/Hack-Net", // Replace with your link
    type: "Full Logic"
  },
  {
    title: "Registration Form",
    description: "A functional user registration portal with form validation, handling user input, and data storage logic.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: " https://souparnika-kv.github.io/college_event_registration_form/",
    type: "Frontend"
  },
  {
    title: "Tic Tac Toe Game",
    description: "A classic game featuring state management, win-condition algorithms, and a responsive user interface.",
    tech: ["React", "State Management"],
    link: "https://gaurilakshmi.github.io/Tic-Tac-Toe/Website.html",
    type: "Game"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-all group shadow-xl">
              <div className="mb-6">
                <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                  {project.type}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition">
                {project.title}
              </h3>
              
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>

              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center text-white font-bold text-sm border-b-2 border-cyan-500 pb-1 hover:text-cyan-400 transition"
              >
                View Code on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}