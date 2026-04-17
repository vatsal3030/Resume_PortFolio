import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      className="glass-nav"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      style={{
        position: 'fixed',
        top: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9000,
        background: 'rgba(5, 5, 5, 0.6)',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--border-color)',
        borderRadius: '50px',
        padding: '1rem 2rem',
        display: 'flex',
        gap: '2rem'
      }}
    >
      <motion.a href="#" whileHover={{ scale: 1.1, y: -2, color: '#ffffff', textShadow: '0 0 8px rgba(255,255,255,0.8)' }} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', color: '#888', transition: 'color 0.3s' }}>Home</motion.a>
      <motion.a href="#about" whileHover={{ scale: 1.1, y: -2, color: '#ffffff', textShadow: '0 0 8px rgba(255,255,255,0.8)' }} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', color: '#888', transition: 'color 0.3s' }}>About</motion.a>
      <motion.a href="#experience" whileHover={{ scale: 1.1, y: -2, color: '#ffffff', textShadow: '0 0 8px rgba(255,255,255,0.8)' }} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', color: '#888', transition: 'color 0.3s' }}>Exp</motion.a>
      <motion.a href="#projects" whileHover={{ scale: 1.1, y: -2, color: '#ffffff', textShadow: '0 0 8px rgba(255,255,255,0.8)' }} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', color: '#888', transition: 'color 0.3s' }}>Work</motion.a>
      <motion.a href="#contact" whileHover={{ scale: 1.1, y: -2, color: '#ffffff', textShadow: '0 0 8px rgba(255,255,255,0.8)' }} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', color: '#888', transition: 'color 0.3s' }}>Contact</motion.a>
    </motion.nav>
  );
}
