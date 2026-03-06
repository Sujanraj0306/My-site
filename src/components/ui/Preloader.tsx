import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Preloader({ onComplete }: { onComplete: () => void }) {
     const [isVisible, setIsVisible] = useState(true);
     const [phase, setPhase] = useState<'circle' | 'line'>('circle');

     useEffect(() => {
          // Phase 1: Circle "snake" animation (1.5s)
          const phaseTimer = setTimeout(() => {
               setPhase('line');
          }, 1500);

          // Phase 2: Fade out after line is drawn (3s total)
          const completeTimer = setTimeout(() => {
               setIsVisible(false);
               setTimeout(onComplete, 800); // Give time for exit animation
          }, 2000);

          return () => {
               clearTimeout(phaseTimer);
               clearTimeout(completeTimer);
          };
     }, [onComplete]);

     return (
          <AnimatePresence>
               {isVisible && (
                    <motion.div
                         initial={{ opacity: 1 }}
                         exit={{ opacity: 0 }}
                         transition={{ duration: 0.8, ease: "easeInOut" }}
                         className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white"
                    >
                         <motion.div
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className="flex flex-col items-center"
                         >
                              <h1 className="text-3xl md:text-5xl font-serif font-black tracking-widest uppercase text-mono-200 mb-8">
                                   Sujanraj S
                              </h1>

                              <div className="relative w-32 h-12 flex items-center justify-center">
                                   {phase === 'circle' ? (
                                        <motion.svg
                                             width="40"
                                             height="40"
                                             viewBox="0 0 40 40"
                                             className="absolute"
                                             animate={{ rotate: 360 }}
                                             transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        >
                                             <motion.circle
                                                  cx="20"
                                                  cy="20"
                                                  r="16"
                                                  stroke="white"
                                                  strokeWidth="1.5"
                                                  fill="transparent"
                                                  strokeLinecap="round"
                                                  initial={{ strokeDasharray: "10 100" }}
                                                  animate={{ strokeDasharray: ["10 100", "50 50", "10 100"] }}
                                                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                             />
                                        </motion.svg>
                                   ) : (
                                        <motion.div
                                             className="absolute h-[1.5px] bg-white rounded-full"
                                             initial={{ width: 10, opacity: 0 }}
                                             animate={{ width: 128, opacity: 1 }}
                                             transition={{ duration: 0.8, ease: "backOut" }}
                                        />
                                   )}
                              </div>

                         </motion.div>
                    </motion.div>
               )}
          </AnimatePresence>
     );
}
