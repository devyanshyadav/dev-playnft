"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AnimatedHoverCard = ({ children }: { children: React.ReactNode }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!cardRef.current || !gradientRef.current) return;

    const card = cardRef.current;
    const gradient = gradientRef.current;

    // Hover enter animation
    const enterTl = gsap.timeline({ paused: true });
    enterTl.to(gradient, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
    });

    // Hover leave animation
    const leaveTl = gsap.timeline({ paused: true });
    leaveTl.to(gradient, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
    });

    // Handle mouse move with GSAP
    const handleMouseMove = (e: MouseEvent) => {
      const card = cardRef.current;
      if (!card) return; // add a null check here

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Smooth gradient movement
      gsap.to(gradient, {
        backgroundImage: `radial-gradient(circle 200px at ${x}px ${y}px, var(--accent3), transparent)`,
        duration: 0.2,
        ease: "power1.out",
      });
    };

    // Add event listeners
    card.addEventListener("mouseenter", () => {
      enterTl.restart();
    });

    card.addEventListener("mouseleave", () => {
      leaveTl.restart();
    });

    card.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      card.removeEventListener("mouseenter", () => {});
      card.removeEventListener("mouseleave", () => {});
      card.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={cardRef} className="relative overflow-hidden rounded-3xl">
      {children}
      <div
        ref={gradientRef}
        className="absolute inset-0 -z-10 blur-md pointer-events-none opacity-0 scale-80"
        style={{
          background:
            "radial-gradient(circle 200px at 0px 0px, var(--accent3), transparent)",
        }}
      />
    </div>
  );
};

export default AnimatedHoverCard;
