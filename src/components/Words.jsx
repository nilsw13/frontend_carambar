import { useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import WordA from './utils/WordA';

function Words({ value }) {
  const element = useRef(null);

  console.log("Valeur recue de value:", value);
  
  
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['end end', 'start start']
  });

  const words = value.split(' ');
 

  return (
    <motion.div 
    
    ref={element}
    style={{opacity: scrollYProgress}}
  >
    {/* Conteneur flex pour organiser les mots */}
    <div className='flex flex-shrink-0 w-full'>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);

        return (
          <WordA 
            key={i} 
            range={[start, end]} 
            progress={scrollYProgress}
          >
            <span className='w-full text-5xl font-extrabold bubble'  >{word}</span>
          </WordA>
        );
      })}
    </div>
  </motion.div>
  );
}

export default Words;