import { motion } from 'framer-motion';
import { Mail, Code, Briefcase, Smartphone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ minHeight: '60vh', padding: '6rem 0', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
      <div className="container" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1, marginBottom: '1rem' }}
        >
          LET'S BUILD
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '4rem', color: 'var(--text-muted)' }}
        >
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00ff00', boxShadow: '0 0 10px #00ff00' }}></div>
          <span>Available for work</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <a href="mailto:vatsalvadgama05@gmail.com" className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 2rem' }}>
            <Mail size={24} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace' }}>Email Me</span>
          </a>
          <a href="https://github.com/vatsalvadgama05" target="_blank" rel="noreferrer" className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 2rem' }}>
            <Code size={24} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace' }}>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/vatsalvadgama05" target="_blank" rel="noreferrer" className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 2rem' }}>
            <Briefcase size={24} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace' }}>LinkedIn</span>
          </a>
          <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 2rem' }}>
            <Smartphone size={24} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace' }}>+91-9773177104</span>
          </div>
        </motion.div>

        <footer style={{ marginTop: '6rem', color: 'var(--border-color)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Vatsal Vadgama. Built with React & Framer Motion.
        </footer>
      </div>
    </section>
  );
}
