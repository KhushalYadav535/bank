"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
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

  // Preload images
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

      {/* Hero - Reduced scroll height */}
      <section ref={containerRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover z-0" />

          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">

            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl lg:text-6xl text-center"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2d2d2d", letterSpacing: "0.15em", lineHeight: 1.2 }}
            >
              MAHANAGAR NAGRIK<br />
              <span className="text-[#B80000]">SAHAKARI BANK</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-6 text-[#B80000] text-[10px] md:text-xs tracking-[0.5em] uppercase"
            >
              Your Trusted Financial Partner Since 1965
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-12 flex gap-4"
            >
              <Link href="/contact">
                <button className="px-8 py-3 bg-[#B80000] text-white text-[10px] tracking-[0.3em] uppercase font-semibold hover:bg-[#8B0000] transition-colors">
                  Request Invitation
                </button>
              </Link>
              <Link href="/about">
                <button className="px-8 py-3 border-2 border-[#B80000] text-[#B80000] text-[10px] tracking-[0.3em] uppercase font-medium hover:bg-[#B80000] hover:text-white transition-all">
                  Our Story
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[#B80000]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>59+</div>
                <div className="text-[8px] tracking-widest text-[#2d2d2d]/50 uppercase">Years</div>
              </div>
              <div className="w-px h-8 bg-[#B80000]/30" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[#B80000]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>25K+</div>
                <div className="text-[8px] tracking-widest text-[#2d2d2d]/50 uppercase">Members</div>
              </div>
              <div className="w-px h-8 bg-[#B80000]/30" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[#B80000]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>15</div>
                <div className="text-[8px] tracking-widest text-[#2d2d2d]/50 uppercase">Branches</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Heritage - Dark Band */}
      <section className="bg-[#2d2d2d] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#B80000] text-[10px] tracking-[0.4em] uppercase font-medium block">Our Heritage</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#faf9f6" }}>
            Rooted in Community.<br />Driven by Progress.
          </h2>
          <p className="mt-6 text-[#faf9f6]/60 text-sm leading-relaxed max-w-xl mx-auto">
            For over five decades, Mahanagar Nagrik Sahakari Bank has been the cornerstone of financial empowerment in Bhopal. Our cooperative model ensures that every member is not just a customer, but an owner.
          </p>
        </div>
      </section>

      {/* Services - White with colored cards */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#B80000] text-[10px] tracking-[0.4em] uppercase font-medium block">Banking Excellence</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2d2d2d" }}>
              Premium Services
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Savings", subtitle: "Wealth Growth" },
              { title: "Fixed Deposits", subtitle: "Secure Future" },
              { title: "Home Loans", subtitle: "Dream Home" },
              { title: "Digital Banking", subtitle: "24/7 Access" },
            ].map((service, i) => (
              <div key={service.title} className="p-6 bg-[#faf9f6] border-l-4 border-[#B80000] hover:shadow-lg transition-shadow">
                <span className="text-[#2d2d2d]/50 text-[9px] tracking-widest uppercase block">{service.subtitle}</span>
                <h3 className="mt-2 text-lg font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2d2d2d" }}>{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote - Dark Band */}
      <section className="bg-[#B80000] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-6xl text-white/20 font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>"</div>
          <blockquote className="-mt-8 text-xl md:text-2xl font-light italic text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Banking that understands the value of relationships as deeply as the value of capital.
          </blockquote>
          <p className="mt-6 text-white/60 text-[10px] tracking-[0.3em] uppercase">MNS Bank · Since 1965</p>
        </div>
      </section>

      {/* CTA - White */}
      <section className="bg-[#faf9f6] py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#2d2d2d" }}>
            Begin Your Journey With Us
          </h2>
          <Link href="/contact">
            <button className="mt-8 px-12 py-4 bg-[#B80000] text-white text-[10px] tracking-[0.4em] uppercase font-semibold hover:bg-[#8B0000] transition-colors shadow-lg">
              Open an Account
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <div className="py-6 px-6 border-t border-[#B80000]/10 bg-[#faf9f6]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <span className="text-[#2d2d2d]/40 text-[9px] tracking-widest uppercase">© 2024 MNS Bank · All Rights Reserved</span>
          <span className="text-[#B80000]/40 text-[9px] tracking-widest uppercase">DICGC Insured · RBI Regulated</span>
        </div>
      </div>
    </main>
  );
}
