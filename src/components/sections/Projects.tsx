import { GlassCard } from '../ui/GlassCard';

const projects = [
     {
          title: "Sentinel-X: Adversarial Legal Intelligence Core",
          date: "Jan 2026",
          tech: ["MCP", "RAG", "Multi-Agent AI", "FastAPI"],
          desc: "Architected a local-first ecosystem using MCP-based architectures to facilitate seamless data tool integration between specialized AI agents (Gemini, DeepSeek). Engineered a Multi-Agent Collaborative Debate (MAD) protocol to ensure high data accuracy and reliability.",
          link: "https://drive.google.com/file/d/1-oj5CYw_SifR2Q8Y2dhLxWCob4pT8p6w/view?usp=sharing",
          linkText: "Project PPT"
     },
     {
          title: "The LLM Search",
          date: "Aug 2025",
          tech: ["RAG Pipeline", "ChromaDB", "Web Scraping", "React.js"],
          desc: "Orchestrated a RAG pipeline utilizing 384-dimensional embeddings to perform automated data extraction and transformations. Implemented efficient vector database (ChromaDB) integrations.",
          link: "https://github.com/Sujanraj0306/The_LLM_Search",
          linkText: "Git Repo"
     },
     {
          title: "AI Powered RE-Dact Systems",
          date: "Sep 2025",
          tech: ["NLP", "Steganography", "Cryptography"],
          desc: "Engineered an enterprise-grade PII redaction toolkit achieving 94% accuracy, focusing on data quality and platform security.",
          link: "https://github.com/Sujanraj0306/Redact_Systems",
          linkText: "Git Repo"
     },
     {
          title: "GenStyle AI",
          date: "Oct 2025",
          tech: ["GenAI", "AWS", "Augmented Reality", "API Integration"],
          desc: "Architected a scalable platform using Gemini API for personalized recommendations, leveraging data analytics to boost user engagement by 40%.",
          link: "https://drive.google.com/file/d/148CPK_c2p-PU37a0j359Eam5S99cwuaP/view",
          linkText: "Demo Video"
     }
];

export function Projects() {
     return (
          <section id="projects" className="min-h-screen py-24 w-full">
               <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center text-mono-100">
                    Selected Works.
               </h2>
               <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((p, i) => (
                         <GlassCard key={i} delay={i * 0.2} className="flex flex-col h-full group">
                              <div className="flex justify-between items-start mb-4">
                                   <h3 className="text-2xl font-serif font-bold group-hover:text-white text-mono-200 transition-all duration-300 group-hover:-translate-y-1">{p.title}</h3>
                                   <span className="text-[10px] font-mono tracking-widest uppercase text-mono-500 mt-2">{p.date}</span>
                              </div>
                              <div className="flex flex-wrap gap-2 mb-6 transition-transform duration-300 group-hover:-translate-y-1">
                                   {p.tech.map((t, idx) => (
                                        <span key={idx} className="text-xs font-mono text-mono-400 border border-mono-800 px-2 py-0.5 rounded-sm">{t}</span>
                                   ))}
                              </div>
                              <p className="text-mono-400 text-sm leading-relaxed mb-8 flex-grow font-light group-hover:text-mono-300 transition-colors">
                                   {p.desc}
                              </p>
                              <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-auto text-xs font-mono text-mono-300 uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                                   {p.linkText} <span className="text-[10px]">↗</span>
                              </a>
                         </GlassCard>
                    ))}
               </div>
          </section>
     );
}
