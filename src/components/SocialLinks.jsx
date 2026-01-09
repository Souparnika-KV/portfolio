import { Github, Linkedin, Mail } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex gap-5 mt-6">
      {/* GitHub Link */}
      <a 
        href="https://github.com/Souparnika-KV" 
        target="_blank" 
        rel="noreferrer"
        className="text-slate-600 hover:text-slate-900 transition-colors"
      >
        <Github size={24} />
      </a>

      {/* LinkedIn Link */}
      <a 
        href="https://linkedin.com/in/souparnika-kv-8a336b2b1/" 
        target="_blank" 
        rel="noreferrer"
        className="text-slate-600 hover:text-blue-600 transition-colors"
      >
        <Linkedin size={24} />
      </a>

      {/* Optional Mail Link */}
      <a 
        href="mailto:souparnikakv21@gmail.com" 
        className="text-slate-600 hover:text-red-500 transition-colors"
      >
        <Mail size={24} />
      </a>
    </div>
  );
}