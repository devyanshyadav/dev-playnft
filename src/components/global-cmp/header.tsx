import React from "react";
import ResponsiveMenu from "../dev-components/responsive-menu";
import DevButton from "../dev-components/dev-button";
import Image from "next/image";
import Logo from "./logo";
import DevInput from "../dev-components/dev-input-v2";
import DevModal from "../dev-components/dev-modal";

const Header = () => {
  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Explore",
      path: "/",
    },
    {
      name: "Marketplace",
      path: "/",
    },
    {
      name: "Artist",
      path: "/",
    },
    {
      name: "News",
      path: "/",
    },
  ];
  return (
    <header className="w-full max-w-7xl mx-auto flex items-center gap-3 justify-between p-2 md:p-5">
      <ResponsiveMenu
        logo={
          <Logo/>
        }
        menuItems={menuItems}
      />
      <div className="flex-grow md:hidden block"></div>
      <div className="flex items-center gap-3">
        <DevModal title="Search Best Artworks here" modalBtn={<DevButton className="!px-4" variant="border">
          <Image
            src="assets/icons/search-line.svg"
            alt="search icon"
            width={20}
            height={20}
          />
          <span className="md:block hidden">Search</span>
        </DevButton>}>
          <div className="p-5 md:w-[50vw] mt-5 ">
            <DevInput placeholder="Move to the moon" icon={<Image
            src="assets/icons/search-line.svg"
            alt="search icon"
            width={20}
            height={20}
          />} />
          </div>
        </DevModal>
        <DevButton className="md:flex hidden">Register</DevButton>
      </div>
    </header>
  );
};

export default Header;
