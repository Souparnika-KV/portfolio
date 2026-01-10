import React from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: "Event Allocation System",
    description: "A complex system to register events and allocate halls based on department availability and time slots. Includes conflict detection logic.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    link: "https://github.com/SreelakshmiKSudheer/Hack-Net", 
    type: "Full Logic"
  },
  {
    title: "Registration Form",
    description: "A functional user registration portal with form validation, handling user input, and data storage logic.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://souparnika-kv.github.io/college_event_registration_form/",
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
    <section id="projects" className="py-20 px-6 bg-slate-950 relative overflow-hidden">
      {/* Decorative Background Blobs for Glass Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Work</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A collection of projects focusing on logical implementation, 
            user experience, and clean code.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            // Logic to determine which icon to show
            const isGitHub = project.link.includes('github.com');
            
            return (
              <div 
                key={index} 
                className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/[0.07] hover:border-cyan-500/40 transition-all duration-500 shadow-2xl flex flex-col h-full"
              >
                {/* Header: Project Type */}
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                    {project.type}
                  </span>
                  <Code2 className="text-slate-600 group-hover:text-cyan-400 transition-colors" size={20} />
                </div>
                
                {/* Body: Title & Description */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-8 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-medium bg-slate-800/50 text-slate-300 px-2.5 py-1 rounded-md border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer: Action Link with Dynamic Icon */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-white font-bold text-sm group/link w-fit"
                >
                  <span className="border-b-2 border-cyan-500 pb-0.5 group-hover/link:text-cyan-400 transition-colors">
                    {isGitHub ? "View Source Code" : "Launch Live App"}
                  </span>
                  {isGitHub ? (
                    <Github size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  ) : (
                    <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  )}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}