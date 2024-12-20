import React, { useEffect, useState } from "react";
import Frame1 from "public/pob/pob1.jpg";
import Frame2 from "public/pob/pob2.jpg";
import Frame3 from "public/pob/pob3.jpg";
import Frame4 from "public/pob/pob4.png";
import Frame5 from "public/pob/pob5.jpg";
import Frame6 from "public/pob/pob6.jpg";
import Frame7 from "public/pob/pob7.jpg";
import Frame8 from "public/pob/pob8.jpg";
import Frame9 from "public/pob/pob9.jpg";
import Frame10 from "public/pob/pob99.jpg";
import SectionFramesImageDesktop from "./SectionFramesImageDesktop";
import Section1 from "./Section1";
import SectionInfo from "./SectionInfo";
import Image from "next/image";
import POBLogo from "public/pob/pob-logo.png";

const paragraphs = [
  "Post-organic bauplan is a performance and research duo, combining dance and prosthesis.",
  "The website is a portfolio of all of the performances, installations and video works.",
  "It integrates three.js to display 3d models of the prostheses.",
  "It features full screen videos and images.",
  "It is fully responsive from mobile to desktop.",
  "The style is futuristic and low-key.",
];

const frames1 = [Frame1, Frame2, Frame3];
const frames2 = [Frame4, Frame5, Frame6, Frame7];
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
    <div className="w-[80vw] md:w-[40vw] flex items-center justify-center text-black">
      <Image src={POBLogo} alt="post-organic-bauplan-logo" />
    </div>
  );
};

const PostOrganicBauplan = () => {
  const isSmallScreen: boolean = useDeviceSize() < 1024;

  return (
    <>
      <div className="flex flex-col w-screen h-full">
        <Section1
          type={"client project:"}
          title={"post–organic bauplan"}
          description={"performance & research"}
          logo={<Logo />}
          bgColor={"bg-black"}
          textColor={"text-purple"}
          // bg={bg}
        />
        <SectionFramesImageDesktop
          bgColor={"bg-black"}
          frames={frames1}
          isSmallScreen={isSmallScreen}
          project="postorganic-bauplan"
          collectionNo={0}
          arrowColor={"white"}
        />
        <SectionFramesImageDesktop
          bgColor={"bg-black"}
          frames={frames2}
          isSmallScreen={isSmallScreen}
          project="postorganic-bauplan"
          collectionNo={1}
          arrowColor={"white"}
        />
        <SectionFramesImageDesktop
          bgColor={"bg-black"}
          frames={frames3}
          isSmallScreen={isSmallScreen}
          project="postorganic-bauplan"
          collectionNo={2}
          arrowColor={"white"}
        />
        <SectionInfo
          bgColor={"bg-black"}
          textColor={"text-white"}
          paragraphs={paragraphs}
          link="https://www.postorganic-bauplan.com/"
        />
      </div>
    </>
  );
};

export default PostOrganicBauplan;
