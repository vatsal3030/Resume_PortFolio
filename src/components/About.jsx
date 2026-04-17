import { motion } from 'framer-motion';

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="about" className="section" style={{ minHeight: '80vh', borderTop: '1px solid var(--border-color)' }}>
      <div className="container" style={{ width: '100%' }}>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}
        >
          <div>
            <motion.h2 variants={item} style={{ fontSize: '3rem', marginBottom: '2rem' }}>About Me</motion.h2>
            <motion.p variants={item} style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              I am a Computer Science undergraduate with strong fundamentals in Data Structures and Algorithms. I build scalable full stack web applications using the MERN stack with modern architectural patterns.
            </motion.p>
            <motion.p variants={item} style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 1.6 }}>
              Passionate about backend systems, API design, and creating immersive user experiences on the frontend. Actively seeking software engineering internships to solve complex problems and gain real-world engineering experience.
            </motion.p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
            <motion.div variants={item} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '1.2rem' }}>LeetCode Rating</span>
              <span style={{ fontSize: '2rem', fontFamily: 'Space Grotesk', fontWeight: 700 }}>1624</span>
            </motion.div>
            <motion.div variants={item} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '1.2rem' }}>Codeforces Rating</span>
              <span style={{ fontSize: '2rem', fontFamily: 'Space Grotesk', fontWeight: 700 }}>1023</span>
            </motion.div>
            <motion.div variants={item} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '1.2rem' }}>JEE Main (Percentile)</span>
              <span style={{ fontSize: '2rem', fontFamily: 'Space Grotesk', fontWeight: 700 }}>97.84</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
