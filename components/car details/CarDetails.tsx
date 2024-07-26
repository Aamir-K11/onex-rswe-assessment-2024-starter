import React from 'react'
import CarOverview from './components/CarOverview'
import AvailableColours from './components/ui/Colours'
import CompanyOverview from './components/CompanyOverview';
import CarDetailsDropDown from './components/CarDetailsDropDown';
import { ITesla } from '@/data/common';

type Props = Omit<ITesla, 'features' | 'images'>
const CarDetails = ({state, title, vin, rating, price, estimatedDelivery, colours, companyDescription, companyLink}: Props) => {
  return (
    
    <section className='flex flex-col space-y-8'> 
      <CarOverview
        state={state}
        title={title}
        vin={vin}
        rating={rating}
        price={price}
        estimatedDelivery={estimatedDelivery}
      />
      <AvailableColours
        colours={colours}
       />
      <CompanyOverview
       companyDescription={companyDescription}
       companyLink={companyLink}
      />
      <CarDetailsDropDown/>
    </section>
  )
}

export default CarDetails
