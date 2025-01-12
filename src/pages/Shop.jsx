import React from 'react'
import { motion } from 'framer-motion'
import banner from '../assets/eshop1.png'

function Shop() {
  return (
    <div className='flex items-center justify-center w-screen h-screen'>


<img src={banner} alt="illustration eshop en construction" className='w-[60%]  hover:scale-105 transition-all' />

    </div>
  )
}

export default Shop