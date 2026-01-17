import { Download, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-cyan-400 font-mono mb-4 tracking-widest uppercase">Computer Science Student</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Hi, I'm <span className="text-cyan-500">Souparnika KV</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-md mb-8">
            Specializing in Web development and Web Logic. 
            I build functional, logic-driven applications that solve real-world problems.
          </p>
          
          {/* Re-added and polished all three buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 px-6 py-3 rounded-full font-bold transition shadow-lg shadow-cyan-500/20 text-sm md:text-base">
              View My Work
            </a>
            
            <a 
              href="/Resume.pdf" 
              target="_blank"
              className="border border-slate-700 text-white px-6 py-3 rounded-full hover:bg-slate-800 transition flex items-center gap-2 font-bold text-sm md:text-base"
            >
              Resume <Download size={18} />
            </a>

            <a 
              href="#contact" 
              className="border border-cyan-400/30 text-cyan-400 px-6 py-3 rounded-full hover:bg-cyan-400/10 transition flex items-center gap-2 font-bold text-sm md:text-base"
            >
              Let's Talk <MessageSquare size={18} />
            </a>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 rounded-full blur-[80px] opacity-20"></div>
          <img 
            src="https://img.freepik.com/free-vector/woman-with-long-brown-hair-pink-shirt_90220-2940.jpg?semt=ais_hybrid&w=740&q=80" 
            alt="Profile" 
            className="relative rounded-2xl w-64 h-80 object-cover border-2 border-slate-800 grayscale hover:grayscale-0 transition duration-500 shadow-2xl rotate-3 hover:rotate-0"
          />
        </motion.div>
      </div>
    </section>
  );
}