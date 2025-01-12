import React, { useCallback, useEffect, useRef } from 'react'
import HeroSection from '../components/Hero'
import Actions from '../components/Actions'
import Words from '../components/Words'
import { motion } from 'framer-motion'
import PrintJoke from '../components/PrintJoke'
import { Typewriter } from 'react-simple-typewriter'
import { RotateCcw } from 'lucide-react'
import Separator from '../components/utils/Separator'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { useJokes } from '../hooks/useJokes'
import { use } from 'react'

function HomePage() {

  const {fetchJokes, jokes} = useJokes();


  // fonction usecallback pour éviter recuperer les blagues à chaque fois



  return (
    <div>
      <div className='flex flex-col items-center justify-center '>
      

      <HeroSection/>

      {/* title */}  

      <div className="relative flex items-center justify-center w-full">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-carambar-700 to-transparent" />
        
        {/* Titre "Actions" */}
        <Separator title={"Actions"}/>
    </div>


       
     <div className='mt-[10vh] mb-[20vh] flex flex-col items-center justify-center'>
        <Actions/>
        
      
     </div>

    <section id="createDisplay">
     <div className="w-full h-fit  max-w-4xl p-10 mt-8 text-center  rounded-lg mb-[20vh]">
            <Outlet />
          </div>
    </section>

     


      </div>


     
      
    </div>
  )
}

export default HomePage
