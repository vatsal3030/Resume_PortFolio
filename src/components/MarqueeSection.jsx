import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function MarqueeSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });
  
  const xTransform = useTransform(scrollYProgress, [0, 1], ["30%", "-100%"]);

  return (
    <section ref={targetRef} style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0', display: 'flex', alignItems: 'center' }}>
      <motion.div
        style={{
          whiteSpace: 'nowrap',
          x: xTransform,
          fontSize: '8.5vw',
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 900,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)',
        }}
      >
        SCALABLE SYSTEMS — SOFTWARE ENGINEER — BACKEND ARCHITECTURE
      </motion.div>
    </section>
  );
}
