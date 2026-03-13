import { GlassCard } from '../ui/GlassCard';

const projects = [
     {
          title: "Sentinel-X: Adversarial Legal Intelligence Core",
          date: "Jan 2026",
          tech: ["MCP", "RAG", "Multi-Agent AI", "FastAPI"],
          desc: "Boosted legal research productivity by 80% through the development of a local-first ecosystem utilizing MCP-based architectures for seamless data tool orchestration. Ensured 100% data privacy and reasoning reliability by engineering a Multi-Agent Collaborative Debate (MAD) protocol for high-stakes ADK deployments.",
          repo: "https://github.com/Sujanraj0306/Sentinal-X.git",
          demo: "https://drive.google.com/file/d/1QVHMInT_aBPHkqcgw7VfBzrinSbdgtRE/view?usp=sharing"
     },
     {
          title: "AI Powered RE-Dact Systems",
          date: "Sep 2025",
          tech: ["NLP", "Steganography", "Cryptography"],
          desc: "Mitigated legal risk for client-focused initiatives by engineering an enterprise-grade PII redaction toolkit that achieved 94% accuracy in sensitive data masking. Enhanced organizational accessibility by implementing reversible Steganography, allowing for the 100% reliable recovery of encrypted information during audits.",
          repo: "https://github.com/Sujanraj0306/Redact_Systems",
          demo: "https://drive.google.com/file/d/1JhgKCBJ5aVPmZ2JA2PfgSEnY18qIh9ZA/view"
     },
     {
          title: "The LLM Search",
          date: "Aug 2025",
          tech: ["RAG Pipeline", "ChromaDB", "Ollama", "React.js"],
          desc: "Generated strategic business value from unstructured web data by orchestrating a RAG pipeline utilizing high-density 384-dimensional embeddings. Reduced operational overhead for consultative interfaces by integrating cost-effective Ollama models to deliver real-time, LLM-driven market insights.",
          repo: "https://github.com/Sujanraj0306/The_LLM_Search",
          demo: "https://drive.google.com/file/d/1VKimSYVvtw_rdlJfi6xOjZglp5qXgjhh/view"
     },
     {
          title: "GenStyle AI",
          date: "Oct 2025",
          tech: ["Gemini API", "AWS", "Augmented Reality"],
          desc: "Increased user retention by 40% by architecting a scalable GenAI platform that delivered personalized consumer experiences through real-time AR styling.",
          demo: "https://drive.google.com/file/d/148CPK_c2p-PU37a0j359Eam5S99cwuaP/view"
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
                              <div className="flex gap-4 mt-auto">
                                   {p.repo && (
                                        <a href={p.repo} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-mono-300 uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                                             Repo <span className="text-[10px]">↗</span>
                                        </a>
                                   )}
                                   {p.demo && (
                                        <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-mono-300 uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                                             Demo <span className="text-[10px]">↗</span>
                                        </a>
                                   )}
                              </div>
                         </GlassCard>
                    ))}
               </div>
          </section>
     );
}
