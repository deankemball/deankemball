import Image from "next/image";
import Avatar from "/public/about/dean-kemball-avatar.png";
import { motion } from "framer-motion";
import Link from "next/link";

function AboutHero() {
  return (
    <div className="font-inter text-xl md:text-2xl lg:text-3xl flex flex-col lg:flex-row mx-auto select-none w-full max-w-[19rem] md:max-w-[23rem] lg:max-w-[840px] leading-6 md:leading-7 lg:items-center lg:-translate-x-10 lg:gap-8">
      <motion.div
        animate={{ rotate: [-1, 0, -1], y: [-4, 0, -4] }}
        transition={{ ease: "easeInOut", duration: 2, repeat: Infinity }}
        className="-my-8 lg:my-0"
      >
        <Image
          src={Avatar}
          alt="dean kemball skull with sunglasses avatar"
          className="invert dark:invert-0 transition-colors scale-[70%] md:scale-75 lg:scale-125"
        />
      </motion.div>
      <div className="flex flex-col gap-[24px] md:gap-[28px] lg:gap-[32px]">
        <p>
        I am full-stack developer capable of designing, implementing, and deploying content-managed websites that are that are modern, user-friendly, and fast. 
        </p>
        {/* <p>
          I specialize in making interactive and unique portfolio
          websites for artists and creatives. */}
        {/* </p> */}
        <p>
          {`In my spare time, I am programming and performing real-time
          audio-reactive visuals at punk shows in my city. See `}
          <span className="decoration-red hover:text-red underline underline-offset-2 transition-colors">
            <Link href="/portfolio">{`deanwallflower`}</Link>
          </span>
          {" in my portfolio."}
        </p>
      </div>
    </div>
  );
}

export default AboutHero;
