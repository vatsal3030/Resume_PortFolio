import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import ParticleBackground from './components/ParticleBackground';
import Meteorites from './components/Meteorites';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';

import Contact from './components/Contact';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Sluggish and very premium smooth scroll settings
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <div className="noise-overlay" />
          <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
            <div className="glow-orb blue" style={{ top: '-10%', left: '-10%' }} />
            <div className="glow-orb purple" style={{ top: '40%', right: '-10%' }} />
            <div className="glow-orb blue" style={{ bottom: '-10%', left: '20%' }} />
          </div>
          <Navbar />
          <ParticleBackground />
          <Meteorites />
          <main style={{ position: 'relative', zIndex: 10 }}>
            <Hero />
            <About />
            <Experience />

            <Projects />
            <Contact />
          </main>
        </>
      )}
    </>
  );
}

export default App;
