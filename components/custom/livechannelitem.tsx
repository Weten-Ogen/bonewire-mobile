import { cn } from '@/lib/utils';
import { lifechaprops } from '@/types';
import Image from 'next/image';
import React from 'react';
import AvaTar from './avaatar';

export default function LiveChannelItem({game,imageurl,profileimg,title,user,className}:lifechaprops) {
  return (
    <div className={cn('',className)}>
    <Image className='' src={imageurl} alt={`${imageurl}`}/>
    <div className="p-2 flex">
        <div className='pr-2'>
            <AvaTar 

            imageurl={profileimg}
            className='bg-red-500'
            />   
        </div>
        <div>
            <p className='text-sm  font-bold'>
                {title}
            </p>
            <p className='text-sm text-gray-500'>{user}</p>
            <p className='text-sm tex-gray-500'>{game}</p>
        </div>

    </div>
    </div>
  );
}
