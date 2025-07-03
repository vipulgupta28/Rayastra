import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
  tail: { x: number; y: number }[];
  tailLength: number;
}

const SpaceParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    const particles: Particle[] = [];
    const shootingStars: ShootingStar[] = [];
    
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      
      // Clear particles and re-initialize when canvas is resized
      particles.length = 0;
      shootingStars.length = 0;
      initParticles();
      initShootingStars();
    };
    
    const initParticles = () => {
      const particleCount = Math.floor(canvas.width * canvas.height / 12000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.1,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    };
    
    const initShootingStars = () => {
      // Create a pool of shooting stars that will be activated randomly
      const starCount = 10;
      
      for (let i = 0; i < starCount; i++) {
        shootingStars.push({
          x: 0,
          y: 0,
          length: Math.random() * 100 + 70, // Longer trails for cartoonish effect
          speed: Math.random() * 3 + 2, // Slower speed
          angle: Math.PI / 4, // 45 degrees
          opacity: 0,
          active: false,
          tail: [],
          tailLength: Math.floor(Math.random() * 12) + 20
        });
      }
    };
    
    const activateShootingStar = () => {
      // Find an inactive shooting star
      const inactiveStar = shootingStars.find(star => !star.active);
      if (!inactiveStar) return;
      
      // Start position from top-left quadrant
      inactiveStar.x = Math.random() * canvas.width * 0.5;
      inactiveStar.y = Math.random() * canvas.height * 0.5;
      inactiveStar.angle = Math.PI / 4 + (Math.random() * Math.PI / 8); // ~45 degrees with some variation
      inactiveStar.opacity = 1;
      inactiveStar.active = true;
      inactiveStar.tail = [];
    };
    
    // Randomly activate shooting stars
    const checkShootingStarSpawn = () => {
      if (Math.random() < 0.005) { // 0.5% chance per frame to spawn a shooting star (less frequent)
        activateShootingStar();
      }
    };
    
    const updateShootingStars = () => {
      shootingStars.forEach(star => {
        if (!star.active) return;
        
        // Update position
        const dx = Math.cos(star.angle) * star.speed;
        const dy = Math.sin(star.angle) * star.speed;
        
        star.x += dx;
        star.y += dy;
        
        // Add current position to tail
        star.tail.unshift({ x: star.x, y: star.y });
        
        // Limit tail length
        if (star.tail.length > star.tailLength) {
          star.tail.pop();
        }
        
        // Deactivate if out of bounds
        if (star.x > canvas.width || star.y > canvas.height) {
          star.active = false;
        }
      });
    };
    
    const drawShootingStars = () => {
      shootingStars.forEach(star => {
        if (!star.active || star.tail.length < 2) return;
        
        // Draw shooting star tail as a gradient line
        for (let i = 0; i < star.tail.length - 1; i++) {
          const start = star.tail[i];
          const end = star.tail[i + 1];
          
          // Calculate gradient opacity based on position in tail
          const gradientOpacity = 1 - (i / star.tail.length);
          
          // Draw line segment with varying thickness for cartoonish effect
          const lineWidth = 3 * (1 - (i / star.tail.length));
          ctx.beginPath();
          ctx.moveTo(start.x, start.y);
          ctx.lineTo(end.x, end.y);
          ctx.strokeStyle = `rgba(255, 255, 0, ${gradientOpacity * star.opacity})`;
          ctx.lineWidth = lineWidth;
          ctx.stroke();
        }
        
        // Draw the shooting star head with a cartoonish larger head
        ctx.beginPath();
        ctx.arc(star.x, star.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 128, ' + star.opacity + ')';
        ctx.fill();
        
        // Add a glow effect for cartoon-like appearance
        ctx.beginPath();
        ctx.arc(star.x, star.y, 8, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(star.x, star.y, 1, star.x, star.y, 8);
        gradient.addColorStop(0, 'rgba(255, 255, 0, 0.7)');
        gradient.addColorStop(1, 'rgba(255, 255, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      });
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Regular space particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Reset particles if they go offscreen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
      });
      
      // Handle shooting stars
      checkShootingStarSpawn();
      updateShootingStars();
      drawShootingStars();
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
    />
  );
};

export default SpaceParticles;