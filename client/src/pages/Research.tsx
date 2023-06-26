import React from 'react'
import Banner2 from '../components/Research/Banner2'
import About_Research from '../components/Research/About_Research'
import Links from '../components/Research/Links'
import Publication from '../components/Research/Publication'

const Research = () => {
  return (
    <main className='space-y-2 md:space-y-6'>
      <section>
        {/* Banner */}
        <Banner2/>

      </section>

      <section className='flex justify-center h-auto'>
        {/* About REsearch */}
        <About_Research/>
      </section>

      <section className='flex justify-center align-middle'>

      {/* Publication */}
      <Publication/>

      </section>

      <section className='flex justify-between px-8 align-middle space-y-1 md:flex md:flex-row '>

      {/* Referral links*/}
      <Links/>
      <img src="https://cdn.pixabay.com/photo/2017/08/01/00/38/man-2562325_1280.jpg" alt="img" className='w-[50vw]' />
      </section>

    </main>
  )
}

export default Research