import Artworks from "@/components/home-cmps/artworks";
import FeaturedBrands from "@/components/home-cmps/featured-brands";
import HeroSec from "@/components/home-cmps/hero-sec";
import JoinCta from "@/components/home-cmps/join-cta";
import Popular from "@/components/home-cmps/popular";
import Sellers from "@/components/home-cmps/sellers";
import React from "react";

const Home = () => {
  return (
    <>
      <HeroSec />
      <br />
      <FeaturedBrands />
      <br />
      <Popular />
      <br />
      <Sellers />
      <br />
      <Artworks />
      <br />
      <JoinCta />
    </>
  );
};

export default Home;
