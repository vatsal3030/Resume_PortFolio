import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const generateSVG = (text) => `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%23111111"/><rect width="600" height="400" fill="none" stroke="%23333333" stroke-width="4"/><text x="50%" y="50%" fill="%23555555" font-size="32" font-family="monospace" text-anchor="middle" dominant-baseline="middle">${encodeURIComponent(text)}</text></svg>`;

const projects = [
  {
    title: "Minimalist 3D Space Portfolio",
    subtitle: "Awwwards-Style Personal Website",
    desc: "A highly interactive, physics-based minimalist portfolio featuring a custom rendering engine. Built with a custom boot-sequence preloader and Framer Motion micro-interactions.",
    tech: ["React", "Vite", "Framer Motion", "Particles Engine"],
    img: generateSVG("Space Portfolio")
  },
  {
    title: "Vixora",
    subtitle: "Video Streaming Platform",
    desc: "A scalable full-stack video streaming platform with authentication, video uploads, playlists, and notifications. Implemented caching, rate limiting, and async processing using queues/workers and Socket.IO.",
    tech: ["Node.js", "Express", "PostgreSQL", "Prisma", "Redis", "Socket.IO"],
    img: generateSVG("Vixora Platform")
  },
  {
    title: "Bookit",
    subtitle: "Service Booking Platform",
    desc: "Appointment booking platform for healthcare and personal care. Role-based auth, location-based search, scheduling, and payment integration.",
    tech: ["React", "Express", "PostgreSQL", "Prisma"],
    img: generateSVG("Bookit SaaS")
  },
  {
    title: "Agricultural Soil Analysis",
    subtitle: "HackNUthon 6.0 Finalist",
    desc: "Predicts NPK nutrient content, moisture levels, and pH values from spectrometer data. Data preprocessing and feature extraction pipelines in Python.",
    tech: ["Python", "Data Science", "Machine Learning"],
    img: generateSVG("Data Model Analysis")
  },
  {
    title: "Secure P2P Network",
    subtitle: "Peer-to-Peer Communication",
    desc: "C++ based messaging application with file handling, user auth, encrypted message storage, and custom memory management.",
    tech: ["C++", "Data Structures", "Cryptography"],
    img: generateSVG("Terminal Interface")
  }
];

export default function Projects() {
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const item = { hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } };

  return (
    <section id="projects" className="section" style={{ padding: '6rem 0', borderTop: '1px solid var(--border-color)' }}>
      <div className="container" style={{ width: '100%' }}>
        <motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ fontSize: '3rem', marginBottom: '4rem' }}>
          Selected Works
        </motion.h2>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
          {projects.map((p, idx) => (
            <motion.div variants={item} whileHover={{ y: -5 }} key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', cursor: 'none', padding: 0, overflow: 'hidden' }}>
              <div style={{ height: '200px', width: '100%', background: '#111', overflow: 'hidden' }}>
                <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', transition: 'filter 0.3s' }} onMouseEnter={e => e.target.style.filter = 'grayscale(0%)'} onMouseLeave={e => e.target.style.filter = 'grayscale(100%)'} />
              </div>
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', marginBottom: '1rem' }}>{p.subtitle}</p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem', flex: 1 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                  {p.tech.map((t, i) => ( <span key={i} style={{ padding: '0.25rem 0.75rem', borderRadius: '20px', border: '1px solid var(--border-color)', fontSize: '0.8rem', fontFamily: 'JetBrains Mono, monospace' }}>{t}</span> ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
                   <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}><ExternalLink size={18} /> Live</a>
                   <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}><Code size={18} /> GitHub</a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
