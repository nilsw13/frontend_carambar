import React from 'react'
import Header from '../components/main/Header'
import Button from '../components/main/Button'

function HomePage() {
  return (
    <>

    {/* nav header*/}
        <div className='flex flex-col items-center justify-center mt-4'>
            <Header />
        </div>

    {/* main content */}

    <div className='flex flex-col items-center justify-center w-screen h-screen'>
      {/* title */}
      <h1 className='font-bold text-white text-7xl'>Carambar & co</h1>


      {/* action button */}
      <div className='flex flex-row items-center justify-center gap-4 mt-4'>
        <Button path={"/jokes/random"} title={"get a joke"} />
        <Button path={"/jokes"} title={"all jokes"} />
        <Button path={"/jokes/create"} title={"Submit your joke"} />
        <Button path={"/jokes/13"} title={"get joke number 13"} />
      </div>
      </div>

      
    </>
  )
}

export default HomePage