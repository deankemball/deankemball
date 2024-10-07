import React from "react";
import {usePathname} from 'next/navigation'
import { projects } from "./PortfolioHero";
interface InfoBlockFrontProps {
  type: string;
  title: string;
  description: string;
}

const InfoBlockFront = ({ type, title, description }: InfoBlockFrontProps) => {
  const pathname = usePathname()
  const url = projects.filter((project)=>project.link === pathname)[0].url
  
  return (
    <div className="flex flex-col w-full px-8 md:px-0 max-w-7xl gap-2 md:gap-4 text-center items-center">
      {/* <p className="text-md lg:text-xl">
        {type}
      </p> */}
      <h1 className="font-bold text-4xl lg:text-7xl underline">
        <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
      </h1>
      <p className="text-xl lg:text-3xl text-center max-w-2xl">
        {description}
      </p>
    </div>
  );
};

export default InfoBlockFront;
