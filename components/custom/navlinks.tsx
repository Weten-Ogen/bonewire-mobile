"use client"
import { cn } from '@/lib/utils'
import {navlinksprops } from '@/types'
import Link from 'next/link'
import React from 'react'

export default function Navlink({className,name,reff,onclick}:navlinksprops) {
  return (
    <Link 
    onClick={onclick}
    className={cn('',className)} 
    href={reff}>
    
        {name}
    </Link>
  )
}
