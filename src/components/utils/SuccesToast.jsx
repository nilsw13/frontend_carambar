import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'

function SuccesToast({message}) {
  return (
    <div className="">
      <AnimatePresence>
        <NavLink to="/jokes">
    <div className="p-2 bg-green-300 rounded-lg">
      <span className='text-bold bubble text-purple-cam-400'>{message}</span>
    </div>
    </NavLink>
    </AnimatePresence>
  </div>
  )
}

export default SuccesToast