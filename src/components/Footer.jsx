import Earth from "../assets/EarthMap.svg";

const Footer = () => {
  return (
    <div className="relative flex flex-col w-full bg-blue-950 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="relative flex-auto max-md:max-w-full">
        <div className="relative w-full h-96">
          <img
            src={Earth}
            alt="Earth"
            className="absolute inset-0 w-full h-full scale-115 object-cover overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
