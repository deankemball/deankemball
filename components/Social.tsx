import Link from "next/link";
import { FunctionComponent, ReactNode, SVGProps } from "react";

interface SocialProps {
  text: string;
  children?: FunctionComponent<SVGProps<SVGSVGElement>>[];
}

function AboutHero({ children, text }: SocialProps) {
  return (
    <Link href={"https://twitter.com/deankemball"}>
      <a>
        <div className="flex justify-between space-x-2 items-center">
          <div>{children as ReactNode}</div>
          <div className="flex flex-grow bg-red h-[2px] rounded-md"></div>
          <div className="text-xl md:text-2xl lg:text-3xl">{text}</div>
        </div>
      </a>
    </Link>
  );
}

export default AboutHero;
