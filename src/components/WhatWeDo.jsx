import WhatWeDoBg from "../assets/Whatwedobg.png";
import TeamIcon from "../assets/TeamIcon.png";
import OperationsIcon from "../assets/OperationsIcon.png";
import LimitIcon from "../assets/LimitIcon.png";

const WhatWeDo = () => {
  return (
    <section className="relative overflow-hidden flex justify-center items-center px-16 py-20 w-full max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        srcSet={WhatWeDoBg}
        className="object-cover absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }}
        alt="Background"
      />
      <div className="flex flex-col mt-8 mb-8 w-full max-w-[1550px] max-md:mt-10 max-md:max-w-full">
        <header className="self-center text-6xl tracking-widest max-md:max-w-full max-md:text-4xl">
          <h1 className="font-bold text-tertiary">What we do</h1>
        </header>
        <div className="mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-10 max-md:flex-col max-md:gap-10">
            <article className="flex flex-col w-[32%] h-auto max-md:w-full max-md:h-auto max-md:ml-0">
              <div className="flex flex-col grow justify-center self-stretch max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col px-8 py-10 bg-white rounded-xl border border-solid drop-shadow-lg shadow-black border-neutral-300 max-md:px-5 max-md:max-w-full">
                  <div className="flex justify-center">
                    <img
                      src={TeamIcon}
                      alt="Team Icon"
                      className="shrink-0 w-20 aspect-square items-center"
                    />
                  </div>
                  <h3 className="self-center text-4xl font-bold text-center text-sky-800 mt-4 max-md:text-2xl">
                    We build your team
                  </h3>
                  <ul className="mt-8 text-xl leading-8 text-neutral-600 list-disc list-inside max-md:mt-10 max-md:text-base">
                    <li>
                      NextBẹwẹ can help you build customized remote teams.
                    </li>
                    <li>
                      We take care of sourcing, recruitment, onboarding, and
                      follow-up later to ensure your goals are met on time.
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="flex flex-col w-[32%] h-auto max-md:w-full max-md:h-auto max-md:ml-0">
              <div className="flex flex-col grow justify-center self-stretch max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col px-8 py-10 bg-white rounded-xl border border-solid drop-shadow-lg shadow-black border-neutral-300 max-md:px-5 max-md:max-w-full">
                  <div className="flex justify-center">
                    <img
                      src={OperationsIcon}
                      alt="Operations Icon"
                      className="shrink-0 w-20 aspect-square items-center"
                    />
                  </div>
                  <h3 className="self-center text-4xl font-bold text-center text-sky-800 mt-4 max-md:text-2xl">
                    We run your operations
                  </h3>
                  <ul className="mt-8 text-xl leading-8 text-neutral-600 list-disc list-inside max-md:mt-10 max-md:text-base">
                    <li>We handle all your operational heavy lifting</li>
                    <li>
                      You can have more time to focus on developing new products
                      and services.
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="flex flex-col w-[32%] h-auto max-md:w-full max-md:h-auto max-md:ml-0">
              <div className="flex flex-col grow justify-center self-stretch max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col px-8 py-10 bg-white rounded-xl border border-solid drop-shadow-lg shadow-black border-neutral-300 max-md:px-5 max-md:max-w-full">
                  <div className="flex justify-center">
                    <img
                      src={LimitIcon}
                      alt="Limit Icon"
                      className="shrink-0 w-20 aspect-square items-center"
                    />
                  </div>
                  <h3 className="self-center text-4xl font-bold text-center text-sky-800 mt-4 max-md:text-2xl">
                    You scale without limits
                  </h3>
                  <ul className="mt-8 text-xl leading-8 text-neutral-600 list-disc list-inside max-md:mt-10 max-md:text-base">
                    <li>
                      Quickly scale your team up or down according to your
                      business needs.
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
