import React, { useEffect, useState } from "react";
import Frame1 from "../../../public/merchbabe/frame1.svg";
import Frame2 from "../../../public/merchbabe/frame2.svg";
import Frame3 from "../../../public/merchbabe/frame3.svg";
import Frame5 from "../../../public/merchbabe/frame5.svg";
import Logo from "../../../public/merchbabe/logo.svg";
import Frame6 from "../../../public/merchbabe/frame6.svg";
import Frame7 from "../../../public/merchbabe/frame7.svg";
import Frame8 from "../../../public/merchbabe/frame8.svg";
import Frame9 from "../../../public/merchbabe/frame9.svg";
import Frame10 from "../../../public/merchbabe/frame10.svg";
import BackButton from "../../layout/BackButton";
import { framesType } from "./RecipeApp";
import SectionFrames from "./SectionFrames";
import Section1 from "./Section1";
import SectionInfo from "./SectionInfo";

const frames1: framesType[] = [
  (props) => <Frame1 {...props} />,
  (props) => <Frame2 {...props} />,
  (props) => <Frame3 {...props} />,
  (props) => <Frame5 {...props} />,
];
const frames2: framesType[] = [
  (props) => <Frame6 {...props} />,
  (props) => <Frame9 {...props} />,
  (props) => <Frame7 {...props} />,
  (props) => <Frame10 {...props} />,
];

const paragraphs = [
  "The site is a mobile-first designed, single-page app that isresponsive all the way up to desktop.",
  "The two main features are a list of portfolio works that are filterable by tags and a separate page for e-commerce which is integrated with PayPal.",
  "The site has an overwhelming brutalist design language, to match the graphic design style of the artist.",
  "Marquees in the header and footer render on top of document text as it scrolls past.",
  "Oversized fonts and menus are used on drop-downs and pop-ups.",
  "Display fonts are capatalized.",
  "Alerts are in the form of brief pop-ups from the bottom of the screen.",
  "It has three colors; black, white, and neon-orange.",
];

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

const MerchBabe = () => {
  const isSmallScreen: boolean = useDeviceSize() < 1024;

  return (
    <>
      <BackButton link={"/portfolio"} />
      <div className="flex flex-col w-screen h-full">
        <Section1
          type={"client project:"}
          title={"merchbabe"}
          description={"a graphic designers portfolio and e-commerce website."}
          logo={
            <Logo
              className="-mt-12 md:mt-0"
              width={isSmallScreen ? "80%" : "40vw"}
              height={isSmallScreen ? "30vh" : "50vh"}
            />
          }
          bgColor={"bg-white"}
        />
        <SectionFrames
          bgColor={"bg-mbOrange"}
          frames={frames1}
          isSmallScreen={isSmallScreen}
        />
        <SectionFrames
          bgColor={"bg-white"}
          frames={frames2}
          isSmallScreen={isSmallScreen}
        />
        <SectionInfo
          bgColor={"bg-mbOrange"}
          textColor={"text-white"}
          paragraphs={paragraphs}
        />
      </div>
    </>
  );
};

export default MerchBabe;
