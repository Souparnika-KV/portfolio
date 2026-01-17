import SocialLinks from './SocialLinks';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-950">
      <div className="max-w-3xl mx-auto"> {/* Restricted width for a better form size */}
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-lg">
            Have a question or want to work together? My inbox is always open.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 shadow-xl mb-12">
          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-mono text-cyan-500 ml-1">Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-cyan-500 ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-mono text-cyan-500 ml-1">Message</label>
              <textarea 
                rows="5" 
                placeholder="How can I help you?" 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/10">
              Send Message
            </button>
          </form>
        </div>

        {/* Bottom Section: Email & Socials */}
        <div className="text-center space-y-8">
          <div className="space-y-2">
            <p className="text-xs font-mono text-slate-500 tracking-[0.2em] uppercase">Direct Email</p>
            <a 
              href="mailto:souparnikakv21@gmail.com" 
              className="text-xl md:text-2xl font-medium text-white hover:text-cyan-400 transition-colors"
            >
              souparnikakv21@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center gap-4">
             <div className="h-px w-12 bg-slate-800"></div> {/* Small divider line */}
             <SocialLinks />
          </div>
        </div>

      </div>
    </section>
  );
}