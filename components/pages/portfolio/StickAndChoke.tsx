import React, { useEffect, useState } from "react";
import Frame1 from "../../../public/stick/stickandchoke.com_en-1.png";
import Frame2 from "../../../public/stick/stickandchoke.com_en-2.png";
import Frame3 from "../../../public/stick/stickandchoke.com_en-3.png";
import Frame4 from "../../../public/stick/stickandchoke.com_en-4.png";
import Frame5 from "../../../public/stick/stickandchoke.com_en-5.png";
import Frame6 from "../../../public/stick/stickandchoke.com_en-6.png";
import Frame7 from "../../../public/stick/stickandchoke.com_en-7.png";
import Frame8 from "../../../public/stick/stickandchoke.com_en-8.png";
import Frame9 from "../../../public/stick/stickandchoke.com_en-9.png";
import Section1 from "./Section1";
import SectionInfo from "./SectionInfo";
import SectionFramesImageDesktop from "./SectionFramesImageDesktop";
import Image from 'next/image'
import StickLogo from '../../../public/stick/logo.png'

const paragraphs = [
  "Stick & Choke is a Tattoo Artist based in Leipzig.",
  "The website is a portfolio and booking platform to maintain and manage potential client interactions.",
  "It uses Payload CMS to allow the artist to maintain all website images, translations, faqs, travel plans etc.",
  "There is a multi-step booking form which includes image upload, and allows for each step to be modified before submission.",
  "There is a newsletter feature which allows potential clients to define which city they would like the artist to travel to.",
  "The artist can announce where they plan to travel, which announces to all subscribers in that city of the upcoming trip.",
  "It is fully responsive from mobile to desktop.",
  "The design is bright, oversized and fun.",
];

const frames1 = [Frame1, Frame2, Frame3, Frame4, Frame5];
const frames2 = [Frame6, Frame7, Frame8, Frame9];

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
    <div className="w-full px-32 flex items-center justify-center text-black"
    >
    <Image src={StickLogo} alt='stick-and-choke-logo' />
    </div>
  );
};

const StickAndChoke = () => {
  const isSmallScreen: boolean = useDeviceSize() < 1024;

  return (
    <>
      <div className="flex flex-col w-screen h-full">
        <Section1
          type={"client project:"}
          title={"Stick & Choke"}
          description={"portfolio and booking platform for tattoo artist"}
          logo={
            <Logo />
          }
          bgColor={"bg-yellow"}
          textColor={"text-black"}
          // bg={bg}
        />
        <SectionFramesImageDesktop
          bgColor={"bg-white"}
          frames={frames1}
          isSmallScreen={isSmallScreen}
          project="stick-and-choke"
        />
        <SectionFramesImageDesktop
          bgColor={"bg-yellow"}
          frames={frames2}
          isSmallScreen={isSmallScreen}
          project="stick-and-choke"
        />
        <SectionInfo
          bgColor={"bg-white"}
          textColor={"text-black"}
          paragraphs={paragraphs}
          link="https://stickandchoke.com/"
        />
      </div>
    </>
  );
};

export default StickAndChoke;
