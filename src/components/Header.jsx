import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo2.png'
import { ShoppingCartIcon } from 'lucide-react'
import { div } from 'framer-motion/client'
import { motion } from 'framer-motion'

function Header() {
  const navItems = [
    { name: 'Acceuil', path: '/' },
    { name: 'Mur de blagues', path: '/jokes' },
    { name: 
        
      <motion.div
        whileHover={{ scale: 1.1, transform : 'rotate(-15deg)' }}
        whileTap={{ scale: 0.9 }}
        className='flex'
      >
        <ShoppingCartIcon/> 
        </motion.div>,
    
    path: '/shop' }
    
    
  ]

  return (
    <div className=" w-2/3 bg-yellow-200 navbar h-[12vh] mt-10 mx-auto rounded-lg shadow-lg flex ">
        <div className='flex-1'>
          <a href="" className=''>
        <img src={logo} className='h-32 transition-all left-8 w-52 hover:scale-110' />
        </a>
        </div>

        <nav className="flex flex-row items-center justify-center gap-8 pr-10 text-center"> 
            {navItems.map((item, index) => (

                
                <Link
                key={index}
                to={item.path}
                className="text-lg font-bold transition-all text-carambar-500 hover:text-carambar-700 bubble hover:scale-110 "
                >
                {item.name}
                </Link>
            ))}
        </nav>
  </div>
  )
}

export default Header
