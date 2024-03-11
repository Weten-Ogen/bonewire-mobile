"use client"
import { cn } from '@/lib/utils';
import { avatarProps } from '@/types';
import React from 'react';
import { Avatar, AvatarImage } from '../ui/avatar';

export default function AvaTar({className,imageurl}:avatarProps) {
  return (
    <Avatar className={cn('',className)}>
        <AvatarImage
            className=""
            src={imageurl}
        />
    </Avatar>
  );
}
