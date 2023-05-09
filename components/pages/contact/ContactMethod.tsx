import Link from "next/link";
import React, { FunctionComponent, SVGProps } from "react";

interface ContactmeMethodProps {
  link: string;
  icon: any;
  handle: string;
}

const ContactMethod = ({ link, icon, handle }: ContactmeMethodProps) => {
  return (
    <Link href={link}>
      <a>
        <div className="flex justify-between space-x-2 items-center hover:text-red dark:hover:text-red transition-colors">
          <div className="text-2xl md:text-3xl lg:text-4xl">{icon}</div>
          <div className="flex flex-grow bg-red h-[2px] md:h-[3px] lg:h-1 w-4"></div>
          <div className="text-2xl md:text-3xl lg:text-4xl">{handle}</div>
        </div>
      </a>
    </Link>
  );
};

export default ContactMethod;
