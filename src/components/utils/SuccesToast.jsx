import { AnimatePresence } from 'framer-motion'
import React from 'react'

function SuccesToast({message}) {
  return (
    <div className="">
      <AnimatePresence>
    <div className="p-2 bg-green-300 rounded-lg">
      <span className='text-bold bubble text-purple-cam-400'>{message}</span>
    </div>
    </AnimatePresence>
  </div>
  )
}

export default SuccesToast