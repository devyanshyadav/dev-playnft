import React from "react";
import Marquee, { MarqueeProps } from "react-fast-marquee";

const MarqueeCarousel = ({
  marqueeData,
  ...props
}: { marqueeData: React.ReactNode[] } & MarqueeProps) => {
  return (
    <Marquee  {...props} className={`!p-0 w-full overflow-hidden [mask-image:_linear-gradient(to_right,_transparent_0,_white_150px,white_calc(100%-150px),_transparent_100%)] ${props.className}`}>
      {marqueeData.map((item, index) => (
        <div
          key={`first-${index}`}
          className="flex items-center justify-center min-h-16 max-h-32 "
        >
         {item}
        </div>
      ))}
    </Marquee>
  );
};

export default MarqueeCarousel;
