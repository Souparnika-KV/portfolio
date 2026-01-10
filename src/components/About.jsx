
import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('skills');

  const content = {
    skills: [
      { name: "Frontend", details: "React.js, Tailwind CSS, JavaScript (ES6+)" },
      { name: "Logic & Backend", details: "Event Allocation Algorithms, Conflict Management" },
      { name: "Tools", details: "Git, GitHub, VS Code, Figma" }
    ],
    education: [
      { name: "Bachelor of Computer Science", details: "RIT • 2023 - Present" },
      { name: "Key Coursework", details: "Data Structures, Algorithms, Web Development" }
    ]
  };

  return (
    <section id="about" className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left: About Text */}
        <div>
          <h3 className="text-cyan-500 font-mono mb-2">My Journey</h3>
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
             I am Souparnika KV, a B.Tech Computer Science student at Rajiv Gandhi Institute of Technology, Kottayam. I have a strong interest in software development and enjoy building practical applications using Java, C, Python, HTML, Flask, MySQL, and React.

             I am currently exploring full-stack web development and core computer science subjects like Operating Systems, DBMS, and Data Structures. I enjoy learning by building projects and continuously improving my problem-solving and programming skills. I am eager to gain real-world experience through internships and collaborative projects.
          </p>
          <p className="text-slate-400 leading-relaxed mb-8">
            I enjoy the challenge of solving scheduling conflicts and building clean, 
            responsive interfaces for both users and administrators.
          </p>
          
          {/* Tab Navigation */}
          <div className="flex gap-8 border-b border-slate-800 mb-8">
            {['skills', 'education'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all ${
                  activeTab === tab ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-6">
            {content[activeTab].map((item, index) => (
              <div key={index}>
                <h4 className="text-white font-bold mb-1">{item.name}</h4>
                <p className="text-slate-500 text-sm">{item.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Abstract UI or Image */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 mt-8">
            <h4 className="text-3xl font-bold text-white mb-1">3+</h4>
            <p className="text-slate-500 text-sm">Major Projects</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
            <h4 className="text-3xl font-bold text-white mb-1">CS</h4>
            <p className="text-slate-500 text-sm">Degree Student</p>
          </div>
        </div>
      </div>
    </section>
  );
}