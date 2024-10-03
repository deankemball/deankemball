import React from "react";
import Left from "../../../public/icons/left.svg";
import Right from "../../../public/icons/right.svg";
import clsx from "clsx";

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
        "h-screen w-screen flex flex-col justify-start md:justify-center md:my-auto snap-y snap-center overflow-y-scroll scrollbar-hide text-lg xl:text-3xl",
        bgColor,
        textColor
      )}
    >
      <div className="lg:columns-2 px-8 gap-8 max-w-7xl mx-auto relative">
        <div className="flex flex-col gap-4">
          {paragraphs.map((paragraph, i) => {
            return (
              <p className="break-words" key={i}>
                {paragraph}
              </p>
            );
          })}
          <a href={link} target="_blank" rel="noreferrer" className="underline transition-colors">
              visit website
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionInfo;
