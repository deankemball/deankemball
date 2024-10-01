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
    <div className="font-inter text-xl md:text-2xl lg:text-3xl flex flex-col mx-auto select-none w-full max-w-[19rem] md:max-w-[23rem] lg:max-w-[840px] leading-6 md:leading-7 lg:items-center lg:-translate-x-10 lg:gap-8 z-50 justify-center my-auto items-center h-screen relative">
  <div className="max-w-sm mx-auto absolute top-0 bottom-0 my-auto max-h-[448px] h-[448px] min-w-[448px] aspect-square flex justify-around flex-col z-20">
    {skills.sort((a, b) => (a > b ? 1 : -1)).map((skill, i) => (
      <MarqueeItem
        direction={i % 2 === 0 ? 'left' : 'right'}
        key={`skill-${i}`}
        item={skill}
      />
    ))}
  </div>

  {/* Black circle with feathered edges */}
  {/* <div className="rounded-full w-[320x] min-w-[320x] aspect-square absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 bg-black z-30 shadow-[20px_20px_50px_30px_rgba(0,0,0,0.5)]"></div> */}

  <motion.div
    animate={{ rotate: [-1, 0, -1], y: [-4, 0, -4] }}
    transition={{ ease: 'easeInOut', duration: 2, repeat: Infinity }}
    className="mt-6 z-50 pointer-events-none"
  >
    <Image
      src={Avatar}
      alt="dean kemball skull with sunglasses avatar"
      className="invert dark:invert-0 transition-colors scale-[70%] md:scale-95 lg:scale-125 z-50"
      priority
      loading="eager"
    />
  </motion.div>
</div>
)}

export default AboutHero;
