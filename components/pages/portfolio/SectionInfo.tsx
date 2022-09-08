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
        "h-screen w-screen px-32 text-2xl lg:text-4xl leading-8 lg:leading-8 font-ibm font-thin flex flex-col justify-center",
        bgColor,
        textColor
      )}
    >
      <div className="columns-xl gap-8">
        <div className="flex w-full justify-center gap-8">
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
        <div className="flex flex-col gap-4">
          {paragraphs.map((paragraph, i) => {
            return <p key={i}>{paragraph}</p>;
          })}
        </div>
        <div className="flex w-full justify-center gap-8">
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
  );
};

export default SectionInfo;
