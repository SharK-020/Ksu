import React from 'react'

const Statutory = () => {
  return (
    <main className='bg-slate-100 mx-2 md:mx-3'>
           <div className='p-1 overflow-auto rounded-lg shadow space-y-1'>
                <div className='flex justify-center'>
                    <h1 className='pt-2 font-bold text-lg'>SIKKIM STATE UNIVERSITY STATUTORY OFFICERS</h1>

                </div>
                <table className='w-full'>
                    <thead className=' bg-gray-300 border-b-2 border-grey-200'>
                        <tr className=''>
                            <th className='p-3 text-sm tracking-wide text-left'>SL. No</th>
                            <th className='p-3 text-sm tracking-wide text-left'>Name & Designation</th>
                            <th className='p-3 text-sm tracking-wide text-left'>Section</th>
                            <th className='p-3 text-sm tracking-wide text-left'>Email</th>
                            <th className='p-3 text-sm tracking-wide text-left'>Contact No.</th>
                        </tr>

                    </thead>
                    <tbody className='divide-y  divide-gray-400'>
                        <tr className=''>
                            <td className='p-3 text-sm text-gray-900  whitespace-nowrap'>1</td>
                            <td className='p-3 text-sm text-gray-900  whitespace-nowrap'>John</td>
                            <td className='p-3 text-sm text-gray-900  whitespace-nowrap'>Admin</td>
                            <td className='p-3 text-sm text-gray-900  whitespace-nowrap'><a href="#" className='font-semibold text-blue-500 hover:underline'>name@gmail.com</a></td>
                            <td className='p-3 text-sm text-gray-900 whitespace-nowrap'>1234567899</td>
                        </tr>
                        <tr className=''>
                        <td className='p-3 text-sm text-gray-900  whitespace-nowrap'>1</td>
                            <td className='p-3 text-sm text-gray-900  whitespace-nowrap'>John</td>
                            <td className='p-3 text-sm text-gray-900  whitespace-nowrap'>Admin</td>
                            <td className='p-3 text-sm text-gray-900  whitespace-nowrap'><a href="#" className='font-semibold text-blue-500 hover:underline'>name@gmail.com</a></td>
                            <td className='p-3 text-sm text-gray-900 whitespace-nowrap'>1234567899</td>
                        </tr>
                        <tr className=''>
                        <td className='p-3 text-sm text-gray-900  whitespace-nowrap'>1</td>
                            <td className='p-3 text-sm text-gray-900  whitespace-nowrap'>John</td>
                            <td className='p-3 text-sm text-gray-900  whitespace-nowrap'>Admin</td>
                            <td className='p-3 text-sm text-gray-900  whitespace-nowrap'><a href="#" className='font-semibold text-blue-500 hover:underline'>name@gmail.com</a></td>
                            <td className='p-3 text-sm text-gray-900 whitespace-nowrap'>1234567899</td>
                        </tr>
                    </tbody>

                </table>
            </div>
 
    </main>
  )
}

export default Statutory