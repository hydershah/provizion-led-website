import { useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiStar } from 'react-icons/hi';

/* ── Fade up on scroll ── */
export function FadeUp({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger container ── */
export function StaggerWrap({ children, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Stagger child ── */
export function StaggerChild({ children, className = '' }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Animated accent line ── */
export function AccentLine() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <motion.div
      ref={ref}
      className="vc-accent-line"
      initial={{ scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    />
  );
}

/* ── Star rating with sequential fill ── */
export function AnimatedStars({ count = 5 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <div ref={ref} className="vc-star-row">
      {[...Array(count)].map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0.2, scale: 0.6 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: i * 0.15, duration: 0.3 }}
        >
          <HiStar />
        </motion.span>
      ))}
    </div>
  );
}

/* ── LED Dot Matrix Canvas ── */
export function LEDGrid() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    // Size canvas to parent
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const gap = 28;
    const dotRadius = 1.8;
    const cols = Math.ceil(rect.width / gap);
    const rows = Math.ceil(rect.height / gap);
    const time = performance.now() * 0.001;

    ctx.clearRect(0, 0, rect.width, rect.height);

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * gap + gap / 2;
        const y = r * gap + gap / 2;

        // Diagonal traveling sine wave
        const wave = Math.sin((c + r) * 0.4 - time * 1.2) * 0.5 + 0.5;
        // Secondary slower pulse
        const pulse = Math.sin(c * 0.15 + r * 0.1 + time * 0.6) * 0.3 + 0.7;
        const alpha = 0.06 + wave * pulse * 0.22;

        ctx.beginPath();
        ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 180, 255, ${alpha})`;
        ctx.fill();
      }
    }

    animRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    animRef.current = requestAnimationFrame(draw);
    const onResize = () => cancelAnimationFrame(animRef.current);
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, [draw]);

  return <canvas ref={canvasRef} className="vc-led-grid" aria-hidden="true" />;
}

/* ── Neon text flicker on scroll ── */
export function NeonText({ children, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <motion.span
      ref={ref}
      className={`${className} ${inView ? 'vc-neon-glow' : ''}`}
      initial={{ opacity: 0 }}
      animate={
        inView
          ? { opacity: [0, 1, 0.4, 1, 0.3, 1, 0.6, 1] }
          : { opacity: 0 }
      }
      transition={
        inView
          ? { duration: 0.8, ease: 'linear', times: [0, 0.1, 0.15, 0.25, 0.3, 0.45, 0.5, 0.7] }
          : {}
      }
    >
      {children}
    </motion.span>
  );
}

/* ── Scanning light beam ── */
export function ScanLine() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0 });
  return (
    <div
      ref={ref}
      className={`vc-scan-line ${inView ? 'vc-scan-line--active' : ''}`}
      aria-hidden="true"
    />
  );
}

/* ── Floating particles canvas (continuous) ── */
export function FloatingParticles({ count = 30, color = '0, 180, 255' }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const particlesRef = useRef(null);

  const initParticles = useCallback((w, h) => {
    return Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2.5 + 0.8,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.3 - 0.15,
      alpha: Math.random() * 0.4 + 0.1,
      pulse: Math.random() * Math.PI * 2,
    }));
  }, [count]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    if (!particlesRef.current) {
      particlesRef.current = initParticles(rect.width, rect.height);
    }

    const time = performance.now() * 0.001;
    const particles = particlesRef.current;

    ctx.clearRect(0, 0, rect.width, rect.height);

    for (const p of particles) {
      p.x += p.dx;
      p.y += p.dy;

      if (p.x < -10) p.x = rect.width + 10;
      if (p.x > rect.width + 10) p.x = -10;
      if (p.y < -10) p.y = rect.height + 10;
      if (p.y > rect.height + 10) p.y = -10;

      const glow = Math.sin(time * 1.5 + p.pulse) * 0.3 + 0.7;
      const a = p.alpha * glow;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color}, ${a})`;
      ctx.fill();

      // Soft glow ring
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color}, ${a * 0.15})`;
      ctx.fill();
    }

    // Draw connections between close particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${color}, ${0.08 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    animRef.current = requestAnimationFrame(draw);
  }, [color, initParticles]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(draw);
    const onResize = () => {
      particlesRef.current = null;
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, [draw]);

  return <canvas ref={canvasRef} className="vc-floating-particles" aria-hidden="true" />;
}

/* ── Electric border wrapper (continuous animated gradient border) ── */
export function ElectricBorder({ children, className = '' }) {
  return (
    <div className={`vc-electric-border ${className}`}>
      {children}
    </div>
  );
}

/* ── Pulsing glow dot (continuous) ── */
export function GlowDot({ size = 8, delay = 0 }) {
  return (
    <span
      className="vc-glow-dot"
      style={{ width: size, height: size, animationDelay: `${delay}s` }}
      aria-hidden="true"
    />
  );
}

/* ── Neon sign border (continuous flicker around a container) ── */
export function NeonBorder({ children, className = '' }) {
  return (
    <div className={`vc-neon-border ${className}`}>
      {children}
    </div>
  );
}
