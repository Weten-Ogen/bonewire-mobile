"use client"
import { avatarProps, btnProps } from '@/types';
import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';


export default function Btn({variant,className,children}:btnProps) {
  return (
    <Button 
    variant={variant}
    type="submit"
    className={cn('', className)}
    >
     {children}
    </Button>
  );
}
