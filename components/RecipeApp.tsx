import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Frame1 from "../public/recipeapp/frames/frame1.svg";
import Frame2 from "../public/recipeapp/frames/frame2.svg";
import Frame3 from "../public/recipeapp/frames/frame3.svg";
import Frame4 from "../public/recipeapp/frames/frame4.svg";
import Frame5 from "../public/recipeapp/frames/frame5.svg";
import Frame6 from "../public/recipeapp/frames/frame6.svg";
import Frame7 from "../public/recipeapp/frames/frame7.svg";
import Frame8 from "../public/recipeapp/frames/frame8.svg";
import Logo from "../public/recipeapp/logo.svg";
import Card1 from "../public/recipeapp/cards/cards/card1.svg";
import Card2 from "../public/recipeapp/cards/cards/card2.svg";
import Card3 from "../public/recipeapp/cards/cards/card3.svg";
import Card4 from "../public/recipeapp/cards/cards/card4.svg";
import Card5 from "../public/recipeapp/cards/cards/card5.svg";
import Card6 from "../public/recipeapp/cards/cards/card6.svg";
import Card7 from "../public/recipeapp/cards/cards/card7.svg";
import Card8 from "../public/recipeapp/cards/cards/card8.svg";
import Card9 from "../public/recipeapp/cards/cards/card9.svg";
import Card10 from "../public/recipeapp/cards/cards/card10.svg";
import Colors1 from "../public/recipeapp/colors/colors/colors1.svg";
import Colors2 from "../public/recipeapp/colors/colors/colors2.svg";
import Colors3 from "../public/recipeapp/colors/colors/colors3.svg";

const frames = [Frame1, Frame2, Frame3, Frame4, Frame5, Frame6];

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
      <Link href="/portfolio">
        <a className="absolute right-8 top-8 decoration-red underline underline-offset-2 font-inter font-regular tracking-wide text-2xl md:text-3xl text-right z-50">
          back
        </a>
      </Link>
      <section
        id="1"
        className="bg-darkGreen h-screen snap-y snap-mandatory snap-center"
      >
        <div className="flex flex-col lg:flex-row h-full w-screen justify-center items-center py-16 px-8 lg:py-20 lg:pl-36">
          <div className="flex flex-col font-ibm text-whiteGreen w-full lg:w-1/2 gap-2">
            <p className="text-3xl lg:text-5xl font-thin leading-7 lg:leading-8">
              UI/UX Mockup
            </p>
            <h1 className="font-bold text-5xl lg:text-7xl leading-[52px] lg:leading-[60px]">
              recipe app
            </h1>
            <p className="text-2xl lg:text-4xl leading-8 lg:leading-8 font-thin">
              a recipe discovery and scrapbooking app with integrated shopping
              list generator.
            </p>
          </div>
          <Logo
            width={isSmallScreen ? "100vw" : "80vw"}
            height={isSmallScreen ? "30vh" : "100vh"}
          />
        </div>
      </section>
      <section
        id="2"
        className="bg-lightGreen h-screen flex flex-col justify-center snap-y snap-proximity snap-center"
      >
        <div className="flex overflow-x-scroll h-full w-screen items-center pb-16 lg:pb-20 lg:px-32">
          <Frame1
            width={isSmallScreen ? "100vw" : "25%"}
            height={isSmallScreen ? "70vh" : "100%"}
            className="flex flex-shrink-0"
          />
          <Frame2
            width={isSmallScreen ? "100vw" : "25%"}
            height={isSmallScreen ? "70vh" : "100%"}
            className="flex flex-shrink-0"
          />
          <Frame3
            width={isSmallScreen ? "100vw" : "25%"}
            height={isSmallScreen ? "70vh" : "100%"}
            className="flex flex-shrink-0 my-auto"
          />
          <Frame4
            width={isSmallScreen ? "100vw" : "25%"}
            height={isSmallScreen ? "70vh" : "100%"}
            className="flex flex-shrink-0"
          />
          <Frame5
            width={isSmallScreen ? "100vw" : "25%"}
            height={isSmallScreen ? "70vh" : "100%"}
            className="flex flex-shrink-0"
          />
          <Frame6
            width={isSmallScreen ? "100vw" : "25%"}
            height={isSmallScreen ? "70vh" : "100%"}
            className="flex flex-shrink-0"
          />
          <Frame7
            width={isSmallScreen ? "100vw" : "25%"}
            height={isSmallScreen ? "70vh" : "100%"}
            className="flex flex-shrink-0"
          />
          <Frame8
            width={isSmallScreen ? "100vw" : "25%"}
            height={isSmallScreen ? "70vh" : "100%"}
            className="flex flex-shrink-0"
          />
        </div>
      </section>
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
        className="bg-lightGreen h-screen w-screen flex flex-col justify-center overflow-x-scroll lg:px-40 snap-center"
      >
        <div className="flex w-full h-full gap-4 overflow-x-scroll lg:overflow-x-auto">
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
