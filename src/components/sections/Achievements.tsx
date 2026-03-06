import { GlassCard } from '../ui/GlassCard';
import ShinyText from '../ui/ShinyText';

const achievements = [
     {
          title: "1st Place",
          event: "INNOVISION 2025 Hackathon"
     },
     {
          title: "1st Prize",
          event: "Techastra 25 Hackathon"
     },
     {
          title: "1st Runner-Up",
          event: "Doctor Dev National level Hackathon (E-Summit 2026)"
     },
     {
          title: "1st Runner-Up",
          event: "CODE VORTEX 2 (KLA Alumni Hackathon)"
     },
     {
          title: "Winner",
          event: "Internal Hackathon for Smart India Hackathon 2025"
     },
     {
          title: "3rd Place",
          event: "National Science Day Model Presentation"
     },
     {
          title: "Finalist",
          event: "CIT SPARK GRANT 2024"
     }
];

export function Achievements() {
     return (
          <section id="achievements" className="py-24 w-full border-t border-white/5">
               <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-mono-200">
                         <ShinyText text="Recognitions" speed={3} />
                    </h2>
                    <div className="flex justify-center flex-wrap gap-4">
                         {achievements.map((a, i) => (
                              <GlassCard
                                   key={i}
                                   className="px-6 py-4 rounded-xl flex flex-col items-center justify-center text-center max-w-[280px] w-full"
                                   delay={i * 0.1}
                              >
                                   <span className="text-mono-200 font-serif font-bold text-lg mb-1 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300">{a.title}</span>
                                   <span className="text-mono-400 text-xs tracking-wider uppercase">{a.event}</span>
                              </GlassCard>
                         ))}
                    </div>
               </div>
          </section>
     );
}
