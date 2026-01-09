export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's work together.</h2>
        <p className="text-slate-400 text-lg mb-10">
          I'm currently looking for new opportunities. My inbox is always open!
        </p>
        <a 
          href="mailto: souparnikakv21@mail.com" 
          className="text-2xl md:text-4xl font-medium text-cyan-400 hover:text-cyan-300 underline underline-offset-8 transition"
        >souparnikakv21@gmail.com</a>
        <div className="flex justify-center gap-8 mt-16 text-slate-500">
          <a href="#" className="hover:text-white transition">LinkedIn</a>
          <a href="#" className="hover:text-white transition">GitHub</a>
          <a href="#" className="hover:text-white transition">Twitter</a>
        </div>
      </div>
    </section>
  );
}
