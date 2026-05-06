import { motion } from 'framer-motion';

export default function Experience() {

  const skills = [
    { cat: "Languages", items: "JavaScript, C, C++, Python" },
    { cat: "Backend & APIs", items: "Node.js, Express.js, RESTful APIs, JWT Authentication, Prisma ORM" },
    { cat: "Frontend", items: "React.js, Vite, Tailwind CSS, HTML5, CSS3" },
    { cat: "Databases", items: "PostgreSQL (Neon), MongoDB" },
    { cat: "Cloud & Tools", items: "Render, Vercel, Cloudinary, Git, GitHub, VS Code, Postman" }
  ];

  const education = [
    { title: "B.Tech in Computer Science", org: "Nirma University", date: "2023 - 2027", desc: "CGPA: 8.25" },
    { title: "Class 12 (Science)", org: "High School", date: "2023", desc: "96.10% — JEE Main: 97.84 percentile" }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const item = { hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } };

  return (
    <section id="experience" className="section" style={{ position: 'relative', overflow: 'hidden', minHeight: '80vh', borderTop: '1px solid var(--border-color)', padding: 'clamp(4rem, 8vw, 6rem) 0' }}>

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(2rem, 5vw, 4rem)' }}>

        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', marginBottom: '2rem' }}
          >
            Technical Arsenal
          </motion.h2>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {skills.map((s, idx) => (
              <motion.div variants={item} key={idx} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-color)' }}>
                <h4 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1rem', marginBottom: '0.5rem', color: '#ccc' }}>{s.cat}</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{s.items}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', marginBottom: '2rem' }}
          >
            Education & Hackathons
          </motion.h2>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {education.map((e, idx) => (
              <motion.div variants={item} key={idx} style={{ padding: '1.5rem', borderLeft: '2px solid var(--border-color)', marginBottom: '1rem', background: 'rgba(255,255,255,0.02)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{e.title}</h3>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{e.date}</span>
                </div>
                <h4 style={{ fontSize: '1rem', color: '#ccc', marginBottom: '0.5rem', fontWeight: 400 }}>{e.org}</h4>
                <p style={{ color: 'var(--text-muted)' }}>{e.desc}</p>
              </motion.div>
            ))}

            <motion.div variants={item} style={{ padding: '1.5rem', borderLeft: '2px solid var(--border-color)', background: 'rgba(255,255,255,0.02)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Hackathons</h3>
              <ul style={{ color: 'var(--text-muted)', lineHeight: 1.8, listStyleType: 'disc', paddingLeft: '1.2rem' }}>
                <li>HackNUthon 6.0 Finalist (Mar 2025)</li>
                <li>MINeD Hackathon (Feb 2025)</li>
                <li>Build with India Hackathon (Apr 2025)</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
