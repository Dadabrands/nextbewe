// import MapBg from "../assets/MapBg.png";

// const WhyAfrica = () => {
//   return (
//     <section className="flex overflow-hidden justify-center items-center px-16 py-20 max-md:px-5 max-md:max-w-full">
//       <div className="flex flex-col mt-10 w-full max-w-[1339px] max-md:max-w-full">
//         <h2 className="self-center text-6xl font-bold leading-6 text-blue-800 max-md:max-w-full max-md:text-4xl">
//           Why Africa?
//         </h2>
//         <div className="mt-10 max-md:mt-10 max-md:max-w-full">
//           <div className="flex gap-5 max-md:flex-col max-md:gap-0">
//             <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
//               <img
//                 loading="lazy"
//                 srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b6ae2ffa1bfdd5450612f340618fe70523d512ba96e38ca611992029e2976ce1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ae2ffa1bfdd5450612f340618fe70523d512ba96e38ca611992029e2976ce1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ae2ffa1bfdd5450612f340618fe70523d512ba96e38ca611992029e2976ce1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ae2ffa1bfdd5450612f340618fe70523d512ba96e38ca611992029e2976ce1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ae2ffa1bfdd5450612f340618fe70523d512ba96e38ca611992029e2976ce1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ae2ffa1bfdd5450612f340618fe70523d512ba96e38ca611992029e2976ce1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ae2ffa1bfdd5450612f340618fe70523d512ba96e38ca611992029e2976ce1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ae2ffa1bfdd5450612f340618fe70523d512ba96e38ca611992029e2976ce1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
//                 className="grow w-full aspect-[0.89] max-md:mt-10 max-md:max-w-full"
//                 alt="Why Africa"
//               />
//             </div>
//             <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
//               <article className="flex flex-col self-stretch my-auto text-xl leading-7 text-black max-md:mt-10 max-md:max-w-full">
//                 <div className="flex gap-5 self-start">
//                   <div className="shrink-0 my-auto w-3.5 h-3.5 bg-sky-800 rounded-full" />
//                   <p>Africa is the second largest continent.</p>
//                 </div>
//                 <div className="flex gap-5 mt-10 max-md:flex-wrap">
//                   <div className="shrink-0 my-auto w-3.5 h-3.5 bg-sky-800 rounded-full" />
//                   <p className="max-md:max-w-full">
//                     Access to French talent in neighbouring countries.
//                   </p>
//                 </div>
//                 <div className="flex gap-5 mt-10 max-md:flex-wrap">
//                   <div className="shrink-0 my-auto w-3.5 h-3.5 bg-sky-800 rounded-full" />
//                   <p className="max-md:max-w-full">
//                     Nigeria is one of the largest English-speaking countries in
//                     the world.
//                   </p>
//                 </div>
//                 <div className="flex gap-5 self-start mt-10">
//                   <div className="shrink-0 my-auto w-3.5 h-3.5 bg-sky-800 rounded-full" />
//                   <p>Stable Government.</p>
//                 </div>
//                 <div className="flex gap-5 mt-10 max-md:flex-wrap">
//                   <div className="shrink-0 my-auto w-3.5 h-3.5 bg-sky-800 rounded-full" />
//                   <p className="max-md:max-w-full">
//                     Up to 50% lower costs compared to India and the Philippines.
//                   </p>
//                 </div>
//                 <div className="flex gap-5 mt-10 max-md:flex-wrap">
//                   <div className="shrink-0 my-auto w-3.5 h-3.5 bg-sky-800 rounded-full" />
//                   <p className="max-md:max-w-full">
//                     Africa is a hub for technology, fashion, and entertainment.
//                   </p>
//                 </div>
//               </article>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyAfrica;

import MapBg from "../assets/MapBg.png";

const WhyAfrica = () => {
  return (
    <section
      className="flex overflow-hidden justify-center items-center px-16 py-20 max-md:px-5 max-md:max-w-full"
      style={{
        backgroundImage: `url(${MapBg})`,
        backgroundSize: "cover", // Ensures the image covers the whole section
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
      }}
    >
      <div className="flex flex-col mt-10 w-full max-w-[1339px] max-md:max-w-full bg-opacity-80 p-8 rounded-lg">
        <h2 className="self-center text-6xl font-bold leading-6 text-blue-800 max-md:text-4xl">
          Why Africa?
        </h2>
        <div className="mt-10 max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[45%] max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b6ae2ffa1bfdd5450612f340618fe70523d512ba96e38ca611992029e2976ce1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ae2ffa1bfdd5450612f340618fe70523d512ba96e38ca611992029e2976ce1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ae2ffa1bfdd5450612f340618fe70523d512ba96e38ca611992029e2976ce1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ae2ffa1bfdd5450612f340618fe70523d512ba96e38ca611992029e2976ce1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ae2ffa1bfdd5450612f340618fe70523d512ba96e38ca611992029e2976ce1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ae2ffa1bfdd5450612f340618fe70523d512ba96e38ca611992029e2976ce1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ae2ffa1bfdd5450612f340618fe70523d512ba96e38ca611992029e2976ce1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b6ae2ffa1bfdd5450612f340618fe70523d512ba96e38ca611992029e2976ce1?apiKey=b77f440e1a4948b38b1c15dabcef78e7&"
                className="grow w-full aspect-[0.89] max-md:mt-10 max-md:max-w-full"
                alt="Why Africa"
              />
            </div>
            <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
              <article className="flex flex-col self-stretch my-auto text-xl leading-7 text-black max-md:mt-10 max-md:max-w-full">
                <ul className="list-none pl-0">
                  <li className="flex items-start gap-3 mb-5">
                    <div className="w-6 h-6 bg-sky-800 rounded-full flex-shrink-0" />
                    <p className="text-base">
                      Skilled workforce and available talent pool.
                    </p>
                  </li>
                  <li className="flex items-start gap-3 mb-5">
                    <div className="w-6 h-6 bg-sky-800 rounded-full flex-shrink-0" />
                    <p className="text-base">
                      Lowest operating costs up to 50% lower than India or the
                      Philippines.
                    </p>
                  </li>
                  <li className="flex items-start gap-3 mb-5">
                    <div className="w-6 h-6 bg-sky-800 rounded-full flex-shrink-0" />
                    <p className="text-base">
                      Access to French, Portuguese and Arabic talent.
                    </p>
                  </li>
                  <li className="flex items-start gap-3 mb-5">
                    <div className="w-6 h-6 bg-sky-800 rounded-full flex-shrink-0" />
                    <p className="text-base">
                      Nigeria & Kenya are amongst the largest English-speaking
                      countries in the world.
                    </p>
                  </li>
                  <li className="flex items-start gap-3 mb-5">
                    <div className="w-6 h-6 bg-sky-800 rounded-full flex-shrink-0" />
                    <p className="text-base">
                      Stable and favourable policies and labour laws.
                    </p>
                  </li>
                  <li className="flex items-start gap-3 mb-5">
                    <div className="w-6 h-6 bg-sky-800 rounded-full flex-shrink-0" />
                    <p className="text-base">
                      Lagos & Nairobi are hubs for technology, fashion, and
                      entertainment.
                    </p>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAfrica;
