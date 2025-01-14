import React, { useCallback, useEffect, useState }  from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

import banner from '../../public/assets/images/banner.jpg'
import mobil from '../../public/assets/images/perso1.png'
import { RotateCcw } from 'lucide-react'
import { useJokes } from '../hooks/useJokes'


function Hero() {


 
 const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
 

 // state pour stocker l'id de la blague quon affichd ( la precedente de la prochaine :p)
 const [previousJokeId, setPreviousJokeId] = useState(null);
  
 useEffect(() => {
   const handleResize = () => {
     setIsMobile(window.innerWidth < 768);
   };

  
   window.addEventListener('resize', handleResize);

   return () => window.removeEventListener('resize', handleResize);
 }, []);


  const {
    currentJoke,
    fetchRandomJoke,
} = useJokes();

  const [isHovered, setIsHovered] = useState(false);
  

    const scale = useMotionValue(0)
  
   
    const opacity = useTransform(scale, [0, 1], [0, 1])


  


    const handleNewJoke = useCallback(async () => {
      console.log("Début handleNewJoke");
      
      try {
        // On récupère d'abord une blague
        let jokeData = await fetchRandomJoke();
        
        // On vérifie si c'est la même que la précédente
        if (jokeData.id === previousJokeId) {
          console.log("Même blague détectée, on en cherche une autre...");
          // On fait maximum 3 tentatives pour éviter une boucle infinie
          let attempts = 0;
          while (jokeData.id === previousJokeId && attempts < 3) {
            jokeData = await fetchRandomJoke();
            attempts++;
          }
        }
        
        const { id, question, answer } = jokeData;
        
        // On met à jour l'ID précédent
        setPreviousJokeId(id);
        
        console.log("Question:", question);
        console.log("Réponse:", answer);
        
        return jokeData;
        
      } catch (error) {
        console.error("Erreur lors de la récupération de la blague:", error);
      }
    }, [previousJokeId, fetchRandomJoke]);

  

  useEffect(() => {
    handleNewJoke();
  } , [handleNewJoke])

    return (
        <motion.section
        className="md:relative space-y-12  md:w-[77%] md:h-fit mb-[15vh] overflow-hidden bg-carambar-500 "
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        style={{ scale }}
      >
        {/* Conteneur pour centrerl'image */}
        <div className="mt-10 w-[80%] grid gap-8 mx-auto md:flex md:items-center md:justify-center md:h-full md:w-full md:mt-0 md:p-6 artboard-horizontal phone-5">
          
          <motion.img
            key={isMobile ? 'mobile' : 'desktop'} 
            src={isMobile ? mobil : banner}
            alt="Carambar Hero"
            className={`object-cover w-full h-auto max-w-full   md:transform md:scale-[0.9] md:w-fit md:rounded-lg ${isMobile} ? 'shadow-none' : 'shadow-xl'`}
            style={{
              opacity,
            }}
          />

        

           

           {/* Conteneur pour le texte */}
           {currentJoke  && (
    <motion.div
        whileHover={{ scale: 1.1 }}
        className="md:absolute  md:right-[25%] bottom-[15%] md:w-[300px] md:min-h-[120px]  rounded-lg mt-10 mt:0  md:p-6 md:flex md:flex-col md:gap-4 bubble "
    >
        {/* Question avec gestion du texte long */}
        <h1 className="mt-10 text-xl text-yellow-300 break-words md:text-xl md:mt-0 md:font-bold md:leading-tight lg:text-xl md:text-purple-cam-400 hyphens-auto -rotate-3">
            {currentJoke.question}
        </h1>
        
       
        
        {/* Réponse avec gestion du texte long */}
        <h2 className="mb-5 break-words text-md md:text-xl md:font-bold md:leading-tight text-purple-cam-400 lg:text-xl hyphens-auto -rotate-3 md:mb-0">
            {currentJoke.answer}
        </h2>
    </motion.div>
)}

{/* Bouton de rafraîchissement  */}
<motion.div
  whileHover={{ scale: 1.1 }}
  whileTap={{ rotate: isMobile ? 180 : -360 }}
  transition={{
    duration: isMobile ? 0.5 : 0.9, // Animation plus rapide sur mobile
    ease: "linear",
    type: "spring"
  }}

  className={`
    rounded-full p-3 backdrop-blur-sm
    ${isMobile 
      ? 'fixed bottom-6 right-6 z-50 bg-carambar-500 shadow-lg' // Style mobile
      : 'md:absolute md:right-[18%] md:bottom-[20%] md:bg-white/90 md:shadow-lg' // Style desktop
    }
  `}
>
  <RotateCcw
    className={`
      cursor-pointer
      ${isMobile 
        ? 'text-2xl text-white' // monil
        : 'text-sm md:text-3xl text-carambar-500' //desktpo
      }
    `}
    onClick={handleNewJoke}
  />
</motion.div>
                      


        </div>



              


      </motion.section>
    )
  }

export default Hero
