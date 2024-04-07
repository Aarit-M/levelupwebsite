"use client";

import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/solid";
import TestimonialCard from "../components/testimonial-card";
import { Element } from 'react-scroll'


const TESTIMONIALS = [
  {
    feedback:
      "djdj",
    client: "Rayan Hossain",
    title: "Student at WWMS",
    img: "/image/avatar.png",
  },
  {
    feedback: "Hi, I'm Aarit and I'm 14 years old! Along with coding I love to play video games, volleyball, and cross country. I've also participated in FBLA in 2023 garnering a 6th place medal for Exploring Technology.",
    client: "Aarit Malhotra",
    title: "Student at WWMS",
    img: "/image/avatar.png",
  },
  {
    feedback:
      "A 13 year old student at WWMS. Loves coding, playing basketball, and video games. Previously participated in Odyssey of the Mind and got first place in regionals with his team along with 7th place nationally for FBLA last year for Multimedia and Website Development",
    client: "Rishabh Jain",
    title: "Student at WWMS",
    img: "/image/avatar.png",
  },
];

export function Testimonials() {
  return (
    <Element className="px-10 !py-20" id="about" name= "about">
      <div className="container mx-auto">
        <div className="mb-20 flex w-full flex-col items-center">
          <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white ">
            <UserIcon className="h-6 w-6" />
          </div>
          <Typography variant="h2" color="blue-gray" className="mb-2">
            About Us
          </Typography>
          
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20">
          {TESTIMONIALS.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>
      </div>
    </Element>
  );
}
export default Testimonials;
