import React, { useEffect, useState } from "react";
import MerchLogo from "../public/merchbabe/merch.svg";
import BabeLogo from "../public/merchbabe/babe.svg";
import MBLogo from "../public/merchbabe/merchbabe-logo.svg";
import { motion, useAnimation } from "framer-motion";

interface LogoAnimProps {
  transitionDur: number;
  toggled: boolean;
}

const Logo = ({ transitionDur, toggled }: LogoAnimProps) => {
  const control = useAnimation();

  useEffect(() => {
    if (toggled) {
      control.start("inactive");
    } else {
      control.start("active");
    }
  }, [control, toggled]);

  const merchVariants = {
    active: {
      x: 0,
      fill: "#000000",
      transition: {
        delay: 0.1,
        x: { type: "spring", stiffness: 25, bounce: 0.1, ease: "easeInOut" },
        default: { duration: transitionDur },
      },
    },
    inactive: {
      x: 108,
      fill: "#FF4B00",
      transition: {
        delay: 0.1,
        x: { type: "spring", stiffness: 25, bounce: 0.1, ease: "easeInOut" },
        default: { duration: transitionDur },
      },
    },
  };

  const babeVariants = {
    active: {
      x: 0,
      fill: "#000000",
      transition: {
        delay: 0.1,
        x: { type: "spring", stiffness: 25, bounce: 0.1, ease: "easeInOut" },
        default: { duration: transitionDur },
      },
    },
    inactive: {
      x: -145,
      fill: "#FF4B00",
      transition: {
        delay: 0.1,
        x: { type: "spring", stiffness: 25, bounce: 0.1, ease: "easeInOut" },
        default: { duration: transitionDur },
      },
    },
  };

  return (
    <>
      <div className="flex text-[142px] space-x-1 -mr-6 scale-[2.5]">
        <motion.div
          className={
            !toggled
              ? "text-mbOrange transition-colors duration-1000 ease-in-out"
              : "text-white transition-colors duration-1000 ease-in-out"
          }
          initial="active"
          animate={control}
          variants={merchVariants}
        >
          <MerchLogo />
        </motion.div>
        <motion.div
          className={
            !toggled
              ? `text-mbOrange transition-colors duration-1000 ease-in-out`
              : `text-white transition-colors duration-1000 ease-in-out`
          }
          initial="active"
          animate={control}
          variants={babeVariants}
        >
          <BabeLogo />
        </motion.div>
      </div>
    </>
  );
};

export default Logo;
