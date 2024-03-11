"use client"
import { cn } from '@/lib/utils';
import { navProps } from '@/types';
import React from 'react';
import SearchBar from './searchbar';
import AvaTar from './avaatar';
import {Menu, SidebarClose} from 'lucide-react'
import Navlink from './navlinks';
import MobileMenu from './mobilemenu';


export default function Navbar({className}:navProps) {
  const [nav , setnav] = React.useState(false);
  const handleNav = () => {
    setnav(prev => !prev);
  }

  return (
    <nav className={cn('border border-b-2 border-b-slate-700',className)}>
        {/* logo */}
        <Navlink
          className="whitespace-normal capitalize tracking-wider font-bold"
          name='mavio'
          reff="/"
        />
        {/* searchbar */}
        <SearchBar 
        className='border border-gray-100 flex rounded-lg '
        btnClass='text-gray-500 opacity-30 hover:opacity-90 '
        inputClass='focus:outline-none border-none bg-transparent  '
        />
        <div className='flex items-center gap-2'>
          {/* avatar */}
          <AvaTar
            className=''
            imageurl=''
          />
          {/* menubtn */}
          
          
          <Menu 
          className="cursor-pointer"
          onClick={handleNav}
          />
          
        </div>
        {nav &&
       <MobileMenu 

       handleNav={handleNav}/>
       }
    </nav>
  );
}
