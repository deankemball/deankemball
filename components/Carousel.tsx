import React, { useState } from "react";
// import useDimensions from "react-use-dimensions";
import Image from "next/image";
import Link from "next/link";
import Left from "../public/left.svg";
import Right from "../public/right.svg";
import { motion } from "framer-motion";

const Projects = [
  {
    image: "/media-4.jpg",
    title: "MERCH BABE",
    link: "https://merchbabe.net/",
  },
  {
    image: "/media-1.jpg",
    title: "Dean Wallflower",
    link: "https://deanwallflower.com/",
  },
  {
    image: "/media-3.jpg",
    title: "Dean Wallflower",
    link: "https://dw-tw.netlify.com/",
  },
];

function Carousel() {
  const [curr, setCurr] = useState(0);
  const length = Projects.length;

  const nextSlide = () => {
    setCurr(curr === length - 1 ? 0 : curr + 1);
  };
  const prevSlide = () => {
    setCurr(curr === 0 ? length - 1 : curr - 1);
  };

  return (
    <div className="h-screen w-1/2 max-w-[200px] md:max-w-[240px] mx-auto flex pb-8 md:pb-0">
      <div className="cursor-pointer fixed left-8 top-[calc(50vh-32px)] border-b-[3.5px] border-red z-10">
        <Left className="w-8 h-8" onClick={() => prevSlide()} />
      </div>
      <div className="cursor-pointer fixed right-8 top-[calc(50vh-32px)] border-b-[3.5px] border-red z-10">
        <Right className="w-8 h-8" onClick={() => nextSlide()} />
      </div>
      {Projects.map((project, i) => (
        <div key={i} className="select-none m-auto">
          {i === curr && (
            <motion.div
              initial="pageInitial"
              animate="pageAnimate"
              exit="pageExit"
              // variants={direction === "up" ? pageUp : pageDown}
              variants={{
                pageExit: {
                  opacity: 0,
                  // y: "100%",
                  transition: {
                    delay: 0.1,
                    duration: 0.1,
                    ease: "easeOut",
                  },
                },
                pageAnimate: {
                  opacity: 1,
                  // y: "0%",
                  transition: {
                    delay: 0.1,
                    duration: 0.15,
                    ease: "easeIn",
                  },
                },
                pageInitial: {
                  opacity: 0,
                  // y: "-100%",
                  transition: {
                    delay: 0.1,
                    duration: 0.15,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <div className="text-right select-none">{project.title}</div>
              <Image
                src={project.image}
                alt={`Project for ${project.title}`}
                objectFit="cover"
                layout="intrinsic"
                priority={i === 0}
                width={1080}
                height={2166}
              />
              <Link href={project.link}>
                <a className="decoration-red underline underline-offset-2 inline-block mr-auto cursor-pointer">
                  {project.link}
                </a>
              </Link>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Carousel;
