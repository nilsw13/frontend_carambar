import React, { useCallback, useEffect, useState }  from 'react'
import { AnimatePresence, motion, useMotionValue, useTransform } from 'framer-motion'
import carambar from '../assets/carableu.jpg'
import banner from '../assets/banner.jpg'
import { h1, li, style } from 'framer-motion/client'
import { RotateCcw } from 'lucide-react'
import { useJokes } from '../hooks/useJokes'
import { use } from 'react'


function Hero() {



  const {
    currentJoke,
    setCurrentJoke,
    loading,
    error,
    fetchRandomJoke,
    createJoke,
    clearError
} = useJokes();

  const [isHovered, setIsHovered] = useState(false);

    // Utiliser une valeur motion pour suivre l'échelle (scale)
    const scale = useMotionValue(0)
  
    // Transformer "scale" en "opacity"
    // Quand scale est à 0, opacity est à 0. Quand scale est à 1, opacity est à 1.
    const opacity = useTransform(scale, [0, 1], [0, 1])


    const handleHoverButton = () => {
        console.log('hover') 
        
        return (
            <div className='absolute'>
                <h1>hello</h1>
            </div>
        )

   

    }
    const handleNewJoke = useCallback(async () => {
      console.log("Début handleNewJoke");
      const jokeData = await fetchRandomJoke();
      // jokeData contient déjà les données extraites, pas besoin de .data
      const { question, answer } = jokeData;
      console.log("Question:", question);
      console.log("Réponse:", answer);
  }, [fetchRandomJoke]);

  useEffect(() => {
    handleNewJoke();
  } , [handleNewJoke])

    return (
        <motion.section
        className="relative w-[77%] h-fit mb-[15vh] overflow-hidden bg-carambar-500 "
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        style={{ scale }}
      >
        {/* Conteneur pour centrerl'image */}
        <div className="flex items-center justify-center w-full h-full md:p-6 artboard-horizontal phone-5">
          
          <motion.img
            src={banner}
            alt="Carambar Hero"
            className="object-cover w-full h-auto max-w-full  shadow-xl md:transform md:scale-[0.9] md:w-fit md:rounded-lg"
            style={{
              opacity,
            }}
          />

        

            {/* Conteneur pour le texte */}

           {/* Conteneur pour le texte */}
           {currentJoke && (
    <motion.div
        whileHover={{ scale: 1.1 }}
        className="absolute right-[25%] w-[300px] min-h-[120px]  rounded-lg  p-6 flex flex-col gap-4 backdrop-blur-sm bubble "
    >
        {/* Question avec gestion du texte long */}
        <h1 className="text-xl font-bold leading-tight break-words lg:text-xl text-purple-cam-400 hyphens-auto -rotate-3">
            {currentJoke.question}
        </h1>
        
       
        
        {/* Réponse avec gestion du texte long */}
        <h2 className="text-xl font-bold leading-tight break-words text-purple-cam-400 lg:text-xl hyphens-auto -rotate-3">
            {currentJoke.answer}
        </h2>
    </motion.div>
)}

{/* Bouton de rafraîchissement repositionné */}
<motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ rotate: -360}}
    transition={{
      duration: 0.9,
      ease: "linear",
      type: "spring"
     
    }}
    className="absolute right-[18%] bottom-[20%] bg-white/90 rounded-full p-3 shadow-lg backdrop-blur-sm"
    
>
    <RotateCcw 
        className="text-3xl cursor-pointer text-carambar-500" 
        onClick={handleNewJoke}
        
    />
</motion.div>
                      


        </div>



              


      </motion.section>
    )
  }

export default Hero
