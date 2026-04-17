import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Code, Briefcase, Heart, ShieldCheck } from 'lucide-react';

export default function Contact() {
  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(0);

  useEffect(() => {
    const storedLikes = localStorage.getItem('vatsal_portfolio_likes');
    if (storedLikes) setLikes(parseInt(storedLikes, 10));
    else setLikes(142);

    // Simulated View Tracking starting at 5k baseline
    const storedViews = localStorage.getItem('vatsal_portfolio_views');
    if (storedViews) {
      const newViews = parseInt(storedViews, 10) + 1;
      setViews(newViews);
      localStorage.setItem('vatsal_portfolio_views', newViews.toString());
    } else {
      const baseViews = 5248 + Math.floor(Math.random() * 10);
      setViews(baseViews);
      localStorage.setItem('vatsal_portfolio_views', baseViews.toString());
    }
  }, []);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem('vatsal_portfolio_likes', newLikes.toString());
  };

  return (
    <section id="contact" className="section" style={{ minHeight: '80vh', padding: '6rem 0', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
      <div className="container" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1, marginBottom: '1rem' }}>
          LET'S BUILD
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '4rem' }}>
          <a href="mailto:vatsalvadgama05@gmail.com" className="glass-card" style={{ cursor: 'none', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 2rem', transition: 'background 0.3s' }} onMouseEnter={e => e.target.style.background='rgba(255,255,255,0.1)'} onMouseLeave={e => e.target.style.background='rgba(255,255,255,0.03)'}>
            <Mail size={24} /> <span style={{ fontFamily: 'JetBrains Mono, monospace' }}>Email Me</span>
          </a>
          <a href="https://github.com/vatsalvadgama05" target="_blank" rel="noreferrer" className="glass-card" style={{ cursor: 'none', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 2rem', transition: 'background 0.3s' }} onMouseEnter={e => e.target.style.background='rgba(255,255,255,0.1)'} onMouseLeave={e => e.target.style.background='rgba(255,255,255,0.03)'}>
            <Code size={24} /> <span style={{ fontFamily: 'JetBrains Mono, monospace' }}>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/vatsalvadgama05" target="_blank" rel="noreferrer" className="glass-card" style={{ cursor: 'none', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 2rem', transition: 'background 0.3s' }} onMouseEnter={e => e.target.style.background='rgba(255,255,255,0.1)'} onMouseLeave={e => e.target.style.background='rgba(255,255,255,0.03)'}>
            <Briefcase size={24} /> <span style={{ fontFamily: 'JetBrains Mono, monospace' }}>LinkedIn</span>
          </a>
        </motion.div>

        {/* Public View Counter & Likes */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ borderTop: '1px solid var(--border-color)', paddingTop: '3rem', width: '100%', maxWidth: '600px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Total Views</span>
            <div style={{ padding: '0.2rem 1rem', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)' }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1.2rem', color: '#fff', pointerEvents: 'none' }}>
                  {views > 0 ? views.toLocaleString() : 'Loading...'}
                </span>
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleLike} style={{ cursor: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <Heart size={20} fill={likes > 142 ? "white" : "none"} color={likes > 142 ? "white" : "var(--text-muted)" } style={{ transition: 'all 0.3s' }} />
            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', pointerEvents: 'none' }}>Appreciate</span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1.2rem', pointerEvents: 'none' }}>{likes}</span>
          </motion.div>
        </motion.div>

        <footer style={{ marginTop: '4rem', color: 'var(--border-color)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Vatsal Vadgama. Minimalist Framework.
        </footer>
      </div>
    </section>
  );
}
