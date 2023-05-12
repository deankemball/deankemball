import React from "react";
import InfoBlockFront from "./InfoBlockFront";
import clsx from "clsx";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface Section1Props {
  type: string;
  title: string;
  description: string;
  logo: any;
  bgColor: string;
  bg?: StaticImageData;
  textColor: string;
}

const Section1 = ({
  type,
  title,
  description,
  logo,
  bgColor,
  textColor,
}: Section1Props) => {
  return (
    <section
      className={clsx(
        bgColor,
        textColor,
        "h-screen w-screen snap-y snap-mandatory snap-center flex flex-col justify-center items-center"
      )}
    >
      <div className="flex flex-col lg:flex-row h-3/4 lg:h-full w-full max-w-[1600px] justify-between lg:justify-center items-center py-16 px-8 lg:py-20 lg:pl-36">
        <InfoBlockFront type={type} title={title} description={description} />
        {logo}
      </div>
    </section>
  );
};

export default Section1;
