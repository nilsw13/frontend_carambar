import { a, div } from 'framer-motion/client'
import React, { useCallback, useEffect } from 'react'
import { useJokes } from '../../hooks/useJokes'
import { motion } from 'framer-motion'
import { Trash2 } from 'lucide-react';
import JokeCard from '../utils/JokeCard';
import { NavLink } from 'react-router-dom';

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
          
          {/* Grille  */}
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

<div className='grid items-center grid-cols-1 gap-6 align-middle transition-all bg-red-400 border rounded-lg shadow-lg border-purple-cam-400 hover:scale-105 ' >
            

        <div className="flex-grow space-y-8">
        <p className="text-xl font-bold text-yellow-200 bubble">Afficher ma blague au mur</p>
        <NavLink to="/create" >
        <p
        className="p-2 mx-auto mt-2 text-sm transition-all bg-yellow-200 border rounded-lg shadow-lg hover:scale-105 w-fit bubble text-purple-cam-400">Mon post-it</p>
        </NavLink>
      </div>


</div>
          


          </div>
        </div>
      
      );
}



export default JokeWall