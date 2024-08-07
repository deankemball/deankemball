import React, { useEffect, useState } from "react";
import Frame1 from "../../../public/tcu/frames/frame1.png";
import Frame2 from "../../../public/tcu/frames/frame2.png";
import Frame3 from "../../../public/tcu/frames/frame3.png";
import Frame4 from "../../../public/tcu/frames/frame4.png";
import Frame5 from "../../../public/tcu/frames/frame5.png";
import Frame6 from "../../../public/tcu/frames/frame6.png";
import Frame7 from "../../../public/tcu/frames/frame7.png";
import Frame8 from "../../../public/tcu/frames/frame8.png";
import Frame9 from "../../../public/tcu/frames/frame9.png";
import Section1 from "./Section1";
import SectionInfo from "./SectionInfo";
import SectionFramesImage from "./SectionFramesImage";
import Image from "next/image";
import TCULogo from '../../../public/tcu/TCU-Logo_2_Vektor.png'

const paragraphs = [
  'transcentury update is a music festival taking place in leipzig at several venues and over several days.',
  'the platform is content managed using payload cms, where admins populate all of the data themselves.',
  'through the cms, admins can create new venues, artists, festival dates, news articles and so on.',
  'this allows the code base to be used for several years to come',
  'there is a feature for building newsletter subscribers, including sending all relevant transactional emails.',
  'the design is simple and lightweight, with oversized lettering and ui.'
];

const frames1 = [Frame1, Frame2, Frame3];
const frames2 = [Frame4, Frame5, Frame6];
const frames3 = [Frame7, Frame8, Frame9];

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
    <div className="w-[80vw] md:w-[40vw] flex items-center justify-center"
    // width={isSmallScreen ? "80%" : "40vw"}
    //           height={isSmallScreen ? "30vh" : "50vh"}
    >
    <Image src={TCULogo} alt='tcu-logo' />
    </div>
  );
};

const TCU = () => {
  const isSmallScreen: boolean = useDeviceSize() < 1024;

  return (
    <>
      <div className="flex flex-col w-screen h-full">
        <Section1
          type={"client project:"}
          title={"TransCentury Update"}
          description={"A content managed platform for a music festival."}
          logo={
            <Logo />
          }
          bgColor={"bg-white"}
          textColor={"text-black"}
        />
        <SectionFramesImage
          bgColor={"bg-black"}
          frames={frames1}
          isSmallScreen={isSmallScreen}
        />
        <SectionFramesImage
          bgColor={"bg-black"}
          frames={frames2}
          isSmallScreen={isSmallScreen}
        />
        <SectionFramesImage
          bgColor={"bg-black"}
          frames={frames3}
          isSmallScreen={isSmallScreen}
        />
        <SectionInfo
          bgColor={"bg-white"}
          textColor={"text-black"}
          paragraphs={paragraphs}
          link="https://www.transcenturyupdate.com/"
        />
      </div>
    </>
  );
};

export default TCU;
