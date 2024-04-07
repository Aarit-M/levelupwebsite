import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
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

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }



  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          onClick={scrollToTop}
          variant="h6"
          color={isScrolling ? "gray" : "white"}
          className="cursor-pointer	"
        >
          Level UP
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
  
  <NavItem to="about">
  About Us
</NavItem>
  <MavItem href="mailto:twoawesome9@gmail.com">Contact Us</MavItem>
          <MavItem href="https://www.material-tailwind.com/docs/react/installation" target="_blank">
            Docs
          </MavItem>
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-center">
          
          
          
          <a href="https://twitter.com" target="blank"><IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
          >
            <i className="fa-brands fa-twitter text-base" />
          </IconButton>
          </a>

          <a href="https://facebook.com" target="blank">
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
          >
            <i className="fa-brands fa-facebook text-base" />
          </IconButton>
</a>
<a href="https://instagram.com" target="blank">
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
          >
            <i className="fa-brands fa-instagram text-base" />
          </IconButton>
</a>



          <a href="https://www.material-tailwind.com/blocks" target="_blank">
            <Button color={isScrolling ? "gray" : "white"} size="sm">
              Blocks
            </Button>
          </a>
        </div>
        </div>
    </MTNavbar>
  );
}

export default Navbar;

const scrollToTop = () => {
  scroll.scrollToTop();
};