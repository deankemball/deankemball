import Link from "next/link";
import React, { useState } from "react";
import MusicVideo from "public/icons/musicVideo.svg";
import Bus from "public/icons/bus.svg";
import Arm from "public/icons/arm.svg";
import SNC from "public/icons/snc.svg";
import TCU from "public/icons/tcu.svg";
import Left from "public/icons/left.svg";
import Right from "public/icons/right.svg";
import mod from "@/lib/mod";
import clsx from "clsx";

export const projects = [
  {
    title: "post-organic bauplan",
    link: "/portfolio/post-organic-bauplan",
    type: "research performance",
    year: "2024",
    icon: <Arm className="dark:invert invert-0 group-hover:animate-wiggle" />,
    url: "https://stickandchoke.com/",
    disabled: false,
  },
  {
    title: "stick & choke",
    link: "/portfolio/stick-and-choke",
    type: "tattoo artist",
    year: "2024",
    icon: (
      <SNC className="dark:invert invert-0 group-hover:animate-[spin_2s_linear_infinite]" />
    ),
    url: "https://stickandchoke.com/",
    disabled: false,
  },
  {
    title: "post–organic bauplan",
    link: "/portfolio/post-organic-bauplan",
    type: "performance & research",
    year: "2024",
    icon: (
      <Arm className="dark:invert invert-0 group-hover:animate-[spin_2s_linear_infinite]" />
    ),
    url: "https://www.postorganic-bauplan.com/",
    disabled: true,
  },
  {
    title: "transcentury update",
    link: "/portfolio/transcentury-update",
    type: "music festival",
    year: "2024",
    icon: <TCU className="dark:invert invert-0 group-hover:animate-scale" />,
    url: "https://www.transcenturyupdate.com/",
    credits: {
      design: { person: "Alex Brade", link: "https://www.alexbrade.de/" },
    },
    disabled: false,
  },
  {
    title: "deanwallflower",
    link: "/portfolio/deanwallflower",
    type: "new media artist",
    year: "2023",
    icon: (
      <MusicVideo className="invert dark:invert-0 group-hover:animate-wiggle" />
    ),
    url: "https://deanwallflower.com/",
    disabled: false,
  },
  {
    title: "wilma",
    link: "/portfolio/wilma",
    type: "culture project",
    year: "2023",
    icon: <Bus className="dark:invert-0 invert group-hover:animate-car" />,
    url: "https://www.kultourkutsche.de/",
    disabled: false,
  },
];

const Portfolio = () => {
  const [pageNo, setPageNo] = useState(0);
  const projectsPerPage = 5;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const LeftIcon = Left;
  const RightIcon = Right;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full justify-center items-center gap-4 md:gap-8 px-8 md:px-0">
        <div className="flex flex-col gap-4 md:gap-8 w-full max-w-xl md:h-[576px] md:min-h-[576px]">
          {projects
            .filter((item) => !item.disabled)
            .slice(
              pageNo * projectsPerPage,
              pageNo * projectsPerPage + projectsPerPage
            )
            .map((project, i) => (
              <div
                key={project.link}
                className="flex flex-col gap-2 h-full w-full"
              >
                <Link
                  key={i}
                  href={project.link}
                  target={project.link.includes("http") ? "_blank" : ""}
                  className="flex w-full justify-between group"
                >
                  <div className="flex flex-col h-full justify-between">
                    <div
                      className={clsx(
                        "text-3xl h-full group-hover:text-red group-hover:dark:text-red transition-colors md:text-3xl lg:text-4xl flex"
                      )}
                    >
                      {project.icon}
                    </div>
                    <p className="text-black/50 dark:text-white/50 text-sm md:text-md lg:text-lg leading-none -mb-1 md:-mb-[6px] lg:-mb-2 transition-colors">
                      {project.year}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-2 align-middle group self-end text-right w-full justify-between">
                      <p className="text-2xl font-medium group-hover:text-red group-hover:dark:text-red transition-colors md:text-3xl lg:text-4xl decoration-red underline underline-offset-2 w-full">
                        {project.title}
                      </p>
                    </div>
                    <p className="w-fit ml-auto text-right text-xl md:text-2xl lg:text-3xl leading-5 md:leading-6 lg:leading-7">
                      {project.type}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          {totalPages >= 2 && projects.length > 6 ? (
            <div className="flex gap-8 mx-auto items-center w-full justify-center z-50 md:justify-between">
              <button
                onClick={() => setPageNo((prev) => mod(prev - 1, totalPages))}
                // disabled={pageNo === 0}
                className="transition-colors disabled:opacity-50 disabled:hover:text-inherit md:hover:text-red active:text-red text-4xl"
              >
                <LeftIcon />
              </button>
              {[...new Array(2)].map((page, i) => {
                return (
                  <div
                    key={`dot-${i}`}
                    className={clsx(
                      pageNo === i ? "bg-red" : "bg-black dark:bg-white",
                      "rounded-full w-4 h-4 transition-all cursor-pointer hover:md:scale-110 ease-in hidden md:block"
                    )}
                    onClick={() => {
                      setPageNo(i);
                    }}
                  />
                );
              })}
              <button
                onClick={() => setPageNo((prev) => mod(prev + 1, totalPages))}
                className="transition-colors disabled:opacity-50 disabled:hover:text-inherit md:hover:text-red active:text-red text-4xl"
              >
                <RightIcon />
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
