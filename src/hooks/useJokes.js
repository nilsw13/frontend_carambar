import { useCallback, useState } from "react";
import api from "../services/api/axios";
import { sub } from "framer-motion/client";

export function useJokes() {
    
    // we define states variables 

    const [jokes, setJokes] = useState([])
    const [currentJoke, setCurrentJoke] = useState(null)

    /// we define loading and error states
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)



    // we define a function to fetch jokes
    const fetchJokes = useCallback(async() => {
        setLoading(true)
        setError(null)
        try {
            const response = await api.get('/jokes');
            const jokesData = response.data.data;
            setJokes(jokesData);
            return jokesData;
        } catch (error) {
            setError(error.response?.data?.message || "Une erreur est survenue");
        } finally {
            setLoading(false)
        }
    }, []);


    // we define a function to fetch a random joke

    const fetchRandomJoke = useCallback(async() => {
        setLoading(true)
        setError(null)
        try {
            const response = await api.get('/jokes/random');
            const jokeData = response.data.data;
            setCurrentJoke(jokeData);
            return jokeData;
        } catch (error) {
            setError(error.response?.data?.message || "Une erreur est survenue");
        } finally {
            setLoading(false)
        }
    }, []);


    // we define a function to create a joke

    const submitJoke = useCallback(async(jokeData) => {
        setLoading(true)
        setError(null)
        try {
            const response = await api.post('/jokes/create', jokeData);
            const joke = response.data.data;
            setJokes((prevJokes) => [joke, ...prevJokes]);
            return joke;
        } catch (error) {
            setError(error.response?.data?.message || "Une erreur est survenue");
        } finally {
            setLoading(false)
        }
    }, []);


    // we define a function to delete a joke by it's id

   
const deleteJokeById = useCallback(async (jokeId) => {
    setLoading(true);
    setError(null);
    try {
        console.log("joke to delete : ", jokeId)
        const response = await api.delete(`/jokes/delete/${jokeId}`);
        console.log("error: ", error)
        console.log(response.data, response.status);
        console.log("header: ", response.headers.get());
        
        
    } catch (error) {
        setError(error);
    } finally {
        setLoading(false);
    }
}, [api]);



// we define a function to add a like on a joke by id 

  const addALike = useCallback(async (jokeId) => {
    setLoading(true);
    setError(null);

    try {
        const response = await api.post(`/jokes/${jokeId}/like`);
        const updatedJoke = response.data.data;

        // update list of jokes
        setJokes((prevJokes) =>
            prevJokes.map((joke) =>
                joke.id === jokeId ? updatedJoke : joke
            )
        );
        return updatedJoke;
    }

    catch (error) {
        setError(error.response?.data?.message || "Une erreur est survenue");
    } finally {
        setLoading(false);
    }
  }, [setJokes]);
   // we reset errors state

   const clearError = useCallback(() => {
         setError(null)
    }, []);

    return {
        jokes,
        currentJoke,
        loading,
        error,
        submitJoke,
        deleteJokeById,
        fetchJokes,
        fetchRandomJoke,
        addALike,
        clearError
    }

}