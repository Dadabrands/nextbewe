// // import { CheckCircle2 } from "lucide-react";
// import Image1 from "../assets/image1.png";
// import { checklistItems } from "../constants/index";

// const Workflow = () => {
//   return (
//     <div className="mt-20">
//       <h2 className="text-2xl sm:text-3xl lg:text-4xl text-left mt-6 tracking-wide">
//         Revolutionizing Healthcare Claims
//         <br />
//         in Nigeria.
//       </h2>
//       <p className="mt-4">What we offer you !</p>
//       <div className="flex flex-wrap justify-center">
//         <div className="pt-12 w-full lg:w-1/2">
//           {checklistItems.map((item, index) => (
//             <div key={index} className="flex mb-12">
//               <image className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
//                 {/* <CheckCircle2 /> */}
//                 {item.image}
//               </image>
//               <div>
//                 {/* <h5 className="mt-1 mb-2 text-xl">{item.title}</h5> */}
//                 <imag className="text-md text-neutral-500">
//                   {item.description}
//                 </imag>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="p-2 w-full lg:w-1/2">
//           <img src={Image1} alt="Coding" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Workflow;

import Image1 from "../assets/Image1.jpg";
import { checklistItems } from "../constants/index";

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-left mt-6 tracking-wide">
        Revolutionizing Healthcare Claims
        <br />
        in Nigeria.
      </h2>
      <p className="mt-4">What we offer you !</p>
      <div className="flex flex-wrap justify-center">
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <img
                src={item.image} // Assuming item.image contains the path to the image
                alt="Check Circle"
                className="text-green-400 mx-6 h-20 w-20 p-2 justify-center items-center rounded-full"
              />
              <div>
                <p className="mt-1 mb-2 text-xl">{item.title}</p>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 w-full lg:w-1/2">
          <img src={Image1} alt="Coding" style={{ maxWidth: "100%", height: "auto" }}/>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
