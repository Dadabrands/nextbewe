import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatWeDoBg from "../assets/Whatwedobg.png";
import { Plus, Minus } from "lucide-react"; // Import Lucide icons

// Define FAQ data
const faqData = [
  {
    question: "Is there a contract?",
    answer:
      "NO! We are very flexible. You can stop at any time. However, to comply with Nigerian Labor laws, employees in Nigeria are entitled to one month's severance pay if their employment is terminated after a month. We will require you to cover such costs.",
  },
  {
    question: "Where are NextBewe's services available?",
    answer:
      "NextBewe's services are available globally, with support tailored to different regions including North America, Europe, Asia, and Oceania. We are committed to providing top-notch service regardless of your location.",
  },
  {
    question: "How many employees do I need to hire?",
    answer:
      "The number of employees you need depends on the scale of your project and specific requirements. Typically, our clients start with a core team of 5-10 employees and scale up as needed.",
  },
  {
    question: "What is the payment cycle?",
    answer:
      "Our standard payment cycle is monthly, with invoices issued at the beginning of each month for services rendered during the previous month. Flexible payment terms can be arranged based on your needs.",
  },
  {
    question: "What roles can we hire?",
    answer:
      "You can hire for a variety of roles including software developers, project managers, marketing specialists, and customer support representatives. Our platform provides tools to find and manage talent across different domains.",
  },
  {
    question: "What is NextBewe's fee?",
    answer:
      "NextBewe operates on a subscription-based model with fees starting at $500 per month. Pricing varies based on the level of service and additional features required. For a customized quote, please contact our sales team.",
  },
];

const Faqs = () => {
  return (
    <>
      <Navbar />

      <div className="relative overflow-hidden flex justify-center items-center px-16 py-20 w-full max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet={WhatWeDoBg}
          className="object-cover absolute inset-0 w-full h-full"
          style={{ zIndex: -1 }}
        />
        <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-screen">
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
          </div>
          <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
            {faqData.map((faq, index) => (
              <div key={index} className="py-5 text-lg">
                {/* Increased font size */}
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="flex items-center">{faq.question}</span>
                    <span className="transition group-open:rotate-180 flex items-center">
                      <span className="mr-2">
                        <Plus className="group-open:hidden text-neutral-600" />
                        <Minus className="hidden group-open:block text-neutral-600" />
                      </span>
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                        className="transition-transform duration-300"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    {faq.answer}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faqs;
