import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useScrambleText } from '../hooks/useScrambleText';
import project1Img from '../assets/project1.png';
import project2Img from '../assets/project2.png';
import project3Img from '../assets/project3.png';

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.5 5 1.5a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.4 9c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
    <path d="M9 18c-4.5 1.5-5-2.5-7-3"></path>
  </svg>
);

const generateSVG = (text) => `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%23111111"/><rect width="600" height="400" fill="none" stroke="%23333333" stroke-width="4"/><text x="50%" y="50%" fill="%23555555" font-size="32" font-family="monospace" text-anchor="middle" dominant-baseline="middle">${encodeURIComponent(text)}</text></svg>`;

const projects = [
  {
    title: "Minimalist 3D Space Portfolio",
    subtitle: "Awwwards-Style Personal Website",
    desc: "A highly interactive, physics-based minimalist portfolio featuring a custom rendering engine. Built with a custom boot-sequence preloader and Framer Motion micro-interactions.",
    tech: ["React", "Vite", "Framer Motion", "Particles Engine"],
    img: project1Img || generateSVG("Space Portfolio"),
    liveUrl: "https://portfolio.vixora.co.in/",
    githubUrl: "https://github.com/vatsal3030/Resume_PortFolio"
  },
  {
    title: "Vixora",
    subtitle: "Video Streaming Platform",
    desc: "A scalable full-stack video streaming platform with authentication, video uploads, playlists, and notifications. Implemented caching, rate limiting, and async processing using queues/workers and Socket.IO.",
    tech: ["Node.js", "Express", "PostgreSQL", "Prisma", "Redis", "Socket.IO"],
    img: project2Img || generateSVG("Vixora Platform"),
    liveUrl: "https://app.vixora.co.in/",
    githubUrl: "https://github.com/vatsal3030/vixora-backend"
  },
  {
    title: "Bookit",
    subtitle: "Service Booking Platform",
    desc: "Appointment booking platform for healthcare and personal care. Role-based auth, location-based search, scheduling, and payment integration.",
    tech: ["React", "Express", "PostgreSQL", "Prisma"],
    img: project3Img || generateSVG("Bookit SaaS"),
    liveUrl: "https://bookit.vixora.co.in/",
    githubUrl: "https://github.com/vatsal3030/Bookit-Backend"
  },
  {
    title: "Agricultural Soil Analysis",
    subtitle: "HackNUthon 6.0 Finalist",
    desc: "Predicts NPK nutrient content, moisture levels, and pH values from spectrometer data. Data preprocessing and feature extraction pipelines in Python.",
    tech: ["Python", "Data Science", "Machine Learning"],
    img: generateSVG("Data Model Analysis"),
    liveUrl: "",
    githubUrl: "https://github.com/vatsal3030/Reve-soil-1.0"
  },
  {
    title: "Secure P2P Network",
    subtitle: "Peer-to-Peer Communication",
    desc: "C++ based messaging application with file handling, user auth, encrypted message storage, and custom memory management.",
    tech: ["C++", "Data Structures", "Cryptography"],
    img: generateSVG("Terminal Interface"),
    liveUrl: "",
    githubUrl: "https://github.com/vatsal3030/Chat-network-app"
  }
];

const item = { hidden: { y: 40, opacity: 0 }, show: { y: 0, opacity: 1, transition: { type: 'spring', damping: 25, stiffness: 100 } } };

const ProjectCard = ({ p }) => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <motion.div
      ref={cardRef}
      variants={item}
      className="glass-card project-card"
      style={{ display: 'flex', flexDirection: 'column', cursor: 'none', padding: 0, overflow: 'hidden' }}
    >
      <div style={{ height: '240px', width: '100%', background: '#111', overflow: 'hidden', position: 'relative' }}>
        <motion.img
          src={p.img}
          alt={p.title}
          className="project-img"
          style={{ width: '100%', height: '130%', objectFit: 'cover', y: imgY }}
        />
      </div>
      <div style={{ padding: 'clamp(1rem, 5vw, 2rem)', display: 'flex', flexDirection: 'column', flex: 1, position: 'relative', zIndex: 1 }}>
        <h3 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.75rem)', marginBottom: '0.5rem' }}>{p.title}</h3>
        <p style={{ color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', marginBottom: '1rem' }}>{p.subtitle}</p>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem', flex: 1 }}>{p.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
          {p.tech.map((t, i) => (<span key={i} style={{ padding: '0.25rem 0.75rem', borderRadius: '20px', border: '1px solid var(--border-color)', fontSize: '0.8rem', fontFamily: 'JetBrains Mono, monospace' }}>{t}</span>))}
        </div>
        <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
          {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}><ExternalLink size={18} /> Live</a>}
          {p.githubUrl && <a href={p.githubUrl} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}><GithubIcon size={18} /> GitHub</a>}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const { text: scrambleTitle, setIsHovering: setScrambleHover } = useScrambleText("Selected Works");
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.2 } } };

  return (
    <section id="projects" className="section" style={{ padding: '6rem 0', borderTop: '1px solid var(--border-color)' }}>
      <div className="container" style={{ width: '100%' }}>
        <motion.h2
          onMouseEnter={() => setScrambleHover(true)}
          onMouseLeave={() => setScrambleHover(false)}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', marginBottom: 'clamp(2rem, 5vw, 4rem)', cursor: 'none', display: 'inline-block' }}
        >
          {scrambleTitle}
        </motion.h2>

        <motion.div className="projects-grid" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: 'clamp(1.5rem, 5vw, 3rem)' }}>
          {projects.map((p, idx) => (
            <ProjectCard key={idx} p={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
