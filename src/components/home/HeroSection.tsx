"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";

const TOTAL_FRAMES = 240;
const FRAME_PREFIX = "/ezgif-67ffdbb6818c9f25-png-split/ezgif-frame-";
const FRAME_EXTENSION = ".png";

function padZero(num: number) {
  return num.toString().padStart(3, "0");
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isReady, setIsReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const smoothY = useSpring(parallaxY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `${FRAME_PREFIX}${padZero(i)}${FRAME_EXTENSION}`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) setIsReady(true);
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) setIsReady(true);
      };
      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    let animationFrameId: number;
    let currentFrameIndex = -1;
    let lastTime = 0;
    let progress = 0;
    let direction = 1;
    const duration = 6000;

    const render = (time: number) => {
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;
      lastTime = time;

      progress += (deltaTime / duration) * direction;

      if (progress >= 1) { progress = 1; direction = -1; }
      else if (progress <= 0) { progress = 0; direction = 1; }

      let frameIndex = TOTAL_FRAMES - Math.floor(progress * (TOTAL_FRAMES - 1));
      if (frameIndex < 1) frameIndex = 1;
      if (frameIndex > TOTAL_FRAMES) frameIndex = TOTAL_FRAMES;

      if (frameIndex !== currentFrameIndex) {
        currentFrameIndex = frameIndex;

        const container = canvas.parentElement;
        if (container) {
          const width = container.clientWidth;
          const height = container.clientHeight;
          const dpr = window.devicePixelRatio || 1;

          if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            context.scale(dpr, dpr);
          }

          context.fillStyle = "#faf9f6";
          context.fillRect(0, 0, width, height);

          const img = imagesRef.current[frameIndex - 1];
          if (img && img.complete && img.naturalWidth > 0) {
            const imgAspect = img.naturalWidth / img.naturalHeight;
            const canvasAspect = width / height;

            let drawWidth = width;
            let drawHeight = height;
            let offsetX = 0;
            let offsetY = 0;

            if (canvasAspect > imgAspect) {
              drawHeight = width / imgAspect;
              offsetY = (height - drawHeight) / 2;
            } else {
              drawWidth = height * imgAspect;
              offsetX = (width - drawWidth) / 2;
            }

            context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isReady]);

  return (
    <main className="bg-[#faf9f6]">

      {/* Premium Hero Section */}
      <section ref={containerRef} className="relative h-[300vh]">
        <motion.div
          className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >

          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover z-0" />

          {/* Premium Glass Overlay */}
          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/20 via-transparent to-white/30 backdrop-blur-[1px]" />

          {/* Animated Background Orbs - Premium Glass Effect */}
          <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-20 -left-20 w-72 h-72 bg-crimson/10 rounded-full blur-3xl animate-blob"
              style={{ y: smoothY }}
            />
            <motion.div
              className="absolute bottom-20 -right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-blob"
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial-crimson opacity-30 blur-3xl" />
          </div>

          {/* Premium Floating Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-gold/50 rounded-full"
              style={{
                left: `${10 + i * 12}%`,
                top: `${15 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.8, 1],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Premium Glass Container */}
          <motion.div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6"
            style={{ y: titleY }}
          >

            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-8"
            >
              <div className="relative px-6 py-2 glass-card-light rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-crimson/10 to-gold/10 rounded-full blur-sm" />
                <span className="relative text-[#B80000] text-[9px] tracking-[0.4em] uppercase font-medium flex items-center gap-3">
                  <span className="w-6 h-px bg-gradient-to-r from-transparent to-crimson/50" />
                  Since 1965
                  <span className="w-6 h-px bg-gradient-to-l from-transparent to-crimson/50" />
                </span>
              </div>
            </motion.div>

            {/* Main Title - Premium Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl text-center tracking-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2d2d2d", lineHeight: 1.1 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="block"
              >
                MAHANAGAR NAGRIK
              </motion.span>
              <motion.span
                className="block mt-2 bg-gradient-to-r from-[#B80000] via-[#8B0000] to-[#B80000] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                SAHAKARI BANK
              </motion.span>
            </motion.h1>

            {/* Premium Subtitle with Animation */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-8 text-[#B80000] text-[10px] md:text-xs tracking-[0.5em] uppercase flex items-center gap-4"
            >
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#B80000]" />
              Your Trusted Financial Partner
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#B80000]" />
            </motion.p>

            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-14 flex gap-8"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2, boxShadow: "0 30px 60px -15px rgba(184, 0, 0, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-10 py-4 bg-gradient-to-r from-[#B80000] to-[#8B0000] text-white text-[10px] tracking-[0.3em] uppercase font-semibold rounded-full shadow-xl overflow-hidden group"
                >
                  {/* Shimmer Effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10">Request Invitation</span>
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-10 py-4 border-2 border-[#B80000] text-[#B80000] text-[10px] tracking-[0.3em] uppercase font-semibold rounded-full overflow-hidden group hover:bg-[#B80000] hover:text-white transition-all duration-500"
                >
                  <span className="relative z-10">Our Story</span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Premium Stats Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-12 glass-card-light px-10 py-5 rounded-full"
            >
              {[
                { value: "59+", label: "Years", accent: true },
                { value: "25K+", label: "Members", accent: false },
                { value: "15", label: "Branches", accent: true },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className={`text-3xl font-bold tabular-nums ${stat.accent ? 'text-[#B80000]' : 'text-[#2d2d2d]'}`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {stat.value}
                  </div>
                  <div className="text-[8px] tracking-widest text-[#2d2d2d]/50 uppercase mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Premium Scroll Indicator */}
            <motion.div
              className="absolute bottom-28 left-1/2 -translate-x-1/2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <div className="relative w-8 h-12 border-2 border-[#B80000]/40 rounded-full flex items-start justify-center p-2">
                {/* Animated Scroll Dot */}
                <motion.div
                  className="w-2 h-2 bg-[#B80000] rounded-full"
                  animate={{ y: [0, 20, 0], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                {/* Bottom Arrow */}
                <motion.div
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2"
                  animate={{ y: [0, 4, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-[#B80000]/50">
                    <path d="M6 6L1 1M6 6L11 1M6 6L6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>

          </motion.div>
        </motion.div>
      </section>

      {/* Heritage - Dark Band with Glassmorphism */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[#2d2d2d]">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-crimson/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto text-center glass-card-dark p-12 rounded-3xl"
        >
          <span className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.4em] uppercase font-medium block mb-6">
            <motion.span
              className="w-8 h-px bg-gold"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
            />
            Our Heritage
            <motion.span
              className="w-8 h-px bg-gold"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
            />
          </span>
          <h2 className="text-3xl md:text-5xl font-light leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#faf9f6" }}>
            Rooted in Community.<br />
            <span className="text-gold">Driven by Progress.</span>
          </h2>
          <p className="mt-8 text-[#faf9f6]/60 text-base leading-relaxed max-w-xl mx-auto">
            For over five decades, Mahanagar Nagrik Sahakari Bank has been the cornerstone of financial empowerment in Bhopal. Our cooperative model ensures that every member is not just a customer, but an owner.
          </p>

          {/* Decorative Elements */}
          <motion.div
            className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-gold/30 rounded-tl-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-gold/30 rounded-br-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </section>

      {/* Services - White with colored cards and Premium Effects */}
      <section className="relative py-24 px-6 bg-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-platinum/50 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial-crimson opacity-10 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-3 text-crimson text-xs tracking-[0.4em] uppercase font-medium mb-4">
              <span className="w-12 h-px bg-crimson/30" />
              Banking Excellence
              <span className="w-12 h-px bg-crimson/30" />
            </span>
            <h2 className="text-3xl md:text-5xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2d2d2d" }}>
              <span className="gradient-text">Premium Services</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Savings", subtitle: "Wealth Growth", icon: 0 },
              { title: "Fixed Deposits", subtitle: "Secure Future", icon: 1 },
              { title: "Home Loans", subtitle: "Dream Home", icon: 2 },
              { title: "Digital Banking", subtitle: "24/7 Access", icon: 3 },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative p-6 bg-gradient-to-br from-ivory to-white border border-platinum rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-crimson/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Border Accent */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-crimson to-gold transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"
                />

                {/* Icon Circle */}
                <div className="relative w-12 h-12 mb-4 rounded-xl bg-crimson/10 flex items-center justify-center group-hover:bg-crimson group-hover:scale-110 transition-all duration-300">
                  <div className="w-3 h-3 bg-crimson group-hover:bg-white rounded-full transition-colors duration-300" />
                </div>

                <span className="relative text-[#2d2d2d]/50 text-[9px] tracking-widest uppercase block mb-2">{service.subtitle}</span>
                <h3 className="relative text-lg font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2d2d2d" }}>{service.title}</h3>

                {/* Shine Effect */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote - Premium Platinum Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-[#A19E98]">
        {/* Subtle Texture Overlay */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)]" />

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-gold/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Decorative Corner Lines */}
        <div className="absolute top-8 left-8 w-24 h-24">
          <motion.div
            className="absolute top-0 left-0 w-16 h-1 bg-gradient-to-r from-white/50 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="absolute top-0 left-0 w-1 h-16 bg-gradient-to-b from-white/50 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
          />
        </div>
        <div className="absolute bottom-8 right-8 w-24 h-24">
          <motion.div
            className="absolute bottom-0 right-0 w-16 h-1 bg-gradient-to-l from-white/50 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-1 h-16 bg-gradient-to-t from-white/50 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Main Quote Container - Glass Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Outer Decorative Frame */}
          <div className="absolute -inset-4 border-2 border-white/10 rounded-3xl" />
          <div className="absolute -inset-8 border border-white/5 rounded-3xl" />

          {/* Premium Card Container */}
          <div className="relative bg-white/5 backdrop-blur-sm p-12 md:p-16 rounded-[40px] border border-white/10 shadow-2xl">
            {/* Subtle Inner Shadow */}
            <div className="absolute inset-0 rounded-[40px] shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]" />

            {/* Quote Mark - Large Decorative */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative flex justify-center mb-6"
            >
              <div className="relative">
                {/* Decorative Lines */}
                <div className="absolute -left-16 top-1/2 w-12 h-px bg-gradient-to-r from-transparent to-gold/50" />
                <div className="absolute -right-16 top-1/2 w-12 h-px bg-gradient-to-l from-transparent to-gold/50" />

                {/* Large Quote Mark */}
                <span
                  className="text-8xl md:text-9xl font-light text-[#C9A84C]/40"
                  style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 0 }}
                >
                  "
                </span>
              </div>
            </motion.div>

            {/* Main Quote Text */}
            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative text-2xl md:text-4xl lg:text-5xl font-light italic text-white leading-snug text-center"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Banking that understands the value of relationships as deeply as the value of capital.
            </motion.blockquote>

            {/* Decorative Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative mt-12 flex items-center justify-center gap-4"
            >
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-[#C9A84C]/50" />
              <div className="w-3 h-3 rotate-45 bg-[#C9A84C]/60" />
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-[#C9A84C]/50" />
            </motion.div>

            {/* Attribution */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative mt-8 text-center text-white/60 text-xs tracking-[0.4em] uppercase flex items-center justify-center gap-3"
            >
              <span className="w-6 h-px bg-white/20" />
              <span className="text-[#C9A84C] font-medium">MNS Bank</span>
              <span className="text-white/30">·</span>
              <span>Since 1965</span>
              <span className="w-6 h-px bg-white/30" />
            </motion.p>

            {/* Bottom Decorative Element */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-gold/30 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Side Decorative Elements */}
        <motion.div
          className="absolute left-12 top-1/2 -translate-y-1/2 w-1 h-32"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-full h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
        </motion.div>
        <motion.div
          className="absolute right-12 top-1/2 -translate-y-1/2 w-1 h-32"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="w-full h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
        </motion.div>
      </section>

      {/* CTA - White with Premium Effects */}
      <section className="relative py-24 px-6 bg-ivory overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-crimson/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative max-w-xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2d2d2d" }}>
            Begin Your <span className="text-crimson">Journey</span> With Us
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -3, boxShadow: "0 25px 50px -12px rgba(184, 0, 0, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="relative mt-10 px-14 py-5 bg-crimson text-white text-[10px] tracking-[0.4em] uppercase font-semibold rounded-full shadow-lg overflow-hidden group"
              >
                {/* Shimmer Effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <span className="relative z-10 flex items-center gap-3">
                  Open an Account
                  <motion.svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </motion.svg>
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="py-8 px-6 border-t border-[#B80000]/10 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#2d2d2d]/40 text-[9px] tracking-widest uppercase"
          >
            © 2024 MNS Bank · All Rights Reserved
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#B80000]/40 text-[9px] tracking-widest uppercase flex items-center gap-2"
          >
            <span className="w-4 h-px bg-[#B80000]/20" />
            DICGC Insured · RBI Regulated
            <span className="w-4 h-px bg-[#B80000]/20" />
          </motion.span>
        </div>
      </div>
    </main>
  );
}