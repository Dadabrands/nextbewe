import { testimonials } from "../constants/index";

const Faqs = () => {
  return (
    <div className=" mx-auto pt-20 px-6 mt-10  tracking-wide bg-primary bg-opacity-50">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 mb-10">
            <div className="bg-white rounded-md p-6 text-md  font-medium">
              <p className="text-sm font-bold">{testimonial.title}</p>
              <p>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
