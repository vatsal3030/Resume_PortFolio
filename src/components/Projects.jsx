import { motion } from 'framer-motion';

const projects = [
  {
    title: "Vixora",
    subtitle: "Video Streaming Platform",
    desc: "A scalable full-stack video streaming platform with authentication, video uploads, playlists, and notifications. Implemented caching, rate limiting, and async processing using queues/workers and Socket.IO.",
    tech: ["Node.js", "Express", "PostgreSQL", "Prisma", "Redis", "Socket.IO"]
  },
  {
    title: "Bookit",
    subtitle: "Service Booking Platform",
    desc: "Appointment booking platform for healthcare and personal care. Role-based auth, location-based search, scheduling, and payment integration.",
    tech: ["React", "Express", "PostgreSQL", "Prisma"]
  },
  {
    title: "Agricultural Soil Analysis",
    subtitle: "HackNUthon 6.0 Finalist",
    desc: "Predicts NPK nutrient content, moisture levels, and pH values from spectrometer data. Data preprocessing and feature extraction pipelines in Python.",
    tech: ["Python", "Data Science", "Machine Learning"]
  },
  {
    title: "Secure P2P Network",
    subtitle: "Peer-to-Peer Communication",
    desc: "C++ based messaging application with file handling, user auth, encrypted message storage, and custom memory management.",
    tech: ["C++", "Data Structures", "Cryptography"]
  }
];

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="projects" className="section" style={{ padding: '6rem 0', borderTop: '1px solid var(--border-color)' }}>
      <div className="container" style={{ width: '100%' }}>
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: '3rem', marginBottom: '4rem' }}
        >
          Selected Works
        </motion.h2>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}
        >
          {projects.map((p, idx) => (
            <motion.div variants={item} key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{p.title}</h3>
              <p style={{ color: 'var(--accent-color)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', marginBottom: '1.5rem', opacity: 0.8 }}>
                {p.subtitle}
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem', flex: 1 }}>
                {p.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {p.tech.map((t, i) => (
                  <span key={i} style={{ 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '20px', 
                    border: '1px solid var(--border-color)', 
                    fontSize: '0.8rem',
                    fontFamily: 'JetBrains Mono, monospace'
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
