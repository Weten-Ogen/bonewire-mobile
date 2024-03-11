import { cn } from '@/lib/utils';
import { channelProps, sidebar } from '@/types';
import React from 'react';
import Navlink from './navlinks';
import  {PlaySquare,Dot, MonitorPlay} from 'lucide-react'
import { rec_channels,top_channels } from '@/data/data';
import Image from 'next/image';


export default function SideBar({className,children}:sidebar) {
  return (
    <article className={cn('flex gap-24',className)}>
        <div className='fixed inset-0 w-14 sm:w-16  xl:w-[15rem] h-screen overflow-y-scroll p-2 bg-red-600  '>



            <div className="flex justify-center mt-20 flex-row-reverse items-center ">
                <p className='hidden xl:flex uppercase font-bold  text-sm text-white my-4 gap-2 whitespace-normal  tracking-wider ' >
                    recommend channels
                </p>
                <p className="text-white  ">
                    <PlaySquare/>
                </p>
            </div>
            <div className="">
                {rec_channels.map((item:channelProps,index) => {
                    return (
                    <div 
                    className="inline-flex items-center justify-between   w-full py-[2px]"
                    key={index}
                    >
                    <div>
                        <Image
                            className="" 
                            src={item.avatar}
                            width='50'
                            height='50'
                            alt={item.username}
                        />
                    </div>   
                    <div className='hidden xl:flex text-white whitespace-normal xl:flex-col   '>
                        <p className="">
                        {item.username}
                        </p>
                        <p className='text-sm text-gray-200'>{item.game}
                        </p>
                    </div>
                    <p className="hidden xl:flex items-center">
                        <Dot
                        size={40}
                        color='blue'
                        className=""
                        />
                        {item.rank}K
                    </p>
                    
                    </div>)
                })}

            </div>
            <div className="flex justify-center mt-5 flex-row-reverse items-center gap-4 ">
                <p className='hidden xl:flex uppercase font-bold  text-sm text-white  whitespace-normal  tracking-wider my-4' >
                    top channels
                </p>
                <p className="text-white  ">
                    <MonitorPlay/>
                </p>
            </div> 
            <div className="">
                {top_channels.map((item:channelProps,index) => {
                    return (
                    <div 
                    className="inline-flex items-center justify-between   w-full py-[2px]"
                    key={index}
                    >
                    <div>
                        <Image
                            className="" 
                            src={item.avatar}
                            width='50'
                            height='50'
                            alt={item.username}
                        />
                    </div>   
                    <div className='hidden xl:flex text-white whitespace-normal xl:flex-col   '>
                        <p className="">
                        {item.username}
                        </p>
                        <p className='text-sm text-gray-200'>{item.game}
                        </p>
                    </div>
                    <p className="hidden xl:flex items-center">
                        <Dot
                        size={40}
                        color='blue'
                        className=""
                        />
                        {item.rank}K
                    </p>
                    
                    </div>)
                })}

            </div>
        </div>
        <div className=' '>{children}</div>           
    </article>
  );
}
