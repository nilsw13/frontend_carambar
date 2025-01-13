import React, { useState, useEffect } from 'react'
import { createPath, Link, NavLink } from 'react-router-dom'
import logo from '../../public/assets/images/logo2.png'
import { MenuIcon, XIcon, ShoppingCartIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { nav } from 'framer-motion/client'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  // Gestionnaire de redimensionnement de fenêtre avec un debounce
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])


  const handleScrollToSection = (path, sectionId) => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }

    setTimeout(() => {
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        targetSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 100); 
  };










  const navItems = [
    { name: 'Accueil', path: '/frontend_carambar' },
    { name: 'Créer une blague', path: '/frontend_carambar/create',  sectionId: 'createDisplay'  },
    { name: 'Mur de blagues', path: '/frontend_carambar/jokes', sectionId: 'createDisplay'  },
    {
      name: (
        <motion.div

          whileHover={{ scale: 1.1, rotate: -15 }}
          whileTap={{ scale: 0.9 }}
          className='flex'
        >
          <ShoppingCartIcon />
        </motion.div>
      ),
      path: '/frontend_carambar/shop'
    }
  ]

  return (
    <div className="relative md:w-2/3 w-[26vh] bg-yellow-200 navbar h-[6vh] md:h-[12vh] mt-10 mx-auto rounded-lg shadow-lg flex items-center justify-between px-4">
      <div className='flex-1'>
        <Link to="/frontend_carambar" className=''>
          <img src={logo} className='w-32 h-20 transition-all md:h-32 left-8 md:w-52 hover:scale-110' alt="Logo" />
        </Link>
      </div>

      {/* Bouton Menu Hamburger pour Mobile */}
      {isMobile && (
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="z-50 text-carambar-500"
        >
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </motion.button>
      )}

      {/* Menu Navigation Desktop */}
      {!isMobile && (
        <nav className="flex flex-row items-center justify-center gap-8 pr-10 text-center">
          {navItems.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              onClick={() => item.sectionId && handleScrollToSection(item.path, item.sectionId)}
              className="font-bold transition-all text-md text-carambar-500 hover:text-carambar-700 bubble hover:scale-110"
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      )}

      {/* Menu Mobile avec Animation */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 z-40 flex flex-col items-center justify-center w-2/3 h-screen gap-8 bg-yellow-200 shadow-xl"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className="text-xl font-bold text-carambar-500 hover:text-carambar-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Header
