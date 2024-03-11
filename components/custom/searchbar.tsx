"use client"
import { cn } from '@/lib/utils';
import { searchProps } from '@/types';
import React from 'react';
import { Input } from '../ui/input';
import Btn from './btn';
import {SearchIcon} from 'lucide-react'

export default function SearchBar({className,inputClass,btnClass}:searchProps) {
  return (
    <div className={cn('',className)}>
        <Input 
      
        name='query'
        className={cn('focus:outline-none border-none',inputClass)}
        placeholder="Enter text here "
        type="text" 
        />
        <Btn 
        variant='ghost'
        className={cn('',btnClass)}>
            <SearchIcon className=""/>
        </Btn>
    </div>
  );
}
