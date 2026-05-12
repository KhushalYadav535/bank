"use client";

import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale" | "fade-up-smooth" | "zoom-in";
  delay?: number;
  duration?: number;
  start?: string;
  stagger?: number;
}

export function ScrollReveal({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 1,
  start = "top 85%",
  stagger = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const animations: Record<string, { from: gsap.TweenVars; to: gsap.TweenVars }> = {
      "fade-up": {
        from: { opacity: 0, y: 60 },
        to: { opacity: 1, y: 0, duration, delay, ease: "power3.out" },
      },
      "fade-up-smooth": {
        from: { opacity: 0, y: 80, scale: 0.95 },
        to: { opacity: 1, y: 0, scale: 1, duration, delay, ease: "expo.out" },
      },
      "fade-in": {
        from: { opacity: 0 },
        to: { opacity: 1, duration, delay, ease: "power2.out" },
      },
      "slide-left": {
        from: { opacity: 0, x: 80 },
        to: { opacity: 1, x: 0, duration, delay, ease: "power3.out" },
      },
      "slide-right": {
        from: { opacity: 0, x: -80 },
        to: { opacity: 1, x: 0, duration, delay, ease: "power3.out" },
      },
      scale: {
        from: { opacity: 0, scale: 0.8, y: 40 },
        to: { opacity: 1, scale: 1, y: 0, duration, delay, ease: "back.out(1.2)" },
      },
      "zoom-in": {
        from: { opacity: 0, scale: 0.9, y: 30 },
        to: { opacity: 1, scale: 1, y: 0, duration, delay, ease: "power2.out" },
      },
    };

    const { from, to } = animations[animation];

    gsap.fromTo(
      ref.current,
      { ...from, willChange: "transform, opacity" },
      {
        ...to,
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [animation, delay, duration, start]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}

interface StaggerRevealProps {
  children: ReactNode[];
  className?: string;
  stagger?: number;
  start?: string;
  animation?: "fade-up" | "slide-left" | "slide-right" | "scale";
}

export function StaggerReveal({
  children,
  className,
  stagger = 0.1,
  start = "top 85%",
  animation = "fade-up",
}: StaggerRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.children;

    let fromVars: gsap.TweenVars;
    switch (animation) {
      case "slide-left":
        fromVars = { opacity: 0, x: 60 };
        break;
      case "slide-right":
        fromVars = { opacity: 0, x: -60 };
        break;
      case "scale":
        fromVars = { opacity: 0, scale: 0.9, y: 20 };
        break;
      default:
        fromVars = { opacity: 0, y: 50 };
    }

    gsap.fromTo(
      elements,
      fromVars,
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [stagger, start, animation]);

  return (
    <div ref={containerRef} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}

// Magnetic hover effect for elements
interface MagneticEffectProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticEffect({ children, className, strength = 0.3 }: MagneticEffectProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
      });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}

// Parallax wrapper component
interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function ParallaxSection({ children, className, speed = 0.5 }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [speed]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}

// Text reveal animation
interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function TextReveal({ children, className, delay = 0 }: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { clipPath: "inset(0 100% 0 0)", opacity: 0 },
      {
        clipPath: "inset(0 0% 0 0)",
        opacity: 1,
        duration: 1.2,
        delay,
        ease: "power3.out",
      }
    );
  }, [delay]);

  return (
    <span ref={ref} className={cn("inline-block overflow-hidden", className)}>
      {children}
    </span>
  );
}