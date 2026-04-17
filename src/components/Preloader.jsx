import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [lines, setLines] = useState([]);
  const [isDone, setIsDone] = useState(false);
  
  const bootSequence = [
    "> ./vatsal_portfolio.exe --init",
    "[System] Mounting Space.jsx...",
    "[System] Suppressing default pointers...",
    "> Loading credentials...",
    "User: Vatsal Vadgama",
    "Role: Full Stack Engineer",
    "> npm run launch",
    "Compiling UI components... [DONE]",
    "INITIALIZATION COMPLETE."
  ];

  useEffect(() => {
    let currentLine = 0;
    
    const interval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setLines(prev => [...prev, bootSequence[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => setIsDone(true), 600);
      }
    }, 280);

    return () => clearInterval(interval);
  }, [bootSequence.length]);

  useEffect(() => {
    if (isDone) {
      setTimeout(() => onComplete(), 500);
    }
  }, [isDone, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: '-100vh', transition: { duration: 0.8, ease: "easeInOut" } }}
      style={{
        position: 'fixed',
        top: 0, left: 0, width: '100%', height: '100vh',
        backgroundColor: '#050505',
        zIndex: 99999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '1rem',
      }}
    >
      <div style={{
        width: '100%', maxWidth: '700px',
        backgroundColor: '#0a0a0a',
        borderRadius: '12px',
        border: '1px solid #333',
        boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
        overflow: 'hidden'
      }}>
        {/* MacOS Terminal Header */}
        <div style={{
          display: 'flex', alignItems: 'center', backgroundColor: '#1a1a1a', padding: '12px 20px', borderBottom: '1px solid #333'
        }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
          </div>
          <div style={{ flex: 1, textAlign: 'center', color: '#888', fontSize: '0.85rem', fontFamily: 'Inter, sans-serif' }}>
            vatsal@portfolio ~ npm run dev
          </div>
        </div>

        {/* Terminal Body */}
        <div style={{
          padding: '24px',
          minHeight: '350px',
          color: '#ffffff',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.95rem'
        }}>
          {lines.filter(Boolean).map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.1 }}
              style={{ 
                marginBottom: '0.8rem',
                color: line?.includes("[System]") ? '#888' : '#e5e5e5',
                fontWeight: line?.includes("COMPLETE") ? 'bold' : 'normal'
              }}
            >
              {line}
            </motion.div>
          ))}
          {!isDone && (
            <motion.div 
              animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 0.8 }}
              style={{ width: '10px', height: '18px', backgroundColor: '#fff', marginTop: '4px' }}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
