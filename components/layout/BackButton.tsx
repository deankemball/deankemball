import Link from "next/link";
import React from "react";

interface BackButtonProps {
  link: string;
  selected: string;
}

const BackButton = ({ link, selected }: BackButtonProps) => {
  return (
    <Link href={link}
        className={
          selected === "portfolioDemo"
            ? "absolute right-8 top-8 text-white decoration-white opacity-50 hover:opacity-100 underline underline-offset-2 transition-all duration-150 text-2xl md:text-3xl lg:text-4xl z-50"
            : selected === 'stick-and-choke' || selected === 'transcentury-update' ? 
            "absolute right-8 top-8 text-black decoration-black opacity-50 hover:opacity-100 underline underline-offset-2 transition-all duration-150 text-2xl md:text-3xl lg:text-4xl z-50"
            : "absolute right-8 top-8 text-black dark:text-white text-2xl md:text-3xl lg:text-4xl decoration-red underline underline-offset-2 z-50"
        }
      >
        back
    </Link>
  );
};

export default BackButton;
