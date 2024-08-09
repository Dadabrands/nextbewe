import Footer2 from "../components/Footer2";
import Navbar from "../components/Navbar";
import { MoveRight } from "lucide-react";
import CarouselImg2 from "../assets/2.png";
import WhatWeDoBg from "../assets/Whatwedobg.png";

const Careers = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col bg-white">
        <div
          className="relative flex flex-col justify-center items-center px-16 py-20 w-full max-md:px-5 max-md:py-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${WhatWeDoBg})` }}
        >
          <div className="flex flex-col mt-24 mb-20 max-w-full w-[1266px] max-md:my-10">
            <h1 className="self-center text-6xl font-bold text-center text-sky-800 leading-[69.72px] max-md:max-w-full max-md:text-4xl">
              Grow with NextBẹwẹ
            </h1>
            <p className="mt-24 text-3xl text-center leading-[60px] text-neutral-600 max-md:mt-10 max-md:max-w-full">
              Explore your next career opportunity at NextBẹwẹ, where an
              innovative environment drives our progress. We empower our team
              members to bring new ideas and make impactful decisions. By
              fostering a culture where individuals are encouraged to think and
              act as leaders, we create a dynamic and innovative environment.
            </p>
          </div>
        </div>
        {/* Centered Image Section */}
        <div className="flex justify-center items-center my-10">
          <img
            src={CarouselImg2}
            alt="Carousel Image"
            className="max-w-full rounded-lg"
          />
        </div>

        <div className="flex justify-center items-center px-16 py-20 w-full bg-blue-950 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col mb-4 w-full max-w-[1590px] max-md:max-w-full">
            <div className="self-center text-6xl font-bold text-center text-white leading-[69.76px] max-md:max-w-full max-md:text-4xl">
              Employee benefits
            </div>
            <div className="flex flex-col flex-wrap justify-center content-end mt-20 max-md:mt-10 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-start py-5 pl-5 text-3xl font-bold text-white rounded-xl border-2 border-green-500 border-solid shadow-sm leading-[50px] max-md:mt-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef9116cdac2cd08bce145a55444c5528805d24fd7e2de73a7e0a343585905333?"
                        className="w-20 aspect-square"
                      />
                      <div className="self-stretch mt-4">
                        Empowered growth opportunity.
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/003528d049986ca71eecaf87e78dffed76648f23ef58a48133d168ac9811b398?"
                        className="mt-4 max-w-full border-2 border-green-500 border-solid aspect-[100] stroke-[2px] stroke-green-500 w-[253px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-start py-5 pl-5 text-3xl font-bold text-white rounded-xl border-2 border-green-500 border-solid shadow-sm leading-[50px] max-md:mt-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/43b4fef3168e2914b6e0152f6e0caafd84808ecc6120828f613bc89ce0b45ed9?"
                        className="w-20 aspect-square"
                      />
                      <div className="self-stretch mt-4">
                        Diverse and inclusive culture.
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/003528d049986ca71eecaf87e78dffed76648f23ef58a48133d168ac9811b398?"
                        className="mt-4 max-w-full border-2 border-green-500 border-solid aspect-[100] stroke-[2px] stroke-green-500 w-[253px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-start py-5 pl-5 text-3xl font-bold text-white rounded-xl border-2 border-green-500 border-solid shadow-sm leading-[50px] max-md:mt-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7945c091a1a590ddaf750561cfeefcf807b63d7cd1a17caf99085fc1ff3a1547?"
                        className="w-20 aspect-square"
                      />
                      <div className="self-stretch mt-4">
                        Flexible work options.
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/003528d049986ca71eecaf87e78dffed76648f23ef58a48133d168ac9811b398?"
                        className="mt-4 max-w-full border-2 border-green-500 border-solid aspect-[100] stroke-[2px] stroke-green-500 w-[253px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-center mt-16 max-w-full w-[982px] max-md:mt-10">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-start py-5 pl-5 text-3xl font-bold text-white rounded-xl border-2 border-green-500 border-solid shadow-sm leading-[50px] max-md:mt-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a0114a9223b3806466671340e38ef661370fe956a968b405a85050b8e7bd476?"
                        className="w-20 aspect-square"
                      />
                      <div className="self-stretch mt-4">Competitive pay.</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/003528d049986ca71eecaf87e78dffed76648f23ef58a48133d168ac9811b398?"
                        className="mt-4 max-w-full border-2 border-green-500 border-solid aspect-[100] stroke-[2px] stroke-green-500 w-[253px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-start py-5 pl-5 text-3xl font-bold text-white rounded-xl border-2 border-green-500 border-solid shadow-sm leading-[50px] max-md:mt-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/652922ec96be7e485e3f0d1f6f323798877d3e624c60e88f6aa7c0b0cc8b8f34?"
                        className="w-20 aspect-square"
                      />
                      <div className="self-stretch mt-4">
                        Health and wellness initiatives.
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/003528d049986ca71eecaf87e78dffed76648f23ef58a48133d168ac9811b398?"
                        className="mt-4 max-w-full border-2 border-green-500 border-solid aspect-[100] stroke-[2px] stroke-green-500 w-[253px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center self-center p-20 mt-20 mb-20 max-w-full text-center text-sky-800 bg-sky-800 bg-opacity-10 rounded-[70px] w-[1199px] max-md:px-5 max-md:mt-10">
          <div className="text-6xl font-bold max-md:max-w-full max-md:text-4xl">
            Wanna join the Team?
          </div>

          <div className="flex justify-center px-4 py-7 mt-8 max-w-full text-2xl tracking-wide rounded-2xl bg-sky-800 bg-opacity-10 w-[300px] max-md:px-3">
            <a href="contact" className="flex gap-3 items-center flex-wrap">
              <span>Contact Us</span>
              <MoveRight />
            </a>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default Careers;
