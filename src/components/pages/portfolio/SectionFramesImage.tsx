import React from "react";
import clsx from "clsx";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface SectionFramesProps {
  bgColor: string;
  frames: StaticImageData[];
  isSmallScreen: boolean;
}

const SectionFrames = ({
  bgColor,
  frames,
  isSmallScreen,
}: SectionFramesProps) => {
  return (
    <section
      className={clsx(
        bgColor,
        "h-screen min-h-screen flex flex-col justify-center snap-y snap-proximity snap-center"
      )}
    >
      <div className="flex gap-4 overflow-x-scroll snap-x snap-mandatory snap-center scrollbar-hide h-full w-screen items-center lg:py-20 md:px-12 lg:px-32">
        <div className="flex w-max gap-4 md:gap-8 max-h-[calc(100vh-240px)] lg:max-h-[calc(100vh-160px)]">
          {frames.map((Frame, i) => {
            return (
              <div
                key={i}
                className="flex w-screen md:w-auto snap-x snap-mandatory snap-center px-8 md:px-0"
              >
                <Image
                  alt={`wilma-${i}`}
                  src={Frame}
                  placeholder="empty"
                  loading="eager"
                  // width={isSmallScreen ? "100vw" : "100%"}
                  // height={isSmallScreen ? "70vh" : "800%"}
                  className="rounded-md shadow-lg"
                  // objectFit=""
                  objectFit="scale-down"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionFrames;
