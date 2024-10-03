import React from "react";
import clsx from "clsx";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface SectionFramesProps {
  bgColor: string;
  frames: StaticImageData[];
  isSmallScreen: boolean;
  project: string;
}

const SectionFrames = ({
  bgColor,
  frames,
  isSmallScreen,
  project,
}: SectionFramesProps) => {
  return (
    <section
      className={clsx(
        bgColor,
        "h-screen flex flex-col justify-center snap-y snap-proximity snap-center"
      )}
    >
      <div className="flex gap-4 h-screen w-screen items-center lg:py-20 md:px-12 lg:px-32 overflow-x-scroll snap-x snap-mandatory snap-center scrollbar-hide">
        <div className="flex min-w-[100vw] gap-4 max-h-[calc(100vh-240px)] lg:max-h-[calc(100vh-160px)]">
          {frames.map((Frame, i) => {
            return (
              <div
                key={`frame-${i}`}
                className="min-w-[100%] snap-x snap-mandatory snap-center flex justify-center"
              >
                <Image
                  alt={`${project}-${i}`}
                  src={Frame}
                  placeholder="empty"
                  loading="eager"
                  // width={"100vw"}
                  // height={isSmallScreen ? "70vh" : "800%"}
                  className="rounded-md h-full w-screen flex flex-1 px-8"
                  // objectFit="cover"
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
