import Link from "next/link";
import React from "react";

interface BackButtonProps {
  link: string;
}

const BackButton = ({ link }: BackButtonProps) => {
  return (
    <Link href={link}>
      <a className="absolute right-8 top-8 decoration-red underline underline-offset-2 font-inter font-regular tracking-wide text-2xl md:text-3xl text-right z-50">
        back
      </a>
    </Link>
  );
};

export default BackButton;
