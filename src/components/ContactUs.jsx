import { useState } from "react";
import Address from "./Address";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    position: "",
    purpose: "",
    companyName: "",
    companySize: "",
    request: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };
  return (
    <div className="flex flex-col bg-white">
      <div className="flex justify-center items-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between my-4 w-full max-w-[1628px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col my-auto text-3xl text-neutral-600 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f942d38c06e02d27354e0adb79bad5127754989b43d45308330598139690d2c?apiKey=51522038df984a4c916ebb75d2310df2&"
              className="max-w-full aspect-square w-[321px]"
            />
            <div className="mt-10 text-4xl font-bold leading-10 text-sky-800 max-md:max-w-full">
              Discover Efficiency: <br />
              Build Your Ideal Team Today.
            </div>
            <div className="flex gap-3.5 justify-center mt-7 text-justify max-md:flex-wrap">
              <div className="text-ellipsis">Step 1.</div>
              <div className="text-ellipsis max-md:max-w-full">
                Book a consultation.
              </div>
            </div>
            <div className="flex gap-3.5 justify-center self-start mt-5 text-justify">
              <div className="text-ellipsis">Step 2.</div>
              <div className="text-ellipsis">Set expectations.</div>
            </div>
            <div className="flex gap-3.5 justify-center mt-5 text-justify max-md:flex-wrap">
              <div className="text-ellipsis">Step 3.</div>
              <div className="text-ellipsis max-md:max-w-full">
                Choose your teams and engagement model.
              </div>
            </div>
          </div>

          <div className="flex flex-col text-xl font-bold max-md:max-w-full">
            <div className="text-6xl text-sky-800 max-md:max-w-full max-md:text-4xl">
              Contact Us
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-10">
              <div className="flex gap-5 justify-between text-justify text-neutral-600 max-md:flex-wrap max-md:max-w-full">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="px-5 pt-4 pb-7 bg-blue-100 border border-black border-solid rounded-[30px] max-md:pr-5"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="px-5 pt-4 pb-7 bg-blue-100 border border-black border-solid rounded-[30px] max-md:pr-5"
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="px-5 pt-4 pb-7 mt-7 bg-blue-100 border border-black border-solid rounded-[30px] text-neutral-600 max-md:pr-5 max-md:max-w-full"
              />
              <div className="flex gap-5 justify-between mt-7 text-justify text-neutral-600 max-md:flex-wrap max-md:max-w-full">
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="Position held in the company"
                  className="px-5 py-5 bg-blue-100 border border-black border-solid rounded-[30px] max-md:pr-5"
                />
                <div className="flex gap-5 px-6 py-4 bg-blue-100 border border-black border-solid rounded-[30px] max-md:pr-5">
                  <input
                    type="text"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    placeholder="Purpose"
                    className="bg-transparent border-none outline-none w-full"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/565865944f2fce4c7af91de669af0ec0c33c53fb8a7b2a21e476eb03addd953b?apiKey=51522038df984a4c916ebb75d2310df2&"
                    className="shrink-0 self-start mt-2 w-5 aspect-square"
                    alt="purpose icon"
                  />
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-7 text-justify text-neutral-600 max-md:flex-wrap max-md:max-w-full">
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="px-5 py-5 bg-blue-100 border border-black border-solid rounded-[30px] max-md:pr-5"
                />
                <div className="flex gap-5 px-6 py-4 bg-blue-100 border border-black border-solid rounded-[30px] max-md:pr-5">
                  <input
                    type="text"
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    placeholder="Company Size"
                    className="bg-transparent border-none outline-none w-full"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff7ce963542cbe9a87ca659fbe83e158c4ead643d2c66a86c927b5804c7848ec?apiKey=51522038df984a4c916ebb75d2310df2&"
                    className="shrink-0 self-start mt-2 w-5 aspect-square"
                    alt="company size icon"
                  />
                </div>
              </div>
              <textarea
                name="request"
                value={formData.request}
                onChange={handleChange}
                placeholder="What do you want from us?"
                className="px-10 pt-10 pb-20 mt-7 bg-blue-100 border border-black border-solid rounded-[70.5px] text-neutral-600 max-md:px-5 max-md:max-w-full"
              ></textarea>
              <div className="flex gap-5 justify-between mt-7 text-justify whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <button
                  type="button"
                  className="flex-auto px-16 py-6 bg-white border border-red-600 border-solid rounded-[30px] text-red-600 max-md:px-5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-auto px-16 py-6 bg-gray-200 border border-solid border-neutral-600 rounded-[30px] text-neutral-600 max-md:px-5"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Address />
    </div>
  );
};

export default ContactUs;
