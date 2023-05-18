import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const logos = [
  {
    src: '/logo1.png',
    width: 100,
    height: 100,
  },
  {
    src: '/logo2.png',
    width: 80,
    height: 80,
  },
  {
    src: '/logo3.png',
    width: 120,
    height: 120,
  },
];

const FloatingLogos = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const opacity = useTransform(
    y,
    [0, window.innerHeight / 2, window.innerHeight],
    [1, 0.5, 0]
  );
  const useTx = useTransform(mouseX, [-window.innerWidth / 2, window.innerWidth / 2], [-200, 200])
  const useTy = useTransform(mouseY, [-window.innerHeight / 2, window.innerHeight / 2], [-200, 200])

  return (

    <motion.div
      onMouseMove={(e) => {
        setMouseX(e.clientX);
        setMouseY(e.clientY);
      }}
    >
      {logos.map((logo) => {
        return (
          <motion.img
            key={logo.src}
            src={logo.src}
            style={{
              width: logo.width,
              height: logo.height,
              position: 'absolute',
              x: useTx,
              y: useTy,
              opacity: opacity,
            }}
            animate={{
              x,
              y,
            }}
          />
        );
      })}
    </motion.div>
  );
};

export default FloatingLogos;
