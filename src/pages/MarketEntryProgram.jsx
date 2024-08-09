// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import TextImageSection from "../components/TextImageSection";
// import RemoteTeam1 from "../assets/Map.png";
// const MarketEntryProgram = () => {
//   return (
//     <div>
//       <Navbar />
//       <TextImageSection
//         title="Market entry program"
//         paragraph="Market entry involves the strategic approach of entering a new market with the goal of establishing a presence and achieving growth. At NextBewe, we provide access to the untapped potential of Africa, specifically focusing on the ECOWAS (Economic Community of West African States) countries and EAF (East African Federation) countries. Based on the nature of your business, we customise solutions for a smooth transition with our local expertise, ensuring a successful market entry.
// "
//         imagePath={RemoteTeam1}
//         reverse={true}
//       />
//       <TextImageSection
//         title="Why our Market entry program ?"
//         paragraph={
//           <ul className="list-disc list-inside mt-4 ml-6">
//             <li className="mt-2">
//               Local Market Research: Conducting in-depth market analysis to
//               understand local consumer behaviour, trends, and competition.
//             </li>
//             <li className="mt-2">
//               Regulatory Compliance: Navigating the legal and regulatory
//               framework of ECOWAS and EAF countries to ensure full compliance
//               and avoid any legal hurdles.
//             </li>
//             <li className="mt-2">
//               Partner Identification: Leveraging our network to identify and
//               connect you with reliable local partners and suppliers.
//             </li>
//             <li className="mt-2">
//               Tailored Entry Strategies: Developing customised strategies to fit
//               your business model, ensuring a seamless and effective market
//               entry.
//             </li>
//           </ul>
//         }
//         imagePath={RemoteTeam1}
//         reverse={false}
//       />
//       <Footer />
//     </div>
//   );
// };

// export default MarketEntryProgram;
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TextImageSection2 from "../components/TextImageSection2";
import AfricaMapEcowas from "../components/AfricaMapEcowas";
import AfricaMapEastAfrica from "../components/AfricaMapEastAfrica";

const MarketEntryProgram = () => {
  return (
    <div>
      <Navbar />
      <TextImageSection2
        title="Market entry program"
        paragraph="Market entry involves the strategic approach of entering a new market with the goal of establishing a presence and achieving growth. At NextBewe, we provide access to the untapped potential of Africa, specifically focusing on the ECOWAS (Economic Community of West African States) countries and EAF (East African Federation) countries. Based on the nature of your business, we customise solutions for a smooth transition with our local expertise, ensuring a successful market entry."
        CustomComponent={AfricaMapEcowas}
        reverse={true}
      />
      <TextImageSection2
        title="Why our Market entry program?"
        paragraph={
          <ul className="list-disc list-inside mt-4 ml-6">
            <li className="mt-2">
              Local Market Research: Conducting in-depth market analysis to
              understand local consumer behaviour, trends, and competition.
            </li>
            <li className="mt-2">
              Regulatory Compliance: Navigating the legal and regulatory
              framework of ECOWAS and EAF countries to ensure full compliance
              and avoid any legal hurdles.
            </li>
            <li className="mt-2">
              Partner Identification: Leveraging our network to identify and
              connect you with reliable local partners and suppliers.
            </li>
            <li className="mt-2">
              Tailored Entry Strategies: Developing customised strategies to fit
              your business model, ensuring a seamless and effective market
              entry.
            </li>
          </ul>
        }
        CustomComponent={AfricaMapEastAfrica}
        reverse={false}
      />
      <Footer />
    </div>
  );
};

export default MarketEntryProgram;
