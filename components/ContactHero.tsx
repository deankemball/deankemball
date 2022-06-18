import Link from "next/link";
import Twitter from "../public/twitter3.svg";
import Email from "../public/email.svg";
import Discord from "../public/discord.svg";

function ContactHero() {
  return (
    <div className="flex min-w-screen flex-col justify-between py-6 text-black bg-white">
      <div className="flex-col space-y-2">
        <Link href={"https://twitter.com/deankemball"}>
          <a>
            <div className="flex space-x-2 items-center">
              <Twitter className="text-4xl text-black" />
              <div className="text-xl">—— @deankemball</div>
            </div>
          </a>
        </Link>
        <Link href={"https://discordapp.com/users/729637167151710298"}>
          <a>
            <div className="flex space-x-2 items-center">
              <Discord className="text-4xl text-black" />
              <div className="text-xl">—— @deankemball</div>
            </div>
          </a>
        </Link>
        <Link href={"mailto:deankemball@gmail.com"}>
          <a>
            <div className="flex space-x-2 items-center">
              <Email className="text-4xl text-black" />
              <div className="text-xl">—— deankemball@gmail.com</div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default ContactHero;
