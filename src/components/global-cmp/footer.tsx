import Link from "next/link";
import React from "react";
import Logo from "./logo";
import { FaDiscord, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const websiteNavigation = [
  {
    label: "Explore",
    items: [
      {
        label: "Art",
        url: "#",
      },
      {
        label: "Photography",
        url: "#",
      },
      {
        label: "Music",
        url: "#",
      },
      {
        label: "Games",
        url: "#",
      },
    ],
  },
  {
    label: "My Account",
    items: [
      {
        label: "My Profile",
        url: "#",
      },
      {
        label: "My Collections",
        url: "#",
      },
      {
        label: "My Favorites",
        url: "#",
      },
      {
        label: "My Account Settings",
        url: "#",
      },
    ],
  },
  {
    label: "Resources",
    items: [
      {
        label: "Help Center",
        url: "#",
      },
      {
        label: "Partners",
        url: "#",
      },
      {
        label: "Suggestions",
        url: "#",
      },
      {
        label: "Newsletters",
        url: "#",
      },
    ],
  },
  {
    label: "Company",
    items: [
      {
        label: "About",
        url: "#",
      },
      {
        label: "Careers",
        url: "#",
      },
      {
        label: "Ranking",
        url: "#",
      },
      {
        label: "Activity",
        url: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="flex MinWidth my-10 items-center flex-col md:flex-row justify-between gap-2">
      <div className="flex-grow max-w-md space-y-6">
        <Logo />
        <p>
          The World&apos;s Largest Digital Marketplace for crypto collections
          and non fungible tokens (NFTs). Buy, sell and discover exclusive
          digital assets
        </p>
        <div className="flex items-center gap-5 text-3xl">
          <Link href="#">
            <FaInstagram />
          </Link>
          <Link href="#">
            <FaXTwitter />
          </Link>
          <Link href="#">
            <FaFacebook />
          </Link>
          <Link href="#">
            <FaDiscord className="text-4xl" />
          </Link>
        </div>
      </div>
      <div className="md:flex gap-5 md:gap-8 grid grid-cols-2 text-nowrap">
        {websiteNavigation.map((item, index) => (
          <div key={index}>
            <h2 className="text-accent3">{item.label}</h2>
            <ul className="mt-4 space-y-5">
              {item.items.map((subItem, index) => (
                <li key={index}>
                  <Link
                    className="opacity-80 hover:opacity-100"
                    href={subItem.url}
                  >
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
