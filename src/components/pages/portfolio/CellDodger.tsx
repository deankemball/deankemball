import React, { useEffect, useState } from "react";
import Frame1 from "../../../public/cell-dodger/cd-desktop-1.webp";
import Frame2 from "../../../public/cell-dodger/cd-desktop-2.webp";
import Frame3 from "../../../public/cell-dodger/cd-1.webp";
import Frame4 from "../../../public/cell-dodger/cd-2.webp";
import Frame5 from "../../../public/cell-dodger/cd-3.webp";
import Frame6 from "../../../public/cell-dodger/cd-4.webp";
import Section1 from "./Section1";
import SectionInfo from "./SectionInfo";
import SectionFramesImage from "./SectionFramesImage";
import CellDodgerLogo from "../../../public/cell-dodger/cell-dodger-logo.svg";
import SectionFramesImageDesktop from "./SectionFramesImageDesktop";

const paragraphs = [
  "cell dodger was created in a couple of weeks as a post-graduate project with the intention of using it to explain and teach grid methods to students of a front end development bootcamp.",
  "it is a custom engine written in typescript and works via simple dom manipulation, no canvas is involved.",
  "pickups are spawned, like coins and hearts, when collisions are detected the screen flashes a corresponding color and a short message is printed to the console below.",
  "users can adjust game settings, for example number of enemies and game speed.",
  "for mobile devices, a joystick is implemented, but its currently a bit buggy and only really works if you install the page to your device like an app.",
  "it was fun to work on and maybe i will continue working on it some day.",
  "some things i would like to add are a high-score database, improved enemy ai, additional pickups, random map generation, and the ability to go through the edge into a new area.",
];

const frames1 = [Frame1];
const frames2 = [Frame2];
const frames3 = [Frame3, Frame4, Frame5, Frame6];

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
    <div className="w-full flex justify-center h-full items-center">
      <CellDodgerLogo className="text-9xl" />
    </div>
  );
};

const CellDodger = () => {
  const isSmallScreen: boolean = useDeviceSize() < 1024;

  return (
    <>
      <div className="flex flex-col w-screen h-full">
        <Section1
          type={"personal project:"}
          title={"CELL DODGER"}
          description={"A vanilla TypeScript rogue-like video game."}
          logo={
            // <Logo
            //   className="-mt-12 md:mt-0"
            //   width={isSmallScreen ? "80%" : "40vw"}
            //   height={isSmallScreen ? "30vh" : "50vh"}
            // />
            <Logo />
          }
          bgColor={"bg-cdodger1"}
          textColor={"text-white"}
          // bg={bg}
        />
        <SectionFramesImageDesktop
          bgColor={"bg-cdodger2"}
          frames={frames1}
          isSmallScreen={isSmallScreen}
          project="cell-dodger"
        />
        <SectionFramesImage
          bgColor={"bg-cdodger2"}
          frames={frames3}
          isSmallScreen={isSmallScreen}
        />
        <SectionFramesImageDesktop
          bgColor={"bg-cdodger2"}
          frames={frames2}
          isSmallScreen={isSmallScreen}
          project="cell-dodger"
        />
        <SectionInfo
          bgColor={"bg-cdodger1"}
          textColor={"text-white"}
          paragraphs={paragraphs}
          link="https://cell-dodger.vercel.app/"
        />
      </div>
    </>
  );
};

export default CellDodger;
