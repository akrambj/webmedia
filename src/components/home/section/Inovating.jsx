const Inovating = () => {
  return (
    <section className="w-screen h-[50vh] overflow ">
      <div className="flex flex-col justify-center items-center gap-5 w-full h-full">
        <div className="flex flex-col items-center gap-1 text-center">
          <h2 className="uppercase font-bold text-4xl">INNOVATIVE MARKETING</h2>
          <h4 className="text-4xl text-[#1E1E1E] sm:hidden">For</h4>
          <h2 className="uppercase font-bold text-4xl text-primary">
            <span className="hidden sm:inline text-4xl capitalize font-medium text-[#1E1E1E]">
              For
            </span>{" "}
            Modern World
          </h2>
        </div>
        <div className="text-center">
          <p className="text-[#575757] w-[90%] mx-auto sm:text-lg sm:w-[80%] md:w-[65%] md:text-xl lg:w-[50%] xl:w-[40%]">
            At redspot, we{"'"}re passionately dedicated to providing innovative
            marketing solutions that keep your business ahead of the curve in an
            ever-changing digital landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Inovating;