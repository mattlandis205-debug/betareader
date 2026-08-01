/**
 * canvas-background.js
 * Immersive particle & rain physics canvas engine for BetaReader.
 * Tailored specifically for the Post-Apocalyptic "Overgrown Grid" aesthetic.
 * Focuses on slate/gray tones, rain, and gentle shadow ripples.
 */

export class CanvasBackground {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    
    this.ctx = this.canvas.getContext('2d');
    this.intensity = 0.6; // Opacity modifier 0-1
    this.scrollSpeed = 0;
    this.lastScrollTop = 0;
    this.scrollMorphEnabled = true;
    this.particles = [];
    this.ripples = [];
    this.animationFrameId = null;

    // Track width/height
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());

    // Initialize particles (rain and slate-blue/silver spores)
    this.initParticles();
    
    // Start loop
    this.animate();
  }

  resizeCanvas() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  setTheme(theme) {
    // Left for interface compatibility
  }

  setIntensity(val) {
    this.intensity = val / 100;
    this.canvas.style.opacity = this.intensity;
  }

  setScrollMorph(enabled) {
    this.scrollMorphEnabled = enabled;
  }

  updateScroll(scrollTop) {
    if (!this.scrollMorphEnabled) {
      this.scrollSpeed = 0;
      return;
    }
    
    const delta = Math.abs(scrollTop - this.lastScrollTop);
    this.scrollSpeed = Math.min(delta * 0.15, 20); // Cap additional velocity
    this.lastScrollTop = scrollTop;
  }

  initParticles() {
    this.particles = [];
    const count = 95; // Rain density

    for (let i = 0; i < count; i++) {
      this.particles.push(this.createParticle(true));
    }
  }

  createParticle(randomY = false) {
    const isRain = Math.random() > 0.3; // 70% rain, 30% floating dust/spores
    
    return {
      type: isRain ? 'rain' : 'spore',
      x: Math.random() * this.width,
      y: randomY ? Math.random() * this.height : -20,
      size: isRain ? Math.random() * 18 + 12 : Math.random() * 3 + 1,
      vx: isRain ? -1.6 : (Math.random() - 0.5) * 0.3, // Rain blown slightly left
      vy: isRain ? Math.random() * 5 + 6 : Math.random() * 0.35 + 0.25, // Rain falls fast, spores drift slow
      alpha: isRain ? Math.random() * 0.12 + 0.03 : Math.random() * 0.25 + 0.08,
      color: isRain ? 'rgba(156, 176, 190, ' : 'rgba(175, 185, 190, ' // Slate gray/blue rain & silver-gray spores
    };
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    
    // Decay extra scroll velocity
    if (this.scrollSpeed > 0) {
      this.scrollSpeed *= 0.94;
      if (this.scrollSpeed < 0.05) this.scrollSpeed = 0;
    }

    // 1. Render active shadow/light ripples
    for (let i = this.ripples.length - 1; i >= 0; i--) {
      let r = this.ripples[i];
      r.radius += r.speed;
      r.alpha -= r.speed / r.maxRadius; // Fades out as it expands
      
      if (r.alpha <= 0) {
        this.ripples.splice(i, 1);
        continue;
      }
      
      // Draw a gentle shadow filling (dark ripple displacing canvas)
      this.ctx.beginPath();
      this.ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(0, 0, 0, ${r.alpha * 0.08})`;
      this.ctx.fill();

      // Soft light silver ring boundary
      this.ctx.beginPath();
      this.ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
      this.ctx.strokeStyle = `rgba(156, 176, 190, ${r.alpha * 0.12})`;
      this.ctx.lineWidth = 1.5;
      this.ctx.stroke();
    }

    // 2. Render particles
    for (let i = 0; i < this.particles.length; i++) {
      let p = this.particles[i];
      
      let currentVY = p.vy;
      let currentVX = p.vx;

      // Apply scroll morphing multiplier
      if (this.scrollSpeed > 0) {
        if (p.type === 'rain') {
          currentVY += this.scrollSpeed * 0.45;
          currentVX -= this.scrollSpeed * 0.25;
        } else {
          currentVX += Math.sin(p.y * 0.01) * this.scrollSpeed * 0.12;
          currentVY += this.scrollSpeed * 0.05;
        }
      }

      p.y += currentVY;
      p.x += currentVX;

      // Draw particle types
      if (p.type === 'rain') {
        this.ctx.beginPath();
        this.ctx.moveTo(p.x, p.y);
        this.ctx.lineTo(p.x + currentVX * 1.5, p.y + currentVY * 0.6);
        this.ctx.strokeStyle = p.color + p.alpha + ')';
        this.ctx.lineWidth = 1.0;
        this.ctx.stroke();
      } else {
        // Silver-gray spores
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fillStyle = p.color + p.alpha + ')';
        this.ctx.shadowBlur = 6;
        this.ctx.shadowColor = 'rgba(156, 176, 190, 0.3)';
        this.ctx.fill();
        this.ctx.shadowBlur = 0; // reset
      }

      // Reset when out of boundary
      if (p.y > this.height + 30 || p.x > this.width + 30 || p.x < -30) {
        this.particles[i] = this.createParticle(false);
      }
    }

    // Occasional random ripples in background
    if (Math.random() > 0.989 && this.ripples.length < 4) {
      this.triggerRipple();
    }

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  triggerRipple() {
    this.ripples.push({
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      radius: 0,
      maxRadius: Math.random() * 120 + 80,
      alpha: 0.8,
      speed: Math.random() * 1.5 + 1.2
    });
  }

  // Fallback signature for main.js triggers
  triggerElectricalSpark() {
    this.triggerRipple();
  }

  destroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}
