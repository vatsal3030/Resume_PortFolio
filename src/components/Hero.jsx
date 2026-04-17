import { motion } from 'framer-motion';
import { useScrambleText } from '../hooks/useScrambleText';

export default function Hero() {
  const { text: scrambleName, setIsHovering: setScrambleHover } = useScrambleText("VATSAL VADGAMA");
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
          
          <div className="text-reveal-wrapper" style={{ overflow: 'visible' }}>
            <motion.h1 
              variants={item} 
              onMouseEnter={() => setScrambleHover(true)}
              onMouseLeave={() => setScrambleHover(false)}
              whileHover={{ 
                x: [-2, 2, -2, 2, 0],
                textShadow: ["3px 3px 0px rgba(255,255,255,0.8), -3px -3px 0px rgba(80,80,80,0.8)", "0px 0px 0px transparent"]
              }}
              transition={{ duration: 0.2, repeat: 0 }}
              style={{ 
                fontSize: 'clamp(4rem, 10vw, 8rem)', 
                lineHeight: 1,
                letterSpacing: '-0.04em',
                cursor: 'none'
              }}
            >
              {scrambleName.split(' ')[0]}<br/>{scrambleName.split(' ').slice(1).join(' ')}
            </motion.h1>
          </div>
          
          <div className="text-reveal-wrapper" style={{ marginTop: '2rem' }}>
            <motion.p variants={item} style={{ fontSize: '1.25rem', maxWidth: '600px', color: 'var(--text-muted)' }}>
              Full Stack Developer & Computer Science Undergraduate from Nirma University. 
              Engineering scalable Web Applications and APIs.
            </motion.p>
          </div>
          
          <div className="text-reveal-wrapper" style={{ marginTop: '2rem', overflow: 'visible' }}>
            <motion.a 
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({behavior: 'smooth'}) }}
              href="#contact"
              className="hero-btn"
            >
              Let's Talk
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
