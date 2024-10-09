import Image from "next/image";
import Avatar from "/public/about/dean-kemball-avatar.png";
import { motion } from "framer-motion";
import Link from "next/link";

function AboutHero() {
  return (
    <div className=" text-2xl md:text-3xl flex flex-col md:flex-row md:items-center mx-auto select-none w-full max-w-7xl leading8  gap-8 md:gap-8 z-50">
      <motion.div
        animate={{ rotate: [-1, 0, -1], y: [-4, 0, -4] }}
        transition={{ ease: "easeInOut", duration: 2, repeat: Infinity }}
        className="-my-8 md:my-0 w-full max-w-[480px] md:max-w-[1080px] mx-auto"
      >
        <Image
          src={Avatar}
          alt="dean kemball skull with sunglasses avatar"
          className="invert dark:invert-0 transition-colors"
          priority
          loading="eager"
        />
      </motion.div>
      <div className="flex w-full flex-col gap-4 md:gap-8 md:pr-16 max-w-sm mx-auto md:max-w-full">
        <p>
        Hey, I&apos;m Dean, a <span className="font-medium">designer and programmer</span> specializing in building <em>modern and powerful websites.</em>
        </p>
        {/* <p>
          I specialize in making interactive and unique portfolio
          websites for artists and creatives. */}
        {/* </p> */}
        <p>
          {`In my spare time, I am performing live visuals at punk shows in my city. See `}
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