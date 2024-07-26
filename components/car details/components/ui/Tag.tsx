import React from 'react'

const Tag = ({state}: {state: 'new' | 'pre-loved'}) => {
  return (
    <span className={`rounded-full font-bold text-sm p-1 pr-2 pl-2 bg-opacity-30 ${state === "new" ? 'bg-teal text-darkblue' : 'bg-green-500 text-green-700' }`}>
      {state.toUpperCase()}
    </span>
  )
}

export default Tag
