import React from 'react'
import HeroSection from '../components/Hero'
import Actions from '../components/Actions'
import Separator from '../components/utils/Separator'
import { Outlet } from 'react-router-dom'
import { useJokes } from '../hooks/useJokes'

function HomePage() {

  const {fetchJokes, jokes} = useJokes();


  // fonction usecallback pour éviter recuperer les blagues à chaque fois



  return (
    <div>
      <div className='flex flex-col items-center justify-center '>
      

      <HeroSection/>

       

      <div className="relative flex items-center justify-center w-full md:mt-[20vh]">
         {/* ligne decorative separateur */}
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-carambar-700 to-transparent" />
        
        {/* Titre "Actions" */}
        <Separator title={"Actions"}/>
    </div>


       
     <div className='mt-[10vh] mb-[4vh] flex flex-col items-center justify-center'>
        <Actions/>
        
      
     </div>

    <section id="createDisplay">
     <div className="w-full h-fit  max-w-4xl p-10  text-center  rounded-lg mb-[20vh]">
            <Outlet />
          </div>
    </section>

     


      </div>


     
      
    </div>
  )
}

export default HomePage
