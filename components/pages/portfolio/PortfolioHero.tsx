import Link from "next/link";
import React from "react";
import Fire from "../../../public/icons/fire.svg";
import Carrot from "../../../public/icons/carrot.svg";
import Game from "../../../public/icons/game.svg";
import Camera from "../../../public/icons/camera.svg";
import MusicVideo from "../../../public/icons/musicVideo.svg";

const projects = [
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
    type: `artist portfolio & e-commerce`,
    year: "2022",
    icon: Fire,
  },
  {
    title: "recipe app",
    link: "/portfolio/recipeapp",
    type: "ui/ux mockup",
    year: "2022",
    icon: Carrot,
  },
  {
    title: "cell-dodger",
    link: "https://cell-dodger.vercel.app/",
    type: "online game project",
    year: "2022",
    icon: Game,
  },
];

const Portfolio = () => {
  return (
    <div className="flex flex-col items-center font-inter">
      <div className="grid grid-cols-1 md:grid-cols-2 row-auto md:gap-4">
        {projects.map((project, i) => {
          return (
            <>
              <div className="flex flex-col h-full">
                <Link key={i} href={project.link}>
                  <a
                    target={project.link.includes("http") ? "_blank" : ""}
                    className="flex flex-col"
                  >
                    <div className="flex gap-2 hover:text-red dark:hover:text-red align-middle">
                      <div className="text-2xl md:text-3xl lg:text-4xl flex items-center justify-center pt-1">
                        {<project.icon />}
                      </div>
                      <p className="text-2xl md:text-3xl lg:text-4xl decoration-red underline underline-offset-2">
                        {project.title}
                      </p>
                    </div>
                  </a>
                </Link>
                <div className="flex gap-2 h-full flex-1">
                  <div className="text-xl md:text-2xl lg:text-3xl invisible flex items-start">
                    {<project.icon />}
                  </div>
                  <div className="flex flex-col select-none h-full">
                    <p className="flex h-full self-start w-[138px] md:w-[180px] lg:w-[200px] font-light text-xl md:text-2xl lg:text-3xl leading-5 md:leading-6 lg:leading-7">
                      {project.type}
                    </p>
                    {/* <div className="flex grow"></div> */}
                    <p className="w-48 font-light text-lg md:text-xl lg:text-2xl leading-5 md:leading-6 lg:leading-7">
                      {project.year}
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
