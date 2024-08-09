// import Herobg from "../assets/Herobg.png";

// const Hero = () => {
//   return (
//     <div className="relative overflow-hidden flex flex-col justify-center items-center px-16 py-20 text-white min-h-[800px] max-md:px-5">
//       <img
//         loading="lazy"
//         srcSet={Herobg}
//         className="object-cover absolute inset-0 w-full h-full "
//         style={{ zIndex: -1 }} // Ensure the image is behind the overlay
//       />
//       <div className="absolute inset-0 bg-white opacity-50"></div>
//       <div className="relative flex flex-col items-center mt-[-200px] max-w-full w-[1148px] max-md:mt-10 text-center">
//         <div className="flex flex-col items-center justify-center space-y-6">
//           <h1 className="font-Jakarta text-[#01498D] font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-wide leading-snug">
//             UNLEASHING THE POTENTIAL OF AFRICAN TALENT TO TRANSFORM YOUR
//             BUSINESS!
//           </h1>
//           <h2 className="font-Jakarta text-black font-bold mt-6 text-2xl sm:text-3xl lg:text-4xl tracking-wide">
//             GLOBAL EXPERTISE. LOW-COST OPERATIONS. DIVERSITY.
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import Herobg from "../assets/Herobg.png";

const Hero = () => {
  return (
    <div className="relative overflow-hidden flex flex-col justify-center items-center px-4 py-16 text-white min-h-screen">
      {/* Background Image */}
      <img
        loading="lazy"
        src={Herobg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-50 z-[-1]"></div>
      {/* Content */}
      <div className="relative flex flex-col items-center max-w-[1208px] w-full text-center">
        {/* First Line of Text */}
        <div className="font-Jakarta text-[#01498D] uppercase font-extrabold text-3xl sm:text-3xl lg:text-5xl leading-tight">
          Unleashing the potential of African talent
        </div>
        {/* Second Line of Text */}
        <div className="font-Jakarta text-[#01498D] uppercase font-extrabold  pt-3 text-3xl sm:text-3xl lg:text-5xl leading-tight">
          to transform your business!
        </div>
        {/* Subheading */}
        <h2 className="font-Jakarta text-black font-bold text-xl sm:text-2xl lg:text-3xl mt-6 pt-4">
          GLOBAL EXPERTISE. LOW-COST OPERATIONS. DIVERSITY.
        </h2>
      </div>
    </div>
  );
};

export default Hero;
