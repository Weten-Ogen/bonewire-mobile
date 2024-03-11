import { providersProps } from '@/types';
import React from 'react';
import Navbar from '../custom/navbar';
import SideBar from '../custom/sidebar';
import Themes from './themes';

export default function Providers({children}:providersProps) {
  return (
    <div>
      <Themes 
      attribute='class' 
      defaultTheme='dark' 
      disableTransitionOnChange 
      enableSystem>
        <>
          <Navbar
          className='px-4  bg-yellow-500 py-2 z-10 fixed top-0 left-0 w-full flex items-center justify-between'
          />
          <div className="grid grid-cols-2  gap-8 ">
            <SideBar 
            className='flex gap-16'>
            <>
              {children}
            </>
            </SideBar>
          </div>  
        </>
      </Themes>
    </div>
  );
}
