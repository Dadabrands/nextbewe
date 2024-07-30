import Mark from "../assets/Mark.png";
import Cancel from "../assets/Cancel.png";

const WhyNextbewe = () => {
  return (
    <section className="p-6 lg:p-12 w-full bg-white border-t border-b border-gray-300">
      <h1 className="text-3xl font-bold text-sky-800 text-center mb-8 lg:text-5xl">
        Why NextBẹwẹ
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-3 px-4 text-left"></th>
              <th className="py-3 px-4 text-left"></th>
              <th className="py-3 px-4 text-left">Others</th>
              <th className="py-3 px-4 text-left">NextBẹwẹ</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="py-3 px-4 text-gray-900">Cost savings</td>
              <td className="py-3 px-4"></td>
              <td className="py-3 px-4">
                <img src={Cancel} className="w-6 h-6" alt="Not Available" />
              </td>
              <td className="py-3 px-4 text-right">
                <img src={Mark} className="w-6 h-6" alt="Available" />
              </td>
            </tr>
            <tr className="bg-gray-50 border-b hover:bg-gray-100">
              <td className="py-3 px-4 text-gray-900">Global expertise</td>
              <td className="py-3 px-4"></td>
              <td className="py-3 px-4">
                <img src={Cancel} className="w-6 h-6" alt="Not Available" />
              </td>
              <td className="py-3 px-4 text-right">
                <img src={Mark} className="w-6 h-6" alt="Available" />
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="py-3 px-4 text-gray-900">ISO 27001 certified</td>
              <td className="py-3 px-4"></td>
              <td className="py-3 px-4">
                <img src={Cancel} className="w-6 h-6" alt="Not Available" />
              </td>
              <td className="py-3 px-4 text-right">
                <img src={Mark} className="w-6 h-6" alt="Available" />
              </td>
            </tr>
            <tr className="bg-gray-50 border-b hover:bg-gray-100">
              <td className="py-3 px-4 text-gray-900">Performance review</td>
              <td className="py-3 px-4"></td>
              <td className="py-3 px-4">
                <img src={Mark} className="w-6 h-6" alt="Available" />
              </td>
              <td className="py-3 px-4 text-right">
                <img src={Mark} className="w-6 h-6" alt="Available" />
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="py-3 px-4 text-gray-900">Instant scalability</td>
              <td className="py-3 px-4"></td>
              <td className="py-3 px-4">
                <img src={Cancel} className="w-6 h-6" alt="Not Available" />
              </td>
              <td className="py-3 px-4 text-right">
                <img src={Mark} className="w-6 h-6" alt="Available" />
              </td>
            </tr>
            <tr className="bg-gray-50 border-b hover:bg-gray-100">
              <td className="py-3 px-4 text-gray-900">Diverse talent pool</td>
              <td className="py-3 px-4"></td>
              <td className="py-3 px-4">
                <img src={Cancel} className="w-6 h-6" alt="Not Available" />
              </td>
              <td className="py-3 px-4 text-right">
                <img src={Mark} className="w-6 h-6" alt="Available" />
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="py-3 px-4 text-gray-900">
                Time zone advantage (GMT+1 hr)
              </td>
              <td className="py-3 px-4"></td>
              <td className="py-3 px-4">
                <img src={Cancel} className="w-6 h-6" alt="Not Available" />
              </td>
              <td className="py-3 px-4 text-right">
                <img src={Mark} className="w-6 h-6" alt="Available" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default WhyNextbewe;
