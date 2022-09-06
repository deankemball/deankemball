import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Dark from "../public/dark.svg";
import Light from "../public/light.svg";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setTheme("light");
    setMounted(true);
  }, []);

  const changeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <button
        onClick={() => changeHandler()}
        className="text-black dark:text-white text-2xl md:text-3xl lg:text-4xl opacity-50 decoration-red underline underline-offset-2"
      >
        {theme === "dark" ? "light" : "dark"}
      </button>
    </>
  );
};

export default ThemeSwitch;
