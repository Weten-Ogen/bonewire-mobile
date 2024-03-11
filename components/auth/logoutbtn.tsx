"use client"
import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { authProps } from '@/types';
import {signIn} from 'next-auth/react'


export default function LogInBtn({className,children}:authProps) {
  return (
    <Button 
    onClick={() => signIn('google')}
     className={cn('',className)}
    >{children}
    
    </Button>
  );
}
