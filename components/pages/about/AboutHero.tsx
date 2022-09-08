function AboutHero() {
  return (
    <div className="font-inter text-xl md:text-2xl lg:text-3xl flex-col space-y-4 mx-auto select-none w-72 md:w-auto lg:w-[25rem] leading-6 md:leading-7">
      <p>
        I am a self taught{" "}
        <span className="font-semibold">
          media artist who transitioned into web development.
        </span>
      </p>
      <p>
        Having previously worked as a freelance{" "}
        <span className="italic">photographer</span>,{" "}
        <span className="italic">video editor</span> and{" "}
        <span className="italic">graphic designer</span>,{" "}
        <span className="font-semibold">
          I have a unique skillset that I am able to leverage in my designs.
        </span>
      </p>
    </div>
  );
}

export default AboutHero;
