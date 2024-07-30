import Herobg from "../assets/Herobg.png";

const Hero = () => {
  return (
    <div className="relative overflow-hidden flex flex-col justify-center items-center px-16 py-20 text-white min-h-[800px] max-md:px-5">
      <img
        loading="lazy"
        srcSet={Herobg}
        className="object-cover absolute inset-0 w-full h-full filter grayscale brightness-50"
        style={{ zIndex: -1 }} // Ensure the image is behind the overlay
      />
      <div className="absolute inset-0 bg-white opacity-50"></div>
      <div className="relative flex flex-col items-center mt-[-200px] max-w-full w-[1148px] max-md:mt-10 text-center">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h1 className="font-Jakarta text-tertiary font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-wide leading-snug">
            UNLEASHING THE POTENTIAL OF AFRICAN TALENT TO TRANSFORM YOUR
            BUSINESS!
          </h1>
          <h2 className="font-Jakarta text-black font-bold mt-6 text-2xl sm:text-3xl lg:text-4xl tracking-wide">
            GLOBAL EXPERTISE. LOW-COST OPERATIONS. DIVERSITY.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
