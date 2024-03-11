import React from 'react';
import Remote from '@/public/assets/remote.png'
import Paint from '@/public/assets/paint.png'
import Mic from '@/public/assets/mic.png'
import HeadPhone from '@/public/assets/headphones.png'
import Trophy from '@/public/assets/trophy.png'
import Image from 'next/image';


export default function IconBar() {
  return (
    <div className='p-2 md:p-8'>
    <div className='grid sm:grid-cols-3 lg:grid-cols-5 gap-4 border-t border-gray-700 py-8'>
        <div className='w-full h-[50px] bg-teal-500  flex justify-between items-center px-4 rounded-lg'>
        <p 
        className="text-2xl font-bold"
        >Games</p>
        <Image 
        sizes='60'
        src={Remote}
        alt={`${Remote}`}/>
        </div>

        <div 
        className='w-full h-[50px] bg-teal-500 flex justify-between items-center px-4 rounded-lg'>
        <p 
        className="text-2xl font-bold"
        >Paint</p>
        <Image 
        sizes='60'
        src={Paint}
        alt={`${Paint}`}/>
        </div>
        <div 
        className='w-full h-[50px] flex  bg-teal-500 justify-between items-center px-4 rounded-lg'>
        <p className="text-2xl font-bold">Microphone</p>
        <Image 
        sizes='60'
        src={Mic}
        alt={`${Mic}`}/>
        </div>
        <div className='w-full h-[50px] bg-teal-500 flex justify-between items-center px-4 rounded-lg'>
        <p className="text-2xl font-bold">Headphone</p>
        <Image 
        sizes='60'
        src={HeadPhone}
        alt={`${HeadPhone}`}/>
        </div>
        <div className='w-full h-[50px]  bg-teal-500 flex justify-between items-center px-4 rounded-lg'>
        <p className="text-2xl font-bold">Trophy</p>
        <Image 
        sizes='60'
        src={Trophy}
        alt={`${Trophy}`}/>
        </div>
       
    </div>
    </div>
  );
}
