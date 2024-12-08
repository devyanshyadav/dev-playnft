import React from "react";
import MarqueeCarousel from "../dev-components/marquee-carousel";
import Image from "next/image";
const brands = [
  "/assets/brand-logos/img1.png",
  "/assets/brand-logos/img2.png",
  "/assets/brand-logos/img3.png",
  "/assets/brand-logos/img4.png",
  "/assets/brand-logos/img5.png",
  "/assets/brand-logos/img6.png",
  "/assets/brand-logos/img7.png",
];
const FeaturedBrands = () => {
  return (
    <section className="MaxWidth">
      <div className="w-full p-2 GradientBg ">
        <MarqueeCarousel
          className="max-w-7xl mx-auto w-full"
          pauseOnHover
          marqueeData={brands.map((item, i) => (
            <Image
              key={i}
              src={item as string}
              alt={`brand-${i}`}
              width={150}
              height={150}
              className="object-contain mx-10 brightness-[1000]"
            />
          ))}
        />
      </div>
    </section>
  );
};

export default FeaturedBrands;
