import ComplexForm from '@/components/pages/complexform/page';
import BlankPage from '@/components/pages/pagelayout/page'
import React from 'react'

function Dashboard() {
  return (
    <div className='grid min-h-screen p-2 text-4xl gap-4'>
    <div className='flex justify-center'>CV Maker</div>
   <content className='grid grid-rows-2'>
      <ComplexForm className=""/>
      <BlankPage className='bg-white text-black min-h-screen w-1/3'/>
    </content>

 
    </div>
  )
}

export default Dashboard;