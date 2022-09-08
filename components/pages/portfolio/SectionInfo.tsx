import React from "react";
import Left from "../../../public/icons/left.svg";
import Right from "../../../public/icons/right.svg";
import clsx from "clsx";
import Link from "next/link";

interface SectionInfoProps {
  bgColor: string;
  textColor: string;
  paragraphs: string[];
}

const SectionInfo = ({ bgColor, textColor, paragraphs }: SectionInfoProps) => {
  return (
    <div
      className={clsx(
        "lg:h-screen w-screen px-8 py-20 lg:px-32 flex flex-col lg:justify-center font-ibm",
        bgColor,
        textColor
      )}
    >
      <div className="flex w-full lg:w-1/2 lg:self-start items-center justify-center gap-8">
        <h1 className="font-bold text-5xl lg:text-7xl leading-[52px] lg:leading-[60px]">
          info
        </h1>
      </div>
      <div className="lg:columns-2 gap-8">
        <div className="flex flex-col gap-4 text-2xl lg:text-4xl leading-6 lg:leading-8 font-thin">
          {paragraphs.map((paragraph, i) => {
            return (
              <p className="break-words" key={i}>
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
      <div className="flex w-full lg:w-1/2 lg:self-end items-center justify-between">
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
        <div className="text-7xl text-mbOrange">
          <Left />
        </div>
      </div>
    </div>
  );
};

export default SectionInfo;
