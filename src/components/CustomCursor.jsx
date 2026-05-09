import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoverDevice, setIsHoverDevice] = useState(true);
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const checkHover = () => {
      setIsHoverDevice(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
    };
    
    checkHover();
    window.addEventListener('resize', checkHover);

    let updateMousePosition;
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName?.toLowerCase() === 'a' ||
        target.tagName?.toLowerCase() === 'button' ||
        target.closest?.('a') ||
        target.closest?.('button') ||
        target.closest?.('.glass-card') ||
        target.closest?.('.hero-btn') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHoveringLink(true);
      } else {
        setIsHoveringLink(false);
      }
    };

    if (isHoverDevice) {
      updateMousePosition = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener('mousemove', updateMousePosition);
      window.addEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'none';
    }

    return () => {
      window.removeEventListener('resize', checkHover);
      if (updateMousePosition) window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, [isHoverDevice]);

  if (!isHoverDevice) return null;

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '12px',
          height: '12px',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
          backgroundColor: '#ffffff',
          borderRadius: '50%'
        }}
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHoveringLink ? 5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 400,
          mass: 0.5,
        }}
      />
    </>
  );
}
