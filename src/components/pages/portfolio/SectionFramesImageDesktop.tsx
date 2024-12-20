"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Left from "public/icons/left.svg";
import Right from "public/icons/right.svg";
import { cn } from "@/lib/utils";

interface SectionFramesProps {
  bgColor: string;
  frames: StaticImageData[];
  isSmallScreen: boolean;
  project: string;
  collectionNo: number;
  arrowColor: string;
}

const SectionFrames = ({
  bgColor,
  frames,
  isSmallScreen,
  project,
  collectionNo,
  arrowColor,
}: SectionFramesProps) => {
  const LeftIcon = Left;
  const RightIcon = Right;
  const arrowStyle = `text-${arrowColor}/50 md:hover:${arrowColor} active:text-${arrowColor}`;
  const indicatorStyle = `bg-${arrowColor}/50 md:hover:bg-${arrowColor}`;

  const [frameNo, setFrameNo] = useState(0);

  function scrollPage(
    direction: "right" | "left",
    frameNo: number,
    setFrameNo: (newFrameNo: number) => void,
    framesLength: number
  ) {
    const newFrameNo = direction === "right" ? frameNo + 1 : frameNo - 1;

    // Ensure the frame number stays within bounds
    if (newFrameNo >= 0 && newFrameNo < framesLength) {
      setFrameNo(newFrameNo);
      const frame = document.getElementById(
        `${collectionNo}-frame-${newFrameNo}`
      );
      if (frame) frame.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section
      className={clsx(
        bgColor,
        "h-screen flex flex-col justify-center snap-y snap-proximity snap-center relative"
      )}
    >
      <div className="absolute bottom-6 w-full z-[99]">
        <div className="flex items-center justify-center gap-4 w-fit mx-auto">
          <button
            onClick={() =>
              scrollPage("left", frameNo, setFrameNo, frames.length)
            }
            disabled={frameNo === 0}
            className={cn(
              arrowStyle,
              "transition-colors disabled:opacity-50 disabled:hover:text-inherit text-4xl disabled:cursor-not-allowed"
            )}
          >
            <LeftIcon />
          </button>
          {frames.map((frame, i) => {
            return (
              <div
                key={`dot-${i}`}
                className={clsx(
                  frameNo === i ? `bg-${arrowColor}` : indicatorStyle,
                  "rounded-full w-4 h-4 transition-all cursor-pointer hover:md:scale-110 ease-in hidden md:block"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  setFrameNo(i);
                }}
              />
            );
          })}
          <button
            onClick={() =>
              scrollPage("right", frameNo, setFrameNo, frames.length)
            }
            disabled={frameNo === frames.length - 1}
            className={cn(
              arrowStyle,
              "transition-colors disabled:opacity-50 disabled:hover:text-inherit text-4xl"
            )}
          >
            <RightIcon />
          </button>
        </div>
      </div>
      <div className="flex gap-4 h-screen w-screen items-center lg:py-20 md:px-12 lg:px-32 overflow-x-scroll snap-x snap-mandatory snap-center scrollbar-hide relative">
        <div
          id="carousel"
          className="flex min-w-[100vw] gap-4 max-h-[calc(100vh-240px)] lg:max-h-[calc(100vh-160px)]"
        >
          {frames.map((Frame, i) => {
            return (
              <div
                id={`${collectionNo}-frame-${i}`}
                key={`${collectionNo}-frame-${i}`}
                className="min-w-[100%] snap-x snap-mandatory snap-center flex justify-center px-8"
              >
                <Image
                  alt={`${project}-${i}`}
                  src={Frame}
                  placeholder="empty"
                  loading="eager"
                  // width={"100vw"}
                  // height={isSmallScreen ? "70vh" : "800%"}
                  className="h-full w-fit shadow-lg"
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
