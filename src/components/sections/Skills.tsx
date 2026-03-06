import { GlassCard } from '../ui/GlassCard';

export function Skills() {
     const aiSkills = [
          "Python", "Java", "MCP Protocol", "Agent Building",
          "ADK", "RAG", "Data Transformations", "NLP", "LLMs"
     ];

     const cloudSkills = [
          "AWS", "Docker", "ChromaDB", "ReactJS",
          "Firebase", "Git/GitHub", "TailwindCSS", "Next.js"
     ];

     return (
          <section id="skills" className="py-24 w-full">
               <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center text-mono-100 italic">
                    Technical Capabilities
               </h2>

               <div className="grid md:grid-cols-2 gap-8">
                    <GlassCard delay={0.2} className="hover:border-mono-500/30 group">
                         <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-3 text-mono-200 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300">
                              <div className="w-1.5 h-1.5 bg-mono-400 rounded-full"></div>
                              AI & Data Engineering
                         </h3>
                         <div className="flex flex-wrap gap-3">
                              {aiSkills.map(s => (
                                   <span key={s} className="px-3 py-1.5 bg-mono-900 border border-mono-800 rounded text-xs font-medium text-mono-300 hover:text-white transition-colors cursor-default tracking-wide">
                                        {s}
                                   </span>
                              ))}
                         </div>
                    </GlassCard>

                    <GlassCard delay={0.4} className="hover:border-mono-500/30 group">
                         <h3 className="text-xl font-serif font-bold mb-6 flex items-center gap-3 text-mono-200 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300">
                              <div className="w-1.5 h-1.5 bg-mono-400 rounded-full"></div>
                              Engineering & Cloud
                         </h3>
                         <div className="flex flex-wrap gap-3">
                              {cloudSkills.map(s => (
                                   <span key={s} className="px-3 py-1.5 bg-mono-900 border border-mono-800 rounded text-xs font-medium text-mono-300 hover:text-white transition-colors cursor-default tracking-wide">
                                        {s}
                                   </span>
                              ))}
                         </div>
                    </GlassCard>
               </div>
          </section>
     );
}
