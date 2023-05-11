import React from "react";

interface InfoBlockFrontProps {
  type: string;
  title: string;
  description: string;
}

const InfoBlockFront = ({ type, title, description }: InfoBlockFrontProps) => {
  return (
    <div className="flex flex-col font-ibm w-full max-w-md lg:max-w-lg gap-2 text-center lg:text-left">
      <p className="text-md lg:text-xl font-thin leading-none lg:leading-3">
        {type}
      </p>
      <h1 className="font-bold text-5xl lg:text-7xl leading-[44px] lg:leading-[60px]">
        {title}
      </h1>
      <p className="text-2xl lg:text-4xl leading-6 lg:leading-8 font-thin max-w-sm flex mx-auto lg:w-full lg:mx-0">
        {description}
      </p>
    </div>
  );
};

export default InfoBlockFront;
