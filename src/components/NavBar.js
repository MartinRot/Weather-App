import React from 'react'
import { FaCloudShowersHeavy } from 'react-icons/fa';

const NavBar = () => {
  return (
      

<div className="flex flex-wrap content-start place-items-center">
  <section className="relative ">      
    <nav className="flex justify-between bg-gray-900 text-white w-screen">
      <div className="px-5 xl:px-12 py-6 flex w-full items-center justify-center">   

        <p className="text-3xl font-bold font-heading">
            NINJA WEATHER 
        </p>       
        <FaCloudShowersHeavy className='ml-8 w-8 h-8'/>

      </div>
    </nav>    
  </section>
</div>

  )
}

export default NavBar