import { categoriesitem } from '@/types'
import Image from 'next/image'
import React from 'react'

export default function CategoriesItem({img,className,tag1,tag2,title,viewers}:categoriesitem) {
  return (
    <div className='p-2'>
    <Image
        className=''
        src={img}
        alt={`${img}`}
        width='261'
        height='350'
    />
        <div className=''>
        <p className='font-bold'>{title}</p>
        <p className='text-sm text-gray-500 py-[2px]'>{viewers}</p>
        <div className='flex items-center gap-2'>
            <p className='text-sm bg-gray-500 inline-block p-[2px px-3 rounded-full'>{tag1}</p>
        {
            tag2 &&
            <p className="text-sm bg-gray-500 inline-block p-[2px px-3 rounded-full">{tag2}</p>

        }
        </div>
        </div>
    </div>
  )
}
