import { motion } from 'framer-motion';
import personImg from '../assets/person.png';

export default function About() {
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };
  const item = { hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } };


  return (
    <section id="about" className="section" style={{ minHeight: '80vh', borderTop: '1px solid var(--border-color)', paddingTop: '4rem' }}>
      <div className="container" style={{ width: '100%' }}>
         <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1rem, 4vw, 2rem)' }}>
            <motion.h2 variants={item} style={{ fontSize: 'clamp(2rem, 6vw, 3rem)' }}>About Me</motion.h2>
            
            <motion.div variants={item} style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--border-color)', flexShrink: 0 }}>
              <img src={personImg} alt="Vatsal Vadgama" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 1.6, flex: 1 }}>
                Computer Science undergraduate with strong fundamentals in Data Structures and Algorithms. Building scalable full-stack web applications.
              </p>
            </motion.div>

            <motion.p variants={item} style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 1.6 }}>
              Passionate about backend systems, API design, and creating immersive user experiences on the frontend. Actively seeking software engineering internships to solve complex problems and gain real-world engineering experience.
            </motion.p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <motion.div variants={item} whileHover={{ scale: 1.02 }} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'none', padding: 'clamp(1rem, 4vw, 2rem)' }}>
              <span style={{ fontSize: 'clamp(0.9rem, 3vw, 1.2rem)' }}>LeetCode Rating</span>
              <span style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontFamily: 'Space Grotesk', fontWeight: 700 }}>1624</span>
            </motion.div>
            <motion.div variants={item} whileHover={{ scale: 1.02 }} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'none', padding: 'clamp(1rem, 4vw, 2rem)' }}>
              <span style={{ fontSize: 'clamp(0.9rem, 3vw, 1.2rem)' }}>Codeforces Rating</span>
              <span style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontFamily: 'Space Grotesk', fontWeight: 700 }}>1023</span>
            </motion.div>
            <motion.div variants={item} whileHover={{ scale: 1.02 }} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'none', padding: 'clamp(1rem, 4vw, 2rem)' }}>
              <span style={{ fontSize: 'clamp(0.9rem, 3vw, 1.2rem)' }}>JEE Main (Percentile)</span>
              <span style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontFamily: 'Space Grotesk', fontWeight: 700 }}>97.84</span>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
