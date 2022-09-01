import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "merchbabe.net",
    link: "https://merchbabe.net/",
    type: "artist portfolio & e-commerce",
    year: "2022",
  },
  {
    title: "recipe app",
    link: "/recipeapp",
    type: "ui/ux mockup",
    year: "2022",
  },
  {
    title: "deanwallflower.com",
    link: "https://deanwallflower.com/",
    type: "artist portfolio",
    year: "2020",
  },
];

const Portfolio = () => {
  return (
    <div className="flex flex-col items-center font-inter">
      <div className="flex flex-col gap-2">
        {projects.map((project) => {
          return (
            <>
              <div className="flex flex-col">
                <Link href={project.link}>
                  <a>
                    <p className="text-xl md:text-2xl lg:text-3xl decoration-red underline underline-offset-2">
                      {project.title}
                    </p>
                    <p className="w-48 break-words font-thin text-lg md:text-xl lg:text-2xl">
                      {project.type}
                    </p>
                    <p className="w-48 break-words font-thin text-xs md:text-md lg:text-lg">
                      {project.year}
                    </p>
                  </a>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
