import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

interface FlowerShowerProps {
  continuous?: boolean;
}

export const triggerFlowerShower = () => {
  // Rich Indian wedding floral color palette:
  // Marigold yellow, Crimson rose, Blush pink, Royal gold
  const colors = ['#dc2626', '#f43f5e', '#fbbf24', '#f59e0b', '#fce7f3', '#d4af37'];

  // Left cannon
  confetti({
    particleCount: 45,
    angle: 60,
    spread: 70,
    origin: { x: 0.1, y: 0.4 },
    colors,
    shapes: ['circle'],
    scalar: 1.2,
    gravity: 0.8,
    ticks: 250,
  });

  // Right cannon
  confetti({
    particleCount: 45,
    angle: 120,
    spread: 70,
    origin: { x: 0.9, y: 0.4 },
    colors,
    shapes: ['circle'],
    scalar: 1.2,
    gravity: 0.8,
    ticks: 250,
  });

  // Center blossom shower
  confetti({
    particleCount: 50,
    angle: 90,
    spread: 100,
    origin: { x: 0.5, y: 0.2 },
    colors,
    shapes: ['circle'],
    scalar: 1.3,
    gravity: 0.6,
    ticks: 300,
  });
};

export const FlowerShower: React.FC<FlowerShowerProps> = ({ continuous = false }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!continuous) return;
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

    // Rose & marigold petal particles
    interface Petal {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
      color: string;
      opacity: number;
    }

    const petalColors = [
      'rgba(225, 29, 72, 0.4)',  // Rose crimson
      'rgba(244, 63, 94, 0.35)', // Soft rose
      'rgba(245, 158, 11, 0.4)', // Marigold saffron
      'rgba(251, 191, 36, 0.3)', // Saffron yellow
      'rgba(212, 175, 55, 0.35)',// Golden petal
    ];

    const petalCount = 28;
    const petals: Petal[] = Array.from({ length: petalCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height - height,
      size: Math.random() * 10 + 8,
      speedX: Math.sin(Math.random() * 10) * 0.8 + 0.3,
      speedY: Math.random() * 1.2 + 0.6,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.5,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      opacity: Math.random() * 0.4 + 0.3,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(p.y * 0.015) * 0.6;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;

        // Draw organic petal curve
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-p.size / 2, -p.size / 2, -p.size / 2, p.size / 2, 0, p.size);
        ctx.bezierCurveTo(p.size / 2, p.size / 2, p.size / 2, -p.size / 2, 0, 0);
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [continuous]);

  if (!continuous) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 opacity-70"
      aria-hidden="true"
    />
  );
};
