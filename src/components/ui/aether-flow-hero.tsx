"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap } from 'lucide-react';

const AetherFlowHero = ({
  badge = "Est. School",
  title = "School Name Here",
  description = "Nurturing every student toward academic excellence, character, and confidence — one classroom at a time.",
  ctaText = "Apply Now",
}: { badge?: string; title?: string; description?: string; ctaText?: string }) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        let animationFrameId: number;
        let particles: Particle[] = [];
        const mouse = { x: null as number | null, y: null as number | null, radius: 200 };

        class Particle {
            x: number; y: number; directionX: number; directionY: number; size: number; color: string;
            constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
                this.x = x; this.y = y; this.directionX = directionX; this.directionY = directionY; this.size = size; this.color = color;
            }
            draw() {
                ctx!.beginPath();
                ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx!.fillStyle = this.color;
                ctx!.fill();
            }
            update() {
                if (this.x > canvas!.width || this.x < 0) this.directionX = -this.directionX;
                if (this.y > canvas!.height || this.y < 0) this.directionY = -this.directionY;
                if (mouse.x !== null && mouse.y !== null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius + this.size) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouse.radius - distance) / mouse.radius;
                        this.x -= forceDirectionX * force * 5;
                        this.y -= forceDirectionY * force * 5;
                    }
                }
                this.x += this.directionX; this.y += this.directionY;
                this.draw();
            }
        }

        function init() {
            particles = [];
            let numberOfParticles = (canvas!.height * canvas!.width) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2) + 1;
                let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * 0.4) - 0.2;
                let directionY = (Math.random() * 0.4) - 0.2;
                let color = 'rgba(212, 175, 55, 0.75)';
                particles.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }

        const resizeCanvas = () => {
            canvas!.width = window.innerWidth;
            canvas!.height = window.innerHeight;
            init();
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const connect = () => {
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
                        + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
                    if (distance < (canvas!.width / 7) * (canvas!.height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        ctx!.strokeStyle = `rgba(212, 175, 55, ${opacityValue})`;
                        ctx!.lineWidth = 1;
                        ctx!.beginPath();
                        ctx!.moveTo(particles[a].x, particles[a].y);
                        ctx!.lineTo(particles[b].x, particles[b].y);
                        ctx!.stroke();
                    }
                }
            }
        };

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            ctx!.fillStyle = '#0B0B0F';
            ctx!.fillRect(0, 0, innerWidth, innerHeight);
            for (let i = 0; i < particles.length; i++) particles[i].update();
            connect();
        };

        const handleMouseMove = (event: MouseEvent) => { mouse.x = event.clientX; mouse.y = event.clientY; };
        const handleMouseOut = () => { mouse.x = null; mouse.y = null; };
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2 + 0.5, duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] } }),
    };

    return (
        <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>
            <div className="relative z-10 text-center p-6">
                <motion.div custom={0} variants={fadeUpVariants as any} initial="hidden" animate="visible"
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6 backdrop-blur-sm">
                    <GraduationCap className="h-4 w-4 text-amber-400" />
                    <span className="text-sm font-medium text-gray-200">{badge}</span>
                </motion.div>
                <motion.h1 custom={1} variants={fadeUpVariants as any} initial="hidden" animate="visible"
                    className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                    {title}
                </motion.h1>
                <motion.p custom={2} variants={fadeUpVariants as any} initial="hidden" animate="visible"
                    className="max-w-2xl mx-auto text-lg text-gray-400 mb-10">
                    {description}
                </motion.p>
                <motion.div custom={3} variants={fadeUpVariants as any} initial="hidden" animate="visible">
                    <a href="#contact" className="px-8 py-4 bg-amber-500 text-black font-semibold rounded-lg shadow-lg hover:bg-amber-400 transition-colors duration-300 inline-flex items-center gap-2 mx-auto">
                        {ctaText}
                        <ArrowRight className="h-5 w-5" />
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default AetherFlowHero;
