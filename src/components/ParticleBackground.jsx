import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

    const options = {
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    interactivity: { 
      detectsOn: "window",
      events: { 
        onClick: { enable: true, mode: "attract" },
        onHover: { enable: false } 
      },
      modes: {
        attract: { distance: 200, duration: 0.4, factor: 5, speed: 1, easing: "ease-out-quad" }
      }
    },
    particles: {
      color: { value: "#ffffff" },
      move: { direction: "none", enable: true, random: true, speed: 0.3, straight: false },
      number: { density: { enable: true, area: 800 }, value: 120 },
      opacity: { value: { min: 0.1, max: 0.8 }, animation: { enable: true, speed: 1.5, minimumValue: 0.1 } },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  if (init) {
    return <Particles id="tsparticles" options={options} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }} />;
  }

  return null;
}
