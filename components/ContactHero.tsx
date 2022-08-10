import Link from "next/link";
import Twitter from "../public/twitter3.svg";
import Email from "../public/email.svg";
import Discord from "../public/discord.svg";
import Github from "../public/github.svg";

function ContactHero() {
  return (
    <div className="flex min-w-screen flex-col justify-between py-6 items-center">
      <div className="flex-col space-y-2">
        <Link href={"https://github.com/deankemball"}>
          <a>
            <div className="flex justify-between space-x-2 items-center">
              <Github className="text-3xl md:text-4xl lg:text-5xl" />
              <div className="flex flex-grow bg-red h-[2.5px] min-w-2 w-6"></div>
              <div className="text-xl md:text-2xl lg:text-3xl">
                @deankemball
              </div>
            </div>
          </a>
        </Link>
        <Link href={"https://twitter.com/deankemball"}>
          <a>
            <div className="flex justify-between space-x-2 items-center">
              <Twitter className="text-3xl md:text-4xl lg:text-5xl" />
              <div className="flex flex-grow bg-red h-[2.5px]"></div>
              <div className="text-xl md:text-2xl lg:text-3xl">
                @deankemball
              </div>
            </div>
          </a>
        </Link>
        <Link href={"https://discordapp.com/users/729637167151710298"}>
          <a>
            <div className="flex justify-between space-x-2 items-center">
              <Discord className="text-3xl md:text-4xl lg:text-5xl" />
              <div className="flex flex-grow bg-red h-[2.5px]"></div>
              <div className="text-xl md:text-2xl lg:text-3xl">
                @deankemball
              </div>
            </div>
          </a>
        </Link>
        <Link href={"mailto:deankemball@gmail.com"}>
          <a>
            <div className="flex justify-between space-x-2 items-center">
              <Email className="text-3xl md:text-4xl lg:text-5xl" />
              <div className="flex flex-grow bg-red h-[2.5px] min-w-2 w-6"></div>
              <div className="text-xl md:text-2xl lg:text-3xl">
                deankemball@gmail.com
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default ContactHero;
