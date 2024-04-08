"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CursorArrowRaysIcon,
  ComputerDesktopIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Simulation Game",
    children:
      "Our game takes you into the life of someone in the business field and gives players the experience of working at a real job, in the real world.",
  },
  {
    icon: ComputerDesktopIcon,
    title: "Multi-platformed",
    children:
      "Made with community in mind, our game allows users to play whether they're on windows, mac, or linux.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        
        <Typography variant="h1" color="blue-gray" className="mb-4">
          About the Game
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
