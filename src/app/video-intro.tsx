 'use client';

import React, { useState } from "react";
import ReactPlayer from "react-player";
import { IconButton } from "@material-tailwind/react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/outline";
import video from "../../public/video/video.mp4";

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="p-8">
      <div
        className="w-full container px-5 overflow-hidden rounded-xl relative mx-auto mt-20 max-w-6xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transition: "opacity 0.3s", // Add opacity transition
        }}
      >
        <div className="bg-black/25 z-10 absolute w-full h-full inset-0 rounded-xl" />
        <ReactPlayer
          url={video}
          width={1150}
          height={625}
          className="w-full object-cover scale-110 rounded-xl h-full"
          playing={isPlaying}
          controls={false}
        />
        <div
          className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-10"
          style={{
            opacity: isHovered ? 1 : 0, // Set opacity based on hover state
            transition: "opacity 0.3s", // Add opacity transition
          }}
        >
          <IconButton
            color="white"
            className="rounded-full"
            size="lg"
            onClick={togglePlay}
          >
            {isPlaying ? <PauseIcon className="h-6 w-6" /> : <PlayIcon className="h-6 w-6" />}
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
