import React from "react";
import BlurDiv from "../global-cmp/blur-div";
import DevButton from "../dev-components/dev-button";
import Image from "next/image";
import AnimatedHoverCard from "../global-cmp/hover-card";

const artCategories = [
    {
      name: 'Abstract',
      itemCount: 30,
      type: 'image',
      thumbnailUrls: [
        '/assets/artwork-imgs/abstract/img1.jpg',
        '/assets/artwork-imgs/abstract/img2.jpg',
        '/assets/artwork-imgs/abstract/img4.jpg'
      ],
      mainImageUrl: '/assets/artwork-imgs/abstract/img3.jpg'
    },
    {
      name: '3D Art',
      itemCount: 45,
      type: 'image',
      thumbnailUrls: [
        '/assets/artwork-imgs/3d-art/img1.jpg',
        '/assets/artwork-imgs/3d-art/img4.jpg',
        '/assets/artwork-imgs/3d-art/img3.jpg'
      ],
      mainImageUrl: '/assets/artwork-imgs/3d-art/img2.jpg'
    },
    {
      name: 'Modern Art',
      itemCount: 59,
      type: 'image',
      thumbnailUrls: [
        '/assets/artwork-imgs/modern-art/img1.jpg',
        '/assets/artwork-imgs/modern-art/img2.jpg',
        '/assets/artwork-imgs/modern-art/img4.jpg'
      ],
      mainImageUrl: '/assets/artwork-imgs/modern-art/img3.jpg'
    },
    {
      name: 'Game',
      itemCount: 25,
      type: 'image',
      thumbnailUrls: [
        '/assets/artwork-imgs/game/img1.jpg',
        '/assets/artwork-imgs/game/img2.jpg',
        '/assets/artwork-imgs/game/img4.jpg'
      ],
      mainImageUrl: '/assets/artwork-imgs/game/img3.jpg'
    },
    {
      name: 'Graffiti',
      itemCount: 36,
      type: 'image',
      thumbnailUrls: [
        '/assets/artwork-imgs/graffiti/img1.jpg',
        '/assets/artwork-imgs/graffiti/img2.jpg',
        '/assets/artwork-imgs/graffiti/img3.jpg'
      ],
      mainImageUrl: '/assets/artwork-imgs/graffiti/img4.jpg'
    },
    {
      name: 'Watercolor',
      itemCount: 40,
      type: 'image',
      thumbnailUrls: [
        '/assets/artwork-imgs/watercolor/img1.jpg',
        '/assets/artwork-imgs/watercolor/img2.jpg',
        '/assets/artwork-imgs/watercolor/img3.jpg'
      ],
      mainImageUrl: '/assets/artwork-imgs/watercolor/img4.jpg'
    }
  ];

  
const Artworks = () => {
  return (
    <section className="MaxWidth">
      <BlurDiv place="right" />
      <div className="MinWidth">
        <h3 className="SecondaryTitle">Explore Artworks</h3>
        <div className="grid md:grid-cols-3 gap-4">
         {
           artCategories.map((category, index) => (
           <AnimatedHoverCard key={index}>
             <div key={index} className="flex flex-col gap-2 overflow-hidden p-2 border border-accentGray rounded-3xl">
            <div className="grid grid-cols-3 flex-shrink-0 h-fit gap-2 *:object-cover overflow-hidden *:w-full *:h-20 *:rounded-sm [&:nth-child(1n)]:rounded-tl-2xl [&:nth-last-child(3n)]:rounded-tr-2xl">
             {
               category.thumbnailUrls.map((url, index) => (
                <Image
                  key={index}
                  src={url}
                  alt="image"
                  className="h-20 object-cover flex-shrink rounded-sm"
                  width={500}
                  height={500}
                />
               ))
             }
            </div>
            <Image
              src={category.mainImageUrl}
              alt="image"
              className="h-48 object-cover flex-shrink rounded-sm"
              width={500}
              height={500}
            />
            <div className="flex items-center justify-between gap-2 pl-3 flex-shrink-0">
              <h3>{category.name}</h3>
              <DevButton rounded="full" variant="border" className="overflow-hidden">
                {category.itemCount} Items
                <span className="inset-0 absolute -z-10 bg-primary"></span>
              </DevButton>
            </div>
          </div>
           </AnimatedHoverCard>
           ))
         }
        </div>
      </div>
    </section>
  );
};

export default Artworks;
