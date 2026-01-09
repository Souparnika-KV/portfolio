import SocialLinks from './SocialLinks';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center bg-slate-950">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let's work together.
        </h2>
        
        <p className="text-slate-400 text-lg mb-10">
          I'm currently looking for new opportunities. My inbox is always open!
        </p>
        
        <a 
          href="mailto:souparnikakv21@gmail.com" 
          className="text-2xl md:text-4xl font-medium text-cyan-400 hover:text-cyan-300 underline underline-offset-8 transition block"
        >
          souparnikakv21@gmail.com
        </a>

        {/* This replaces the old text links with your new Lucide icons */}
        <div className="flex flex-col items-center mt-16">
          <p className="text-xs font-mono text-slate-500 mb-4 tracking-[0.2em] uppercase">
            Social Channels
          </p>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
