"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import { ITesla } from '@/data/common'

type Props = Pick<ITesla, 'images'>

const CarGallery = ({images}: Props) => {

  const [activeIndex, setActiveIndex] = useState(2);

  const changeImage = (index: number) => {
    if(index > activeIndex) return setActiveIndex(() =>  index === images.length ? 0 : activeIndex + 1)
    setActiveIndex(() =>  index < 0 ? images.length - 1 : activeIndex - 1)
  }

  return (
    <section>
        <div className='flex justify-center items-center space-x-6 desktop:space-x-12'>
            <div>
                <Image
                src="/assets/common/left-arrow.svg"
                width={37}
                height={37}
                alt="Left Arrow"
                onClick={() => {changeImage(activeIndex - 1)}}
                />
            </div>
            <div>
                <Image
                className='showroom'
                src={images[activeIndex].path}
                width={800}
                height={800}
                alt="Tesla"
                />
            </div>
            <div>
                 <Image
                    src="/assets/common/right-arrow.svg"
                    width={37}
                    height={37}
                    alt="Right Arrow"
                    onClick={() => {changeImage(activeIndex + 1)}}
                 />
            </div>
           
        </div>
        <div className='flex justify-center items-center my-8 desktop:my-16 space-x-4'>
            {
                images.map((img, index) => (
                    <div key={img.id} className={`border rounded-md ${index === activeIndex ? 'border border-teal' : 'opacity-30'}`}>
                        <Image
                            className='scaled-image'
                            src={img.path}
                            width={80}
                            height={20}
                            alt="Tesla"
                            onClick={() => setActiveIndex(index)}
                        />
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default CarGallery
