import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "merchbabe.net",
    link: "/portfolio/merchbabe",
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
    link: "/portfolio/recipeapp",
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
        {projects.map((project, i) => {
          return (
            <>
              <Link key={i} href={project.link}>
                <a
                  target={project.link.includes("http") ? "_blank" : ""}
                  className="flex flex-col h-full justify-between hover:text-red dark:hover:text-red"
                >
                  <p className="text-2xl md:text-3xl lg:text-4xl decoration-red underline underline-offset-2">
                    {project.title}
                  </p>
                  <p className="w-52 font-light text-xl md:text-2xl lg:text-3xl leading-5 md:leading-6 lg:leading-7">
                    {project.type}
                  </p>
                  <div className="flex grow"></div>
                  <p className="w-48 font-light text-lg md:text-xl lg:text-2xl leading-5 md:leading-6 lg:leading-7">
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
