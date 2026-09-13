import bannerImage from "../assets/banner-stack.png";
function Hero() {
  return (
    <section className="container mx-auto pt-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start gap-5">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl text-center md:text-left font-extrabold text-[#0F172A]">
            Build Your Ideal <br />
            <span className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-brand-gradient">
              Development Stack
            </span>
          </h1>
          <p className="text-center md:text-left max-w-125">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="w-full flex justify-center md:justify-start gap-4 pt-4">
            <button className="flex-1 btn sm:btn-md md:btn-md max-w-50 h-10 bg-brand-gradient text-white text-[12px] lg:text-[14px] font-normal sm:font-semibold">
              Explore Technologies
            </button>
            <button className="flex-1 btn btn-outline border-[#E5E7EB] sm:btn-md md:btn-md max-w-50 text-[12px] lg:text-[14px] font-normal sm:font-semibold  bg-white text-[#374151] ">
              Learn More
            </button>
          </div>
        </div>
        <img
          src={bannerImage}
          alt="banner-image"
          className="w-full max-w-100 md:max-w-105 lg:max-w-120 xl:max-w-130 h-auto"
        />
      </div>
    </section>
  );
}

export default Hero;
