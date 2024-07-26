"use client";
import React, { useState } from 'react'

const Colour = ({hex, isSelected}: {hex: string, isSelected: 'border-teal' | 'border-gray'}) => {
  return (
    <span
      className={`inline-block w-6 h-6 rounded-full border ${isSelected}`}
      style={{ backgroundColor: hex }}
    ></span>
  )
}

const AvailableColours = ({colours}: {colours: {name: string, hex: string, default?:boolean}[]}) => {
  const [selectedColour, setSelectedColour] = useState(() => {
     let defaultColour = colours.filter(colour => colour.default);
     return {...defaultColour[0]}
  })

  const changeSelectedColour = (colour: {name: string, hex: string, default?:boolean}) => {
    setSelectedColour(colour);
  }

  return (
    <div className='flex pt-4 justify-between'>
        <div className='flex space-x-2 self-baseline'>
           <p className='text-sm font-semibold'>Colour</p>
           {colours.map(colour => <div key={colour.hex} onClick={() => changeSelectedColour(colour)}><Colour  hex={colour.hex} isSelected={colour.hex === selectedColour.hex ? 'border-teal' : 'border-gray'}/></div>)}
        </div>
        <p className='text-xs font-bold self-baseline'>{selectedColour.name}</p>
    </div>
     
  )
}

export default AvailableColours;
