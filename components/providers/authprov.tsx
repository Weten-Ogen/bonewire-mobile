"use client"
import React from 'react'
import { SessionProvider }   from 'next-auth/react'
import { authProps } from '@/types'


export default function AuthProvider({children}:authProps) {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}
