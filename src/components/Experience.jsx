import { motion } from 'framer-motion';

export default function Experience() {

  const skills = [
    { cat: "Languages", items: "JavaScript, C, C++, Python" },
    { cat: "Backend & APIs", items: "Node.js, Express.js, RESTful APIs, JWT, Zod, Socket.io" },
    { cat: "Frontend", items: "React.js, Vite, Tailwind CSS, HTML5, CSS" },
    { cat: "Databases", items: "PostgreSQL, MongoDB, Prisma ORM, Redis" },
    { cat: "Cloud & Tools", items: "Git, GitHub, Docker, Kubernetes, BullMQ, Cloudinary, Postman, Deployment, SEO" }
  ];

  const education = [
    { title: "B.Tech. - Computer Science & Engineering", org: "Institute of technology, Nirma University", date: "2023 - 2027", desc: "CGPA: 8.29 / 10" },
    { title: "Class 12 (GSEB)", org: "Mahatma Gandhi Educational Campus, Rajkot", date: "2023", desc: "Percentage: 76.77 / 100" },
    { title: "Class 10 (GSEB)", org: "Sarvodaya School, Rajkot", date: "2021", desc: "Percentage: 87.67 / 100" }
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
              <motion.div variants={item} key={idx} className="glass-card" style={{ marginBottom: '1.5rem', padding: '1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
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
            Education & Achievements
          </motion.h2>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {education.map((e, idx) => (
              <motion.div variants={item} key={idx} className="glass-card" style={{ padding: '1.5rem', borderLeft: '2px solid var(--border-color)', marginBottom: '1rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{e.title}</h3>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{e.date}</span>
                </div>
                <h4 style={{ fontSize: '1rem', color: '#ccc', marginBottom: '0.5rem', fontWeight: 400 }}>{e.org}</h4>
                <p style={{ color: 'var(--text-muted)' }}>{e.desc}</p>
              </motion.div>
            ))}

            <motion.div variants={item} className="glass-card" style={{ padding: '1.5rem', borderLeft: '2px solid var(--border-color)', marginBottom: '1rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Internships</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <h4 style={{ fontSize: '1.1rem', margin: 0 }}>Full Stack Developer</h4>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>05 May, 2026 - 15 Jun, 2026</span>
                  </div>
                  <h5 style={{ fontSize: '0.95rem', color: '#ccc', marginBottom: '0.5rem', fontWeight: 400 }}>Chemicrown Tradding Co.</h5>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                    Developed ChemiCrown CDMS, a comprehensive B2B eCommerce and ERP platform designed for industrial chemical distribution. The system consolidates public product catalogs, client registrations, inventory safety compliance, sales order processing (integrating online and UPI checkouts), and an internal administration dashboard for managing employee attendance and monthly payroll. Built with React (Vite) and Tailwind CSS for a responsive, modern frontend, and Node.js (Express) with PostgreSQL (Supabase) via Prisma ORM for a secure backend.
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.5rem' }}>
                    {["zod", "PostgreSQL", "Node.js", "Domain", "Github", "Express.js", "Socket.io", "Tailwind CSS", "REST", "Git", "CSS", "Deployment", "API", "React.js"].map((s, i) => (
                      <span key={i} style={{ padding: '0.2rem 0.6rem', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace', color: '#ccc', border: '1px solid rgba(255,255,255,0.08)' }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="glass-card" style={{ padding: '1.5rem', borderLeft: '2px solid var(--border-color)', marginBottom: '1rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Competitive Programming</h3>
              <ul style={{ color: 'var(--text-muted)', lineHeight: 1.8, listStyleType: 'none', paddingLeft: '0' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                  <span>LeetCode Rating: <strong style={{color: '#fff', fontFamily: 'JetBrains Mono, monospace'}}>1694</strong></span>
                  <a href="https://leetcode.com/u/VATSAL_30/" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'underline', fontSize: '0.9rem' }}>Profile</a>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Codeforces Rating: <strong style={{color: '#fff', fontFamily: 'JetBrains Mono, monospace'}}>1033</strong></span>
                  <a href="https://codeforces.com/profile/23bce359" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'underline', fontSize: '0.9rem' }}>Profile</a>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={item} className="glass-card" style={{ padding: '1.5rem', borderLeft: '2px solid var(--border-color)', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Hackathons</h3>
              <ul style={{ color: 'var(--text-muted)', lineHeight: 1.8, listStyleType: 'none', paddingLeft: '0' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                  <span>HackNUthon 6.0 Finalist <span style={{color: '#888', fontSize: '0.8rem'}}>(Mar 2025)</span></span>
                  <a href="https://drive.google.com/file/d/1_-NGdBcl3XkQZgsJQUO2JLmQMjMET3jW/view?usp=sharing" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'underline', fontSize: '0.9rem' }}>Certificate</a>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                  <span>MINeD Hackathon <span style={{color: '#888', fontSize: '0.8rem'}}>(Feb 2025)</span></span>
                  <a href="https://drive.google.com/file/d/1iB9IxRRCGuX430_ylhHo-xYVvMrz8D7C/view?usp=sharing" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'underline', fontSize: '0.9rem' }}>Certificate</a>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Build with India Hackathon <span style={{color: '#888', fontSize: '0.8rem'}}>(Apr 2025)</span></span>
                  <a href="https://drive.google.com/file/d/1pw9bsdE2D7OWw7abW1tDXFxhwLx2NhrP/view?usp=sharing" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'underline', fontSize: '0.9rem' }}>Certificate</a>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
