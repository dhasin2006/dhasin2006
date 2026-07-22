import React, { useEffect, useRef } from 'react';

export const SilkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    let step = 0;
    const render = () => {
      step += 0.015;
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, 'rgba(255, 87, 34, 0.03)');
      gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.02)');
      gradient.addColorStop(1, 'rgba(245, 158, 11, 0.03)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        for (let x = 0; x < width; x += 30) {
          const y =
            height / 2 +
            Math.sin(x * 0.003 + step + i * 0.5) * 150 +
            Math.cos(x * 0.002 - step * 0.8) * 80 * (i + 1) * 0.3;
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = i % 2 === 0 ? 'rgba(255, 87, 34, 0.08)' : 'rgba(245, 158, 11, 0.06)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};
