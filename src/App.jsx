import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'

import CreateJoke from './components/outlet-view/CreateJoke'
import JokeWall from './components/outlet-view/JokeWall'
import Shop from './pages/Shop'
import Header from './components/Header'
import Footer from './components/Footer'
import Separator from './components/utils/Separator'





function App() {

  

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-carambar-500 ">
      {/* Header */}
    <Header />
      {/* Routes */}
      <main className="flex-grow ">
      <Routes>
        <Route path="/frontend_carambar" element={<HomePage />}>
          <Route path="/frontend_carambar/create" element={<CreateJoke />} />
          <Route path="/frontend_carambar/jokes" element={<JokeWall />} />
        </Route>
        <Route path="/frontend_carambar/shop" element={<Shop />} />
      </Routes>
      </main>

      {/* Footer */}
      <div className="relative flex items-center justify-center w-full">
     <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-carambar-700 to-transparent" />
     <Separator title={"Contactez nous"}/>
     </div>

     


      

      <Footer />
    </div>
  )
}

export default App
