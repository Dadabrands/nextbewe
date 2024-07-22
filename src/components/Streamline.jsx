import Dashboard from "../assets/Dashboard.png";

const Streamline = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <div className="mt-20">
      <div className="flex flex-wrap justify-center items-center">
        {" "}
        {/* Add 'items-center' class */}
        <div className="p-4 w-full lg:w-1/2">
          <img src={Dashboard} alt="Coding" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          <h1 className="mt-1 mb-2 text-xl text-center lg:text-left">
            {" "}
            {/* Add 'text-center lg:text-left' classes */}
            Streamline Claims & Boost Revenue with Ariz
          </h1>
          <p className="text-md text-neutral-500 text-center lg:text-left">
            Our Solution !
          </p>{" "}
          {/* Add 'text-center lg:text-left' classes */}
        </div>
      </div>
    </div>
    </div>
  
  );
};

export default Streamline;
