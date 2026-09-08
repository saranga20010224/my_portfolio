import React, { useEffect, useRef } from 'react';

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;

    const initCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.4 + 0.1;
      }

      update(scrollDelta: number) {
        this.x += this.speedX;
        this.y += this.speedY - (scrollDelta * 0.1); // subtle parallax

        if (this.x > width + 50) this.x = -50;
        else if (this.x < -50) this.x = width + 50;
        
        if (this.y > height + 50) this.y = -50;
        else if (this.y < -50) this.y = height + 50;
      }

      draw() {
        if (!ctx) return;
        const isDark = document.documentElement.classList.contains('dark');
        ctx.fillStyle = isDark ? `rgba(96, 165, 250, ${this.opacity})` : `rgba(37, 99, 235, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor((width * height) / 15000), 80);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    let lastScrollY = window.scrollY;

    const drawLines = () => {
      if (!ctx) return;
      const isDark = document.documentElement.classList.contains('dark');
      const maxDistance = 150;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.15;
            ctx.strokeStyle = isDark ? `rgba(147, 197, 253, ${opacity})` : `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;

      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.update(scrollDelta);
        particle.draw();
      });

      drawLines();

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', initCanvas);
    
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mediaQuery.matches) {
      initCanvas();
      animate();
    } else {
      initCanvas();
      particles.forEach(p => p.draw()); // Draw static background for reduced motion
    }

    return () => {
      window.removeEventListener('resize', initCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-transparent transition-colors duration-300">
      {/* Moving gradients / orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 dark:bg-blue-600/5 blur-[100px] animate-blob" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/5 dark:bg-emerald-600/5 blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-sky-500/5 dark:bg-sky-600/5 blur-[90px] animate-blob animation-delay-4000" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Canvas for particles and nodes */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
    </div>
  );
};
