import Image from "next/image";
import Avatar from "/public/about/dean-kemball-avatar-filled-3.png";
import { motion } from "framer-motion";
import Link from "next/link";
import MarqueeItem from "components/marquee";

const skills = [
  'ui/ux',
  'design', 
  'wireframing', 
  'prototyping', 
  'frontend',
  'backend',
  'cms',
  'database',
  'e-mails',
  'newsletter',
  'product'
]
function AboutHero() {
  return (
    <div className="font-inter text-xl md:text-2xl lg:text-3xl flex flex-col mx-auto select-none w-full max-w-[19rem] md:max-w-[23rem] lg:max-w-[840px] leading-6 md:leading-7 lg:items-center lg:-translate-x-10 lg:gap-8 z-50 justify-center my-auto items-center h-fit relative overflow-hidden scrollbar-hide"> {/* Adjusted overflow */}
      <div className="mx-auto absolute top-0 bottom-0 my-auto h-full max-h-[calc(100vw-64px)] w-full max-w-[calc(100vw-64px)] md:max-h-[448px] md:max-w-[448px] aspect-square flex justify-around flex-col z-20 overflow-hidden"> {/* Adjusted overflow */}
        {skills.sort((a, b) => (a > b ? 1 : -1)).map((skill, i) => (
          <MarqueeItem
            direction={i % 2 === 0 ? 'left' : 'right'}
            key={`skill-${i}`}
            item={skill}
          />
        ))}
      </div>

      <motion.div
        animate={{ rotate: [-1, 0, -1], y: [-4, 0, -4] }}
        transition={{ ease: 'easeInOut', duration: 2, repeat: Infinity }}
        className="mt-6 z-50 pointer-events-none w-full max-w-[360px]"
      >
        <Image
          src={Avatar}
          alt="dean kemball skull with sunglasses avatar"
          className="invert dark:invert-0 transition-colors z-50"
          priority
          loading="eager"
        />
      </motion.div>
    </div>
  );
}


export default AboutHero;
