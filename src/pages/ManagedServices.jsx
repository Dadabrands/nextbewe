import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TextImageSection from "../components/TextImageSection";
import RemoteTeam1 from "../assets/Remoteteam1.png";
import RemoteTeam2 from "../assets/code.jpg";
import RemoteTeam3 from "../assets/finance.jpg";

const ManagedServices = () => {
  return (
    <div>
      <Navbar />

      <div className="px-4 py-4">
        <TextImageSection
          title="Managed services"
          paragraph="We understand that managing non-core functions can significantly challenge businesses, diverting attention away from their core competencies. Our managed services alleviate this burden, allowing you to focus on driving growth."
          imagePath={RemoteTeam1}
          reverse={true}
        />
        <TextImageSection
          title="Software development"
          paragraph={
            <>
              <p>
                We offer software development services to help businesses
                achieve their goals and stay ahead in today`&apos;`s digital
                landscape. Our team of skilled developers specialises in various
                technologies and industries, ensuring that we can cater to your
                unique needs without compromising your data.
              </p>
              <ul className="list-disc list-inside mt-4 ml-6">
                <li className="mt-2">
                  Ideation to deployment: We provide end-to-end software
                  development services, from ideation to deployment and
                  maintenance. We understand the needs of our clients, develop a
                  roadmap, and deliver a solution.
                </li>
                <li className="mt-2">
                  Cutting-edge technology: We use cutting-edge tools and
                  frameworks to develop efficient, scalable, and secure software
                  solutions that are optimised for performance and user
                  experience.
                </li>
                <li className="mt-2">
                  Data protection: We prioritise intellectual property
                  protection and data security by implementing industry-standard
                  security protocols and adhering to strict confidentiality
                  agreements to safeguard your sensitive data and proprietary
                  assets.
                </li>
              </ul>
            </>
          }
          imagePath={RemoteTeam2}
          reverse={false}
        />

        <TextImageSection
          title="Finance and Accounting"
          paragraph={
            <>
              <p>
                Effective financial management is crucial for the success of any
                organisation. NextBewe`&apos;`s finance and accounts management
                services provide a comprehensive solution to streamline your
                financial operations. Our team of experienced professionals
                leverages cutting-edge tools and industry best practices to
                ensure accurate and timely financial reporting, budgeting,
                forecasting, and analysis.
              </p>
              <ul className="list-disc list-inside mt-4 ml-6">
                <li className="mt-2">
                  Bookkeeping and Accounting: Our bookkeeping and accounting
                  services ensure accurate and efficient tracking of financial
                  transactions, maintaining up-to-date and organised records.
                </li>
                <li className="mt-2">
                  Financial reporting and analysis: We provide detailed
                  financial reporting and analysis, delivering insightful data
                  to support informed decision-making and strategic planning.
                </li>
                <li className="mt-2">
                  Budgeting and Forecasting: Our budgeting and forecasting
                  services help you plan and allocate resources effectively,
                  anticipating future financial needs and opportunities.
                </li>
                <li className="mt-2">
                  Accounts payable and Receivables management: We manage
                  accounts payable and receivables, ensuring timely payments and
                  collections to maintain healthy cash flow and financial
                  stability.
                </li>
              </ul>
            </>
          }
          imagePath={RemoteTeam3}
          reverse={true}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ManagedServices;
