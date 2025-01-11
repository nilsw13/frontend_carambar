import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'

import CreateJoke from './components/outlet-view/CreateJoke'
import JokeWall from './components/outlet-view/JokeWall'





function App() {

  

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-carambar-500 ">
      {/* Header */}
    
      {/* Routes */}
      <main className="flex-grow ">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="create" element={<CreateJoke />} />
          <Route path="jokes" element={<JokeWall />} />
        </Route>
      </Routes>
      </main>

      {/* Footer */}
     
    </div>
  )
}

export default App
