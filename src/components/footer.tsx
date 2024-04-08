"use client";
import Image from "next/image";
import { Typography, IconButton, Button } from "@material-tailwind/react";
import { Link, Element, animateScroll as scroll, scrollSpy } from 'react-scroll'
import Testimonials from "../app/testimonials"


interface MavItemProps {
  children: React.ReactNode;
  href?: string;
}

function MavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <a href={href || "#"} variant="small" className="font-medium" target="_blank">
        {children}
      </a>
    </li>
  );
}

interface NavItemProps {
  children: React.ReactNode;
  to?: string;
}

function NavItem({ children, to }: NavItemProps) {
  return (
    <li>
      <Link
        to={to || "about"}
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        className="font-medium cursor-pointer"
      >
        {children}
      </Link>
    </li>
  );
}


const LINKS = [
  { name: "About Us", href: "#about" },
  { name: "Docs", href: "https://github.com" },
];const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-gray-900 px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
        <div className="text-center md:text-left flex flex-col justify-center">
  <Typography
    as="a"
    href="https://www.material-tailwind.com"
    target="_blank"
    variant="h5"
    color="white"
    className="mb-4"
  >
    Level UP
  </Typography>
  <Typography color="white" className="mb-4 font-normal">
    The perfect simulation game
  </Typography>
  <ul className="flex items-center justify-center md:justify-start">
    <li className="mr-6">
      <Typography color="white" className="py-1 font-medium transition-colors">
        <NavItem to="about">About Us</NavItem>
      </Typography>
    </li>
    <li>
      <Typography color="white" className="py-1 font-medium transition-colors">
        <MavItem href="https://github.com/Aarit-M/LevelUP" target="_blank">Docs</MavItem>
      </Typography>
    </li>
  </ul>
</div>
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <Typography variant="h6" color="white" className="mb-3">
              Get the App
            </Typography>
            <div className="flex flex-col gap-2">
              <a href="https://www.apple.com/app-store" target="blank"><Button
                color="white"
                className="flex items-center justify-center"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  className="-mt-0.5 mr-2 h-6 w-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  alt="ios"
                />
                Steam
              </Button> </a>
              <a href="https://fblalevelup.itch.io/playnow" target="blank"> <Button
                color="white"
                className="flex items-center justify-center"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-web.png"
                  className="-mt-0.5 mr-2 h-6 w-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  alt="web"
                />
                Web Game
              </Button> </a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <Typography
            color="white"
            className="text-center font-normal opacity-75"
          >
             {CURRENT_YEAR} RAR GAMES 
          </Typography>

          <div className="flex gap-2">
            <a href="https://www.twitter.com" target="_blank"><IconButton variant="text" color="white">
              <i className="fa-brands fa-twitter text-2xl not-italic opacity-75"></i>
            </IconButton></a>
            <a href="https://www.instagram.com" target="_blank"><IconButton variant="text" color="white">
              <i className="fa-brands fa-linkedin text-2xl not-italic opacity-75"></i>
            </IconButton> </a>
            <a href="https://www.facebook.com" target="_blank"><IconButton variant="text" color="white">
              <i className="fa-brands fa-facebook text-2xl not-italic opacity-75"></i>
            </IconButton></a>
            <a href="https://www.github.com" target="_blank"> <IconButton variant="text" color="white">
              <i className="fa-brands fa-github text-2xl not-italic opacity-75"></i>
            </IconButton></a>
            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
