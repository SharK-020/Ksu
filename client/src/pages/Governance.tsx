import React from 'react'

import Other_officers from '../components/Governance/Other_officers'
import University_auth from '../components/Governance/University_auth'
import Statutory from '../components/Governance/Statutory'

const Governance = () => {
  return (
    <div className='space-y-4 mb-4 md:space-y-16 md:mb-8'>
      <University_auth/>
      <Statutory/>
      <Other_officers/>
    </div>
  )
}

export default Governance