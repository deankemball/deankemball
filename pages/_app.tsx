import { NextPage } from "next";
import type { AppProps } from "next/app";
import {
  ReactElement,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import "../src/index.css";
import { motion, useUnmountEffect } from "framer-motion";
import { Router } from "next/router";
import { menuItems } from "../components/layout/Footer";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// const pageDown = {
//   pageInitial: {
//     opacity: 0,
//     y: "100%",
//     transition: {
//       delay: 0.3,
//       duration: 0.4,
//       ease: "easeOut",
//     },
//   },
//   pageAnimate: {
//     opacity: 1,
//     y: "0%",
//     transition: {
//       delay: 0.3,
//       duration: 0.4,
//       ease: "easeOut",
//     },
//   },
//   pageExit: {
//     opacity: 0,
//     y: "-100%",
//     transition: {
//       delay: 0.3,
//       duration: 0.4,
//       ease: "easeOut",
//     },
//   },
// };

// const pageUp = {
//   pageExit: {
//     opacity: 0,
//     y: "100%",
//     transition: {
//       delay: 0.3,
//       duration: 0.4,
//       ease: "easeOut",
//     },
//   },
//   pageAnimate: {
//     opacity: 1,
//     y: "0%",
//     transition: {
//       delay: 0.3,
//       duration: 0.4,
//       ease: "easeOut",
//     },
//   },
//   pageInitial: {
//     opacity: 0,
//     y: "-100%",
//     transition: {
//       delay: 0.3,
//       duration: 0.4,
//       ease: "easeOut",
//     },
//   },
// };

export default function MyApp({
  Component,
  pageProps,
  router,
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  const [direction, setDirection] = useState<string>("");

  let path = router.route.split("/")[1];
  if (path === "") {
    path = "home";
  }

  useEffect(() => {
    const storage = globalThis?.sessionStorage;
    const prevPath = storage.getItem("currentPath");
    storage.setItem("prevPath", prevPath as string);
    if (globalThis.location.pathname.split("/")[1] === "") {
      storage.setItem("currentPath", "home");
    } else {
      storage.setItem(
        "currentPath",
        globalThis.location.pathname.split("/")[1]
      );
      const currPath = storage.getItem("currentPath");
      // console.log(`previous:${prevPath}, current:${currPath}`);
      let prevPosition = menuItems.indexOf(prevPath as string);
      let currPosition = menuItems.indexOf(currPath as string);
      let direction = prevPosition < currPosition ? "down" : "up";
      setDirection(direction);
      console.log(
        `previous: ${prevPosition}, current: ${currPosition}, direction: ${direction}`
      );
    }
  }, [router.asPath]);

  return getLayout(
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      exit="pageExit"
      // variants={direction === "up" ? pageUp : pageDown}
      variants={{
        pageExit: {
          opacity: 0,
          // y: "100%",
          transition: {
            delay: 0.1,
            duration: 0.2,
            ease: "easeOut",
          },
        },
        pageAnimate: {
          opacity: 1,
          // y: "0%",
          transition: {
            delay: 0.1,
            duration: 0.3,
            ease: "easeIn",
          },
        },
        pageInitial: {
          opacity: 0,
          // y: "-100%",
          transition: {
            delay: 0.1,
            duration: 0.3,
            ease: "easeOut",
          },
        },
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}
