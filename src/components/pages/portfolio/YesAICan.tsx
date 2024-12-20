import React, { useEffect, useState } from "react";
import Frame1 from "public/yaic/yaic1.jpg";
import Frame2 from "public/yaic/yaic2.jpg";
import Frame3 from "public/yaic/yaic3.jpg";
import Frame4 from "public/yaic/yaic4.jpg";
import Frame5 from "public/yaic/yaic5.jpg";
import Frame6 from "public/yaic/yaic6.jpg";
import Frame7 from "public/yaic/yaic7.jpg";
import Frame8 from "public/yaic/yaic8.jpg";
import SectionFramesImageDesktop from "./SectionFramesImageDesktop";
import Section1 from "./Section1";
import SectionInfo from "./SectionInfo";
import Image from "next/image";
import POBLogo from "public/pob/pob-logo.png";

const paragraphs = [
  "Yes AI can is an art festival on the themes of digital creation, artificial intellignce, and fake news.",
  "The website is a landing page for the festival with all relevant information.",
  "It features a multi-step form with file upload, caching, and e-mail triggers.",
  "It integrates three.js to display a 3d model of the exhibition room, which is the Nikolaikirche in Rostock.",
  "It is fully responsive from mobile to desktop.",
];

const frames1 = [Frame1, Frame2, Frame3, Frame4];
const frames2 = [Frame5, Frame6, Frame7, Frame8];

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
    <div className="w-[80vw] md:w-[40vw] flex items-center justify-center text-black">
      <Image src={POBLogo} alt="post-organic-bauplan-logo" />
    </div>
  );
};

const YesAICan = () => {
  const isSmallScreen: boolean = useDeviceSize() < 1024;

  return (
    <>
      <div className="flex flex-col w-screen h-full">
        <Section1
          type={"client project:"}
          title={"yes ai can"}
          description={"art festival"}
          logo={<Logo />}
          bgColor={"bg-ai"}
          textColor={"text-black"}
          // bg={bg}
        />
        <SectionFramesImageDesktop
          bgColor={"bg-ai"}
          frames={frames1}
          isSmallScreen={isSmallScreen}
          project="yes-ai-can"
          collectionNo={0}
          arrowColor={"black"}
        />
        <SectionFramesImageDesktop
          bgColor={"bg-ai"}
          frames={frames2}
          isSmallScreen={isSmallScreen}
          project="yes-ai-can"
          collectionNo={1}
          arrowColor={"black"}
        />
        <SectionInfo
          bgColor={"bg-ai"}
          textColor={"text-black"}
          paragraphs={paragraphs}
          link="https://www.postorganic-bauplan.com/"
        />
      </div>
    </>
  );
};

export default YesAICan;
