import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TextImageSection from "../components/TextImageSection";
import RemoteTeam1 from "../assets/Remoteteams1.png";
import RemoteTeam2 from "../assets/handsTyping.jpg";
const RemoteTeams = () => {
  return (
    <div>
      <Navbar />
      <TextImageSection
        title="Remote Teams"
        paragraph="Our remote teams service provides a seamless solution to  source and onboard highly skiled yet affordable professionals from Africa and India, tailored to your specific rewuirements. Whether it is developers, marketers, designers, or any other role. we build the perfect team to drive your projects forward ensuring cost savings and operational efficiency."
        imagePath={RemoteTeam1}
        reverse={true}
      />
      <TextImageSection
        title="Why our remote teams ?"
        paragraph={
          <ul className="list-disc list-inside mt-4 ml-6">
            <li className="mt-2">
              Cost-savings: Our remote teams offer significant cost advantages
              compared to hiring locally, allowing you to optimise your budget
              while maintaining high-quality deliverables.
            </li>
            <li className="mt-2">
              Access to a vast talent pool: With our extensive network and
              proven recruitment processes, we can quickly identify and onboard
              the best-fit professionals for your project.
            </li>
            <li className="mt-2">
              Scalability: Quickly scale your team up or down based on project
              demands, providing flexibility and agility to adapt to changing
              business needs.
            </li>
            <li className="mt-2">
              Global presence: Our teams are well-versed in working with global
              clients, ensuring effective communication and seamless integration
              with your existing workforce.
            </li>
            <li className="mt-2">
              Dedicated project management: Our experienced project managers
              oversee the entire lifecycle, ensuring timely delivery, quality
              control, and seamless collaboration between your in-house team and
              our remote professionals.
            </li>
            <li className="mt-2">
              Continuous learning and development: We invest in upskilling our
              remote team members, ensuring they stay up-to-date with the latest
              technologies and industry best practices, delivering cutting-edge
              solutions to your business.
            </li>
          </ul>
        }
        imagePath={RemoteTeam2}
        reverse={false}
      />
      <Footer />
    </div>
  );
};

export default RemoteTeams;
