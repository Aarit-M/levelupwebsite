"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";


function Hero() {
  return (
    <div className="relative min-h-screen w-full" id="hero">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
      <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <h1 variant="h1" color="white" className="mb-4 leading-[55px]	">
              <span className="text-[#048aff] font-bold text-[4rem]">Level</span> <br /> <span className="text-[#59a638] text-[5rem] font-black">U</span><span className="text-[#4dff00] font-black text-[5rem]">P</span>
            </h1>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              The perfect simulation game
            </Typography>
            <Typography className="mb-4" color="white" variant="h6">
              Get the game
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <a href="https://www.apple.com/app-store" target="blank"> <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                App Store
              </Button> </a>
              <a href="https://play.google.com/store/games?hl=en_US&gl=US" target="blank"> <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                Google Play
              </Button> </a>
              <a href="www.com" target="blank"><Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-web.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                Web Game 
              </Button> </a>
            </div>
          </div>
          <Image
            width={1040}
            height={810}
            src="/image/iphones.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md text-center">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-3">
            Level UP 
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 text-center"
          >
            Download our game to explore the intracacies of the business world via a task-based system to level up! 
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Hero;
