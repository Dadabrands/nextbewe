/* eslint-disable react/prop-types */
const TextImageSection = ({ title, paragraph, imagePath, reverse }) => {
  return (
    <div className="mt-20">
      <div
        className={`flex flex-wrap justify-center ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        <div className="p-4 w-full lg:w-1/2">
          <h2 className="text-2xl font-extrabold sm:text-3xl lg:text-4xl text-left mt-6 tracking-wide mb-8">
            {title}
          </h2>
          <p className="text-lg leading-relaxed">{paragraph}</p>
        </div>
        <div className="p-4 w-full lg:w-1/2">
          <img src={imagePath} alt={title} className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default TextImageSection;
