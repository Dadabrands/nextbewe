import Herobg from "../assets/Herobg.png";
// import { Link } from "react-router-dom";
// import { useRef } from "react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden flex flex-col justify-center items-center px-16 py-20 text-white min-h-[800px] max-md:px-5">
      <img
        loading="lazy"
        srcSet={Herobg}
        className="object-cover absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }} // Ensure the image is behind the overlay
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
      {/* Black background overlay */}
      <div className="relative flex flex-col items-center mt-[-200px] max-w-full w-[1148px] max-md:mt-10">
        {/* <div className="self-stretch text-5xl font-bold text-center max-md:max-w-full max-md:text-4xl">
          Take Control of Your Healthcare Costs & Claims: <br />
          Ariz Makes Nigerian Healthcare Simpler.
        </div> */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-Jakarta font-bold text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide">
            BUILDING TEAM THAT EXCEL.
          </h1>

          <h1 className="font-Jakarta font-bold text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide">
            DELIVERING PRICES THAT FIT.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
