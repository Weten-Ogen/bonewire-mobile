"use client"
import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { authProps } from '@/types';
import { signOut } from 'next-auth/react';

export default function LogOutBtn({className,children}:authProps) {
  return (
    <Button 
    onClick={() => signOut()}
    className={cn('',className)}
    >
        {children}
    </Button>
  );
}
