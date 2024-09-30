import React, { useEffect, useState } from "react";
// import Frame1 from "../../../public/stick/stickandchoke.com_en-1.png";
// import Frame2 from "../../../public/stick/stickandchoke.com_en-2.png";
// import Frame3 from "../../../public/stick/stickandchoke.com_en-3.png";
// import Frame4 from "../../../public/stick/stickandchoke.com_en-4.png";
// import Frame5 from "../../../public/stick/stickandchoke.com_en-5.png";
// import Frame6 from "../../../public/stick/stickandchoke.com_en-6.png";
// import Frame7 from "../../../public/stick/stickandchoke.com_en-7.png";
// import Frame8 from "../../../public/stick/stickandchoke.com_en-8.png";
// import Frame9 from "../../../public/stick/stickandchoke.com_en-9.png";
// import SectionFramesImageDesktop from "./SectionFramesImageDesktop";
import Section1 from "./Section1";
import SectionInfo from "./SectionInfo";
import Image from 'next/image'
import POBLogo from '../../../public/pob/pob-logo.png'

const paragraphs = [
  "post-organic bauplan is a performance and research duo, combining dance and prosthesis.",
  "the website is a portfolio of all of the performances, installations and video works.",
  "it integrates three.js to display 3d models of the prostheses.",
  "it features full screen videos and images.",
  "it is fully responsive from mobile to desktop.",
  "the style is futuristic and low-key.",
];

// const frames1 = [Frame1, Frame2, Frame3, Frame4, Frame5];
// const frames2 = [Frame6, Frame7, Frame8, Frame9];

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
    <div className="w-[80vw] md:w-[40vw] flex items-center justify-center text-black"
    >
    <Image src={POBLogo} alt='post-organic-bauplan-logo' />
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
          description={"performance & research."}
          logo={
            <Logo />
          }
          bgColor={"bg-purple"}
          textColor={"text-white"}
          // bg={bg}
        />
        {/* <SectionFramesImageDesktop
          bgColor={"bg-white"}
          frames={frames1}
          isSmallScreen={isSmallScreen}
          project="stick-and-choke"
        />
        <SectionFramesImageDesktop
          bgColor={"bg-purple"}
          frames={frames2}
          isSmallScreen={isSmallScreen}
          project="stick-and-choke"
        /> */}
        <SectionInfo
          bgColor={"bg-white"}
          textColor={"text-black"}
          paragraphs={paragraphs}
          link="https://www.postorganic-bauplan.com/"
        />
      </div>
    </>
  );
};

export default PostOrganicBauplan;
