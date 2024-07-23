import AboutHerobg from "../assets/AboutHerobg.png";

const AboutHero = () => {
  return (
    <div className="relative overflow-hidden flex flex-col justify-center items-center px-16 py-20 text-white min-h-[800px] max-md:px-5">
      <img
        loading="lazy"
        srcSet={AboutHerobg}
        className="object-cover  absolute filter grayscale inset-0 w-full h-full"
        style={{ zIndex: -1 }}
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
      {/* Black background overlay */}
      <div className="relative flex flex-col items-center mt-[-200px] max-w-full w-[1148px] max-md:mt-10">
        <div className="relative mt-72 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Bawo ni, we are
        </div>
        <div className="relative max-md:max-w-full max-md:text-4xl">
          NextBẹwẹ
        </div>
        <div className="relative mt-36 mb-8 text-5xl leading-[80px] max-md:mt-10 max-md:max-w-full">
          We are committed to building effective and highly affordable remote
          teams in Africa and India.
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
