import React, { useState } from "react";
// import useDimensions from "react-use-dimensions";
import Image from "next/image";
import Projects from "../src/Projects";
import Link from "next/link";
import Left from "../public/left.svg";
import Right from "../public/right.svg";

function Carousel2() {
  const [curr, setCurr] = useState(0);
  const length = Projects.length;

  if (!Array.isArray(Projects) || Projects.length <= 0) {
    null;
  }

  const nextSlide = () => {
    setCurr(curr === length - 1 ? 0 : curr + 1);
  };
  const prevSlide = () => {
    setCurr(curr === 0 ? length - 1 : curr - 1);
  };

  console.log(curr);

  return (
    <div className="h-screen w-1/2 max-w-[240px] mx-auto flex relative">
      <div className="cursor-pointer fixed left-8 top-1/2 border-b-[3.5px] border-red z-10">
        <Left onClick={() => prevSlide()} />
      </div>
      <div className="cursor-pointer fixed right-8 top-1/2 border-b-[3.5px] border-red z-10">
        <Right onClick={() => nextSlide()} />
      </div>
      {Projects.map((project, i) => (
        // <div
        //   className="px-6 font-inter select-none cursor-pointer dark:text-white text-black duration-500 flex flex-col m-auto max-w-[400px] md:max-w-[540px] lg:max-w-[640px] md:pt-8"
        //   key={i}
        // >
        <div key={i} className={i === curr ? "m-auto" : "inactive"}>
          {i === curr && (
            <>
              <div className="text-right">{project.title}</div>
              <Image
                src={project.image}
                alt={`Project for ${project.title}`}
                objectFit="cover"
                layout="responsive"
                priority={i === 0}
                width={1080}
                height={2100}
                // sizes={width !== undefined ? `${Math.round(width)}px` : "100vw"}
              />
              <Link href={project.link}>
                <a className="decoration-red underline underline-offset-2 inline-block mr-auto hover:cursor-pointer">
                  {project.link}
                </a>
              </Link>
            </>
          )}
        </div>
        // </div>
      ))}
    </div>
  );
}

export default Carousel2;
