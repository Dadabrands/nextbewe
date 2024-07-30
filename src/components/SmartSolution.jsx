import WhatWeDoBg from "../assets/Whatwedobg.png";

const SmartSolution = () => {
  return (
    <section
      className="relative flex justify-center items-center px-16 py-20 w-full max-md:px-5 max-md:max-w-full bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${WhatWeDoBg})` }}
    >
      <div className="flex flex-col pr-5 pb-3 mt-10 mb-8 w-full max-w-[1586px] max-md:pr-5 max-md:max-w-full bg-white bg-opacity-80">
        <h2 className=" text-5xl  self-center font-bold text-tertiary max-md:max-w-full max-md:text-4xl">
          NextBẹwẹ&apos;s smart offshoring solution
        </h2>
        <div className="mt-20 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center self-stretch px-8 py-5 w-full bg-white rounded-3xl border border-sky-800 border-solid shadow-sm max-md:px-5 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f68802ce5456b8bc82917f0883b084101a4041d1af33cfd00110ce64b3b10c6?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
                  className="w-20 aspect-square"
                  alt="Quality assurance"
                />
                <h3 className="mt-4 text-3xl font-bold text-center text-sky-800">
                  Quality assurance
                </h3>
                <p className="mt-4 text-lg tracking-wide leading-6 text-gray-800 overflow-hidden text-ellipsis">
                  We are ISO 27001 certification for compliance with established
                  industry standards and best practices. Our commitment to
                  continuous improvement ensures that we consistently enhance
                  quality over time.
                </p>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center self-stretch px-8 py-5 w-full whitespace-nowrap bg-white rounded-3xl border border-sky-800 border-solid shadow-sm max-md:px-5 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/336add608132205ea0bda9ed055b93586b1163d488b4ee99538e116df743635f?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
                  className="w-20 aspect-square"
                  alt="Scalable"
                />
                <h3 className="mt-4 text-3xl font-bold text-center text-sky-800">
                  Scalable
                </h3>
                <p className="mt-4 text-lg tracking-wide leading-6 text-gray-800 overflow-hidden text-ellipsis">
                  Expand your team effortlessly with our instant scalability
                  options for offshore development.
                </p>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center self-stretch px-8 py-5 w-full bg-white rounded-3xl border border-sky-800 border-solid shadow-sm max-md:px-5 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/962660d24e4f44a6c9ad8b36ee1a4e92df4627fa59d4f8b3d946c17c539cbd12?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
                  className="w-20 aspect-square"
                  alt="Time zone flexible"
                />
                <h3 className="mt-4 text-3xl font-bold text-center text-sky-800">
                  Time zone flexible
                </h3>
                <p className="mt-4 text-lg tracking-wide leading-6 text-gray-800 overflow-hidden text-ellipsis">
                  NextBẹwẹ’s Africa-based teams align their working hours with
                  clients’ time zones, enabling seamless collaboration and
                  efficient communication.
                </p>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center self-stretch px-8 py-5 w-full bg-white rounded-3xl border border-sky-800 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bb681a0a47b6db388f329adb7cdbca4245eff42db905310df51d7b8f6b2eea5?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
                  className="w-20 aspect-square"
                  alt="Cost effective"
                />
                <h3 className="mt-4 text-3xl font-bold text-center text-sky-800">
                  Cost effective
                </h3>
                <p className="mt-4 text-lg tracking-wide leading-6 text-gray-800 overflow-hidden text-ellipsis">
                  NextBẹwẹ’s offshore model in Africa offers significant cost
                  savings of up to 50% compared to traditional outsourcing
                  destinations, without compromising quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartSolution;
