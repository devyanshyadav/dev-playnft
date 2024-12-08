import React from "react";
import BlurDiv from "../global-cmp/blur-div";
import DevButton from "../dev-components/dev-button";
import Link from "next/link";
import Image from "next/image";
import TiltCard from "../global-cmp/tilt-card";
import AnimateNumber from "../global-cmp/animate-number";
import DevModal from "../dev-components/dev-modal";
import VideoPlayer from "../global-cmp/video-player";

const HeroSec = () => {
  return (
    <section className="MaxWidth">
      <BlurDiv place="top-right" className="-top-10" />
      <BlurDiv place="bottom-right" className="!-bottom-28" />
      <div className="MinWidth">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,80px_auto] gap-5">
          <div className="content-center space-y-10 md:mt-0 mt-10">
            <div className="space-y-4">
              <h1 className="font-medium font-unbounded text-3xl md:text-5xl">
                Discover, Collect and Sell Dope Art and NFTs
              </h1>
              <p>
                The worlds first largest NFT marketplace for crypto collectibles
                and non-fungible tokens (NFTs)
              </p>
            </div>

            <div className="flex md:items-center flex-col md:flex-row justify-start md:gap-10 gap-3 ">
              <div className="flex items-center gap-2 ">
                <DevButton>Discover</DevButton>
                <DevButton variant="border">Create</DevButton>
              </div>
              <DevModal
                closeIcon={false}
                modalBtn={
                  <button className="underline w-fit flex gap-2 items-center text-nowrap">
                    <Image
                      src={"/assets/icons/video-on.svg"}
                      alt={"play-icon"}
                      width={20}
                      height={20}
                    />{" "}
                    Watch a Video
                  </button>
                }
              >
                <div className="md:w-[80vw] GradientBorder overflow-hidden rounded-xl">
                  <VideoPlayer videoSrc="assets/videos/trailer.mp4" />
                </div>
              </DevModal>
            </div>
            <div className="border w-full md:w-fit border-accentGray rounded-xl p-1 px-2 md:px-6 GradientBg flex items-center gap-10">
              {[
                {
                  value: 27,
                  label: "Art works",
                },
                {
                  value: 20,
                  label: "Auctions",
                },
                {
                  value: 12,
                  label: "Artists",
                },
              ].map((item, index) => (
                <div key={index}>
                  <p className="font-semibold font-unbounded md:w-20 text-2xl flex items-center gap-2">
                    <AnimateNumber number={item.value} />
                    <span>+</span>
                  </p>
                  <p className="text-sm">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-start gap-10">
              <div className="flex -space-x-4 rtl:space-x-reverse">
                {[
                  "/assets/profile-imgs/img1.webp",
                  "/assets/profile-imgs/img2.webp",
                  "/assets/profile-imgs/img3.webp",
                  "/assets/profile-imgs/img4.jpeg",
                  "/assets/profile-imgs/img5.jpg",
                ].map((image, index) => (
                  <Image
                    key={index}
                    className="w-14 aspect-square object-cover GradientBorder  rounded-full"
                    src={image}
                    width={100}
                    height={100}
                    alt={`profile-${index}`}
                  />
                ))}
              </div>
              <div>
                <p className="font-semibold font-unbounded text-2xl flex items-center gap-2">
                  40k
                  <span>+</span>
                </p>
                <p className="text-sm">Active Users</p>
              </div>
            </div>
          </div>
          <div className="md:block hidden" />
          <TiltCard className="LightGradientBg overflow-hidden relative rounded-2xl border-slate-600 border">
            <Image
              className="md:h-[600px] object-contain"
              src={"/assets/banner-img.png"}
              alt={"banner-img"}
              width={500}
              height={500}
            />
            <div className="CardFooter">
              <div className="space-y-2 grid place-items-center">
                <h3>Ending in:</h3>
                <p className="font-semibold">1h 25m 56s</p>
                <DevButton>Place a Bid</DevButton>
              </div>
              <div className="space-y-2 grid place-items-center">
                <h3>Highest Bid:</h3>
                <p className="font-semibold">0.25 ETH</p>
                <DevButton
                  className="relative overflow-hidden z-10"
                  variant="border"
                >
                  <span className="absolute inset-0 bg-slate-600/70 -z-10" />
                  Purchase
                </DevButton>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export default HeroSec;
