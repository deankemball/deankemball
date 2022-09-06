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
      <section id="1" className="h-screen">
        <div className="flex flex-col lg:flex-row h-full w-screen justify-center items-center py-16 px-8 lg:py-20">
          <div className="flex flex-col font-ibm w-full max-w-md lg:max-w-lg gap-2">
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
        </div>
      </section>
      <section id="2" className="h-screen flex flex-col justify-center">
        <div className="flex overflow-x-scroll h-full w-screen items-center pb-16 lg:pb-20 lg:px-32">
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
          <Frame9
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
    </>
  );
};

export default MerchBabe;
