import React  from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import carambar from '../assets/caramabarhero.jpg'

function Hero() {
    // Utiliser une valeur motion pour suivre l'échelle (scale)
    const scale = useMotionValue(0)
  
    // Transformer "scale" en "opacity"
    // Quand scale est à 0, opacity est à 0. Quand scale est à 1, opacity est à 1.
    const opacity = useTransform(scale, [0.002, 1], [0, 1])
  
    return (
      <motion.section
        className="flex items-center justify-center w-full h-screen overflow-hidden"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        style={{ scale }} // Lie scale à la section
      >
        <motion.img
          src={carambar}
          alt="Carambar Hero"
          className="rounded-lg shadow-lg object-cover w-[80%] h-[70%]"
          style={{
            opacity, // Lie l'opacité à la transformation
          }}
        />
      </motion.section>
    )
  }

export default Hero
