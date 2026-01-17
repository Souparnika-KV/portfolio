
import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('skills');

  const content = {
  skills: [
    { name: "Frontend Development", details: "React.js, Tailwind CSS, JavaScript , HTML5/CSS3" },
    { name: "Backend & Database", details: "Node.js, Express, MySQL,MongoDB,PostgreSQL" },
    { name: "Programming", details: "JavaScript, Java, C, Python" },
    { name: "Software Tools", details: "Git, GitHub,Vercel, Postman (API Testing), VS Code" }
  ],
  education: [
    { name: "B.Tech in Computer Science", details: "Rajiv Gandhi Institute of Technology • 2023 - Present" },
    { name: "Relevant Coursework", details: "Data Structures, Database Management (DBMS), Operating Systems" }
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
             I am a B.Tech Computer Science student at RIT Kottayam, focused on building data-driven web applications. My technical expertise includes developing frontends with React and backends with Node.js and MongoDB. I am particularly interested in how efficient backend logic and database indexing can improve application performance. Currently, I am applying these skills to solve complex scheduling and registration problems through my academic projects.
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