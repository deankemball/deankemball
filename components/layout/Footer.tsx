import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import clsx from "clsx";

export const menuItems = ["home", "about", "portfolio", "contact"];

interface FooterProps {
  setSelected: Function;
  selected: string;
}

export default function Footer({
  setSelected,
  selected,
}: FooterProps): JSX.Element {
  return (
    <div>
      {menuItems.map((item, i) => (
        <div
          className="font-inter font-regular tracking-wide text-2xl md:text-3xl lg:text-4xl text-right"
          key={i}
        >
          <Link href={item === "home" ? "/" : `/${item}`}>
            <a
              onClick={() => setSelected(item)}
              className={clsx(
                "transition-colors",
                selected === "portfolioDemo"
                  ? "text-black decoration-black dark:text-white dark:decoration-white opacity-50 hover:opacity-100 underline underline-offset-2 transition-colors duration-150"
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
