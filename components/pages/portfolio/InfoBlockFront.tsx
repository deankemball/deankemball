import React from "react";

interface InfoBlockFrontProps {
  type: string;
  title: string;
  description: string;
}

const InfoBlockFront = ({ type, title, description }: InfoBlockFrontProps) => {
  return (
    <div className="flex flex-col w-full px-8 md:px-0 max-w-7xl gap-4 text-center items-center">
      {/* <p className="text-md lg:text-xl">
        {type}
      </p> */}
      <h1 className="font-bold text-5xl lg:text-7xl">
        {title}
      </h1>
      <p className="text-2xl lg:text-3xl text-center max-w-2xl">
        {description}
      </p>
    </div>
  );
};

export default InfoBlockFront;
