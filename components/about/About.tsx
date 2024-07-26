import React from 'react'
import Image from 'next/image'
import { ITesla } from '@/data/common'

type Props = Pick<ITesla, 'features'>

const About = ({features}: Props) => {
  return (
    <div className='flex flex-col space-y-4 desktop:mr-28'>
      <h2>About this car</h2>
      <ul className='flex flex-col items-start tablet:flex-row justify-between tablet:items-center space-y-12 mr-8 py-8'>
        {
          features.map(feature => ( <li key={feature.asset} className='flex space-x-2' style={{marginTop:"0px"}}>
             <Image
              src ={feature.asset}
              width={25}
              height={25}
              alt={feature.feature}
            />
             <p>{feature.feature}</p>
          </li>))
        }
      </ul>
    </div>
  )
}

export default About
