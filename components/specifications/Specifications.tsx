import React from 'react'

const Specifications = () => {
  return (
    <div className='flex flex-col py-16'>
      <h2 className='pb-6'>Specifications</h2>
      <div className='flex justify-between desktop:mr-36'>
        <div className='flex flex-col'>
            <p className='font-bold my-2'>Exterior</p>
            <table className='table-auto table-cell-spacing'>
              <tbody>
                <tr>
                  <td>Body Style</td>
                  <td>Hatchback</td>
                </tr>
                <tr>
                  <td>Exterior Colour</td>
                  <td>Blue</td>
                </tr>
                <tr>
                  <td>Length</td>
                  <td>175”</td>
                </tr>
                <tr>
                  <td>Wheelbase</td>
                  <td>106”</td>
                </tr>
                <tr>
                  <td>Width</td>
                  <td>69.7”</td>
                </tr>
                <tr>
                  <td>Full Width</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>Clearance</td>
                  <td>6”</td>
                </tr>
              </tbody>
            </table>
        </div>
        <div className='flex flex-col'>
            <p className='font-bold my-2'>Interior</p>
            <table className='table-auto table-cell-spacing'>
              <tbody>
                <tr>
                  <td>Seating</td>
                  <td>5 adults</td>
                </tr>
                <tr>
                  <td>Interior Colour</td>
                  <td>N/A</td>
                </tr>
                <tr>
                  <td>Head Room Front</td>
                  <td>41”</td>
                </tr>
                <tr>
                  <td>Head Room Rear</td>
                  <td>37”</td>
                </tr>
                <tr>
                  <td>Leg Room Front</td>
                  <td>42”</td>
                </tr>
                <tr>
                  <td>Leg Room Rear</td>
                  <td>33”</td>
                </tr>
                <tr>
                  <td>Shoulder Room Front</td>
                  <td>54”</td>
                </tr>
              </tbody>
        </table>
        </div>
        <div className='space-y-6'>
        <div className='flex flex-col'>
            <p className='font-bold my-2'>BEV Performance</p>
            <ul className='space-y-2'>
                <li>Body Style</li>
                <li>Exterior Colour</li>
                <li>Length</li>
                <li>Wheelbase</li>
            </ul>
        </div>
        <div className='flex flex-col'>
            <p className='font-bold my-2'>BEV Performance</p>
            <ul className='space-y-2'>
                <li>Body Style</li>
                <li>Exterior Colour</li>
                <li>Length</li>
                <li>Wheelbase</li>
            </ul>
        </div>
        </div>
      </div>
      <div className='border border-blue-900 text-[#0036C3] hover:bg-blue-500 hover:text-primary rounded-md px-8 py-4 text-center text-sm max-w-xs self-center'>
        <button>Show All Specifications</button>
      </div>
    </div>
  )
}

export default Specifications
