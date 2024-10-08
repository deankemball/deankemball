import React from "react";
import clsx from "clsx";
import { framesType } from "types";

interface SectionFramesProps {
  bgColor: string;
  frames: framesType[];
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
      <div className="flex overflow-x-scroll snap-x snap-mandatory snap-center scrollbar-hide h-full w-screen items-center py-16 lg:py-20 lg:px-32">
        {frames.map((Frame, i) => {
          return (
            <Frame
              key={i}
              width={isSmallScreen ? "100vw" : "25%"}
              height={isSmallScreen ? "70vh" : "100%"}
              className="flex flex-shrink-0 snap-x snap-mandatory snap-center"
            />
          );
        })}
      </div>
    </section>
  );
};

export default SectionFrames;
