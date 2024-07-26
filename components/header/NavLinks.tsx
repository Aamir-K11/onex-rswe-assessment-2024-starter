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

const NavLinks = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {
                    navItems.map(item => (
                        <NavigationMenuItem key={item.id}>
                            <NavigationMenuTrigger>
                                <p className='font-bold'>{item.name}</p>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul>
                                        {
                                            item.links.map(link => (
                                                <li key={link.id} className='flex flex-col tablet:space-y-2 p-4'>
                                                    <NavigationMenuLink>{link.name}</NavigationMenuLink>
                                                </li>
                                                
                                            ))
                                        }
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    ))
                }
            </NavigationMenuList>
        </NavigationMenu>
    );
}
export default NavLinks
