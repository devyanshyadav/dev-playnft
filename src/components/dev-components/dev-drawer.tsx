"use client";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import BlurDiv from "../global-cmp/blur-div";
import { IoMdClose } from "react-icons/io";

type DevDrawerProps = {
  openBtn: React.ReactNode;
  children: React.ReactNode;
  position?: "left" | "right" | "top" | "bottom";
  closeIcon?: boolean;
  title?: string;
};

export type DevDrawerRef = {
  setDrawer: (newState: boolean) => void;
};

const DevDrawer = forwardRef<DevDrawerRef, DevDrawerProps>(
  (
    { children, closeIcon = false, position = "right", openBtn, title },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const extraCss = {
      right: "border-l",
      left: "border-r",
      top: "border-b",
      bottom: "border-t",
    };

    // This will help to set the state of the drawer from parent component
    useImperativeHandle(ref, () => ({
      setDrawer: (newState) => {
        setOpen(newState);
      },
    }));

    return (
      <>
        <div onClick={() => setOpen(true)}>{openBtn}</div>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          direction={position}
          duration={200}
          style={{ padding: 0, backgroundColor: "transparent" }}
          className={`flex flex-col relative ${extraCss[position]} !bg-primary border-accentGray overflow-hidden`}
        >
          <BlurDiv className="!h-1/2" place="bottom-left" />
          {title && (
            <h2 className="text-white LightGradientBg font-medium border-b border-accentGray flex-shrink-0 p-3">
              {title}
            </h2>
          )}
          {!closeIcon && (
            <button
              className="absolute top-1 right-1 text-2xl text-white hover:text-[#06b6d4]"
              onClick={() => setOpen(false)}
              aria-label="Close drawer"
            >
              <IoMdClose/>
            </button>
          )}
          <div className="flex-grow overflow-auto">{children}</div>
        </Drawer>
      </>
    );
  }
);

// Add display name to the component
DevDrawer.displayName = 'DevDrawer';

export default DevDrawer;