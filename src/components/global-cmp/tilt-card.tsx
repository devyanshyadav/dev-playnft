"use client";
import React from "react";
import Tilt from "react-parallax-tilt";

const TiltCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Tilt className={className} glareEnable={true} glareMaxOpacity={0.45}>
      {children}
    </Tilt>
  );
};

export default TiltCard;
