import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'All jokes', path: '/jokes' },
    
  ]

  return (
    <header className=" mt-8 text-white w-fit">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <h1 className="text-2xl font-bold">Carambar</h1>
        <nav>
          <ul className="flex gap-4">
            {navItems.map((item, index) => (
              <li key={index} className="hover:text-yellow-300">
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
