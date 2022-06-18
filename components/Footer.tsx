import Link from "next/link";

let menuItems = ["home", "about", "portfolio", "contact"];

const Footer: Function = (selected: string): JSX.Element[] =>
  menuItems.map((item, i) => {
    return (
      <>
        <div
          className="font-inter font-regular tracking-wide text-3xl text-right"
          key={item}
        >
          <Link href={item === "home" ? "/" : `/${item}`}>
            <a
              className={
                selected === item
                  ? "border-b-red text-red border-b-2"
                  : "border-b-red border-b-2"
              }
            >
              {item}
            </a>
          </Link>
        </div>
      </>
    );
  });

export default Footer;
