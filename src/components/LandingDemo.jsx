import * as React from "react";

function MyComponent() {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex overflow-hidden relative flex-col items-center px-5 pb-20 w-full text-8xl font-bold text-center text-sky-800 min-h-[979px] max-md:max-w-full max-md:text-4xl">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/80adc2361ec60a66ee4594c066f61ff6272af99fe1b05f308ef4eccbf5b0e5ec?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/80adc2361ec60a66ee4594c066f61ff6272af99fe1b05f308ef4eccbf5b0e5ec?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/80adc2361ec60a66ee4594c066f61ff6272af99fe1b05f308ef4eccbf5b0e5ec?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/80adc2361ec60a66ee4594c066f61ff6272af99fe1b05f308ef4eccbf5b0e5ec?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/80adc2361ec60a66ee4594c066f61ff6272af99fe1b05f308ef4eccbf5b0e5ec?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/80adc2361ec60a66ee4594c066f61ff6272af99fe1b05f308ef4eccbf5b0e5ec?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/80adc2361ec60a66ee4594c066f61ff6272af99fe1b05f308ef4eccbf5b0e5ec?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/80adc2361ec60a66ee4594c066f61ff6272af99fe1b05f308ef4eccbf5b0e5ec?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch px-16 py-7 w-full text-xl text-white fill-slate-900 min-h-[110px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cae5e64dc1cd9dd223b8ec4444768a5c29fbf209ad3115ba075281e7dca8f264?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative gap-5 justify-between w-full max-w-[1307px] max-md:flex-wrap max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c02afcc72d352048b6914df349fa8f6ee815ebdf33374874b1de87f046d72be4?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c02afcc72d352048b6914df349fa8f6ee815ebdf33374874b1de87f046d72be4?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c02afcc72d352048b6914df349fa8f6ee815ebdf33374874b1de87f046d72be4?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c02afcc72d352048b6914df349fa8f6ee815ebdf33374874b1de87f046d72be4?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c02afcc72d352048b6914df349fa8f6ee815ebdf33374874b1de87f046d72be4?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c02afcc72d352048b6914df349fa8f6ee815ebdf33374874b1de87f046d72be4?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c02afcc72d352048b6914df349fa8f6ee815ebdf33374874b1de87f046d72be4?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c02afcc72d352048b6914df349fa8f6ee815ebdf33374874b1de87f046d72be4?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
              className="shrink-0 max-w-full aspect-[5] w-[284px]"
            />
            <div className="flex gap-5 my-auto max-md:flex-wrap">
              <div className="flex gap-5 justify-center max-md:flex-wrap">
                <div>About Us </div>
                <div>Services</div>
                <div>Careers</div>
                <div>FAQ</div>
                <div>Blog</div>
                <div>Contact Us</div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ed3f8aa60e1254cb0980e5f5646e15d688012211e66e4f5cfded62538b3f39f?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
                className="shrink-0 my-auto aspect-square w-[21px]"
              />
            </div>
          </div>
        </div>
        <div className="relative mt-72 uppercase max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Building teams that excel.
        </div>
        <div className="relative mt-5 mb-40 uppercase max-md:mb-10 max-md:max-w-full max-md:text-4xl">
          Delivering prices that fit.
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-20 w-full bg-slate-200 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-20 mb-8 w-full max-w-[1550px] max-md:mt-10 max-md:max-w-full">
          <div className="self-center text-8xl tracking-widest text-sky-800 lowercase max-md:max-w-full max-md:text-4xl">
            <span className="font-bold uppercase">W</span>
            <span className="font-bold">hat we do</span>
          </div>
          <div className="mt-32 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center self-stretch max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col px-10 py-10 bg-white rounded-xl border border-solid shadow-sm border-neutral-300 max-md:px-5 max-md:max-w-full">
                    <div className="self-center text-4xl font-bold text-center text-sky-800">
                      We build your team
                    </div>
                    <div className="mt-12 text-xl leading-10 text-neutral-600 max-md:mt-10">
                      NextBẹwẹ can help you build high-quality remote teams
                      within a short period. We take care of sourcing,
                      recruitment, onboarding, and follow-up later to ensure
                      your goals are met on time.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center self-stretch max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col px-8 pt-10 pb-20 bg-white rounded-xl border border-solid shadow-sm border-neutral-300 max-md:px-5 max-md:max-w-full">
                    <div className="text-4xl font-bold text-center text-sky-800">
                      We run your operations
                    </div>
                    <div className="mt-14 mb-3.5 text-xl leading-10 text-neutral-600 max-md:mt-10">
                      We handle all your operational heavy lifting so you can
                      have more time to focus on developing new products and
                      services.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center self-stretch max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col px-5 pt-10 pb-20 bg-white rounded-xl border border-solid shadow-sm border-neutral-300 max-md:max-w-full">
                    <div className="text-4xl font-bold text-center text-sky-800">
                      You scale without limits
                    </div>
                    <div className="self-start mt-14 mb-20 ml-6 text-xl leading-10 text-neutral-600 max-md:my-10 max-md:ml-2.5">
                      Quickly scale your team up or down according to your
                      business needs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden justify-center items-center px-16 py-20 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-10 w-full max-w-[1339px] max-md:max-w-full">
          <div className="self-center ml-24 text-8xl font-bold leading-6 text-blue-800 max-md:max-w-full max-md:text-4xl">
            Why Africa?
          </div>
          <div className="mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b6ae2ffa1bfdd5450612f340618fe70523d512ba96e38ca611992029e2976ce1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ae2ffa1bfdd5450612f340618fe70523d512ba96e38ca611992029e2976ce1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ae2ffa1bfdd5450612f340618fe70523d512ba96e38ca611992029e2976ce1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ae2ffa1bfdd5450612f340618fe70523d512ba96e38ca611992029e2976ce1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ae2ffa1bfdd5450612f340618fe70523d512ba96e38ca611992029e2976ce1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ae2ffa1bfdd5450612f340618fe70523d512ba96e38ca611992029e2976ce1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ae2ffa1bfdd5450612f340618fe70523d512ba96e38ca611992029e2976ce1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ae2ffa1bfdd5450612f340618fe70523d512ba96e38ca611992029e2976ce1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
                  className="grow w-full aspect-[0.89] max-md:mt-10 max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto text-xl leading-7 text-black max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 self-start">
                    <div className="shrink-0 my-auto w-3.5 h-3.5 bg-sky-800 rounded-full" />
                    <div>Africa is the second largest continent.</div>
                  </div>
                  <div className="flex gap-5 mt-10 max-md:flex-wrap">
                    <div className="shrink-0 my-auto w-3.5 h-3.5 bg-sky-800 rounded-full" />
                    <div className="max-md:max-w-full">
                      Access to French talent in neighbouring countries.
                    </div>
                  </div>
                  <div className="flex gap-5 mt-10 max-md:flex-wrap">
                    <div className="shrink-0 my-auto w-3.5 h-3.5 bg-sky-800 rounded-full" />
                    <div className="max-md:max-w-full">
                      Nigeria is one of the largest English-speaking countries
                      in the world.
                    </div>
                  </div>
                  <div className="flex gap-5 self-start mt-10">
                    <div className="shrink-0 my-auto w-3.5 h-3.5 bg-sky-800 rounded-full" />
                    <div>Stable Government.</div>
                  </div>
                  <div className="flex gap-5 mt-10 max-md:flex-wrap">
                    <div className="shrink-0 my-auto w-3.5 h-3.5 bg-sky-800 rounded-full" />
                    <div className="max-md:max-w-full">
                      Up to 50% lower costs compared to India and the
                      Philippines.
                    </div>
                  </div>
                  <div className="flex gap-5 mt-10 max-md:flex-wrap">
                    <div className="shrink-0 my-auto w-3.5 h-3.5 bg-sky-800 rounded-full" />
                    <div className="max-md:max-w-full">
                      Africa is a hub for technology, fashion, and
                      entertainment.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-20 w-full bg-slate-200 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-9 mb-11 w-full max-w-[1550px] max-md:mb-10 max-md:max-w-full">
          <div className="self-center text-8xl font-bold tracking-widest text-center text-sky-800 max-md:max-w-full max-md:text-4xl">
            The value for our clients
          </div>
          <div className="mt-40 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center self-stretch max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col px-9 pt-10 pb-20 bg-white rounded-xl border border-solid shadow-sm border-neutral-300 max-md:px-5 max-md:max-w-full">
                    <div className="text-3xl font-bold text-center text-sky-800">
                      Cost effective operations
                    </div>
                    <div className="mt-14 mb-10 text-xl leading-10 text-neutral-600 max-md:my-10">
                      Our every activity is strategically designed to prioritize
                      cost savings, ensuring optimal results for our clients.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center self-stretch max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col px-10 py-9 bg-white rounded-xl border border-solid shadow-sm border-neutral-300 max-md:px-5 max-md:max-w-full">
                    <div className="self-center text-4xl font-bold text-center text-sky-800">
                      Global expertise
                    </div>
                    <div className="mt-12 text-xl leading-10 text-neutral-600 max-md:mt-10">
                      We combine the global expertise of our seasoned executives
                      on board from India and the U.S. with an African talent
                      pool to offer exceptional services, blending global
                      knowledge with local insights for maximum impact.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center self-stretch max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col px-10 pt-10 pb-20 bg-white rounded-xl border border-solid shadow-sm border-neutral-300 max-md:px-5 max-md:max-w-full">
                    <div className="self-center text-4xl font-bold text-center text-sky-800">
                      Diversity
                    </div>
                    <div className="mt-12 mb-2.5 text-xl leading-10 text-neutral-600 max-md:mt-10">
                      NextBẹwẹ guarantees a well-rounded mix of demographics,
                      skills, and backgrounds, fostering seamless business
                      operations.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col pr-5 pb-3 mt-10 mb-8 w-full bg-white max-w-[1586px] max-md:pr-5 max-md:max-w-full">
          <div className="ml-5 text-8xl font-bold tracking-widest text-sky-800 max-md:max-w-full max-md:text-4xl">
            NextBẹwẹ's smart offshoring solution
          </div>
          <div className="mt-32 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center self-stretch px-8 py-5 w-full bg-white rounded-3xl border border-sky-800 border-solid shadow-sm max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f68802ce5456b8bc82917f0883b084101a4041d1af33cfd00110ce64b3b10c6?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
                    className="w-20 aspect-square"
                  />
                  <div className="mt-4 text-3xl font-bold text-center text-sky-800">
                    Quality assurance
                  </div>
                  <div className="mt-4 text-lg tracking-wide leading-6 text-gray-800 whitespace-nowrap text-ellipsis">
                    We are ISO 27001 certification for compliance with
                    established industry standards and best practices. Our
                    commitment to continuous improvement ensures that we
                    consistently enhance quality over time.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center self-stretch px-8 py-5 w-full whitespace-nowrap bg-white rounded-3xl border border-sky-800 border-solid shadow-sm max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/336add608132205ea0bda9ed055b93586b1163d488b4ee99538e116df743635f?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
                    className="w-20 aspect-square"
                  />
                  <div className="mt-4 text-3xl font-bold text-center text-sky-800">
                    Scalable
                  </div>
                  <div className="mt-4 text-lg tracking-wide leading-6 text-gray-800 text-ellipsis">
                    Expand your team effortlessly with our instant scalability
                    options for offshore development.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center self-stretch px-8 py-5 w-full bg-white rounded-3xl border border-sky-800 border-solid shadow-sm max-md:px-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/962660d24e4f44a6c9ad8b36ee1a4e92df4627fa59d4f8b3d946c17c539cbd12?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
                    className="w-20 aspect-square"
                  />
                  <div className="mt-4 text-3xl font-bold text-center text-sky-800">
                    Time zone flexible
                  </div>
                  <div className="mt-4 text-lg tracking-wide leading-6 text-gray-800 whitespace-nowrap text-ellipsis">
                    NextBẹwẹ’s Africa-based teams align their working hours with
                    clients’ time zones, enabling seamless collaboration and
                    efficientcommunication
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center self-stretch px-8 py-5 w-full bg-white rounded-3xl border border-sky-800 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bb681a0a47b6db388f329adb7cdbca4245eff42db905310df51d7b8f6b2eea5?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
                    className="w-20 aspect-square"
                  />
                  <div className="mt-4 text-3xl font-bold text-center text-sky-800">
                    Cost effective
                  </div>
                  <div className="mt-4 text-lg tracking-wide leading-6 text-gray-800 text-ellipsis">
                    NextBẹwẹ’s offshore model in Africa offers significant cost
                    savings of up to 50% compared to traditional outsourcing
                    destinations, without compromising quality.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-20 w-full bg-slate-200 max-md:px-5 max-md:max-w-full">
        <div className="mt-2 text-8xl font-bold tracking-widest text-sky-800 max-md:max-w-full max-md:text-4xl">
          Why NextBẹwẹ
        </div>
        <div className="flex gap-5 self-end mt-14 mr-96 max-w-full text-2xl tracking-wide text-gray-800 whitespace-nowrap w-[337px] max-md:mt-10 max-md:mr-2.5">
          <div>Others</div>
          <div className="flex-auto">NextBẹwẹ</div>
        </div>
        <div className="flex gap-5 py-5 pr-20 pl-8 mt-5 max-w-full bg-white w-[1202px] max-md:flex-wrap max-md:px-5">
          <div className="flex-auto my-auto text-xl tracking-wide text-sky-800">
            Cost savings ⓘ
          </div>
          <div className="flex gap-5 justify-between">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b17f6d1f2aba5f12fe85567f34c2f9a47a57182d93b4132d424cfa0d97ae60e?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
              className="shrink-0 w-9 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0375cf79750aa3baad5be208f6f92b3499f63b28800c7c0348f851ab4790d25d?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
              className="shrink-0 w-9 aspect-square"
            />
          </div>
        </div>
        <div className="flex gap-5 py-5 pr-20 pl-8 max-w-full bg-zinc-100 w-[1202px] max-md:flex-wrap max-md:px-5">
          <div className="flex-auto my-auto text-xl tracking-wide text-sky-800">
            Global expertise ⓘ
          </div>
          <div className="flex gap-5 justify-between">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d959f11ecfbb1e5032db01163bf7df7943f52b39ba5a70a5c47f37c7f0aadc7b?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
              className="shrink-0 w-9 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c51e89abcfcd0310ac513f93840017fe0bddf9edf36a34f3210e9f98eadbe0b?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
              className="shrink-0 w-9 aspect-square"
            />
          </div>
        </div>
        <div className="flex gap-5 py-5 pr-20 pl-8 max-w-full bg-white w-[1202px] max-md:flex-wrap max-md:px-5">
          <div className="flex-auto my-auto text-xl tracking-wide text-sky-800">
            ISO 27001 certified
          </div>
          <div className="flex gap-5 justify-between">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/404d55434eed35ea27f1c556b3c390ef38c7df6fa674df0b57e38515a8971ddc?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
              className="shrink-0 w-9 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d1fcd9d525b68c3693c3f5d968bf81d327c238ae16e959b5a1c6de0b71c24f0?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
              className="shrink-0 w-9 aspect-square"
            />
          </div>
        </div>
        <div className="flex gap-5 py-5 pr-20 pl-8 max-w-full bg-zinc-100 w-[1202px] max-md:flex-wrap max-md:px-5">
          <div className="flex-auto my-auto text-xl tracking-wide text-sky-800">
            Performance review
          </div>
          <div className="flex gap-5 justify-between">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4bf258b946efa9c051aed5491f96b56b5f0071da09408fb6d4206c5450629b1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
              className="shrink-0 w-9 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6df522e1cb5ecb27307451afddfcbb144ee59c424f40e421f61448baf30ad1ae?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
              className="shrink-0 w-9 aspect-square"
            />
          </div>
        </div>
        <div className="flex gap-5 py-5 pr-20 pl-8 max-w-full bg-white w-[1202px] max-md:flex-wrap max-md:px-5">
          <div className="flex-auto my-auto text-xl tracking-wide text-sky-800">
            Instant scalability
          </div>
          <div className="flex gap-5 justify-between">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9667aa772e5a53356ddc5366630798f1a70ef12a3cd0c89b279204a371642589?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
              className="shrink-0 w-9 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e98e88a4ab000cbc0ddf2bd2db7d2a144b9cf879fbb273d78bd60216d049133?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
              className="shrink-0 w-9 aspect-square"
            />
          </div>
        </div>
        <div className="flex gap-5 py-5 pr-20 pl-8 max-w-full bg-zinc-100 w-[1202px] max-md:flex-wrap max-md:px-5">
          <div className="flex-auto my-auto text-xl tracking-wide text-sky-800">
            Diverse talent pool
          </div>
          <div className="flex gap-5 justify-between">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/80882e70eb7dbbe46743cc5becb6103dabec8cb800cb348b8c7a28613e1094ce?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
              className="shrink-0 w-9 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0c7fe915c97149571ce200a075362767d604d702789bf7025c51bb225f682e7?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
              className="shrink-0 w-9 aspect-square"
            />
          </div>
        </div>
        <div className="flex gap-5 py-5 pr-20 pl-8 mb-1.5 max-w-full text-xl tracking-wide text-sky-800 bg-white w-[1202px] max-md:flex-wrap max-md:px-5">
          <div className="flex-auto my-auto">
            Time zone advantage (GMT+1 hr)
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e7e33dc623a02399eda779e68281b9af4f86403d908779e4c856f64c733dc52?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
            className="shrink-0 w-9 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/041e347acb7a511605af5f37420f91119ab2c500aea4befcb8ae0bed01a78703?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
            className="shrink-0 w-9 aspect-square"
          />
        </div>
      </div>
      <div className="self-center mt-24 text-8xl font-bold tracking-widest text-center text-sky-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Our Partner
      </div>
      <div className="flex gap-5 justify-between items-center self-center px-5 mt-28 w-full max-w-[1737px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd8f52e5cd355fa231045a92e5a74aab6c8ec26aaaa4fee06d1800095458ee61?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
          className="shrink-0 self-stretch my-auto max-w-full aspect-[5.26] w-[300px]"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3b34ca93ec8347b00ad1767a5ad48e7c1289f46bb44660d015c3d6e54722202e?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b34ca93ec8347b00ad1767a5ad48e7c1289f46bb44660d015c3d6e54722202e?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b34ca93ec8347b00ad1767a5ad48e7c1289f46bb44660d015c3d6e54722202e?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b34ca93ec8347b00ad1767a5ad48e7c1289f46bb44660d015c3d6e54722202e?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b34ca93ec8347b00ad1767a5ad48e7c1289f46bb44660d015c3d6e54722202e?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b34ca93ec8347b00ad1767a5ad48e7c1289f46bb44660d015c3d6e54722202e?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b34ca93ec8347b00ad1767a5ad48e7c1289f46bb44660d015c3d6e54722202e?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3b34ca93ec8347b00ad1767a5ad48e7c1289f46bb44660d015c3d6e54722202e?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
          className="shrink-0 self-stretch max-w-full mix-blend-multiply aspect-square w-[170px]"
        />
        <div className="flex gap-5 self-stretch my-auto font-medium text-blue-950">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/31e434e438fe15dc8a1316ff675c4c5d0f9d4c57c4d4494b7b891cfacbc415ab?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
            className="shrink-0 max-w-full aspect-[0.85] w-[109px]"
          />
          <div className="flex flex-col my-auto">
            <div className="text-5xl max-md:text-4xl">Hamlet</div>
            <div className="mt-4 text-sm">Your hyperlocal community!</div>
          </div>
        </div>
        <div className="flex gap-5 justify-between self-stretch my-auto max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0191981f601a8bcd9d6e303e40f63ca4d762e921ec26485ae5e902452dd48fa5?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0191981f601a8bcd9d6e303e40f63ca4d762e921ec26485ae5e902452dd48fa5?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0191981f601a8bcd9d6e303e40f63ca4d762e921ec26485ae5e902452dd48fa5?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0191981f601a8bcd9d6e303e40f63ca4d762e921ec26485ae5e902452dd48fa5?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0191981f601a8bcd9d6e303e40f63ca4d762e921ec26485ae5e902452dd48fa5?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0191981f601a8bcd9d6e303e40f63ca4d762e921ec26485ae5e902452dd48fa5?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0191981f601a8bcd9d6e303e40f63ca4d762e921ec26485ae5e902452dd48fa5?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0191981f601a8bcd9d6e303e40f63ca4d762e921ec26485ae5e902452dd48fa5?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
            className="my-auto w-60 aspect-[3.85]"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e725869f5d947023f014a1507025a02790d98ab590faf5e8c76b5a0711e7f1a3?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e725869f5d947023f014a1507025a02790d98ab590faf5e8c76b5a0711e7f1a3?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e725869f5d947023f014a1507025a02790d98ab590faf5e8c76b5a0711e7f1a3?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e725869f5d947023f014a1507025a02790d98ab590faf5e8c76b5a0711e7f1a3?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e725869f5d947023f014a1507025a02790d98ab590faf5e8c76b5a0711e7f1a3?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e725869f5d947023f014a1507025a02790d98ab590faf5e8c76b5a0711e7f1a3?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e725869f5d947023f014a1507025a02790d98ab590faf5e8c76b5a0711e7f1a3?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e725869f5d947023f014a1507025a02790d98ab590faf5e8c76b5a0711e7f1a3?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
            className="shrink-0 max-w-full aspect-[2.86] w-[215px]"
          />
        </div>
      </div>
      <div className="flex gap-5 px-9 py-4 mt-28 w-full bg-blue-950 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col my-auto">
          <div className="flex gap-2">
            <div className="text-2xl tracking-wide leading-8 text-white">
              Social Media
            </div>
            <div className="text-2xl tracking-wide leading-8 text-white">:</div>
            <div className="flex gap-5 justify-between self-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a50e1d40e0996aa2de7a45d58cf887172a8a2dc48a3d1b2748599886084da4a3?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
                className="shrink-0 w-8 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7387bac94559d397d112465ae0b4427b17e4497c680a9bcb2011f9846b5387c?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
                className="shrink-0 w-8 aspect-square"
              />
            </div>
          </div>
          <div className="mt-8 text-2xl tracking-wide leading-9 text-white">
            ISMS policy
          </div>
        </div>
        <div className="flex-auto max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
              <div className="mt-96 text-2xl tracking-wide leading-8 text-center text-white max-md:mt-10 max-md:max-w-full">
                <span className="">Copyright </span>
                <span className="text-white">©</span>
                <span className=""> NextBẹwẹ | Designed by NextBẹwẹ Team </span>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow justify-center items-start py-20 min-h-[415px] max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/beb7c72b2e06af9f5676151d643265ef64bcc68821183b793408de9a14cd8748?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
                  className="object-cover absolute inset-0 size-full"
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c6169d7d24492aa86825e0100ab6c3a4ef9af273d5cd38336168824b24b6ded1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6169d7d24492aa86825e0100ab6c3a4ef9af273d5cd38336168824b24b6ded1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6169d7d24492aa86825e0100ab6c3a4ef9af273d5cd38336168824b24b6ded1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6169d7d24492aa86825e0100ab6c3a4ef9af273d5cd38336168824b24b6ded1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6169d7d24492aa86825e0100ab6c3a4ef9af273d5cd38336168824b24b6ded1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6169d7d24492aa86825e0100ab6c3a4ef9af273d5cd38336168824b24b6ded1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6169d7d24492aa86825e0100ab6c3a4ef9af273d5cd38336168824b24b6ded1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6169d7d24492aa86825e0100ab6c3a4ef9af273d5cd38336168824b24b6ded1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
                  className="max-w-full aspect-[2.86] w-[620px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
