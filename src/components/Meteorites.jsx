import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Meteorites() {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const launchMeteor = () => {
      const id = Date.now();
      const topOffset = Math.random() * 20; 
      const leftOffset = Math.random() * 40; 

      setMeteors(prev => [...prev, { id, topOffset, leftOffset }]);

      setTimeout(() => {
        setMeteors(prev => prev.filter(m => m.id !== id));
      }, 2500); 

      setTimeout(launchMeteor, 3000 + Math.random() * 6000);
    };

    const timer = setTimeout(launchMeteor, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}>
      <AnimatePresence>
        {meteors.map(m => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, x: '-10vh', y: '-10vh', rotate: 45 }}
            animate={{ opacity: [0, 1, 1, 0], x: '120vh', y: '120vh', rotate: 45 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              position: 'absolute',
              top: `${m.topOffset}%`,
              left: `${m.leftOffset}%`,
              width: '120px', // shortened realistic tail
              height: '1px',
              background: 'linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
              transformOrigin: 'right center',
              filter: 'drop-shadow(0 0 4px #fff)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            {/* The glowing head of the meteorite */}
            <div style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.9), 0 0 20px 4px rgba(200, 255, 255, 0.4)',
              transform: 'translateX(2px)' // align slightly to extending tip
            }}></div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
