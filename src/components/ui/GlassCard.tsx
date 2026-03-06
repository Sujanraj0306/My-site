import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
     children: ReactNode;
     className?: string;
     delay?: number;
}

export function GlassCard({ children, className = '', delay = 0 }: GlassCardProps) {
     return (
          <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay }}
               whileHover={{ y: -5, transition: { duration: 0.2 } }}
               className={`glass-panel p-8 rounded-2xl relative overflow-hidden group ${className}`}
          >
               {children}
          </motion.div>
     );
}
