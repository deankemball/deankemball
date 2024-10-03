import Image from "next/image";
import Avatar from "/public/about/dean-kemball-avatar.png";
import { motion } from "framer-motion";
import Link from "next/link";

function AboutHero() {
  return (
    <div className=" text-xl md:text-2xl lg:text-3xl flex flex-col lg:flex-row mx-auto select-none w-full max-w-7xl leading-6 md:leading-7 lg:items-center gap-8 md:gap-8 z-50">
      <motion.div
        animate={{ rotate: [-1, 0, -1], y: [-4, 0, -4] }}
        transition={{ ease: "easeInOut", duration: 2, repeat: Infinity }}
        className="-my-8 lg:my-0 w-[140px] md:w-[1080px] mx-auto"
      >
        <Image
          src={Avatar}
          alt="dean kemball skull with sunglasses avatar"
          className="invert dark:invert-0 transition-colors"
          priority
          loading="eager"
        />
      </motion.div>
      <div className="flex w-full flex-col gap-4 md:gap-8 md:pr-16">
        <p>
        Hey, I&apos;m Dean—an <span className="underline decoration-red">artist and programmer</span> specializing in building modern and powerful websites.
        </p>
        {/* <p>
          I specialize in making interactive and unique portfolio
          websites for artists and creatives. */}
        {/* </p> */}
        <p>
          {`In my spare time, I am performing real-time
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