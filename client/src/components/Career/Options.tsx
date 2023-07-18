import { FaDownload } from "react-icons/fa";
const Options = () => {
  return (
    <main className="space-y-4 lg:space-y-6 bg-white mt-4 mx-2 md:mx-3 w-full md:w-[80vw] lg:w-[60vw] ">
      <div className="flex justify-center align-middle">
        <h1 className="text-3xl text-gray-800 mt-6 ">Literature</h1>
      </div>

      <div className="p-1 py-2 overflow-auto rounded-lg shadow-sm space-y-1">
        <hr className="border-1 border-gray-300" />
        <table className="w-full">
          <tbody className="divide-y  divide-gray-200 ">

            <tr className="">
              <th className="p-3 text-sm text-gray-900  whitespace-nowrap">
                <div className="flex flex-col">
                  <span>Subject</span>
                </div>
              </th>
              <th className="p-3 text-sm text-gray-900 text-center  whitespace-nowrap">
                <span className="flex justify-center align-middle space-x-5">
                  <span>
                   Location
                  
                  </span>
                </span>
              </th>
            </tr>
            <tr className="">
              <td className="p-3 text-sm text-gray-900  whitespace-nowrap">
                <div className="flex flex-col hover:text-gray-600 cursor-pointer ">
                  <span className="">Sanskrit</span>
                </div>
              </td>
              <td className="p-3 text-sm text-gray-900 text-center  whitespace-nowrap">
                <span className="flex justify-center align-middle space-x-5">
                  <span>Govt Sanskrit College,Samdong East Sikkim 737107</span>
                </span>
              </td>
            </tr>

            <tr className="">
              <td className="p-3 text-sm text-gray-900  whitespace-nowrap">
                <div className="flex flex-col hover:text-gray-600 cursor-pointer">
                  <span>Nepali</span>
                </div>
              </td>
              <td className="p-3 text-sm text-gray-900 text-center  whitespace-nowrap">
                <span className="flex justify-center align-middle space-x-5">
                  <span>
                    Academic Block, NBBGC Complex, Tadong, East Sikkim 737102
                  </span>
                </span>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      <div className="flex justify-center align-middle">
        <h1 className="text-3xl text-gray-800 mt-6">Law</h1>
      </div>

      <div className="p-1 py-2 overflow-auto rounded-lg shadow-sm space-y-1 pb-4 lg:pb-8">
        <hr className="border-1 border-gray-300" />
        <table className="w-full">
          <tbody className="divide-y  divide-gray-200 ">

            <tr className="">
              <th className="p-3 text-sm text-gray-900  whitespace-nowrap">
                <div className="flex flex-col">
                  <span>Subject</span>
                </div>
              </th>
              <th className="p-3 text-sm text-gray-900 text-center  whitespace-nowrap">
                <span className="flex justify-center align-middle space-x-5">
                  <span>
                   Location
                  
                  </span>
                </span>
              </th>
            </tr>
            <tr className="">
              <td className="p-3 text-sm text-gray-900  whitespace-nowrap">
                <div className="flex flex-col hover:text-gray-600 cursor-pointer">
                  <span>Bachelors Of Law </span>
                </div>
              </td>
              <td className="p-3 text-sm text-gray-900 text-center  whitespace-nowrap">
                <span className="flex justify-center align-middle space-x-5">
                  <span>Govt Sanskrit College,Samdong East Sikkim 737107</span>
                </span>
              </td>
            </tr>

            
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Options;
