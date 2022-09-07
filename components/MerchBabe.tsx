import React, { useEffect, useState } from "react";
import Frame1 from "../public/merchbabe/frame1.svg";
import Frame2 from "../public/merchbabe/frame2.svg";
import Frame3 from "../public/merchbabe/frame3.svg";
import Frame4 from "../public/merchbabe/frame4.svg";
import Frame5 from "../public/merchbabe/frame5.svg";
import Logo from "../public/merchbabe/logo.svg";
import Frame6 from "../public/merchbabe/frame6.svg";
import Frame7 from "../public/merchbabe/frame7.svg";
import Frame8 from "../public/merchbabe/frame8.svg";
import Frame9 from "../public/merchbabe/frame9.svg";
import Frame10 from "../public/merchbabe/frame10.svg";
import Link from "next/link";
import Left from "../public/left.svg";
import Right from "../public/right.svg";

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
      <Link href="/portfolio">
        <a className="absolute right-8 top-8 decoration-red underline underline-offset-2 font-inter font-regular tracking-wide text-2xl md:text-3xl text-right z-50">
          back
        </a>
      </Link>
      <div className="flex flex-col w-screen h-full">
        <section id="1" className="h-screen">
          <div className="flex flex-col lg:flex-row h-full w-screen justify-center items-center py-16 px-8 lg:py-20">
            <div className="flex flex-col font-ibm w-full max-w-md lg:max-w-lg gap-2 text-center lg:text-left">
              <p className="text-3xl lg:text-5xl font-thin leading-7 lg:leading-8">
                client project:
              </p>
              <Link href="https://wwww.merchbabe.net">
                <a>
                  <h1 className="font-bold text-5xl lg:text-7xl leading-[52px] lg:leading-[60px]">
                    merchbabe
                  </h1>
                </a>
              </Link>
              <p className="text-2xl lg:text-4xl leading-8 lg:leading-8 font-thin">
                a graphic designers portfolio and e-commerce website.
              </p>
            </div>
            <Logo
              className="-mt-12 md:mt-0"
              width={isSmallScreen ? "80%" : "40vw"}
              height={isSmallScreen ? "30vh" : "50vh"}
            />
          </div>
        </section>
        <section
          id="2"
          className="h-screen w-screen flex flex-col justify-center bg-mbOrange"
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
            <Frame5
              width={isSmallScreen ? "100vw" : "25%"}
              height={isSmallScreen ? "70vh" : "100%"}
              className="flex flex-shrink-0"
            />
          </div>
        </section>
        <section id="2" className="h-screen flex flex-col justify-center">
          <div className="flex overflow-x-scroll h-full w-screen items-center pb-16 lg:pb-20 lg:px-32">
            <Frame6
              width={isSmallScreen ? "100vw" : "25%"}
              height={isSmallScreen ? "70vh" : "100%"}
              className="flex flex-shrink-0"
            />
            <Frame9
              width={isSmallScreen ? "100vw" : "25%"}
              height={isSmallScreen ? "70vh" : "100%"}
              className="flex flex-shrink-0"
            />
            <Frame7
              width={isSmallScreen ? "100vw" : "25%"}
              height={isSmallScreen ? "70vh" : "100%"}
              className="flex flex-shrink-0"
            />
            <Frame10
              width={isSmallScreen ? "100vw" : "25%"}
              height={isSmallScreen ? "70vh" : "100%"}
              className="flex flex-shrink-0"
            />
          </div>
        </section>
        <section id="4" className="h-screen bg-mbOrange text-white">
          <div className="flex flex-col lg:flex-row h-full w-screen items-center justify-start lg:justify-center lg:gap-16 py-24 px-8 lg:py-32 overflow-y-scroll lg:overflow-y-hidden">
            <div className="flex flex-col font-ibm w-full max-w-md lg:max-w-lg gap-2">
              <div className="flex w-full justify-between">
                <div className="text-7xl">
                  <Right />
                </div>
                <h1 className="font-bold text-5xl lg:text-7xl leading-[52px] lg:leading-[60px]">
                  info
                </h1>
                <div className="text-7xl">
                  <Left />
                </div>
              </div>
              <div className="flex flex-col gap-6 text-2xl lg:text-4xl leading-8 lg:leading-8 font-thin">
                <p>
                  The site is a mobile-first designed, single-page app that is
                  responsive all the way up to desktop.
                </p>
                <p>
                  The two main features are a list of portfolio works that are
                  filterable by tags and a separate page for e-commerce which is
                  integrated with PayPal.
                </p>
                <p>
                  The site has an overwhelming brutalist design language, to
                  match the graphic design style of the artist.
                </p>
              </div>
            </div>
            <div className="flex flex-col font-ibm w-full max-w-md lg:max-w-lg gap-2">
              <div className="flex flex-col gap-6 text-2xl lg:text-4xl leading-8 lg:leading-8 font-thin">
                <p>
                  Marquees in the header and footer render on top of document
                  text as it scrolls past.
                </p>
                <p>
                  Oversized fonts and menus are used on drop-downs and pop-ups.
                </p>
                <p>Display fonts are capatalized.</p>
                <p>
                  Alerts are in the form of brief pop-ups from the bottom of the
                  screen.
                </p>
                <p>It has three colors; black, white, and neon-orange.</p>
              </div>
              <div className="flex w-full justify-between">
                <div className="text-7xl">
                  <Right />
                </div>
                <Link href="https://www.merchbabe.net/">
                  <a>
                    <h1 className="font-bold text-5xl lg:text-7xl leading-[52px] lg:leading-[60px]">
                      link
                    </h1>
                  </a>
                </Link>
                <div className="text-7xl">
                  <Left />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MerchBabe;
