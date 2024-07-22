import email from "../assets/email.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";


       
   
const Email = () => {


  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8xk27zm",
        "template_202pj7d",
        form.current,
        "qMQOrXe6TjO5gfHZV"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div  className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-7xl px-6 ">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
            <h1 className="mt-1 mb-2 text-xl text-center lg:text-left">
              Don’t Miss out on Important Happenings.
              <br /> Subscribe to our Newsletter Today !
            </h1>
            <p className="text-md text-neutral-500 text-center lg:text-left">
              Stay in the Know with Our Newsletter! Sign up now to remain well
              informed.
            </p>

<form  id="email" className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="email"
            className="email py-2 px-3 border rounded-md mt-4"
            placeholder="Enter Email Address"
            name="your_email"
          />
          <button type="submit" value="Send" className=" m-4 py-2 px-5 bg-primary text-white rounded-md mt-4">
            Submit
          </button>
        </form>
          </div>

          <div className="p-4 w-full lg:w-1/2 lg:pl-8">
            <img
              src={email}
              alt="Coding"
              className="max-w-full h-auto mx-auto lg:mx-0"
              style={{ display: "block", margin: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
