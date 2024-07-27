import { ITesla } from '@/data/common';
import React from 'react';

type Props = Pick<ITesla, 'specifications'>

const Specifications = ({specifications}: Props) => {
  return (
    <div className="flex flex-col py-16">
      <h2 className="pb-6">Specifications</h2>
      {specifications.map((spec, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
          <div className="flex flex-col">
            <p className="font-bold my-2">Exterior</p>
            <div className="grid grid-cols-2 gap-x-12 gap-y-2">
              <span>Body Style</span><span>{spec.exterior.bodyStyle}</span>
              <span>Exterior Colour</span><span>{spec.exterior.exteriorColour}</span>
              <span>Length</span><span>{spec.exterior.length}</span>
              <span>Wheelbase</span><span>{spec.exterior.wheelBase}</span>
              <span>Width</span><span>{spec.exterior.width}</span>
              <span>Full Width</span><span>{spec.exterior.fullWidth}</span>
              <span>Clearance</span><span>{spec.exterior.clearance}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-bold my-2">Interior</p>
            <div className="grid grid-cols-2 gap-x-12 gap-y-2">
              <span>Seating</span><span>{spec.interior.seating}</span>
              <span>Interior Colour</span><span>{spec.interior.interiorColour}</span>
              <span>Head Room Front</span><span>{spec.interior.headRoomFront}</span>
              <span>Head Room Rear</span><span>{spec.interior.headRoomBack}</span>
              <span>Leg Room Front</span><span>{spec.interior.legRoomFront}</span>
              <span>Leg Room Rear</span><span>{spec.interior.legRoomBack}</span>
              <span>Shoulder Room Front</span><span>{spec.interior.shoulderRoomFront}</span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col">
              <p className="font-bold my-2">BEV Performance</p>
              <div className="grid grid-cols-2 gap-x-12 gap-y-2">
                <span>Horsepower</span><span>{spec.bevPerfomance.horsePower}</span>
                <span>MPGe</span><span>{spec.bevPerfomance.mpge}</span>
                <span>Top Speed</span><span>{spec.bevPerfomance.topSpeed}</span>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-bold my-2">Charging</p>
              <div className="grid grid-cols-2 gap-x-12 gap-y-2">
                <span>Electric Range</span><span>{spec.charging.electricRange}</span>
                <span>Battery Size</span><span>{spec.charging.batterySize}</span>
                <span>Cost to charge (full)</span><span>{spec.charging.costOfCharge}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="border border-blue-900 text-[#0036C3] hover:bg-blue-500 hover:text-primary rounded-md px-8 py-4 text-center text-sm max-w-xs self-center mt-8">
        <button>Show All Specifications</button>
      </div>
    </div>
  );
};

export default Specifications;
