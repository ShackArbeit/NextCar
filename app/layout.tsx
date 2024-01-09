import type { Metadata } from 'next'
import { Navbar } from '@/components'
import {Footer} from '@/components'
import './globals.css'



export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
