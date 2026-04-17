import { useState, useEffect } from 'react';

const CHARS = '!<>-_\\\\/[]{}—=+*^?#________';

export function useScrambleText(originalText) {
  const [text, setText] = useState(originalText);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let interval = null;
    let iteration = 0;

    if (isHovering) {
      interval = setInterval(() => {
        setText(originalText.split('').map((letter, index) => {
          if (index < iteration) {
            return originalText[index];
          }
          if (letter === ' ') return ' ';
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join(''));

        if (iteration >= originalText.length) {
          clearInterval(interval);
        }
        
        iteration += 1 / 3;
      }, 30);
    } else {
      setText(originalText);
    }

    return () => clearInterval(interval);
  }, [isHovering, originalText]);

  return { text, setIsHovering };
}
