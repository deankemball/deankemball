import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Dark from "../public/dark.svg";
import Light from "../public/light.svg";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setTheme("dark");
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
        className="text-black dark:text-white text-xl md:text-2xl opacity-50 border-b-2 border-red"
      >
        {theme === "dark" ? "light" : "dark"}
      </button>
    </>
  );
};

export default ThemeSwitch;
