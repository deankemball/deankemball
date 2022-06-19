import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";

let menuItems = ["home", "about", "portfolio", "contact"];

export default function Footer(): JSX.Element {
  let router = useRouter().asPath.split("/")[1];
  if (router === "") {
    router = "home";
  }
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setSelected(router);
  }, [router]);

  return (
    <div>
      {menuItems.map((item, i) => {
        return (
          <>
            <div
              className="font-inter font-regular tracking-wide text-3xl text-right"
              key={i}
            >
              <Link href={item === "home" ? "/" : `/${item}`}>
                <a
                  className={
                    selected === item
                      ? selected != "home"
                        ? "border-b-red text-red border-b-2"
                        : "border-b-red border-b-2"
                      : "border-b-red border-b-2"
                  }
                  onClick={() => setSelected(item)}
                >
                  {item}
                </a>
              </Link>
            </div>
          </>
        );
      })}
    </div>
  );
}
