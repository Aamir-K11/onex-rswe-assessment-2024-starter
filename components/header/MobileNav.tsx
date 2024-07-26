"use client";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
  
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { navItems } from '@/constants/nav-items';

const MobileNav: React.FC = () => {
  return (
    <Sheet>
     <SheetTrigger asChild>
     <Image
          src="/assets/common/hamburger.svg"
          alt="hamburger icon"
          width={25}
          height={25}
          className="invert-colors mobile:hidden"
      />
      </SheetTrigger>
      <SheetContent
       className="flex flex-col justify-start items-center bg-primary"
      >
      <ul className="space-y-8">
        <li>
          <Link href="/login">
            <p className='text-sm font-semibold'>Log In/Sign Up</p>
          </Link>
        </li>
        <li>
        <NavigationMenu className="border border-gray-400 border-opacity-45 rounded-sm px-6">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                <Image
                                 src="/assets/flags/singapore.svg"
                                 height={10}
                                 width={25}
                                 alt="Singapore flag"
                                />
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
            </NavigationMenu>
        </li>
        <li>
        <NavigationMenu>
                <NavigationMenuList className="flex flex-col">
                    {
                        navItems.map(item => (
                            <NavigationMenuItem key={item.id}>
                                <NavigationMenuTrigger>
                                    <p className='font-bold'>{item.name}</p>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>
                                        <div className='flex flex-col tablet:space-y-2 p-4'>
                                            {
                                                item.links.map(link => (
                                                    <Link key={link.id} href={link.href} className='text-sm font-bold underline'>
                                                        {link.name}
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                    </NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        ))
                    }
                </NavigationMenuList>
        </NavigationMenu>
        </li>
      </ul>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav;
