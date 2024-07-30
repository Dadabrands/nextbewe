import AboutHerobg from "../assets/AboutHerobg.png";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden flex flex-col justify-center items-center px-16 py-20 text-white min-h-[800px] max-md:px-5">
      <img
        loading="lazy"
        srcSet={AboutHerobg}
        className="object-cover absolute filter grayscale inset-0 w-full h-full"
        style={{ zIndex: -1 }}
        alt="Background"
      />
      <div className="absolute inset-0 bg-white opacity-10"></div>
      {/* Black background overlay */}
      <div className="relative flex flex-col items-center text-center max-w-full w-[1148px]">
        <h1 className="flex items-baseline space-x-4 text-6xl text-tertiary font-semibold max-md:text-4xl mt-52 max-md:mt-10">
          Bawo ni we are
        </h1>
        <h2 className="text-6xl font-semibold  text-tertiary mt-4 max-md:text-4xl">
          NextBẹwẹ
        </h2>
        <p className="text-5xl  text-tertiary leading-[80px] mt-12 max-md:text-3xl max-md:mt-10">
          We are committed to building effective and highly affordable remote
          teams in Africa and India.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
