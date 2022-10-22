import React, { SVGProps, useEffect, useState } from "react";
import Frame1 from "../../../public/recipeapp/frames/frame1.svg";
import Frame2 from "../../../public/recipeapp/frames/frame2.svg";
import Frame3 from "../../../public/recipeapp/frames/frame3.svg";
import Frame4 from "../../../public/recipeapp/frames/frame4.svg";
import Frame5 from "../../../public/recipeapp/frames/frame5.svg";
import Frame6 from "../../../public/recipeapp/frames/frame6.svg";
import Frame7 from "../../../public/recipeapp/frames/frame7.svg";
import Frame8 from "../../../public/recipeapp/frames/frame8.svg";
import Logo from "../../../public/recipeapp/logo.svg";
import Card1 from "../../../public/recipeapp/cards/card1.svg";
import Card2 from "../../../public/recipeapp/cards/card2.svg";
import Card3 from "../../../public/recipeapp/cards/card3.svg";
import Card4 from "../../../public/recipeapp/cards/card4.svg";
import Card5 from "../../../public/recipeapp/cards/card5.svg";
import Card6 from "../../../public/recipeapp/cards/card6.svg";
import Card7 from "../../../public/recipeapp/cards/card7.svg";
import Card8 from "../../../public/recipeapp/cards/card8.svg";
import Card9 from "../../../public/recipeapp/cards/card9.svg";
import Card10 from "../../../public/recipeapp/cards/card10.svg";
import Colors1 from "../../../public/recipeapp/colors/colors1.svg";
import Colors2 from "../../../public/recipeapp/colors/colors2.svg";
import Colors3 from "../../../public/recipeapp/colors/colors3.svg";
import Section1 from "./Section1";
import SectionFrames from "./SectionFrames";

export type framesType = (props: SVGProps<SVGSVGElement>) => JSX.Element;

const frames1: framesType[] = [
  (props) => <Frame1 {...props} />,
  (props) => <Frame2 {...props} />,
  (props) => <Frame3 {...props} />,
  (props) => <Frame4 {...props} />,
  (props) => <Frame5 {...props} />,
  (props) => <Frame6 {...props} />,
  (props) => <Frame7 {...props} />,
  (props) => <Frame8 {...props} />,
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

const RecipeApp = () => {
  const isSmallScreen: boolean = useDeviceSize() < 1024;

  return (
    <div className="flex flex-col w-screen snap-y snap-proximity">
      <Section1
        type={"ui/ux mockup:"}
        title={"recipe app"}
        description={
          "a recipe discovery and scrapbooking app with integrated shopping list generator."
        }
        logo={
          <Logo
            width={isSmallScreen ? "100vw" : "80vw"}
            height={isSmallScreen ? "30vh" : "100vh"}
          />
        }
        bgColor={"bg-darkGreen"}
      />
      <SectionFrames
        bgColor={"bg-lightGreen"}
        frames={frames1}
        isSmallScreen={isSmallScreen}
      />
      <section
        id="3"
        className="bg-darkGreen h-screen flex flex-col justify-center overflow-x-scroll lg:overflow-auto snap-center"
      >
        <div className="flex lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:place-items-start h-full w-screen py-16 lg:py-20 lg:px-32">
          <div className="flex m-auto px-8 lg:px-0">
            <Card1
              width={isSmallScreen ? "85vw" : "100%"}
              height={isSmallScreen ? "60%" : "100%"}
            />
          </div>
          <div className="flex m-auto px-8 lg:px-0">
            <Card2
              width={isSmallScreen ? "85vw" : "100%"}
              height={isSmallScreen ? "60%" : "100%"}
            />
          </div>
          <div className="flex m-auto px-8 lg:px-0">
            <Card3
              width={isSmallScreen ? "85vw" : "100%"}
              height={isSmallScreen ? "60%" : "100%"}
            />
          </div>
          <div className="flex m-auto px-8 lg:px-0">
            <Card4
              width={isSmallScreen ? "85vw" : "100%"}
              height={isSmallScreen ? "60%" : "100%"}
            />
          </div>
          <div className="flex flex-col my-auto lg:mb-auto mx-auto px-8 lg:px-0">
            <Card5
              width={isSmallScreen ? "85vw" : "100%"}
              height={isSmallScreen ? "60%" : "100%"}
            />
          </div>
          <div className="flex flex-col my-auto lg:mb-auto mx-auto px-8 lg:px-0 gap-4">
            <Card6
              width={isSmallScreen ? "85vw" : "100%"}
              height={isSmallScreen ? "30%" : "100%"}
            />
            <Card7
              width={isSmallScreen ? "85vw" : "100%"}
              height={isSmallScreen ? "30%" : "100%"}
            />
          </div>
          <div className="flex flex-col my-auto lg:mb-auto mx-auto px-8 lg:px-0">
            <Card8
              width={isSmallScreen ? "85vw" : "100%"}
              height={isSmallScreen ? "30%" : "100%"}
            />
            <Card9
              width={isSmallScreen ? "85vw" : "100%"}
              height={isSmallScreen ? "30%" : "100%"}
            />
          </div>
          <div className="flex flex-col my-auto lg:mb-auto mx-auto px-8 lg:px-0">
            <Card10
              width={isSmallScreen ? "85vw" : "100%"}
              height={isSmallScreen ? "60%" : "100%"}
            />
          </div>
        </div>
      </section>
      <section
        id="4"
        className="bg-lightGreen h-screen w-full flex flex-col justify-center overflow-x-clip lg:px-40 snap-center"
      >
        <div className="flex w-full h-full gap-4 overflow-x-scroll lg:overflow-x-auto scrollbar-hide">
          <Colors1
            className="w-full lg:pb-64 h-full flex flex-shrink-0 px-8 lg:w-1/3"
            width={isSmallScreen ? "100%" : "33vw"}
            height={"100vh"}
          />
          <Colors2
            className="w-full h-full flex flex-shrink-0 px-8 lg:w-1/3"
            width={isSmallScreen ? "100%" : "33vw"}
            height={"100vh"}
          />
          <Colors3
            className="w-full lg:pt-64 h-full flex flex-shrink-0 px-8 lg:w-1/3"
            width={isSmallScreen ? "100%" : "33vw"}
            height={"100vh"}
          />
        </div>
      </section>
    </div>
  );
};

export default RecipeApp;
