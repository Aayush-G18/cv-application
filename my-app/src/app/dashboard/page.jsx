"use client"
import ComplexForm from '@/components/pages/complexform/page';
import BlankPage from '@/components/pages/pagelayout/page'
import { useTheme } from 'next-themes';
import React, { useEffect } from 'react'

function Dashboard() {
  const {resolvedTheme} = useTheme();
  useEffect(() => {
    console.log("Theme is:", resolvedTheme);
  }, [resolvedTheme]);

  return (
    <div className='grid  min-h-screen p-2 text-4xl gap-4'>
      <div className='flex justify-center'>CV Maker</div>
      <content className='grid grid-cols-10'>
        <ComplexForm className="col-start-2 col-span-3"/>
        <BlankPage className='bg-white text-black min-h-screen flex justify-center items-start col-start-6 col-span-4 p-4 gap-2'/>
      </content>
    </div>
  )
}

export default Dashboard;