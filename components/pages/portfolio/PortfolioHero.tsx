import Link from "next/link";
import React, { useState } from "react";
import Fire from "../../../public/icons/fire.svg";
import Carrot from "../../../public/icons/carrot.svg";
import Game from "../../../public/icons/game.svg";
import Camera from "../../../public/icons/camera.svg";
import MusicVideo from "../../../public/icons/musicVideo.svg";
import Bus from "../../../public/icons/bus.svg";
import Party from "../../../public/icons/party.svg";
import Needle from "../../../public/icons/needle.svg";
import Arm from "../../../public/icons/Arm.svg";
import Left from '../../../public/icons/left.svg'
import Right from '../../../public/icons/right.svg'
import { clamp } from "../../../src/lib/clamp";

const projects = [
  {
    title: 'post–organic bauplan',
    link: "/portfolio/post-organic-bauplan",
    type: "performance & research",
    year: "2024",
    icon: Arm,
  },
  {
    title: 'stick & choke',
    link: "/portfolio/stick-and-choke",
    type: "tattoo artist",
    year: "2024",
    icon: Needle,
  },
  {
    title: 'transcentury update',
    link: "/portfolio/transcentury-update",
    type: "music festival",
    year: "2024",
    icon: Party,
  },
  {
    title: "deanwallflower",
    link: "/portfolio/deanwallflower",
    type: "new media artist portfolio",
    year: "2023",
    icon: MusicVideo,
  },
  {
    title: "wilma",
    link: "/portfolio/wilma",
    type: "community and culture",
    year: "2023",
    icon: Bus,
  },
  {
    title: "merchbabe",
    link: "/portfolio/merchbabe",
    type: `graphic design & e-commerce`,
    year: "2022",
    icon: Fire,
  },
];

const Portfolio = () => {
  const [pageNo, setPageNo] = useState(0);
  const projectsPerPage = 4;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const LeftIcon = Left
  const RightIcon = Right
  return (
    <div className="flex w-full justify-center items-center font-inter gap-4 md:gap-8 px-8 md:px-0">
      <button 
          onClick={() => setPageNo(prev => clamp(prev - 1, 0, totalPages - 1))} 
          disabled={pageNo === 0}
          className="transition-colors disabled:opacity-50 disabled:hover:text-inherit enabled:hover:text-red text-4xl"
        >
        <LeftIcon />
      </button>
      <div className="grid grid-cols-1 row-auto gap-4 md:gap-8 w-full max-w-md">
        {projects.slice(pageNo * projectsPerPage, pageNo * projectsPerPage + projectsPerPage).map((project, i) => (
          <div key={project.link} className="flex flex-col gap-2 h-full w-full">
            <Link key={i} href={project.link}>
              <a
                target={project.link.includes("http") ? "_blank" : ""}
                className="flex flex-col"
              >
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <p className="ml-[32px] md:ml-[38px] lg:ml-[44px] font-light text-black/50 dark:text-white/50 text-sm md:text-md lg:text-lg leading-none -mb-1 md:-mb-[6px] lg:-mb-2 transition-colors">
                      {project.year}
                    </p>
                    <div className="flex gap-2 align-middle group">
                      <div className="text-2xl self-start group-hover:text-red group-hover:dark:text-red transition-colors md:text-3xl lg:text-4xl flex items-end justify-start">
                        {<project.icon />}
                      </div>
                      <p className="text-2xl group-hover:text-red group-hover:dark:text-red transition-colors md:text-3xl lg:text-4xl decoration-red underline underline-offset-2 w-full">
                        {project.title}
                      </p>
                    </div>
                    <p className="ml-[32px] md:ml-[38px] lg:ml-[44px] flex h-full self-start w-full font-light text-xl md:text-2xl lg:text-3xl leading-5 md:leading-6 lg:leading-7">
                      {project.type}
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
      <button 
            onClick={() => setPageNo(prev => clamp(prev + 1, 0, totalPages - 1))} 
            disabled={pageNo === totalPages - 1}
            className="transition-colors disabled:opacity-50 disabled:hover:text-inherit enabled:hover:text-red text-4xl"
          >
            <RightIcon />
      </button>
    </div>
  );
};

export default Portfolio;
