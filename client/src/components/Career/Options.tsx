import { FaDownload } from "react-icons/fa";

const Options = () => {
  return (
    <main className="space-y-4 lg:space-y-6 bg-white mt-4 mx-2 md:mx-3 w-full md:w-[80vw] lg:w-[60vw] mb-4 ">
      <div className="flex justify-center align-middle">
        <h1 className="text-3xl font-semibold mt-6 ">Faculty Recuritment</h1>
      </div>

      <div className="p-1 py-2 overflow-auto rounded-lg shadow-sm space-y-1">
        <hr className="border-1 border-gray-300" />
        <table className="w-full">
          <tbody className="divide-y  divide-gray-200 ">
            <tr className="">
              <th className="p-3 text-sm text-gray-900  whitespace-nowrap">
                <div className="flex flex-col">
                  <span>Vacancy Title</span>
                </div>
              </th>
              <th className="p-3 text-sm text-gray-900 text-center  whitespace-nowrap">
                <span className="flex justify-center align-middle space-x-5">
                  <span>Details</span>
                </span>
              </th>
            </tr>
            <tr className="">
              <td className="p-3 text-sm text-gray-900  whitespace-nowrap">
                <div className="flex flex-col hover:text-gray-600 cursor-pointer ">
                  <span className="">Assistant Professor Form</span>
                </div>
              </td>
              <td className="p-3 text-sm text-gray-900 text-center  whitespace-nowrap">
                <a
                  href="#"
                  className="font-semibold text-blue-500 hover:underline"
                >
                  <span className="flex justify-center align-middle space-x-5">
                    <span>Download</span>
                    <FaDownload />
                  </span>
                </a>
              </td>
            </tr>

            <tr className="">
              <td className="p-3 text-sm text-gray-900  whitespace-nowrap">
                <div className="flex flex-col hover:text-gray-600 cursor-pointer ">
                  <span className="">Associate Professor Form</span>
                </div>
              </td>
              <td className="p-3 text-sm text-gray-900 text-center  whitespace-nowrap">
                <a
                  href="#"
                  className="font-semibold text-blue-500 hover:underline"
                >
                  <span className="flex justify-center align-middle space-x-5">
                    <span>Download</span>
                    <FaDownload />
                  </span>
                </a>
              </td>
            </tr>

            <tr className="">
              <td className="p-3 text-sm text-gray-900  whitespace-nowrap">
                <div className="flex flex-col hover:text-gray-600 cursor-pointer ">
                  <span className="">Instructions to the Candidates PDF</span>
                </div>
              </td>
              <td className="p-3 text-sm text-gray-900 text-center  whitespace-nowrap">
                <a
                  href="#"
                  className="font-semibold text-blue-500 hover:underline"
                >
                  <span className="flex justify-center align-middle space-x-5">
                    <span>Download</span>
                    <FaDownload />
                  </span>
                </a>
              </td>
            </tr>
            
            <tr className="">
              <td className="p-3 text-sm text-gray-900  whitespace-nowrap">
                <div className="flex flex-col hover:text-gray-600 cursor-pointer ">
                  <span className="">Advertisement</span>
                </div>
              </td>
              <td className="p-3 text-sm text-gray-900 text-center  whitespace-nowrap">
                <a
                  href="#"
                  className="font-semibold text-blue-500 hover:underline"
                >
                  <span className="flex justify-center align-middle space-x-5">
                    <span>Download</span>
                    <FaDownload />
                  </span>
                </a>
              </td>
            </tr>

  
          </tbody>
        </table>
      </div>

      
      
    </main>
  );
};

export default Options;
