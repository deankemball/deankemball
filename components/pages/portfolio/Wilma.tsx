import React, { useEffect, useState } from "react";
import WilmaLogo from "../../../public/wilma/wilma-logo.webp";
import Frame1 from "../../../public/wilma/wilma-1.webp";
import Frame2 from "../../../public/wilma/wilma-2.webp";
import Frame3 from "../../../public/wilma/wilma-3.webp";
import Frame4 from "../../../public/wilma/wilma-4.webp";
import Frame5 from "../../../public/wilma/wilma-5.webp";
import Frame6 from "../../../public/wilma/wilma-6.webp";
import Section1 from "./Section1";
import SectionInfo from "./SectionInfo";
import SectionFramesImage from "./SectionFramesImage";
import Image from "next/image";

const paragraphs = [
  "wilma is a community culture and art project that aims to create a space for people to connect and learn together.",
  "the main feature of the site is a calendar of upcoming events, with a modal to show more information.",
  "it aims to be fun and modern without being too serious or childlike.",
  "the background is a procedurally generated pattern, with colors matching the site.",
  "upcoming features include internationalisation, and a link to their instagram.",
];

const frames1 = [Frame1, Frame2, Frame3];
const frames2 = [Frame4, Frame5, Frame6];

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
    <h1 className="flex flex-1 mx-auto flex-col justify-center items-center font-grotesk lg:-ml-40">
      <p className="text-9xl xl:text-[156px] font-semibold tracking-wide -mb-5 xl:-mb-8">
        WILMA
      </p>
      <p className="text-[42px] xl:text-[52px] tracking-[0.02rem] font-medium ml-[16px] xl:ml-[32px]">
        KUL<em>TOUR</em> KUTSCHE
      </p>
    </h1>
  );
};

const Wilma = () => {
  const isSmallScreen: boolean = useDeviceSize() < 1024;

  return (
    <>
      <div className="flex flex-col w-screen h-full">
        <Section1
          type={"client project:"}
          title={"WILMA"}
          description={"A landing page for a mobile socio-cultural project."}
          logo={
            // <Logo
            //   className="-mt-12 md:mt-0"
            //   width={isSmallScreen ? "80%" : "40vw"}
            //   height={isSmallScreen ? "30vh" : "50vh"}
            // />
            <Logo />
          }
          bgColor={"bg-wilma1"}
          // bg={bg}
        />
        <SectionFramesImage
          bgColor={"bg-wilma2"}
          frames={frames1}
          isSmallScreen={isSmallScreen}
        />
        <SectionFramesImage
          bgColor={"bg-wilma1"}
          frames={frames2}
          isSmallScreen={isSmallScreen}
        />
        <SectionInfo
          bgColor={"bg-wilma2"}
          textColor={"text-white"}
          paragraphs={paragraphs}
          link="https://www.kultourkutsche.de/"
        />
      </div>
    </>
  );
};

export default Wilma;
