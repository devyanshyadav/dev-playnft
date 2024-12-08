import React from 'react'
import MarqueeCarousel from '../dev-components/marquee-carousel'
import Image from 'next/image'
const sellersData = [
    {
      name: "Leighton Kramer",
      price: "276.7 Eth",
      image: "/assets/profile-imgs/img1.webp",
    },
    {
      name: "Haylie Arcand",
      price: "345.8 Eth",
      image: "/assets/popular-week-img/3.png",
    },
    {
      name: "Bowen Higgins",
      price: "323.7 Eth",
      image: "/assets/profile-imgs/img2.webp",
    },
    {
      name: "Saige Fuentes",
      price: "347.7 Eth",
      image: "/assets/popular-week-img/5.png",
    },
    {
      name: "Jeremy Burch",
      price: "267.9 Eth",
      image: "/assets/profile-imgs/img3.webp",
    },
    {
      name: "Amelie Griffith",
      price: "334.1 Eth",
      image: "/assets/popular-week-img/1.png",
    },
    {
      name: "Isabelle Hart",
      price: "288.1 Eth",
      image: "/assets/profile-imgs/img4.jpeg",
    },
    {
      name: "Diego Bentley",
      price: "290.7 Eth",
      image: "/assets/popular-week-img/3.png",
    },
    {
      name: "Leighton Kramer",
      price: "276.7 Eth",
      image: "/assets/profile-imgs/img5.jpg",
    },
    {
      name: "Haylie Arcand",
      price: "345.8 Eth",
      image: "/assets/popular-week-img/5.png",
    },
    {
      name: "Bowen Higgins",
      price: "323.7 Eth",
      image: "/assets/profile-imgs/img1.webp",
    },
    {
      name: "Saige Fuentes",
      price: "347.7 Eth",
      image: "/assets/popular-week-img/6.png",
    },
    {
      name: "Jeremy Burch",
      price: "267.9 Eth",
      image: "/assets/profile-imgs/img2.webp",
    },
    {
      name: "Amelie Griffith",
      price: "334.1 Eth",
      image: "/assets/popular-week-img/3.png",
    },
    {
      name: "Isabelle Hart",
      price: "288.1 Eth",
      image: "/assets/profile-imgs/img3.webp",
    },
    {
      name: "Diego Bentley",
      price: "290.7 Eth",
      image: "/assets/popular-week-img/5.png",
    },
    {
      name: "Leighton Kramer",
      price: "276.7 Eth",
      image: "/assets/profile-imgs/img4.jpeg",
    },
    {
      name: "Haylie Arcand",
      price: "345.8 Eth",
      image: "/assets/popular-week-img/1.png",
    },
    {
      name: "Bowen Higgins",
      price: "323.7 Eth",
      image: "/assets/profile-imgs/img5.jpg",
    },
    {
      name: "Saige Fuentes",
      price: "347.7 Eth",
      image: "/assets/popular-week-img/2.png",
    },
    {
      name: "Jeremy Burch",
      price: "267.9 Eth",
      image: "/assets/profile-imgs/img1.webp",
    },
    {
      name: "Amelie Griffith",
      price: "334.1 Eth",
      image: "/assets/popular-week-img/5.png",
    },
    {
      name: "Isabelle Hart",
      price: "288.1 Eth",
      image: "/assets/profile-imgs/img2.webp",
    },
    {
      name: "Diego Bentley",
      price: "290.7 Eth",
      image: "/assets/popular-week-img/1.png",
    },
  ];
const Sellers = () => {
  return (
    <section className="MinWidth">
        <h2 className="SecondaryTitle">Top Sellers</h2>

        <div className="space-y-4">
          <MarqueeCarousel
            pauseOnHover
            marqueeData={sellersData
              .slice(0, sellersData.length / 2)
              .map((item, index) => (
                <div
                  key={index}
                  className=" GradientBorder h-28 mx-2 rounded-xl overflow-hidden relative z-10 flex items-center gap-5 justify-between p-2"
                >
                  <div className="absolute inset-0 LightGradientBg -z-10" />
                  <Image
                    className="object-cover aspect-square h-full rounded-lg"
                    src={item.image}
                    width={100}
                    height={100}
                    alt={`img-${index}`}
                  />
                  <div className="text-start">
                    <h3 className="font-unbounded">{item.name}</h3>
                    <p className="text-sm">{item.price}Eth</p>
                  </div>
                </div>
              ))}
          />
          <MarqueeCarousel
            direction="right"
            pauseOnHover
            marqueeData={sellersData
              .slice(sellersData.length / 2)
              .map((item, index) => (
                <div
                  key={index}
                  className=" GradientBorder h-28 mx-2 rounded-xl overflow-hidden relative z-10 flex items-center gap-5 justify-between p-2"
                >
                  <div className="absolute inset-0 LightGradientBg -z-10" />
                  <Image
                    className="object-cover aspect-square h-full rounded-lg"
                    src={item.image}
                    width={100}
                    height={100}
                    alt={`img-${index}`}
                  />
                  <div className="text-start">
                    <h3>{item.name}</h3>
                    <p className="text-sm">{item.price}</p>
                  </div>
                </div>
              ))}
          />
        </div>
      </section>
  )
}

export default Sellers