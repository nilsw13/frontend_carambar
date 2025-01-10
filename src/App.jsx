import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'

import AllJokesPage from './pages/AllJokesPage'

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-carambar-500">
      {/* Header */}
      
      {/* Routes */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jokes" element={<AllJokesPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
