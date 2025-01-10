import React from 'react'
import HeroSection from '../components/Hero'
import Actions from '../components/Actions'

function HomePage() {
  return (
    <div>
      <HeroSection />
      <section className="flex flex-row items-center justify-center">
       <Actions/>
      </section>
    </div>
  )
}

export default HomePage
