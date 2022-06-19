import React, { Component, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";

const folio: string[] = ["/media-1.png", "/media-2.png"];
const folioNames: string[] = ["Dean Wallflower", "MERCH BABE"];
const folioLinks: string[] = [
  "https://deanwallflower.com/",
  "https://merchbabe.net/",
];

function NextJsCarousel() {
  const [counter, setCounter] = useState(0);
  const max = folio.length;
  function showCounter() {
    if (counter === max - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
    console.log({ max: max });
    console.log({ counter: counter });
  }
  return (
    <div className="w-full text-center">
      <Carousel
        axis="horizontal"
        infiniteLoop={true}
        swipeable={true}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        emulateTouch={true}
        // renderIndicator={(onClickHandler, isSelected, index, label) => {
        //   const selected = "text-red px-2";
        //   const selectedStyle = "text-white px-2";
        //   const style: string = isSelected ? selected : selectedStyle;
        //   return (
        //     <span
        //       className={style}
        //       onClick={onClickHandler}
        //       onKeyDown={onClickHandler}
        //       key={index}
        //       role="button"
        //       tabIndex={0}
        //       aria-label={`${label} ${index + 1}`}
        //     >
        //       {index + 1}
        //     </span>
        //   );
        // }}
        renderThumbs={() =>
          folio.map((img, idx) => (
            <div key={idx} className="w-full h-8 relative">
              <Image
                src={img}
                layout="fill"
                objectFit="contain"
                alt="logo"
              ></Image>
            </div>
          ))
        }
      >
        {folio.map((img, idx) => (
          <div
            className="px-6 font-inter flex flex-col m-auto max-w-[400px] md:max-w-[540px] lg:max-w-[640px] md:pt-8"
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
              <a className="border-b-2 border-red inline-block mr-auto hover:cursor-pointer">
                {folioLinks[idx]}
              </a>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default NextJsCarousel;
