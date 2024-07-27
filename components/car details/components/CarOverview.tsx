import React from 'react'
import Tag from './ui/Tag'
import Rating from './ui/Rating'
import { ITesla } from '@/data/common';

type Props = Pick<ITesla, "state" | "title" | "vin" | "rating" | "price" | "estimatedDelivery">;

const CarOverview = ({state, title, vin, rating, price, estimatedDelivery}: Props) => {
  return (
        <div className='flex flex-col'>
            <div className='w-full space-y-4 border-b-2 border-gray-500 border-opacity-10'>
                <Tag state={state}/>
                <h1>{title}</h1>
                <div className='flex space-x-5'><span className='text-gray-400 opacity-50'>VIN</span><span>{vin}</span></div>
                <Rating rating={rating}/>
                <h4 className='py-6'>{price}</h4>
            </div>
            <div className='max-w-md pt-6 space-y-6 text-center'>
                <div className='px-8 py-4 bg-[#0036C3] text-teal hover:text-primary hover:bg-blue-900 rounded-md text-center'>
                <button>Order Now</button>
                </div>
                <p className='text-sm text-gray-400 hover:text-gray-800'>{`Estimated within ${estimatedDelivery.to} - ${estimatedDelivery.from}`}</p>
            </div>
        </div>
  )
}

export default CarOverview
