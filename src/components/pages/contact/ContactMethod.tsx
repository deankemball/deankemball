import Link from "next/link";
import React, { FunctionComponent, SVGProps } from "react";

interface ContactmeMethodProps {
  link: string;
  icon: any;
  handle: string;
}

import { useToast } from "@/hooks/use-toast"



const ContactMethod = ({ link, icon, handle }: ContactmeMethodProps) => {
  const {toast} = useToast()

  function updateClipboard(newClip: string) {
    navigator.clipboard.writeText(newClip).then(
      () => {
        toast({
          title: '✓ copied',
          duration: 5000, // Adjust if needed
          className: 'animate-in fade-in slide-in-from-right-10 duration-500'
        })
      },
      () => {
        toast({
          title: 'Try again.'
          //   description: result.message,
        })
      },
    )
  }
  
      {return link.includes('@') ? (
      <button onClick={()=>updateClipboard('deankemball@gmail.com')} className="flex justify-between space-x-2 items-center hover:text-red dark:hover:text-red transition-colors">
        <span className="text-xl md:text-3xl lg:text-4xl">{icon}</span>
          <span className="flex flex-grow bg-red h-[2px] md:h-[3px] lg:h-1 w-4"></span>
          <span className="text-xl md:text-3xl lg:text-4xl font-medium">{handle}</span>
      </button>) :  
     ( 
     <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="flex justify-between space-x-2 items-center hover:text-red dark:hover:text-red transition-colors">
          <div className="text-xl md:text-3xl lg:text-4xl">{icon}</div>
          <div className="flex flex-grow bg-red h-[2px] md:h-[3px] lg:h-1 w-4"></div>
          <div className="text-xl md:text-3xl lg:text-4xl font-medium">{handle}</div>
        </div>
      </a>
      )}
};

export default ContactMethod;
