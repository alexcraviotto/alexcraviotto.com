"use client";

import React, { useEffect, useRef, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  timestamp: number;
}

export default function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<TrailPoint[]>([]);
  const animationRef = useRef<number>();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      });

      // Keep only recent points (last 500ms)
      const now = Date.now();
      trailRef.current = trailRef.current.filter(point => now - point.timestamp < 500);
      
      if (!isActive) setIsActive(true);
    };

    const handleMouseLeave = () => {
      setIsActive(false);
      setTimeout(() => {
        trailRef.current = [];
      }, 500);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (trailRef.current.length > 1) {
        const now = Date.now();
        
        // Draw the trail
        for (let i = 1; i < trailRef.current.length; i++) {
          const current = trailRef.current[i];
          const previous = trailRef.current[i - 1];
          const age = now - current.timestamp;
          const maxAge = 500;
          const opacity = Math.max(0, 1 - age / maxAge);
          const size = 2 * opacity;

          if (opacity > 0) {
            // Create gradient for the trail segment
            const gradient = ctx.createLinearGradient(
              previous.x, previous.y,
              current.x, current.y
            );
            
            gradient.addColorStop(0, `rgba(139, 92, 246, ${opacity * 0.6})`); // Purple
            gradient.addColorStop(0.5, `rgba(59, 130, 246, ${opacity * 0.8})`); // Blue
            gradient.addColorStop(1, `rgba(236, 72, 153, ${opacity * 0.6})`); // Pink

            ctx.strokeStyle = gradient;
            ctx.lineWidth = size;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            ctx.beginPath();
            ctx.moveTo(previous.x, previous.y);
            ctx.lineTo(current.x, current.y);
            ctx.stroke();

            // Add glow effect
            ctx.shadowColor = `rgba(139, 92, 246, ${opacity * 0.5})`;
            ctx.shadowBlur = 10;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }

        // Draw particles at the current mouse position
        if (trailRef.current.length > 0) {
          const latest = trailRef.current[trailRef.current.length - 1];
          const age = now - latest.timestamp;
          
          if (age < 100) { // Only show particles for very recent positions
            // Draw main glow
            const glowGradient = ctx.createRadialGradient(
              latest.x, latest.y, 0,
              latest.x, latest.y, 15
            );
            glowGradient.addColorStop(0, 'rgba(139, 92, 246, 0.8)');
            glowGradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.4)');
            glowGradient.addColorStop(1, 'rgba(236, 72, 153, 0.1)');

            ctx.fillStyle = glowGradient;
            ctx.beginPath();
            ctx.arc(latest.x, latest.y, 15, 0, Math.PI * 2);
            ctx.fill();

            // Draw center dot
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.beginPath();
            ctx.arc(latest.x, latest.y, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}