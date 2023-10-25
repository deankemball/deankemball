import React from "react";
import Left from "../../../public/icons/left.svg";
import Right from "../../../public/icons/right.svg";
import clsx from "clsx";
import Link from "next/link";

interface SectionInfoProps {
  bgColor: string;
  textColor: string;
  paragraphs: string[];
  link: string;
}

const SectionInfo = ({
  bgColor,
  textColor,
  paragraphs,
  link,
}: SectionInfoProps) => {
  return (
    <div
      className={clsx(
        "h-screen w-screen md:pt-12 lg:px-32 flex flex-col justify-start md:justify-center md:my-auto font-ibm snap-y snap-center overflow-y-scroll scrollbar-hide",
        bgColor,
        textColor
      )}
    >
      <div className="lg:columns-2 px-8 py-20 gap-8 max-w-6xl mx-auto relative">
        <h1 className="flex font-bold text-5xl xl:text-7xl leading-[52px] lg:leading-[60px]">
          info
        </h1>
        <div className="flex flex-col gap-4 text-lg leading-4 xl:text-3xl md:leading-6 xl:leading-8 font-thin">
          {paragraphs.map((paragraph, i) => {
            return (
              <p className="break-words" key={i}>
                {paragraph}
              </p>
            );
          })}
        </div>
        <div className="flex w-full items-center">
          <div className="text-7xl">
            <Right />
          </div>
          <Link href={link}>
            <a>
              <h1 className="font-bold text-5xl xl:text-7xl leading-[52px] lg:leading-[60px] underline underline-offset-4 decoration-4">
                link
              </h1>
            </a>
          </Link>
          <div className="text-7xl invisible">
            <Left />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionInfo;
