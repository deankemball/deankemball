import Link from "next/link";
import React from "react";
import Fire from "../../../public/icons/fire.svg";
import Carrot from "../../../public/icons/carrot.svg";
import Game from "../../../public/icons/game.svg";
import Camera from "../../../public/icons/camera.svg";
import MusicVideo from "../../../public/icons/musicVideo.svg";
import Bus from "../../../public/icons/bus.svg";

const projects = [
  {
    title: "wilma",
    link: "/portfolio/wilma",
    type: "community and culture",
    year: "2023",
    icon: Bus,
  },
  {
    title: "deanwallflower",
    link: "https://deanwallflower.vercel.app/",
    type: "new media artist portfolio",
    year: "2023",
    icon: MusicVideo,
  },
  {
    title: "merchbabe",
    link: "/portfolio/merchbabe",
    type: `graphic design & e-commerce`,
    year: "2022",
    icon: Fire,
  },
  {
    title: "cell-dodger",
    link: "https://cell-dodger.vercel.app/",
    type: "online game project",
    year: "2022",
    icon: Game,
  },
  {
    title: "recipe app",
    link: "/portfolio/recipeapp",
    type: "ui/ux mockup",
    year: "2022",
    icon: Carrot,
  },
];

const Portfolio = () => {
  return (
    <div className="flex flex-col items-center font-inter">
      <div className="grid grid-cols-1 md:grid-cols-2 row-auto gap-4 md:gap-2">
        {projects.map((project, i) => {
          return (
            <div key={project.title} className="flex flex-col gap-2 h-full">
              <Link key={i} href={project.link}>
                <a
                  target={project.link.includes("http") ? "_blank" : ""}
                  className="flex flex-col"
                >
                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <p className="ml-[32px] md:ml-[38px] lg:ml-[44px] font-light text-white/50 text-sm md:text-xl lg:text-2xl leading-none -mb-1 md:-mb-[6px] lg:-mb-2">
                        {project.year}
                      </p>
                      <div className="flex gap-2 align-middle group">
                        <div className="text-2xl group-hover:text-red group-hover:dark:text-red transition-colors md:text-3xl lg:text-4xl flex items-end justify-start">
                          {<project.icon />}
                        </div>
                        <p className="text-2xl group-hover:text-red group-hover:dark:text-red transition-colors md:text-3xl lg:text-4xl decoration-red underline underline-offset-2">
                          {project.title}
                        </p>
                      </div>
                      <p className="ml-[32px] md:ml-[38px] lg:ml-[44px] flex h-full self-start w-[138px] md:w-[180px] lg:w-[200px] font-light text-xl md:text-2xl lg:text-3xl leading-5 md:leading-6 lg:leading-7">
                        {project.type}
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
