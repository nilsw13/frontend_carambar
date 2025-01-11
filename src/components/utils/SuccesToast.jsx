import React from 'react'

function SuccesToast({message}) {
  return (
    <div className="">
    <div className="alert alert-success">
      <span>{message}</span>
    </div>
  </div>
  )
}

export default SuccesToast