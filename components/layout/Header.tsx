import clsx from "clsx";
import Link from "next/link";

interface HeaderProps {
  selected: string;
}

function Header({ selected }: HeaderProps) {
  return (
    <Link href={"/"}>
        <div
          className={clsx(
            "z-[101]",
            selected === "portfolioDemo"
              ? "text-white decoration-white opacity-50 hover:opacity-100 transition-colors select-none -space-y-1 text-2xl md:text-3xl lg:text-4xl cursor-pointer" :
              selected === 'stick-and-choke' || selected === 'transcentury-update' ? 
              'text-black decoration-black opacity-50 hover:opacity-100 transition-colors select-none -space-y-1 text-2xl md:text-3xl lg:text-4xl cursor-pointer'
              : "text-black dark:text-white hover:md:text-red dark:hover:md:text-red transition-colors select-none -space-y-1 text-2xl md:text-3xl lg:text-4xl cursor-pointer underline decoration-red"
          )}
        >
          <p>dean</p>
          <p>kemball</p>
        </div>
    </Link>
  );
}

export default Header;
