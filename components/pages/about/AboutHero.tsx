import Image from "next/image";
import Avatar from "public/about/dean-kemball-avatar.png";
import { motion } from "framer-motion";

function AboutHero() {
  return (
    <div className="font-inter text-xl md:text-2xl lg:text-3xl flex flex-col lg:flex-row mx-auto select-none w-full max-w-[19rem] md:max-w-[23rem] lg:max-w-[800px] leading-6 md:leading-7 lg:items-center lg:-translate-x-10">
      <motion.div
        animate={{ rotate: [-1, 0, -1], y: [-4, 0, -4] }}
        transition={{ ease: "easeInOut", duration: 2, repeat: Infinity }}
        className="-my-8 lg:my-0"
      >
        <Image
          src={Avatar}
          alt="dean kemball skull with sunglasses avatar"
          className="invert dark:invert-0 transition-colors scale-75"
        />
      </motion.div>
      <div className="flex flex-col gap-[24px] md:gap-[28px] lg:gap-[32px]">
        <p>
          I draw on my diverse background in{" "}
          <em>photography, motion graphics, and illustration</em> to create
          compelling web experiences.{" "}
        </p>
        <p>
          <strong>I craft distinct visual identities</strong>, and use modern
          tools to ensure online visibility, performance and accessibility.
        </p>
      </div>
    </div>
  );
}

export default AboutHero;
