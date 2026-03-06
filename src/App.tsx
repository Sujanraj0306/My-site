import { useState } from 'react';
import { BackgroundScene } from './components/3d/BackgroundScene';
import { GlassCard } from './components/ui/GlassCard';
import { Canvas } from '@react-three/fiber';
import { PerformanceMonitor } from '@react-three/drei';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Achievements } from './components/sections/Achievements';
import { Mail, Phone, Github, Linkedin, Globe } from 'lucide-react';
import { Preloader } from './components/ui/Preloader';

function App() {
  const [dpr, setDpr] = useState(1);
  const [isLowEnd, setIsLowEnd] = useState(false);
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);

  return (
    <div className="bg-dark-bg text-mono-100 selection:bg-mono-800 selection:text-white relative" style={{ height: '100vh', width: '100vw' }}>
      {!isPreloaderDone && <Preloader onComplete={() => setIsPreloaderDone(true)} />}
      {/* 3D Canvas Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas dpr={dpr}>
          <PerformanceMonitor
            onDecline={() => {
              setDpr(Math.max(0.5, dpr - 0.25));
              setIsLowEnd(true);
            }}
            onIncline={() => setDpr(Math.min(2, dpr + 0.25))}
          >
            {!isLowEnd && <BackgroundScene />}
          </PerformanceMonitor>
        </Canvas>
      </div>

      {/* Main UI Overlay */}
      <div className="absolute inset-0 z-10 overflow-y-auto overflow-x-hidden scroll-smooth h-full">
        {/* Header */}
        <header className="fixed top-0 w-full z-50 py-8 px-6 mix-blend-difference flex justify-between items-center bg-dark-bg/30 backdrop-blur-sm border-b border-white/5">
          <div className="text-xl font-serif font-black tracking-widest uppercase">SUJANRAJ.</div>
          <nav className="hidden md:flex gap-10 text-[10px] font-mono tracking-[0.2em] uppercase text-mono-400">
            <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
            <a href="#skills" className="hover:text-white transition-colors duration-300">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors duration-300">Works</a>
            <a href="#experience" className="hover:text-white transition-colors duration-300">Experience</a>
          </nav>
        </header>

        {/* Sections */}
        <main className="relative z-10 pt-32 flex flex-col items-center max-w-6xl mx-auto w-full px-6 lg:px-12">

          {/* Hero Section */}
          <section id="hero" className="min-h-[85vh] flex flex-col justify-center w-full py-20 relative">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1 space-y-10 z-10 relative">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-[1.05] text-mono-100 flex flex-wrap gap-x-4 items-baseline">
                  AI/ML
                  <span className="italic text-mono-400 font-light">Engineer.</span>
                </h1>
                <p className="text-lg md:text-xl text-mono-300 max-w-xl leading-relaxed font-light mt-6">
                  Architecting <strong className="text-white font-medium">production-ready GenAI ecosystems</strong> and MCP architectures.
                  Bridging complex data with powerful AI agents.
                </p>
                <div className="flex flex-wrap gap-6 pt-6">
                  <a href="#projects" className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-mono-200 transition-colors text-sm tracking-wide">
                    Explore Work
                  </a>
                  <a href="https://github.com/Sujanraj0306" target="_blank" rel="noopener noreferrer" className="px-8 py-3 text-mono-300 font-mono text-xs tracking-widest uppercase hover:text-white transition-colors border-b border-mono-800 hover:border-white hidden sm:flex items-center gap-2 group">
                    GitHub <span className="group-hover:translate-x-1 transition-transform">↗</span>
                  </a>
                  <a href="https://www.linkedin.com/in/sujan-raj-06a058286/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 text-mono-300 font-mono text-xs tracking-widest uppercase hover:text-white transition-colors border-b border-mono-800 hover:border-white flex items-center gap-2 group">
                    LinkedIn <span className="group-hover:translate-x-1 transition-transform">↗</span>
                  </a>
                </div>
              </div>
              <div className="flex-shrink-0 relative z-10">
                <img
                  src="/profile.jpeg"
                  alt="Sujanraj S — AI/ML Engineer and Full-Stack Developer, based in Tamil Nadu, India"
                  width="288"
                  height="384"
                  className="w-56 h-72 md:w-72 md:h-96 object-cover rounded-sm grayscale contrast-125 opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-700 shadow-2xl"
                  onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/320x400?text=Sujanraj'; }}
                />
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="min-h-screen w-full py-24 flex items-center">
            <GlassCard className="w-full relative overflow-hidden px-8 md:px-16 py-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-mono-200">
                System<span className="italic text-mono-500 font-light">.Identity</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-16 text-base md:text-lg text-mono-300 leading-relaxed font-light">
                <div className="space-y-6">
                  <p>
                    Results-driven AI/ML Engineer specializing in <strong className="text-white font-medium">MCP (Model Context Protocol)</strong> architectures
                    and production-ready GenAI applications.
                  </p>
                  <p>
                    I have hands-on experience developing advanced RAG pipelines and data-related features
                    with a sharp focus on product reliability and data quality.
                  </p>
                </div>
                <div className="space-y-8">
                  <p>
                    As a proven hackathon winner, my core strength lies in bridging the gap between
                    automated AI agents and complex marketing/sales data ecosystems to drive actionable insights.
                  </p>
                  <p className="font-mono text-xs text-mono-400 border-l border-mono-800 pl-6 space-y-2 uppercase tracking-widest">
                    <span className="block text-mono-500 mb-4">// Contact Protocol</span>
                    <span className="block hover:text-white transition-colors"><a href="mailto:sujanraj06032005@gmail.com">sujanraj06032005@gmail.com</a></span>
                    <span className="block">(+91) 9445193166</span>
                    <span className="block hover:text-white transition-colors"><a href="https://sujanraj.in" target="_blank" rel="noopener noreferrer">sujanraj.in</a></span>
                  </p>
                </div>
              </div>
            </GlassCard>
          </section>

          <Skills />
          <Projects />
          <Experience />
          <Achievements />

          {/* Footer */}
          <footer className="w-full py-16 mt-20 border-t border-white/5 flex flex-col items-center">

            <div className="flex gap-8 mb-10">
              <a href="mailto:sujanraj06032005@gmail.com" aria-label="Email" className="text-mono-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <Mail size={20} strokeWidth={1.5} />
              </a>
              <a href="tel:+919445193166" aria-label="Phone" className="text-mono-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <Phone size={20} strokeWidth={1.5} />
              </a>
              <a href="https://github.com/Sujanraj0306" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-mono-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <Github size={20} strokeWidth={1.5} />
              </a>
              <a href="https://www.linkedin.com/in/sujan-raj-06a058286/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-mono-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              <a href="https://sujanraj.in" target="_blank" rel="noopener noreferrer" aria-label="Website" className="text-mono-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <Globe size={20} strokeWidth={1.5} />
              </a>
            </div>

            <p className="text-mono-500 text-xs font-mono tracking-widest uppercase mb-4">Engineered with React, Tailwind v4, & R3F</p>
            <p className="text-mono-500 text-xs font-mono tracking-widest uppercase">&copy; {new Date().getFullYear()} Sujanraj S. All rights reserved.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
