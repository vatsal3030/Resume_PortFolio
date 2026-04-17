import { motion } from 'framer-motion';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const item = {
    hidden: { y: 100, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 50, damping: 20 } }
  };

  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ width: '100%' }}>
        <motion.div 
          variants={container} 
          initial="hidden" 
          animate="show"
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <div className="text-reveal-wrapper">
            <motion.h2 variants={item} style={{ fontSize: '1.5rem', fontWeight: 400, color: 'var(--text-muted)' }}>
              Hello, I am
            </motion.h2>
          </div>
          
          <div className="text-reveal-wrapper">
            <motion.h1 
              variants={item} 
              style={{ 
                fontSize: 'clamp(4rem, 10vw, 8rem)', 
                lineHeight: 1,
                letterSpacing: '-0.04em'
              }}
            >
              VATSAL<br/>VADGAMA
            </motion.h1>
          </div>
          
          <div className="text-reveal-wrapper" style={{ marginTop: '2rem' }}>
            <motion.p variants={item} style={{ fontSize: '1.25rem', maxWidth: '600px', color: 'var(--text-muted)' }}>
              Full Stack Developer & Computer Science Undergraduate from Nirma University. 
              Engineering scalable Web Applications and APIs.
            </motion.p>
          </div>
          
          <div className="text-reveal-wrapper" style={{ marginTop: '2rem' }}>
            <motion.a 
              variants={item}
              href="#contact"
              style={{
                display: 'inline-block',
                border: '1px solid var(--text-color)',
                padding: '1rem 2rem',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--text-color)';
                e.target.style.color = 'var(--bg-color)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'var(--text-color)';
              }}
            >
              Let's Talk
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
