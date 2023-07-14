import { FaDownload } from "react-icons/fa";
const Publication = () => {
  return (
<main className='space-y-4 bg-slate-100 mt-4 mx-2 md:mx-3 w-full'>
            <div className='flex justify-center align-middle'>
                <h1 className='text-2xl font-bold mt-6'>PUBLICATIONS</h1>
            </div>
        
            <div className='p-1 py-2 overflow-auto rounded-lg shadow space-y-1'>
                <table className='w-full'>

                    <tbody className='divide-y  divide-gray-200 bg-slate-50'>
                        <tr className=''>
                            <td className='p-3 text-sm text-gray-900  whitespace-nowrap'>
                              <div className='flex flex-col'>
                                <span>Dr Pradeep</span>
                                <span> 22nd July 2023</span>
                                <span><FaDownload/></span>

                              </div>
                              </td>
                            <td className='p-3 text-sm text-gray-900 text-center  whitespace-nowrap'><a href="#" className='font-semibold text-blue-500 hover:underline'>
                              
                              <span className='flex justify-center align-middle space-x-5'>
                                <span>Download</span>
                                <FaDownload/>
                                </span> 
                              </a></td>
                        </tr>
                        <tr className=''>
                            <td className='p-3 text-sm text-gray-900  whitespace-nowrap'>
                              <div className='flex flex-col'>
                                <span>Dr Pradeep</span>
                                <span> 22nd July 2023</span>
                                <span><FaDownload/></span>

                              </div>
                              </td>
                            <td className='p-3 text-sm text-gray-900 text-center  whitespace-nowrap'><a href="#" className='font-semibold text-blue-500 hover:underline'>
                              
                              <span className='flex justify-center align-middle space-x-5'>
                                <span>Download</span>
                                <FaDownload/>
                                </span> 
                              </a></td>
                        </tr>
                        <tr className=''>
                            <td className='p-3 text-sm text-gray-900  whitespace-nowrap'>
                              <div className='flex flex-col'>
                                <span>Dr Pradeep</span>
                                <span> 22nd July 2023</span>
                                <span><FaDownload/></span>

                              </div>
                              </td>
                            <td className='p-3 text-sm text-gray-900 text-center  whitespace-nowrap'><a href="#" className='font-semibold text-blue-500 hover:underline'>
                              
                              <span className='flex justify-center align-middle space-x-5'>
                                <span>Download</span>
                                <FaDownload/>
                                </span> 
                              </a></td>
                        </tr>
   


                        
                    </tbody>

                </table>
            </div>



    </main>
  )
}

export default Publication