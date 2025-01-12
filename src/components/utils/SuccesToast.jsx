import React from 'react'

function SuccesToast({message}) {
  return (
    <div className="">
    <div className="p-2 bg-green-300 rounded-lg">
      <span className='text-bold bubble text-purple-cam-400'>{message}</span>
    </div>
  </div>
  )
}

export default SuccesToast