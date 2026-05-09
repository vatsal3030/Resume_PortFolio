import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useScrambleText } from '../hooks/useScrambleText';
import personImg from '../assets/person.png';

export default function Hero() {
  const { text: scrambleName, setIsHovering: setScrambleHover } = useScrambleText("VATSAL VADGAMA");
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX - innerWidth / 2);
      mouseY.set(e.clientY - innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // generic range to avoid window undefined on first render pass
  const rotateX = useTransform(mouseY, [-500, 500], [15, -15]);
  const rotateY = useTransform(mouseX, [-500, 500], [-15, 15]);

  const springConfig = { damping: 30, stiffness: 100, mass: 2 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

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
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', perspective: 1000, overflow: 'hidden' }}>
      <div className="container" style={{ width: '100%', display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', marginTop: '4rem' }}>
        <motion.div 
          variants={container} 
          initial="hidden" 
          animate="show"
          style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '1rem', rotateX: smoothRotateX, rotateY: smoothRotateY, transformStyle: "preserve-3d" }}
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

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, type: 'spring' }}
          style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', rotateX: smoothRotateX, rotateY: smoothRotateY, transformStyle: "preserve-3d" }}
        >
          <motion.img 
            src={personImg} 
            alt="Vatsal Vadgama" 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            style={{ maxWidth: '100%', height: 'auto', maxHeight: '75vh', objectFit: 'contain', filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.05))', pointerEvents: 'none' }} 
          />
        </motion.div>
      </div>
    </section>
  );
}
