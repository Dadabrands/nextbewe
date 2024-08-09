// import { Facebook, Twitter, Linkedin } from "lucide-react";
// import Photo from "../assets/Leadership1.jpg";
// import Photo1 from "../assets/leadership2.png";
// import Photo2 from "../assets/leadership3.png";
// import Photo3 from "../assets/leadership4.png";

// const Leadership = () => {
//   return (
//     <div className="flex flex-col items-center px-5 py-20 mt-5 w-full bg-white max-md:mt-10">
//       <h1 className="text-5xl font-bold text-center text-sky-800 mb-10">
//         Leadership
//       </h1>
//       <div className="flex flex-wrap justify-center w-full max-w-[1656px] gap-5 max-md:flex-col">
//         <div className="flex flex-col items-center w-[283.55px] max-md:w-full p-5 rounded-xl bg-white">
//           <img
//             loading="lazy"
//             src={Photo}
//             className="w-full h-[433px] rounded-xl mb-5 object-cover"
//             alt="Leader 1"
//           />
//         </div>
//         <div className="flex flex-col items-center w-[283.55px] max-md:w-full p-5 rounded-xl bg-white">
//           <img
//             loading="lazy"
//             src={Photo1}
//             className="w-full h-[433px] rounded-xl mb-5 object-cover"
//             alt="Leader 1"
//           />
//         </div>
//         <div className="flex flex-col items-center w-[283.55px] max-md:w-full p-5 rounded-xl bg-white">
//           <img
//             loading="lazy"
//             src={Photo2}
//             className="w-full h-[433px] rounded-xl mb-5 object-cover"
//             alt="Leader 1"
//           />
//         </div>
//         <div className="flex flex-col items-center w-[283.55px] max-md:w-full p-5 rounded-xl bg-white">
//           <img
//             loading="lazy"
//             src={Photo3}
//             className="w-full h-[433px] rounded-xl mb-5 object-cover"
//             alt="Leader 2"
//           />
//         </div>
//         {/* <div className="flex flex-col items-center justify-center w-[283.55px] max-md:w-full bg-white p-5 rounded-xl">
//           <div className="text-center">
//             <h2 className="text-2xl font-semibold mb-2">Manuel</h2>
//             <h6 className="text-lg text-gray-600 mb-4">Director</h6>
//             <div className="flex justify-center gap-4 mb-4">
//               <Facebook className="text-blue-600" />
//               <Twitter className="text-blue-400" />
//               <Linkedin className="text-blue-800" />
//             </div>
//             <p className="text-lg mb-1">1 (378) 400-1234</p>
//             <p className="text-lg">manuel@nextbewe.com</p>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Leadership;

import Photo from "../assets/Leadership1.jpg";
import Photo1 from "../assets/leadership2.png";
import Photo2 from "../assets/leadership3.png";
import Photo3 from "../assets/leadership4.png";

const Leadership = () => {
  return (
    <div className="flex flex-col items-center px-5 py-20 mt-5 w-full bg-white max-md:mt-10">
      <h1 className="text-5xl font-bold text-center text-sky-800 mb-10">
        Leadership
      </h1>
      <div className="flex flex-wrap justify-center w-full max-w-[1656px] gap-5 max-md:flex-col">
        <div className="flex flex-col items-center w-[283.55px] max-md:w-full p-5 rounded-xl bg-white">
          <img
            loading="lazy"
            src={Photo}
            className="w-full h-[433px] rounded-xl mb-5 object-cover"
            alt="Parikshith Reddy"
          />
          <div className="text-center">
            <p className="text-xl font-semibold">Parikshith Reddy</p>
            <p className="text-gray-500">Founder & CEO</p>
          </div>
        </div>
        <div className="flex flex-col items-center w-[283.55px] max-md:w-full p-5 rounded-xl bg-white">
          <img
            loading="lazy"
            src={Photo1}
            className="w-full h-[433px] rounded-xl mb-5 object-cover"
            alt="Mateusz R.Cyran"
          />
          <div className="text-center">
            <p className="text-xl font-semibold">Mateusz R.Cyran</p>
            <p className="text-gray-500">VP - Financial Services</p>
          </div>
        </div>
        <div className="flex flex-col items-center w-[283.55px] max-md:w-full p-5 rounded-xl bg-white">
          <img
            loading="lazy"
            src={Photo2}
            className="w-full h-[433px] rounded-xl mb-5 object-cover"
            alt="Babajide Bankole Manuel"
          />
          <div className="text-center">
            <p className="text-xl font-semibold">Babajide Bankole Manuel</p>
            <p className="text-gray-500">Country Head & Co-Founder</p>
          </div>
        </div>
        <div className="flex flex-col items-center w-[283.55px] max-md:w-full p-5 rounded-xl bg-white">
          <img
            loading="lazy"
            src={Photo3}
            className="w-full h-[433px] rounded-xl mb-5 object-cover"
            alt="Yusuf Aderinto"
          />
          <div className="text-center">
            <p className="text-xl font-semibold">Yusuf Aderinto</p>
            <p className="text-gray-500">Account / Delivery Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
