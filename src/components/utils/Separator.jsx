import React from 'react'
import { motion } from 'framer-motion'

function Separator({title}) {
  return (
    <motion.div 
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="relative px-8 py-2 rounded-full bg-carambar-100"
>
    <h2 className="p-2 text-2xl font-bold transform bg-white text-purple-cam-400 -rotate-2 bubble">
        {title}
    </h2>
   
    <div className="absolute w-3 h-3 transform -translate-y-1/2 rounded-full -left-4 top-1/2 bg-carambar-500" />
    <div className="absolute w-3 h-3 transform -translate-y-1/2 rounded-full -right-4 top-1/2 bg-carambar-500" />
</motion.div>
  )
}

export default Separator