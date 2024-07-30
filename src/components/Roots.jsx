import WhatWeDoBg from "../assets/Whatwedobg.png";

const Roots = () => {
  return (
    <div className="relative z-10 self-center px-5 py-10 w-full max-w-[1656px] max-md:max-w-full">
      <img
        loading="lazy"
        srcSet={WhatWeDoBg}
        className="object-cover absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }}
        alt="Background"
      />

      <div className="relative flex flex-wrap justify-center gap-5 max-md:flex-col">
        <section className="flex flex-col w-[30%] max-md:w-full">
          <div className="flex flex-col grow p-11 w-full bg-white rounded-xl border border-solid border-neutral-200 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <h2 className="self-center text-5xl font-medium text-center text-sky-800">
              Our roots
            </h2>
            <ul className="mt-11 text-xl leading-10 text-neutral-600 max-md:mt-10 max-md:max-w-full list-inside list-disc">
              <li>
                NextBẹwẹ was founded in 2021 by a team of visionary
                entrepreneurs who identified the untapped potential of the
                African talent pool.
              </li>
              <li>
                Driven by a passion for innovation and commitment to excellence,
                our founders set out to design a platform that would connect
                businesses worldwide with the best minds in these regions.
              </li>
              <li>
                This enables the businesses to achieve their corporate goals
                without breaking the bank.
              </li>
            </ul>
          </div>
        </section>
        <section className="flex flex-col w-[30%] max-md:w-full">
          <div className="flex flex-col grow p-11 w-full bg-white rounded-xl border border-solid border-neutral-200 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <h2 className="self-center text-5xl font-medium text-center text-sky-800">
              Our approach
            </h2>
            <ul className="mt-11 text-xl leading-10 text-neutral-600 max-md:mt-10 max-md:max-w-full list-inside list-disc">
              <li>
                At NextBẹwẹ, we take a holistic and client-centric approach to
                staffing, offshore development, and managed services.
              </li>
              <li>
                Our process begins with understanding every fiber of your
                business to curate tailored solutions that align with your
                objectives.
              </li>
              <li>
                We leverage cutting-edge technologies, best practices, and a
                global talent pool to deliver exceptional value to you.
              </li>
            </ul>
          </div>
        </section>
        <section className="flex flex-col w-[30%] max-md:w-full">
          <div className="flex flex-col grow p-11 w-full bg-white rounded-xl border border-solid border-neutral-200 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <h2 className="text-5xl font-medium text-center text-sky-800 max-md:max-w-full">
              Our global presence
            </h2>
            <ul className="mt-11 text-xl leading-10 text-neutral-600 max-md:mt-10 max-md:max-w-full list-inside list-disc">
              <li>
                Our global presence spans India, the U.S., Nigeria, Kenya, and
                Europe, with operational focus centered on India, Nigeria, and
                Kenya.
              </li>
              <li>
                We tap into the rich talent pools of these regions to provide
                our clients with unmatched and personalized solutions that
                transcend geographical boundaries.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Roots;
