import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';

export function Experience() {
     return (
          <section id="experience" className="min-h-screen py-24 w-full relative">
               <div className="absolute left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-mono-800 to-transparent -translate-x-1/2 hidden md:block"></div>

               <h2 className="text-4xl md:text-5xl font-serif font-bold mb-20 text-center relative z-10 text-mono-100">
                    Professional <span className="text-mono-400 italic font-mono text-3xl">Timeline</span>
               </h2>

               <div className="space-y-16 relative z-10">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                         <div className="md:text-right">
                              <h3 className="text-2xl font-serif font-bold mb-2 group-hover:-translate-y-1 group-hover:text-white transition-all duration-300">Frontend Developer Intern</h3>
                              <a href="https://snippetscript.com/" target="_blank" rel="noopener noreferrer" className="text-mono-400 font-mono hover:text-white transition-colors uppercase tracking-wider text-sm">The Snippet</a>
                              <p className="text-mono-500 text-xs mt-1">Nov 2024 — Aug 2025</p>
                         </div>
                         <div>
                              <GlassCard delay={0.2} className="relative group">
                                   <div className="absolute top-1/2 -left-[45px] w-4 h-4 bg-mono-800 border-2 border-mono-400 rounded-full hidden md:block -translate-y-1/2"></div>
                                   <p className="text-mono-300 leading-relaxed text-sm group-hover:text-mono-200 transition-colors">
                                        Spearheaded full-stack development for three consumer applications, ensuring product reliability and high-performance data visualization. Developed scalable architectures with Material-UI and React.js.
                                   </p>
                              </GlassCard>
                         </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                         <div className="order-2 md:order-1">
                              <GlassCard delay={0.4} className="relative group">
                                   <div className="absolute top-1/2 -right-[45px] w-4 h-4 bg-mono-800 border-2 border-mono-400 rounded-full hidden md:block -translate-y-1/2"></div>
                                   <p className="text-mono-300 leading-relaxed text-sm group-hover:text-mono-200 transition-colors">
                                        Constructed high-performance landing pages and handled real-time data integration via Firebase, optimizing platform performance and SEO rankings by 20%.
                                   </p>
                              </GlassCard>
                         </div>
                         <div className="order-1 md:order-2">
                              <h3 className="text-2xl font-serif font-bold mb-2 group-hover:-translate-y-1 group-hover:text-white transition-all duration-300">Frontend Developer Intern</h3>
                              <a href="https://www.linkedin.com/company/seyarkai/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-mono-400 font-mono hover:text-white transition-colors uppercase tracking-wider text-sm">SeyarkAI</a>
                              <p className="text-mono-500 text-xs mt-1">Feb 2024 — Sept 2024</p>
                         </div>
                    </div>

                    {/* Dynamic CTA */}
                    <div className="pt-24 flex justify-center text-center">
                         <motion.a
                              href="mailto:sujanraj06032005@gmail.com"
                              initial={{ opacity: 0, scale: 0.95 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05, opacity: 0.9 }}
                              transition={{ duration: 0.3 }}
                              className="bg-transparent backdrop-blur-md px-10 py-4 rounded-full text-mono-200 font-mono text-xs tracking-widest uppercase hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group border border-white/10 hover:border-white/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                         >
                              <motion.span
                                   animate={{ opacity: [1, 0.4, 1] }}
                                   transition={{ repeat: Infinity, duration: 1.5 }}
                              >
                                   loading...
                              </motion.span>
                              <span className="group-hover:translate-x-1 transition-transform duration-300">want to hire?</span>
                         </motion.a>
                    </div>
               </div>
          </section>
     );
}
