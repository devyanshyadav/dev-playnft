'use client'
import React, { useEffect, useRef, useState } from "react";
import { HiMiniPause, HiMiniPlay } from "react-icons/hi2";

interface VideoPlayerProps {
  videoSrc: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showIcon, setShowIcon] = useState<boolean>(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
      
      // Show icon briefly when toggling
      setShowIcon(true);
      setTimeout(() => setShowIcon(false), 1000);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    
    const handlePlay = () => {
      setIsPlaying(true);
      setShowIcon(true);
      setTimeout(() => setShowIcon(false), 1000);
    };
    
    const handlePause = () => {
      setIsPlaying(false);
      setShowIcon(true);
    };

    if (video) {
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);

      video.play().catch(() => {
        console.log('Autoplay was prevented');
        setShowIcon(true);
      });

      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
      };
    }
  }, [videoSrc]);

  return (
    <div className="video-container z-10 relative md:[mask-image:_linear-gradient(to_right,_transparent_0,_white_150px,white_calc(100%-150px),_transparent_100%)]">
      <video
        className=""
        ref={videoRef}
        controls
        width="100%"
        height="auto"
        autoPlay={true}
        src={videoSrc}
      >
        Your browser does not support the video tag.
      </video>
      {showIcon && (
        <div
          onClick={togglePlay}
          className="!absolute rounded-full p-4 GradientBorder left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer text-3xl"
        >
          {isPlaying ? (
            <HiMiniPause />
          ) : (
            <HiMiniPlay className="translate-x-0.5" />
          )}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;