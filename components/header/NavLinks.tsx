import React from 'react'
import { navItems } from '@/constants/nav-items';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu";
import Image from 'next/image';

const NavLinks = () => {
    return (
        <NavigationMenu>
        <NavigationMenuList>
          {navItems.map(item => (
            <NavigationMenuItem key={item.id}>
              <NavigationMenuTrigger>
                <p className='font-bold'>{item.name}</p>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className='flex flex-col space-y-2 p-4'>
                  {item.links.map(link => (
                    <NavigationMenuLink key={link.id} href={link.href}>
                      {link.name}
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    );
}

export function CountryNav() {
    return (
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
                                <NavigationMenuContent className='flex flex-col p-4 bg-primary space-y-2'>
                                    <NavigationMenuLink>
                                        <Image
                                        src="/assets/flags/singapore.svg"
                                        height={10}
                                        width={25}
                                        alt="Singapore flag"
                                        />        
                                    </NavigationMenuLink>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
            </NavigationMenu>
    );
}
export default NavLinks
