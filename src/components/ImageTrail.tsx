import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ImageTrailProps {
  items: string[];
  variant?: string;
  className?: string;
}

interface TrailItem {
  id: number;
  x: number;
  y: number;
  image: string;
}

export const ImageTrail: React.FC<ImageTrailProps> = ({
  items,
  variant = '1',
  className = ''
}) => {
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const lastSpawnTime = useRef(0);
  const counter = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const now = Date.now();
    const distance = Math.hypot(x - lastMousePos.current.x, y - lastMousePos.current.y);

    if (distance > 50 || now - lastSpawnTime.current > 100) {
      lastMousePos.current = { x, y };
      lastSpawnTime.current = now;

      const randomImage = items[counter.current % items.length];
      counter.current += 1;

      setTrail(prev => [
        ...prev.slice(-8), // Keep max 8 active images
        {
          id: counter.current,
          x,
          y,
          image: randomImage
        }
      ]);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(prev => prev.slice(1));
    }, 450);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden cursor-crosshair select-none bg-[#111314] rounded-sm border border-gray-800 ${className}`}
      style={{ height: '500px', position: 'relative' }}
    >
      {/* Background overlay info */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="text-center space-y-2 p-8 bg-black/70 backdrop-blur-md border border-white/10 rounded-sm max-w-md mx-4 shadow-2xl">
          <span className="font-mono text-[10px] tracking-widest text-[#ff5722] uppercase font-bold block">
            KINETIC INTERACTIVE TRAIL // VARIANT {variant}
          </span>
          <h3 className="font-display font-black text-xl text-white tracking-tight uppercase">
            SWEEP CURSOR TO ACTIVATE TRAIL
          </h3>
          <p className="text-xs text-gray-400 font-sans">
            Witness the StrideX elite footwear compound matrix moving dynamically across your viewport.
          </p>
        </div>
      </div>

      {/* Render Trail Items */}
      <AnimatePresence>
        {trail.map((item, index) => {
          const rotation = (item.id * 19) % 36 - 18;
          const scale = 0.85 + ((index % 3) * 0.08);

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.4, rotate: rotation - 15 }}
              animate={{ opacity: 1, scale, rotate: rotation }}
              exit={{ opacity: 0, scale: 0.2, transition: { duration: 0.3 } }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="absolute pointer-events-none z-10 w-36 h-36 md:w-44 md:h-44 -translate-x-1/2 -translate-y-1/2 rounded-md overflow-hidden shadow-2xl border-2 border-white/20 bg-black/40"
              style={{ left: item.x, top: item.y }}
            >
              <img
                src={item.image}
                alt="Trail Spec"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
