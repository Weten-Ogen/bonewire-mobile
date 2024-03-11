"use client"
import { SidebarClose } from 'lucide-react'
import React from 'react'
import Navlink from './navlinks'
import { mobilemenu } from '@/types'

export default function MobileMenu({handleNav}:mobilemenu) {
  return (
    <aside className='absolute flex flex-col justify-center text-white inset-0 w-full bg-black/80 min-h-screen  z-20'>
          <div  className='flex flex-col  text-lg items-center gap-4 text-white capitalize tracking-wider font-bold cursor-pointer text-justify '>
            <Navlink 
            onclick={() => handleNav()}
            className=''
            reff='/'
            name='mavio'
            />
           <Navlink 
            onclick={() => handleNav()}

            className=" opacity-50 hover:opacity-90 transition-opacity duration-300"
            reff="/" 
            name="home"/>
           
            <Navlink 
            onclick={() => handleNav()}

            className=" opacity-50 hover:opacity-90 transition-opacity duration-300"
            reff="/settings" 
            name="settings"/>
            <Navlink 
            onclick={() => handleNav()}

            className=" opacity-50 hover:opacity-90 transition-opacity duration-300"
            reff="/account" 
            name="account"/>
           
            <SidebarClose
            className='cursor-pointer' 
            onClick={() => handleNav()}
            />
        </div>
        
        </aside>
  )
}
