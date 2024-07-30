import { useState } from "react";
import Address from "./Address";
import Team from "../assets/Team.png";

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
          <section className="flex flex-col my-auto text-2xl text-neutral-600 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet={Team}
              className="max-w-full aspect-square w-[321px]"
              alt="Team"
            />
            <h1 className="mt-10 text-4xl font-bold leading-10 text-sky-800 max-md:max-w-full">
              Discover Efficiency: <br />
              Build Your Ideal Team Today.
            </h1>
            <div className="flex flex-col justify-center mt-7 max-md:flex-wrap">
              <p className="flex gap-2.5">Step 1. Book a consultation.</p>
              <p className="flex gap-2.5 mt-5">Step 2. Set expectations.</p>
              <p className="flex gap-2.5 mt-5">
                Step 3. Choose your teams & engagement model.
              </p>
            </div>
          </section>

          <section className="flex flex-col text-xl font-bold max-md:max-w-full">
            <h2 className="text-6xl text-sky-800 max-md:max-w-full max-md:text-4xl">
              Contact Us
            </h2>
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
                className="px-5 pt-4 pb-7  bg-blue-100 border border-black border-solid rounded-[30px] text-neutral-600 max-md:pr-5 max-md:max-w-full"
              />
              <div className="flex gap-5 justify-between text-justify text-neutral-600 max-md:flex-wrap max-md:max-w-full">
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="Position held in the company"
                  className="px-5 py-5 bg-blue-100 border border-black border-solid rounded-[30px] max-md:pr-5"
                />
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  className="px-8 py-4 bg-blue-100 border border-black border-solid rounded-[30px] max-md:pr-5"
                >
                  <option value="" disabled>
                    Purpose
                  </option>
                  <option value="Consultation">Consultation</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Support">Support</option>
                </select>
              </div>
              <div className="flex gap-5 justify-between text-justify text-neutral-600 max-md:flex-wrap max-md:max-w-full">
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="px-5 py-5 bg-blue-100 border border-black border-solid rounded-[30px] max-md:pr-5"
                />
                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  className="px-6 py-4 bg-blue-100 border border-black border-solid rounded-[30px] max-md:pr-5"
                >
                  <option value="" disabled>
                    Company Size
                  </option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="500+">500+</option>
                </select>
              </div>
              <textarea
                name="request"
                value={formData.request}
                onChange={handleChange}
                placeholder="What do you want from us?"
                className="px-10 pt-10 pb-20 bg-blue-100 border border-black border-solid rounded-full text-neutral-600 max-md:px-5 max-md:max-w-full"
              ></textarea>
              <div className="flex gap-5 justify-between  text-justify whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <button
                  type="button"
                  className="flex-auto px-14 py-6 bg-white border border-red-600 border-solid rounded-[30px] text-red-600 max-md:px-5"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-auto px-14 py-6 bg-gray-200 border border-solid border-neutral-600 rounded-[30px] text-neutral-600 max-md:px-5"
                >
                  Submit
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
      <Address />
    </div>
  );
};

export default ContactUs;
