"use client";
import '../assets/css/base.css'
import './globals.css'
import { Inter } from 'next/font/google'
import { useEffect, useRef, useState } from 'react';
import Preloader from '@/components/loaders/Preloader';
import { usePathname } from 'next/navigation';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

const [loading, setloading] = useState(true);

useEffect(() => {
setTimeout(()=>{
  setloading(false);
},3000)

}, [])



  const scrollRef = useRef(null);
  useEffect(() => {
    import("locomotive-scroll").then(locomotiveModule => {
      const scroll = new locomotiveModule.default({
        el: scrollRef.current,
        smooth: true,
        smoothMobile: false,
      })
    })
  }, [])



  return (
    <html lang="en">
      <body className={inter.className}>
       {/* {
        loading ?
        <Preloader/>
        :
<div ref={scrollRef}>
          {children}
          </div>
       } */}
      <div ref={scrollRef}>
          {children}
          </div>
     
      </body>
    </html>
  )
}
