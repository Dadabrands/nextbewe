const TextImageSection2 = ({ title, paragraph, CustomComponent, reverse }) => {
  return (
    <div className={`flex ${reverse ? "flex-row-reverse" : "flex-row"} my-8`}>
      <div className="w-1/2 p-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-4">{paragraph}</p>
      </div>
      <div className="w-1/2 p-4">{CustomComponent && <CustomComponent />}</div>
    </div>
  );
};

export default TextImageSection2;
