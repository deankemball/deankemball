import React from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  "/recipe0.png",
  "/recipe1.png",
  "/recipe2.png",
  "/recipe3.png",
  "/recipe4.png",
  "/recipe5.png",
];

const RecipeApp = () => {
  return (
    <div className="flex flex-col w-1/2 lg:w-3/4 py-8 gap-2 lg:gap-4 mx-auto">
      <Link href="/portfolio">
        <a className="absolute right-8 top-8 decoration-red underline underline-offset-2 font-inter font-regular tracking-wide text-2xl md:text-3xl text-right z-50">
          back
        </a>
      </Link>
      {slides.map((slide, i) => {
        return (
          <>
            {" "}
            <Image
              src={slide}
              alt={""}
              objectFit="cover"
              layout="intrinsic"
              width={1512}
              height={982}
              sizes={"50"}
              priority={i === 0}
            />
          </>
        );
      })}
    </div>
  );
};

export default RecipeApp;
