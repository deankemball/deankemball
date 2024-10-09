import { motion } from "framer-motion";
import MarqueeItem from "@/components/marquee";
import { Dispatch, ReactElement, SetStateAction, useEffect, useState } from "react";
import {XIcon} from 'lucide-react'
import mod from "@/lib/mod";
import Left from 'public/icons/left.svg'
import Right from 'public/icons/right.svg'

type TileType = {
  title: string,
  text: ReactElement[]
}

const SkillInfo: TileType[] = [
  {title: 'intro', text: []},
  {
    title: 'backend',
    text: [
      <p key="1">Develop scalable API architectures with <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">Node.js</a></p>,
      <p key="2">Optimize performance for server-heavy applications</p>,
      <p key="3">Secure data and services with robust authentication</p>,
    ]
  },
  {
    title: 'cms',
    text: [
      <p key="1">Expert in <a href="https://payloadcms.com/" target="_blank" rel="noopener noreferrer">Payload CMS</a></p>,
      <p key="2">Custom theme and plugin development</p>,
      <p key="3">Seamless integration with frontends built with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a></p>,
    ]
  },
  {
    title: 'database',
    text: [
      <p key="1">Design and maintain relational databases with <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">PostgreSQL</a></p>,
      <p key="2">Craft optimized queries for high-performance</p>,
      <p key="3">Implement database migrations and schema changes</p>,
    ]
  },
  {
    title: 'design',
    text: [
      <p key="1">Craft intuitive layouts in <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">Figma</a> </p>,
      <p key="2">Develop visually engaging UI mockups and clickable Prototypes</p>,
      <p key="3">Create pixel-perfect designs aligned with brand guidelines</p>,
    ]
  },
  {
    title: 'e-mails',
    text: [
      <p key="1">Create custom themed email templates using <a href="https://react.email/" target="_blank" rel="noopener noreferrer">react email</a></p>,
      <p key="2">Ensure cross-client compatibility (e.g., <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer">Gmail</a>, Outlook)</p>,
      <p key="3">Responsive designs that work across devices</p>,
    ]
  },
  {
    title: 'frontend',
    text: [
      <p key="1">Build responsive UIs with <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a> & <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a></p>,
      <p key="2">Integrate animations using <a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer">Framer Motion</a></p>,
      <p key="3">Use <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS</a> for efficient styling</p>,
    ]
  },
  {
    title: 'newsletter',
    text: [
      <p key="1">Design visually engaging newsletters</p>,
      <p key="2">Set up automated email workflows with platforms like <a href="https://sendgrid.com/" target="_blank" rel="noopener noreferrer">SendGrid</a></p>,
      <p key="3">Complete e-mail toolchain including sign up, unsubscribe, blog posts etc.</p>,
    ]
  },
  {
    title: 'product',
    text: [
      <p key="3">Translate user needs into actionable features</p>,
      <p key="1">Manage full product lifecycle from concept to design to development to launch</p>,
      <p key="2">Coordinate with cross-functional teams for smooth delivery</p>,
    ]
  },
  {
    title: 'prototyping',
    text: [
      <p key="1">Rapidly prototype UI components with <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">Figma</a></p>,
      <p key="2">Turn ideas into functional models</p>,
      <p key="3">Test UX flows with low and high-fidelity prototypes</p>,
    ]
  },
  {
    title: 'ui/ux',
    text: [
      <p key="1">Design user-centric, responsive interfaces</p>,
      <p key="2">Optimize user journeys through seamless experiences</p>,
      <p key="3">Conduct user research to inform design decisions</p>,
    ]
  },
  {
    title: 'wireframing',
    text: [
      <p key="1">Translate ideas into clear wireframes with tools like <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">Figma</a></p>,
      <p key="2">Outline site architecture and layouts</p>,
      <p key="3">Collaborate with stakeholders to iterate on designs</p>,
    ]
  }
];


function SkillsHero() {
  const [tileIndex, setTileIndex] = useState(0)

  useEffect(() => {
    console.log(tileIndex)
  }, [tileIndex]);

  return (
    tileIndex === 0 ? <IntroTile setTileIndex={setTileIndex} /> : <SkillCard tile={SkillInfo[tileIndex]} tileIndex={tileIndex} setTileIndex={setTileIndex} />
  );
}

const skills = [
  'backend',
  'cms',
  'database',
  'design', 
  'e-mails',
  'frontend',
  'newsletter',
  'product',
  'prototyping', 
  'ui/ux',
  'wireframing', 
]

const IntroTile = ({setTileIndex}: {setTileIndex: Dispatch<SetStateAction<number>>}) => {
  return (
    <motion.div
    className="mx-auto top-0 bottom-0 my-auto h-full w-full max-w-[calc(100vw-64px)] md:max-h-[768px] md:max-w-xl md:aspect-square flex justify-between flex-col z-20 md:overflow-hidden"
      initial="pageInitial"
      animate="pageAnimate"
      exit="pageExit"
      // variants={direction === "up" ? pageUp : pageDown}
      variants={{
        pageExit: {
          opacity: 0,
          // y: "100%",
          transition: {
            // delay: 0.1,
            duration: 0.1,
            ease: "easeOut",
          },
        },
        pageAnimate: {
          opacity: 1,
          // y: "0%",
          transition: {
            // delay: 0.1,
            duration: 0.15,
            ease: "easeOut",
          },
        },
        pageInitial: {
          opacity: 0,
          // y: "-100%",
          transition: {
            // delay: 0.1,
            duration: 0.15,
            ease: "easeIn",
          },
        },
      }}
    >
        {skills.sort((a, b) => (a > b ? 1 : -1)).map((skill, i) => (
          <MarqueeItem
            direction={i % 2 === 0 ? 'left' : 'right'}
            i={i}
            key={`skill-${i}`}
            item={skill}
            onClick={setTileIndex}
          />
        ))}
      </motion.div>
  )
}

const SkillCard = ({tile, tileIndex, setTileIndex}: {tile: TileType, tileIndex: number, setTileIndex: Dispatch<SetStateAction<number>>}) => {
  const LeftIcon = Left
  const RightIcon = Right
  return (
        <motion.div
        key={tile.title}
        className="flex flex-col justify-center items-center"
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          // variants={direction === "up" ? pageUp : pageDown}
          variants={{
            pageExit: {
              opacity: 0,
              // y: "100%",
              transition: {
                // delay: 0.1,
                duration: 0.1,
                ease: "easeOut",
              },
            },
            pageAnimate: {
              opacity: 1,
              // y: "0%",
              transition: {
                // delay: 0.1,
                duration: 0.15,
                ease: "easeOut",
              },
            },
            pageInitial: {
              opacity: 0,
              // y: "-100%",
              transition: {
                // delay: 0.1,
                duration: 0.15,
                ease: "easeIn",
              },
            },
          }}
        >
    <div className="mx-auto top-0 bottom-0 my-auto h-full max-h-full w-full max-w-[calc(100vw-64px)] md:max-h-[768px] md:max-w-xl md:w-full aspect-square flex flex-col z-20 md:overflow-hidden gap-4">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-3xl md:text-4xl underline decoration-red font-medium">{tile.title}</h1>
        <XIcon className="h-[32px] md:h-[36px] w-[32px] md:w-[36px] cursor-pointer hover:text-red transition-colors" onClick={()=>setTileIndex(0)} />
      </div>
      <div id='skills' className="flex flex-col gap-1 text-2xl md:text-3xl h-full">
        {tile.text.map((point)=>{
          return point
        })}
      </div>
      <div className="w-full justify-between hidden md:flex max-w-xl">
        <button
              onClick={() => setTileIndex(prev => mod(prev - 1, SkillInfo.length))}
              // disabled={pageNo === 0}
              className="transition-colors disabled:opacity-50 disabled:hover:text-inherit md:hover:text-red active:text-red text-4xl"
            >
            <LeftIcon />
          </button>
          <button
                onClick={() => setTileIndex(prev => mod(prev + 1, SkillInfo.length))}
                // disabled={pageNo === totalPages - 1}
                className="transition-colors disabled:opacity-50 disabled:hover:text-inherit md:hover:text-red active:text-red text-4xl"
              >
                <RightIcon />
          </button>
      </div>
    </div>
    </motion.div>
  )
}

export default SkillsHero;
