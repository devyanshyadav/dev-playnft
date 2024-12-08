import React from 'react'
import BlurDiv from '../global-cmp/blur-div'
import DevCarousel from '../dev-components/dev-carousel'
import Image from 'next/image'
import DevButton from '../dev-components/dev-button'
import { IoHeart } from 'react-icons/io5'
const data = [
    {
      name: "Digital Decade",
      author: "Anothony Gargasz",
      price: "3.45 ETH",
      image: "/assets/popular-week-img/2.png",
      likes: 200,
    },
    {
      name: "Winter Solstice",
      author: "Anothony Gargasz",
      price: "2.10 ETH",
      image: "/assets/popular-week-img/3.png",
      likes: 150,
    },
    {
      name: "Cyberpunk Samurai",
      author: "Anothony Gargasz",
      price: "6.00 ETH",
      image: "/assets/popular-week-img/4.png",
      likes: 180,
    },
    {
      name: "Cyberpunk Geisha",
      author: "Anothony Gargasz",
      price: "7.00 ETH",
      image: "/assets/popular-week-img/5.png",
      likes: 220,
    },
    {
      name: "Cyberpunk Ronin",
      author: "Anothony Gargasz",
      price: "8.00 ETH",
      image: "/assets/popular-week-img/6.png",
      likes: 190,
    },
    {
      name: "Digital Cocoons",
      author: "Anothony Gargasz",
      price: "4.00 ETH",
      image: "/assets/popular-week-img/1.png",
      likes: 160,
    },
  ];
const Popular = () => {
  return (
    <section className="MinWidth">
    <h2 className="SecondaryTitle">Popular this week</h2>
    <BlurDiv place="center" className="!aspect-square !w-auto" />
    <div>
    <DevCarousel
      slides={data.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden relative rounded-xl border border-accentGray"
        >
          <Image
            className="object-contain"
            src={item.image}
            width={500}
            height={500}
            alt={`img-${index}`}
          />
          <div className="CardFooter md:flex-row flex-col">
            <div className="text-start">
              <h3 className="font-unbounded">{item.name}</h3>
              <p className="text-sm">{item.author}</p>
            </div>
            <div className='flex items-center gap-2 md:flex-col'>
              <DevButton size="sm" variant="border">
                {item.price}
              </DevButton>
              <p className='flex items-center gap-2'><IoHeart className='text-accent1 text-lg' />{item.likes}k</p>
            </div>
          </div>
        </div>
      ))}
    />
    </div>
  </section>
  )
}

export default Popular