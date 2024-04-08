"use client";
import React from "react";
import { Typography, Card } from "@material-tailwind/react";
import { Link, Element, animateScroll as scroll, scrollSpy } from 'react-scroll'

const FAQS = [
  {
    title: "How Do I Play?",
    desc: "Getting started is easy! Simply download the game on any one of the platforms listed below and start!", 
    bullet: "• Google Playstore",
    bullet1: "• Website",
    bullet2: "• AppStore",
  },
  {
    title: "How Much Does the Game Cost?",
    desc: "Absolutely nothing. Just download and play!",
  },
  {
    title: "What If I Need Help or Have Technical Issues?",
    desc: "Our dedicated support team is here to assist you. Reach out via email @ and we'll get back to you promptly.",
  },
];

export function Faqs() {
  return (
    <section className="px-8 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Frequently Asked Questions
          </Typography> <br /><br />
        </div>
        <br /><br />
        <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-3">
          {FAQS.map(({ title, desc, bullet, bullet1, bullet2 }) => (
            <Card key={title} shadow={false} color="transparent">
              <Typography color="blue-gray" className="pb-6" variant="h4">
                {title}
              </Typography>
              <div className="pt-2">
                <Typography className="font-normal!text-gray-500">
                  {desc}
                </Typography>
              </div>
              <div id="bullet" className="pt-6" onClick={scrollToTop}>
                <div className="pt-2">
                  <a href="#">
                    <Typography className="font-black text-black">
                      {bullet}
                    </Typography>
                  </a>
                </div>
                <div className="pt-2">
                  <a href="#">
                    <Typography className="font-black text-black">
                      {bullet1}
                    </Typography>
                  </a>
                </div>
                <div className="pt-2 ">
                  <a href="#">
                    <Typography className="font-black text-black">
                      {bullet2}
                    </Typography>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;

const scrollToTop = () => {
  scroll.scrollToTop();
};
