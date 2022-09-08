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
    <section className={clsx("h-screen", bgColor, textColor)}>
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
            {paragraphs.map((paragraph, i) => {
              return <p key={i}>{paragraph}</p>;
            })}
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
      </div>
    </section>
  );
};

export default SectionInfo;
