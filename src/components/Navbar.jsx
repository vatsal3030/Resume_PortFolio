import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile(); // Check on initial mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleScroll = (e, target) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu if open
    
    if (target === '#') {
       window.scrollTo({ top: 0, behavior: 'smooth' });
       return;
    }

    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Exp', href: '#experience' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
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
          padding: '0.8rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem'
        }}
      >
        {isMobile ? (
          <button 
             onClick={() => setIsOpen(!isOpen)} 
             style={{ 
               background: 'none', border: 'none', color: '#fff', cursor: 'none', 
               display: 'flex', alignItems: 'center', outline: 'none' 
             }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
            <span style={{ marginLeft: '10px', fontFamily: 'JetBrains Mono, monospace', fontSize: '1rem' }}>
              Menu
            </span>
          </button>
        ) : (
          <div style={{ display: 'flex', gap: '2rem' }}>
            {navLinks.map((link) => (
              <motion.a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleScroll(e, link.href)}
                whileHover={{ scale: 1.1, y: -2, color: '#ffffff', textShadow: '0 0 8px rgba(255,255,255,0.8)' }} 
                style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', color: '#888', transition: 'color 0.3s' }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        )}
      </motion.nav>

      {/* Mobile Dropdown Menu Floating Box */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95, x: '-50%' }}
            animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
            exit={{ opacity: 0, y: -20, scale: 0.95, x: '-50%' }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '4.5rem',
              left: '50%',
              zIndex: 8999,
              background: 'rgba(10, 10, 10, 0.9)',
              backdropFilter: 'blur(16px)',
              border: '1px solid var(--border-color)',
              borderRadius: '20px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              width: '80vw',
              maxWidth: '300px',
              alignItems: 'center',
              boxShadow: '0 10px 40px rgba(0,0,0,0.8)'
            }}
          >
            {navLinks.map((link) => (
              <motion.a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleScroll(e, link.href)}
                whileHover={{ scale: 1.1, color: '#ffffff' }} 
                style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1.1rem', color: '#888', transition: 'color 0.3s', textTransform: 'uppercase', textDecoration: 'none' }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
