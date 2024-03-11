"use client"
import React from 'react'
import {ThemeProvider}     from 'next-themes'
import type { ThemeProviderProps } from 'next-themes/dist/types'

export default function Themes({children, ...props}:ThemeProviderProps) {
  return (
    <ThemeProvider {...props}>
      {children}
    </ThemeProvider>
  )
}
