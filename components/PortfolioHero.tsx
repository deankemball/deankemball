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
    title: "cell-dodger.app",
    link: "https://cell-dodger.vercel.app/",
    type: "online game project",
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
      <div className="grid grid-cols-1 md:grid-cols-2 row-auto">
        {projects.map((project) => {
          return (
            <>
              <Link href={project.link}>
                <a
                  target={project.link.includes("http") ? "_blank" : ""}
                  className="flex flex-col h-full justify-between"
                >
                  <p className="text-xl md:text-2xl lg:text-3xl decoration-red underline underline-offset-2 ">
                    {project.title}
                  </p>
                  <p className="w-40 font-light text-lg md:text-xl lg:text-2xl leading-4 md:leading-5 lg:leading-6">
                    {project.type}
                  </p>
                  <div className="flex grow"></div>
                  <p className="w-48 font-light text-base md:text-lg lg:text-xl leading-4 md:leading-5 lg:leading-6">
                    {project.year}
                  </p>
                </a>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
