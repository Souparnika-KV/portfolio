import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
function App() {
  return (
    <div className="selection:bg-cyan-500 selection:text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="py-10 text-center text-slate-600 text-sm border-t border-slate-900">
        © 2026 Designed & Built by Souparnika KV
      </footer>
    </div>
  )
}

export default App
