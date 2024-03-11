"use client"
import { cn } from '@/lib/utils'
import { themeswitch } from '@/types'
import React from 'react'
import { Button } from '../ui/button'
import { useTheme } from 'next-themes'


export default function ThemesSwitch({className}:themeswitch) {
    const{setTheme} = useTheme();
    const [state,setState] = React.useState('dark');
    const [active,setActive] = React.useState('');


  return (
    <div className={cn('w-full p-8 cursor-pointer ',className)}>
       <div className='flex items-center gap-8 justify-between w-full capitalize mb-5 whitespace-normal bg-teal-500 p-4 divide-x-2 rounded-sm divide-gray-100'>

        <p id='system' className={`active:bg-teal-500 hover:-translate-y-0.5 focus:bg-teal-500 p-2 ${active === 'system' ? 'underline underline-offset-2 font-bold': 'opacity-50 '}`} onClick={() =>{ setState('system')
            setActive(prev => 'system')
    }}>system</p>
        <p id='light' className={`active:bg-teal-500 hover:-translate-y-0.5 focus:bg-teal-500 p-2 ${active === 'light' ? 'underline underline-offset-2 font-bold': 'opacity-50 '}`} onClick={() => {
            setState('light')
            setActive(prev => 'light')
        }}>light</p>
        <p  id='dark' className={`active:bg-teal-500 hover:-translate-y-0.5 focus:bg-teal-500 p-2 ${active === 'dark' ? 'underline underline-offset-2 font-bold': 'opacity-50 '}`} onClick={() => {
            setState('dark') 
            setActive('dark')
        }}>dark</p>
       </div>
        
       <div className=' '>
        <Button onClick={()=> setTheme(state)} 
        className='capitalize tracking-wider  whitespace-normal' variant={active=== 'light' ? 'default': 'ghost'}>change</Button>
       </div>
    </div>
  )
}
