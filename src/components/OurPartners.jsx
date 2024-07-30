import Hamlet from "../assets/Hamlet.png";
import Mediamint from "../assets/mediamint.png";
import Rythmos from "../assets/rythmos.png";
import Pivox from "../assets/Pivox.png";
import Spangg from "../assets/spangg.png";
import Zippr from "../assets/zippr.png";

const OurPartners = () => {
  return (
    <>
      <div className="self-center mt-24 text-6xl font-bold tracking-widest text-center text-sky-800 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Our Partner
      </div>
      <div className="flex gap-5 justify-between items-center self-center px-7 mt-20 mb-20 w-full max-w-[1737px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src={Mediamint}
          className="shrink-0 self-stretch my-auto max-w-full aspect-[5.26] w-[300px]"
        />
        <img
          loading="lazy"
          srcSet={Zippr}
          className="shrink-0 self-stretch max-w-full mix-blend-multiply aspect-square w-[170px]"
        />
        <div className="flex gap-5 self-stretch my-auto font-medium text-blue-950">
          <img
            loading="lazy"
            src={Hamlet}
            className="shrink-0 max-w-full aspect-[0.85] w-[250px] h-[80px]"
          />
        </div>
        <div className="flex gap-5 justify-between self-stretch my-auto max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            srcSet={Rythmos}
            className="my-auto w-60 aspect-[3.85]"
          />
        </div>
        <div className="flex gap-5 justify-between self-stretch my-auto max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            srcSet={Pivox}
            className="shrink-0 max-w-full aspect-[2.86] w-[215px]"
          />
        </div>
        <div className="flex gap-5 justify-between self-stretch my-auto max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            srcSet={Spangg}
            className="shrink-0 max-w-full aspect-[2.86] w-[160px] "
          />
        </div>
      </div>
    </>
  );
};

export default OurPartners;
