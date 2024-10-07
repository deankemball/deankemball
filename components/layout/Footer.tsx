import Link from "next/link";
import clsx from "clsx";

export const menuItems = ["about", "services", , "portfolio", "contact", "skills"];

interface FooterProps {
  setSelected: Function;
  selected: string;
}

export default function Footer({
  setSelected,
  selected,
}: FooterProps): JSX.Element {
  
  return (
    <div className="flex flex-col md:gap-1">
      {menuItems.map((item, i) => (
        <div
          className="font-regular tracking-wide text-2xl md:text-3xl lg:text-4xl text-right"
          key={i}
        >
          <Link href={`/${item}`}
              onClick={() => setSelected(item)}
              className={clsx(
                "transition-colors z-[99] font-medium",
                selected === 'stick-and-choke' ? 
                'text-black decoration-black opacity-50 hover:opacity-100 transition-colors select-none -space-y-2 text-2xl md:text-3xl lg:text-4xl cursor-pointer'
              :  selected === "portfolioDemo" 
              ? "text-white decoration-white opacity-50 hover:opacity-100 transition-colors select-none -space-y-2 text-2xl md:text-3xl lg:text-4xl cursor-pointer" :
                   selected === item && selected != "home"
                  ? "text-red decoration-red underline underline-offset-2"
                  : "decoration-red hover:text-red underline underline-offset-2"
              )}
            >
              {item}
          </Link>
        </div>
      ))}
    </div>
  );
}
