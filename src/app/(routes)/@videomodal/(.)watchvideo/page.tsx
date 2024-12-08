"use client";
import DevModal from "@/components/dev-components/dev-modal";
import VideoPlayer from "@/components/global-cmp/video-player";
import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";

const WatchVideo = () => {
  return (
    <DevModal
      modalBtn={<></>}
      open={true}
      customCloseIcon={
        <Link
          href={"/"}
          className="aspect-square transition-all p-1 active:scale-95 rounded-xl GradientBorder"
        >
          <IoMdClose />
        </Link>
      }
    >
      <div>
        <VideoPlayer videoSrc="assets/videos/trailer.mp4" />
      </div>
    </DevModal>
  );
};

export default WatchVideo;
