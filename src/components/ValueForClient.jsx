import WhatWeDoBg from "../assets/Whatwedobg.png";
import costIcon from "../assets/cost.png";
import diversityIcon from "../assets/diversity.png";
import GlobalIcon from "../assets/Global.png";

export const ValueForClient = () => {
  return (
    <section className="relative overflow-hidden flex justify-center items-center px-16 py-20 w-full max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        srcSet={WhatWeDoBg}
        className="object-cover absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }}
        alt="Background"
      />

      <div className="flex flex-col mt-8 mb-11 w-full max-w-[1550px] max-md:mb-10 max-md:max-w-full">
        <header className="self-center text-6xl font-bold tracking-widest text-center text-tertiary max-md:max-w-full max-md:text-4xl">
          <h2>The value for our clients</h2>
        </header>
        <div className="mt-20 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <article className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center self-stretch max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col px-10 py-9 bg-white rounded-xl border border-solid border-neutral-300 drop-shadow-lg shadow-black max-md:px-5 max-md:max-w-full">
                  <div className="flex justify-center mb-4">
                    <img
                      src={GlobalIcon}
                      alt="cost Icon"
                      className="w-24 h-24"
                    />
                  </div>
                  <h3 className="self-center text-4xl font-bold text-center text-tertiary">
                    Global expertise
                  </h3>
                  <p className="mt-12 text-xl leading-10 text-neutral-600 max-md:mt-10">
                    We combine the global expertise of our seasoned executives
                    on board from India and the U.S. with an African talent pool
                    to offer exceptional services, blending global knowledge
                    with local insights for maximum impact.
                  </p>
                </div>
              </div>
            </article>
            <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center self-stretch max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col px-9 pt-10 pb-20 bg-white rounded-xl border border-solid drop-shadow-lg shadow-black  border-neutral-300 max-md:px-5 max-md:max-w-full">
                  <div className="flex justify-center mb-4">
                    <img src={costIcon} alt="cost Icon" className="w-24 h-24" />
                  </div>
                  <h3 className="text-3xl font-bold text-center text-tertiary">
                    Cost effective operations
                  </h3>
                  <p className="mt-14 mb-10 text-xl leading-10 text-neutral-600 max-md:my-10">
                    Our every activity is strategically designed to prioritize
                    cost savings, ensuring optimal results for our clients.
                  </p>
                </div>
              </div>
            </article>
            <article className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center self-stretch max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col px-10 pt-10 pb-20 bg-white rounded-xl border border-solid drop-shadow-lg shadow-black border-neutral-300 max-md:px-5 max-md:max-w-full">
                  <div className="flex justify-center mb-4">
                    <img
                      src={diversityIcon}
                      alt="cost Icon"
                      className="w-24 h-24"
                    />
                  </div>
                  <h3 className="self-center text-4xl font-bold text-center text-tertiary">
                    Diversity
                  </h3>
                  <p className="mt-12 mb-2.5 text-xl leading-10 text-neutral-600 max-md:mt-10">
                    NextBẹwẹ guarantees a well-rounded mix of demographics,
                    skills, and backgrounds, fostering seamless business
                    operations.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueForClient;
