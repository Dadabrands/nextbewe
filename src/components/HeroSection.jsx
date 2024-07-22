import Herobg from "../assets/Herobg.jpg";

const HeroSection = () => {
  return (
    // <div className="flex flex-col items-center mt-6 lg:mt-20" >
    <div
      className="flex flex-col items-center justify-center mt-6 lg:mt-20"
      style={{
        backgroundImage: `url(${Herobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: screen,
      }}
    >
      {/* <h1 className=" font-Jakarta font-bold text-4xl sm:text-6xl lg:text-4xl text-center tracking-wide">
        Take Control of Your Healthcare Costs & Claims:
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          Ariz Makes Nigerian Healthcare Simpler.
        </span>
      </h1> */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-Jakarta font-bold text-4xl sm:text-6xl lg:text-4xl text-center tracking-wide">
          Take Control of Your Healthcare Costs & Claims:
        </h1>
        <h2 className="font-Jakarta font-bold text-4xl sm:text-6xl lg:text-4xl text-center tracking-wide">
          Ariz Makes Nigerian Healthcare Simpler.
        </h2>
      </div>

      <p className="mt-4 text-lg text-center text-neutral-500 max-w-4xl">
        Ariz is a revolutionary platform designed to empower Nigerians with a
        simpler and more transparent healthcare experience. We believe everyone
        deserves access to affordable, high quality care, and Ariz puts you in
        control.
      </p>
      <div className="flex justify-center my-10">
        <a href="#" className="bg-primary text-white py-3 px-4 mx-3 rounded-md">
          Join Our Waitlist
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
