import clsx from "clsx";
import React from "react";

type BlurDivProps = {
  place:
    | "left"
    | "right"
    | "top-right"
    | "center"
    | "bottom-right"
    | "bottom"
    | "bottom-left"
    | "top-left"
    | "top"
    | "center";
  className?: string;
};

const BlurDiv = ({ place, className }: BlurDivProps) => {
  const getPositionClasses = () => {
    switch (place) {
      case "left":
        return "rounded-r-full left-0 top-1/2 -translate-y-1/2 origin-left";
      case "right":
        return "rounded-l-full right-0 top-1/2 -translate-y-1/2 origin-right";
      case "top-right":
        return "rounded-r-full top-0 left-0  origin-left";
      case "center":
        return "rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2";
      case "bottom-right":
        return "rounded-tl-full bottom-0 right-0  origin-right";
      case "bottom":
        return "rounded-t-full bottom-0 left-1/2 -translate-x-1/2";
      case "bottom-left":
        return "rounded-br-full bottom-0 left-0  origin-left";
      case "top-left":
        return "rounded-br-full";
      case "top":
        return "rounded-b-full";
      default:
        return "";
    }
  };

  return (
    <div
      className={clsx(
        "h-full w-[25%] -scale-x-50 md:scale-x-75 bg-accent3 absolute shadow-[0_0_100px_80px] shadow-accent3 opacity-40 blur-3xl -z-10",
        getPositionClasses(),
        className
      )}
    />
  );
};

export default BlurDiv;
