import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./Buttons";
import useEmblaCarousel from "embla-carousel-react";
import { mediaByIndex } from "../public/index.js";
// import "../css/embla.css";
import Image from "next/image";
import Link from "next/link";

const EmblaCarousel = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  const folio: string[] = ["/media-1.png", "/media-2.png"];
  const folioNames: string[] = ["Dean Wallflower", "MERCH BABE"];
  const folioLinks: string[] = [
    "https://deanwallflower.com/",
    "https://merchbabe.net/",
  ];

  return (
    <div className="relative mx-auto max-w-[670px]">
      <div className="overflow-hidden w-full" ref={viewportRef}>
        <div className="flex select-none">
          {folio.map((img, idx) => (
            <div
              className="px-6 font-inter select-none cursor-pointer dark:text-white text-black duration-500 flex flex-col m-auto max-w-[400px] md:max-w-[540px] lg:max-w-[640px] md:pt-8"
              key={idx}
            >
              <div className="text-right">{folioNames[idx]}</div>

              <div>
                <Image
                  src={img}
                  alt={`${folio} preview ${idx}`}
                  layout="responsive"
                  width={720}
                  height={540}
                  priority={idx === 0}
                ></Image>
              </div>
              <Link href={folioLinks[idx]}>
                <a className="decoration-red underline underline-offset-2 inline-block mr-auto hover:cursor-pointer">
                  {folioLinks[idx]}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default EmblaCarousel;
