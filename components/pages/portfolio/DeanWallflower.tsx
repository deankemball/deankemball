import React, { useEffect, useState } from "react";
import WilmaLogo from "../../../public/deanwallflower/wilma-logo.webp";
import Frame1 from "../../../public/deanwallflower/dw-1.webp";
import Frame2 from "../../../public/deanwallflower/dw-2.webp";
import Frame3 from "../../../public/deanwallflower/dw-3.webp";
import Frame4 from "../../../public/deanwallflower/dw-4.webp";
import Frame5 from "../../../public/deanwallflower/dw-5.webp";
import Frame6 from "../../../public/deanwallflower/dw-6.webp";
import Frame7 from "../../../public/deanwallflower/dw-7.webp";
import Frame8 from "../../../public/deanwallflower/dw-8.webp";
import Frame9 from "../../../public/deanwallflower/dw-9.webp";
import Frame10 from "../../../public/deanwallflower/dw-6.webp";
import Section1 from "./Section1";
import SectionInfo from "./SectionInfo";
import SectionFramesImageDesktop from "./SectionFramesImageDesktop";
import Image from "next/image";

const paragraphs = [
  "deanwallflower is my visual arts project.",
  "the website is a portfolio of my procedurally generated motion graphics.",
  "it is inspired by desktop operating systems.",
  "therefore it is a desktop-first site, however it is responsive and also works all devices.",
  "the main features are full screen video backgrounds, and UI elements that are toggled on and off with the associated links.",
  "the UI elements have a transparent background. the idea is that you can continue watching the video while you explore the site, or even contact me via the form, which is a draggable element.",
  "upcoming features include adding custom video controls to pause and play the video, and a timeline seekking feature.",
];

const frames1 = [Frame1, Frame2, Frame3, Frame4];
const frames2 = [Frame5, Frame6, Frame7];
const frames3 = [Frame8, Frame9, Frame10];

const useDeviceSize = () => {
  const [width, setWidth] = useState(0);
  function handleWindowResize() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return width;
};

const Logo = () => {
  return (
    <div className="font-hubot flex flex-1 mx-auto flex-col justify-center items-center lg:-ml-40 text-white">
      <h1 className="flex flex-col shadow-lg lg:shadow-xl xl:shadow-2xl text-4xl md:text-7xl lg:text-7xl xl:text-9xl font-black italic border-dashed border-[2px] md:border-[3px] lg:border-3 xl:border-4 border-white bg-black/40 pl-4 pr-20 py-4">
        <span className="-mb-3 lg:-mb-5 xl:-mb-7">dean</span>
        <span>wallflower</span>
      </h1>
    </div>
  );
};

const Wilma = () => {
  const isSmallScreen: boolean = useDeviceSize() < 1024;

  return (
    <>
      <div className="flex flex-col w-screen h-full">
        <Section1
          type={"client project:"}
          title={"dw"}
          description={"Portfolio website for new media artist."}
          logo={
            // <Logo
            //   className="-mt-12 md:mt-0"
            //   width={isSmallScreen ? "80%" : "40vw"}
            //   height={isSmallScreen ? "30vh" : "50vh"}
            // />
            <Logo />
          }
          bgColor={"bg-dwred"}
          textColor={"text-white"}
          // bg={bg}
        />
        <SectionFramesImageDesktop
          bgColor={"bg-black"}
          frames={frames1}
          isSmallScreen={isSmallScreen}
          project="deanwallflower"
        />
        <SectionFramesImageDesktop
          bgColor={"bg-dwred"}
          frames={frames2}
          isSmallScreen={isSmallScreen}
          project="deanwallflower"
        />
        <SectionInfo
          bgColor={"bg-black"}
          textColor={"text-white"}
          paragraphs={paragraphs}
          link="https://deanwallflower.vercel.app/"
        />
      </div>
    </>
  );
};

export default Wilma;
