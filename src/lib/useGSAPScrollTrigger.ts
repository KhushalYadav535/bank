"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseScrollAnimationOptions {
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  stagger?: number;
  onEnter?: () => void;
  onLeave?: () => void;
}

export function useScrollAnimation(
  ref: React.RefObject<HTMLElement>,
  options: UseScrollAnimationOptions = {}
) {
  const { start = "top 85%", end = "bottom 15%", scrub = false } = options;

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start,
          end,
          scrub,
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [ref, start, end, scrub]);
}

export function useStaggerAnimation(
  containerRef: React.RefObject<HTMLElement>,
  itemSelector: string,
  options: UseScrollAnimationOptions = {}
) {
  const { start = "top 80%", stagger = 0.1 } = options;

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(itemSelector);

    gsap.fromTo(
      elements,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
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
  }, [containerRef, itemSelector, start, stagger]);
}

export function useHorizontalScroll(
  ref: React.RefObject<HTMLElement>,
  options: UseScrollAnimationOptions = {}
) {
  const { start = "top center", end = "bottom center" } = options;

  useEffect(() => {
    if (!ref.current) return;

    const container = ref.current;
    const scrollWidth = container.scrollWidth - container.clientWidth;

    gsap.to(container, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start,
        end,
        scrub: 1,
        pin: false,
      },
    });
  }, [ref, start, end]);
}

export { gsap, ScrollTrigger };