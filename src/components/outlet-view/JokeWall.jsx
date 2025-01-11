import { div } from 'framer-motion/client'
import React, { useCallback, useEffect } from 'react'
import { useJokes } from '../../hooks/useJokes'

function JokeWall() {

    const {fetchJokes, jokes} = useJokes();

    

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchJokes();
            console.log(response)
            const {question, answer} = response[0];
            console.log("Question:", question);
            console.log("Réponse:", answer);
            console.log("Jokes:", jokes);
        };
        fetchData();
    }, [fetchJokes])


    return (
        <div className="container p-6 mx-auto">
          <h1 className='text-4xl font-bold text-purple-cam-400/60 bubble mb-[10vh]'>
                Mur des blagues
            </h1>
          
          {/* Grille responsive */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jokes.map((item, index) => (
              <div 
                key={index} 
                className="overflow-hidden transition-shadow duration-300 rounded-lg shadow-xl bg-purple-cam-400 bg-carambar-100 hover:shadow-xl"
              >
                {/* Carte individuelle de blague */}
                <div className="flex flex-col h-full p-6">
                  {/* Question avec fond différent */}
                  <div className="p-4 mb-4 bg-yellow-200 rounded-lg">
                    <h2 className="text-xl font-medium text-carambar-800 bubble text-purple-cam-400">
                      {item.question}
                    </h2>
                  </div>
                  
                  {/* Réponse */}
                  <div className="mt-auto">
                    <p className="text-xl italic font-medium text-yellow-200 bubble">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default JokeWall