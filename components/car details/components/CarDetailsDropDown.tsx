"use client"

import * as React from "react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Image from "next/image"

const DropDown = ({title}: {title: string}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full"
    >
      <div className="flex items-center justify-between space-x-4 py-4 border-t-2">
        <CollapsibleTrigger asChild>
            <div className="flex w-full items-center justify-between tablet:mx-2">
                <p className="text-md font-semibold">{title}</p>
                <Image
                src="/assets/common/add.svg"
                width={20}
                height={20}
                alt="Add"
                />
            </div>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <div className="rounded-md text-sm pb-2 mx-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

const CarDetailsDropDown = () => {
    return (
        <>
            <DropDown title="Description"/>
            <DropDown title="Product Highlights"/>
            <DropDown title="Delivery & Warranty"/>
        </>
    )
}
export default CarDetailsDropDown;
