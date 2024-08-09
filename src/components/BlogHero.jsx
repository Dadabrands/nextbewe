import BlogPostBg from "../assets/Blogpostbg.jpg";

const BlogHero = () => {
  return (
    <div className="relative overflow-hidden flex flex-col justify-center items-center px-16 py-20 text-white min-h-[800px] max-md:px-5">
      <img
        loading="lazy"
        srcSet={BlogPostBg}
        className="object-cover  absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }}
      />
      <div className="absolute inset-0 bg-white opacity-60"></div>{" "}
      {/* Black background overlay */}
      <div className="relative flex flex-col items-center mt-[-200px] max-w-full w-[1148px] max-md:mt-10">
        <div className="text-[130px] text-primary leading-[100px] max-md:mt-10 max-md:max-w-full">
          Blog
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
