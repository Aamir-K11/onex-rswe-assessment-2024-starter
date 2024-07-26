import React from 'react';
import Image from 'next/image';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"
import MobileNav from './MobileNav';
import NavLinks from './NavLinks';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className='flex w-full justify-between items-center pt-6 px-4 mobile:px-4 tablet:px-8 laptop:px-16 desktop:px-32'>
      <div className='flex space-x-1 tablet:space-x-2'>
        <Image
            src="/favicon.svg"
            height={8}
            width={120}
            alt="EVFY logo"
        />
        <div className='max-mobile:hidden'>
        <NavLinks/>
        </div>
      </div>
      <div>
        <div className='flex justify-center items-center space-x-2 max-mobile:hidden'>
        <NavigationMenu>
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
            <Link href="/login">
              <p className='text-sm font-semibold'>Log In/Sign Up</p>
            </Link>
        </div>
      </div>  
      <MobileNav/>
    </nav>
  )
}

export default Header
