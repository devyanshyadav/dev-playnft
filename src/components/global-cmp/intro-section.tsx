"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import Logo from "./logo";

const IntroSection = () => {
  const [showSection, setShowSection] = useState(true);

  useGSAP(() => {
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        setShowSection(false);
        document.body.style.overflowY = "auto";
      },
    });

    tl.to(".IntroSection", {
      x: 0,
      opacity: 1,
      duration: 1,
    });

    tl.to(".Loader", {
      scaleX: 1,
      duration: 1,
    });

    tl.to(".IntroSection", {
      duration:0.5,
      opacity: 0,
    });
  }, []);

  if (!showSection) return null;

  return (
    <section className="fixed grid place-items-center IntroSection inset-0 bg-primary z-50">
      <div className="flex items-center gap-8 flex-col">
        <Logo size="text-4xl" />
        <div className="w-full origin-left scale-x-0 h-2 Loader bg-white rounded-sm"></div>
      </div>
    </section>
  );
};

export default IntroSection;
