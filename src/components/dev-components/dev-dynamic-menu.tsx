//TSX code
import React from "react";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";

export interface NavLink {
  name: string;
  path: string;
  subLinks?: NavLink[];
}

export interface MenuItemsProps {
  menuItems: NavLink[];
  className?: string;
}

const MenuItem: React.FC<{ item: NavLink; depth?: number }> = ({
  item,
  depth = 0,
}) => {
  const isFirstLevel = depth === 0;

  //More paths can be added according to the max subLinks on each level
  const paths: { [key: number]: string[] } = {
    0: [
      "group/item1",
      `group-hover/item1:opacity-100 group-hover/item1:scale-100 group-hover/item1:flex`,
    ],
    1: [
      "group/item2",
      `group-hover/item2:opacity-100 group-hover/item2:scale-100 group-hover/item2:flex`,
    ],
    2: [
      "group/item3",
      `group-hover/item3:opacity-100 group-hover/item3:scale-100 group-hover/item3:flex`,
    ],
    3: [
      "group/item4",
      `group-hover/item4:opacity-100 group-hover/item4:scale-100 group-hover/item4:flex`,
    ],
  };

  return (
    <li
      className={`
      ${paths[depth] ? paths[depth][0] : ""} 
      relative p-2 px-4 w-full
      ${
        isFirstLevel
          ? "flex items-center relative justify-center flex-col after:inset-x-0 after:origin-left after:md:left-1/2 after:md:-translate-x-1/2  after:hover:scale-x-75 after:scale-x-0 after:transition-all after:content-[''] after:absolute after:bottom-0 after:h-1 after:bg-gradient-to-r from-accent1 via-accent2 to-accent3 after:rounded-full"
          : "w-full md:hover:bg-accentGray/30 "
      }
    `}
    >
      <Link
        href={item.path}
        className="cursor-pointer w-full whitespace-nowrap GradientTxt
          flex items-center justify-between"
      >
        {item.name}
        {item.subLinks && <RiArrowDropDownLine className="text-2xl" />}
      </Link>

      {item.subLinks && (
        <ul
          className={`
          bg-primary 
          divide-y border-l-2  md:border-l divide-accentGray
          md:opacity-0 
          hidden
          w-full
          md:w-auto
          md:flex
          flex-col
          md:scale-0 
          z-40 
          ${paths[depth] ? paths[depth][1] : ""}
          md:border border-accentGray 
          md:shadow-md font-normal text-sm 
          md:absolute 
          transition-all duration-200
          m-1
          md:rounded-md
          ${
            isFirstLevel
              ? "origin-top top-full "
              : "origin-top-left left-full top-3 "
          }
        `}
        >
          {item.subLinks.map((subItem, index) => (
            <MenuItem key={index} item={subItem} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

const DevDynamicMenu: React.FC<MenuItemsProps> = ({ menuItems, className }) => {
  return (
    <nav className={`w-full ${className}`}>
      <ul className="flex flex-col md:flex-row items-start md:items-center justify-between">
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default DevDynamicMenu;
