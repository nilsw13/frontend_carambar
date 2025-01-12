import { a, div } from 'framer-motion/client'
import React, { useCallback, useEffect } from 'react'
import { useJokes } from '../../hooks/useJokes'
import { motion } from 'framer-motion'
import { Trash2 } from 'lucide-react';
import JokeCard from '../utils/JokeCard';

function JokeWall() {

    const {fetchJokes, jokes, deleteJokeById, addALike} = useJokes();

    

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetchJokes();
          console.log('Response complète:', response);
          
          // Vérifie si response.data existe ou si response est directement le tableau
          const jokesArray = response.data || response;
          
          if (Array.isArray(jokesArray)) {
            jokesArray.forEach(element => {
              const { question, answer, isUserCreated } = element;
              console.log("Question:", question);
              console.log("Réponse:", answer);
              console.log("Est-ce une blague de l'utilisateur:", isUserCreated);
            });
          } else {
            console.error("Les données reçues ne sont pas un tableau:", jokesArray);
          }
        } catch (error) {
          console.error("Erreur lors de la récupération des blagues:", error);
        }
      };
  
      fetchData();
    }, [fetchJokes]);

    const handleDelete = async (jokeId) => {
      await deleteJokeById(jokeId);
      fetchJokes();
      return jokeId;
    }

    const handleLike = async (jokeId) => {
      
      try {
        addALike(jokeId);
        fetchJokes();
      } catch (error) {
        console.error("Erreur lors de l'ajout d'un like:", error);
      }
      
    }


    return (
        <div className="container p-6 mx-auto">
          <h1 className='text-4xl font-bold text-purple-cam-400/60 bubble mb-[10vh]'>
                Mur des blagues
            </h1>
          
          {/* Grille responsive */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jokes
          .sort((a, b) => b.countOfLikes - a.countOfLikes)
          .map((joke) => (
          <JokeCard
            question={joke.question}
            answer={joke.answer}
            countOfLikes={joke.countOfLikes}
            key={joke.id}
            joke={joke}
            onLike={handleLike}
            onDelete={handleDelete}
            
           
          />
        ))}

            
          </div>
        </div>
      );
}



export default JokeWall