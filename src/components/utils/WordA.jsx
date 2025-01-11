import { motion, useTransform } from 'framer-motion'
import React from 'react'

function WordA({children, range, progress}) {
  
    const opacity = useTransform(progress, range, [0, 1], {clamp:true})
  
    return (
        <>

        <span className='relative mt-2 mr-2 font-bold '>
            <span className='absolute shadow-lg opacity-0'></span>
        <motion.span 
        
        style={{ opacity: opacity, color: 'white', fontSize: '2.5rem' }}>


            {children}
            
        </motion.span>
        </span>
        </>
  )
}

export default WordA