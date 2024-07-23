import Carousel from "./Carousel"; // Adjust the import path as necessary
import Slide1 from "../assets/1.png";
import Slide2 from "../assets/2.png";
import Slide3 from "../assets/3.png";

const Layout1 = () => {
  const slides = [
    <div key="slide-1" className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[79%] max-md:ml-0 max-md:w-full">
        <img
          src={Slide1}
          alt="Slide 1"
          className="grow w-full aspect-[1.75] max-md:mt-10 max-md:max-w-full"
        />
      </div>
      <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
        <img
          src={Slide2}
          alt="Slide 2"
          className="shrink-0 self-stretch my-auto max-w-full border border-black border-solid aspect-[0.56] w-[317px] max-md:mt-10"
        />
      </div>
    </div>,
    <div
      key="slide-2"
      className="flex gap-5 mt-3 w-full max-md:flex-wrap max-md:max-w-full"
    >
      <img
        src={Slide3}
        alt="Slide 3"
        className="shrink-0 my-auto max-w-full aspect-[0.41] w-[229px]"
      />
      <div className="flex-auto max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[79%] max-md:ml-0 max-md:w-full">
            <img
              src={Slide1}
              alt="Slide 1"
              className="grow w-full border border-black border-solid aspect-[1.79] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
            <img
              src={Slide2}
              alt="Slide 2"
              className="shrink-0 self-stretch my-auto max-w-full aspect-[0.56] w-[317px] max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </div>,
    <div key="slide-3" className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
        <img
          src={Slide3}
          alt="Slide 3"
          className="shrink-0 self-stretch my-auto max-w-full border border-black border-solid aspect-[0.42] w-[231px] max-md:mt-10"
        />
      </div>
      <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
        <img
          src={Slide1}
          alt="Slide 1"
          className="grow w-full aspect-[1.79] max-md:mt-10 max-md:max-w-full"
        />
      </div>
    </div>,
  ];

  return (
    <div className="flex flex-col items-center py-20 pl-20 bg-white max-md:pl-5">
      <Carousel slides={slides} autoSlide={true} autoSlideInterval={3000} />
    </div>
  );
};

export default Layout1;
