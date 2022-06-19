import { motion } from "framer-motion";

function IndexHero() {
  return (
    <motion.div
      className="select-none"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.7,
        },
        visible: {
          scale: 1,
          transition: {
            duration: 0.8,
            ease: "easeOut",
          },
        },
      }}
    >
      <div className="font-inter text-center tracking-wide">
        <p className="font-medium text-5xl md:text-7xl">
          front end<br></br> developer
        </p>
        <p className="text-xl md:text-3xl">with a focus on</p>
        <p className="font-medium text-5xl md:text-7xl">UI/UX</p>
      </div>
    </motion.div>
  );
}

export default IndexHero;
