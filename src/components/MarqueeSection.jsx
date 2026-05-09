import { useRef } from 'react';
import { motion, useScroll, useTransform, useVelocity, useSpring } from 'framer-motion';

export default function MarqueeSection() {
  const targetRef = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });
  
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const skewVelocity = useTransform(smoothVelocity, [-1000, 1000], [10, -10]);

  const xTransform = useTransform(scrollYProgress, [0, 1], ["30%", "-100%"]);

  return (
    <section ref={targetRef} style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0', display: 'flex', alignItems: 'center' }}>
      <motion.div
        style={{
          whiteSpace: 'nowrap',
          x: xTransform,
          skewX: skewVelocity,
          fontSize: '8.5vw',
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 900,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)',
        }}
      >
        SCALABLE SYSTEMS — SOFTWARE ENGINEER — BACKEND ARCHITECTURE — FULL STACK DEVELOPMENT — SCALABLE SYSTEMS — SOFTWARE ENGINEER
      </motion.div>
    </section>
  );
}
