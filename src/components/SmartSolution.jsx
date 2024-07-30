import WhatWeDoBg from "../assets/Whatwedobg.png";
import QualityIcon from "../assets/quality.png";
import ScalableIcon from "../assets/Scalable.png";
import TimeIcon from "../assets/Time.png";
import CostEffectiveIcon from "../assets/costEffective.png";
import SecurityIcon from "../assets/security.png";

const cardStyle =
  "max-w-[400px] max-h-[550px] flex flex-col justify-center items-center px-6 py-8 bg-white rounded-xl border border-solid drop-shadow-lg shadow-black border-neutral-300";

const SmartSolution = () => {
  return (
    <section
      className="relative flex flex-col items-center px-16 py-20 w-full bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${WhatWeDoBg})` }}
    >
      <header className="text-center mb-20">
        <h2 className="text-5xl font-bold text-tertiary max-md:text-4xl">
          NextBẹwẹ&apos;s smart offshoring solution
        </h2>
      </header>

      <div className="flex flex-wrap gap-10 justify-center max-md:gap-5">
        <article className={cardStyle}>
          <div className="flex justify-center mb-4">
            <img src={QualityIcon} alt="Quality Icon" className="w-20 h-20" />
          </div>
          <h3 className="text-4xl font-bold text-center text-sky-800 mb-4">
            Quality assurance
          </h3>
          <div className="mt-8 text-xl leading-8 text-neutral-600 max-md:mt-10 max-md:text-base">
            <ul className="list-disc list-inside">
              <li>
                We are ISO 27001 certified for compliance with established
                industry standards and best practices.
              </li>
              <li>
                Our commitment to continuous improvement ensures that we
                consistently enhance quality over time.
              </li>
            </ul>
          </div>
        </article>

        <article className="max-w-[400px] max-h-[550px] flex flex-col items-center px-6 py-8 bg-white rounded-xl border border-solid drop-shadow-lg shadow-black border-neutral-300">
          <div className="flex justify-center mb-4">
            <img src={ScalableIcon} alt="Scalable Icon" className="w-24 h-24" />
          </div>
          <h3 className="text-4xl font-bold text-center text-sky-800 mb-4">
            Scalable
          </h3>
          <div className="mt-8 text-xl leading-8 text-neutral-600 max-md:mt-10 max-md:text-base">
            <ul className="list-disc list-inside">
              <li>
                Expand your team effortlessly with our instant scalability
                options for offshore development.
              </li>
            </ul>
          </div>
        </article>

        <article className={cardStyle}>
          <div className="flex justify-center mb-4">
            <img src={TimeIcon} alt="Time Icon" className="w-26 h-20" />
          </div>
          <h3 className="text-4xl font-bold text-center text-sky-800 mb-4">
            Time zone flexible
          </h3>
          <div className="mt-8 text-xl leading-8 text-neutral-600 max-md:mt-10 max-md:text-base">
            <ul className="list-disc list-inside">
              <li>
                NextBẹwẹ&apos;s Africa-based teams align their working hours
                with client&apos;s time zones.
              </li>
              <li>
                This enables seamless collaboration and efficient communication.
              </li>
            </ul>
          </div>
        </article>

        <article className={cardStyle}>
          <div className="flex justify-center mb-4">
            <img
              src={CostEffectiveIcon}
              alt="Cost Effective Icon"
              className="w-24 h-24"
            />
          </div>
          <h3 className="text-4xl font-bold text-center text-sky-800 mb-4">
            Cost Effective
          </h3>
          <div className="mt-8 text-xl leading-8 text-neutral-600 max-md:mt-10 max-md:text-base">
            <ul className="list-disc list-inside">
              <li>
                NextBẹwẹ&apos;s offshore model in Nigeria offers significant
                cost savings of up to 50% compared to traditional outsourcing
                destinations.
              </li>
              <li>
                This model achieves these savings without compromising on
                quality.
              </li>
            </ul>
          </div>
        </article>

        <article className={cardStyle}>
          <div className="flex justify-center mb-4">
            <img src={SecurityIcon} alt="Security Icon" className="w-24 h-24" />
          </div>
          <h3 className="text-4xl font-bold text-center text-sky-800 mb-4">
            Information security
          </h3>
          <div className="mt-8 text-xl leading-8 text-neutral-600 max-md:mt-10 max-md:text-base">
            <ul className="list-disc list-inside">
              <li>
                Our company is committed to data privacy, underscored by our ISO
                27001 certification.
              </li>
              <li>
                This certification demonstrates our adherence to the highest
                standards in information security management, ensuring that all
                data is protected with the utmost care and rigour.
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default SmartSolution;
