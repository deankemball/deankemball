import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import clsx from "clsx";

export const menuItems = ["about", "portfolio", "contact"];

interface FooterProps {
  setSelected: Function;
  selected: string;
}

export default function Footer({
  setSelected,
  selected,
}: FooterProps): JSX.Element {
  return (
    <div className="flex flex-col md:gap-1">
      {menuItems.map((item, i) => (
        <div
          className="font-inter font-regular tracking-wide text-2xl md:text-3xl lg:text-4xl text-right"
          key={i}
        >
          <Link href={`/${item}`}>
            <a
              onClick={() => setSelected(item)}
              className={clsx(
                "transition-colors z-[99]",
                selected === "portfolioDemo" 
              ? "text-white decoration-white opacity-50 hover:opacity-100 transition-colors select-none -space-y-2 text-2xl md:text-3xl lg:text-4xl cursor-pointer" :
              selected === 'stick-and-choke' ? 
              'text-black decoration-black opacity-50 hover:opacity-100 transition-colors select-none -space-y-2 text-2xl md:text-3xl lg:text-4xl cursor-pointer'
                  : selected === item && selected != "home"
                  ? "text-red decoration-red underline underline-offset-2"
                  : "decoration-red hover:text-red underline underline-offset-2"
              )}
            >
              {item}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
