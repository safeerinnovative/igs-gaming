"use client";
import './globals.css'
import '../assets/css/base.css'
import { Inter } from 'next/font/google'
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Preloader from '@/components/loaders/Preloader';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        // Other Locomotive Scroll options
      });
    }
  }, []);


  return (
    <html lang="en">
      <body className={inter.className}>
        <Preloader/>
      <div ref={scrollRef}>
        {children}
        </div>
      </body>
    </html>
  )
}
