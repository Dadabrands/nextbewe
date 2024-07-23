import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TextImageSection from "../components/TextImageSection";
import RemoteTeam1 from "../assets/Remoteteams1.png";
import RemoteTeam2 from "../assets/workersTyping.jpg";

const BuildOperateTransfer = () => {
  return (
    <div>
      <Navbar />
      <TextImageSection
        title="Build Operate Transfer"
        paragraph="NextBewe BOT service offers a comprehensive solution for businesses looking to establish Global Capability Centres (GCCs). Our experts guide you through every step of the process, right from site selection to infrastructure setup to talent acquisition and operational management."
        imagePath={RemoteTeam1}
        reverse={true}
      />
      <TextImageSection
        title="Why our Build Operate Transfer ?"
        paragraph={
          <ul className="list-disc list-inside mt-4 ml-6">
            <li className="mt-2">
              Cost-effective establishment of GCCs: Our Build Operate Transfer
              service allows you to leverage cost-efficient resources and talent
              in Africa and India, enabling substantial savings compared to
              setting up operations in traditional technology hubs.
            </li>
            <li className="mt-2">
              Local expertise: Our deep understanding of local markets,
              regulations, and business practices in these regions ensures a
              smooth setup process, minimising risks and ensuring full
              compliance with all relevant laws and policies. NextBewe`&apos;`s
              experienced team guides you through the entire transition process,
              ensuring efficient knowledge transfer and minimal disruption to
              your existing operations.
            </li>
            <li className="mt-2">
              Scalability and flexibility: With our service, you can quickly
              scale your offshore operations up or down based on changing
              business demands, providing the flexibility to adapt to dynamic
              market conditions.
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

export default BuildOperateTransfer;
