import React from "react";

const Logo = ({ size = "text-2xl" }: { size?: string }) => {
  return (
    <h2 className={` font-unbounded select-none text-nowrap font-semibold ${size}`}>
      PLAY <span className="GradientBg px-2 rounded">NFT</span>
    </h2>
  );
};

export default Logo;
