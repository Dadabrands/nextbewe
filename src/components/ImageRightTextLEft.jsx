const ImageRightTextLEft = () => {
  return (
    <div className="mt-20">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-left mt-6 tracking-wide">
        Remote Team
      </h2>
      <p className="mt-4">Enabling global collaboration for your projects.</p>
      <div className="flex flex-wrap justify-center">
        <div className="p-4 w-full lg:w-1/2">
          <p className="text-lg leading-relaxed">
            With our remote team solutions, you can tap into a diverse pool of
            talent from around the world. Our platform makes it easy to manage,
            communicate, and collaborate with your team, no matter where they
            are.
          </p>
        </div>
        <div className="p-4 w-full lg:w-1/2">
          <img
            src="path-to-your-image.jpg"
            alt="Remote Team"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageRightTextLEft;
