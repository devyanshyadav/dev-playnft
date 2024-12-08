//TSX code
import React from "react";

import { RiMenu2Fill } from "react-icons/ri";
import Link from "next/link";
import DevDynamicMenu, { NavLink } from "../dev-components/dev-dynamic-menu";
import DevDrawer from "../dev-components/dev-drawer";
import DevButton from "./dev-button";

type NavbarProps = {
  menuItems: NavLink[];
  logo: React.ReactNode;
};
const ResponsiveMenu = ({ menuItems, logo }: NavbarProps) => {
  return (
    <>
      <Link href="/">{logo}</Link>
      <div className="md:block hidden">
        <DevDynamicMenu menuItems={menuItems} />
      </div>
      <div className="md:hidden block order-last">
        <DevDrawer
          closeIcon={true}
          position="right"
          title="Menu"
          openBtn={
            <DevButton asIcon rounded="full" size="lg">
              <RiMenu2Fill />
            </DevButton>
          }
        >
          <DevDynamicMenu menuItems={menuItems} />
        </DevDrawer>
      </div>
    </>
  );
};

export default ResponsiveMenu;
